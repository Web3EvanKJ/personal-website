"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRef } from "react";
import ProfilePage from "@/components/ProfilePage";
import SkillsPage from "@/components/SkillPage";
import AchivementPage from "@/components/AchivementPage";
import ContactForm from "@/components/ContactForm";

export default function HomePage() {
  const MotionImage = motion.create(Image);
  const constraintsRef = useRef(null);

  return (
    <>
      {/* Home Section */}
      <section
        id="home"
        className="min-h-[80vh] flex flex-col justify-center items-center text-center px-4"
      >
        <div className="flex flex-col-reverse md:flex-row justify-center items-center md:justify-around gap-8 md:gap-16">
          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.4,
              scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }}
            className="flex flex-col max-w-lg"
          >
            <h1 className="text-3xl md:text-5xl font-bold">I&apos;m Evan</h1>
            <div className="mt-4">
              <p className="text-lg md:text-xl">A Software Engineer</p>
              <p className="mt-2 text-base md:text-lg">
                &quot;Building scalable and high-performance web solutions for
                your business needs.&quot;
              </p>
            </div>
            <button
              onClick={() =>
                document
                  .getElementById("profile")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="mt-6 bg-green-600 text-white rounded-lg px-6 py-3 hover:bg-green-700 transition-colors duration-300"
            >
              Check My Profile
            </button>
          </motion.div>

          {/* Image Section */}
          <div className="flex justify-center">
            <motion.div ref={constraintsRef}>
              <motion.div drag dragConstraints={constraintsRef} />
            </motion.div>

            <MotionImage
              src="/crayon-sinchan.jpg"
              alt="Crayon Sinchan"
              width={350}
              height={350}
              className="rounded-full object-cover w-48 h-48 md:w-80 md:h-80"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{
                duration: 0.4,
                scale: { type: "spring", bounce: 0.5 },
              }}
            />
          </div>
        </div>
      </section>

      {/* Profile Section */}
      <section id="profile" className=" pt-15">
        <ProfilePage />
      </section>

      {/* Skills Section */}
      <section id="skills" className=" pt-15">
        <SkillsPage />
      </section>

      {/* Achievement Section */}
      <section id="achievement" className=" pt-15">
        <AchivementPage />
      </section>

      {/* Contact Section */}
      <section id="contact" className=" pt-15">
        <div className="container mx-auto max-w-4xl px-6 py-12">
          <h1 className="text-4xl font-bold mb-6">Contact Me</h1>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
