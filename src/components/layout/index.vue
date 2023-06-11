<template>
  <div class="ys-layout">
    <div v-if="['mix', 'top'].includes(layout)">
      <top-nav>
        <template #right-content>
          <!-- 自定义顶部导航栏右侧内容 或侧边栏底部内容-->
          <slot name="right-content">
            <el-avatar v-if="avatar" :size="40" :src="avatar" style="margin: 0 12px" />
          </slot>
        </template>
        <template #logo>
          <!-- 顶部导航栏/侧边栏logo内容 -->
          <slot name="logo">
            <base-logo />
          </slot>
        </template>
        <template #other>
          <!-- 顶部导航栏/侧边栏其他内容操作 -->
          <slot name="other" />
        </template>
      </top-nav>
    </div>
    <el-container>
      <el-aside
        v-if="['mix', 'side'].includes(layout) && sideMenus && sideMenus.length > 0"
        :width="baseSideWidth"
        :class="['side'].includes(layout) ? 'only-side' : 'top-side'"
        :style="sideStyle"
        class="ys-side"
      >
        <el-scrollbar>
          <base-sidebar
            :menus="sideMenus"
            :background-color="sideBackground"
            :text-color="sideColor"
            :collopse="isCollopse"
            :active-color="sideActiveColor"
            :default-active="defaultActive"
            @select="handleSideMebu"
          >
            <template v-if="layout === 'side'" #logo>
              <!-- 顶部导航栏/侧边栏logo内容 -->
              <slot name="logo">
                <base-logo />
              </slot>
            </template>
            <template v-if="layout === 'side'" #other>
              <!-- 顶部导航栏/侧边栏其他内容操作 -->
              <slot name="other" />
            </template>
          </base-sidebar>
          <!-- 自定义顶部导航栏右侧内容或侧边栏底部内容 -->
          <slot name="right-content">
            <div v-if="avatar" class="sideBottom">
              <el-avatar :size="40" :src="avatar" style="margin: 0 12px" />
            </div>
          </slot>
        </el-scrollbar>
        <div
          :style="{
            color: sideColor,
            background: sideBackground,
            ...collopseStyle,
          }"
          class="flex-row-center operation"
          @click="handlExpand"
        >
          <el-icon v-if="isCollopse" title="展开">
            <component :is="expandIcon" />
          </el-icon>
          <el-icon v-else title="折叠">
            <component :is="foldIcon" />
          </el-icon>
        </div>
      </el-aside>
      <el-main>
        <!-- 主要内容展示区域 -->
        <slot name="main" />
      </el-main>
    </el-container>
  </div>
</template>
<script>
import topNav from './components/top-nav.vue';
import baseSidebar from './components/base-sidebar.vue';
import baseLogo from './components/base-logo.vue';
import { isLink } from './utils/index.js';

export default {
  name: 'YsLayout',
  components: {
    topNav,
    baseSidebar,
    baseLogo,
  },
  provide() {
    return {
      father: this,
    };
  },
  props: {
    // 渲染布局图标的组件名称,默认为el-icon;若为自定义组件,则必须有icon属性,进行图标渲染
    iconComponent: {
      type: String,
      default: 'el-icon',
    },
    // 三种不同方式布局
    layout: {
      // `'top'` / `'mix'`/`'side'`
      type: String,
      default: 'side',
      desc: '[mix,side,top]',
    },
    menus: {
      type: Array,
      default() {
        return [];
      },
    },
    // 头像路径
    avatar: {
      type: String,
      default: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
    },
    // 顶部导航栏是否省略多余的子项
    ellipsis: {
      type: Boolean,
      default: true,
    },
    // 顶部导航栏背景色
    topBackground: {
      type: String,
      default: '#545c64',
    },
    // 顶部导航栏激活字体色
    topActiveColor: {
      type: String,
      default: '#409EFF',
    },
    // 顶部导航栏字体色
    topColor: {
      type: String,
      default: '#fff',
    },
    // 顶部导航栏高度
    topHeight: {
      type: String,
      default: '60px',
    },
    // 侧边栏背景色
    sideBackground: {
      type: String,
      default: '#F2F3F5',
    },
    // 侧边栏激活字体色
    sideActiveColor: {
      type: String,
      default: '#409EFF',
    },
    // 侧边栏字体色
    sideColor: {
      type: String,
      default: '#303133',
    },
    // 侧边栏宽度
    sideWidth: {
      type: String,
      default: '200px',
    },
    // 侧边栏默认是否折叠
    collopse: {
      type: Boolean,
      default: true,
    },
    // 侧边栏折叠操作按钮样式
    collopseStyle: {
      type: Object,
      default() {
        return {};
      },
    },
    // 侧边栏展开操作按钮图标名称
    expandIcon: {
      type: String,
      default: 'Expand',
    },
    // 侧边栏折叠操作按钮图标名称
    foldIcon: {
      type: String,
      default: 'Fold',
    },
    // logo图片的地址
    logoImg: {
      type: String,
      default: '',
    },
    // logo的标题
    logoTitle: {
      type: String,
      default: '余生管理系统',
    },
  },
  emits: ['collopse'],
  data() {
    return {
      sideMenus: [],
      isCollopse: false,
      baseSideWidth: '200px',
    };
  },
  computed: {
    sideStyle() {
      return {
        background: this.sideBackground,
        color: this.sideColor,
      };
    },
    defaultActive() {
      return this.$route.path;
    },
  },
  created() {
    this.isCollopse = this.collopse;
    this.productSideWidth();
    this.productSideMenus();
  },
  methods: {
    productSideMenus(index) {
      this.sideMenus = [];
      if (this.layout === 'mix' && index) {
        const sideMenus = this.menus.filter((menu) => menu.path === index);
        if (sideMenus.length && sideMenus.length > 0) {
          this.sideMenus = sideMenus[0].children;
        }
        return;
      }
      if (this.layout === 'side') {
        this.sideMenus = this.menus.map((item) => item);
      }
    },
    // 侧边栏宽度
    productSideWidth() {
      this.baseSideWidth = this.isCollopse ? '66px' : this.sideWidth;
    },
    // 折叠
    handlExpand() {
      this.isCollopse = !this.isCollopse;
      this.productSideWidth();
      // 折叠操作按钮事件
      this.$emit('collopse', this.isCollopse);
    },
    // 点击侧边栏
    handleSideMebu({ index }) {
      console.log(index);
      if (isLink(index)) {
        window.open(index, '_blank');
      }
      this.$router.push(index);
    },
  },
};
</script>
<style src="./style/base.css"></style>
<style scoped>
.ys-layout :deep(.el-menu--horizontal) {
  border-bottom: 0;
}

.ys-side :deep(.el-menu) {
  border-right: 0;
}

.ys-side {
  position: relative;
  overflow: visible;
}

.top-side {
  height: calc(100vh - 60px);
}

.only-side {
  height: 100vh;
}

.operation {
  position: absolute;
  top: 40px;
  right: -15px;
  z-index: 20;
  width: 30px;
  height: 30px;
  cursor: pointer;
  border-radius: 50%;
}

.operation:hover {
  transform: scale(1.2);
}

.sideBottom {
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 20;
  padding: 8px 0;
}
</style>
