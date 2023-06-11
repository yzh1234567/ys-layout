<script lang="jsx">
import { resolveComponent } from 'vue';

export default {
  name: 'BaseIcon',
  inject: ['father'],
  props: {
    icon: {
      type: String,
      default: '',
    },
  },
  methods: {
    // 生产组件
    productElement() {
      const tag = resolveComponent(this.father.iconComponent);
      if (this.father.iconComponent === 'el-icon') {
        const iconName = `${this.icon.substr(0, 1).toUpperCase()}${this.icon.substring(1)}`;
        const icon = resolveComponent(iconName);
        return (
          <tag>
            <icon></icon>
          </tag>
        );
      }
      <tag icon={this.icon}></tag>;
    },
  },
  render() {
    return this.productElement();
  },
};
</script>
