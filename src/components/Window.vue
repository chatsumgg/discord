<script lang="ts" setup>
import { XMarkIcon, MinusIcon } from "@heroicons/vue/24/solid";
import { ChevronUpDownIcon } from "@heroicons/vue/24/outline";


withDefaults(defineProps<{
  controls?: boolean
}>(), {
  controls: true
});

</script>

<template>

  <section class="relative inline-flex flex-col rounded-lg overflow-hidden">

    <!-- Window controls -->
    <header
      v-if="controls"
      class="flex absolute top-0 left-0 space-x-2 px-3 py-2.5 z-30">
      <button class="controls close"><XMarkIcon/></button>
      <button class="controls minimize"><MinusIcon/></button>
      <button class="controls maximize"><ChevronUpDownIcon/></button>
    </header>

    <!-- Window body -->
    <div class="flex h-full bg-[#313338]">
      <slot />
    </div>

  </section>

</template>

<style scoped lang="scss">

$macos-close-btn-color:    #ff5f56;
$macos-minimize-btn-color: #febc2e;
$macos-maximize-btn-color: #28c840;

.controls {
  @apply inline-flex items-center justify-center w-3 h-3 rounded-full;

  &.close {
    background-color: $macos-close-btn-color;
    svg { @apply text-black/60; }
  }
  &.minimize {
    background-color: $macos-minimize-btn-color;
    svg { @apply text-black/80; }
  }
  &.maximize {
    background-color: $macos-maximize-btn-color;
    svg { @apply text-black/80 -rotate-45; }
  }

  svg { @apply w-2.5 h-2.5; }

}


</style>

<style>

html {
  @apply bg-black;
}

</style>
