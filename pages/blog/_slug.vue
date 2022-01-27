<style>
  h1 {
    font-weight: bold;
    font-size: 28px;
    color: #ffffff;
  }
  .nuxt-content h2 {
    font-weight: bold;
    font-size: 25px;
    color: #A1A1AA;
  }

    .nuxt-content p { 
    margin-bottom: 5px;
    font-size: 17px;
    color: #b2bac7;
    line-height: 1.8;
    
  }

      .nuxt-content br { 
    line-height: 2.5;
    
  }
  
</style>
<!-- font-family: 'Roboto', sans-serif; -->



<template>
<div class="bg-myblue min-h-screen">
   <AppHeader2 />
 <div class="container mx-auto pt-5">
           <div class="mx-auto md:w-4/5">
  <article>
 
    <div class="mx-auto text-center pb-5">
    <h1 class="text-5xl  mb-4 ">{{ post.title }}</h1>
   <div class="ml-6">
    <p class="text-gray-400 text-l">{{ post.description }}</p>
     <p class="text-sm mt-1 text-gray-400">{{ formatDate(post.updatedAt) }}</p>
     </div>
  </div>    
 <div class="container mx-auto py-1 border-b border-grey"></div>
  
 <div class="mt-8">
    <nuxt-content :document="post" />
 


  </div>


    <prev-next class="text-gray-50" :prev="prev" :next="next" />
  </article>
     </div>
     </div>
</div>
</template>


<script>
  export default {
      methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    }
 },

    async asyncData({ $content, params }) {
      const post = await $content('posts', params.slug).fetch()

    const [prev, next] = await $content('posts')
      .only(['title', 'slug'])
      .sortBy('createdAt', 'asc')
      .surround(params.slug)
      .fetch()

      return { post, prev, next }
    }
  }
</script>
