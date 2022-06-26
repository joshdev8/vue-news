<script setup lang="ts">
import { defineComponent } from "vue";
import { getNews } from "@/components/news.api";
</script>

<script lang="ts">
declare interface Article {
  source: {
    id?: number | string;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage?: string;
  publishedAt: string;
  content: string;
}

declare interface NewsData {
  status?: string;
  totalResults?: number;
  articles?: Article[];
}

export default defineComponent({
  data: () => ({
    dataFetched: {} as NewsData,
  }),

  created() {
    // fetch on init
    this.fetchData();
  },

  methods: {
    async fetchData() {
      const [error, dataFetched] = await getNews();

      if (error) console.error(error);
      else this.dataFetched = dataFetched;
    },
  },
});
</script>

<template>
  <h1>Latest News</h1>
  <ul v-if="dataFetched">
    <li
      v-for="{
        source,
        author,
        title,
        description,
        url,
      } in dataFetched.articles"
      :key="url"
    >
      <p>{{ title }}</p>
      <p>
        <span class="source">{{ source.name }}</span>
      </p>
      <p>By: {{ author }}</p>
      <p>{{ description }}</p>
    </li>
  </ul>
</template>

<style>
a {
  text-decoration: none;
  color: #42b883;
}
li {
  line-height: 1.5em;
  margin-bottom: 20px;
}
.author,
.date {
  font-weight: bold;
}
.source {
  font-style: italic;
}
</style>
