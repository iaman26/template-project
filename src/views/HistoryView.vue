<template>
  <div class="history-view">
    <History />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import History from "@/components/History.vue";

export default defineComponent({
  components: {
    History,
  },
});
</script>

<style scoped>
.history-view {
  padding: 20px;
}
</style>
