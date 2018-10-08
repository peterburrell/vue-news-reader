<template>
    <div class="article-list">
        <Article v-for="(article, index) in articles" :article="article" :key="index" />
    </div>
</template>

<script>
import Article from './Article.vue'

export default {
    name: 'ArticleList',
    props: ['articles'],
    components: {
        Article
    }
}
</script>

<style>

</style>