<script setup lang="ts">
import GuildNavigation from "@/components/GuildNavigation.vue";
import Guilds from "@/components/Guilds.vue";
import Window from "@/components/Window.vue";
import ChannelsGroup from "@/components/ChannelsGroup.vue";
import Chat from "@/components/Chat.vue";
import Message from "@/components/Message.vue";


const messages: InstanceType<typeof Message>["$props"][] = [
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

    <Window :controls="false" class="w-[550px] h-[700px] scale-[.85] shadow-lg">

      <Guilds
        v-if="false"
        class="absolute top-0 pt-8 h-full"
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
        ]" />

      <GuildNavigation
        v-if="false"
        class="ml-[72px] h-full"
        guild-name="AUX ARMES LES PROLOS"
        username="Geauser"
        avatar="https://cdn.discordapp.com/avatars/222452423522779136/d571c29d351e10ae96f1d63840e88714.webp?size=32">

        <template #channels>

          <ChannelsGroup
            name="IMPORTANT"
            :channels="[
              {
                name: '📄・rules',
              },
              {
                name: '📈・welcome',
                selected: true,
              },
              {
                name: '📢・server-announcements',
                notifications: 2,
              },
              {
                name: '📣・bot-updates',
                notifications: 1,
              },
              {
                name: '🔨・bot-status',
              },
              {
                name: '🎟・create-a-ticket',
              },
            ]">
          </ChannelsGroup>

          <ChannelsGroup
            name="COMMUNITY"
            :channels="[
              {
                name: '💭・suggestions',
                unread: true,
              },
              {
                name: '💬・main-chat',
                unread: true,
              },
              {
                name: '💎・premium-chat',
              },
              {
                name: '🐸・memes',
                unread: true,
              },
              {
                name: '🤖・commands',
              },
              {
                name: 'General VC 1',
                type: 'voice'
              },
              {
                name: 'General VC 2',
                type: 'voice'
              },
              {
                name: 'Music',
                type: 'voice'
              },
            ]">
          </ChannelsGroup>

        </template>

      </GuildNavigation>


      <Chat
        class="flex-1"
        :type="'channel'"
        :unread-count="0"
        input-content=""
        :messages="messages"
        :command="{
          matchedCommand: '/summarize',
          botName: 'Chatsum',
          botAvatar: 'https://cdn.discordapp.com/icons/1177981174547750953/2a8210181d3c17234866124638b28377.webp?size=96',
          name: 'summarize',
          description: 'Summarize the last 100 messages in this channel.'
        }"
        :hide-command="true"
        :name="'📈・welcome'"
        :restricted="false" />

    </Window>

  </div>
</template>
