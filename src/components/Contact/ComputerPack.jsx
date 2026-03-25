import { useGLTF, useAnimations, useTexture, useVideoTexture } from '@react-three/drei'
import * as THREE from "three";

export function ComputerPack(props) {
  const { nodes, materials } = useGLTF('./models/computer_full_pack.glb')

  //const matcapTexture = useTexture('/images/WallpaperCom.jpg');
  const matcapTexture = useVideoTexture("./Videos/DisplayCode.mp4");

  matcapTexture.rotation = -Math.PI / 2; // หมุน 90 องศา (ลองเปลี่ยนเป็น -Math.PI / 2 ถ้าหมุนผิดทาง)
  matcapTexture.center.set(0.5, 0.6);   // กำหนดจุดหมุน
  matcapTexture.needsUpdate = true;

  const screen = new THREE.MeshPhongMaterial({
    map: matcapTexture,
  });

  return (
    <group {...props} dispose={null}>
      <group position={[-1.258, 0.195, 2.2]}>
        <mesh geometry={nodes.Object_4.geometry} material={materials.computer_details} />
        <mesh geometry={nodes.Object_5.geometry} material={materials.computer_keyboard} />
        <mesh geometry={nodes.Object_6.geometry} material={materials.computer_main_body} />
      </group>
      <group position={[0.542, -0.111, -4.23]}>
        <mesh geometry={nodes.Object_14.geometry} material={materials.cable} />
        <mesh geometry={nodes.Object_15.geometry} material={materials.connector} />
      </group>
      <group position={[0, 0.368, -2.43]}>
        <mesh geometry={nodes.Object_17.geometry} material={materials.monitor_black} />
        <mesh geometry={nodes.Object_18.geometry} material={materials.monitor_white} />
        <mesh geometry={nodes.Object_19.geometry} material={screen} />
        <mesh geometry={nodes.Object_21.geometry} material={materials.monitor_white} position={[1.265, -0.148, 2.24]} rotation={[Math.PI / 2, 0, 0]} />
      </group>
      <mesh geometry={nodes.Object_8.geometry} material={materials.peripherals} position={[3.182, 0.071, -2.601]} />
      <mesh geometry={nodes.Object_10.geometry} material={materials.peripherals} position={[4.297, 0.478, 1.302]} rotation={[0, 0.602, 0]} />
      <mesh geometry={nodes.Object_12.geometry} material={materials.peripherals} position={[-4.423, 1.212, -1.111]} />
      <mesh geometry={nodes.Object_23.geometry} material={materials.monitor_plug} position={[0.003, 2.252, -2.083]} />
    </group>
  )
}

useGLTF.preload('./models/computer_full_pack.glb');
export default ComputerPack;
