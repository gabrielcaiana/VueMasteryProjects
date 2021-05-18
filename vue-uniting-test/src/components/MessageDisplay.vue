<template>
  <div>
    <p v-if="error" data-testid="message-error">{{ error }}</p>
    <p v-else data-testid="message">{{ message.text }}</p>
  </div>
</template>

<script>
import { getMessage } from '@/services/axios.js';
export default {
  data: () => ({
    message: '',
    error: null,
  }),

  async created() {
    try {
      this.message = await getMessage();
    } catch (err) {
      this.error = `Oops! something went wrong`;
    }
  },
};
</script>

<style lang="scss" scoped></style>
