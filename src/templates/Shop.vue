<template>
  <Layout>
    <div class="container mx-auto mb-10">
      <g-link
          to="/shop"
          class="font-bold uppercase px-4 py-2 text-pink-600 hover:text-pink-700"
        >
          <svg
            class="h-5 mr-2 fill-current float-left"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="-49 141 512 512"
            style="enable-background:new -49 141 512 512;"
            xml:space="preserve"
          >
            <path
              id="XMLID_10_"
              d="M438,372H36.355l72.822-72.822c9.763-9.763,9.763-25.592,0-35.355c-9.763-9.764-25.593-9.762-35.355,0 l-115.5,115.5C-46.366,384.01-49,390.369-49,397s2.634,12.989,7.322,17.678l115.5,115.5c9.763,9.762,25.593,9.763,35.355,0 c9.763-9.763,9.763-25.592,0-35.355L36.355,422H438c13.808,0,25-11.193,25-25S451.808,372,438,372z"
            />
          </svg>Back to Products
        </g-link>
      <h1 class="md:text-3xl text-2xl text-pink-600 font-bold py-4 text-center md:text-left">{{$page.shop.title}}</h1>
      <div class="flex flex-wrap">
        <div class="gallery w-full md:w-1/2 sm:py-5">
          <Gallery :images="$page.shop.gallery" />
        </div>
        <div class="w-full md:w-1/2 p-5 lg:px-10 mt-5 md:mt-0">
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
      <div class="max-w-4xl mx-auto mt-5 px-5">
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