<script lang="ts" setup>
defineProps<{
  username: string,
}>();

</script>

<template>

  <span
    class="
      inline-flex items-center
      text-[#c9cdfb] transition-colors
      bg-[#3d4376] hover:bg-[#5765f2]
      hover:text-white cursor-pointer
      px-1
      font-discord subpixel-antialiased font-medium rounded-[3px]">
    @{{ username }}
  </span>

</template>

<style>
</style>
