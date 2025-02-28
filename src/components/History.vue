<template>
  <div class="history">
    <h1>History</h1>
    <ul>
      <li v-for="(item, index) in historyItems" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'History',
  data() {
    return {
      historyItems: [
        'User logged in',
        'Viewed dashboard',
        'Updated profile',
        'Logged out',
      ],
    };
  },
});
</script>

<style scoped>
.history {
  padding: 20px;
}
</style>