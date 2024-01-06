<script setup lang="ts">
// import GuildNavigation from "@/components/GuildNavigation.vue";
// import Guilds from "@/components/Guilds.vue";
// import Window from "@/components/Window.vue";
// import ChannelsGroup from "@/components/ChannelsGroup.vue";
// import Chat from "@/components/Chat.vue";
import Message from "@/components/Message.vue";
import Discord from "@/components/Discord.vue";


const messages: InstanceType<typeof Message>["$props"][] = [

  {
    author: 'Chatsum',
    ephemeral: true,
    ephemeralUser: 'Geauser',
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
  <div class="flex justify-center items-center w-screen h-screen bg-white">


    <Discord
      class="w-[500px] h-[700px] scale-[0.8] border border-gray-300 shadow-lg"
      :hide-guilds="true"
      :hide-navigation="true"
      :guilds="[
          {
            img: 'https://cdn.discordapp.com/icons/613425648685547541/2cd82809b297ff88829e57ab94e1c92e.webp?size=96',
            notifications: 10,
          },
          {
            img: 'https://cdn.discordapp.com/icons/1126532593337241700/aa7c860d9c7c3b30a20fc2b4b878b4fb.webp?size=96',
            notifications: 0,
            unread: true,
          },
          {
            img: 'https://cdn.discordapp.com/icons/847106968103026699/63f19ad3d0a46d1680e6f08b45a6154c.webp?size=96',
            notifications: 24,
          },
          {
            img: 'https://cdn.discordapp.com/icons/818844825696206918/f526fdb221abf1dae6afbf4b1923dbfe.webp?size=96',
            notifications: 100,
          },
        ]"
      :navigation="{
        guildName: 'AUX ARMES LES PROLOS',
        username: 'Geauser',
        avatar: 'https://cdn.discordapp.com/avatars/222452423522779136/d571c29d351e10ae96f1d63840e88714.webp?size=32',
      }"
      :channel-groups="[
        {
          name: 'IMPORTANT',
          channels: [
            { name: '📄・rules' },
            { name: '📈・welcome', selected: true },
            { name: '📢・server-announcements', notifications: 2 },
            { name: '📣・bot-updates', notifications: 1 },
            { name: '🔨・bot-status' },
            { name: '🎟・create-a-ticket' },
          ],
        },
        {
          name: 'COMMUNITY',
          channels: [
            { name: '💭・suggestions', unread: true },
            { name: '💬・main-chat', unread: true },
            { name: '💎・premium-chat' },
            { name: '🐸・memes', unread: true },
            { name: '🤖・commands' },
            { name: 'General VC 1', type: 'voice' },
            { name: 'General VC 2', type: 'voice' },
            { name: 'Music', type: 'voice' },
          ]
        }
      ]"
      :chat="{
        type: 'channel',
        unreadCount: 0,
        inputContent: '',
        messages: messages,
        command: {
          matchedCommand: '/summarize',
          botName: 'Chatsum',
          botAvatar: 'https://cdn.discordapp.com/icons/1177981174547750953/2a8210181d3c17234866124638b28377.webp?size=96',
          name: 'summarize',
          description: 'Summarize the last 100 messages in this channel.'
        },
        hideCommand: true,
        name: 'general',
        restricted: false
      }"
    />


  </div>
</template>
