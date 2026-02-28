import React from 'react';
import { useGLTF, useAnimations, useTexture, useVideoTexture } from '@react-three/drei';

import * as THREE from "three";

export function IsometricRoom(props) {
  const group = React.useRef();
  const { nodes, materials, animations } = useGLTF('/models/Isometric.glb');
  const { actions } = useAnimations(animations, group);

  const matcapTexture = useTexture("/images/WallpaperCom.jpg");
  //const matcapTexture = useVideoTexture("/Videos/WallpaperVideos.mp4");

  const screen_1 = new THREE.MeshPhongMaterial({
      map: matcapTexture,
  });

  const screen_2 = new THREE.MeshPhongMaterial({
      map: matcapTexture,
  });

  const screen_3 = new THREE.MeshPhongMaterial({
      map: matcapTexture,
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="aac9f7f669d9419d88711129383542dffbx" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Cube020" position={[207.742, -74.079, 49.469]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={4.587}>
                  <mesh name="Cube020_Material003_0" geometry={nodes.Cube020_Material003_0.geometry} material={materials['Material.003']} />
                  <mesh name="Cube020_Rgb_lighting_0" geometry={nodes.Cube020_Rgb_lighting_0.geometry} material={materials.Rgb_lighting} />
                </group>
                <group name="Cube" position={[180.787, -52.5, 0]} rotation={[Math.PI / 2, 0, Math.PI]} scale={100}>
                  <mesh name="Cube__0" geometry={nodes.Cube__0.geometry} material={materials.Cube__0} />
                </group>
                <group name="Cube010" position={[180.787, -52.5, 0]} rotation={[Math.PI / 2, 0, Math.PI]} scale={100}>
                  <mesh name="Cube010__0" geometry={nodes.Cube010__0.geometry} material={materials.Cube__0} />
                </group>
                <group name="Cube014" position={[180.787, -52.5, 0]} rotation={[Math.PI / 2, 0, Math.PI]} scale={100}>
                  <mesh name="Cube014__0" geometry={nodes.Cube014__0.geometry} material={materials.Cube__0} />
                </group>
                <group name="Cube031" position={[180.787, -52.5, 0]} rotation={[Math.PI / 2, 0, Math.PI]} scale={100}>
                  <mesh name="Cube031_light_0" geometry={nodes.Cube031_light_0.geometry} material={materials.light} />
                </group>
                <group name="Cube004" position={[44.893, -113.737, 84.916]} rotation={[Math.PI / 2, 0, Math.PI]} scale={132.694}>
                  <mesh name="Cube004_white_cloth_0" geometry={nodes.Cube004_white_cloth_0.geometry} material={materials.white_cloth} />
                </group>
                <group name="Cube005" position={[44.893, -113.737, 84.916]} rotation={[Math.PI / 2, 0, Math.PI]} scale={132.694}>
                  <mesh name="Cube005_white_cloth_0" geometry={nodes.Cube005_white_cloth_0.geometry} material={materials.white_cloth} />
                </group>
                <group name="Cube006" position={[44.893, -113.737, 84.916]} rotation={[Math.PI / 2, 0, Math.PI]} scale={132.694}>
                  <mesh name="Cube006_white_cloth_0" geometry={nodes.Cube006_white_cloth_0.geometry} material={materials.white_cloth} />
                </group>
                <group name="Cube007" position={[44.893, -113.737, 84.916]} rotation={[Math.PI / 2, 0, Math.PI]} scale={132.694}>
                  <mesh name="Cube007_white_0" geometry={nodes.Cube007_white_0.geometry} material={materials.white} />
                </group>
                <group name="Cube008" position={[44.893, -113.737, 84.916]} rotation={[Math.PI / 2, 0, Math.PI]} scale={132.694}>
                  <mesh name="Cube008_white_0" geometry={nodes.Cube008_white_0.geometry} material={materials.white} />
                </group>
                <group name="Cube009" position={[44.893, -113.737, 84.916]} rotation={[Math.PI / 2, 0, Math.PI]} scale={132.694}>
                  <mesh name="Cube009_white_cloth_0" geometry={nodes.Cube009_white_cloth_0.geometry} material={materials.white_cloth} />
                </group>
                <group name="Cube011" position={[14.37, -134.479, 115.273]} rotation={[-Math.PI / 2, 0, 0]} scale={2.722}>
                  <mesh name="Cube011_black_0" geometry={nodes.Cube011_black_0.geometry} material={materials.black} />
                </group>
                <group name="Cube001" position={[163.317, -41.554, 0]} rotation={[Math.PI / 2, 0, Math.PI]} scale={100}>
                  <mesh name="Cube001__0" geometry={nodes.Cube001__0.geometry} material={materials.Cube__0} />
                </group>
                <group name="Cube002" position={[163.317, -52.5, 0]} rotation={[Math.PI / 2, 0, Math.PI]} scale={100}>
                  <mesh name="Cube002_white_0" geometry={nodes.Cube002_white_0.geometry} material={materials.white} />
                </group>
                <group name="Cube003" position={[23.989, -109.185, -29.524]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={100}>
                  <mesh name="Cube003_white_0" geometry={nodes.Cube003_white_0.geometry} material={materials.white} />
                  <mesh name="Cube003_black_0" geometry={nodes.Cube003_black_0.geometry} material={materials.black} />
                </group>
                <group name="Cube013" position={[163.317, -73.749, 0]} rotation={[Math.PI / 2, 0, Math.PI]} scale={100}>
                  <mesh name="Cube013_Rgb_lighting_0" geometry={nodes.Cube013_Rgb_lighting_0.geometry} material={materials.Rgb_lighting} />
                </group>
                <group name="Cube016" position={[113.937, -73.851, -32.704]} rotation={[Math.PI / 2, 0, Math.PI]} scale={100}>
                  <mesh name="Cube016_black_cloth_0" geometry={nodes.Cube016_black_cloth_0.geometry} material={materials.black_cloth} />
                  <mesh name="Cube016_white_cloth_0" geometry={nodes.Cube016_white_cloth_0.geometry} material={materials.white_cloth} />
                </group>
                <group name="Cube017" position={[137.087, -73.754, -28.421]} rotation={[-Math.PI / 2, 0, 0]} scale={4.587}>
                  <mesh name="Cube017_Material003_0" geometry={nodes.Cube017_Material003_0.geometry} material={materials['Material.003']} />
                  <mesh name="Cube017_Rgb_lighting_0" geometry={nodes.Cube017_Rgb_lighting_0.geometry} material={materials.Rgb_lighting} />
                </group>
                <group name="Cube019" position={[215.576, -73.672, 27.54]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={100}>
                  <mesh name="Cube019_black_cloth_0" geometry={nodes.Cube019_black_cloth_0.geometry} material={materials.black_cloth} />
                  <mesh name="Cube019_white_cloth_0" geometry={nodes.Cube019_white_cloth_0.geometry} material={materials.white_cloth} />
                </group>
                <group name="Cube021" position={[113.685, -44.181, -59.692]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <mesh name="Cube021_white_cloth_0" geometry={nodes.Cube021_white_cloth_0.geometry} material={materials.white_cloth} />
                  <mesh name="Cube021_purple_emit_0" geometry={nodes.Cube021_purple_emit_0.geometry} material={screen_1} />
                </group>
                <group name="Cube022" position={[113.685, -81.07, -72.057]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <mesh name="Cube022__0" geometry={nodes.Cube022__0.geometry} material={materials.Cube__0} />
                </group>
                <group name="Cube024" position={[192.493, -44.181, -49.726]} rotation={[-Math.PI / 2, 0, -0.475]} scale={100}>
                  <mesh name="Cube024_white_0" geometry={nodes.Cube024_white_0.geometry} material={materials.white} />
                  <mesh name="Cube024_screen_2_0" geometry={nodes.Cube024_screen_2_0.geometry} material={screen_2} />
                </group>
                <group name="Cube025" position={[235.473, -44.181, 22.581]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <mesh name="Cube025_white_0" geometry={nodes.Cube025_white_0.geometry} material={materials.white} />
                  <mesh name="Cube025_purple_emit_0" geometry={nodes.Cube025_purple_emit_0.geometry} material={screen_3} />
                </group>
                <group name="Cube027" position={[214.357, 25.062, -81.479]} rotation={[0, 0, -Math.PI / 2]} scale={81.15}>
                  <mesh name="Cube027__0" geometry={nodes.Cube027__0.geometry} material={materials.Cube__0} />
                </group>
                <group name="Cube028" position={[-1.092, 25.062, -81.479]} rotation={[0, 0, -Math.PI / 2]} scale={[77.449, 69.928, 81.15]}>
                  <mesh name="Cube028__0" geometry={nodes.Cube028__0.geometry} material={materials.Cube__0} />
                </group>
                <group name="Cylinder" position={[13.875, -83.267, -70.111]} rotation={[-Math.PI / 2, 0, 0]} scale={[74.969, 74.969, 100]}>
                  <mesh name="Cylinder__0" geometry={nodes.Cylinder__0.geometry} material={materials.Cube__0} />
                </group>
                <group name="Plane" position={[10.771, -87.839, -68.725]} rotation={[0, 0.239, 0]} scale={5.609}>
                  <mesh name="Plane_leaves_0" geometry={nodes.Plane_leaves_0.geometry} material={materials.leaves} />
                </group>
                <group name="Cylinder001" position={[60.223, -73.913, -28.378]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={[26.571, 26.571, 35.443]}>
                  <group name="Cylinder004" position={[-0.121, -0.011, 0.24]} rotation={[-0.188, -0.846, -1.529]} scale={[3.602, 3.154, 3.299]}>
                    <mesh name="Cylinder004_leaves_0" geometry={nodes.Cylinder004_leaves_0.geometry} material={materials.leaves} />
                  </group>
                  <group name="Cylinder002" position={[-0.051, -0.11, 0.269]} rotation={[0.785, -0.42, -0.135]} scale={[3.602, 3.154, 3.299]}>
                    <mesh name="Cylinder002_leaves_0" geometry={nodes.Cylinder002_leaves_0.geometry} material={materials.leaves} />
                  </group>
                  <mesh name="Cylinder001__0" geometry={nodes.Cylinder001__0.geometry} material={materials.Cube__0} />
                </group>
                <group name="Cube029" position={[245.896, 14.128, -58.45]} rotation={[-Math.PI / 2, 0, -0.049]} scale={21.939}>
                  <mesh name="Cube029_Material002_0" geometry={nodes.Cube029_Material002_0.geometry} material={materials['Material.002']} />
                  <mesh name="Cube029_Material001_0" geometry={nodes.Cube029_Material001_0.geometry} material={materials['Material.001']} />
                </group>
                <group name="model_0" position={[246.925, -7.704, -24.226]} rotation={[-Math.PI / 2, -0.008, Math.PI / 2]} scale={75.085}>
                  <mesh name="model_0_Material_0" geometry={nodes.model_0_Material_0.geometry} material={materials.Material} />
                </group>
                <group name="HoneyComb" position={[263.315, 19.302, 30.548]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={29.576}>
                  <mesh name="HoneyComb_Rgb_lighting_0" geometry={nodes.HoneyComb_Rgb_lighting_0.geometry} material={materials.Rgb_lighting} />
                </group>
                <group name="Cube032" position={[194.842, -81.07, -53.782]} rotation={[-Math.PI / 2, 0, -0.471]} scale={100}>
                  <mesh name="Cube032__0" geometry={nodes.Cube032__0.geometry} material={materials.Cube__0} />
                </group>
                <group name="Cube023" position={[247.978, -81.07, 22.415]} rotation={[-Math.PI / 2, 0, -1.586]} scale={100}>
                  <mesh name="Cube023__0" geometry={nodes.Cube023__0.geometry} material={materials.Cube__0} />
                </group>
                <group name="Cube012" position={[227.304, -105.6, 102.92]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <mesh name="Cube012_white_0" geometry={nodes.Cube012_white_0.geometry} material={materials.white} />
                  <mesh name="Cube012_Rgb_lighting_0" geometry={nodes.Cube012_Rgb_lighting_0.geometry} material={materials.Rgb_lighting} />
                </group>
                <group name="Cube105" position={[105.413, -70.788, -30.526]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <mesh name="Cube105_Material004_0" geometry={nodes.Cube105_Material004_0.geometry} material={materials['Material.004']} />
                  <mesh name="Cube105_Material005_0" geometry={nodes.Cube105_Material005_0.geometry} material={materials['Material.005']} />
                  <mesh name="Cube105_Rgb_lighting_0" geometry={nodes.Cube105_Rgb_lighting_0.geometry} material={materials.Rgb_lighting} />
                </group>
                <group name="Plane003" position={[106.531, -81.009, 7.464]} rotation={[0, 0, -Math.PI]} scale={-22.514}>
                  <group name="Plane001" position={[0, 1.009, -0.739]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={-4.442}>
                    <group name="Plane004" position={[0, -0.015, -0.154]} rotation={[Math.PI / 2, 0, Math.PI]} scale={-0.76}>
                      <mesh name="Plane004__0" geometry={nodes.Plane004__0.geometry} material={materials.Cube__0} />
                    </group>
                    <mesh name="Plane001_white_cloth_0" geometry={nodes.Plane001_white_cloth_0.geometry} material={materials.white_cloth} />
                    <mesh name="Plane001_black_0" geometry={nodes.Plane001_black_0.geometry} material={materials.black} />
                  </group>
                  <group name="Plane002" position={[0, -0.252, 0.141]}>
                    <mesh name="Plane002_white_cloth_0" geometry={nodes.Plane002_white_cloth_0.geometry} material={materials.white_cloth} />
                  </group>
                  <group name="Plane005" position={[0.225, -1.374, -0.01]} rotation={[0, -0.516, 0]} scale={3.376}>
                    <group name="Circle" position={[0.189, -0.266, -0.002]} rotation={[0, -0.006, 0]} scale={0.047}>
                      <mesh name="Circle_black_0" geometry={nodes.Circle_black_0.geometry} material={materials.black} />
                      <mesh name="Circle_white_0" geometry={nodes.Circle_white_0.geometry} material={materials.white} />
                    </group>
                    <group name="Circle001" position={[-0.19, -0.266, 0.25]} rotation={[0, 1.102, 0]} scale={0.047}>
                      <mesh name="Circle001_black_0" geometry={nodes.Circle001_black_0.geometry} material={materials.black} />
                      <mesh name="Circle001_white_0" geometry={nodes.Circle001_white_0.geometry} material={materials.white} />
                    </group>
                    <group name="Circle002" position={[-0.188, -0.266, -0.247]} rotation={[-Math.PI, 1.121, Math.PI]} scale={0.047}>
                      <mesh name="Circle002_black_0" geometry={nodes.Circle002_black_0.geometry} material={materials.black} />
                      <mesh name="Circle002_white_0" geometry={nodes.Circle002_white_0.geometry} material={materials.white} />
                    </group>
                    <mesh name="Plane005__0" geometry={nodes.Plane005__0.geometry} material={materials.Cube__0} />
                  </group>
                  <mesh name="Plane003_white_0" geometry={nodes.Plane003_white_0.geometry} material={materials.white} />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/Isometric.glb');
