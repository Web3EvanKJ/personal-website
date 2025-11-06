export default function ProfilePage() {
  return (
    <section className="flex justify-center items-center">
      <div className="max-w-4xl mx-8 md:mx-auto  py-8">
        <h1 className="text-4xl font-bold mb-6 border-b-1 pb-2 text-sky-600">
          About Me
        </h1>

        <p className="mb-4">
          Hi! I’m Evan, a dedicated and curious full-stack web developer who
          thrives on turning ideas into seamless, interactive, and reliable
          digital experiences. While I love crafting clean and responsive
          interfaces with <span className="font-semibold">Next.js</span> and{" "}
          <span className="font-semibold">Tailwind CSS</span>, I’m equally
          passionate about building solid backend systems that power them.
        </p>

        <p className="mb-4">
          I believe that great web experiences are built on a foundation of
          well-structured architecture, clean code, and strong communication
          between frontend and backend. Whether it’s optimizing API performance,
          securing endpoints, or integrating third-party services, I’m driven by
          the challenge of making systems more robust and reliable.
        </p>

        <p className="mb-4">
          Beyond development, I enjoy exploring innovations in decentralized
          technologies such as smart contracts, DeFi protocols, and
          blockchain-based infrastructure. I contribute to open-source Web3
          projects, share knowledge with the community, and collaborate with
          other developers to bring ambitious decentralized ideas to life.
        </p>
      </div>
    </section>
  );
}
