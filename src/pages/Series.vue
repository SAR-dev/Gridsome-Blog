<template>
  <Layout>
    <div class="container-inner mx-auto py-16">
      <h2 class="text-3xl font-bold">Series</h2>
      <div class="my-4 flex flex-wrap">
        <g-link
          v-for="series in $page.seriess.edges"
          :key="series.id"
          :to="series.node.path"
          class="bg-gray-300 rounded px-4 py-2 mr-4 hover:bg-pink-600 hover:text-white capitalize my-4 text-pink-600 w-full"
        >{{ series.node.title }}</g-link>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query Seriess {
  seriess: allSeries (sortBy: "title", order: ASC) {
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
    title: "Series",
    meta: [
      {
        name: 'Comicsghor-Blog',
        content: 'Comicsghor Blog. Here you will get comic and anime related blog posts'
      }
    ]
  }
};
</script>