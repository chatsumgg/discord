<script lang="ts" setup>
import ChatHeader from "@/components/ChatHeader.vue";
import ChatInput from "@/components/ChatInput.vue";
import Message from "@/components/Message.vue";
import CommandPanel from "@/components/CommandPanel.vue";


withDefaults(defineProps<{
  type: 'channel' | 'dm',
  inputContent?: string,
  restricted?: boolean,
  unreadCount?: number,
  messages?: InstanceType<typeof Message>["$props"][],
  command?: {
    matchedCommand: string,
    botName: string,
    botAvatar: string,
    name: string,
    description?: string,
  },
  hideCommand?: boolean,
  name: string,
  avatar?: string,
}>(), {
  unreadCount: 0,
  inputContent: '',
  type: 'channel',
  restricted: false,
});

</script>

<template>

  <div class="flex flex-col">

    <ChatHeader
      :type="type"
      :name="name"
      :avatar="avatar"
      :unread-count="unreadCount"
      :restricted="restricted" />

    <div class="flex flex-col flex-1 pb-4 overflow-scroll scrollbar-hide text-white">

      <Message
        v-for="message in messages"
        :key="message.content"
        :author="message.author"
        :avatar="message.avatar"
        :date="message.date"
        :bot="message.bot"
        :ephemeral="message.ephemeral"
        :ephemeral-user="message.ephemeralUser"
        :ephemeral-user-avatar="message.ephemeralUserAvatar"
        :command-used="message.commandUsed"
        :mention="message.mention"
        :waiting-command="message.waitingCommand"
        :content="message.content">
      </Message>

    </div>

    <footer class="flex w-full h-[68px] bg-[#313338]">

      <div class="relative w-full flex-1 px-4">

        <CommandPanel
          v-if="command && !hideCommand"
          class="absolute left-4 right-4 bottom-full"
          :matched-command="command.matchedCommand"
          :bot-name="command.botName"
          :bot-avatar="command.botAvatar"
          :command-name="command.name"
          :command-description="command.description" />

        <ChatInput
          class="flex-1 w-full"
          :content="inputContent"
          :recipient="name" />

      </div>

    </footer>

  </div>

</template>

<style>
</style>
