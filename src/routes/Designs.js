import { Outlet } from "react-router-dom";
import Gradient from "../components/Gradient";

const Designs = () => {
  return (
    <>
      <Gradient />
      <Outlet />
    </>
  )
}

export default Designs;