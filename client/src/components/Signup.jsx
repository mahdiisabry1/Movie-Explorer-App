import React from "react";
import { Link } from "react-router-dom";
import TextBox from "../ui/TextBox";

const Signup = () => {
  return (
    <>
      <div className="w-4/12">
        <div className="flex justify-center mb-12">
          <h1 className="text-3xl pt-10 font-bold">Create Account</h1>
        </div>
        <div>
          <div className="flex flex-col gap-4">
            <div className="flex gap-1">
              <TextBox placeholder="First Name" showIcon={false} />

              <TextBox placeholder="Last Name" showIcon={false} />
            </div>

            <TextBox placeholder="Email" showIcon={false} />

            <TextBox placeholder="Password" showIcon={false} />

            <TextBox placeholder="Re-enter password" showIcon={false} />
          </div>
          <div className="mt-5 flex justify-center">
            <button type="submit" className="border-2 px-4 py-1">
              Register
            </button>
          </div>
          <div className="flex mt-2 justify-center">
            <Link to="/sign-in" className="underline">
              Already have an account
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
