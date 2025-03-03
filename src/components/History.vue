<template>
  <div class="w-full">
    <div class="w-full p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
      <div class="overflow-x-auto">
        <div class="flex justify-between">
          <div class="text-left text-xl font-bold mt-2 mb-5">List History</div>
          <button
            @click="addNewUser"
            class="text-white bg-blue-600 hover:bg-blue-700 px-7 rounded-lg text-sm h-fit py-2.5"
          >
            {{ isAdd ? "Save" : "Add new user" }}
          </button>
        </div>
        <table class="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
          <thead>
            <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th class="py-3 px-6 text-left">Active</th>
              <th class="py-3 px-6 text-left">Email</th>
              <th class="py-3 px-6 text-left">Time</th>
              <th class="py-3 px-6 text-left">Ip</th>
              <th class="py-3 px-6 text-left cursor-pointer"></th>
            </tr>
          </thead>
          <tbody class="text-gray-700 text-sm">
            <tr
              v-for="(item, index) in history"
              :key="index"
              class="border-b border-gray-300 hover:bg-gray-100"
            >
              <td class="w-4 p-4">
                <div class="flex justify-center">
                  <input
                    id="checkbox-table-search-1"
                    type="checkbox"
                    v-model="item.active"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                </div>
              </td>
              <td class="py-3 px-6 text-left">{{ item.email }}</td>
              <td class="py-3 px-6 text-left">{{ item.time }}</td>
              <td class="py-3 px-6 text-left">{{ item.ip }}</td>
              <td class="py-3 px-6 text-right flex">
                <img class="w-6 h-6 mr-4" src="/src/assets/images/Edit.svg" alt="" />
                <img class="w-6 h-6 mr-4" src="/src/assets/images/Details.png" alt="" />
                <img
                  class="w-6 h-6 mr-4"
                  @click="deleteUser(item)"
                  src="/src/assets/images/delete.png"
                  alt=""
                />
              </td>
            </tr>
            <tr v-if="isAdd">
              <td class="w-4 p-4">
                <div class="flex justify-center">
                  <input
                    id="checkbox-table-search-1"
                    type="checkbox"
                    v-model="addHistory.active"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                </div>
              </td>
              <td class="py-3 px-6 text-left">
                <div class="relative z-0 w-full mb-5 group">
                  <input
                    type="email"
                    name="floating_email"
                    id="floating_email"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder="Email"
                    v-model="addHistory.email"
                  />
                </div>
              </td>
              <td class="py-3 px-6 text-left">
                <div class="relative z-0 w-full mb-5 group">
                  <input
                    type="text"
                    name="floating_time"
                    id="floating_time"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder="Time"
                    v-model="addHistory.time"
                  />
                </div>
              </td>
              <td class="py-3 px-6 text-left">
                <div class="relative z-0 w-full mb-5 group">
                  <input
                    type="text"
                    name="floating_ip"
                    id="floating_ip"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder="Ip"
                    v-model="addHistory.ip"
                  />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="mx-4"><Pagination /></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Pagination from "./Pagination.vue";

export default defineComponent({
  name: "History",
  components: {
    Pagination,
  },
  data() {
    return {
      history: [
        {
          active: true,
          email: "nguyenvana@example.com",
          time: "2023-03-01 08:00:00",
          ip: "192.168.1.100",
          id: 1,
        },
        {
          active: false,
          email: "nguyenvanb@example.com",
          time: "2023-03-01 09:00:00",
          ip: "192.168.1.200",
          id: 2,
        },
        {
          active: true,
          email: "nguyenvana@example.com",
          time: "2023-03-02 10:00:00",
          ip: "192.168.1.100",
          id: 3,
        },
        {
          active: false,
          email: "nguyenvanc@example.com",
          time: "2023-03-03 11:00:00",
          ip: "192.168.1.300",
          id: 4,
        },
      ],
      addHistory: {
        active: false,
        email: "",
        time: "",
        ip: "",
        id: "",
      },
      isAdd: false,
    };
  },
  methods: {
    addNewUser() {
      if (this.isAdd) {
        this.saveUser();
      } else {
        this.isAdd = true;
      }
    },
    saveUser() {
      this.isAdd = false;
      console.log(this.addHistory);

      this.history.push(this.addHistory);
      this.addHistory = {
        active: false,
        email: "",
        time: "",
        ip: "",
        id: "",
      };
    },
    deleteUser(item: any) {
      this.history = this.history.filter((history) => history.id !== item.id);
    },
  },
});
</script>

<style scoped>
.history {
  padding: 20px;
}
</style>
