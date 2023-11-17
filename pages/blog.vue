<template>
  <main>
    <ContentList path="/blogs" v-slot="{ list }">
      <NuxtLink
        v-for="article in list"
        :key="article._path"
        :to="article._path"
      >
        <div
          class="rounded hover:bg-slate-50 px-2 py-4 transition-all duration-700"
        >
          <p class="font-semibold text-lg">{{ article.title }}</p>
          <p>{{ article.description }}</p>
          <div class="flex width-auto">
            <p class="flex-1">{{ article.updateDate }}</p>
            <p>{{ 0 }} views</p>
          </div>
        </div>
      </NuxtLink>
    </ContentList>
  </main>
</template>
