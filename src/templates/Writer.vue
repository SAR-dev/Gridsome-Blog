<template>
  <Layout>
    <div class="container-inner mx-auto py-16">
      <h2
        class="text-4xl font-bold mb-8 border-b capitalize"
      >Writer: {{ $page.writer.title }} has {{$page.writer.belongsTo.totalCount}} posts</h2>

      <div
        v-for="post in $page.writer.belongsTo.edges"
        :key="post.node.id"
        class="post border-gray-400 border-b mb-12"
      >
        <h2 class="text-3xl font-bold">
          <g-link :to="post.node.path" class="text-copy-primary">{{ post.node.title }}</g-link>
        </h2>

        <div class="text-copy-secondary mb-4">
          <span>{{ post.node.date }}</span>
          <span>&middot;</span>
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
            <div>{{ post.node.summary }}</div>
            <div class="my-2">
              <g-link
                :to="writer.path"
                v-for="writer in post.node.writers"
                :key="writer.id"
                class="capitalize mb-2 text-gray-700 text-base"
              >
                <div class="float-left mr-2">
                  <Pen />
                </div>
                {{ writer.title }}
              </g-link>
            </div>
            <div class="my-2">
              <g-link
                :to="series.path"
                v-for="series in post.node.seriess"
                :key="series.id"
                class="capitalize mb-2 text-gray-700 text-base"
              >
                <div class="float-left mr-2">
                  <Book />
                </div>
                {{ series.title }}
              </g-link>
            </div>
            <g-link :to="post.node.path">
              <div class="float-left mr-2">
                <Arrow />
              </div>Read More
            </g-link>
          </div>
        </div>
      </div>
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
            writers {
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
        "Writer: " +
        this.$page.writer.title.charAt(0).toUpperCase() +
        this.$page.writer.title.slice(1),
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
