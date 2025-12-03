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

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactPage() {
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

    if (honeypot) return;

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
      setRecaptchaToken(null);
      recaptchaRef.current?.reset();
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
    <div className="min-h-screen bg-gray-50 dark:bg-gray-800">
      <Toaster position="top-center" />

      <section className="bg-gradient-subtle py-8">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Mail size={64} className="mx-auto mb-6 text-primary-600" />
            <h1 className="text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Get In Touch
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
              Have a project in mind? Let&apos;s discuss how I can help you
              achieve your goals.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 w-full">
                <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8">
                  <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                    Send a Message
                  </h2>

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <input
                      type="text"
                      name="website"
                      style={{ display: "none" }}
                      tabIndex={-1}
                    />

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
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
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
                        className="block text-sm font-semibold text-gray-900 dark:text-white mb-2"
                      >
                        Email
                      </label>
                      <input
                        {...register("email")}
                        type="email"
                        id="email"
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
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
                        className="block text-sm font-semibold text-gray-900 dark:text-white mb-2"
                      >
                        Message
                      </label>
                      <textarea
                        {...register("message")}
                        id="message"
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none"
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
                        onChange={setRecaptchaToken}
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
                <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6">
                  <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                    Contact Information
                  </h3>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Mail size={20} className="text-primary-600 mt-1" />
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Email
                        </p>
                        <a
                          href={`mailto:${profile.email}`}
                          className="text-gray-900 dark:text-white hover:text-primary-600 transition-colors"
                        >
                          {profile.email}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Phone size={20} className="text-primary-600 mt-1" />
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Phone
                        </p>
                        <a
                          href={`tel:${profile.phone}`}
                          className="text-gray-900 dark:text-white hover:text-primary-600 transition-colors"
                        >
                          {profile.phone}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <MapPin size={20} className="text-primary-600 mt-1" />
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Location
                        </p>
                        <p className="text-gray-900 dark:text-white">
                          {profile.location}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6">
                  <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                    Connect With Me
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {socialLinks.map((social) => (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        className="flex flex-col items-center gap-2 p-4 border-2 border-gray-200 dark:border-gray-700 rounded-lg hover:border-primary-600 hover:shadow-md transition-all group"
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
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-primary-600 transition-colors">
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

      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              Prefer Direct Contact?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              You can also reach me directly via email or phone
            </p>

            <div className="flex gap-4 justify-center flex-wrap">
              <a
                href={`mailto:${profile.email}`}
                className="px-8 py-3 bg-primary-600 dark:bg-primary-500 text-white rounded-lg hover:bg-primary-700 dark:hover:bg-primary-600 transition-colors font-medium shadow-md inline-flex items-center gap-2"
              >
                <Mail size={20} />
                Send Email
              </a>

              <a
                href={`tel:${profile.phone}`}
                className="px-8 py-3 border-2 border-primary-600 dark:border-primary-500 text-primary-600 dark:text-primary-400 rounded-lg hover:bg-primary-50 dark:hover:bg-gray-800 transition-colors font-medium inline-flex items-center gap-2"
              >
                <Phone size={20} />
                Call me on {profile.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
