<script lang="ts" setup>
import Avatar from "@/components/Avatar.vue";
import UnreadCount from "@/components/UnreadCount.vue";


withDefaults(defineProps<{
  type?: 'channel' | 'dm',
  bot?: boolean,
  mobile?: boolean,
  name: string,
  restricted?: boolean,
  avatar?: string,
  unreadCount?: number,
}>(), {
  bot: false,
  mobile: false,
  unreadCount: 0,
  type: 'channel',
});

</script>

<template>

  <header
    class="
      relative
      flex items-center flex-col
      shadow-sm shadow-black/20
      bg-white dark:bg-[#313338]"
    :class="[mobile ? 'h-[60px]' : 'h-[48px]']">

    <div class="flex justify-between w-full h-full p-2">

      <div class="inline-flex items-center">

        <!-- Channel type header -->

        <template v-if="type === 'channel'">

          <svg
            v-if="restricted"
            class="chan-icon"
            aria-hidden="true" role="img"
            viewBox="0 0 24 24">
            <path fill="currentColor" fill-rule="evenodd" d="M16 4h.5v-.5a2.5 2.5 0 0 1 5 0V4h.5a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Zm4-.5V4h-2v-.5a1 1 0 1 1 2 0Z" clip-rule="evenodd"></path>
            <path fill="currentColor" d="M12.5 8c.28 0 .5.22.5.5V9c0 .1 0 .2.02.31.03.34-.21.69-.56.69H9.85l-.67 4h4.97l.28-1.68c.06-.34.44-.52.77-.43a3 3 0 0 0 .8.11c.27 0 .47.24.43.5l-.25 1.5H20a1 1 0 1 1 0 2h-4.15l-.86 5.16a1 1 0 0 1-1.98-.32l.8-4.84H8.86l-.86 5.16A1 1 0 0 1 6 20.84L6.82 16H3a1 1 0 1 1 0-2h4.15l.67-4H4a1 1 0 1 1 0-2h4.15l.86-5.16a1 1 0 1 1 1.98.32L10.19 8h2.31Z"></path>
          </svg>

          <svg
            v-else
            class="chan-icon"
            x="0" y="0"
            aria-hidden="true"
            role="img"
            viewBox="0 0 24 24">
            <path fill="currentColor" fill-rule="evenodd" d="M10.99 3.16A1 1 0 1 0 9 2.84L8.15 8H4a1 1 0 0 0 0 2h3.82l-.67 4H3a1 1 0 1 0 0 2h3.82l-.8 4.84a1 1 0 0 0 1.97.32L8.85 16h4.97l-.8 4.84a1 1 0 0 0 1.97.32l.86-5.16H20a1 1 0 1 0 0-2h-3.82l.67-4H21a1 1 0 1 0 0-2h-3.82l.8-4.84a1 1 0 1 0-1.97-.32L15.15 8h-4.97l.8-4.84ZM14.15 14l.67-4H9.85l-.67 4h4.97Z" clip-rule="evenodd" class=""></path>
          </svg>

        </template>

        <Avatar
          v-else
          class="ml-2 mr-3" size="sm" :img="avatar!" />

        <span class="font-discord font-semibold antialiased-none leading-5 dark:text-white text-[#060607]">
          {{ name }}
        </span>

        <span
          v-if="bot"
          class="ml-2 inline-flex items-center text-white text-[10px] leading-[15px] px-1 rounded-sm bg-[#5765f2]">
          <svg class="-ml-1" aria-hidden="false" role="img" width="16" height="16" fill="none" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M18.7 7.3a1 1 0 0 1 0 1.4l-8 8a1 1 0 0 1-1.4 0l-4-4a1 1 0 1 1 1.4-1.4l3.3 3.29 7.3-7.3a1 1 0 0 1 1.4 0Z" clip-rule="evenodd" class=""></path></svg>
          BOT
        </span>

      </div>

      <!-- Fake member icon -->
      <div
        v-if="type === 'channel'"
        class="inline-flex items-center justify-center w-10 h-full">

        <svg
          class="w-6 h-6 dark:text-[#b5b9c1] text-[#4e4f58]"
          x="0" y="0"
          aria-hidden="true"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24">
          <path fill="currentColor" d="M14.5 8a3 3 0 1 0-2.7-4.3c-.2.4.06.86.44 1.12a5 5 0 0 1 2.14 3.08c.01.06.06.1.12.1ZM18.44 17.27c.15.43.54.73 1 .73h1.06c.83 0 1.5-.67 1.5-1.5a7.5 7.5 0 0 0-6.5-7.43c-.55-.08-.99.38-1.1.92-.06.3-.15.6-.26.87-.23.58-.05 1.3.47 1.63a9.53 9.53 0 0 1 3.83 4.78ZM12.5 9a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM2 20.5a7.5 7.5 0 0 1 15 0c0 .83-.67 1.5-1.5 1.5a.2.2 0 0 1-.2-.16c-.2-.96-.56-1.87-.88-2.54-.1-.23-.42-.15-.42.1v2.1a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2.1c0-.25-.31-.33-.42-.1-.32.67-.67 1.58-.88 2.54a.2.2 0 0 1-.2.16A1.5 1.5 0 0 1 2 20.5Z" class=""></path>
        </svg>

      </div>

    </div>


    <div
      v-if="unreadCount > 0"
      class="absolute top-full -ml-t-px z-10 w-full px-4">
      <UnreadCount :count="unreadCount" since="10:00 AM" />
    </div>

  </header>

</template>

<style scoped>
.chan-icon {
  @apply h-6 w-6 mx-2 dark:text-[#80848e] text-[#4e4f58];
}
</style>
