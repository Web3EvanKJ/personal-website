import Image from "next/image";
import Link from "next/link";

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="space-y-6">
      <h2 className="text-4xl font-extrabold mb-6 border-b-1 pb-2 text-sky-600">
        Portfolio
      </h2>

      <div className="bg-white shadow-lg rounded-lg p-6 space-y-4">
        <h3 className="text-xl font-bold">Jagantara</h3>
        <p className="text-sm text-gray-500">Technologies: Solidity, NextJS</p>

        <p>
          Jagantara is a decentralized insurance platform that gives people a
          fair and transparent way to protect themselves from unexpected losses.
          Instead of relying on a traditional insurance company, users pay a
          regular premium directly into a smart contract.
        </p>

        {/* Button linking to project */}
        <Link
          href="https://jagantara.finance/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-md bg-sky-600 px-4 py-2 text-white text-sm font-medium shadow hover:bg-sky-700 transition"
        >
          View Project
        </Link>
        <Image
          src="/jagantara.png"
          alt="Jagantara"
          width={500}
          height={300}
          className="min-w-full"
        />
      </div>
      {/* Example project */}
      <div className="bg-white shadow-lg rounded-lg p-6 space-y-4">
        <h3 className="text-xl font-bold">Banking Platform Nave Bank</h3>
        <p className="text-sm text-gray-500">Technologies: NextJS, Tailwind</p>

        <p>
          Develop a website with smooth UX and fast performance company profile.
          Nave Bank wanted a scalable, mobile-friendly banking platform to boost
          sales and streamline inventory.
        </p>

        {/* Button linking to project */}
        <Link
          href="https://company-profile-nave-bank.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-md bg-sky-600 px-4 py-2 text-white text-sm font-medium shadow hover:bg-sky-700 transition"
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
      {/* Example project */}
      <div className="bg-white shadow-lg rounded-lg p-6 space-y-4">
        <h3 className="text-xl font-bold">
          E-commerce Multi Warehouse Grocify
        </h3>
        <p className="text-sm text-gray-500">
          Technologies: NextJS, Tailwind, Express, PostgreSQL, Prisma
        </p>

        <p>
          Online Grocery Web App where users shop from the nearest store branch
          based on their real-time location. The system displays products and
          stock from the closest store within a service radius and notifies
          users if they are outside the coverage area. Users must create an
          account to make purchases, while super admins manage store admins and
          store admins handle inventory and order processing. Orders are routed
          to the appropriate branch and follow a full order-status flow. The app
          also includes customizable discounts such as product-based deals,
          vouchers, referral rewards, and free-shipping benefits.
        </p>

        {/* Button linking to project */}
        <Link
          href="https://grocery-app-2-frontend.vercel.app/admin/dashboard"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-md bg-sky-600 px-4 py-2 text-white text-sm font-medium shadow hover:bg-sky-700 transition"
        >
          View Project
        </Link>
        <Image
          src="/grocify.png"
          alt="Ecommerce Multi Warehouse Grocify"
          width={500}
          height={300}
          className="min-w-full"
        />
      </div>
    </section>
  );
}
