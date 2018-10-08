<template>
  <div id="app">
    <header class="header">
      <h1>News Reader</h1>
    </header>
    <h2 v-if="loading">Loading...</h2>
    <ArticleList :articles="articles" v-if="!loading" />

    <footer class="footer">powered by NewsAPI.org</footer>
  </div>
</template>

<script>
// todo:
// - filtering by country, category and source
// - saving sources
// - overall ui work: tailwind, tachyons?, sidebar, etc. 
// - move api code into module, caching, etc.
// - lazy load images
// - paging or load more on scroll

import ArticleList from './components/ArticleList.vue'

export default {
  name: 'app',
  components: {
    ArticleList
  },
  data() {
    let qs = new URLSearchParams(window.location.search);

    return {
      loading: true,
      articles: [],
      country: qs.get('country') || 'us',
      category: qs.get('category') || '',
      sources: qs.get('sources') || '',
      //pageSize: qs.get('pageSize') || '20',
      //page: qs.get('page') || '1'
    }
  },
  created() {
    const baseUrl = 'https://newsapi.org/v2/top-headlines?';

    let parameters = this.sources 
      ? `sources=${this.sources}`
      : `country=${this.country}&category=${this.category}`;

    //parameters += `&pageSize=${this.pageSize}&page=${this.page}`;  
      
    let vm = this;
    let req = new Request(baseUrl + parameters);

    fetch(req, {
      headers: new Headers({
        'X-Api-Key': process.env.VUE_APP_API_KEY
      })
    })
      .then(response => response.json())
      .then(data => {
        vm.loading = false;
        vm.articles = data.articles
        // eslint-disable-next-line 
        console.log('status: ', data.status, ', articles: ', data.totalResults)
      });
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0 auto;
  padding: 0 20px;
  max-width: 800px;
}
</style>
