<template>
  <Layout>
    <div class="container-inner mx-auto py-5 px-2">

      <div class="w-full flex flex-wrap pb-5 border-b-2">
          <div class="w-full my-5 ">
              <g-image src="https://i.imgur.com/GW1OnyW.jpg" class="h-40 w-40 rounded object-cover shdow-lg border-2 border-gray-400" />
          </div>
          <h1 class="text-xl md:text-3xl font-bold mb-2 w-full flex">
            Imran Hossain
          </h1>
          <h1 class="text-base md:text-xl w-full flex">
            <span class="font-semibold w-32 table my-1">Occupation: </span>
            <span class="table my-1">Part-time Graphics Designer @ intime studios</span>
          </h1>
          <h1 class="text-base md:text-xl w-full flex">
            <span class="font-semibold w-32 table my-1">Age: </span>
            <span class="table my-1">21</span>
          </h1>
          <h1 class="text-base md:text-xl w-full flex">
            <span class="font-semibold w-32 table my-1">Hobby: </span>
            <span class="table my-1">Research (Philosophy, Science, Psychology, Human Brain)</span>
          </h1>
          <h1 class="text-base md:text-xl w-full flex">
            <span class="font-semibold w-32 table my-1">Experience: </span>
            <span class="table my-1">3 months, Graphics Design Competition (1st)</span>
          </h1>
          <a href="https://www.facebook.com/mh.imran.x" target="_blank" class="mr-2 bg-pink-700 text-white hover:text-white  text-lg my-2 rounded px-4 py-1">
            Facebook
          </a>
          <a href="https://www.instagram.com/mh.imran.x/" target="_blank" class="mr-2 bg-pink-700 text-white hover:text-white  text-lg my-2 rounded px-4 py-1">
            Instagram
          </a>
          <a href="https://pushon.artstation.com/" target="_blank" class="mr-2 bg-pink-700 text-white hover:text-white  text-lg my-2 rounded px-4 py-1">
            Artstation
          </a>
          <a href="https://www.deviantart.com/mhimranhossain" target="_blank" class="bg-pink-700 text-white hover:text-white  text-lg my-2 rounded px-4 py-1">
            Deviantart
          </a>
      </div>

    </div>
  </Layout>
</template>

<script>
export default {
   metaInfo() {
    return {
      title: "Imran Hossain",
      meta: [
        {
          property: "og:title",
          content: "Imran Hossain"
        },
        {
          name: "twitter:card",
          content: "https://i.imgur.com/GW1OnyW.jpg"
        },
        {
          name: "twitter:creator",
          content: "@comicsghor"
        },
        {
          property: "og:image",
          content: "https://i.imgur.com/GW1OnyW.jpg"
        }
      ]
    };
  }
}
</script>

