---
title: Notes Website
description: All relevant notes for developing your website
tags: javascript
---

# To Do
- rechte seite so ein conten feld machen wie hier https://linuxize.com/post/how-to-mount-an-nfs-share-in-linux/

- domain kaufen https://cornerofprogress.com/creating-a-blog-with-nuxtjs

- search field

- tags sorted by

- meta tags https://cornerofprogress.com/creating-a-blog-with-nuxtjs

- lesezeichen (rechts wie bei tailwindcss) https://tailwindcss.com/docs/customizing-colors#adding-additional-colors

- about page https://cornerofprogress.com/about
------------------

# Set up nuxtjs 

<p> https://nuxtjs.org/docs/get-started/installation

### in windows terminal (execute cmd as admin):

```python
 npm install -g yarn #only first time for yarn 
```



### create your static website and choose following options:
```python
    yarn create nuxt-app projectname
    javascript
    npm
    tailwind CSS
    jest  #testing framework
    universal
    static 
    none
    git
```

### Install  NPM
```python
npm install
npm run dev
```

### Create a git repository and push your nuxtjs directory to git
```python
git add .
git commit -m "first commit"
git push https://github.com/donaldduckgithub/turmburg.git  #password is the access token (in notes)

```
</br>

# Install modules
```python
npm install @nuxt/content #the module for writing blogs
```

### Prism-themes to have a cool code window for your blog
```python
npm install prism-themes
#copypaste following in the file nuxt.config.js:
  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-material-oceanic.css',
      },
    },
  },
```

### Install Password-protect module
https://github.com/stephenkr/nuxt-password-protect
```python
npm install nuxt-password-protect
# fill in the needed info in nuxt.config.js (module and passwordprotect:)
# https://localhost:3000?_pw=password
```
### TailwindCSS Typography plugin
```python
npm install @tailwindcss/typography
plugins: [require('@tailwindcss/typography')] # in tailwind.config.js
```


### Display images in your blog
https://studioterabyte.nl/en/blog/nuxt-content-images
```copy the file MarkdownImage.vue
<markdown-image src="noteswebsite/1.PNG" alt="Alt text"></markdown-image>
```

</br>

# Deploy it
https://explorers.netlify.com/learn/get-started-with-nuxt/nuxt-generate-and-deploy

Login to  https://app.netlify.com

Pack your website to the dist folder with:
```
yarn generate
```
drag the dist folder in app.netlify.com
<markdown-image src="noteswebsite/1.PNG" alt="Alt text"></markdown-image>


### Automatically deploy it with Git Hub
<markdown-image src="noteswebsite/2.PNG" alt="Alt text"></markdown-image>
<markdown-image src="noteswebsite/3.PNG" alt="Alt text"></markdown-image>

if your repsoitory is not in the list, click configure the netlify app on git hub and choose all repositories

<markdown-image src="noteswebsite/4.PNG" alt="Alt text"></markdown-image>
<markdown-image src="noteswebsite/5.PNG" alt="Alt text"></markdown-image>
<markdown-image src="noteswebsite/6.PNG" alt="Alt text"></markdown-image>

# Create a tag system

<p> create _tagw.vue file in /blog/tagw

```vue
<template>
<div>
    <h1>
        {{tag.name}}
    </h1>

     <li
          v-for="post in posts"
          :key="post.slug"
          class="w-full px-2 xs:mb-6 md:mb-12 article-card"
        >

                  <h2 class="font-bold">{{ post.title }}</h2>
              <p>{{ post.description }}</p>
</li>

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
      .where({ tags: { $contains: tag.name } })
      .sortBy('createdAt', 'asc')
      .fetch()



    return {
      posts,
      tag,
      
    }
  },
  
  
}
</script>
```

create index.vue file in pages
```vue
<template>

        <div class="w-full md:w-1/3 p-5 md:text-left">
         <li
        v-for="tag of tags"
        :key="tag.slug"
        class="xs:w-full md:w-1/3 lg:flex-1 px-2 text-center"
      >
        <NuxtLink :to="`/blog/tagw/${tag.slug}`" class="">
          <p
            class="font-bold text-gray-600 uppercase tracking-wider font-medium text-ss"
          >
            {{ tag.name }}
          </p>
        </NuxtLink>
      </li>

</div>
</template>

<script>
import mountainlist from '../components/mountainlist.vue'
export default {
  components: { mountainlist },
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
```


```

```