<template>
  <div
    class="text-text2 relative h-auto grid gap-10 grid-cols-1 md:grid-cols-2 grid-rows-2 md:grid-rows-1 mx-auto lg:w-10/12 py-6"
  >
    <div
      class="Doddle animate__animated animate__pulse animate__slow animate__infinite absolute md:hidden top-0 right-0 mr-6 z-30"
    >
      <router-link to="/contact">
        <div @click="goto('contact')"
          class="transition duration-300 cursor-pointer bg-white text-3xl px-3 py-1 text-text2 overflow-hidden rounded-full border-4 border-light shadow-lg focus:shadow-2xl hover:text-text1"
        >
          <i class="fas fa-paper-plane"></i>
        </div>
      </router-link>
    </div>
    <div
      class="PROFILE animate__animated animate__fadeInLeft mx-auto px-2 col-span-1 row-span-1 flex justify-between rounded-lg shadow-lg"
    >
      <div
        class="Profile-Me rounded-lg relative w-11/12 flex flex-col justify-between overflow-hidden"
      >
        <div class="Image h-full rounded-lg">
          <img
            src="../assets/about-whyte.png"
            alt="whyte peter"
            class="object-cover object-top w-full rounded-t-lg h-full"
          />
        </div>
        <div
          class="Title absolute bottom-0 right-0 text-accent bg-secondary text-md sm:text-2xl md:text-xl uppercase text-center font-medium px-2 py-3 w-10/12 self-end rounded-tl-md"
        >
          <span class="whitespace-no-wrap">Front-End Developer</span>
        </div>
      </div>
      <!-- Social Links -->
      <div class="Social w-auto flex flex-col py-6 justify-around text-2xl">
        <a
          href="https://github.com/whytepeter"
          target="_blank"
          class="transition duration-300 flex items-center py-3 px-2 whitespace-no-wrap hover:text-accent focus:text-accent"
        >
          <i class="fab fa-github"></i>
        </a>

        <a
          href="https://web.facebook.com/whytecode1/"
          target="_blank"
          class="transition duration-300 flex items-center py-3 px-2 pl-3 whitespace-no-wrap hover:text-accent focus:text-accent"
        >
          <i class="fab fa-facebook"></i>
        </a>
        <a
          href="https://twitter.com/whytecode"
          target="_blank"
          class="transition duration-300 flex items-center py-3 px-2 pl-3 whitespace-no-wrap hover:text-accent focus:text-accent"
        >
          <i class="fab fa-twitter"></i>
        </a>
        <a
          href="https://www.instagram.com/dewhytepeter/"
          target="_blank"
          class="transition duration-300 flex items-center py-3 px-2 pl-3 whitespace-no-wrap hover:text-accent focus:text-accent"
        >
          <i class="fab fa-instagram"></i>
        </a>
        <a
          href="https://wa.me/2348108139758/"
          target="_blank"
          class="transition duration-300 flex items-center py-3 px-2 pl-3 whitespace-no-wrap hover:text-accent focus:text-accent"
        >
          <i class="fab fa-whatsapp"></i>
        </a>
      </div>
    </div>
    <div class="INFO col-span-1 row-span-1">
      <div class="px-6">
        <div
          class="animate__animated animate__fadeInRight animate__slow w-full flex justify-around md:justify-between mb-5"
        >
          <span class="text-2xl md:text-4xl text-secondary whitespace-no-wrap font-bold">Whyte Peter</span>
          <a
            href="https://github.com/whytepeter"
            target="_blank"
            class="transition duration-300 flex items-center py-3 px-2 whitespace-no-wrap text-accent hover:text-text2 focus:text-text2"
          >
            <span class="text-secondary hover-text-text2">
              <i class="fab fa-github"></i>
            </span>
            <span
              class="transition duration-300 uppercase text-accent text-sm md:text-md hover:text-text1 ml-2 font-medium"
            >Visit Repo</span>
          </a>
        </div>

        <div class="ABOUT- animate__animated animate__fadeInRight w-full text-text1 mb-5">
          <p class="text-center md:text-left leading-8">
            I am a passionate young guy, with enthusiasm for
            building experience, adept in UI UX Design,
            Web Development and Web Design.
          </p>
        </div>

        <div
          class="SKILLS animate__animated animate__fadeInUp animate__delay-2s flex flex-col mb-5"
        >
          <div class="w-full flex justify-center md:justify-between">
            <span
              class="text-tect2 hidden md:block font-medium md:text-xl whitespace-no-wrap"
            >Web Design</span>
            <span
              class="uppercase text-accent text-xl font-medium whitespace-no-wrap"
            >html css javscript</span>
          </div>
          <div class="w-full flex justify-center md:justify-between">
            <span class="text-tect2 hidden md:block font-medium md:text-xl">UI UX</span>
            <span
              class="uppercase text-accent text-xl font-medium whitespace-no-wrap"
            >Figma adobe-xd</span>
          </div>
          <div class="w-full flex justify-center md:justify-between">
            <span class="text-tect2 hidden md:block font-medium md:text-xl whitespace-no-wrap">Stack</span>
            <span class="uppercase text-accent text-xl font-medium whitespace-no-wrap">mevn</span>
          </div>
        </div>

        <div class="Contact w-full text-center md:text-left">
          <router-link
            to="/contact"
            class="animate__animated animate__fadeInUp animate__delay-3s animate_slow w-32 transition-all duration-300 relative inline-block bg-secondary my-4 text-text1 py-2 px-8 rounded-md transform hover:text-accent hover:translate-y-2 focus:outline-none border-2 active:border-secondary active:border-opacity-25"
          >
            <a @click="goto('shootme')">
              <span
                class="absolute text-accent flex items-center text-2xl left-0 top-0 bottom-0 h-full-ml-2"
              >
                <svg
                  class="transition duration-500 h-8 w-8 fill-current text-accent -ml-2 hover:-ml-3"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 448"
                >
                  <path d="M.213 32L0 181.333 320 224 0 266.667.213 416 448 224z" />
                </svg>
              </span>
              <span class="whitespace-no-wrap">Shoot Me</span>
            </a>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  data: () => ({}),
  methods: {
    ...mapMutations(["goto"])
  }
};
</script>

<style>
.h-90 {
  height: 95%;
}

.PROFILE {
  max-width: 450px;
  max-height: 450px;
}
</style>