<template>
  <div class="history-view">
    <Header :title="'History'" />
    <div class="flex">
      <Sidebar />
      <History />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import History from "@/components/History.vue";
import Header from "@/components/Header.vue";
import Sidebar from "@/components/Sidebar.vue";

export default defineComponent({
  components: {
    History,
    Header,
    Sidebar,
  },
});
</script>

<style scoped></style>
