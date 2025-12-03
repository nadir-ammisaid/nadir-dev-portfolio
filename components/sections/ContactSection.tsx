"use client";

import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import ReCAPTCHA from "react-google-recaptcha";
import DOMPurify from "dompurify";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";
import Image from "next/image";
import { profile } from "../../data/profile";

console.log("reCAPTCHA Key:", process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY);

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (
    data: ContactFormData,
    e?: React.BaseSyntheticEvent
  ) => {
    if (!recaptchaToken) {
      toast.error("Please complete the reCAPTCHA");
      return;
    }

    const formElement = e?.target as HTMLFormElement | undefined;
    const honeypot = formElement?.website?.value;

    if (honeypot) {
      console.log("Bot detected");
      return;
    }

    const sanitizedData = {
      name: DOMPurify.sanitize(data.name),
      email: DOMPurify.sanitize(data.email),
      message: DOMPurify.sanitize(data.message),
    };

    setIsSubmitting(true);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          ...sanitizedData,
          "g-recaptcha-response": recaptchaToken,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      toast.success("Message sent successfully!");
      reset();
      recaptchaRef.current?.reset();
      setRecaptchaToken(null);
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      url: profile.social.linkedin,
      logo: "/linkedinLogo3.png",
    },
    { name: "GitHub", url: profile.social.github, logo: "/githubLogo2.png" },
    { name: "Malt", url: profile.social.malt, logo: "/maltLogo3.png" },
    { name: "Fiverr", url: profile.social.fiverr, logo: "/fiverrLogo.png" },
  ];

  return (
    <section className="py-20 bg-white dark:bg-slate-900 transition-colors">
      <Toaster position="top-center" />

      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Mail size={48} className="mx-auto mb-4 text-primary-600" />
            <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Get In Touch
            </h2>
            <p className="text-gray-600 dark:text-slate-300 text-lg max-w-2xl mx-auto">
              Have a project in mind? Let&apos;s discuss how I can help you
              achieve your goals.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 w-full">
              <div className="bg-gray-50 dark:bg-slate-800 rounded-2xl shadow-lg p-8 transition-colors">
                <h3 className="text-2xl font-bold mb-6">Send a Message</h3>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-gray-900 dark:text-white mb-2"
                    >
                      Name
                    </label>
                    <input
                      {...register("name")}
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600
           bg-white dark:bg-slate-700 text-gray-900 dark:text-white
           rounded-lg focus:outline-none focus:ring-2 
           focus:ring-primary-500 focus:border-transparent transition-colors"
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-gray-900 mb-2"
                    >
                      Email
                    </label>
                    <input
                      {...register("email")}
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-gray-900 mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      {...register("message")}
                      id="message"
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                      placeholder="Tell me about your project..."
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  <div className="flex justify-center">
                    <ReCAPTCHA
                      ref={recaptchaRef}
                      sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                      onChange={(token) => setRecaptchaToken(token)}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting || !recaptchaToken}
                    className="w-full px-8 py-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 
             transition-colors font-semibold shadow-md flex items-center justify-center gap-2
             cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={20} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            <div className="space-y-6 w-full">
              <div className="bg-gray-50 dark:bg-slate-800 rounded-2xl shadow-lg p-6 transition-colors">
                <h3 className="text-xl font-bold mb-4">Contact Information</h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail
                      size={20}
                      className="text-primary-600 mt-1 shrink-0"
                    />
                    <div>
                      <p className="text-sm text-gray-500 dark:text-slate-400">
                        Email
                      </p>
                      <a
                        href={`mailto:${profile.email}`}
                        className="text-gray-900 dark:text-slate-100 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium"
                      >
                        {profile.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone
                      size={20}
                      className="text-primary-600 mt-1 shrink-0"
                    />
                    <div>
                      <p className="text-sm text-gray-500 dark:text-slate-400">
                        Phone
                      </p>
                      <a
                        href={`tel:${profile.phone}`}
                        className="text-gray-900 dark:text-slate-100 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium"
                      >
                        {profile.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin
                      size={20}
                      className="text-primary-600 mt-1 shrink-0"
                    />
                    <div>
                      <p className="text-sm text-gray-500 dark:text-slate-400">
                        Location
                      </p>
                      <p className="text-gray-900 dark:text-slate-100 font-medium">
                        {profile.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6 transition-colors">
                <h3 className="text-xl font-bold mb-4">Connect With Me</h3>
                <div className="grid grid-cols-2 gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center gap-2 p-4 border-2 border-gray-200 
           dark:border-slate-700 rounded-lg bg-white dark:bg-slate-700 
           hover:border-primary-600 hover:shadow-md transition-all group"
                    >
                      <div className="w-10 h-10 flex items-center justify-center">
                        <Image
                          src={social.logo}
                          alt={social.name}
                          width={40}
                          height={40}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <span className="text-sm font-medium text-gray-700 dark:text-slate-200 group-hover:text-primary-600 transition-colors">
                        {social.name}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
