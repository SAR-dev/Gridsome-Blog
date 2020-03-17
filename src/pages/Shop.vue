<template>
  <Layout>
    <div class="container mx-auto py-10 lg:px-20">
      <div class="flex flex-wrap items-center">
        <div v-for="item in $page.items.edges" :key="item.id" class="w-full md:w-1/3 xl:w-1/4 p-4">
          <g-link :to="item.node.path">
            <div class="bg-gray-200 hover:bg-gray-300 rounded h-64 w-56 mx-auto relative">
              <g-image :src="item.node.cover" class="p-2" style="height: 100%; width: 100%; object-fit: cover" />
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
    </div>
  </Layout>
</template>

<page-query>
query ShopItems {
  items: allShop (sortBy: "date", order: DESC) {
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
export default {
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

