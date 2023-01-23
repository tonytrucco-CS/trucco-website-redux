import WinHalf from "./WinHalf"

const Project = ({id}) => {
  switch (id) {
    case "winhalf":
      return (
        <WinHalf />
      )
    default:
      return (
        null
      )
  }
}

export default Project;