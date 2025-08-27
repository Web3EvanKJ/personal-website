import Image from "next/image";
import Link from "next/link";

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="space-y-6">
      <h2 className="text-4xl font-bold mb-6 border-b-1 pb-2 text-green-600">
        Portfolio
      </h2>

      {/* Example project */}
      <div className="bg-white shadow-lg rounded-lg p-6 space-y-4">
        <h3 className="text-xl font-semibold">Banking Platform Nave Bank</h3>
        <p className="text-sm text-gray-500">Technologies: NextJS, Tailwind</p>

        <div>
          <h4 className="font-bold">Situation:</h4>
          <p>
            Nave Bank wanted a scalable, mobile-friendly banking platform to
            boost sales and streamline inventory.
          </p>
        </div>

        <div>
          <h4 className="font-bold">Task:</h4>
          <p>
            Develop a full-stack app with smooth UX and fast performance,
            integrating payment and inventory systems.
          </p>
        </div>

        <div>
          <h4 className="font-bold">Action:</h4>
          <p>Built responsive UI with Next, REST APIs with PostgreSQL</p>
        </div>

        <div>
          <h4 className="font-bold">Result:</h4>
          <p>
            Achieved a great user feedback, and reduced inventory management
            work.
          </p>
        </div>

        {/* Button linking to project */}
        <Link
          href="https://company-profile-nave-bank.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-md bg-green-600 px-4 py-2 text-white text-sm font-medium shadow hover:bg-green-700 transition"
        >
          View Project
        </Link>
        <Image
          src="/nave-bank-project.png"
          alt="Banking Platform Nave"
          width={500}
          height={300}
          className="min-w-full"
        />
      </div>
    </section>
  );
}
