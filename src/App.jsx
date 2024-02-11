import { Canvas } from '@react-three/fiber'
import ExampleScene from './scenes/ExampleScene';
import './App.css'

function App() {
  return (
    <>
      <Canvas>
        <ExampleScene />
      </Canvas>
    </>
  )
}

export default App
