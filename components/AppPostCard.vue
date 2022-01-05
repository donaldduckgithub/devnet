<template>
    <NuxtLink :to="{ name: 'blog-slug', params: { slug: post.slug } }">  
          <div class="bg-grey ring-1 ring-gray-700 rounded-xl transition-shadow duration-200 hover:bg-myblue2 md:p-4 mt-4">
           
            
              <h1 class="font-bold text-left mb-4">{{ post.title }}</h1>
                            
     
            
            <p class="text-left font-light leading-7 text-gray-500 text-lg dark:text-gray-400">{{ post.description }}</p>        
            </div>
       
      
          </div>
          </NuxtLink>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      requried: true,
      default: () => {},
    },
  },
}
</script>
