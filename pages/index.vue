<template>
 <AppHeader />
  <div class="bg-myblue min-h-screen">
    <div class="container mx-auto py-5">
      <div class="flex flex-wrap text-center text-white">
        <div class="w-full md:w-2/3 p-5 border-r border-grey">
          <div v-for="post in posts" :key="post.title" class="py-2">
            <AppPostCard :post="post" />
          </div>
        </div>
        <div class="w-full md:w-1/3 p-5 md:text-left">
    
              <AppSearchInput />
    
        </div>
         <div class="w-full md:w-2/3 p-5 border-r border-white">
      <div class="flex justify-between text-center text-white">
        <button class="flex space-x-4 text-gray-200">&larr; Newer</button>
        <NuxtLink to="/pages/2">
          <button class="flex space-x-4 float-right">Older &rarr;</button>
        </NuxtLink>
      </div>
      </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const posts = await $content('posts')
      .only(['title', 'description', 'createdAt', 'slug'])
      .sortBy('createdAt', 'desc')
      .limit(process.env.PER_PAGE)
      .fetch()

    return { posts }
  },
}
</script>
