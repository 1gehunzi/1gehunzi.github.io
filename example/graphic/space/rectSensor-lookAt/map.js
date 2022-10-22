import { Me } from "@icon-park/svg"
import * as mars3d from "mars3d"

export let map // mars3d.Map三维地图对象


// 需要覆盖config.json中地图属性参数（当前示例框架中自动处理合并）
export const mapOptions = {
  scene: {
    center: { lat: 12.901283, lng: 112.928889, alt: 194340116.3, heading: 3, pitch: -89.9 },
    cameraController: {
      zoomFactor: 3.0,
      minimumZoomDistance: 1000,
      maximumZoomDistance: 300000000,
      constrainedAxis: false // 解除在南北极区域鼠标操作限制
    }
  },
  control: {
    clockAnimate: true, // 时钟动画控制(左下角)
    timeline: true, // 是否显示时间线控件
    compass: { top: "10px", left: "5px" }
  }
}

// 事件对象，用于抛出事件到面板中
export const eventTarget = new mars3d.BaseClass() // 事件对象，用于抛出事件到面板中

let GEO

let MEO

let IGSO

const newWeixin = {}

const createSatellite = (name, tle1, tle2) => {
    return new mars3d.graphic.Satellite({
    name,
    tle1,
    tle2,
    model: {
      url: "//data.mars3d.cn/gltf/mars/weixin2.gltf",
      scale: 1,
      minimumPixelSize: 90,
      autoHeading: true,
      show: true
    },
    label: {
      color: "#ffffff",
      opacity: 1,
      font_family: "楷体",
      font_size: 30,
      outline: true,
      outlineColor: "#000000",
      outlineWidth: 3,
      background: true,
      backgroundColor: "#000000",
      backgroundOpacity: 0.5,
      font_weight: "normal",
      font_style: "normal",
      pixelOffsetX: 0,
      pixelOffsetY: -20,
      scaleByDistance: true,
      scaleByDistance_far: 10000000,
      scaleByDistance_farValue: 0.4,
      scaleByDistance_near: 100000,
      scaleByDistance_nearValue: 1,
      show: true
    },
    path: {
      show: true,
      color: "pick",
      opacity: 0.5,
      width: 1
    }
  })
}

/**
 * 初始化地图业务，生命周期钩子函数（必须）
 * 框架在地图初始化完成后自动调用该函数
 * @param {mars3d.Map} mapInstance 地图对象
 * @returns {void} 无
 */
export function onMounted(mapInstance) {
  map = mapInstance // 记录map
  map.toolbar.style.bottom = "55px" // 修改toolbar控件的样式

  map.clock.shouldAnimate = true
  map.clock.multiplier = 60 // 速度

  addGraphicLayer()
}

/**
 * 释放当前地图业务的生命周期函数
 * @returns {void} 无
 */
export function onUnmounted() {
  map = null
}
const graphicLayer = new mars3d.layer.GraphicLayer()
function addGraphicLayer() {
  // 创建矢量数据图层
  // const graphicLayer = new mars3d.layer.GraphicLayer()
  map.addLayer(graphicLayer)

  graphicLayer.on(mars3d.EventType.click, function (event) {
    console.log("单击了卫星", event.graphic._name)
    const name = event.graphic._name
    let weixinType = ""
    if (name.indexOf("GEO") > -1) {
      weixinType = "GEO"
    }

    if (name.indexOf("MEO") > -1) {
      weixinType = "MEO"
    }

    if (name.indexOf("IGSO") > -1) {
      weixinType = "IGSO"
    }

    console.log(weixinType, "-----------------")

    eventTarget.fire("weixin-change", { weixinType })
  })
  // graphicLayer.bindPopup(function (event) {
  //   const attr = event.graphic.attr || {}
  //   const name = event.graphic._name
  //   // attr["类型"] = event.graphic.type
  //   attr["备注"] = "请在右上角查看卫星详情数据"

  //   return mars3d.Util.getTemplateHtml({ title: `${name}卫星图层`, template: "all", attr: attr })
  // })

  GEO = new mars3d.graphic.Satellite({
    name: "BEIDOU 3 (GEO)",
    tle1: "1 36287U 10001A   22289.93799832 -.00000280  00000+0  00000+0 0  9990",
    tle2: "2 36287   1.7230  48.2117 0000593 265.8062 189.5156  1.00268387 46730",
    model: {
      url: "//data.mars3d.cn/gltf/mars/weixin2.gltf",
      scale: 1,
      minimumPixelSize: 90,
      autoHeading: true,
      show: true
    },
    label: {
      color: "#ffffff",
      opacity: 1,
      font_family: "楷体",
      font_size: 30,
      outline: true,
      outlineColor: "#000000",
      outlineWidth: 3,
      background: true,
      backgroundColor: "#000000",
      backgroundOpacity: 0.5,
      font_weight: "normal",
      font_style: "normal",
      pixelOffsetX: 0,
      pixelOffsetY: -20,
      scaleByDistance: true,
      scaleByDistance_far: 10000000,
      scaleByDistance_farValue: 0.4,
      scaleByDistance_near: 100000,
      scaleByDistance_nearValue: 1,
      show: true
    },
    path: {
      show: true,
      color: "#00ff00",
      opacity: 0.5,
      width: 1
    }
  })
  graphicLayer.addGraphic(GEO)


  // 显示实时坐标和时间
  GEO.on(mars3d.EventType.change, (e) => {
     const weixinData = {}
      weixinData.name = GEO.name
      weixinData.tle1 = GEO.options.tle1
      weixinData.tle2 = GEO.options.tle2

    const date = Cesium.JulianDate.toDate(map.clock.currentTime)
    weixinData.time = mars3d.Util.formatDate(date, "yyyy-MM-dd HH:mm:ss")
    if (GEO.position) {
      const point = mars3d.LngLatPoint.fromCartesian(GEO.position)
      weixinData.td_jd = point.lng
      weixinData.td_wd = point.lat
      weixinData.td_gd = mars3d.MeasureUtil.formatDistance(point.alt)
      eventTarget.fire("GEO-satelliteChange", { weixinData })
    }
  })

  // 目标卫星
   MEO = new mars3d.graphic.Satellite({
    name: "BEIDOU 15 (MEO)",
    tle1: "1 38775U 12050B   22289.62345197  .00000032  00000+0  00000+0 0  9991",
    tle2: "2 38775  55.4724 107.6074 0011310 333.9961 355.7846  1.86231202 68719",
    model: {
      url: "//data.mars3d.cn/gltf/mars/weixin.gltf",
      scale: 1,
      minimumPixelSize: 90,
      autoHeading: true,
      show: true
    },
    label: {
      color: "#ffffff",
      opacity: 1,
      font_family: "楷体",
      font_size: 30,
      outline: true,
      outlineColor: "#000000",
      outlineWidth: 3,
      background: true,
      backgroundColor: "#000000",
      backgroundOpacity: 0.5,
      font_weight: "normal",
      font_style: "normal",
      pixelOffsetX: 0,
      pixelOffsetY: -20,
      scaleByDistance: true,
      scaleByDistance_far: 10000000,
      scaleByDistance_farValue: 0.4,
      scaleByDistance_near: 100000,
      scaleByDistance_nearValue: 1,
      show: true
    },
    path: {
      show: true,
      color: "#00ff00",
      opacity: 0.5,
      width: 1
    }
  })

   MEO.on(mars3d.EventType.change, (e) => {
     const weixinData = {}
      weixinData.name = MEO.name
      weixinData.tle1 = MEO.options.tle1
      weixinData.tle2 = MEO.options.tle2

    const date = Cesium.JulianDate.toDate(map.clock.currentTime)
    weixinData.time = mars3d.Util.formatDate(date, "yyyy-MM-dd HH:mm:ss")
    if (MEO.position) {
      const point = mars3d.LngLatPoint.fromCartesian(MEO.position)
      weixinData.td_jd = point.lng
      weixinData.td_wd = point.lat
      weixinData.td_gd = mars3d.MeasureUtil.formatDistance(point.alt)
      eventTarget.fire("MEO-satelliteChange", { weixinData })
    }
  })

  graphicLayer.addGraphic(MEO)

   IGSO = new mars3d.graphic.Satellite({
    name: "BEIDOU 10 (IGSO)",
    tle1: "1 37948U 11073A   22289.48464623 -.00000127  00000+0  00000+0 0  9992",
    tle2: "2 43539  55.0895 174.6574 0051565 226.9118  89.5096  1.00273436 15721",
    model: {
      url: "//data.mars3d.cn/gltf/mars/weixin.gltf",
      scale: 1,
      minimumPixelSize: 90,
      autoHeading: true,
      show: true
    },
    label: {
      color: "#ffffff",
      opacity: 1,
      font_family: "楷体",
      font_size: 30,
      outline: true,
      outlineColor: "#000000",
      outlineWidth: 3,
      background: true,
      backgroundColor: "#000000",
      backgroundOpacity: 0.5,
      font_weight: "normal",
      font_style: "normal",
      pixelOffsetX: 0,
      pixelOffsetY: -20,
      scaleByDistance: true,
      scaleByDistance_far: 10000000,
      scaleByDistance_farValue: 0.4,
      scaleByDistance_near: 100000,
      scaleByDistance_nearValue: 1,
      show: true
    },
    path: {
      show: true,
      color: "#00ff00",
      opacity: 0.5,
      width: 1
    }
  })

 IGSO.on(mars3d.EventType.change, (e) => {
     const weixinData = {}
      weixinData.name = IGSO.name
      weixinData.tle1 = IGSO.options.tle1
      weixinData.tle2 = IGSO.options.tle2

    const date = Cesium.JulianDate.toDate(map.clock.currentTime)
    weixinData.time = mars3d.Util.formatDate(date, "yyyy-MM-dd HH:mm:ss")
    if (IGSO.position) {
      const point = mars3d.LngLatPoint.fromCartesian(IGSO.position)
      weixinData.td_jd = point.lng
      weixinData.td_wd = point.lat
      weixinData.td_gd = mars3d.MeasureUtil.formatDistance(point.alt)
      eventTarget.fire("IGSO-satelliteChange", { weixinData })
    }
  })
  graphicLayer.addGraphic(IGSO)
  // 四棱椎体
  // const rectSensor = new mars3d.graphic.RectSensor({
  //   position: new Cesium.CallbackProperty(function (time) {
  //     return weixin.position
  //   }, false),
  //   style: {
  //     angle1: 10,
  //     angle2: 10,
  //     color: "rgba(0,255,0,0.4)",
  //     outline: true,
  //     topShow: true,
  //     topSteps: 2,
  //     rayEllipsoid: true // 与地球求交
  //   }
  // })
  // graphicLayer.addGraphic(rectSensor)

  // // 追踪目标
  // rectSensor.lookAt = new Cesium.CallbackProperty(function (time) {
  //   return MEO.position
  // }, false)
}


// 俯仰角
export function createWeixin(weixinType, tle2) {
  removeWeixin(weixinType)

  if (weixinType === "MEO") {
    const newMeo = createSatellite("MEO-NEW", MEO.options.tle1, tle2)
    graphicLayer.addGraphic(newMeo)

    newWeixin.MEO = newMeo
  }

  if (weixinType === "GEO") {
    const newGeo = createSatellite("GEO-NEW", GEO.options.tle1, tle2)
    graphicLayer.addGraphic(newGeo)

    newWeixin.GEO = newGeo
  }

  if (weixinType === "IGSO") {
    const newIGSO = createSatellite("IGSO-NEW", IGSO.options.tle1, tle2)
    graphicLayer.addGraphic(newIGSO)

    newWeixin.IGSO = newIGSO
  }

}

// 左右角
export function removeWeixin(weixinType) {
  console.log(weixinType)
  graphicLayer.removeGraphic(newWeixin[weixinType], true)
}


export function chkShowModelMatrix(val) {
  GEO.coneShow = val // 显示关闭视锥体
}

export function locate() {
  GEO.flyTo()
}
