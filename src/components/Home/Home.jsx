import React from "react";
import AuthContext from "../../contexts/AuthContext/AuthContext";
import { useContext } from "react";

function Home() {
    const { logout } = useContext(AuthContext);

    const logoutHandler = () => {
        logout();
    };
    return (
        <>
            <div className="h-screen flex flex-col gap-5 justify-center items-center">
                <p>This is the homepage</p>
                <button
                    type="button"
                    onClick={logoutHandler}
                    className="rounded-md px-4 py-2 font-medium bg-indigo-300  hover:bg-indigo-400"
                >
                    Log Out
                </button>
            </div>
        </>
    );
}

export default Home;
