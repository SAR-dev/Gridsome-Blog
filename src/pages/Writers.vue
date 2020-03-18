<template>
  <Layout>
    <div class="container-inner mx-auto text-center border-b-2 border-gray-600 pb-5">
      <g-link to="/cats">
        <div
          class="inline-block text-white hover:text-gray-600 w-16 md:w-24 py-2 bg-gray-600 rounded-lg mx-2 hover:bg-white border-2 border-gray-600 text-xs font-light md:font-bold md:text-base"
        >Category</div>
      </g-link>
      <g-link to="/series">
        <div
          class="inline-block text-white hover:text-gray-600 w-16 md:w-24 py-2 bg-gray-600 rounded-lg mx-2 hover:bg-white border-2 border-gray-600 text-xs font-light md:font-bold md:text-base"
        >Series</div>
      </g-link>
      <g-link to="/tags">
        <div
          class="inline-block text-white hover:text-gray-600 w-16 md:w-24 py-2 bg-gray-600 rounded-lg mx-2 hover:bg-white border-2 border-gray-600 text-xs font-light md:font-bold md:text-base"
        >Tags</div>
      </g-link>
      <g-link to="/writers">
        <div
          class="inline-block text-gray-600 w-16 md:w-24 py-2 rounded-lg mx-2 bg-white border-2 border-gray-600 text-xs font-light md:font-bold md:text-base"
        >C.C</div>
      </g-link>
    </div>
    <div class="container-inner mx-auto py-16">
      <div class="my-4 flex flex-wrap">
        <g-link
          v-for="writer in $page.writers.edges"
          :key="writer.id"
          :to="writer.node.path"
          class="bg-gray-300 rounded px-4 py-2 mr-4 hover:bg-pink-600 hover:text-white capitalize my-4 text-pink-600 w-full"
        >{{ writer.node.title }}</g-link>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query Writers {
  writers: allWriter (sortBy: "title", order: ASC) {
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
    title: "Writers",
    meta: [
      {
        name: 'Comicsghor-Blog',
        content: 'Comicsghor Blog. Here you will get comic and anime related blog posts'
      }
    ]
  }
};
</script>