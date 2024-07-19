<template>
  <div class="wall">
    <p class="title">ar-cascader</p>
    <div style="margin-bottom: 15px;">
      <Checkbox v-model="changeOnSelect">点击即选中</Checkbox>
      <span style="margin-left: 40px">level: </span>
      <RadioGroup v-model="level" type="button">
        <Radio label="0" />
        <Radio label="1" />
        <Radio label="2" />
      </RadioGroup>
      <span style="margin-left: 40px">dataType: </span>
      <RadioGroup v-model="dataType" type="button">
        <Radio label="all" />
        <Radio label="code" />
        <Radio label="name" />
      </RadioGroup>
    </div>
    <div style="margin-bottom: 40px;">
      <span>不完整数据、或格式与当前dataType不符的数据回显（容错能力测试）: </span>
      <Select v-model="selectValue" class="selectR" @on-change="setValue">
        <Option v-for="(item,i) of customValue" :value="i">数据-{{ i + 1 }}</Option>
      </Select>
    </div>
    <div style="margin-bottom: 15px;">
      示例：
      <div style="width: 280px;display: inline-block;">
        <ar-cascader v-model="value" :change-on-select="changeOnSelect" :level="level" :data-type="dataType" />
      </div>
    </div>
    <div>组件值： {{ value }}</div>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        dataType: 'all',
        changeOnSelect: false,
        level: "2",
        selectValue: null,
        value: [
          {
            "code": 110000000000,
            "name": "北京市"
          }, {
            "code": 110100000000,
            "name": "市辖区"
          }, {
            "code": 110105000000,
            "name": "朝阳区"
          }
        ],
        customValue: [
          [
            {
              "code": "140000000000",
              "name": "山西省"
            }, {
            "code": "140200000000",
            "name": "大同市"
          }, {
            "code": "140213000000",
            "name": "平城区"
          }
          ],
          [
            {"code": "310000000000"}, {"code": "310100000000"}, {"code": "310115000000"}
          ],
          [
            {"name": "内蒙古自治区"}, {"name": "包头市"}, {"name": "青山区"}
          ],
          [
            {"code": "540000"}, {"code": "540100"}, {"code": "540123"}
          ],
          [
            {"code": 410000}, {"code": "410400"}, {"code": 410421}
          ],
          [710000000000, 710100000000, 710101000000],
          [910000, 810000, 810106],
          [910000, '820000', 820101],
          ["重庆市", "县", "巫溪县"]
        ]
      }
    },
    methods: {
      setValue(d) {
        this.value = this.customValue[d]
      }
    }
  }
</script>
<style scoped>
  .wall {
    height: 100vh;
    overflow: auto;
    padding: 20px;
  }

  .title {
    height: 40px;
    line-height: 40px;
    font-weight: bold;
    margin-bottom: 30px;
  }

  .selectR {
    width: 180px;
  }
</style>
