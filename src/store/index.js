import { auth } from "@/firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { createStore } from "vuex";

export default createStore({
  state: {
    user: {
      loggedIn: false,
      data: null,
    },
  },
  getters: {
    user(state) {
      return state.user;
    },
  },
  mutations: {
    SET_LOGGED_IN(state, value) {
      state.user.loggedIn = value;
      console.log(value)
    },
    SET_USER(state, data) {
      state.user.data = data;
      console.log(state.user)
    },
  },
  actions: {
    async register(context, { email, password, name }) {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (response) {
        context.commit("SET_USER", response.user);
      } else {
        throw new Error("Unable to register user.");
      }
    },
    async logIn(context, { email, password }) {
      const response = await signInWithEmailAndPassword(auth, email, password);
      if (response) {
        context.commit("SET_USER", response.user);
      } else {
        throw new Error("Login failed.");
      }
    },
    async logOut(context) {
      context.commit("SET_USER", null);
    },
    async fetchUser(context, user) {
      context.commit("SET_LOGGED_IN", user !== null);
      if (user) {
        context.commit("SET_USER", {
          displayName: user.displayName,
          email: user.email,
        });
      } else {
        context.commit("SET_USER", null);
      }
    },
  },
  modules: {},
});
