<template>
  <Layout>
    <div class="container-inner mx-auto my-16">
      <g-image
        :src="$page.event.cover"
        class="rounded-sm object-cover mb-10"
        alt="Cover"
        style="width: 100%;"
      />
	<h1 class="text-3xl font-semibold mb-5">{{$page.event.title}}</h1>
      <div class="markdown-body mb-8" v-html="$page.event.content" />
      <div class="post-comments mt-10">
        <vue-disqus shortname="comics-ghor-blog" :identifier="$page.event.title"></vue-disqus>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query Event ($id: ID!) {
  event: event (id: $id) {
      id
      title
      content
      cover
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.event.title,
      meta: [
        {
          name: "description",
          content: this.$page.event.specifications
        },
        {
          property: "og:title",
          content: this.$page.event.title
        },
        {
          name: "twitter:card",
          content: this.$page.event.cover
        },
        {
          name: "twitter:creator",
          content: "@comicsghor"
        },
        {
          property: "og:description",
          cotent: this.$page.event.specifications
        },
        {
          property: "og:image",
          content: this.$page.event.cover
        }
      ]
    };
  }
};
</script>

<style src="../css/github-markdown.css" />