import { useRef } from 'react';

import { OrbitControls, useHelper } from '@react-three/drei';
import { DirectionalLightHelper } from 'three';
import Box from '../meshes/Box/Box';
import Rose from '../meshes/Rose/Scene';

const ExampleScene = () => {
  const directionalLightRef = useRef(null);
  useHelper(directionalLightRef, DirectionalLightHelper, 0.5, "white")

  return (
    <>
      <directionalLight position={[3, 2, 2]} ref={directionalLightRef} />
      <ambientLight intensity={1.3} />

      {/*<Box args={[1, 1, 1]} position={[-1.5, 0.3, 0]} rotation={[-45, 0, 0]} color="#642CA9"/>*/}
      {/*<Box args={[1, 1, 1]} position={[1.5, 0, 0]} color="#FF9248"/>*/}

      <Rose position={[0, -1.5, 0]}/>

      <OrbitControls />
    </>
  )
}

export default ExampleScene
