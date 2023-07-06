import { WebGLRenderer ,Scene,PerspectiveCamera} from "three";

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


const ambientLight = new AmbientLight('rgb(255,255,255)', 0.8)

scene.add(ambientLight)


// 实例化相机
let camera = new PerspectiveCamera(45, dom.offsetWidth / dom.offsetHeight, 1, 1000)  

camera.position.set(50, 50, 50) // 设置相机位置

// camera.lookAt(new Vector3(0, 0, 0))  // 设置相机看先中心点
// camera.up = new Vector3(0, 1, 0)  // 设置相机自身的方向



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