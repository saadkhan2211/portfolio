import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function ThreeBackground() {
  const mountRef = useRef(null)

  useEffect(() => {
    const mount = mountRef.current
    const W = window.innerWidth, H = window.innerHeight
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(60, W / H, 0.1, 1000)
    camera.position.z = 28

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(W, H)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0x000000, 0)
    mount.appendChild(renderer.domElement)

    // Particles
    const count = 2000
    const geo = new THREE.BufferGeometry()
    const pos = new Float32Array(count * 3)
    const col = new Float32Array(count * 3)

    for (let i = 0; i < count; i++) {
      pos[i*3]   = (Math.random()-0.5)*130
      pos[i*3+1] = (Math.random()-0.5)*80
      pos[i*3+2] = (Math.random()-0.5)*70
      const t = Math.random()
      if (t < 0.55)      { col[i*3]=0.376; col[i*3+1]=0.208; col[i*3+2]=0.949 } // #6035F2
      else if (t < 0.8)  { col[i*3]=0.545; col[i*3+1]=0.361; col[i*3+2]=0.965 } // #8B5CF6
      else               { col[i*3]=0.024; col[i*3+1]=0.714; col[i*3+2]=0.831 } // cyan
    }
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3))
    geo.setAttribute('color', new THREE.BufferAttribute(col, 3))

    const pMat = new THREE.PointsMaterial({
      size: 0.11, vertexColors: true,
      transparent: true, opacity: 0.5,
      blending: THREE.AdditiveBlending, depthWrite: false,
    })
    const particles = new THREE.Points(geo, pMat)
    scene.add(particles)

    // Large soft ring glow
    const rGeo = new THREE.TorusGeometry(10, 0.045, 8, 100)
    const rMat = new THREE.MeshBasicMaterial({ color: 0x6035F2, transparent: true, opacity: 0.18, blending: THREE.AdditiveBlending })
    const ring = new THREE.Mesh(rGeo, rMat)
    ring.position.set(0, 0, -18)
    scene.add(ring)

    const rGeo2 = new THREE.TorusGeometry(14, 0.03, 6, 100)
    const rMat2 = new THREE.MeshBasicMaterial({ color: 0x8B5CF6, transparent: true, opacity: 0.1, blending: THREE.AdditiveBlending })
    const ring2 = new THREE.Mesh(rGeo2, rMat2)
    ring2.position.set(0, 0, -22)
    scene.add(ring2)

    // Wireframe shapes
    const shapes = []
    const geos = [new THREE.IcosahedronGeometry(4, 0), new THREE.OctahedronGeometry(3, 0), new THREE.TetrahedronGeometry(2.5, 0)]
    geos.forEach((g, i) => {
      const m = new THREE.MeshBasicMaterial({ color: [0x6035F2, 0x8B5CF6, 0x06b6d4][i], wireframe: true, transparent: true, opacity: 0.055 + i*0.01 })
      const mesh = new THREE.Mesh(g, m)
      mesh.position.set((i-1)*18 + (Math.random()-0.5)*3, (Math.random()-0.5)*6, -8)
      scene.add(mesh)
      shapes.push(mesh)
    })

    // Grid
    const grid = new THREE.GridHelper(100, 40, 0x6035F2, 0x0e0e1a)
    grid.position.y = -20
    grid.material.transparent = true
    grid.material.opacity = 0.15
    scene.add(grid)

    const mouse = { x: 0, y: 0 }
    const onM = e => { mouse.x = (e.clientX/window.innerWidth-0.5)*2; mouse.y = (e.clientY/window.innerHeight-0.5)*2 }
    window.addEventListener('mousemove', onM)
    const onR = () => { camera.aspect = window.innerWidth/window.innerHeight; camera.updateProjectionMatrix(); renderer.setSize(window.innerWidth, window.innerHeight) }
    window.addEventListener('resize', onR)

    let f = 0
    const animate = () => {
      f++; const t = f * 0.004
      particles.rotation.y = t * 0.035
      camera.position.x += (mouse.x*2 - camera.position.x)*0.025
      camera.position.y += (-mouse.y*1.5 - camera.position.y)*0.025
      camera.lookAt(scene.position)
      ring.rotation.z = t * 0.25; ring.rotation.x = Math.sin(t*0.4)*0.25
      ring2.rotation.z = -t*0.18; ring2.rotation.y = t*0.12
      const p = 0.15 + Math.sin(t*1.2)*0.06
      ring.material.opacity = p; ring2.material.opacity = p*0.55
      shapes.forEach((s,i) => { s.rotation.x+=0.004+i*0.001; s.rotation.y+=0.006+i*0.001; s.position.y = Math.sin(t+i*2)*3 })
      grid.position.z = (t*2.5)%8-4
      renderer.render(scene, camera)
      requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', onM)
      window.removeEventListener('resize', onR)
      renderer.dispose()
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement)
    }
  }, [])

  return <div ref={mountRef} className="canvas-wrapper" />
}
