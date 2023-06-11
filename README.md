

# YsLayout

## Props

<!-- @vuese:YsLayout:props:start -->
|Name|Description|Type|Required|Default|
|---|---|---|---|---|
|iconComponent|渲染布局图标的组件名称,默认为el-icon;若为自定义组件,则必须有icon属性,进行图标渲染|`String`|`false`|el-icon|
|layout|三种不同方式布局|`'top'` / `'mix'`/`'side'`|`false`|side|
|menus|-|`Array`|`false`|[]|
|avatar|头像路径|`String`|`false`|https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png|
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
|logoTitle|logo的标题|`String`|`false`|余生管理系统|

<!-- @vuese:YsLayout:props:end -->


## Events

<!-- @vuese:YsLayout:events:start -->
|Event Name|Description|Parameters|
|---|---|---|
|collopse|折叠操作按钮事件|-|

<!-- @vuese:YsLayout:events:end -->


## Slots

<!-- @vuese:YsLayout:slots:start -->
|Name|Description|Default Slot Content|
|---|---|---|
|right-content|自定义顶部导航栏右侧内容 或侧边栏底部内容|-|
|logo|顶部导航栏/侧边栏logo内容|-|
|other|顶部导航栏/侧边栏其他内容操作|-|
|logo|顶部导航栏/侧边栏logo内容|-|
|other|顶部导航栏/侧边栏其他内容操作|-|
|right-content|自定义顶部导航栏右侧内容或侧边栏底部内容|-|
|main|主要内容展示区域|-|

<!-- @vuese:YsLayout:slots:end -->



