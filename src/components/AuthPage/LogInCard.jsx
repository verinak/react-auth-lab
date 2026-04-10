// import { useState } from "react";
import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import AuthContext from "../../contexts/AuthContext/AuthContext";
import { useContext } from "react";

function LogInCard() {
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);

    const Schema = Yup.object({
        email: Yup.string()
            .email("Please enter a valid email")
            .required("Email is required"),
        password: Yup.string()
            .min(6, "Password must be at least 6 characters")
            .required("Password is required"),
    });

    const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
        useFormik({
            initialValues: {
                email: "",
                password: "",
            },
            validationSchema: Schema,
            onSubmit: (values) => {
                console.log(values);
                // logging users in if they entered a valid email and pass ig
                login();
                navigate("/");
            },
        });

    return (
        <>
            <div className="flex-1 w-full flex flex-col justify-center items-center">
                <h1 className="my-2 mb-10 text-2xl/9 font-bold w-full text-start">
                    Welcome Back
                </h1>
                <form
                    onSubmit={handleSubmit}
                    className="space-y-6 w-full"
                    noValidate
                >
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm/6 font-medium"
                        >
                            Email address
                        </label>
                        <div className="mt-2">
                            <input
                                id="email"
                                type="email"
                                name="email"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur} // sets touched attr
                                // required
                                autoComplete="email"
                                className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base outline-1 -outline-offset-1 outline-black/20 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                            />
                        </div>
                        {errors.email && touched.email && (
                            <p className="text-red-600 mb-3 text-sm/6">
                                {errors.email}
                            </p>
                        )}
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label
                                htmlFor="password"
                                className="block text-sm/6 font-medium"
                            >
                                Password
                            </label>
                        </div>
                        <div className="mt-2">
                            <input
                                id="password"
                                type="password"
                                name="password"
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur} // sets touched attr
                                // required
                                autoComplete="current-password"
                                className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base outline-1 -outline-offset-1 outline-black/20 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                            />
                        </div>
                        {errors.password && touched.password && (
                            <p className="text-red-600 mb-3 text-sm/6">
                                {errors.password}
                            </p>
                        )}
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                        >
                            Log in
                        </button>
                    </div>
                </form>

                <p className="mt-10 text-center text-sm/6 text-gray-600">
                    Not a member?
                    {"  "}
                    <Link
                        to="/auth/signup"
                        className="font-semibold text-indigo-500 hover:text-indigo-600"
                    >
                        Create an account
                    </Link>
                </p>
            </div>
        </>
    );
}

export default LogInCard;
