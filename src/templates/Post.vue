<template>
  <Layout>
    <div class="container-inner mx-auto mb-16">
      <div class="mb-4">
        <g-link
          to="/blog"
          class="font-bold uppercase px-4 py-2 mr-4 text-pink-600 hover:text-pink-700"
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
          </svg>Back to Blog
        </g-link>
      </div>
      <h1 class="text-4xl font-bold leading-tight">{{ $page.post.title }}</h1>
      <div class="text-xl text-gray-600 mb-4">{{ $page.post.date }}</div>
      <div class="flex flex-wrap text-sm mb-4">
        <g-link
          :to="series.path"
          v-for="series in $page.post.seriess"
          :key="series.id"
          class="bg-gray-300 rounded px-4 py-2 mr-4 text-pink-600 hover:bg-pink-600 hover:text-white capitalize mb-4"
        >
          <div class="float-left mr-2">
            <Book />
          </div>
          {{ series.title }}
        </g-link>
        <g-link
          :to="cat.path"
          v-for="cat in $page.post.cats"
          :key="cat.id"
          class="bg-gray-300 rounded px-4 py-2 mr-4 text-pink-600 hover:bg-pink-600 hover:text-white capitalize mb-4"
        >
          <div class="float-left mr-2">
            <Category />
          </div>
          {{ cat.title }}
        </g-link>
      </div>
      <div class="markdown-body mb-8" v-html="$page.post.content" />
      <div class="flex mb-8 text-sm">
        <g-link
          :to="tag.path"
          v-for="tag in $page.post.tags"
          :key="tag.id"
          class="bg-gray-300 rounded-full px-4 py-2 mr-4 text-pink-600 hover:bg-pink-600 hover:text-white"
        >{{ tag.title }}</g-link>
      </div>
      <div class="my-4">
        <div class="text-3xl text-pink-600 font-bold">AUTHOR / ARTIST</div>
        <div
          v-for="writer in $page.post.writers"
          :key="writer.id"
          class="my-2 py-3 border-b-1 border-pink-600 flex flex-wrap"
        >
          <div class="md:w-1/5 w-full mb-3">
            <g-image :src="items[`${writer.title}`].avatar" style="height: 100px; width: 100px; object-fit: cover" class="shadow rounded-full" />
          </div>
          <div class="md:w-4/5 md:pt-3 w-full">
            <g-link
              :to="writer.path"
              class="text-xl text-pink-600 font-bold hover:text-pink-800"
            >{{items[`${writer.title}`].name}}</g-link>
            <div>{{items[`${writer.title}`].about}}</div>
          </div>
        </div>
      </div>
      <div class="mb-8">
        <g-link
          to="/blog"
          class="font-bold uppercase px-4 py-2 mr-4 text-pink-600 hover:text-pink-700"
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
          </svg>Back to Blog
        </g-link>
      </div>
      <div class="my-5">
        <social-sharing
          :url="`https://comicsghor.netlify.com${$page.post.path}`"
          :title="$page.post.title"
          :description="$page.post.summary"
          inline-template
        >
          <network network="facebook">
            <button
              class="rounded-full w-full py-3 tracking-wider bg-pink-600 text-white hover:bg-pink-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-share-2 inline"
              >
                <circle cx="18" cy="5" r="3" />
                <circle cx="6" cy="12" r="3" />
                <circle cx="18" cy="19" r="3" />
                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
              </svg>
              Share On Facebook
            </button>
          </network>
        </social-sharing>
      </div>
      <div class="post-comments">
        <vue-disqus shortname="comics-ghor-blog" :identifier="$page.post.title"></vue-disqus>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query Post ($path: String!) {
  post: post (path: $path) {
    title
    date (format: "MMMM D, Y")
    content
    path
    summary
    cover
    tags {
      title
      path
    }
    tags {
      title
      path
    }
    seriess {
      title
      path
    }
    writers {
      title
      path
    }
    cats {
      title
      path
    }
  }
}
</page-query>

<script>
import Book from "../../static/book-open.svg";
import Pen from "../../static/pen-tool.svg";
import Category from "../../static/icons/align-left.svg";
import writers from "../../static/writer.json";

export default {
  data() {
    return {
      items: writers
    };
  },
  components: {
    Book,
    Pen,
    Category
  },
  metaInfo() {
    return {
      title: this.$page.post.title,
      meta: [
        {
          name: "description",
          content: this.$page.post.summary
        },
        {
          property: "og:title",
          content: this.$page.post.title
        },
        {
          name: "twitter:card",
          content: this.$page.post.cover
        },
        {
          name: "twitter:creator",
          content: "@comicsghor"
        },
        {
          property: "og:description",
          cotent: this.$page.post.summary
        },
        {
          property: "og:image",
          content: this.$page.post.cover
        }
      ]
    };
  }
};
</script>

<style src="../css/github-markdown.css" />

