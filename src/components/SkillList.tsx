import Image from "next/image";

const SkillList = ({ skills }: { skills: { name: string; img: string }[] }) => {
  return (
    <ul className="grid grid-cols-2 gap-4">
      {skills.map((skill) => (
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
  );
};
export default SkillList;
