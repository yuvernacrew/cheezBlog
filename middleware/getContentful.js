export default async ({ store }) => {
  if (!store.state.categories.length) await store.dispatch('getCategories');
  if (!store.state.tags.length) await store.dispatch('getTags');
  if (!store.state.articles.length) await store.dispatch('getArticles');
};
