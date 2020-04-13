<template>
  <Layout>
    <div class="container-inner mx-auto py-8">
      <div class="mb-4 flex flex-wrap">
        <div class="w-full mb-4">
          <g-image :src="items[`${$page.writer.title}`].avatar" style="max-height: 300px" class="rounded mx-auto h-25" />
        </div>
        <div class="w-full mb-2">
          <h6 class="text-2xl text-pink-600 font-bold pb-3">
            {{items[`${$page.writer.title}`].name}}
          </h6>
          {{items[`${$page.writer.title}`].about}}
        </div>
        <div class="mb-2">
          <a :href="items[`${$page.writer.title}`].fb" class="text-base text-pink-700 hover:text-pink-600" target="_blank">Visit My Facebook Page</a>
        </div>
      </div>
      <div class="pb-10">
        <social-sharing
          :url="`https://comicsghor.netlify.com${$page.writer.path}`"
          :title="items[`${$page.writer.title}`].name"
          :description="items[`${$page.writer.title}`].about"
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
      <h2
        class="text-3xl font-bold mb-8 border-b capitalize"
      >{{ $page.writer.title }} has {{$page.writer.belongsTo.totalCount}} posts</h2>

      <div
        v-for="post in $page.writer.belongsTo.edges"
        :key="post.node.id"
        class="post border-gray-400 border-b mb-12"
      >
        <h2 class="text-3xl font-bold">
          <g-link :to="post.node.path" class="text-copy-primary hover:text-pink-600">{{ post.node.title }}</g-link>
        </h2>
        <div class="text-copy-secondary mb-4">
          <span>{{ post.node.date }}</span>
          <span class="px-1">|</span>
          <span>{{ post.node.timeToRead }} min read</span>
        </div>
        <div class="flex flex-wrap lg:flex-row-reverse">
          <div class="w-full lg:w-1/2 mb-4">
            <g-image
              :src="post.node.cover"
              height="300"
              class="rounded-sm object-cover"
              alt="Cover"
            />
          </div>
          <div class="w-full lg:w-1/2 text-lg pr-4 pb-4">
            <div>{{ post.node.summary }}.....</div>
            <g-link
              :to="writer.path"
              v-for="writer in post.node.writers"
              :key="writer.id"
              class="capitalize mb-2 text-gray-700 text-base hover:text-pink-600"
            >
              <div class="w-full my-2">
                <div class="float-left mr-2">
                  <Pen />
                </div>
                {{ writer.title }}
              </div>
            </g-link>
            <g-link
              :to="series.path"
              v-for="series in post.node.seriess"
              :key="series.id"
              class="capitalize mb-2 text-gray-700 text-base hover:text-pink-600"
            >
              <div class="w-full my-2">
                <div class="float-left mr-2">
                  <Book />
                </div>
                {{ series.title }}
              </div>
            </g-link>
            <g-link :to="post.node.path" class="text-pink-600 hover:text-pink-700">
              <div class="float-left mr-2">
                <Arrow />
              </div>Read More
            </g-link>
          </div>
        </div>
      </div>
      <!-- end post -->
      <pagination-posts
        v-if="$page.writer.belongsTo.pageInfo.totalPages > 1"
        :base="`/writer/${$page.writer.title}`"
        :totalPages="$page.writer.belongsTo.pageInfo.totalPages"
        :currentPage="$page.writer.belongsTo.pageInfo.currentPage"
      />
    </div>
  </Layout>
</template>

<page-query>
query writer ($id: ID!, $page: Int) {
  writer: writer (id: $id) {
    title
    path
    belongsTo (page: $page, perPage: 3) @paginate {
      totalCount
      pageInfo {
        totalPages
        currentPage
      }
      edges {
        node {
          ...on Post {
            title
            date (format: "MMMM D, YYYY")
            summary
            timeToRead
            path
            cover
            writers {
              title
              path
            }
            seriess {
              title
              path
            }
          }
        }
      }
    }
  }
}
</page-query>

<script>
import PaginationPosts from "../components/PaginationPosts";
import Book from "../../static/book-open.svg";
import Pen from "../../static/pen-tool.svg";
import Arrow from "../../static/arrow-up-right.svg";
import writers from "../../static/writer.json";

export default {
  data() {
    return {
      items: writers
    };
  },
  metaInfo() {
    return {
      title:
        "Comicsghor: " +
        this.$page.writer.title.charAt(0).toUpperCase() +
        this.$page.writer.title.slice(1),
      meta: [
        {
          name: "Comicsghor-Blog",
          content:
            "Comicsghor Blog. Here you will get comic and anime related blog posts"
        },
        {
          property: "og:title",
          content: "Comicsghor: " +
        this.$page.writer.title.charAt(0).toUpperCase() +
        this.$page.writer.title.slice(1),
        },
        {
          name: "twitter:card",
          content: this.items[`${this.$page.writer.title}`].avatar
        },
        {
          name: "twitter:creator",
          content: "@comicsghor"
        },
        {
          property: "og:description",
          cotent: this.items[`${this.$page.writer.title}`].about
        },
        {
          property: "og:image",
          content: this.items[`${this.$page.writer.title}`].avatar
        }
      ]
    };
  },
  components: {
    PaginationPosts,
    Book,
    Pen,
    Arrow
  }
};
</script>
