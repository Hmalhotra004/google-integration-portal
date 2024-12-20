"use client";

import AuthSocialButton from "@/components/AuthSocialButton";
import axios from "axios";
import { useRouter } from "next/navigation";
import { BsGoogle } from "react-icons/bs";

const LoginPage = () => {
  const router = useRouter();

  const socialAction = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/reviews/login/");
      const { url } = response.data;
      router.push(url);
    } catch (error) {
      console.error("Error fetching login URL:", error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-dvh">
      <div className="sm:mx-auto sm:w-full sm:max-w-md border-stone-200 border-2 flex flex-col justify-center items-center">
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-stone-900">
          Log in to your account
        </h2>
        <p>The account linked to the google bussines profile</p>
        <div className="mt-6 flex gap-2 p-4">
          <AuthSocialButton
            icon={BsGoogle}
            onClick={socialAction}
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
