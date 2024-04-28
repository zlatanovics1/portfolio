"use client";

import { type ContactForm, contactFormSchema } from "@/types/validation";
import { contactMeSubmit } from "@/app/actions/contactForm";
import { motion } from "framer-motion";

import toast from "react-hot-toast";
import { BiSend } from "react-icons/bi";

export default function ContactForm() {
  async function handleSubmit(data: FormData) {
    const formData: ContactForm = {
      name: (data.get("name") as string) || "",
      email: (data.get("email") as string) || "",
      message: (data.get("message") as string) || "",
    };
    const result = contactFormSchema.safeParse(formData);
    if (!result.success) {
      toast.error("Invalid input!");
      return;
    }

    const res = await contactMeSubmit(formData);
    if (!res.ok) return toast.error("Failed to send message!");
    return toast.success("Message sent!");
  }
  return (
    <form className="px-5 py-10 space-y-10 text-lg" action={handleSubmit}>
      <div className="flex gap-8 flex-col md:flex-row">
        <div className="relative grow">
          <input
            name="name"
            id="name"
            className=" border-b-[1px] px-2 pb-2 pt-8 peer w-4/5 border-b-gray-800 bg-transparent  outline-none focus:border-b-violet-200 transition-colors duration-300"
          />
          <label
            htmlFor="name"
            className="absolute top-0 left-0 peer-focus:text-violet-200 transition-colors duration-300"
          >
            Name
          </label>
        </div>
        <div className="relative grow">
          <input
            name="email"
            id="email"
            className=" border-b-[1px] px-2 pb-2 pt-8 peer w-4/5 border-b-gray-800 bg-transparent  outline-none focus:border-b-violet-200 transition-colors duration-300"
          />
          <label
            htmlFor="email"
            className="absolute top-0 left-0 peer-focus:text-violet-200 transition-colors duration-300"
          >
            Email
          </label>
        </div>
      </div>
      <div className="relative pt-14">
        <textarea
          spellCheck={false}
          name="message"
          id="message"
          rows={5}
          className="peer bg-transparent  border-[1px] resize-none rounded-md border-gray-800 px-2 py-2 w-full outline-none transition-colors duration-300 focus:ring-[1px] focus:border-transparent focus:ring-violet-200"
        ></textarea>
        <label
          htmlFor="message"
          className="absolute top-0 left-0 peer-focus:text-violet-200 transition-colors duration-300"
        >
          Message
        </label>
      </div>
      <motion.button
        whileTap={{ scale: 0.95 }}
        name="Send a message"
        className="border-2 float-right flex items-center gap-2 outline-none focus:bg-violet-900 focus:text-violet-200 border-violet-700 text-violet-700 rounded-md px-10 py-2 hover:bg-violet-700 hover:text-violet-200 transition-colors duration-300"
      >
        <span>Send</span>
        <BiSend className="w-5 h-5" />
      </motion.button>
    </form>
  );
}
