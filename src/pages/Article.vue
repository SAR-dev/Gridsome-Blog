<template>
  <Layout>
    <div class="container-inner mx-auto py-16">
      <div v-for="doc in $page.docs.edges" :key="doc.id" class="post border-gray-400 border-b mb-12">
        <h2 class="text-3xl font-bold"><g-link :to="doc.node.path" class="text-copy-primary hover:text-pink-600">{{ doc.node.title }}</g-link></h2>
        <g-image :src="doc.node.cover" class="h-64 w-full object-cover my-5" />
        <div class="text-lg mb-4">
          <g-link :to="doc.node.path" class="hover:text-pink-700 text-gray-500 font-light">
          {{ doc.node.excerpt }}
          </g-link>
        </div>
        </div> <!-- end post -->

    </div>
  </Layout>
</template>

<page-query>
query Documentation {
  docs: allDocumentation (sortBy: "date", order: DESC) {
    edges {
      node {
        id
        path
        title
        excerpt
        cover
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Article',
    meta: [
      {
        name: 'Comicsghor-Blog',
        content: 'Comicsghor Blog. Here you will get comic and anime related blog posts'
      }
    ]
  }
}
</script>

