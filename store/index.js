/* eslint no-shadow: ["error", { "allow": ["state"] }] */
/* eslint-disable no-param-reassign */

import createClient from '@/plugins/contentful';

const client = createClient();

/**
 * state
 */
export const state = () => ({
  categories: [],
  tags: [],
  articles: [],
});

/**
 * getter
 */
export const getters = {
  articleList: state => {
    return state.articles.map(item => {
      return {
        id: item.id,
        fields: {
          title: item.fields.title,
          tags: item.fields.tags,
          category: item.fields.category,
          description: item.fields.description,
        },
        createdAt: item.createdAt,
      };
    });
  },
};

/**
 * mutations
 */
export const mutations = {
  SET_CATEGORIES(state, categories) {
    state.categories = categories;
  },
  SET_TAGS(state, tags) {
    state.tags = tags;
  },
  SET_ARTICLES(state, articles) {
    state.articles = articles;
  },
};

/**
 * actions
 */
export const actions = {
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
  async getArticles({ commit }) {
    const config = {
      content_type: 'cheezBlog',
      order: '-sys.createdAt',
    };
    const { items } = await client.getEntries(config);
    const articles = items.map(({ fields, sys }) => ({
      id: sys.id,
      fields,
      createdAt: sys.createdAt,
    }));
    commit('SET_ARTICLES', articles);
  },
};
