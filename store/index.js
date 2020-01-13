import createClient from '@/plugins/contentful.js';
const client = createClient;

export const state = () => ({
  categories: [{ id: '', name: '' }],
  tags: [{ id: '', name: '' }],
});

export const mutations = {
  SET_CATEGORIES(state, categories) {
    state.categories = categories;
  },
  SET_TAGS(state, tags) {
    state.tags = tags;
  },
};

export const actions = {
  async nuxtServerInit({ dispatch }) {
    // アクションを呼び出す関数
    await dispatch('getCategories');
    await dispatch('getTags');
  },

  async getCategories({ commit }) {
    const config = {
      content_type: 'category',
      order: '-sys.createdAt',
    };
    const { items } = await client.getEntries(config);
    const categories = items.map(({ fields, sys }) => ({
      id: sys.id,
      name: fields.name,
    }));
    commit('SET_CATEGORIES', categories);
  },
  async getTags({ commit }) {
    const config = {
      content_type: 'articleTag',
      order: '-sys.createdAt',
    };
    const { items } = await client.getEntries(config);
    const tags = items.map(({ fields, sys }) => ({
      id: sys.id,
      name: fields.name,
    }));
    commit('SET_TAGS', tags);
  },
};
