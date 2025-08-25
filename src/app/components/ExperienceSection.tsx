export default function ExperienceSection() {
  return (
    <section id="experience" className="space-y-6">
      <h2 className="text-3xl font-bold">Experience</h2>

      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold">
            Full-Stack Developer – ABC Corp
          </h3>
          <p className="text-sm text-gray-500">2021 - Present</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Developed and maintained web apps with React & Node.js</li>
            <li>
              Implemented CI/CD pipelines to reduce deployment time by 50%
            </li>
            <li>Worked closely with designers to improve UI/UX</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold">Freelance Developer</h3>
          <p className="text-sm text-gray-500">2019 - 2021</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Built responsive websites for small businesses</li>
            <li>Integrated payment gateways and CMS solutions</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
