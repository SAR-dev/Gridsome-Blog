<template>
  <Layout>
    <div class="container-inner mx-auto my-16">
      <h2 class="text-4xl font-bold mb-8 border-b capitalize">Author: {{ $page.writer.title }}</h2>

      <div v-for="post in $page.writer.belongsTo.edges" :key="post.node.id" class="post border-gray-400 border-b mb-12">
        <h2 class="text-3xl font-bold"><g-link :to="post.node.path" class="text-copy-primary">{{ post.node.title }}</g-link></h2>
        <div class="text-copy-secondary mb-4">
          <span>{{ post.node.date }}</span>
          <span> &middot; </span>
          <span>{{ post.node.timeToRead }} min read</span>
        </div>

        <div class="text-lg mb-4">
          {{ post.node.summary }}
        </div>

        <div class="mb-8">
          <g-link :to="post.node.path" class="font-bold uppercase">Read More</g-link>
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
            timeToRead
    	      date (format: "MMMM D, YYYY")
            path
            summary
            writers {
              title
            }
          }
        }
      }
    }
  }
}
</page-query>

<script>
import PaginationPosts from '../components/PaginationPosts'

export default {
  metaInfo() {
    return {
      title: 'Writer: ' + this.$page.writer.title
    }
  },
  components: {
    PaginationPosts
  }
}
</script>
