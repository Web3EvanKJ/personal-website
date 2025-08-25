export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-6 mt-8 w-full relative bottom-0">
      <div className="max-w-7xl mx-auto px-5 flex flex-col md:flex-row items-center justify-between">
        {/* Left side */}
        <p className="text-sm">
          &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
        </p>

        {/* Right side */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            LinkedIn
          </a>
          <a href="mailto:youremail@example.com" className="hover:text-white">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
