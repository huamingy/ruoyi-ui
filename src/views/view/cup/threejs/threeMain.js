import { WebGLRenderer ,Scene,PerspectiveCamera} from "three";
import { AmbientLight, PointLight } from "three"
import { BoxGeometry, Color, Mesh, MeshStandardMaterial } from "three"

export class ThreMain{

dom =null;
scene = null
constructor(dom){
    this.dom =dom

let renderer   = new WebGLRenderer({
    antialias:true
})


dom.appendChild(renderer.domElement)
renderer.setSize(dom.offsetWidth, dom.offsetHeight, true)


let scene = new  Scene()

// scene.background = new /
const ambientLight = new AmbientLight('rgb(255,255,255)', 0.8)

scene.add(ambientLight)
const pointLight = new PointLight(
    'rgb(255,255,255)',
    0.5,
    600,
    0.2
  )
  pointLight.position.set(0, 50, 100)  // 设置点光源位置
  scene.add(pointLight)
// 实例化相机
let camera = new PerspectiveCamera(45, dom.offsetWidth / dom.offsetHeight, 1, 1000)  

camera.position.set(50, 50, 50) // 设置相机位置

// camera.lookAt(new Vector3(0, 0, 0))  // 设置相机看先中心点
// camera.up = new Vector3(0, 1, 0)  // 设置相机自身的方向
console.log(scene)










const box = new Mesh(
    new BoxGeometry(30, 20, 20),  // 设置立方体的大小
    new MeshStandardMaterial({   // 设置材质
      color: 'rgb(36, 172, 242)',  // 设置材质的颜色
    //   metalness: 0.5,   // 金属度 （1 最像金属，0 最不想金属）
    //   roughness: 0   // 粗糙度（0 最光滑，1 最粗糙）
    })
  )
  box.name = 'box'  // 设置模型 name
scene.add(box)







  // 渲染器渲染场景和相机
this.dom = dom
this.scene = scene
render()

function render(){

    requestAnimationFrame(render)
    renderer.render(scene, camera)
}

}



}