<template>
  <el-menu
    :background-color="backgroundColor"
    :text-color="textColor"
    :collapse="collopse"
    :collapse-transition="false"
    :mode="mode"
    :ellipsis="ellipsis"
    :active-text-color="acitveColor"
    :router="router"
    :default-active="defaultActive"
    :unique-opened="uniqueOpened"
    :default-openeds="defaultOpeneds"
    @select="handleSelect"
    @open="handleOpen"
    @close="handleClose"
  >
    <slot name="logo" />
    <sidebar-item v-for="(item, index) in menus" :key="item.path + index" :data="item" :index="item.path" />
    <slot name="other" />
  </el-menu>
</template>
<script>
import sidebarItem from './sidebar-item.vue';

export default {
  name: 'BaseSidebar',
  components: {
    sidebarItem,
  },
  props: {
    mode: {
      type: String,
      default: 'vertical',
    },
    backgroundColor: {
      type: String,
      default: '#ffffff',
    },
    textColor: {
      type: String,
      default: '#303133',
    },
    collopse: {
      type: Boolean,
      default: false,
    },
    menus: {
      type: Array,
      default() {
        return [];
      },
    },
    ellipsis: {
      type: Boolean,
      default: false,
    },
    acitveColor: {
      type: String,
      default: '#409EFF',
    },
    router: {
      type: Boolean,
      default: false,
    },
    uniqueOpened: {
      type: Boolean,
      default: false,
    },
    defaultActive: {
      type: String,
      default: '',
    },
    defaultOpeneds: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  emits: ['select', 'open', 'close'],
  methods: {
    handleSelect(index, indexPath, item, routeResult) {
      this.$emit('select', { index, indexPath, item, routeResult });
    },
    handleOpen(index, indexPath) {
      this.$emit('open', index, indexPath);
    },
    handleClose(index, indexPath) {
      this.$emit('close', index, indexPath);
    },
  },
};
</script>
