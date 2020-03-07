<template>
  <Layout>
    <div class="container-inner mx-auto py-16">
      <h2 class="text-3xl font-bold">Tags</h2>
      <div class="my-4 flex flex-wrap">
        <g-link
          v-for="tag in $page.tags.edges"
          :key="tag.id"
          :to="tag.node.path"
          class="bg-gray-300 rounded px-4 py-2 mr-4 hover:bg-blue-300 capitalize my-4"
        >{{ tag.node.title }}</g-link>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query Tags {
  tags: allTag (sortBy: "title", order: ASC) {
    edges {
      node {
        id
        path
        title
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: "Tags",
    meta: [
      {
        name: 'Comicsghor-Blog',
        content: 'Comicsghor Blog. Here you will get comic and anime related blog posts'
      }
    ]
  }
};
</script>