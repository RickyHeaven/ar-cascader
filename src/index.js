import arCascader from './ar-cascader.vue'

const install = function (Vue, opts = {}) {
  Vue.component(arCascader.name, arCascader)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  arCascader,
  install: install
}