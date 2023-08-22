import type {PluginObject} from 'vue'
import {Vue as _Vue} from 'vue/types/vue'

interface ArCascader extends PluginObject<any> {
  install(Vue: typeof _Vue, options?: any): void
}

export declare const arCascader: ArCascader