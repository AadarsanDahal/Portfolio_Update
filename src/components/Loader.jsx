import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html center className="text-xl text-normal font-black">
      {progress}% Loaded{" "}
    </Html>
  );
};

export default Loader;
