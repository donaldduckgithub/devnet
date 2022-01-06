<template>

  <div class="flex justify-center">
    <div class="mb-3 xl:w-96">
      <div class="input-group relative flex flex-wrap items-stretch w-full mb-4 rounded">
    <input
     class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
      v-model="searchQuery"
      type="search"
      autocomplete="off"
      placeholder="Search Articles"
    />
    <ul v-if="posts.length">
      <li v-for="post of posts" :key="post.slug">
        <NuxtLink :to="{ name: 'blog-slug', params: { slug: post.slug } }">
          {{ post.title }}
        </NuxtLink>
      </li>
    </ul>
    </div>
    </div>
  </div>
</template>



<script>
  export default {
    data() {
      return {
        searchQuery: '',
        posts: []
      }
    },
    watch: {
      async searchQuery(searchQuery) {
        if (!searchQuery) {
          this.posts = []
          return
        }
        this.posts = await this.$content('posts')
          .limit(6)
          .search(searchQuery)
          .fetch()
      }
    }
  }
</script>
