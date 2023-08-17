import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <h2>Page Not Found</h2>
      <p>
        Go to the <Link to="/">Home Page</Link>
      </p>
    </div>
  );
}
