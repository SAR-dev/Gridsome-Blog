<template>
  <Layout>
    <div class="container-inner mx-auto py-16">
      <h2 class="text-3xl font-bold">Categories</h2>
      <div class="my-4 flex flex-wrap">
        <div class="w-full md:w-1/3 my-4 px-2 text-2xl" v-for="cat in $page.cats.edges"
          :key="cat.id">
        <g-link
          :to="cat.node.path"
          class="w-full block text-center py-10 px-4 bg-gray-300 rounded hover:bg-pink-600 hover:text-white capitalize text-pink-600"
        >{{ cat.node.title }}</g-link></div>
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
    title: "Categories",
    meta: [
      {
        name: 'Comicsghor-Blog',
        content: 'Comicsghor Blog. Here you will get comic and anime related blog posts'
      }
    ]
  }
};
</script>