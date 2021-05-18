<template>
  <div>
    <button @click="toggleModal">Open</button>

    <transition name="fade">
      <div v-if="isOpen" class="modal">
        <button @click="toggleModal">Close</button>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggleModal() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>
<style scoped>
.modal {
  width: 200px;
  height: 200px;
  background: #eee;
  margin: 20px auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
