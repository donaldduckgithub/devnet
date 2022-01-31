<style>
  h1 {
    font-weight: bold;
    font-size: 28px;
    color: #e2e8f0;
  }
  .nuxt-content h3 {
    font-weight: bold;
    font-size: 30px;
    color: #e2e8f0;
  }

    a { 
    margin-bottom: 5px;
    font-family: 'Roboto', sans-serif;
    font-size: 15px;
    color: #9ca3af;
  }
</style>

<template>
   
<div class="bg-myblue min-w-screen">
 <div class="container mx-auto py-1 border-b border-grey">
<nav class="flex justify-start p-3">  <!--background navbar-->
      <a href="https://turmburg.netlify.app/" class="font-semibold text-xl text-white">turmburg</a>      
      <a href="https://www.youtube.com/playlist?list=PLgY1BWWbCdZxQSKYQAjkg6diVUA95nn1R" class="ml-6 mt-1 hover:text-white">
        Playlist
      </a>
     <a href="https://github.com/donaldduckgithub/turmburg" class="ml-6 mt-1 mr-7 hover:text-white">
        GitHub
      </a>
      <a href="/shifts" aria-label="About page" class="mt-1 mr-7 hover:text-white nav-link nuxt-link-exact-active nuxt-link-active" aria-current="page">
              shifts
            </a>
                  <a href="/tasks" aria-label="About page" class="mt-1 mr-7 hover:text-white nav-link nuxt-link-exact-active nuxt-link-active" aria-current="page">
              tasks
            </a>

  </nav>
        </div>
  </div> 
  
</template>