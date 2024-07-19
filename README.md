# ar-cascader
基于view-design的行政区域级联组件

中国行政区域区域划分(含港澳台)，最多支持三级，省-市-区，数据来源于[国家统计局2023年6月统计用区划代码](https://www.stats.gov.cn/sj/tjbz/tjyqhdmhcxhfdm/2023/index.html)，
数据通过 npm 依赖 [@zhangqingcq/china-area-data](https://www.npmjs.com/package/@zhangqingcq/china-area-data?activeTab=readme) 引入

regionalism cascader base on view-design

## vue2
### install 安装
  ```
    npm install ar-cascader
    
    or
    
    pnpm add ar-cascader
  ```
### use 使用
在main.js中写入下面的代码
  ```javascript
      import arCascader from 'ar-cascader'
      import Vue from 'vue'
      Vue.use(arCascader)
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

### 示例
1.拉取git项目[ar-cascader](https://github.com/RickyHeaven/ar-cascader)
  ```
    git clone https://github.com/RickyHeaven/ar-cascader.git
  ```
(也可以直接下载zip文件)

2.安装依赖
  ```
    pnpm i
  ```

3.运行项目
  ```
    pnpm serve
  ```

然后你就能在浏览器看到跑起来的示例了~

## vue3

### install 安装
  ```
    npm install ar-cascader@vue3
    
    or
    
    pnpm add ar-cascader@vue3
  ```
### use 使用

  ```
    //vue SFC
    
    import {ref} from 'vue'
    import ArCascader from 'ar-cascader';
    const value = ref([])
  
    <ArCascader v-model="value"/>
  ```

### 示例
1.拉取git项目[ar-cascader](https://github.com/RickyHeaven/ar-cascader-core)
  ```
    git clone https://github.com/RickyHeaven/ar-cascader-core.git
  ```
(也可以直接下载zip文件)

2.安装依赖
  ```
    pnpm i
  ```

3.运行项目
  ```
    pnpm dev
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
placeholder|选择器未选择时显示的占位字符|String|'请选择'
disabled|是否禁用选择器|Boolean|false
render-format|选择后展示的函数，用于自定义显示格式|Function|``label => label.join(' / ')``
change-on-select|当此项为 true 时，点选每级菜单选项值都会发生变化|Boolean|false
## 事件
事件  |  说明  |  返回值
:-------: | -------  |  :-------:
on-change|选择完成后的回调，返回值此时已选的数据数组|data

## 注意
* 在开启`change-on-select`时，数据回显不受level限制，如开启level:2三级级联时，传入`[110000000000]`可正确回显为`北京市`，但不开启
`change-on-select`时，传入数据必须大于等于当前level设置，如：开启level:1二级级联时，传入`[ 110000000000, 110100000000, 110105000000 ]`可正确
回显`北京市/市辖区`，但传入`[110000000000]`将无法回显，组件已选项将为空。

* 本组件于2024年7月19日更新重构版本`ar-cascader@1.1.0 (vue2)`和`ar-cascader@2.1.0 (vue3)`，主要改动为：
  > - 使用`国家统计局2023年6月统计用区划代码`作为数据源。
  > - 数据源通过npm依赖`@zhangqingcq/china-area-data`引入，同时也欢迎大家使用该依赖作为数据源封装自己喜欢的行政区域组件，该数据可以在view-design的cascader组件直接使用。
  > - 各级行政区域代码code统一改为标准的12位，默认number格式，组件返回的code都是number格式，传入code数据回显number和string都支持。
  > - 组件支持行政区域名字name模糊匹配搜索。
  > - 以前支持的功能都支持，如v-model值格式依然支持'all'、'code'、'name'三种，且无论哪种模式下，所有格式的数据传入组件都可以回显，包括以前旧数据6位的code。
  > - 组件示例也重写了，可以简单方便的直接在示例页试用组件的各种功能。