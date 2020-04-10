<template>
  <Layout>
    <!-- <g-image src="../../static/shop-poster.jpg" style="height: 400px; object-fit: cover" /> -->
    <div class="container mx-auto py-10 lg:px-20">

        <!-- TEMP -->
        <h1 class="text-3xl md:text-5xl text-pink-600 text-center font-bold tracking-wide">
          COMICSGHOR ONLINE SHOP
        </h1>
        <h1 class="text-3xl md:text-5xl text-pink-600 text-center font-bold tracking-wide">
          COMING SOON
        </h1>
        <h1 class="text-2xl md:text-4xl text-pink-600 text-center font-bold tracking-wide uppercase">
          Thanks for staying with us
        </h1>
        <!-- TEMP -->

      <!-- <div class="flex flex-wrap justify-center sm:justify-start pb-10">
        <div v-for="item in $page.items.edges" :key="item.id" class="block sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/4 p-4">
          <g-link :to="item.node.path">
            <div class="rounded h-56 w-40 sm:h-64 sm:w-56 mx-auto shadow-md relative">
              <g-image :src="item.node.cover"  style="height: 100%; width: 100%; object-fit: cover" />
              <div class="absolute bottom-0 left-0 pl-3 pb-4">
                <span
                  class="bg-pink-600 px-2 py-1 rounded-full font-bold text-white"
                  style="font-size: 11px; letter-spacing: .85px"
                >{{item.node.orderType}}</span>
              </div>
              <div class="absolute bottom-0 right-0 pr-3 pb-4">
                <span
                  class="bg-pink-600 px-2 py-1 rounded-full font-bold text-white"
                  style="font-size: 11px; letter-spacing: .85px"
                >{{item.node.price}}</span>
              </div>
            </div>
          </g-link>
        </div>
      </div>
      <pagination-posts
        v-if="$page.items.pageInfo.totalPages > 1"
        base="/shop"
        :totalPages="$page.items.pageInfo.totalPages"
        :currentPage="$page.items.pageInfo.currentPage"
      /> -->
    </div>
  </Layout>
</template>

<page-query>
query ShopItems ($page: Int) {
  items: allShop (sortBy: "date", order: DESC, perPage: 8, page: $page) @paginate {
    totalCount
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        path
        orderType
        price
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
    PaginationPosts,
  },
  metaInfo: {
    title: "Shop",
    meta: [
      {
        name: "Comicsghor-Blog",
        content:
          "Comicsghor Blog. Here you will get comic and anime related blog posts"
      }
    ]
  }
};
</script>

