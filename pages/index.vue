<template>
  <div class="bg-myblue min-h-screen">
    <div class="container mx-auto py-5">
      <div class="flex flex-wrap text-center text-white">
        <div class="w-full md:w-2/3 p-5 border-r border-grey">
   
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

