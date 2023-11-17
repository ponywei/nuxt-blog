<template>
  <div
    class="m-w-full px-5 flex flex-row justify-between leading-[53px] items-center"
  >
    <img
      src="/images/favorite.png"
      alt="Logo"
      class="flex-none w-[35px] h-[35px]"
    />
    <nav class="flex flex-row mr-[40px]">
      <div v-for="(item, index) in items" :key="index" class="p-2">
        <NuxtLink
          :to="item.path"
          class="text-slate-600 hover:text-slate-800 transition-all duration-500"
          activeClass="text-slate-950 text-2xl text-bold"
          >{{ item.title }}
        </NuxtLink>
      </div>
    </nav>
  </div>
</template>
<script setup>
const items = [
  {
    title: '首页',
    path: '/',
  },
  {
    title: '博客',
    path: '/blog',
  },
  {
    title: '归档',
    path: '/about',
  },
]
</script>
