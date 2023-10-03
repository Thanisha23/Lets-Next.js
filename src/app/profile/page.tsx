"use client";
import { toast } from "react-hot-toast";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
export default function ProfilePage() {
  const router = useRouter();
  const [data, setData] = useState("nothing");
  const logout = async () => {
    try {
      await axios.get("api/users/logout");
      toast.success("Logout successful");
      router.push("/login");
    } catch (error: any) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  const getUserDetails = async () => {
    try {
      const res = await axios.get("/api/users/me");
      console.log(res.data);
      console.log(res.data.data);
      setData(res.data.data._id);
    } catch (error: any) {
      console.log("error", error.message);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Profile</h1>

      <p>Profile Page</p>
      <h2 className="p-1 bg-pink-300">
        {data === "nothing" ? (
          "Nothing"
        ) : (
          <Link href={`/profile/${data}`}>{data}</Link>
        )}
      </h2>

      <button
        onClick={logout}
        className="bg-blue-500 hover:bg-blue-700 mt-[1rem] text-white font-bold py-2 px-4 rounded"
      >
        Logout
      </button>
      <button
        onClick={getUserDetails}
        className="bg-pink-300 hover:bg-pink-700 mt-[1rem] text-white font-bold py-2 px-4 rounded"
      >
        MyInfo
      </button>
    </div>
  );
}
