<script lang="ts" setup>
import Channel from "@/components/Channel.vue";
import { ChevronDownIcon, PlusIcon } from '@heroicons/vue/20/solid';


defineProps<{
  name: string,
  channels: InstanceType<typeof Channel>["$props"][],
}>();

</script>

<template>

  <div class="w-full pt-4">

    <h3 class="flex items-center relative text-[#949ba4] font-discord subpixel-antialiased font-semibold text-xs pl-5 pr-2.5 leading-6">
      <ChevronDownIcon class="absolute left-1.5 w-3 h-3 text-[#949ba4]" />
      {{ name }}
      <PlusIcon class="absolute right-2 w-[18px] h-[18px] text-[#949ba4]" />
    </h3>

    <ul class="space-y-[2px]">
      <li v-for="channel in channels">
        <Channel
          :name="channel.name"
          :unread="channel.unread"
          :notifications="channel.notifications"
          :restricted="channel.restricted"
          :selected="channel.selected"
          :type="channel.type" />
      </li>
    </ul>

  </div>

</template>

<style>
</style>
