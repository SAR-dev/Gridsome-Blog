<template>
  <Layout>
    <div class="hero container mx-auto flex flex-col md:flex-row justify-between pt-16">
      <div class="md:w-3/5 flex flex-col items-center md:items-start text-center md:text-left">
        <h1
          class="uppercase text-5xl text-blue-900 font-bold leading-none tracking-wide mb-2"
        >Comics Ghor</h1>
        <h2
          class="uppercase text-xl text-orange-500 text-secondary tracking-widest mb-6"
        >A CANVAS TO PAINT YOUR MIND OUT</h2>
        <p
          class="text-gray-600 text-lg mb-6"
        >Welcome to Comics Ghor, a Bangladeshi website. The purpose of Comics Ghor is to create a free platform for all the Bangladeshi people, of all age, who desire to draw comics or write novels, stories or more.</p>
        <p
          class="text-gray-600 text-lg mb-6"
        >The idea of creating Comics Ghor was a dream for quite long. We want nothing but to unleash your latent talents without hesitation. Comics Ghor is created with that purpose, as the home of all creative people.</p>
      </div>

      <div class="mb-10 md:mb-0 mt-8 md:mt-0 md:w-2/5 md:px-12">
        <g-image src="../../static/cover.png" class="object-cover" />
      </div>
    </div>

    <div class="overflow-x-hidden mt-8">
      <div
        class="projects container-inner mx-auto text-xl border-gray-500 border-b py-16 relative"
      >
        <div class="w-full mb-10">
          <a href="https://cgsnbd.web.app" target="_blank" class="text-2xl w-full block text-center text-white hover:text-white hover:bg-pink-600 bg-pink-700 rounded p-4">CGSN Comics Ghor Social Network</a>
        </div>
        <ul class="text-lg sm:text-xl">
          <li class="checkmark pb-6">
            <div>Have your own personalized account</div>
          </li>
          <li class="checkmark pb-6">
            <div>Able to create Discussion posts</div>
          </li>
          <li class="checkmark pb-6">
            <div>Create your own series</div>
          </li>
          <li class="checkmark pb-6">
            <div>Upload your own comics and stories</div>
          </li>
          <li class="checkmark pb-6">
            <div>Promote your pop cultural business through us</div>
          </li>
          <li class="checkmark pb-6">
            <div>Share your talents through us to the world</div>
          </li>
          <li class="checkmark pb-6">
            <div>Learn more of pop culture through us</div>
          </li>
        </ul>
      </div>
      <!-- end projects -->
    </div>

    <div class="container-inner text-center mx-auto mt-20 pb-20 border-b border-gray-500">
      <h3 class="font-bold text-4xl uppercase leading-none tracking-wide mb-4 text-pink-600">
        Click below
        <div class="float-left text-5xl">
          <Below2 />
        </div>
        <div class="float-right text-5xl">
          <Below1 />
        </div>
      </h3>
      <a
        href="mailto:comicsghor@gmail.com?cc=sayedarrafi@iut-dhaka.edu&bcc=ashraful.bilad01@gmail.com&subject=We want to SPONSOR your website!&"
        class="text-white hover:text-gray-400"
      >
        <g-image src="../../static/sponsor.png" alt="Sponsor Us" />
      </a>
    </div>

    <div class="container-inner w-full mx-auto py-20 border-b border-gray-500">
      <h2
        class="uppercase text-5xl text-pink-600 font-bold leading-none tracking-widest mb-6 text-center"
      >Meet the founders</h2>
      <div class="flex flex-col sm:flex-row justify-center">
        <div class="sm:w-2/5 p-2 mx-4">
          <div class="bg-white px-6 py-8 rounded-lg shadow-lg text-center">
            <div class="mb-3">
              <g-image
                src="https://i.imgur.com/lLyJqBI.jpg"
                class="w-48 mx-auto rounded-full h-48 object-cover"
                alt="Sayed Rafi"
              />
            </div>
            <h2 class="text-xl font-medium text-gray-700 font-bold">Sayed Rafi</h2>
            <span class="text-gray-600 block mb-5">Founder and Programmer</span>
          </div>
        </div>

        <div class="sm:w-2/5 p-2 mx-4">
          <div class="bg-white px-6 py-8 rounded-lg shadow-lg text-center">
            <div class="mb-3">
              <g-image
                src="https://i.imgur.com/FCYsae6l.png"
                class="w-48 mx-auto rounded-full h-48 object-cover"
                alt="Ashraful Ribat"
              />
            </div>
            <h2 class="text-xl font-medium text-gray-700 font-bold">Ashraful Ribat</h2>
            <span class="text-gray-600 block mb-5">Founder and Owner</span>
          </div>
        </div>
      </div>
    </div>

    <div class="container inline">
      <h2
        class="uppercase text-5xl text-pink-600 font-bold leading-none tracking-widest mb-6 text-center py-8"
      >Contact Us</h2>
      <form
        class="w-full max-w-lg mx-auto px-5"
        action="https://formspree.io/meqkdyzo"
        method="POST"
      >
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-name"
            >First Name</label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              name="First Name"
              required
            />
          </div>
          <div class="w-full md:w-1/2 px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-last-name"
            >Last Name</label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              name="Last Name"
              required
            />
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-password"
            >E-mail</label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="email"
              type="email"
              name="Email"
              required
            />
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-password"
            >Message</label>
            <textarea
              class="no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
              id="message"
              name="Message"
              placeholder="Write your messages here..."
              required
            ></textarea>
          </div>
        </div>
        <div class="md:flex md:items-center">
          <div class="md:w-1/3">
            <button
            class="bg-pink-600"
              type="submit"
              style="
                padding: 10px 20px;
                color: white;
                border-radius: 5px;"
            >Send</button>
          </div>
          <div class="md:w-2/3"></div>
        </div>
      </form>
    </div>
  </Layout>
</template>

<script>
import Smile from "../../static/smile.svg";
import Below1 from "../../static/corner-right-down.svg";
import Below2 from "../../static/corner-left-down.svg";

export default {
  metaInfo: {
    title: "Welcome",
    meta: [
        {
          name: "description",
          content: "Welcome to Comics Ghor, a Bangladeshi website. The purpose of Comics Ghor is to create a free platform for all the Bangladeshi people, of all age, who desire to draw comics or write novels, stories or more."
        },
        {
          property: "og:title",
          content: "Comicsghor-Blog"
        },
        {
          name: "twitter:card",
          content: "https://i.imgur.com/MsKyaVr.png"
        },
        {
          name: "twitter:creator",
          content: "@comicsghor"
        },
        {
          property: "og:description",
          cotent: "Welcome to Comics Ghor, a Bangladeshi website. The purpose of Comics Ghor is to create a free platform for all the Bangladeshi people, of all age, who desire to draw comics or write novels, stories or more."
        },
        {
          property: "og:image",
          content: "https://i.imgur.com/MsKyaVr.png"
        }
      ]
  },
  components: {
    Smile,
    Below1,
    Below2
  }
};
</script>

