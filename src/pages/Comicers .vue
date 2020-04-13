<template>
  <Layout>
    <div class="container-inner mx-auto py-5 px-2">
      <div class="mb-5 text-3xl md:text-5xl font-semibold text-pink-600">
        Comicers' Portfolio
        <span
          class="text-gray-500 text-sm block"
        >*** The term “Comicer” is created and used by Comics Ghor to address the official comic artists of Comics Ghor</span>
      </div>
      <div class="flex flex-wrap">
        <g-link
        to="/comicers/raiyean-alrazee"
          class="w-full bg-gray-300 rounded px-4 py-2 hover:bg-pink-600 hover:text-white capitalize my-4 text-pink-600"
        >Raiyean Alrazee</g-link>
        <g-link
        to="/comicers/haimin-torzo"
          class="w-full bg-gray-300 rounded px-4 py-2 hover:bg-pink-600 hover:text-white capitalize my-4 text-pink-600"
        >Haimin Torzo</g-link>
        <g-link
        to="/comicers/sadman-arnob"
          class="w-full bg-gray-300 rounded px-4 py-2 hover:bg-pink-600 hover:text-white capitalize my-4 text-pink-600"
        >Sadman Arnob</g-link>
        <g-link
        to="/comicers/imran-hossain"
          class="w-full bg-gray-300 rounded px-4 py-2 hover:bg-pink-600 hover:text-white capitalize my-4 text-pink-600"
        >Imran Hossain</g-link>
        <g-link
        to="/comicers/sagufta-nowrin"
          class="w-full bg-gray-300 rounded px-4 py-2 hover:bg-pink-600 hover:text-white capitalize my-4 text-pink-600"
        >Sagufta Nowrin</g-link>
        <g-link
        to="/comicers/samiha-binte-ali"
          class="w-full bg-gray-300 rounded px-4 py-2 hover:bg-pink-600 hover:text-white capitalize my-4 text-pink-600"
        >Samiha Binte Ali</g-link>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Comicers",
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

