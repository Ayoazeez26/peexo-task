<template>
  <div>
    <transition name="modal">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div
            class="modal-container flex flex-col items-center justify-between"
          >
            <button
              class="bg-white text-white text-sm font-bold mb-24 mt-10 px-4 py-2 bg-opacity-10"
              @click="$emit('close')"
            >
              Close Image
            </button>
            <img class="profile" src="../assets/profile-pic.png" alt="Profile Picture">
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.87);
  transition: opacity 0.3s ease;
}

.modal-container {
  width: 600px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: transparent;
  transition: all 0.3s ease;
}

.modal-body {
  margin: 20px 0;
}

button {
  border-radius: 19px;
}

img.profile {
  width: 344px;
  height: 344px;
}

@media screen and (max-width: 767px) {
  .modal-container {
    width: 100%;
    height: 100%;
    border-radius: 0;
    padding-top: 4rem;
    padding-bottom: 4rem;
  }
}
/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
