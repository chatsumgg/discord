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


const messages = [
  {
    author: 'InFidel Castro (i miss my wife)',
    avatar: "https://cdn.discordapp.com/avatars/569277281046888488/f25fecc49cc44f7dfb11afe72ae074aa.png?size=80",
    content: "ye i‘m gonna play an iconic song that germans relate to christmas a lot of them are independant from me",
    date: "Today at 3:55 PM",
  },
  {
    content: "@geauser ye i‘m gonna play an iconic song that germans relate to christmas a lot of them are independant from me",
  },
  {
    author: '[HR] Lilliana / Gymbrat',
    avatar: "https://cdn.discordapp.com/guilds/847106968103026699/users/171645981677322242/avatars/ddefe69603cb2bd1d48676ae232a6181.png?size=128",
    content: "Its an old lady name",
    date: "Today at 3:56 PM"
  },
  {
    author: 'anni :)',
    bot: true,
    avatar: "https://cdn.discordapp.com/avatars/412902091443535872/2d2dd6bced3d5d81ca5dc2f2b6c3defa.png?size=80",
    content: `when i see calcium i think of calcium @(type='link:message' guildName='Chatsum' guildImg='https://cdn.discordapp.com/icons/1177981174547750953/2a8210181d3c17234866124638b28377.webp?size=96')`,
    date: "Today at 3:56 PM"
  },
  {
    author: 'InFidel Castro (i miss my wife)',
    avatar: "https://cdn.discordapp.com/avatars/569277281046888488/f25fecc49cc44f7dfb11afe72ae074aa.png?size=80",
    content: "I was doing before and can actually create a shelf with my guy friends so much fucking dopamine out of the gym",
    date: "Today at 3:56 PM"
  },
  {
    author: '𐤋𐤊𐤄',
    avatar: "https://cdn.discordapp.com/avatars/360413713116954625/0e0c076e5e04903788d14aedf4b9752c.png?size=80",
    content: "It really is @(type='link:channel' channelName='general' guildName='Chatsum' guildImg='https://cdn.discordapp.com/icons/1177981174547750953/2a8210181d3c17234866124638b28377.webp?size=96')",
    date: "Today at 3:56 PM"
  },
  {
    author: 'InFidel Castro (i miss my wife)',
    avatar: "https://cdn.discordapp.com/avatars/569277281046888488/f25fecc49cc44f7dfb11afe72ae074aa.png?size=80",
    content: "They be cracking down on the spectrum but she doesnt know what I did like 1/4 ronnies leg press :>",
    date: "Today at 3:56 PM"
  },
  {
    author: '[HR] Lilliana / Gymbrat',
    avatar: "https://cdn.discordapp.com/guilds/847106968103026699/users/171645981677322242/avatars/ddefe69603cb2bd1d48676ae232a6181.png?size=128",
    content: "my middle name is even worse",
    date: "Today at 3:56 PM"
  },
  {
    author: 'Chatsum',
    ephemeral: true,
    ephemeralTarget: 'Geauser',
    commandUsed: '/summarize',
    bot: true,
    waitingCommand: false,
    ephemeralUserAvatar: "https://cdn.discordapp.com/avatars/222452423522779136/d571c29d351e10ae96f1d63840e88714.webp?size=32",
    avatar: "https://cdn.discordapp.com/icons/1177981174547750953/2a8210181d3c17234866124638b28377.webp?size=96') when i see calcium i think of calcium @(type='link:message' guildName='Chatsum' guildImg='https://cdn.discordapp.com/icons/1177981174547750953/2a8210181d3c17234866124638b28377.webp?size=96",
    content: "Maecenas sed diam eget risus varius blandit sit amet non magna.",
  },
];

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
        :ephemeral-user="message.ephemeralTarget"
        :ephemeral-user-avatar="message.ephemeralUserAvatar"
        :command-used="message.commandUsed"
        :mention="message.mention"
        :waiting-command="message.waitingCommand"
        :content="message.content">
      </Message>

    </div>

    <footer class="flex w-full h-[68px] bg-[#313338]">

      <div class="relative w-full flex-1 px-4">

        <!-- https://cdn.discordapp.com/icons/1177981174547750953/2a8210181d3c17234866124638b28377.webp?size=96 -->

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
