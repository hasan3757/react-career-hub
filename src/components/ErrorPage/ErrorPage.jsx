import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="text-center font-bold text-6xl pt-60">
            <h2>Oops!!!</h2>
            <Link to='/'>Go back</Link>
        </div>
    );
};

export default ErrorPage;