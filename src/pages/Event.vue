<template>
  <Layout>
    <div class="container-inner mx-auto py-16">
      <div
        v-for="post in $page.items.edges"
        :key="post.id"
        class="post border-gray-400 border-b mb-12"
      >
        <g-link :to="post.node.path">
          <div class="flex flex-wrap lg:flex-row-reverse">
            <div class="w-full my-4 relative overflow-hidden">
              <g-image
                :src="post.node.cover"
                class="rounded-sm object-cover transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                alt="Cover"
                style="width: 100%;"
              />
              <h2 class="absolute bottom-0 text-3xl md:text-4xl p-4 bg-gray-500 opacity-75 shadow event-title" style="width: 100%">
                {{ post.node.title }}
              </h2>
            </div>
          </div>
        </g-link>
      </div>
      <!-- end post -->

      <pagination-items
        v-if="$page.items.pageInfo.totalPages > 1"
        base="/event"
        :totalPages="$page.items.pageInfo.totalPages"
        :currentPage="$page.items.pageInfo.currentPage"
      />
    </div>
  </Layout>
</template>

<page-query>
query EventItems ($page: Int) {
  items: allEvent (sortBy: "date", order: DESC, perPage: 8, page: $page) @paginate {
    totalCount
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        path
        title
        date
        cover
      }
    }
  }
}
</page-query>

<script>
import PaginationPosts from "../components/PaginationPosts";

export default {
  components: {
    PaginationPosts
  },
  metaInfo: {
    title: "Event",
    meta: [
      {
        name: "Comicsghor-Blog",
        content:
          "Comicsghor Blog. Here you will get comic and anime related blog items"
      }
    ]
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Righteous&display=swap');
.event-title {
  font-family: 'Righteous', cursive;
  color: black;
}
</style>
