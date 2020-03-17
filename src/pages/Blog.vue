<template>
  <Layout>
    <div class="container-inner mx-auto py-16">
      <div
        v-for="post in $page.posts.edges"
        :key="post.id"
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
              class="rounded-sm object-cover"
              alt="Cover"
              style="width: 100%; height: 250px"
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
        v-if="$page.posts.pageInfo.totalPages > 1"
        base="/blog"
        :totalPages="$page.posts.pageInfo.totalPages"
        :currentPage="$page.posts.pageInfo.currentPage"
      />
    </div>
  </Layout>
</template>

<page-query>
query Posts ($page: Int) {
  posts: allPost (sortBy: "date", order: DESC, perPage: 3, page: $page) @paginate {
    totalCount
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        date (format: "MMMM D, Y")
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
</page-query>

<script>
import PaginationPosts from "../components/PaginationPosts";
import Book from "../../static/book-open.svg";
import Pen from "../../static/pen-tool.svg";
import Arrow from "../../static/arrow-up-right.svg";

export default {
  metaInfo: {
    title: "Blog",
    meta: [
      {
        name: "Comicsghor-Blog",
        content:
          "Comicsghor Blog. Here you will get comic and anime related blog posts"
      }
    ]
  },
  components: {
    PaginationPosts,
    Book,
    Pen,
    Arrow
  }
};
</script>

