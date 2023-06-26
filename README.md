# VyLayout

* 这是基于element-plus和vue3.x做的布局组件

## Props

<!-- @vuese:VyLayout:props:start -->
|Name|Description|Type|Required|Default|
|---|---|---|---|---|
|iconComponent|渲染布局图标的组件名称,默认为el-icon;若为自定义组件,则必须有icon属性,进行图标渲染|`String`|`false`|el-icon|
|layout|三种不同方式布局|`'top'` / `'mix'`/`'side'`|`false`|mix|
|menus|用于显示菜单的数据|`Object[]`|`true`|[]|
|avatar|头像路径|`String`|`false`|-|
|ellipsis|顶部导航栏是否省略多余的子项|`Boolean`|`false`|true|
|topBackground|顶部导航栏背景色|`String`|`false`|#545c64|
|topActiveColor|顶部导航栏激活字体色|`String`|`false`|#409EFF|
|topColor|顶部导航栏字体色|`String`|`false`|#fff|
|topHeight|顶部导航栏高度|`String`|`false`|60px|
|sideBackground|侧边栏背景色|`String`|`false`|#F2F3F5|
|sideActiveColor|侧边栏激活字体色|`String`|`false`|#409EFF|
|sideColor|侧边栏字体色|`String`|`false`|#303133|
|sideWidth|侧边栏宽度|`String`|`false`|200px|
|collopse|侧边栏默认是否折叠|`Boolean`|`false`|true|
|collopseStyle|侧边栏折叠操作按钮样式|`Object`|`false`|{}|
|expandIcon|侧边栏展开操作按钮图标名称|`String`|`false`|Expand|
|foldIcon|侧边栏折叠操作按钮图标名称|`String`|`false`|Fold|
|logoImg|logo图片的地址|`String`|`false`|-|
|logoTitle|logo的标题|`String`|`false`|-|

<!-- @vuese:VyLayout:props:end -->


## Events

<!-- @vuese:VyLayout:events:start -->
|Event Name|Description|Parameters|
|---|---|---|
|collopse|折叠操作按钮事件|-|

<!-- @vuese:VyLayout:events:end -->


## Slots

<!-- @vuese:VyLayout:slots:start -->
|Name|Description|Default Slot Content|
|---|---|---|
|right-content|自定义顶部导航栏右侧内容 或侧边栏底部内容|-|
|logo|顶部导航栏/侧边栏logo内容|-|
|other|顶部导航栏/侧边栏其他内容操作|-|
|logo|顶部导航栏/侧边栏logo内容|-|
|other|顶部导航栏/侧边栏其他内容操作|-|
|right-content|自定义顶部导航栏右侧内容或侧边栏底部内容|-|
|main|主要内容展示区域|-|

<!-- @vuese:VyLayout:slots:end -->

## 菜单menus数组对象中的属性
|Name|Description|Type|Required|Default|
|---|---|---|---|---|
|hidden|是否显示菜单|`Boolean`|`false`|'false'|
|path|跳转的路径|`String`|`false`|''|
|meta|-|`Object`|`false`|{}|
## meta对象中的属性
|Name|Description|Type|Required|Default|
|---|---|---|---|---|
|title|菜单标题|`String`|`false`|''|
|icon|菜单显示图标的名称|`String`|`false`|''|
|iconComponent|每一个个性化菜单图标的渲染组件名称;优先级大于layout中的iconComponent|`String`|`false`|''|

## 使用方法
  * 引入组件及样式
  * import VyLayout from 'vy-layout'
  * import 'vy-layout/style/index.css'
  * app.use(VyLayout)
  * 注意事项；自定义菜单图标组件，必须用icon属性来作为图标渲染属性


<p align="center">
  <h3>组件样式</h3>
	<img alt="mix" src="./dist/img/mix.png">
  <img alt="top" src="./dist/img/top.png">
  <img alt="side" src="./dist/img/side.png">
</p>


