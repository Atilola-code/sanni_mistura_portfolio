"use client";
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "emailjs-com";
import Image from "next/image";
import { useState } from "react";
import { time } from "console";

export default function Contact() {
  const [success, setSuccess] = useState(false);

  // Formik form setup
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      time: new Date().toLocaleString(),
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      message: Yup.string().min(10, "Message should be at least 10 characters").required("Message is required"),
    }),
    onSubmit: (values, { resetForm }) => {
      emailjs
        .send(
         "service_nso48zo",
          "template_7ds7oco",
          {
          name: values.name,
          email: values.email,
          time: values.time,
          message: values.message
        },
          "BpDJB_JWUIS41JOh-"
        )
        .then((result) => {
            alert("Message sent successfully!")
          setSuccess(true);
          resetForm();
        })
        .catch((err) => {
            alert("Failed to send message. Please try again.")
          console.error("EmailJS Error:", err)
          setSuccess(false);
        });
    },
  });

  return (
    <section id="contact" className="px-6 md:px-12 py-16 bg-[#F9FAFB]  shadow-2xl">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-10">Contact Me</h2>

    <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl p-8 md:p-12">
        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto items-center">
        <div className="hidden md:block">
          <Image
            src="/contact-illustration.png"
            alt="Contact Illustration"
            width={500}
            height={500}
            className="rounded-xl bg-[#F95353] p-4 shadow-lg"
          />
        </div>

        {/* Form */}
        <form
          onSubmit={formik.handleSubmit}
          className="bg-white p-8 rounded-2xl w-full"
        >
          {/* Name */}
          <div className="mb-5">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              id="name"
              type="text"
              {...formik.getFieldProps("name")}
              className={`mt-1 w-full px-4 py-3 border rounded-lg focus:outline-none ${
                formik.touched.name && formik.errors.name
                  ? "border-[#F95353]"
                  : "border-gray-300 focus:ring-2 focus:ring-[#F95353]"
              }`}
            />
            {formik.touched.name && formik.errors.name && (
              <p className="text-[#F95353] text-sm mt-1">{formik.errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div className="mb-5">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              type="email"
              {...formik.getFieldProps("email")}
              className={`mt-1 w-full px-4 py-3 border rounded-lg focus:outline-none ${
                  formik.touched.email && formik.errors.email
                  ? "border-[#F95353]"
                  : "border-gray-300  focus:ring-2 focus:ring-[#F95353]"
              }`}
            />
            {formik.touched.email && formik.errors.email && (
              <p className="text-[#F95353] text-sm mt-1">{formik.errors.email}</p>
            )}
          </div>

          {/* Message */}
          <div className="mb-5">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              {...formik.getFieldProps("message")}
              className={`mt-1 w-full px-4 py-3 border rounded-lg focus:outline-none ${
                formik.touched.message && formik.errors.message
                  ? "border-[#F95353]"
                  : "border-gray-300 focus:ring-2 focus:ring-[#F95353]"
              }`}
            />
            {formik.touched.message && formik.errors.message && (
              <p className="text-[#F95353] text-sm mt-1">{formik.errors.message}</p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-[#F95353] text-white py-3 rounded-lg hover:bg-[#e83030] transition duration-500"
          >
            Send Message
          </button>

          {success && (
            <p className="mt-4 text-green-600 text-center font-medium">
            Thank you for reaching out!
            </p>
          )}
        </form>
      </div>
    </div>
    </section>
  );
}
