<template>
  <div class="h-screen relative grid grid-cols-3 grid-rows-2 gap-2 text-text2 overflow-hidden">
    <div
      class="Doddle animate__animated animate__pulse animate__slow animate__infinite md:hidden absolute top-0 right-0 mr-6 z-30"
    >
      <router-link to="/about">
        <a @click="goto('about')"
          class="transition duration-300 w-16 h-16 overflow-hidden rounded-full border-4 border-light shadow-lg focus:shadow-2xl"
        />
          <img
            src="../assets/about-head.png"
            alt="whyte"
            class="w-full h-full object-cover object-top"
          />
        
      </router-link>
    </div>
    <div class="INFO px-6 pt-16 pb-6 items-center col-span-3 lg:col-span-1">
      <div class="w-full flex flex-col items-left md:items-center lg:items-start">
        <div
          class="animate__animated animate__fadeInLeft animate__slow text-text1 text-md md:text-lg font-medium"
        >Hello, It's</div>
        <div
          class="animate__animated animate__fadeInLeft animate__delay-2s text-secondary font-bold text-4xl md:text-5xl whitespace-no-wrap"
        >Whyte Peter</div>
        <div
          class="animate__animated animate__fadeInLeft animate__delay-3s text-text2 text-md md:text-xl whitespace-no-wrap"
        >
          I AM A
          <span
            :class="work.skillAnim"
            class="text-accent ml-3 text-lg sm:text-sm md:text-xl font-semibold tracking-widest uppercase"
          >{{iAm}}</span>
        </div>
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
    <div class="Photo flex justify-center mt-6 hidden lg:block col-span-2 row-span-2 z-10">
      <div class="img-w">
        <img
          src="../assets/whyte-new.png"
          alt="whyte peter"
          class="object-cover object-top transform w-full h-full -translate-y-12 translate-x-10"
        />
      </div>
    </div>
    <div class="Social absolute z-20 top-0 right-0 py-4 flex">
      <div class="Social h-auto flex flex-col justify-between items-end px-1 md:py-4 mt-10 text-xl">
        <a
          href="https://github.com/whytepeter"
          target="_blank"
          class="transition duration-300 flex items-center py-6 px-6 whitespace-no-wrap hover:text-accent focus:text-accent"
        >
          <i class="fab fa-github"></i>
        </a>

        <a
          href="https://web.facebook.com/whytecode1/"
          target="_blank"
          class="transition duration-300 flex items-center py-6 px-6 whitespace-no-wrap hover:text-accent focus:text-accent"
        >
          <i class="fab fa-facebook"></i>
        </a>
        <a
          href="https://twitter.com/whytecode"
          target="_blank"
          class="transition duration-300 flex items-center py-6 px-6 whitespace-no-wrap hover:text-accent focus:text-accent"
        >
          <i class="fab fa-twitter"></i>
        </a>
        <a
          href="https://www.instagram.com/dewhytepeter/"
          target="_blank"
          class="transition duration-300 flex items-center py-6 px-6 whitespace-no-wrap hover:text-accent focus:text-accent"
        >
          <i class="fab fa-instagram"></i>
        </a>
        <a
          href="https://wa.me/2348108139758/"
          target="_blank"
          class="transition duration-300 flex items-center py-6 px-6 whitespace-no-wrap hover:text-accent focus:text-accent"
        >
          <i class="fab fa-whatsapp"></i>
        </a>
      </div>
    </div>
    <div class="Portfolio absolute flex bg-secondary h-32 w-full lg:w-9/12 bottom-0 left-0">
      <div class="Project w-40 h-full bg-white">
        <img :src="getImg(project.img)" :alt="project.name" class="object-cover h-full w-full" />
      </div>
      <div class="Project-Info h-full flex flex-col justify-between w-auto text-text1 px-4 py-3">
        <div class="name uppercase">{{project.name}}</div>
        <div class="link w-full flex items-center">
          <a
            :href="project.github"
            target="_blank"
            class="transition duration-300 bg-light py-1 px-2 rounded text-secondary hover:bg-text1 active:bg-accent mr-5"
          >
            <i class="fab fa-github"></i>
          </a>
          <a
            :href="project.website"
            target="_blank"
            class="transition duration-300 bg-light py-1 px-2 rounded text-secondary hover:bg-text1 active:bg-accent"
          >
            <i class="fas fa-eye"></i>
          </a>
        </div>
        <router-link
          to="/projects"
          class="portfol transition duration-300 text-accent text-base hover:text-text2"
        >
          <a @click="goto('projects')" class="flex items-centers">
            <p>See more</p>
            <span class="text-xl ml-2">
              <i class="fas fa-long-arrow-alt-right"></i>
            </span>
          </a>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "Home",
  data: () => ({
    work: {
      skill: null,
      skills: ["UI UX Designer", "Graphic Designer", "Web Developer"],
      current: 0,
      skillAnim: "animate__animated animate__fadeInDown"
    },
    carousel: {
      current: 0,
      project: {}
    }
  }),

  methods: {
    ...mapMutations(["goto"]),
    setSkills() {
      let last = this.work.skills.length - 1;
      this.work.skill = this.work.skills[this.work.current];

      let isLast = this.work.skills.indexOf(this.work.skill) == last;
      if (isLast) {
        this.work.current = 0;
      } else {
        ++this.work.current;
      }
    },
    setAnim() {
      if (this.work.skillAnim == "animate__animated animate__fadeInDown") {
        this.work.skillAnim = "animate__animated animate__fadeOutUp";
      } else if (
        this.work.skillAnim == "animate__animated animate__fadeOutUp"
      ) {
        this.work.skillAnim = "animate__animated animate__fadeInDown";
      }
    },

    setProject() {
      let last = this.projects.length - 1;
      this.carousel.project = this.projects[this.carousel.current];
      let isLast = this.projects.indexOf(this.carousel.project) == last;

      if (isLast) {
        this.carousel.current = 0;
      } else {
        ++this.carousel.current;
      }
    },

    getImg(pic) {
      return require(`../assets/Portfolio/${pic}`);
    }
  },
  computed: {
    ...mapGetters({ isActive: "getActive", projects: "getProjects" }),
    iAm() {
      return this.work.skill;
    },
    project() {
      return this.carousel.project;
    }
  },

  created() {
    setInterval(() => {
      this.setSkills();
    }, 8000);

    setInterval(() => {
      this.setAnim();
    }, 4000);

    setInterval(() => {
      this.setProject();
    }, 7000);
  }
};
</script>

<style  >
.h-90 {
  height: 70%;
}

.img-w {
  max-width: 660px;
  max-height: 700px;
}
</style>