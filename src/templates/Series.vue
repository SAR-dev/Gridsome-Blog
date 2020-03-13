<template>
  <Layout>
    <div class="container-inner mx-auto py-16">
      <h2
        class="text-4xl font-bold mb-8 border-b capitalize"
      >Series: {{ $page.series.title }} has {{$page.series.belongsTo.totalCount}} posts</h2>

      <div
        v-for="post in $page.series.belongsTo.edges"
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
        v-if="$page.series.belongsTo.pageInfo.totalPages > 1"
        :base="`/series/${$page.series.title}`"
        :totalPages="$page.series.belongsTo.pageInfo.totalPages"
        :currentPage="$page.series.belongsTo.pageInfo.currentPage"
      />
    </div>
  </Layout>
</template>

<page-query>
query series ($id: ID!, $page: Int) {
  series: series (id: $id) {
    title
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

export default {
  metaInfo() {
    return {
      title:
        "Series: " +
        this.$page.series.title.charAt(0).toUpperCase() +
        this.$page.series.title.slice(1),
        meta: [
      {
        name: 'Comicsghor-Blog',
        content: 'Comicsghor Blog. Here you will get comic and anime related blog posts'
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
