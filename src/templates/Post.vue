<template>
  <Layout>
    <div class="container-inner mx-auto mb-16">
      <div class="mb-4">
        <g-link to="/blog" class="font-bold uppercase px-4 py-2 mr-4">
        <svg class="h-5 mr-2 fill-current float-left" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="-49 141 512 512" style="enable-background:new -49 141 512 512;" xml:space="preserve">
            <path id="XMLID_10_" d="M438,372H36.355l72.822-72.822c9.763-9.763,9.763-25.592,0-35.355c-9.763-9.764-25.593-9.762-35.355,0 l-115.5,115.5C-46.366,384.01-49,390.369-49,397s2.634,12.989,7.322,17.678l115.5,115.5c9.763,9.762,25.593,9.763,35.355,0 c9.763-9.763,9.763-25.592,0-35.355L36.355,422H438c13.808,0,25-11.193,25-25S451.808,372,438,372z"></path>
        </svg>Back to Blog</g-link>
      </div>
      <h1 class="text-4xl font-bold leading-tight">{{ $page.post.title }}</h1>
      <div class="text-xl text-gray-600 mb-4">{{ $page.post.date }}</div>
      <div class="flex flex-wrap text-sm mb-4">
        <g-link
          :to="writer.path"
          v-for="writer in $page.post.writers"
          :key="writer.id"
          class="bg-gray-300 rounded px-4 py-2 mr-4 hover:bg-blue-300 capitalize mb-4">
          Author: {{ writer.title }}
        </g-link>
        <g-link
          :to="series.path"
          v-for="series in $page.post.seriess"
          :key="series.id"
          class="bg-gray-300 rounded px-4 py-2 mr-4 hover:bg-blue-300 capitalize mb-4">
          Series: {{ series.title }}
        </g-link>
        <g-link
          :to="cat.path"
          v-for="cat in $page.post.cats"
          :key="cat.id"
          class="bg-gray-300 rounded px-4 py-2 mr-4 hover:bg-blue-300 capitalize mb-4">
          Category: {{ cat.title }}
        </g-link>
      </div>
      <div class="markdown-body mb-8" v-html="$page.post.content" />
      <div class="flex mb-8 text-sm">
        <g-link
          :to="tag.path"
          v-for="tag in $page.post.tags"
          :key="tag.id"
          class="bg-gray-300 rounded-full px-4 py-2 mr-4 hover:bg-green-300">
          {{ tag.title }}
        </g-link>
      </div>
      <div class="mb-8">
        <g-link to="/blog" class="font-bold uppercase px-4 py-2 mr-4">
        <svg class="h-5 mr-2 fill-current float-left" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="-49 141 512 512" style="enable-background:new -49 141 512 512;" xml:space="preserve">
            <path id="XMLID_10_" d="M438,372H36.355l72.822-72.822c9.763-9.763,9.763-25.592,0-35.355c-9.763-9.764-25.593-9.762-35.355,0 l-115.5,115.5C-46.366,384.01-49,390.369-49,397s2.634,12.989,7.322,17.678l115.5,115.5c9.763,9.762,25.593,9.763,35.355,0 c9.763-9.763,9.763-25.592,0-35.355L36.355,422H438c13.808,0,25-11.193,25-25S451.808,372,438,372z"></path>
        </svg>Back to Blog</g-link>
      </div>
      <div class="post-comments">
        <vue-disqus shortname="comics-ghor-blog" :identifier="$page.post.title"></vue-disqus>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query Post ($path: String!) {
  post: post (path: $path) {
    title
    date (format: "MMMM D, Y")
    content
    tags {
      title
      path
    }
    tags {
      title
      path
    }
    seriess {
      title
      path
    }
    writers {
      title
      path
    }
    cats {
      title
      path
    }
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.post.title
    }
  }
}
</script>

<style src="../css/github-markdown.css" />

