import Loader from "../components/Loader/Loader";

export default {
  title: "Components/Loader",
  component: Loader,
};

export const Default = () => <Loader />;
export const Fullscreen = () => <Loader fullscreen />;
