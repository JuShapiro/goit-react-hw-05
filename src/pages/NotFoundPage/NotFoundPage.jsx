import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      <Link to="/" Go back />
      <p>Page not found</p>
    </div>
  );
};

export default NotFoundPage;
