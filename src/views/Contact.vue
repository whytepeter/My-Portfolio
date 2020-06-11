<template>
  <div
    class="text-text2 h-auto grid col-gap-10 grid-cols-1 md:grid-cols-2 grid-rows-2 md:grid-rows-1 mx-auto lg:w-10/12 py-6"
  >
    <transition
      enter-active-class="animate__animated animate__fadeInDown"
      leave-active-class="animate__animated animate__fadeOutUp"
    >
      <div v-if="isAlert" class="Alert fixed top-0 left-0 mt-10 w-full flex justify-center z-40">
        <div class="bg-secondary rounded w-auto px-6 py-2">
          <span class="text-accent">{{alert}}</span>
        </div>
      </div>
    </transition>

    <div class="Left w-full flex :items-center mx-auto px-2 py-4 col-span-1 row-span-1">
      <div class="w-full px-2 py-4 text-center md:text-left">
        <span
          class="animate__animated animate__fadeInUp text-secondary text-5xl mb-6 font-extrabold uppercase"
        >Shoot me</span>

        <div
          class="animate__animated animate__fadeInLeft text-sm flex flex-col text-lg mb-6 mt-4 space-y-2"
        >
          <div class="text-text2 flex items-center text-center justify-center md:justify-start">
            <span class="text-secondary mr-2">
              <i class="fas fa-phone-alt"></i>
            </span>
            +234-810-8139-758
          </div>
          <div class="text-text2 flex items-center text-center justify-center md:justify-start">
            <span class="text-secondary mr-2">
              <i class="fas fa-envelope-open"></i>
            </span>
            whytewebonline@gmail.com
          </div>
        </div>

        <div
          class="Social animate__animated animate__fadeInUp flex justify-center md:justify-start text-2xl text-secondary mb-2"
        >
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
    </div>
    <div class="right w-full -mt-10 md:mt-0 mx-auto px-2 py-6 col-span-1 row-span-1">
      <form
        @submit.prevent="onSubmit"
        method="POST"
        netlify
        class="animate__animated animate__fadeInRight bg-secondary relative w-full rounded-lg px-6 py-6 flex flex-col justify-around"
      >
        <div class="mb-4 text-xl text-text1 font-bold flex items-center">
          Get In Touch
          <span class="text-2xl transform translate-x-6">
            <svg
              class="transition duration-500 h-6 w-6 fill-current -ml-2 hover:-ml-3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 448"
            >
              <path d="M.213 32L0 181.333 320 224 0 266.667.213 416 448 224z" />
            </svg>
          </span>
        </div>
        <div
          :class="[ isEmail ? 'border-accent' : 'border-text2']"
          class="Email-Field transition duration-300 mb-4 flex flex-col border-b-2"
        >
          <label
            for="email"
            :class="[isEmail ? 'translate-y-0 text-accent text-sm' : 'translate-y-6 ']"
            class="transition duration-300 transform font-medium"
          >Email Address</label>
          <input
            type="email"
            name="email"
            @input="validate('email')"
            @focusin="isEmail = true"
            @focusout="email == '' ? isEmail = false : isEmail = true"
            v-model="email"
            class="bg-transparent focus:outline-none pb-2 text-text1 font-semibold"
          />
        </div>
        <p class="Error text-red-800 transform -translate-y-2">{{error}}</p>
        <div
          :class="[ isMessage ? 'border-accent' : 'border-text2']"
          class="Message-Field transition duration-300 mb-6 flex flex-col border-b-2"
        >
          <label
            for="message"
            :class="[isMessage ? 'translate-y-0 text-accent text-sm' : 'translate-y-6 ']"
            class="transition duration-300 transform font-medium"
          >Message</label>

          <textarea
            type="text"
            name="message"
            @input="validate('message')"
            @focusin="isMessage = true"
            @focusout="message == '' ? isMessage = false : isMessage = true"
            Message
            v-model="message"
            class="bg-transparent focus:outline-none pb-2 text-text1 font-semibold"
          ></textarea>
        </div>
        <p class="Error text-red-800 transform -translate-y-4">{{msgError}}</p>
        <button
          type="submit"
          class="transition duration-300 transform uppercase self-end px-10 py-2 rounded font-medium bg-text1 text-secondary hover:bg-text2 focus:outline-none focus:bg-accent focus:text-secondary"
        >Send</button>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    error: null,
    msgError: null,
    isEmail: false,
    isMessage: false,
    isAlert: false,
    alert: null,

    email: "",
    message: ""
  }),
  methods: {
    validate(field) {
      if (field == "email") {
        if (this.email.trim() == "") {
          this.error = "Email is badly formatted";
          return false;
        } else {
          this.error = null;
          return true;
        }
      } else if (field == "message") {
        if (this.message.trim() == "") {
          this.msgError = "Message must not be empty";
          return false;
        } else {
          this.msgError = null;
          return true;
        }
      }
    },

    resetForm() {
      this.email = "";
      this.message = "";
      this.isEmail = false;
      this.isMessage = false;
    },

    setAlert(msg) {
      this.alert = msg;
      this.isAlert = true;

      setTimeout(() => {
        this.isAlert = false;
      }, 10000);
    },
    onSubmit() {
      if (this.validate("email") && this.validate("message")) {
        this.setAlert("Message sent successful");

        //clear fields
        this.resetForm();
        return true;
      } else {
        return false;
      }
    }
  }
};
</script>
<style >
.Error {
  font-size: 0.8rem;
}
</style>