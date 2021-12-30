<template>
  <div style="padding: 20px;">
    <p style="margin-bottom: 15px;">
      <Checkbox v-model="changeOnSelect">点击即选中</Checkbox>
    </p>
    <div style="margin-bottom: 15px;">
      示例：
      <div style="width: 280px;display: inline-block;">
        <ar-cascader v-model="value" :change-on-select="changeOnSelect"/>
      </div>
    </div>
    <div>组件值： {{value}}</div>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        value: [],
        changeOnSelect: false
      }
    }
  }
</script>
