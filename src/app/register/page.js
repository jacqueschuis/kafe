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
    await supabase.from("user-info").insert({
      first_name: firstName,
      last_name: lastName,
    });
  };
  return (
    <Layout>
      <Trail>
        <div className="bg-brown-100 max-h-[500px] max-w-[500px] w-full h-full p-10 rounded-xl shadow-xl box-border">
          <h2 className="font-bold text-5xl text-orange-600 dark:text-orange-300">
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
              className="p-2 rounded-md flex-initial"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="password" className="hidden">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Password"
              className="p-2 rounded-md flex-initial"
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="w-full flex gap-5">
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
            </div>
            <button className="w-full bg-green-400 rounded-md p-3 font-bold text-xl">
              Register
            </button>
          </form>
        </div>
      </Trail>
    </Layout>
  );
};

export default Register;
