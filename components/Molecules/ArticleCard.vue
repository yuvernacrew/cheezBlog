<template>
  <nuxt-link :to="{ name: 'article-id', params: { id: item.sys.id } }">
    <h2>{{ item.fields.title }}</h2>
    <div>
      <p>{{ item.fields.description }}</p>
    </div>
  </nuxt-link>
</template>
