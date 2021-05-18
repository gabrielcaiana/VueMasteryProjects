<template>
  <MessageDisplay />
</template>

<script>
export default {
  components: {
    MessageDisplay: () => import('@/components/MessageDisplay'),
  },
};
</script>

<style lang="scss" scoped></style>
