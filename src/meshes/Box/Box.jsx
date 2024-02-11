import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'

const Box = ({args, position, rotation, color}) => {
   const ref = useRef();

   useFrame((state, delta, xrFrame) => {
      ref.current.rotation.y += delta;
   })

   return (
      <mesh ref={ref} position={position} rotation={rotation}>
         <boxGeometry args={args} />
         <meshStandardMaterial color={color} />
      </mesh>
   )
}

export default Box
