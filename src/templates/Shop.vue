<template>
  <Layout>
    <div class="container mx-auto mt-4 mb-10">
      <h1 class="md:text-3xl sm:text-2xl text-xl text-pink-600 font-bold pb-2">{{$page.shop.title}}</h1>
      <div class="flex flex-wrap">
        <div class="gallery w-full md:w-1/2 sm:py-5">
          <Gallery :images="$page.shop.gallery" />
        </div>
        <div class="w-full md:w-1/2 p-5 lg:px-10">
          <p class="text-base md:text-lg pb-2">
            <strong>Product Name:</strong>
            {{$page.shop.name}}
          </p>
          <p class="text-base md:text-lg pb-2">
            <strong>Price:</strong>
            BDT {{$page.shop.price}}
          </p>
          <p class="text-base md:text-lg pb-2">
            <strong>Series:</strong>
            {{$page.shop.series}}
          </p>
          <p class="text-base md:text-lg pb-2">
            <strong>Sizes:</strong>
            {{$page.shop.sizes}}
          </p>
          <p class="text-base md:text-lg pb-2">
            <strong>Manufacturer:</strong>
            {{$page.shop.manufacturer}}
          </p>
          <p class="text-base md:text-lg pb-2">
            <strong>Category:</strong>
            {{$page.shop.category}}
          </p>
          <p class="text-base md:text-lg pb-2">
            <strong>Release Date:</strong>
            {{$page.shop.releaseDate}}
          </p>
          <p class="text-base md:text-lg pb-2">
            <strong>Specifications:</strong>
            {{$page.shop.specifications}}
          </p>
        </div>
      </div>
      <div class="max-w-4xl mx-auto my-10 px-5 text-center text-2xl">
        <div
          class="text-center py-3 rounded border-2 border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white text-lg font-bold tracking-widest cursor-pointer"
        >{{$page.shop.orderType}} ( BDT {{$page.shop.price}} )</div>
      </div>
      <div class="max-w-4xl mx-auto my-5 px-5">
        <div class="markdown-body" v-html="$page.shop.content" />
      </div>
    </div>
  </Layout>
</template>

<page-query>
query Shop ($id: ID!) {
  shop: shop (id: $id) {
      id
      title
      orderType
      price
      cover
      gallery
      name
      series
      manufacturer
      category
      sizes
      releaseDate
      specifications
      content
  }
}
</page-query>

<script>
import Gallery from "../components/Gallery";

export default {
  components: {
    Gallery
  },
  metaInfo() {
    return {
      title: this.$page.shop.title,
      meta: [
        {
          name: "description",
          content: this.$page.shop.specifications
        },
        {
          property: "og:title",
          content: this.$page.shop.title
        },
        {
          name: "twitter:card",
          content: this.$page.shop.cover
        },
        {
          name: "twitter:creator",
          content: "@comicsghor"
        },
        {
          property: "og:description",
          cotent: this.$page.shop.specifications
        },
        {
          property: "og:image",
          content: this.$page.shop.cover
        }
      ]
    };
  }
};
</script>

<style>
@import "../css/shop-markdown.css";
</style>