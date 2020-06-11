<template>
  <div class="container py-6 px-2">
    <div class="Top w-full md:w-7/12 flex justify-around items-center">
      <span class="text-xl md:text-2xl font-bold whitespace-no-wrap">Whyte's Projects</span>
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

    <div
      class="Projects grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-4 px-4"
    >
      <div
        v-for="project in projects"
        :key="project.id"
        class="bg-white w-full flex flex-col justify-between col-span-1 shadow-lg rounded-md overflow-hidden"
      >
        <div class="w-full">
          <img
            :src="getImg(project.img)"
            :alt="project.name"
            class="w-full h-full object-cover object-center"
          />
        </div>

        <div
          class="w-full flex items-center justify-between py-2 px-4 bg-white text-text2 font-semibold"
        >
          <span class="text-md md:text-xl uppercase">{{project.name}}</span>

          <div class="Links whitespace-no-wrap">
            <a
              :href="project.github"
              target="_blank"
              class="transition duration-300 bg-light py-1 px-2 rounded text-secondary hover:bg-text1 hover:text-light active:bg-accent mr-3"
            >
              <i class="fab fa-github"></i>
            </a>
            <a
              :href="project.website"
              target="_blank"
              class="transition duration-300 bg-light py-1 px-2 rounded text-secondary hover:bg-text1 hover:text-light active:bg-accent"
            >
              <i class="fas fa-eye"></i>
            </a>
          </div>
        </div>
        <div class="description px-4 py-4 text-text1 bg-light text-lg">
          <p>{{project.description}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data: () => ({}),
  methods: {
    getImg(pic) {
      return require(`../assets/Portfolio/${pic}`);
    }
  },
  computed: {
    ...mapGetters({ projects: "getProjects" })
  }
};
</script>