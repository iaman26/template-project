<template>
  <div class="w-full p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
    <div class="grid grid-cols-2 gap-4 mb-4">
      <div
        class="rounded-sm bg-gray-50 w-full h-36 shadow rounded mb-4 flex justify-between items-center"
      >
        <div class="p-4">
          <img class="w-10 h-10" src="/src/assets/images/user-svgrepo-com.svg" alt="" />
        </div>
        <div class="ml-4 h-24 flex flex-col justify-between">
          <p class="text-gray-500">User</p>
          <p class="text-2xl font-bold">102,400</p>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-2 gap-4 mb-4">
      <div
        class="rounded-sm bg-gray-50 w-full h-36 shadow rounded mb-4 flex justify-between items-center"
      >
        <div class="p-4">
          <img class="w-10 h-10" src="/src/assets/images/Ionic-Ionicons-Today.svg" alt="" />
        </div>
        <div class="ml-4 h-24 flex flex-col justify-between">
          <p class="text-gray-500">Login today</p>
          <p class="text-2xl font-bold">400</p>
        </div>
      </div>

      <div
        class="rounded-sm bg-gray-50 w-full h-36 shadow rounded mb-4 flex justify-between items-center"
      >
        <div class="p-4">
          <img class="w-10 h-10" src="/src/assets/images/date.png" alt="" />
        </div>
        <div class="ml-4 h-24 flex flex-col justify-between">
          <p class="text-gray-500">Login this month</p>
          <p class="text-2xl font-bold">2,400</p>
        </div>
      </div>
    </div>
    <div class="w-full p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
      <div class="overflow-x-auto">
        <div class="text-left text-xl font-bold mt-2 mb-5">
          List of non Active Users in the last 7 days
        </div>
        <table class="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
          <thead>
            <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th class="py-3 px-6 text-left">Name</th>
              <th class="py-3 px-6 text-left">Status</th>
              <th class="py-3 px-6 text-left cursor-pointer">Time</th>
            </tr>
          </thead>
          <tbody class="text-gray-700 text-sm">
            <tr
              class="border-b border-gray-300 hover:bg-gray-100"
              v-for="(user, index) in nonActiveUsers"
              :key="index"
            >
              <td class="py-3 px-6 text-left">{{ user.name }}</td>
              <td class="py-3 px-6 text-left">{{ user.status }}</td>
              <td class="py-3 px-6 text-left">{{ user.time }}</td>
            </tr>
          </tbody>
        </table>
        <div class="mt-4">
          <Pagination />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Pagination from "./Pagination.vue";

export default defineComponent({
  name: "Dashboard",
  components: {
    Pagination,
  },
  data() {
    return {
      nonActiveUsers: [
        { name: "Nguyễn Văn A", status: "Non Active", time: "2023-03-01" },
        { name: "Nguyễn Văn B", status: "Non Active", time: "2023-03-02" },
        { name: "Nguyễn Văn C", status: "Non Active", time: "2023-03-03" },
      ],
    };
  },
});
</script>

<style scoped></style>
