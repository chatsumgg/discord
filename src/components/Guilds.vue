<script lang="ts" setup>
import Guild from "@/components/Guild.vue";


withDefaults(defineProps<{
  disableScroll?: boolean,
  guilds: InstanceType<typeof Guild>["$props"][],
}>(), {
  disableScroll: false,
});

</script>

<template>

  <nav
    class="w-[72px] dark:bg-[#2f3136] bg-[#e3e5e8]">

    <ul
      class="space-y-2 w-full h-full pb-6 scrollbar-hide"
      :class="[disableScroll ? 'overflow-hidden' : 'overflow-y-auto']">

      <li class="flex flex-col items-center justify-center mb-2">

        <div
          class="
            flex items-center justify-center w-12 h-12 rounded-full
            dark:bg-[#313338] bg-white">
          <svg
            class="w-[38px] h-[38px] dark:fill-[#dadde1] fill-[#313339]"
            x="0px" y="0px"
            viewBox="0 0 64 64">
            <path d="M48.584,16.847c0,0,7.416,8.589,7.416,24.061v3.244c0,0-9.366,6.103-12.22,6.103l-2.769-4.026	c1.721-0.771,4.068-2.109,4.068-2.109l-0.858-0.664c0,0-5.487,2.542-12.221,2.542s-12.221-2.542-12.221-2.542l-0.858,0.664	c0,0,2.347,1.338,4.068,2.109l-2.769,4.026C17.366,50.255,8,44.152,8,44.152v-3.244c0-15.472,7.416-24.061,7.416-24.061	s5.073-2.456,9.757-3.102l1.454,2.755c0,0,2.31-0.535,5.373-0.535s5.373,0.535,5.373,0.535l1.453-2.755	C43.511,14.391,48.584,16.847,48.584,16.847z M24.009,38.647c2.36,0,4.274-2.149,4.274-4.801c0-2.651-1.913-4.801-4.274-4.801	s-4.274,2.149-4.274,4.801C19.735,36.498,21.648,38.647,24.009,38.647z M39.991,38.647c2.36,0,4.274-2.149,4.274-4.801	c0-2.651-1.914-4.801-4.274-4.801s-4.274,2.149-4.274,4.801C35.717,36.498,37.631,38.647,39.991,38.647z"></path>
          </svg>
        </div>

        <div class="w-8 mt-2 bg-gray-500/40 h-[2px]" />

      </li>

      <li
        v-for="guild in guilds"
        class="relative flex flex-col group justify-center items-center w-full">
        <Guild
          :notifications="guild.notifications"
          :img="guild.img"
          :active="guild.active"
          :unread="guild.unread" />
      </li>

    </ul>

  </nav>

</template>

<style>
</style>
