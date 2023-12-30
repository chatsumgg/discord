<script lang="ts" setup>
withDefaults(defineProps<{
  img: string,
  notifications?: number,
  active?: boolean,
  unread?: boolean,
}>(), {
  active: false,
  notifications: 0,
  unread: false,
});
</script>

<template>

  <div class="flex items-center">

    <!-- Notification white left chip -->
    <div
      v-if="notifications > 0 || unread"
      class="absolute -left-1 w-2 h-2 rounded-full bg-[#F2F3F5] group-hover:h-5 transition-all" />

    <!-- Guild chip -->
    <div
      class="relative flex items-center justify-center w-12 h-12 cursor-pointer bg-gray-700"
      :class="[active ? 'rounded-lg' : 'rounded-full']">

      <img :class="[active ? 'rounded-2xl' : 'rounded-full']" :src="img" />

      <div class="absolute bottom-0 right-0 z-10 transform-gpu pointer-events-none">
        <span
          v-if="notifications > 0"
          class="
          flex items-center justify-center
          overflow-hidden
          h-4 min-w-[16px] rounded-full
          outline outline-[4px] outline-[#1e1f22]
          bg-red-500
          text-xs text-center text-white
          font-bold
          font-discord"
          :style="{ width: (notifications.toString().length + 1) + 'ch' }">
          {{ notifications }}
        </span>
      </div>

    </div>

  </div>

</template>

<style>
</style>
