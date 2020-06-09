<template>
  <div class="relative w-full m-auto px-4 py-2 flex justify-between items-center">
    <!-- brand logo -->
    <div class="Left-Logo">
      <router-link to="/" tag="li" class="list-none flex items-center">
        <a @click="goto('home')" class="flex items-center">
          <div class="w-12 mr-2">
            <img
              src="/logo-main.png"
              alt="WhyteWeb logo"
              class="rotate transition duration-500 min-h-full w-12"
            />
          </div>
          <div class="w-32">
            <img src="/text-logo.png" alt="WhyteWeb logo" class="min-w-full w-20" />
          </div>
        </a>
      </router-link>
    </div>
    <!-- menu button -->

    <div class="-mr-2 flex md:hidden z-20">
      <!-- Mobile menu button -->
      <button
        @click="mobile = true"
        :class="{ 'hidden ': mobile }"
        class="inline-flex items-center justify-center p-2 rounded-md text-text1 hover:text-light hover:bg-text2 focus:outline-none focus:bg-text2 focus:text-light"
      >
        <!-- Menu open: "hidden", Menu closed: "block" -->
        <svg class="block h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      <button
        @click="mobile = false"
        :class="{ 'hidden ': !mobile }"
        class="inline-flex items-center justify-center p-2 rounded-md text-text1 hover:text-light hover:bg-text2 focus:outline-none focus:bg-text2 focus:text-light"
      >
        <!-- Menu open: "block", Menu closed: "hidden" -->
        <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>

    <!-- navigation links -->
    <div class="Right-Links hidden md:flex items-center text-sm font-medium uppercase">
      <router-link tag="li" to="/" class="list-none">
        <a
          @click="goto('home')"
          :class="[isActive === 'home' ? 'text-accent' : 'text-gray-800']"
          class="transition duration-300 inline-block p-4 whitespace-no-wrap hover:text-textHover focus:text-accent"
        >Home</a>
      </router-link>
      <router-link tag="li" to="/about" class="list-none">
        <a
          @click="goto('about')"
          :class="[isActive === 'about' ? 'text-accent ' : 'text-gray-800']"
          class="transition duration-300 inline-block p-4 whitespace-no-wrap hover:text-textHover focus:text-accent"
        >About</a>
      </router-link>
      <router-link tag="li" to="/projects" class="list-none">
        <a
          @click="goto('projects')"
          :class="[isActive === 'projects' ? 'text-accent ' : 'text-gray-800']"
          class="transition duration-300 inline-block p-4 whitespace-no-wrap hover:text-textHover focus:text-accent"
        >Projects</a>
      </router-link>
      <router-link tag="li" to="/contact" class="list-none">
        <a
          @click="goto('shootme')"
          :class="[isActive === 'shootme' ? 'text-accent ' : 'text-gray-800']"
          class="transition duration-300 inline-block p-4 whitespace-no-wrap hover:text-textHover focus:text-accent"
        >Shoot Me</a>
      </router-link>
    </div>

    <!-- mobile nav links -->
    <transition
      enter-active-class="animate__animated animate__slideInRight"
      leave-active-class="animate__animated animate__slideOutRight"
    >
      <div
        v-if="mobile"
        class="Mobile-Links fixed top-0 bottom-0 right-0 mx-auto py-10 rounded-tl-lg rounded-bl-lg w-56 shadow-md bg-secondary flex flex-col md:hidden items-start text-lg text-text1 font-medium"
      >
        <div>
          <router-link tag="li" to="/" class="list-none px-4 w-full text-left">
            <a
              @click=";(mobile = false), goto('home')"
              :class="[isActive === 'home' ? 'text-accent' : 'text-text1']"
              class="transition duration-300 inline-block py-3 px-6 whitespace-no-wrap hover:text-textHover"
            >Home</a>
          </router-link>
          <router-link tag="li" to="/about" class="list-none px-4 w-full text-left">
            <a
              @click=";(mobile = false), goto('about')"
              :class="[isActive === 'about' ? 'text-accent' : 'text-text1']"
              class="transition duration-300 inline-block py-3 px-6 whitespace-no-wrap hover:text-textHover"
            >About</a>
          </router-link>
          <router-link tag="li" to="/projects" class="list-none px-4 w-full text-left">
            <a
              @click=";(mobile = false), goto('projects')"
              :class="[isActive === 'projects' ? 'text-accent' : 'text-text1']"
              class="transition duration-300 inline-block py-3 px-6 whitespace-no-wrap hover:text-textHover"
            >Projects</a>
          </router-link>
          <router-link tag="li" to="/contact" class="list-none px-4 w-full text-left">
            <a
              @click=";(mobile = false), goto('shootme')"
              :class="[isActive === 'shootme' ? 'text-accent' : 'text-text1']"
              class="transition duration-300 inline-block py-3 px-6 whitespace-no-wrap hover:text-textHover"
            >Shoot Me</a>
          </router-link>
        </div>
        <span class="h-1 w-7/12 ml-8 my-4 bg-text1 opacity-25 rounded-full"></span>
        <div class="Social flex flex-col px-3 my-3 text-xl">
          <a
            href="https://github.com/whytepeter"
            target="_blank"
            class="transition duration-300 flex items-center py-3 px-6 whitespace-no-wrap hover:text-textHover focus:text-accent"
          >
            <i class="fab fa-github"></i>
            <span
              class="transition duration-300 text-sm ml-3 text-text2 hover:text-text1"
            >whytepeter</span>
          </a>

          <a
            href="https://web.facebook.com/whytecode1/"
            target="_blank"
            class="transition duration-300 flex items-center py-3 px-6 whitespace-no-wrap hover:text-textHover focus:text-accent"
          >
            <i class="fab fa-facebook"></i>
            <span
              class="transition duration-300 text-sm ml-3 text-text2 hover:text-text1"
            >@Whytecode1</span>
          </a>
          <a
            href="https://twitter.com/whytecode"
            target="_blank"
            class="transition duration-300 flex items-center py-3 px-6 whitespace-no-wrap hover:text-textHover focus:text-accent"
          >
            <i class="fab fa-twitter"></i>
            <span
              class="transition duration-300 text-sm ml-3 text-text2 hover:text-text1"
            >@whytecode</span>
          </a>
          <a
            href="https://www.instagram.com/dewhytepeter/"
            target="_blank"
            class="transition duration-300 flex items-center py-3 px-6 whitespace-no-wrap hover:text-textHover focus:text-accent"
          >
            <i class="fab fa-instagram"></i>
            <span
              class="transition duration-300 text-sm ml-3 text-text2 hover:text-text1"
            >@dewhytepeter</span>
          </a>
          <a
            href="https://wa.me/2348108139758/"
            target="_blank"
            class="transition duration-300 flex items-center py-4 px-6 whitespace-no-wrap hover:text-textHover focus:text-accent"
          >
            <i class="fab fa-whatsapp"></i>
            <span
              class="transition duration-300 text-sm ml-3 text-text2 hover:text-text1"
            >+234-810-8139-758</span>
          </a>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  data: () => ({
    mobile: false,
    fadeIn: "",
    fadeOut: ""
  }),
  methods: {
    ...mapMutations(["goto"])
  },
  computed: {
    ...mapGetters({ isActive: "getActive" })
  }
};
</script>
<style scoped>
.rotate {
  transition: all 0.5s ease-in-out;
}

.rotate:hover {
  transform: rotate(360deg);
}
</style>
