<template>
  <div class="bg-myblue min-h-screen">
     <AppHeader />
        <!--{{tag.name}}-->
    <div class="container mx-auto ">
      <div class="flex flex-wrap text-center text-white">
      <div class="w-full md:w-1/4 py-10 md:text-left">
      <AppSearchInput />
      <div class="dark:bg-gray-800 p-4 mb-6 pb-2 table-of-contents overflow-auto">
          <p class="font-bold py-1 text-gray-200 uppercase tracking-wider font-medium text-ss"> Tags: </p>
          <ul  style="list-style-type:none;">
         <li
        v-for="tag of tags2"
        :key="tag.slug"
       

      >
        <NuxtLink :to="`/blog/tagw/${tag.slug}`" class="">
          <p
            class="font-bold py-1 text-gray-400 hover:text-gray-100 uppercase tracking-wider font-medium text-ss"
          >
            {{ tag.name }}
          </p>
        </NuxtLink>
      </li>
      </ul>
          </div>
</div>
  <div class="w-full md:w-3/4 p-5 "> <!-- border-l border-grey -->
         <div
            v-for="post in posts"
            :key="post.slug"
            
          >
         <NuxtLink :to="{ name: 'blog-slug', params: { slug: post.slug } }">  
           <div class="bg-grey ring-1 ring-gray-700 rounded-xl transition-shadow duration-200 hover:bg-myblue2 md:p-4 mt-4">
              <h1 class="font-bold text-left mb-4">{{ post.title }}</h1>
              <p class="text-left font-light leading-7 text-gray-500 text-lg dark:text-gray-400">{{ post.description }}</p>
          </div>
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
  async asyncData({ $content, params }) {
    const tags = await $content('tags')
      .where({ slug: { $contains: params.tagd } }) //if the filename of the files form the folder tags contains the word of the urls that is typed for _tagd.vue
      .limit(10)
      .fetch()
    const tag = tags.length > 0 ? tags[0] : {}
    const posts = await $content('posts')
      .only(['title', 'description', 'createdAt', 'slug', 'tags'])
      .where({ tags: { $contains: tag.name } })
      .sortBy('createdAt', 'asc')
      .fetch()

    const tags2 = await $content('tags')
      .only(['name', 'description', 'img', 'slug'])
      .sortBy('createdAt', 'asc')
      .fetch()




    return {
      posts,
      tag,
      tags2
      
    }
  },
  
  
}
</script>