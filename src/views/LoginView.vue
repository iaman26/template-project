<template>
  <div class="login">
    <Login @login="handleLogin" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Login from "@/components/Login.vue";

export default defineComponent({
  components: {
    Login,
  },
  methods: {
    handleLogin(credentials: { username: string; password: string }) {
      // Handle user authentication logic here
      console.log("Logging in with:", credentials);
    },
  },
});
</script>

<style scoped>
.login {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
</style>
