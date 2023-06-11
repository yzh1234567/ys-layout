<template>
  <el-sub-menu v-if="data.children && data.children.length" :index="index">
    <template #title>
      <!-- 可以放置图标和标题 -->
      <base-icon :icon="data.meta && data.meta.icon" />
      <span>{{ data.meta.title }}</span>
    </template>
    <sidebar-item v-for="(child, i) of data.children" :key="i" :data="child" :index="child.path" />
  </el-sub-menu>
  <el-menu-item v-else :index="index">
    <!-- 可以放置图标和标题 -->
    <base-icon :icon="data.meta && data.meta.icon" />
    <span>{{ data.meta.title }}</span>
  </el-menu-item>
</template>
<script>
import baseIcon from './base-icon.vue';

export default {
  name: 'SidebarItem',
  components: {
    baseIcon,
  },
  props: {
    data: {
      type: Object,
      default() {
        return {};
      },
    },
    index: {
      type: [String, Object],
      default: '',
    },
  },
  data() {
    return {};
  },
  mounted() {},
};
</script>
