<template>
  <Layout>
    <div class="container-inner mx-auto py-5 px-2">

      <div class="w-full flex flex-wrap pb-5 border-b-2">
          <div class="w-full my-5 ">
              <g-image src="https://i.imgur.com/DORQHKz.jpg" class="h-40 w-40 rounded object-cover shdow-lg border-2 border-gray-400" />
          </div>
          <h1 class="text-xl md:text-3xl font-bold mb-2 w-full flex">
            Samiha Binte Ali
          </h1>
          <h1 class="text-base md:text-xl w-full flex">
            <span class="font-semibold w-32 table my-1">Occupation: </span>
            <span class="table my-1">Student</span>
          </h1>
          <h1 class="text-base md:text-xl w-full flex">
            <span class="font-semibold w-32 table my-1">Age: </span>
            <span class="table my-1">18</span>
          </h1>
          <h1 class="text-base md:text-xl w-full flex">
            <span class="font-semibold w-32 table my-1">Hobby: </span>
            <span class="table my-1">Drawing, Watching movies and anime, Stalking cats</span>
          </h1>
          <h1 class="text-base md:text-xl w-full flex">
            <span class="font-semibold w-32 table my-1">Experience: </span>
            <span class="table my-1">3 years</span>
          </h1>
          <a href="https://www.facebook.com/san.john.9480/" target="_blank" class="mr-2 bg-pink-700 text-white hover:text-white  text-lg my-2 rounded px-4 py-1">
            Facebook
          </a>
          <a href="https://www.instagram.com/_fruit_punch_artist/" target="_blank" class="mr-2 bg-pink-700 text-white hover:text-white  text-lg my-2 rounded px-4 py-1">
            Instagram
          </a>
      </div>

    </div>
  </Layout>
</template>

<script>
export default {
   metaInfo() {
    return {
      title: "Samiha Binte Ali",
      meta: [
        {
          property: "og:title",
          content: "Samiha Binte Ali"
        },
        {
          name: "twitter:card",
          content: "https://i.imgur.com/DORQHKz.jpg"
        },
        {
          name: "twitter:creator",
          content: "@comicsghor"
        },
        {
          property: "og:image",
          content: "https://i.imgur.com/DORQHKz.jpg"
        }
      ]
    };
  }
}
</script>

