import { Outlet } from "react-router-dom";
import Gradient from "../components/Gradient";

const Projects = () => {
  return (
    <>
      <Gradient />
      <Outlet />
    </>
  )
}

export default Projects;