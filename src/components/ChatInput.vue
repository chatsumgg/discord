<script lang="ts" setup>
defineProps<{
  content?: string,
  recipient: string,
}>();
</script>

<template>

  <div class="inline-flex h-11 bg-[#383a40] rounded-md">

    <!-- Fake add icon -->
    <div class="inline-flex items-center px-4 py-[10px]">
      <svg
        class="w-6 h-6 fill-[#b5b9c1]"
        aria-hidden="true"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" fill="transparent" class="">
        </circle><path d="M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22Zm0-17a1 1 0 0 1 1 1v4h4a1 1 0 1 1 0 2h-4v4a1 1 0 1 1-2 0v-4H7a1 1 0 1 1 0-2h4V7a1 1 0 0 1 1-1Z" clip-rule="evenodd" ></path>
      </svg>
    </div>

    <div
      class="flex-1 py-[11px] pr-[10px] font-discord !subpixel-antialiased whitespace-nowrap"
      :class="[content ? 'text-[#dbdee1]' : 'text-[#6d6f78]']">
      <template v-if="content">{{ content }}</template>
      <template v-else>Message {{ recipient }}</template>
    </div>

    <!-- Fake emoji selector button -->
    <img src='data:image/png;base64,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'/>

    <!-- Fake send button -->
    <div class="relative flex ml-2 before:absolute before:top-1/2 before:-translate-y-1/2 before:w-px before:h-[65%] before:bg-[#42444b]">
      <div class="flex items-center justify-center p-1 ml-3 mr-4">
        <svg
          class="w-5 h-5"
          :class="[content ? 'text-[#949cf7]' : 'text-[#b5b9c1]']"
          aria-hidden="true"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"><path fill="currentColor" d="m5.1 10.02 7.4 1.39a.6.6 0 0 1 0 1.18L5.1 14l-2.94 5.87a1.48 1.48 0 0 0 1.99 1.98l17.03-8.52a1.48 1.48 0 0 0 0-2.64L4.15 2.16a1.48 1.48 0 0 0-1.99 1.98l2.94 5.88Z" class=""></path></svg>
      </div>
    </div>

  </div>

</template>

<style>
</style>
