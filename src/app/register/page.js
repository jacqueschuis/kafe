"use client";

import Layout from "../components/HomeLayout";
import Trail from "../components/Trail";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const router = useRouter();
  const supabase = createClientComponentClient();

  const handleSignUp = async () => {
    await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${location.origin}/auth/callback`,
      },
    });
    router.refresh();
  };
  return (
    <Layout>
      <Trail>
        <div className="bg-brown-100 dark:bg-brown-600 max-h-[500px] max-w-[500px] w-full h-full p-10 rounded-xl shadow-xl box-border">
          <h2 className="font-bold text-5xl text-orange-600 dark:text-orange-200">
            Register
          </h2>
          <form onSubmit={handleSignUp} className="flex flex-col gap-5 my-3">
            <label htmlFor="email" className="hidden">
              Email
            </label>
            <input
              type="text"
              id="email"
              placeholder="Email"
              value={email}
              className="p-2 border-4 placeholder:text-orange-600 dark:placeholder:text-orange-300 text-orange-600 dark:text-orange-300 border-orange-600 dark:border-orange-300 rounded-lg flex-initial dark:bg-brown-800"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="password" className="hidden">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              placeholder="Password"
              className="p-2 border-4 placeholder:text-orange-600 dark:placeholder:text-orange-300 text-orange-600 dark:text-orange-300 border-orange-600 dark:border-orange-300 rounded-lg flex-initial dark:bg-brown-800"
              onChange={(e) => setPassword(e.target.value)}
            />
            {/* <div className="w-full flex gap-5">
              <label htmlFor="first-name" className="hidden">
                First Name
              </label>
              <input
                type="text"
                id="first-name"
                placeholder="First"
                onChange={(e) => setFirstName(e.target.value)}
                className="p-2 rounded-md w-1/2"
              />
              <label htmlFor="last-name" className="hidden">
                Last Name
              </label>
              <input
                type="text"
                id="last-name"
                placeholder="Last"
                onChange={(e) => setLastName(e.target.value)}
                className="p-2 rounded-md w-1/2"
              />
            </div> */}
            <button className="w-full border-4 bg-green-400 dark:bg-green-300 dark:text-green-800 rounded-lg p-3 font-bold text-xl">
              Register
            </button>
          </form>
        </div>
      </Trail>
    </Layout>
  );
};

export default Register;
