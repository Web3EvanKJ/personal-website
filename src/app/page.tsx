import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <section className="text-center px-4 py-8">
      <div className="flex flex-col-reverse md:flex-row justify-center items-center md:justify-around gap-8 md:gap-16">
        {/* Text Section */}
        <div className="flex flex-col max-w-lg">
          <h1 className="text-3xl md:text-5xl font-bold">I&apos;m Evan</h1>
          <div className="mt-4">
            <p className="text-lg md:text-xl">A Software Engineer</p>
            <p className="mt-2 text-base md:text-lg">
              &quot;Building scalable and high-performance web solutions for
              your business needs.&quot;
            </p>
          </div>
          <Link
            href="/profile"
            className="mt-6 bg-blue-600 text-white rounded-lg px-6 py-3 hover:bg-blue-700 transition-colors duration-300"
          >
            Check My Profile
          </Link>
        </div>

        {/* Image Section */}
        <div className="flex justify-center">
          <Image
            src="/crayon-sinchan.jpg"
            alt="Crayon Sinchan"
            width={350}
            height={350}
            className="rounded-full object-cover transition-transform duration-500 hover:scale-105 w-48 h-48 md:w-80 md:h-80"
          />
        </div>
      </div>
    </section>
  );
}
