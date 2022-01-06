<template>
  <div class="bg-myblue min-h-screen">
    <AppHeader />
    <div class="container mx-auto py-5">
      <div class="flex flex-wrap text-center text-white">
        <div class="w-full md:w-2/3 p-5 border-r border-white">
    <div v-for="post in posts" :key="post.title" class="py-2">
      <AppPostCard :post="post" />
    </div>
    <div class="flex justify-between py-5 text-yellow-500">
      <button
        class="flex space-x-4"
        :class="{ 'text-gray-200': currentPage === 1 }"
        @click="newer()"
      >
        &larr; Newer
      </button>
      <button
        class="flex space-x-4 float-right"
        :class="{ 'text-gray-200': currentPage === lastPage }"
        @click="older()"
      >
        Older &rarr;
      </button>
    </div>

        </div>
   <div class="w-full md:w-1/3 p-5 md:text-left">
    
              <AppSearchInput />
    
        </div>
    
                    </div> 
</div>
 </div>
</template>

<script>
export default {
  async asyncData({ $content, params, $config }) {
    const totalPosts = (await $content('posts').fetch()).length
    const currentPage = params.page ? +params.page : 1 // it is a string, convert to number
    const perPage = $config.perPage
    const lastPage = Math.ceil(totalPosts / perPage)
    const lastPageCount =
      totalPosts % perPage !== 0 ? totalPosts % perPage : totalPosts - perPage
    const skipNumber = () => {
      if (currentPage === 1) {
        return 0
      }
      if (currentPage === lastPage) {
        return totalPosts - lastPageCount
      }
      return (currentPage - 1) * perPage
    }
    const posts = await $content('posts')
      .only(['title', 'description', 'createdAt', 'slug'])
      .sortBy('createdAt', 'desc')
      .skip(skipNumber())
      .limit(perPage)
      .fetch()
    return { posts, totalPosts, currentPage, lastPage }
  },
  methods: {
    newer() {
      if (this.currentPage > 1) {
        this.currentPage = this.currentPage - 1
      }
      if (this.currentPage > 1) {
        this.$router.push({ path: `/pages/${this.currentPage}` })
      } else {
        this.$router.push({ path: '/' })
      }
    },
    older() {
      if (this.currentPage < this.lastPage) {
        this.currentPage = this.currentPage + 1
      }
      this.$router.push({ path: `/pages/${this.currentPage}` })
    },
  },
}
</script>