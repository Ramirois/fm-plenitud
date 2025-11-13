import { Canvas, useFrame } from "@react-three/fiber"
import { Suspense, useRef, useState, type FC, type JSX } from "react";
import { Group } from "three";
import { OrbitControls, useGLTF, Html } from "@react-three/drei";

const AnimatedBox = () => {
  // export const AnimatedBox = () => {
  const [autoRotate, setAutoRotate] = useState(true);

  return (
    <Canvas
      camera={{ position: [0, 1.5, 8], fov: 35 }}   // cámara un poco más lejos
      dpr={[1, 2]}
      style={{ width: "100%", height: "100%" }}     // ✨ usa el tamaño del div padre
    >
      {/* Luces */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 10, 5]} intensity={1} />
      <Suspense
        fallback={
          null
        }
      >
        <MicrophoneModel
          autoRotate={autoRotate}
          setAutoRotate={setAutoRotate}
          position={[0.3, -1, 0]}
          scale={0.0027}
        />
      </Suspense>
      <OrbitControls
        makeDefault
        enableDamping
        dampingFactor={0.05}
        enablePan={false}
        enableZoom={true}
      />
    </Canvas>
  );
};


type MicrophoneModelProps = {
  autoRotate: boolean;
  setAutoRotate: (value: boolean) => void;

} & JSX.IntrinsicElements["group"];

const MicrophoneModel: FC<MicrophoneModelProps> = ({
  autoRotate,
  setAutoRotate,
  ...props
}) => {
  const group = useRef<Group | null>(null);
  const { scene } = useGLTF("/microphone.glb") as any;

  useFrame((_, delta) => {
    if (autoRotate && group.current) {
      group.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <group
      ref={group}
      {...props}
      onPointerDown={(e) => {
        e.stopPropagation();
        setAutoRotate(false);
      }}
    >
      {/* acá mandamos el scale del padre + un scale base si querés */}
      <primitive object={scene} />
    </group>
  );
};

useGLTF.preload("/microphone.glb");

export default AnimatedBox;