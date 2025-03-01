<template>
  <div class="flex w-full justify-center">
    <img src="/src/assets/images/banner-login.png" class="w-full" alt="" />
    <div class="dark:bg-gray-900 w-[448px]">
      <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div
          class="w-[448px] rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
        >
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1
              class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"
            >
              Sign in to your account
            </h1>
            <form class="mt-4" action="#">
              <div>
                <label
                  for="email"
                  class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Your email</label
                >
                <input
                  type="email"
                  name="email"
                  id="email"
                  class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  v-model="form.email"
                  @input="inputEmail"
                  @blur="validateEmail"
                />
                <div class="text-red-500 text-left text-sm mt-2 h-5">
                  <span v-if="emailError">
                    {{ emailError }}
                  </span>
                </div>
              </div>
              <div>
                <label
                  for="password"
                  class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Password</label
                >
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  v-model="form.password"
                  @input="inputPassword"
                  @blur="validatePassword"
                  class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                <div class="text-red-500 text-left text-sm mt-2 h-9 mb-1">
                  <span v-if="passwordError">
                    {{ passwordError }}
                  </span>
                </div>
              </div>
              <div class="flex items-center mb-5 justify-between">
                <div class="flex items-start">
                  <div class="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    />
                  </div>
                  <div class="ml-3 text-sm">
                    <label for="remember" class="text-gray-500 dark:text-gray-300"
                      >Remember me</label
                    >
                  </div>
                </div>
              </div>
              <button
                @click="handleLogin"
                :class="
                  isValidError
                    ? 'bg-gray-300 text-gray-600'
                    : 'text-white bg-blue-600 hover:bg-blue-700 focus:ring-blue-300'
                "
                class="w-full focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Login
              </button>

              <div class="flex login-with items-center w-full mt-5 justify-between">
                <button
                  class="py-2 border button flex gap-2 border-slate-200 justify-center h-10 px-3 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150"
                >
                  <img
                    class="ml-4 w-4 h-4"
                    src="https://www.svgrepo.com/show/475656/google-color.svg"
                    loading="lazy"
                    alt="google logo"
                  />
                  <span class="pr-4 text-sm">Login with Google</span>
                </button>
                <button
                  class="py-2 button border flex gap-2 border-slate-200 justify-center mt-5 xl:mt-0 h-10 px-3 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150"
                >
                  <img
                    class="ml-4 w-4 h-4"
                    src="/src/assets/images/apple.svg"
                    loading="lazy"
                    alt="apple logo"
                  />
                  <span class="pr-4 text-sm">Login with Apple</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Login",

  data() {
    return {
      form: {
        username: "",
        password: "",
      },
      emailError: "",
      passwordError: "",
    };
  },
  computed: {
    isValidError() {
      if (this.emailError || this.passwordError || !this.form.email || !this.form.password)
        return true;
      return false;
    },
  },
  methods: {
    handleLogin() {
      if (this.emailError || this.passwordError || !this.form.email || !this.form.password) return;
      this.$router.push("/dashboard");
      localStorage.setItem("email", this.form.email);
    },
    validateEmail() {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!this.form.email) {
        this.emailError = "Vui Lòng nhập Email";
      } else if (!emailRegex.test(this.form.email)) {
        this.emailError = "Email không hợp lệ";
      } else {
        this.emailError = "";
      }
    },
    validatePassword() {
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      if (!this.form.password) {
        this.passwordError = "Vui Lòng nhập Mật Khẩu";
      } else if (!passwordRegex.test(this.form.password)) {
        this.passwordError =
          "Mật khẩu không hợp lệ. Mật khẩu phải có ít nhất 8 ký tự, bao gồm cả chữ hoa, chữ thường, số và ký tự đặc biệt";
      } else {
        this.passwordError = "";
      }
    },
    inputEmail() {
      this.emailError = "";
    },
    inputPassword() {
      this.passwordError = "";
    },
  },
});
</script>

<style scoped>
.login-with {
  flex-direction: column;
}
.button {
  margin-top: 12px;
}
@media screen and (min-width: 1280px) {
  .login-with {
    flex-direction: row;
  }
  .button {
    margin-top: 0;
  }
}
</style>
