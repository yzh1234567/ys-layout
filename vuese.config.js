module.exports = {
  'include': ['src/components/**/*.vue'],  //查询目标文件夹用的是fast-glob包
  'pathName':['src/components'],
  // 'markdownDir': '*', 输出文档在src/components文件夹中
  'genType': 'markdown',
  'title': '全局组件文档',

  //这是另一种生成文档的组件 // "docs": "vuedoc-md src/components/*.vue --output src/docs/"
};