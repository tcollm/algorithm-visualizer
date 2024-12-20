import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <section className="body">
      <h1>404</h1>
      <h2>Oh no, this route doesn&#39;t exist!</h2>
      <Link to="/">
        You can go back to the home page by clicking here, though!
      </Link>
    </section>
  );
};

export default ErrorPage;
