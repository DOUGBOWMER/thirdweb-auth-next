import {
  useAddress,
  useDisconnect,
  useUser,
  useLogin,
  useLogout,
  useMagic,
} from "@thirdweb-dev/react";
import { useState } from "react";
import Spline from "@splinetool/react-spline";

const Home = () => {
  const [ModalOpen, setModelOpen] = useState(false);
  const address = useAddress();
  const disconnect = useDisconnect();

  const login = useLogin();
  const logout = useLogout();
  const { user } = useUser();
  const [email, setEmail] = useState();

  const [secret, setSecret] = useState();

  const getSecret = async () => {
    const res = await fetch("/api/secret");
    const data = await res.json();
    setSecret(data);
  };

  //  const canvas = document.getElementById("canvas3d");
  //  const app = new Application(canvas);
  //  app.load("https://prod.spline.design/azBOc9FWMQZ4ykLX/scene.splinecode");

  return (
    <div className="w-screen bg-black mx-auto h-screen">
      <Spline
        className="w-screen h-screen  mx-auto"
        // style={{ width: "100%", height: "100%" }}
        scene="https://prod.spline.design/azBOc9FWMQZ4ykLX/scene.splinecode"
      />
    </div>
  );
};

export default Home;
