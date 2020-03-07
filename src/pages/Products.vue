<template>
  <Layout>
    <div class="container mx-auto py-8">
      <div class="flex flex-wrap mb-6">
        <div
          v-for="edge in $page.allContentfulProduct.edges"
          :key="edge.node.id"
          class="my-1 w-full md:w-1/2 lg:w-1/3 rounded border bg-white shadow mx-auto my-4"
          style="max-width: 280px"
        >
          <div class="relative">
            <div class="bg-cover bg-no-repeat bg-gray-300 bg-center">
              <g-image
                :src="edge.node.image.file.url"
                class="rounded-t"
                style="height: 200px; margin: auto; object-fit: cover;"
                :alt="edge.node.image.title"
              />
            </div>
            <div
              style="background-color: rgba(0,0,0,0.6)"
              class="absolute bottom-0 mb-2 ml-3 px-2 py-1 rounded text-sm text-white"
            >$ {{edge.node.price}}</div>
          </div>
          <div class="p-3">
            <h3 class="mr-10 text-sm truncate-2nd">
              <p
                class="font-bold cursor-pointer"
                style="color: #4299E1"
                v-on:click="show(edge.node.id)"
              >{{edge.node.name}}</p>
            </h3>
            <div class="flex items-start justify-between">
              <p class="text-xs text-gray-500">{{edge.node.description | truncate(100)}}</p>
            </div>
          </div>
          <modal :name="edge.node.id" :scrollable="true" :height="[true, auto]">
            <div class="container py-6">
              <h2 class="text-xl font-bold text-center" style="color: #4299E1">{{edge.node.name}}</h2>
              <div class="py-4">
              <g-image
                :src="edge.node.image.file.url"
                :alt="edge.node.image.title"
                style="max-height: 300px; margin: auto;"
              />
              </div>
              <div class="px-4 mx-auto">
                <div class="text-xl" style="color: #5A67D8; font-weight: 600 ">Price: ${{edge.node.price}}</div>
                <div class="my-4 text-lg">{{edge.node.description}}</div>
                <div class="my-4">
                  <div class="markdown-body mb-8" v-html="edge.node.content" />
                </div>
              </div>
            </div>
          </modal>
        </div>
      </div>
      <pagination-posts
        v-if="$page.allContentfulProduct.pageInfo.totalPages > 1"
        base="/products"
        :totalPages="$page.allContentfulProduct.pageInfo.totalPages"
        :currentPage="$page.allContentfulProduct.pageInfo.currentPage"
      />
    </div>
  </Layout>
</template>

<page-query>
query ($page: Int) {
  allContentfulProduct (perPage: 6, page: $page) @paginate {
    pageInfo {
          totalPages
          currentPage
    }
    edges {
      node {
        id
        name
        price
        description
        image {
          title
          file {
            url
          }
        }
      }
    }
  }
}
</page-query>

<script>
import PaginationPosts from "../components/PaginationPosts";

export default {
  metaInfo: {
    title: "Products",
    meta: [
      {
        name: 'Comicsghor-Blog',
        content: 'Comicsghor Blog. Here you will get comic and anime related blog posts'
      }
    ]
  },
  components: {
    PaginationPosts
  },
  filters: {
    truncate: function(value, limit) {
      if (value.length > limit) {
        value = value.substring(0, limit - 3) + "...";
      }

      return value;
    }
  },
  methods: {
    show(id) {
      this.$modal.show(`${id}`);
    },
    hide() {
      this.$modal.hide(`${id}`);
    }
  }
};
</script>

