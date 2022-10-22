<template>
  <mars-dialog :visible="true" right="10" top="10" width="420">
    <table class="mars-table tb-border">
      <tr>
        <td class="nametd">名称</td>
        <td id="td_name">{{ formState.name }}</td>
      </tr>
      <tr>
        <td class="nametd">TLE1</td>
        <td id="td_tle1">{{ formState.tle1 }}</td>
      </tr>
      <tr>
        <td class="nametd">TLE2</td>
        <td id="td_tle2">{{ formState.tle2 }}</td>
      </tr>
      <tr>
        <td class="nametd">简介</td>
        <td id="td_tle2">{{ formState.info }}</td>
      </tr>
      <tr>
        <td class="nametd">时间</td>
        <td id="td_time">{{ formState.time }}</td>
      </tr>

      <tr>
        <td class="nametd">经度</td>
        <td id="td_jd">{{ formState.td_jd }}</td>
      </tr>
      <tr>
        <td class="nametd">经度</td>
        <td id="td_wd">{{ formState.td_wd }}</td>
      </tr>
      <tr>
        <td class="nametd">高程</td>
        <td id="td_gd">{{ formState.td_gd }}</td>
      </tr>

    </table>
    <a-form   :label-col="{ span: 3 }" :wrapper-col="{ span: 21 }" style="margin-top: 20px">
      <a-form-item label="tle2" name="url">
              <mars-textarea v-model:value="tleData[weixinType]" :allowClear="true" />
      </a-form-item>
    </a-form>
    <div class="f-tac" style="margin-top: 10px">
      <a-space>
        <mars-button size="middle" @click="creactCopyWeixin()">
          生成轨道
        </mars-button>
        <mars-button size="middle" @click="removeCopyWeixin()">
          删除轨道
        </mars-button>
        <mars-button size="middle" @click="resetTLE2()"> 重置 TLE2 </mars-button>
      </a-space>
    </div>
  </mars-dialog>
</template>

<script lang="ts" setup>
import { reactive, ref, computed, h } from "vue"
import * as mapWork from "./map.js"
import { $message } from "@mars/components/mars-ui"
import MarsButton from "@mars/components/mars-ui/mars-button/index.vue"
import type { GuiItem } from "@mars/components/mars-ui/mars-gui"

interface FormState {
  enabledShowHide: boolean // 参考轴系
  name: string
  tle1: string
  tle2: string
  time: string
  td_jd: number
  td_wd: number
  td_gd: number
}



const infoMaps = {
  GEO: "GEO卫星相对地球静止，轨道高度35786km，轨道倾角为0度，单星覆盖区域较大，3颗卫星可覆盖亚太大部分地区。",
  IGSO: "IGSO卫星轨道高度与GEO卫星相同，轨道倾角为55度，星下点轨迹为“8”字。",
  MEO: "北斗MEO卫星轨道高度约21500km，轨道倾角为55度，绕地球旋转运行，通过多颗卫星组网可实现全球覆盖，北斗MEO星座回归特性为7天13圈。"
}

const tle2Map = {
  GEO: "2 36287   1.7230  48.2117 0000593 265.8062 189.5156  1.00268387 46730",
  IGSO: "2 43539  55.0895 174.6574 0051565 226.9118  89.5096  1.00273436 15721",
  MEO: "2 38775  55.4724 107.6074 0011310 333.9961 355.7846  1.86231202 68719"
}
// 角度
const angleValue = ref<number>(10)
const pitchValue = ref<number>(0) // 仰角
const rollValue = ref<number>(0) // 左右
const weixinType = ref<string>("GEO")

const tleData = ref({ ...tle2Map })

const meoFormState = reactive<FormState>({
  enabledShowHide: false,
  name: "",
  tle1: "",
  tle2: "",
  time: "",
  td_jd: 0,
  td_wd: 0,
  td_gd: 0,
  info: infoMaps.MEO
})

const igsoFormState = reactive<FormState>({
  enabledShowHide: false,
  name: "",
  tle1: "",
  tle2: "",
  time: "",
  td_jd: 0,
  td_wd: 0,
  td_gd: 0,
  info: infoMaps.IGSO
})

const geoFormState = reactive<FormState>({
  enabledShowHide: false,
  name: "",
  tle1: "",
  tle2: "",
  time: "",
  td_jd: 0,
  td_wd: 0,
  td_gd: 0,
  info: infoMaps.GEO
})

const formState = computed(() => {
  if (weixinType.value === "MEO") {
    return meoFormState
  }

  if (weixinType.value === "IGSO") {
    return igsoFormState
  }

  return geoFormState
})
mapWork.eventTarget.on("MEO-satelliteChange", (event: any) => {
  meoFormState.name = event.weixinData.name
  meoFormState.tle1 = event.weixinData.tle1
  meoFormState.tle2 = event.weixinData.tle2
  meoFormState.time = event.weixinData.time
  meoFormState.td_jd = event.weixinData.td_jd
  meoFormState.td_wd = event.weixinData.td_wd
  meoFormState.td_gd = event.weixinData.td_gd
})

mapWork.eventTarget.on("GEO-satelliteChange", (event: any) => {
  geoFormState.name = event.weixinData.name
  geoFormState.tle1 = event.weixinData.tle1
  geoFormState.tle2 = event.weixinData.tle2
  geoFormState.time = event.weixinData.time
  geoFormState.td_jd = event.weixinData.td_jd
  geoFormState.td_wd = event.weixinData.td_wd
  geoFormState.td_gd = event.weixinData.td_gd
})

mapWork.eventTarget.on("IGSO-satelliteChange", (event: any) => {
  igsoFormState.name = event.weixinData.name
  igsoFormState.tle1 = event.weixinData.tle1
  igsoFormState.tle2 = event.weixinData.tle2
  igsoFormState.time = event.weixinData.time
  igsoFormState.td_jd = event.weixinData.td_jd
  igsoFormState.td_wd = event.weixinData.td_wd
  igsoFormState.td_gd = event.weixinData.td_gd
})

mapWork.eventTarget.on("weixin-change", (event: any) => {
  console.log(event)
  weixinType.value = event.weixinType
})
// 俯仰角
const creactCopyWeixin = () => {
  mapWork.createWeixin(weixinType.value, tleData.value[weixinType.value])
}


const removeCopyWeixin = () => {
  mapWork.removeWeixin(weixinType.value)
}

const resetTLE2 = () => {
  mapWork.removeWeixin(weixinType.value)
  tleData.value[weixinType.value] = tle2Map[weixinType.value]
}
// 左右角
const rollChange = () => {
  mapWork.rollChange(rollValue.value)
}

// 夹角
const angle = () => {
  mapWork.angle(angleValue.value)
}
// 定位至卫星
const locate = () => {
  mapWork.locate()
}

// 显示/隐藏
const chkShowModelMatrix = () => {
  mapWork.chkShowModelMatrix(formState.value.enabledShowHide)
}
</script>
<style scoped lang="less">
.inputNum {
  width: 70px !important;
}
th.column-money,
td.column-money {
  text-align: right !important;
}
.ant-slider {
  width: 110px;
}
.mars-table {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
}

.mars-table tr td {
  padding: 5px 10px;
  text-align: left;
}

.mars-table tr td:first-child {
  border-left: none;
}

.mars-table .nametd {
  padding: 5px 20px 5px 10px;
}
.tb-border {
  border: 1px solid #4db3ff70;
}

.tb-border tr td {
  border: 1px solid #4db3ff70;
}
</style>
