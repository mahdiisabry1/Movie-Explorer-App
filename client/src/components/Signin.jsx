import React from "react";
import { Link } from "react-router-dom";
import TextBox from "../ui/TextBox";

const Signin = () => {
  return (
    <>
      <div className="w-4/12">
        <div className="flex justify-center mb-12">
          <h1 className="text-3xl pt-10 font-bold">Login</h1>
        </div>
        <div>
          <div className="flex flex-col gap-4">
            <TextBox placeholder="Email" showIcon={false} />
            <TextBox placeholder="Password" showIcon={false} />
          </div>
          <a href="" className="text-xs underline text-blue-700 ml-1">
            Forgot Your Password
          </a>
          <div className="mt-5 flex justify-center">
            <button type="submit" className="border-2 px-4 py-1">
              Login
            </button>
          </div>
          <div className="flex mt-2 justify-center">
            <Link to="/sign-up" className="underline">
              Don't have an account
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
