import Image from "next/image";

export default function SkillsPage() {
  const frontendSkills = [
    { name: "JavaScript", img: "/javascript.jpg" },
    { name: "TypeScript", img: "/typescript.jpg" },
    { name: "Next.js", img: "/nextjs.jpg" },
    { name: "Tailwind CSS", img: "/tailwind.jpg" },
  ];

  const backendSkills = [
    {
      name: "Node.js",
      img: "/nodejs.png",
    },
    { name: "Express.js", img: "/express.png" },
    { name: "PostgreSQL", img: "/postgresql.png" },
    { name: "MongoDB", img: "/mongodb.png" },
  ];

  const toolSkills = [
    { name: "Git", img: "/git.png" },
    { name: "Docker", img: "/docker.png" },
  ];

  return (
    <section className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4 border-b-1 py-3">Skills</h1>
      <h2 className="text-2xl mb-4">Front End</h2>
      <ul className="grid grid-cols-2 gap-4">
        {frontendSkills.map((skill) => (
          <li
            key={skill.name}
            className="bg-white shadow p-4 rounded-lg text-center flex flex-col items-center"
          >
            <Image
              src={skill.img}
              alt={skill.name}
              width={64}
              height={64}
              className="mb-2"
            />
            <span>{skill.name}</span>
          </li>
        ))}
      </ul>
      <h2 className="text-2xl mb-4">Back End</h2>
      <ul className="grid grid-cols-2 gap-4">
        {backendSkills.map((skill) => (
          <li
            key={skill.name}
            className="bg-white shadow p-4 rounded-lg text-center flex flex-col items-center"
          >
            <Image
              src={skill.img}
              alt={skill.name}
              width={64}
              height={64}
              className="mb-2"
            />
            <span>{skill.name}</span>
          </li>
        ))}
      </ul>
      <h2 className="text-2xl mb-4">Tools</h2>
      <ul className="grid grid-cols-2 gap-4">
        {toolSkills.map((skill) => (
          <li
            key={skill.name}
            className="bg-white shadow p-4 rounded-lg text-center flex flex-col items-center"
          >
            <Image
              src={skill.img}
              alt={skill.name}
              width={64}
              height={64}
              className="mb-2"
            />
            <span>{skill.name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
