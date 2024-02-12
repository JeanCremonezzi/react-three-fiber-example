import { Canvas } from '@react-three/fiber'
import ExampleScene from './scenes/ExampleScene';
import './App.css'

function App() {
  return (
    <>
      <Canvas camera={{ fov: 60, position: [-2, 2, 3] }}>
        <ExampleScene />
      </Canvas>
    </>
  )
}

export default App
