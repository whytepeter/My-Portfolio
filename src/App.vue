<template>
  <div id="app" class="background relative w-screen h-screen bg-fixed">
    <div class="background index fixed top-0 left-0 bottom-0 right-0"></div>
    <div class="container height mx-auto px-0 md:px-4 py-6 font-lato">
      <app-navbar class="z-30" />
      <transition
        :duration="400"
        enter-active-class="animate__animated animate__fadeIn"
        leave-active-class="animate__animated animate__fadeOut"
        mode="out-in"
      >
        <keep-alive>
          <router-view />
        </keep-alive>
      </transition>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import Navbar from "./components/Navbar";
export default {
  components: {
    appNavbar: Navbar
  },
  computed: {
    ...mapGetters({ isActive: "getActive" })
  }
};
</script>

<style scoped>
.background {
  background-image: linear-gradient(to left, #fcfcfcea, #fcfcfcea),
    url("/background.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.index {
  z-index: -1;
}
.height {
  height: 93%;
}
</style>

