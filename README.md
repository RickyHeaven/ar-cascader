# ar-cascader
基于view-design的行政区域级联组件(基于iviewArea中alCascader改良)

administrative region cascader base on view-design

## install 安装
```
    npm install ar-cascader --save
```
## use 使用
在main.js中写入下面的代码
```javascript
    import arCascader from 'ar-cascader';
    import Vue from 'vue';
    Vue.use(arCascader);
```
接下来，你就可以在页面中使用ar-cascader了
```vue
<template>
    <ar-cascader v-model="value"/>
</template>
<script>
    export default {
        data () {
            return {
                value: []
            }
        }
    }
</script>
```

## 示例
1.拉取git项目[ar-cascader](https://github.com/RickyHeaven/ar-cascader)
```
git clone https://github.com/RickyHeaven/ar-cascader.git
```
(也可以直接下载zip文件)

2.安装依赖
```npm i```

3.运行项目
```
npm run serve
```

然后你就能在浏览器看到跑起来的示例了~

## config 配置
属性  |  说明  |  类型  |  默认值
:-------: | -------  |  :-------:  |  :-------:
value|用于存放结果的数组，建议使用v-model来做双向绑定|无|无
v-model|用于存放结果的数组，选择了数据后会自动更新|无|无
level|要显示的级别，如设为2则显示省、市和县，即3级，级别可设为0、1、2三级（area-data到2.0版本以后不再包含街道数据）|String &#124; Number|2
data-type|返回数据的类型，'all':城市编码和名称，'code':只返回编码，'name':只返回名称，数据格式同al-selector补充说明|String|all
size|选择器尺寸，该属性同iview组件cascader的size属性，可选值为small，large|String|无
placeholder|选择器未选择时显示的占位字符|String|'请选择']
disabled|是否禁用选择器|Boolean|false
render-format|选择后展示的函数，用于自定义显示格式|Function|``label => label.join(' / ')``
change-on-select|当此项为 true 时，点选每级菜单选项值都会发生变化|Boolean|false
## 事件
事件  |  说明  |  返回值
:-------: | -------  |  :-------:
on-change|选择完成后的回调，返回值此时已选的数据数组|data
