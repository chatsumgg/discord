<script lang="ts" setup>

const props = withDefaults(defineProps<{
  img: string,
  size?: 'sm' | 'md',
  status?: 'online' | 'offline' | 'invisible'
}>(), {
  size: 'md',
  status: 'online',
});


const statusClass = ({
  'online':    'bg-[#43b581]',
  'offline':   'border-[2px] border-[#80848e] bg-[#232429]',
  'invisible': 'bg-[#747f8d]',
})[props.status];

</script>

<template>

  <div class="relative">
    <img
      class="rounded-full"
      :class="[size === 'sm' ? 'w-6 h-6' : 'w-[32px] h-[32px]']"
      :src="img" />
    <div
      class="
        absolute bottom-0 right-0
        rounded-full outline outline-[#232429]"
      :class="[
        size === 'sm' ? 'w-[8px] h-[8px]' : 'w-[10px] h-[10px]',
        statusClass
      ]" />
  </div>

</template>

<style>
</style>
