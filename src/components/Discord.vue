<script lang="ts" setup>
import Window from "@/components/Window.vue";
import ChannelsGroup from "@/components/ChannelsGroup.vue";
import GuildNavigation from "@/components/GuildNavigation.vue";
import Guilds from "@/components/Guilds.vue";
import Chat from "@/components/Chat.vue";


withDefaults(defineProps<{
  height: number,
  width: number,
  scale?: number,
  hideChat?: boolean,
  hideGuilds?: boolean,
  hideNavigation?: boolean,
  controls?: boolean,
  disabledScroll?: boolean,
  guilds: InstanceType<typeof Guilds>["$props"]["guilds"],
  navigation: InstanceType<typeof GuildNavigation>["$props"],
  channelGroups: InstanceType<typeof ChannelsGroup>["$props"][],
  chat: InstanceType<typeof Chat>["$props"],
}>(), {
  scale: 1,
  hideChat: false,
  hideGuilds: false,
  hideNavigation: false,
});

</script>

<template>

  <div
    :style="{
      width:  (width  * scale) + 'px',
      height: (height * scale) + 'px',
    }">

    <Window
      class="[& .dark]:border-none border border-gray-300"
      :controls="controls"
      :style="{
        width:     width + 'px',
        height:    height + 'px',
        transform: `scale(${scale})`,
        left:      `-${width * (1 - scale) / 2}px`,
        top:       `-${height * (1 - scale) / 2}px`,
      }">

      <Guilds
        v-if="!hideGuilds"
        class="absolute top-0 pt-8 h-full"
        :disable-scroll="disabledScroll"
        :guilds="guilds"
      />

      <GuildNavigation
        v-if="!hideNavigation"
        class="ml-[72px] h-full"
        :guild-name="navigation.guildName"
        :username="navigation.username"
        :avatar="navigation.avatar">

        <template #channels>

          <ChannelsGroup
            v-for="channelGroup in channelGroups"
            :key="channelGroup.name"
            :name="channelGroup.name"
            :channels="channelGroup.channels"
          />

        </template>

      </GuildNavigation>

      <Chat
        v-if="!hideChat"
        class="flex-1"
        :mobile="chat.mobile"
        :type="chat.type"
        :input-content="chat.inputContent"
        :restricted="chat.restricted"
        :unread-count="chat.unreadCount"
        :messages="chat.messages"
        :command="chat.command"
        :hide-command="chat.hideCommand"
        :bot="chat.bot"
        :name="chat.name"
        :avatar="chat.avatar">

        <div>
          <slot name="messages" />
        </div>

      </Chat>

    </Window>

  </div>

</template>

<style>
</style>
