<template>
  <div class="bg-myblue min-h-screen">
 <AppHeader />
    <div class="container mx-auto py-5"> <!--container is the reference to the tailwind.config.js screens:, mx-auto places the object in the center -->
      <div class="flex flex-wrap text-center text-white">
               <div class="w-full md:w-1/4 py-12 md:text-left">
                   <AppSearchInput />
        <div class="dark:bg-gray-800 p-4 mb-6 pb-2 table-of-contents overflow-auto">
          <p class="font-bold py-1 text-gray-200 uppercase tracking-wider font-medium text-ss"> Tags: </p>
         <ul  style="list-style-type:none;">
         <li
        v-for="tag of tags"
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
          <div v-for="post in posts" :key="post.title" class="py-2">
            <AppPostCard :post="post" />  
          </div>
           </div>

                  <div class="w-full md:w-1/4 p-5 ">
    
  
          </div>


        

         <div class="w-full md:w-3/4 p-5 ">
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
</div>
</template>

<script>
export default {

  async asyncData({ $content }) {
    const posts = await $content('posts')
      .only(['title', 'description', 'createdAt', 'slug', 'tags'])
      .sortBy('createdAt', 'desc')
      .limit(process.env.PER_PAGE)
      .fetch()

    const tags = await $content('tags')
      .only(['name', 'description', 'img', 'slug'])
      .sortBy('createdAt', 'asc')
      .fetch()


    return { posts, tags }
  },
}
</script>
