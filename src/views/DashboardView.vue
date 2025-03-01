<template>
  <div class="dashboard-view">
    <Header :title="'Dashboard'" />
    <div class="flex">
      <Sidebar />
      <Dashboard />
    </div>
  </div>
</template>

<script lang="ts">
import Sidebar from "@/components/Sidebar.vue";
import Header from "@/components/Header.vue";
import { defineComponent } from "vue";
import Dashboard from "@/components/Dashboard.vue";

export default defineComponent({
  components: {
    Dashboard,
    Header,
    Sidebar,
  },
});
</script>

<style scoped></style>
