export default function ExperienceSection() {
  return (
    <section id="experience" className="space-y-6">
      <h2 className="text-3xl font-bold">Experience</h2>

      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold">
            Smart Contract Security Researcher
          </h3>
          <p className="text-sm text-gray-500">May 2024 - Present</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>
              Found 8 high-medium security vulnerabilities in smart contract
            </li>
            <li>Understanding best approach in writing smart contract</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold">CTO Jagantara</h3>
          <p className="text-sm text-gray-500">July 2025 - Present</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Designing smart contract flow for Jagantara</li>
            <li>Writing smart contract with best security approach</li>
            <li>Applied synthetix staking algorithm</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Developer Advocate ETHJKT</h3>
          <p className="text-sm text-gray-500">July 2025 - Present</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>
              Write smart contract security related documentation for ETHJKT
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
