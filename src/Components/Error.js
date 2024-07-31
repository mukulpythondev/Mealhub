import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    console.log(err);

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-red-100 text-red-700">
            <h3 className="text-3xl font-semibold mb-4">Oops! You have unlocked a secret gate that does not exist.</h3>
            <h4 className="text-xl">{err.status} - {err.statusText}</h4>
        </div>
    );
};

export default Error;
