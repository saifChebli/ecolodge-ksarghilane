import React from "react";

const LoginForm = () => {
  return (
    <div className="w-full max-w-md mx-auto">
      <form className="space-y-6">
        <div>{/* Error messages */}</div>
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium">
            Email address{" "}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email address"
            required
            className="w-full rounded border border-gray-200 focus:border-gray-400 outline-0 p-2 "
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="password" className="block text-sm font-medium">
            Password{" "}
          </label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="********"
            required
            className="w-full rounded border border-gray-200 focus:border-gray-400 outline-0 p-2 "
          />
        </div>
        <div className="flex item-center">
          <button
            type="submit"
            className="mt-8 w-full p-2 rounded cursor-pointer bg-black text-amber-50"
          >
            {"Sign In"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
