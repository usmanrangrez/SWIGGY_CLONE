import { useRouteError } from "react-router-dom";
import { ERROR_IMAGE } from "../utils/constants";

const ErrorComponent = () => {
  const error = useRouteError();
  return (
    <div className="error-container">
      <img className="error-image" src={ERROR_IMAGE} alt="error-image" />
      <h1>Oops! You got into some error!</h1>
      <h2>{error?.data}</h2>
      <h2>
        {error?.status} {error?.statusText}
      </h2>
    </div>
  );
};

export default ErrorComponent;
