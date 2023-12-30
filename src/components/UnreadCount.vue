<script lang="ts" setup>
defineProps<{
  count: number,
  since: string,
}>();

</script>

<template>

<div class="
  flex items-center justify-between h-8
  -mt-px
  bg-[#5562e9] rounded-b-md shadow-sm">

  <div class="
    text-sm text-white font-discord font-semibold
    px-3 text-ellipsis overflow-hidden whitespace-nowrap
    !subpixel-antialiased">
    <span>{{ count }}+ new messages since {{ since }}</span>
  </div>

  <div class="
    inline-flex items-center px-3
    font-discord text-white text-sm font-semibold !subpixel-antialiased whitespace-nowrap">

    Mark as read

    <!-- Mark as read icon -->
    <svg
      class="fill-white ml-2 w-4 h-4"
      aria-hidden="true"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24">
      <path fill="currentColor" d="M12.66 21.98c.4-.03.56-.51.28-.8l-.06-.06a3 3 0 1 1 4.24-4.24l.53.52c.2.2.5.2.7 0l2.53-2.52a3 3 0 0 1 .64-.5c.14-.07.24-.2.27-.34a10 10 0 1 0-18.24 3.32c.13.19.11.44-.04.61l-2.06 2.37A1 1 0 0 0 2.2 22H12c.22 0 .44 0 .66-.02Z" class=""></path><path fill="currentColor" d="M23.7 17.7a1 1 0 0 0-1.4-1.4L18 20.58l-2.3-2.3a1 1 0 0 0-1.4 1.42l3 3a1 1 0 0 0 1.4 0l5-5Z" />
    </svg>

  </div>

</div>

</template>

<style>
</style>
