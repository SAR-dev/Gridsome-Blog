<template>
  <Layout>
    <div class="container-inner mx-auto py-16">
      <h2 class="text-3xl font-bold">Categories</h2>
      <div class="my-4 flex flex-wrap">
        <g-link
          v-for="cat in $page.cats.edges"
          :key="cat.id"
          :to="cat.node.path"
          class="bg-gray-300 rounded px-4 py-2 mr-4 hover:bg-blue-300 capitalize my-4"
        >{{ cat.node.title }}</g-link>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query Cats {
  cats: allCat (sortBy: "title", order: ASC) {
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
    title: "Categoriess"
  }
};
</script>