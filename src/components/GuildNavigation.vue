<script lang="ts" setup>
import { ChevronDownIcon } from "@heroicons/vue/20/solid";
import { microphone, mute, settings } from "@/assets/svg";
import Avatar from "@/components/Avatar.vue";

withDefaults(defineProps<{
  guildName: string,
  avatar: string,
  username: string,
}>(), {
});

</script>

<template>

  <nav class="flex flex-col w-[240px] dark:bg-[#2b2d31] bg-[#f2f3f5]">

    <header class="flex items-center justify-between px-4 h-12 border-b-[1.5px] border-neutral-900/50 hover:bg-[#37383d]">
      <h1 class="font-discord text-[#F2F3F5] font-semibold leading-5 antialiased-none">{{ guildName }}</h1>
      <ChevronDownIcon class="w-5 h-5 text-[#b5b9c1]" />
    </header>

    <div class="flex-1 pr-2 overflow-y-auto scrollbar-hide mb-3">
      <slot name="channels" />
    </div>

    <div class="flex items-center px-2 h-[52px] dark:bg-[#232429] bg-[#ebedef]">

      <div class="flex items-center pl-[2px]">

        <!-- Profile -->
        <div class="flex items-center flex-1 min-w-[120px] pl-[2px] mr-2">

          <!-- Profile picture -->

          <Avatar :img="avatar" />

          <!-- Username & status -->
          <div class="flex flex-col py-1 pl-2">
            <div class="text-sm leading-[18px] font-discord subpixel-antialiased dark:text-[#F2F3F5] text-[#060607]">
              {{ username }}
            </div>
            <div class="text-xs leading-[16px] subpixel-antialiased font-discord dark:text-white/60 text-[#4e5059]">
              Online
            </div>
          </div>

        </div>

        <!-- Action buttons -->
        <div class="flex items-stretch">
          <div class="panel-button"><i v-html="microphone" /></div>
          <div class="panel-button"><i v-html="mute" /></div>
          <div class="panel-button"><i v-html="settings" /></div>
        </div>

      </div>

    </div>

  </nav>

</template>

<style scoped>
.panel-button {
  @apply inline-flex items-center justify-center w-8 h-8;
}
</style>
