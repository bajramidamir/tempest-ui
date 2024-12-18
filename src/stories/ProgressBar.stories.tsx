import { useEffect, useState } from "react";
import ProgressBar from "../components/ProgressBar/ProgressBar";

export default {
  title: "Components/ProgressBar",
  component: ProgressBar,
};

export const Default = () => <ProgressBar value={50} />;
export const WithMax = () => <ProgressBar value={75} max={150} />;
export const WithLabel = () => <ProgressBar value={40} label="Loading..." />;
export const Success = () => <ProgressBar value={80} color="success" />;
export const Danger = () => <ProgressBar value={20} color="danger" />;
export const Warning = () => <ProgressBar value={60} color="warning" />;
export const Small = () => <ProgressBar value={50} size="small" />;
export const Large = () => <ProgressBar value={75} size="large" />;
export const FileUpload = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ width: "300px", margin: "0 auto", textAlign: "center" }}>
      <h3>Uploading File...</h3>
      <ProgressBar value={progress} label={`${progress}%`} />
      {progress === 100 && <p>Upload Complete!</p>}
    </div>
  );
};
