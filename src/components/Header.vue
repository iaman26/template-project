<template>
  <div class="flex justify-between bg-gray-50 border border-gray-200 rounded-t-xl">
    <h1 class="text-2xl font-bold flex justify-center items-center w-64">{{ title }}</h1>
    <div class="flex m-3">
      <div class="text-left mr-4">
        <div class="text-gray-500 mb-4">Login with user: {{ email }}</div>
        <button @click="Logout" class="text-gray-500">Log out</button>
      </div>
      <img
        class="w-10 my-3 h-10 rounded-full"
        src="/src/assets/images/profile-picture-5.jpg"
        alt="Rounded avatar"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Header",
  props: {
    title: String,
  },
  data() {
    return {
      email: "",
    };
  },
  mounted() {
    this.email = localStorage.getItem("email");
  },
  methods: {
    Logout() {
      localStorage.removeItem("email");
      this.$router.push("/login");
    },
  },
});
</script>

<style scoped></style>
