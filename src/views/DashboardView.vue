<template>
  <div class="dashboard-view">
    <Dashboard />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Dashboard from "@/components/Dashboard.vue";

export default defineComponent({
  components: {
    Dashboard,
  },
});
</script>

<style scoped>
.dashboard-view {
  padding: 20px;
}
</style>
