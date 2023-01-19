import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <h1>Oops!</h1>
      <p>An error has occurred.</p>
      <p>
        {error.statusText || error.message}
      </p>
    </>
  )
}

export default ErrorPage;