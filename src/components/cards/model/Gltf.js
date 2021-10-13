import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense } from "react";

const Model = () => {
    const gltf = useLoader(GLTFLoader, "model/buffer.gltf");
    return (
      <>
        <primitive object={gltf.scene} scale={0.1} />
      </>
    );
};

const GltfCards = () => {
    return(
        <div className="row">
            <div className="h-600-wrapper mb-2">
                <Canvas className="gltf-canvas">
                    <Suspense fallback={null}>
                    <Model />
                    <OrbitControls />
                    <Environment preset="sunset" background />
                    </Suspense>
                </Canvas>
            </div>
        </div>
    );
};

export default GltfCards;