<script lang="ts" setup>

withDefaults(defineProps<{
  name: string,
  restricted?: boolean,
  unread?: boolean,
  notifications?: number,
  selected?: boolean,
  type: 'voice' | 'text',
}>(), {
  type: 'text',
  restricted: false,
  unread: false,
  notifications: 0,
  selected: false,
});
</script>

<template>

  <div class="relative overflow-hidden">

    <div
      v-if="unread || notifications > 0"
      class="absolute -left-1 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#F2F3F5] group-hover:h-5 transition-all" />


    <div
      class="flex items-center px-2 ml-2 py-[6px] cursor-pointer rounded-md"
      :class="[
        selected ? 'bg-[#404248]' : 'hover:bg-[#37383d]'
      ]">

      <template v-if="type === 'text'">

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

      <template v-if="type === 'voice'">

        <svg
          v-if="restricted"
          class="chan-icon"
          aria-hidden="true" role="img"
          viewBox="0 0 24 24">
          <path fill="currentColor" fill-rule="evenodd" d="M16 4h.5v-.5a2.5 2.5 0 0 1 5 0V4h.5a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Zm4-.5V4h-2v-.5a1 1 0 1 1 2 0Z" clip-rule="evenodd" class=""></path><path fill="currentColor" d="M11 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1h-.06a1 1 0 0 1-.74-.32L5.92 17H3a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h2.92l4.28-4.68a1 1 0 0 1 .74-.32H11ZM20.5 12c-.28 0-.5.22-.52.5a7 7 0 0 1-5.13 6.25c-.48.13-.85.55-.85 1.05v.03c0 .6.52 1.06 1.1.92a9 9 0 0 0 6.89-8.25.48.48 0 0 0-.49-.5h-1ZM16.5 12c-.28 0-.5.23-.54.5a3 3 0 0 1-1.33 2.02c-.35.23-.63.6-.63 1.02v.14c0 .63.59 1.1 1.16.83a5 5 0 0 0 2.82-4.01c.02-.28-.2-.5-.48-.5h-1Z" class=""></path>
        </svg>

        <svg
          v-else
          class="chan-icon"
          x="0" y="0"
          aria-hidden="true"
          role="img"
          viewBox="0 0 24 24">
          <path fill="currentColor" d="M12 3a1 1 0 0 0-1-1h-.06a1 1 0 0 0-.74.32L5.92 7H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2.92l4.28 4.68a1 1 0 0 0 .74.32H11a1 1 0 0 0 1-1V3ZM15.1 20.75c-.58.14-1.1-.33-1.1-.92v-.03c0-.5.37-.92.85-1.05a7 7 0 0 0 0-13.5A1.11 1.11 0 0 1 14 4.2v-.03c0-.6.52-1.06 1.1-.92a9 9 0 0 1 0 17.5Z"></path>
          <path fill="currentColor" d="M15.16 16.51c-.57.28-1.16-.2-1.16-.83v-.14c0-.43.28-.8.63-1.02a3 3 0 0 0 0-5.04c-.35-.23-.63-.6-.63-1.02v-.14c0-.63.59-1.1 1.16-.83a5 5 0 0 1 0 9.02Z"></path>
        </svg>

      </template>

      <span
        class="font-discord text-base leading-5 font-medium text-nowrap overflow-ellipsis overflow-hidden max-w-full flex-1"
        :class="[
          (unread || notifications > 0 || selected) ? 'text-white' : 'text-[#949ba4]'
        ]">
        {{ name }}
      </span>

      <div
        v-if="notifications > 0"
        class="
          ml-3
          h-4 min-w-[16px] rounded-full
          text-xs text-center text-white
          bg-red-500 pr-px mt-px
          tracking-[0.02em]
          font-bold font-discord"
        :style="{ width: (notifications.toString().length + 1) + 'ch' }">
        {{ notifications }}
      </div>

    </div>

  </div>

</template>

<style scoped>
.chan-icon {
  @apply h-5 w-5 text-[#80848e] mr-[6px] flex-shrink-0;
}
</style>
