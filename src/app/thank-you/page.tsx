import Link from "next/link";

export default function ThankYouPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
      <h1 className="text-4xl font-bold mb-4">Thank You!</h1>
      <p className="text-lg text-gray-600">Thank you for contacting me!</p>
      <Link href="/">
        <button className="mt-4 bg-sky-500 hover:bg-sky-600 text-white py-2 px-4 rounded-md">
          Back To Home
        </button>
      </Link>
    </div>
  );
}
