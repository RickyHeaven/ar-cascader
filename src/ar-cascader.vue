<script>
  import areaData from '@zhangqingcq/china-area-data'
  import {find} from 'lodash-es'

  const oneOf = (item, arr) => {
    return arr.some(i => (i === item))
  }

  const amend = (d) => {
    if (typeof d === 'number') {
      d = d.toString()
    }
    if (d.length < 12) {
      const t = [...d]
      while (t.length < 12) {
        t.push(0)
      }
      return Number(t.join(""))
    }
    return Number(d)
  }

  export default {
    name: "ar-cascader",
    model: {
      prop: 'value',
      event: 'on-change'
    },
    props: {
      value: Array,
      level: {
        validator(val) {
          return oneOf(parseInt(val), [0, 1, 2])
        },
        default: 2
      },
      dataType: {
        validator(val) {
          return oneOf(val, ['all', 'code', 'name'])
        },
        default: 'all'
      },
      disabled: {
        type: Boolean,
        default: false
      },
      size: {
        validator(val) {
          return oneOf(val, ['large', 'small'])/*可选值为large和small或者不填*/
        }
      },
      placeholder: String,
      renderFormat: Function,
      changeOnSelect: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        oldValue: []
      }
    },
    computed: {
      valueT: {
        get() {
          let t = []
          if (this.value?.every?.(e => (/^[\u4e00-\u9fa5]+$/.test(e)))) {
            t = this.getValue(this.value, 'label', 'value')
          }
          else if (this.value?.every?.(e => (/^\d+$/.test(e)))) {
            t = this.value.map(amend)
          }
          else if (this.value?.every?.(e => (e?.hasOwnProperty('code')))) {
            t = this.getValue(this.value.map(e => ({
              code: amend(e.code),
              name: e.name
            })), 'value', 'value', 'code')
          }
          else if (this.value?.every?.(e => (e?.hasOwnProperty('name')))) {
            t = this.getValue(this.value, 'label', 'value', 'name')
          }
          this.oldValue = t
          return t
        },
        set(v) {
          if (this.isSame(v)) {
            return
          }
          let t = []
          if (this.dataType === 'all') {
            t = this.getValue(v, 'value', 'all')
          }
          else if (this.dataType === 'code') {
            t = v
          }
          else if (this.dataType === 'name') {
            t = this.getValue(v, 'value', 'label')
          }
          this.$emit('on-change', t)
        }
      },
      areaData() {
        const t = []
        areaData.forEach(e1 => {
          const l1 = {
            label: e1.label,
            value: e1.value
          }
          if (this.level > 0) {
            l1.children = []
            e1.children.forEach(e2 => {
              const l2 = {
                label: e2.label,
                value: e2.value
              }
              if (this.level > 1) {
                l2.children = []
                e2.children.forEach(e3 => {
                  l2.children.push({
                    label: e3.label,
                    value: e3.value
                  })
                })
              }
              l1.children.push(l2)
            })
          }
          t.push(l1)
        })
        return t
      }
    },
    methods: {
      getValue(v, key, type, source) {
        const t = []
        let _v0, _v1, _v2
        if (source) {
          _v0 = v[0]?.[source]
          _v1 = v[1]?.[source]
          _v2 = v[2]?.[source]
        }
        else {
          _v0 = v[0]
          _v1 = v[1]
          _v2 = v[2]
        }
        const l1 = find(areaData, _e => _e[key] === _v0)
        if (l1) {
          this.setResult(t, l1, type)
          if (this.level === 0 || _v1 === undefined) {
            return t
          }
          const l2 = find(l1.children, _e => _e[key] === _v1)
          if (l2) {
            this.setResult(t, l2, type)
            if (this.level === 1 || _v2 === undefined) {
              return t
            }
            const l3 = find(l2.children, _e => _e[key] === _v2)
            if (l3) {
              this.setResult(t, l3, type)
              return t
            }
          }
        }
        return []
      },
      setResult(t, v, type) {
        if (type === 'label' || type === 'value') {
          t.push(v[type])
        }
        else {
          t.push({
            code: v.value,
            name: v.label
          })
        }
      },
      isSame(t) {
        if (t?.length === 0) {
          return this.oldValue?.length === 0
        }
        if (this.oldValue?.length === 0) {
          return false
        }
        return t.every((e, i) => (e === this.oldValue?.[i]))
      }
    }
  }
</script>
<template>
  <Cascader
      v-model="valueT"
      :data="areaData"
      :disabled="disabled"
      :size="size"
      :placeholder="placeholder"
      :render-format="renderFormat"
      :change-on-select="changeOnSelect"
      transfer
      filterable
  />
</template>
