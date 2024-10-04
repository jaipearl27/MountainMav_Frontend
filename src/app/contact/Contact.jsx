"use client";

import Hero2 from "@/components/Hero2";
import Link from "next/link";

import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import { useState } from "react";

import { useForm } from "react-hook-form";
import { toast } from "sonner";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/contact`,
        data
      );
      setLoading(false);
      toast.success("Sumbitted...");
      console.log(response);
    } catch (error) {
      setLoading(false);
      console.log(error);
      toast.error("Server is Busy...");
      setLoading(false);
    }
  };

  return (
    <div className="bg-black">
      <Hero2 />
      <div className="pt-10 bg-black font-sans leading-relaxed tracking-wide flex flex-col max-w-7xl mx-auto">
        <main className="flex-grow container mx-auto p-6">
          <section className="text-center mb-12">
            <h2 className="text-4xl text-white font-semibold mb-4">
              Contact Us
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-20">
              <div className="w-full justify-center items-center">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 justify-between text-base md:text-lg  text-white">
                  <div className="w-[150px] font-bold text-start">Email:</div>
                  <div className="text-start">info@mountainmavericks.in</div>
                  <div className="w-[150px] font-bold text-start">Phone:</div>
                  <div className="text-start">91+ 8800867279</div>
                  <div className="w-[150px] font-bold text-start">Address:</div>
                  <div className="text-start">
                    Rawat Arts, Majri Mafi, Mohkampur, Dehradun, Uttarakhand Pin
                    248001
                  </div>
                  <div className="w-[150px] font-bold text-start">Social:</div>
                  <div className="text-start flex gap-2 flex-wrap">
                    <Link href={"https://x.com/SoulMavericks"}>
                      <XIcon />
                    </Link>
                    <Link href={"https://www.instagram.com/mountainsmavericks"}>
                      <InstagramIcon />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div>
                    <input
                      type="text"
                      {...register("name", { required: "Name is required" })}
                      id="name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      placeholder="Full Name"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <input
                      type="text"
                      {...register("email", { required: "Email is required" })}
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      placeholder="Email"
                    />
                    {errors.eamil && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <input
                      type="text"
                      {...register("mobile", {
                        required: "Mobile number is required",
                      })}
                      id="mobile"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      placeholder="Mobile"
                    />
                    {errors.mobile && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.mobile.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <textarea
                      {...register("message", {
                        required: "Message is required",
                      })}
                      id="message"
                      rows={5}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 resize-none"
                      placeholder="Message"
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.message.message}
                      </p>
                    )}
                  </div>
                  {loading ? (
                    <button
                      disabled={loading}
                      type="button"
                      className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    >
                      Loading...
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    >
                      Submit
                    </button>
                  )}
                </form>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Contact;
