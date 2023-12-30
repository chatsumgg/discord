<script lang="ts" setup>
import { ChevronRightIcon } from "@heroicons/vue/20/solid";


defineProps<{
  guildName: string,
  guildImg?: string,
  channelName?: string,
}>();

</script>

<template>

  <span
    class="
      relative top-[2px]
      inline-flex items-center
      text-[#c9cdfb] transition-colors hover:text-white
      bg-[#3d4376] hover:bg-[#5765f2] cursor-pointer
      font-discord subpixel-antialiased font-medium rounded-[3px]">

    <div class="inline-block overflow-hidden h-4 w-4 rounded-full mr-1 ml-[4px]">

      <img
        v-if="guildImg"
        class="w-full h-full"
        :src="guildImg"
        :alt="guildName" />

      <div v-else class="w-full h-full bg-gray-300"></div>

    </div>

    {{ guildName }}
    <ChevronRightIcon class="inline-block w-2.5 h-2.5 mx-0.5" />


    <div class="inline-flex items-center mr-1">

      <svg
        class="h-4 w-4 mr-1 text-[#c9cdfb]"
        x="0" y="0"
        aria-hidden="true"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24">
        <path fill="currentColor" fill-rule="evenodd" d="M10.99 3.16A1 1 0 1 0 9 2.84L8.15 8H4a1 1 0 0 0 0 2h3.82l-.67 4H3a1 1 0 1 0 0 2h3.82l-.8 4.84a1 1 0 0 0 1.97.32L8.85 16h4.97l-.8 4.84a1 1 0 0 0 1.97.32l.86-5.16H20a1 1 0 1 0 0-2h-3.82l.67-4H21a1 1 0 1 0 0-2h-3.82l.8-4.84a1 1 0 1 0-1.97-.32L15.15 8h-4.97l.8-4.84ZM14.15 14l.67-4H9.85l-.67 4h4.97Z" clip-rule="evenodd" class=""></path>
      </svg>

      {{ channelName }}

    </div>

  </span>


</template>

<style>
</style>
