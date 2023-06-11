<template>
  <header class="flex-row-between" :style="navStyle">
    <div style="min-width: 75%">
      <base-sidebar
        :mode="'horizontal'"
        :menus="topMenus"
        :background-color="father.topBackground"
        :text-color="father.topColor"
        :active-color="father.topActiveColor"
        :default-active="activeMenu"
        :ellipsis="father.ellipsis"
        @select="handleSelect"
      >
        <template #logo>
          <slot name="logo" />
        </template>
        <template #other>
          <slot name="other" />
        </template>
      </base-sidebar>
    </div>
    <slot name="right-content" />
  </header>
</template>
<script>
import { isLink } from '../utils/index.js';
import baseSidebar from './base-sidebar.vue';

export default {
  name: 'TopNav',
  components: {
    baseSidebar,
  },
  inject: ['father'],
  computed: {
    topMenus() {
      const memuLists = this.father.menus.map((item) => {
        const obj = {
          ...item,
        };
        if (this.father.layout === 'mix') {
          delete obj.children;
        }
        return obj;
      });
      console.log(memuLists);
      return memuLists;
    },
    navStyle() {
      const style = {
        background: this.father.topBackground,
        color: this.father.topColor,
        height: this.father.topHeight,
      };
      return style;
    },
    activeMenu() {
      let { path } = this.$route;
      if (this.father.layout === 'mix') {
        // 去掉路由第一个字符串'/'
        const pathStr = path.substring(1);
        const pathMenu = pathStr.split('/');
        if (pathMenu.length > 1) {
          path = `/${pathMenu[0]}`;
        } else {
          path = '/';
        }
        this.handleSelect({ index: path });
      }
      return path;
    },
  },
  methods: {
    handleSelect({ index }) {
      if (this.father.layout === 'mix') {
        this.father.productSideMenus(index);
      }
      if (isLink(index)) {
        window.open(index, '_blank');
      }
      this.$router.push(index);
    },
  },
};
</script>
<style scoped src="../style/base.css"></style>
