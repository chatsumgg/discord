<script lang="ts" setup>
import SpecialMessage from "@/components/SpecialMessage.vue";

defineProps<{
  username: string,
}>();

</script>

<template>
  <SpecialMessage>@{{ username }}</SpecialMessage>
</template>

<style>
</style>
