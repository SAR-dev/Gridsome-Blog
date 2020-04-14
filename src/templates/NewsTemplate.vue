<template>
  <Layout>
    <div class="container-inner mx-auto my-16">
      <h1 class="text-4xl font-bold leading-tight">{{ $page.documentation.title }}</h1>
      <div class="markdown-body article">
        <VueRemarkContent />
      </div>
      <div class="post-comments mt-10">
        <vue-disqus shortname="comics-ghor-blog" :identifier="$page.documentation.title"></vue-disqus>
      </div>
    </div>
  </Layout>
</template>

<!-- Front-matter fields can be queried from GraphQL layer -->
<page-query>
query Documentation ($id: ID!) {
  documentation(id: $id) {
    title
    excerpt
    cover
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.documentation.title,
      meta: [
        {
          name: "description",
          content: this.$page.documentation.excerpt
        },
        {
          property: "og:title",
          content: this.$page.documentation.title
        },
        {
          name: "twitter:card",
          content: this.$page.documentation.cover
        },
        {
          name: "twitter:creator",
          content: "@comicsghor"
        },
        {
          property: "og:description",
          cotent: this.$page.documentation.excerpt
        },
        {
          property: "og:image",
          content: this.$page.documentation.cover
        }
      ]
    };
  }
}
</script>

<style src="../css/github-markdown.css" />
