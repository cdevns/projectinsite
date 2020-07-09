import Vue from "vue";
import Vuex from "vuex";
import * as d3 from "d3";

Vue.use(Vuex);
export const store = new Vuex.Store({
  state: {
    subscribers: []
  },
  getters: {
    getterSubscribers: state => {
      return state.subscribers;
    }
  },
  mutations: {
    mutationSubscribersData: (state, payload) => {
      state.subscribers = payload;
    }
  },
  actions: {
    actionSubscribersData: async ({ commit }) => {
      let subsData = await d3.json("./data/subscribers.json");
      commit("mutationSubscribersData", subsData);
    }
  }
});
