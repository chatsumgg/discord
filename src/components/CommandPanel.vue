<script lang="ts" setup>
defineProps<{
  matchedCommand: string,
  botName: string,
  botAvatar: string,
  commandName: string,
  commandDescription?: string,
}>();
</script>

<template>

  <div class="pb-2 mb-3 bg-[#2b2d31] rounded-[4px] border border-gray-800/80 shadow-lg">

    <div>

      <div class="p-2">
        <h3 class="text-xs py-1 font-discord font-semibold text-[#b5bac1]">
          COMMANDS MATCHING
          <strong class="text-white">{{ matchedCommand }}</strong>
        </h3>

      </div>

      <div class="flex items-center px-2 h-[56px] bg-[#36373d] mx-2 rounded-sm">

        <div class="flex flex-1 items-center">

          <img
            :src="botAvatar"
            class="h-8 w-8 rounded-full bg-white" />

          <div class="flex-1 ml-4">
            <div class="font-discord font-medium leading-5 text-white">{{ commandName }}</div>
            <div class="text-[11px] font-discord font-medium !subpixel-antialiased text-[#b5bac1] text-ellipsis overflow-hidden whitespace-nowrap">
              <span>{{ commandDescription }}</span>
            </div>
          </div>

        </div>

        <div class="flex items-center text-xs font-discord h-full text-[#B5BAC1]">
          {{ botName }}
        </div>

      </div>

    </div>

  </div>

</template>

<style>
</style>
