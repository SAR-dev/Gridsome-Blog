<template>
  <Layout>
    <div class="container-inner mx-auto py-5 px-2">

      <div class="w-full flex flex-wrap pb-5 border-b-2">
          <div class="w-full my-5 ">
              <g-image src="https://i.imgur.com/q4ey99O.jpg" class="h-40 w-40 rounded object-cover shdow-lg border-2 border-gray-400" />
          </div>
          <h1 class="text-xl md:text-3xl font-bold mb-2 w-full flex">
            Raiyean Alrazee
          </h1>
          <h1 class="text-base md:text-xl w-full flex">
            <span class="font-semibold w-32 table my-1">Pen Name: </span>
            <span class="table my-1">Ray Tetsuro</span>
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
            <span class="table my-1">Drawing, Watching Anime, Reading Books</span>
          </h1>
          <h1 class="text-base md:text-xl w-full flex">
            <span class="font-semibold w-32 table my-1">Experience: </span>
            <span class="table my-1">4 years (Official)</span>
          </h1>
          <h1 class="text-base md:text-xl w-full flex">
            <span class="font-semibold w-32 table my-1">FB Page: </span>
            Life of Geek
          </h1>
          <a href="https://www.facebook.com/profile.php?id=100030940625075" target="_blank" class="bg-pink-700 text-white hover:text-white  text-lg my-2 rounded px-4 py-1">
            Facebook
          </a>
      </div>

    </div>
  </Layout>
</template>

<script>
export default {
   metaInfo() {
    return {
      title: "Raiyean Alrazee",
      meta: [
        {
          property: "og:title",
          content: "Raiyean Alrazee"
        },
        {
          name: "twitter:card",
          content: "https://i.imgur.com/q4ey99O.jpg"
        },
        {
          name: "twitter:creator",
          content: "@comicsghor"
        },
        {
          property: "og:image",
          content: "https://i.imgur.com/q4ey99O.jpg"
        }
      ]
    };
  }
}
</script>