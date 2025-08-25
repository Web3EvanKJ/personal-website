"use client";
import { useRouter } from "next/navigation";

export default function ContactPage() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // prevent page reload
    router.push("/thank-you"); // redirect to your desired URL
  };
  return (
    <div className="container mx-auto max-w-4xl px-6 py-12">
      <h1 className="text-4xl font-bold mb-6">Contact Me</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-6 space-y-4"
      >
        <div>
          <label className="block font-semibold">Name</label>
          <input
            type="text"
            className="border rounded-lg w-full p-2"
            placeholder="Your Name"
          />
        </div>

        <div>
          <label className="block font-semibold">Email</label>
          <input
            type="email"
            className="border rounded-lg w-full p-2"
            placeholder="Your Email"
          />
        </div>

        <div>
          <label className="block font-semibold">Message</label>
          <textarea
            className="border rounded-lg w-full p-2"
            placeholder="Your Message"
            rows={4}
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-700"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
