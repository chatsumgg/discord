<script lang="ts" setup>
import LinkChannel from "@/components/LinkChannel.vue";
import LinkMessage from "@/components/LinkMessage.vue";
import Mention from "@/components/Mention.vue";
import { computed } from "vue";

const props = withDefaults(defineProps<{
  author?: string,
  authorColor?: string,
  avatar?: string,
  ephemeral?: boolean,
  ephemeralUser?: string,
  ephemeralUserAvatar?: string,
  commandUsed?: string,
  hideAuthor?: boolean,
  mention?: boolean,
  date?: string,
  content?: string,
  bot?: boolean,
  waitingCommand?: boolean,
}>(), {
  content: '',
});


const richContent = computed<any[]>(() => {

  const richMessageRegex = /@\(([^)]*)\)/g;
  const mentionRegex = /@(\w+)/g;
  let match, lastIndex = 0, result = [];

  // Detect rich messages (links to channels, messages, etc.)
  while ((match = richMessageRegex.exec(props.content)) !== null) {

    if (match.index > lastIndex) {
      result.push(props.content.slice(lastIndex, match.index) as string);
    }

    const richMessage = match[1].match(/[^=]*='[^']*'/g)?.reduce((acc, curr) => {
      const [key, value] = curr.split('=').map(str => str.trim());
      // @ts-expect-error
      acc[key] = value.slice(1, -1);
      return acc;
    }, {});

    result.push(richMessage);
    lastIndex = richMessageRegex.lastIndex;
  }

  // Detect @mentions
  while ((match = mentionRegex.exec(props.content)) !== null) {
    if (match.index > lastIndex) {
      result.push(props.content.slice(lastIndex, match.index) as string);
    }

    const mention = { type: 'mention', username: match[1] };
    result.push(mention);
    lastIndex = mentionRegex.lastIndex;
  }

  if (lastIndex < props.content.length) result.push(props.content.slice(lastIndex));

  return result;

});


</script>

<template>

  <div
    class="relative pl-[72px] pr-[48px] py-[1px] before:absolute before:left-0 font-discord transition-colors"
    :class="[
      waitingCommand ? 'opacity-70 pointer-events-none' : '',
      hideAuthor || !author ? '' : 'mt-[17px]',
      mention ? 'bg-[#484138] before:h-full before:w-[3px] before:bg-[#f0b131]' : '',
      (!waitingCommand && ephemeral) ? 'bg-[#333644] hover:bg-[#36394d] before:bg-[#5965f2]' : 'hover:bg-[#2d2f35]',
      ephemeral ? 'before:h-full before:w-[3px]' : ''
    ]">


    <div v-if="ephemeral" class="ephemereal relative text-sm text-[#b5bac1] mb-1">
      <span class="font-medium !text-white">
        <img
          class="inline-block rounded-full w-[16px] h-[16px] mb-px mr-1"
          :src="ephemeralUserAvatar" />
        {{ ephemeralUser }}
      </span> used <span class="font-medium hover:underline cursor-pointer text-[#00ACF8]">{{ commandUsed }}</span>
    </div>


    <div v-if="!hideAuthor && author">
      <img
        class="absolute top-1 left-4 w-[40px] h-[40px] rounded-full"
        :class="[ephemeral ? 'mt-[24px]' : '']"
        :src="avatar"
        :alt="author" />
    </div>

    <div class="flex flex-col items-baseline">

      <h3
        v-if="!hideAuthor && author"
        class="inline-flex items-center leading-4">
        <span class="text-[#f2f3f5] leading-[22px] font-medium mr-1 hover:underline underline-offset-2 cursor-pointer">{{ author }}</span>
        <span v-if="bot" class="inline-flex items-center text-white text-[10px] leading-[15px] px-1 rounded-sm bg-[#5765f2]">
          <svg class="-ml-1" aria-hidden="false" role="img" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M18.7 7.3a1 1 0 0 1 0 1.4l-8 8a1 1 0 0 1-1.4 0l-4-4a1 1 0 1 1 1.4-1.4l3.3 3.29 7.3-7.3a1 1 0 0 1 1.4 0Z" clip-rule="evenodd" class=""></path></svg>
          BOT
        </span>
        <span class="text-xs font-medium text-[#949ba4] ml-1">{{ date }}</span>
      </h3>

      <div class="-mt-px leading-[22px] text-[#DBDEE1]">

        <div
          v-if="waitingCommand"
          class="inline-flex items-center">

          <svg
            width="24.5"
            height="7"
            class="mr-2">
            <g style="opacity: 1;">
              <circle cx="3.5" cy="3.5" r="3.4999999999999996" fill="currentColor" style="opacity: 1;"></circle>
              <circle cx="12.25" cy="3.5" r="3.0625" fill="currentColor" style="opacity: 0.5625;"></circle>
              <circle cx="21" cy="3.5" r="2.8000000000000003" fill="currentColor" style="opacity: 0.3;"></circle>
            </g>
          </svg>

          Sending command...
        </div>

        <slot>

          <template
            v-if="!waitingCommand"
            v-for="content in richContent">

            <template v-if="typeof content === 'string'">{{ content }}</template>

            <LinkMessage
              v-else-if="content?.type === 'link:message'"
              :guild-name="content.guildName"
              :guild-img="content.guildImg" />

            <LinkChannel
              v-else-if="content?.type === 'link:channel'"
              :channel-name="content.channelName"
              :guild-name="content.guildName"
              :guild-img="content.guildImg" />

            <Mention
              v-else-if="content?.type === 'mention'"
              :username="content.username" />

          </template>


        </slot>
      </div>

      <div v-if="ephemeral">
        <div v-if="!waitingCommand" class="inline-flex items-center text-xs font-medium h-full mt-1">

          <svg
            class="mr-1 text-[#949ba4]"
            aria-hidden="true"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            width="16" height="16"
            fill="none"
            viewBox="0 0 24 24">
            <path fill="currentColor" d="M15.56 11.77c.2-.1.44.02.44.23a4 4 0 1 1-4-4c.21 0 .33.25.23.44a2.5 2.5 0 0 0 3.32 3.32Z"></path>
            <path fill="currentColor" fill-rule="evenodd" d="M22.89 11.7c.07.2.07.4 0 .6C22.27 13.9 19.1 21 12 21c-7.11 0-10.27-7.11-10.89-8.7a.83.83 0 0 1 0-.6C1.73 10.1 4.9 3 12 3c7.11 0 10.27 7.11 10.89 8.7Zm-4.5-3.62A15.11 15.11 0 0 1 20.85 12c-.38.88-1.18 2.47-2.46 3.92C16.87 17.62 14.8 19 12 19c-2.8 0-4.87-1.38-6.39-3.08A15.11 15.11 0 0 1 3.15 12c.38-.88 1.18-2.47 2.46-3.92C7.13 6.38 9.2 5 12 5c2.8 0 4.87 1.38 6.39 3.08Z" clip-rule="evenodd"></path>
          </svg>

          <span class="text-[#949ba4] mr-1">Only you can see this • </span>

          <span class="text-[#00a8fc] hover:underline cursor-pointer">Dismiss message</span>

        </div>
      </div>

    </div>

  </div>

</template>

<style scoped>

.ephemereal::before {

    --spine-width: 2px;
    --reply-spacing: 4px;
    --gutter: 16px;
    --avatar-size: 40px;
    --custom-message-spacing-vertical-container-cozy: 17px;

    content: "";
    display: block;
    position: absolute;
    box-sizing: border-box;
    top: 50%;
    right: 100%;
    bottom: 0;
    height: calc(100% - 6px);
    left: calc(-1*(.5*var(--avatar-size) + var(--gutter)));
    margin-right: var(--reply-spacing);
    margin-top: calc(-.5 * var(--spine-width));
    margin-left: calc(-.5 * var(--spine-width));
    margin-bottom: calc(-4px + var(--custom-message-spacing-vertical-container-cozy));
    border-color: #4e5058;
    border-width: var(--spine-width) 0 0 var(--spine-width);
    border-style: solid;
    border-top-left-radius: 6px;

}

</style>
