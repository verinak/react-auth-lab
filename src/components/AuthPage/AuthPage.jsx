import React from "react";
import { Outlet } from "react-router-dom";

function AuthPage() {
    return (
        <>
            <div className="h-screen flex justify-center items-center">
                <div className="bg-indigo-400 w-full h-[50%] absolute top-0"></div>
                <div className="bg-indigo-200 w-full h-[50%] absolute bottom-0"></div>
                <div className="bg-white/90 backdrop-blur-xs w-[90dvw] max-w-xl h-[90dvh] rounded-3xl p-7 flex flex-col justify-center items-center shadow-md z-10">
                    <Outlet />
                </div>
            </div>
        </>
    );
}

export default AuthPage;
