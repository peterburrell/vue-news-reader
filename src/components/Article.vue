<template>
    <article class=article>
        <img :src="article.urlToImage" v-if="article.urlToImage" />
        <h2 class="article-title"><a :href="article.url" target="_blank">{{ article.title }}</a></h2>
        <p class="article-info">
            <span class="article-source">{{ article.source.name }}</span>
            <span class="separator"> &bull; </span>
            <span class="article-time">{{ article.publishedAt | timeAgo }} ago</span>
        </p>
        <p class="article-description">{{ article.description }}</p>
        <!-- <p class="article-content">{{ article.content }}</p> -->
    </article>            
</template>

<script>
import { timeAgo } from '../util/filters'

export default {
    name: 'Article',
    props: ['article'],

    filters: {
        timeAgo
    }
}
</script>

<style>
.article {
    margin-bottom: 4rem;
}

.article-title a {
    text-decoration: none;
    color: inherit;
}
img {
    max-width: 100%;
}

.separator {
    color: #aaa;
}
</style>