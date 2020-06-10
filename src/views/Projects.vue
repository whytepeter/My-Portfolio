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
  </div>
</template>
<script>
export default {
  data: () => ({})
};
</script>