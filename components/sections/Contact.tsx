"use client";
import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { handleSubmit } from "@/utils/handleSubmit";

export const Contact = () => {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  // handle form submission
  const handleFormSubmit = async (event: React.SubmitEvent<HTMLFormElement>) => {
    await handleSubmit(event, setStatus);
  };

  return (
    <section id="contact" className="bg-background py-24 px-6">
      {/* grid container */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* left column content*/}
        <div className="flex flex-col gap-6 lg:pr-12">
          <h2 className="font-sans text-4xl lg:text-5xl font-extrabold text-primary">
            Let's get in touch!
          </h2>
          <p className="font-sans text-lg text-primary/80 leading-relaxed">
            Whether you are looking for a developer for your next project,
            discussing upcoming Master's research, or just want to say hi, feel
            free to reach out. I am always open to new opportunities and
            collaborations.
          </p>
          {/* social links container */}
          <div className="flex flex-col gap-4 mt-4">
            {/* social links */}
            <div className="flex flex-row gap-4">
              <IoMail
                size={24}
                className="text-primary/70 transition-colors hover:text-secondary cursor-pointer"
              />
              <a
                href="mailto:ciliandimarian@gmail.com"
                className="font-mono text-accent font-medium hover:text-blue-800 transition-colors flex items-center gap-3"
              >
                ciliandimarian@gmail.com
              </a>
            </div>

            <div className="flex flex-row gap-4">
              <FaLinkedin
                size={24}
                className="text-primary/70 transition-colors hover:text-secondary cursor-pointer"
              />
              <a
                href="https://www.linkedin.com/in/andi-marian-cilichidreanu/"
                target="_blank"
                className="font-mono text-accent font-medium hover:text-blue-800 transition-colors flex items-center gap-3"
              >
                linkedin.com/in/andi-marian-cilichidreanu
              </a>
            </div>

            <div className="flex flex-row gap-4">
              <FaGithub
                size={24}
                className="text-primary/70 transition-colors hover:text-secondary cursor-pointer"
              />
              <a
                href="https://github.com/AndiTaTaEe"
                target="_blank"
                className="font-mono text-accent font-medium hover:text-blue-800 transition-colors flex items-center gap-3"
              >
                github.com/AndiTaTaEe
              </a>
            </div>
          </div>
        </div>
        {/* right column contact form */}
        <div className="bg-primary rounded-xl shadow-2xl overflow-hidden flex flex-col">
          {/* top row form header */}
          <div className="bg-[#0F1D36] py-3 flex items-center justify-center relative">
            {/* three colored circles */}
            <div className="flex gap-2 absolute left-4">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <p className="font-mono text-s text-surface/50 text-center w-full">
              Connect with me
            </p>
          </div>
          {/* if the form is successfully submitted, show a success message */}
          {status === "success" ? (
            <div className="p-8 flex flex-col gap-4 items-center justify-center h-full text-center py-20">
              <p className="font-mono text-secondary text-lg font-bold">
                {" "}
                &gt; payload_delivered: true
              </p>
              <p className="font-sans text-surface/80">
                Thank you for reaching out. I will process your message and
                answer you as soon as possible. In the meantime, feel free to
                check out my social media profiles or explore my projects on
                GitHub.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-4 font-mono text-xs text-surface/50 hover:text-surface transition-colors"
              >
                &gt; send_another_payload
              </button>
            </div>
          ) : (
            /* otherwise, show the form */
            /* form inputs */
            <form onSubmit={handleFormSubmit} className="p-8 flex flex-col gap-6">
              {/* honeypot input for spam prevention */}
              <input type="text" name="_honey" style={{ display: "none" }} />
              {/* name input */}
              <div className="flex flex-col gap-1">
                <p className="font-mono text-secondary text-sm font-bold">
                  &gt; enter_name
                </p>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  autoComplete="name"
                  required
                  className="bg-transparent border-b border-surface/30 text-surface font-sans focus:border-accent outline-none py-2 transition-colors w-full"
                />
              </div>
              <div className="flex flex-col gap-1">
                {/* email input */}
                <p className="font-mono text-secondary text-sm font-bold">
                  &gt; enter_email
                </p>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  autoComplete="email"
                  required
                  className="bg-transparent border-b border-surface/30 text-surface font-sans focus:border-accent outline-none py-2 transition-colors w-full"
                />
              </div>
              {/* message input */}
              <div className="flex flex-col gap-1">
                <p className="font-mono text-secondary text-sm font-bold">
                  &gt; execute_message
                </p>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Your Message"
                  required
                  className="bg-transparent border-b border-surface/30 text-surface font-sans focus:border-accent outline-none py-2 transition-colors w-full resize-none"
                />
              </div>
              {/* error message */}
              {status === "error" && (
                <p className="font-mono text-red-500 text-xs">
                  Error: Failed to send message. Please try again later.
                </p>
              )}
              {/* send button */}
              <button
                type="submit"
                disabled={status === "sending"}
                className="mt-4 w-full bg-secondary text-primary font-mono font-bold py-3 rounded hover:bg-yellow-500 transition-colors"
              >
                {status === "sending"
                  ? "transmitting_payload..."
                  : "./send_payload"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
