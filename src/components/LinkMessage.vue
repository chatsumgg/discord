<script lang="ts" setup>
import { ChevronRightIcon } from "@heroicons/vue/20/solid"


defineProps<{
  guildName: string,
  guildImg: string,
}>();

</script>

<template>

  <span
    class="
      relative top-[2px]
      inline-flex items-center
      text-[#c9cdfb] transition-colors hover:text-white
      bg-[#3d4376] hover:bg-[#5765f2] cursor-pointer
      font-discord font-medium rounded-[3px]">

    <img
      class="h-4 w-4 rounded-full mr-1 ml-[4px]"
      :src="guildImg"
      :alt="guildName" />

    {{ guildName }}

    <ChevronRightIcon class="inline-block w-2.5 h-2.5 mx-1" />

    <svg
      class="text-[#c9cdfb] h-4 w-4 inline-block mr-1"
      aria-label="Message"
      aria-hidden="false"
      role="img"
      width="24" height="24"
      fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M12 22a10 10 0 1 0-8.45-4.64c.13.19.11.44-.04.61l-2.06 2.37A1 1 0 0 0 2.2 22H12Z" class=""></path>
    </svg>

  </span>


</template>

<style>
</style>
