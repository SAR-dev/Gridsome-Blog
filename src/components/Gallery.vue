<template>
  <div class="px-5">
    <VueSlickCarousel v-bind="settings">
      <g-image v-for="(data, i) in images" v-bind:key="i" :src="data" class="gallery-image" />
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";

export default {
  props: ["images"],
  components: { VueSlickCarousel },
  data() {
    return {
      settings: {
        arrows: true,
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    };
  }
};
</script>

<style>
    .gallery-image {
        width: 100%;display: inline-block;height: 400px;object-fit: contain;
    }
    .slick-slider button, .slick-slider button:hover {
        border-radius: 50%;
        background-color: #ffc20e;
        display: block;
    }
    @import "../css/carousel.css"
</style>