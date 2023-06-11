<template>
  <div v-if="father.logoTitle || father.logoImg" class="flex-row-center">
    <img v-if="father.logoImg" :src="father.logoImg" :style="logoStyle" />
    <div v-if="show" class="title ellipsis">{{ father.logoTitle }}</div>
  </div>
</template>
<script>
export default {
  name: 'BaseLogo',
  inject: ['father'],
  computed: {
    logoStyle() {
      return {
        height: `calc(${this.father.topHeight} - 16px)`,
        width: 'auto',
        margin: '8px',
      };
    },
    show() {
      if (this.father.layout === 'side') {
        return !this.father.isCollopse;
      }
      return true;
    },
  },
};
</script>
<style src="../style/base.css"></style>
<style scoped>
.title {
  max-width: 300px;
  padding: 0 8px;
}

.ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
