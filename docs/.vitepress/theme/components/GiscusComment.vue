<template>
  <div style="margin-top: 24px">
    <Giscus
        :key="route.path"
        :theme="isDark ? 'dark' : 'light'"
        id="comments"
        repo="luckfunc/blog"
        repoid="R_kgDOIrDrIg"
        category="General"
        category-id="DIC_kwDOIrDrIs4ClpeT"
        mapping="pathname"
        term="Welcome to giscus!"
        reactionsenabled="1"
        emitmetadata="0"
        inputposition="top"
        loading="lazy"
    />
  </div>
</template>

<script setup>
import Giscus from '@giscus/vue';
import { useRoute, useData } from 'vitepress';

const route = useRoute();
const { isDark } = useData();
</script>