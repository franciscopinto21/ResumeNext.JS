"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

// Types para as respostas das APIs
interface Profile {
  id: string;
  name: string;
  title: string;
  description: string;
  address: string;
  phone: string;
  linkedin: string;
  github?: string | null;
  email: string;
}

interface WorkExperience {
  id: number;
  title: string;
  company: string;
  location: string;
  start_date: string;
  end_date: string;
  description: string;
}

interface Education {
  id: number;
  degree: string;
  institution: string;
  start_date: string;
  end_date: string;
}

interface Skills {
  id: number;
  category: string;
  skill_name: string;
}

interface Certifications {
  id: number;
  name: string;
  provider: string;
  completion_date: string;
}

interface Languages {
  id: number;
  language: string;
  proficiency: string;
}

const ResumePage = () => {
  const [profile, setPersonalInfo] = useState<Profile | null>(null);
  const [workExperience, setWorkExperience] = useState<WorkExperience[]>([]);
  const [education, setEducation] = useState<Education[]>([]);
  const [skills, setSkills] = useState<Skills[]>([]);
  const [certifications, setCertifications] = useState<Certifications[]>([]);
  const [languages, setLanguages] = useState<Languages[]>([]);
  const [loading, setLoading] = useState<boolean>(true); // Carregamento da página

  // Função para buscar os dados
  const fetchData = async () => {
    try {
      const [profileRes, workRes, educationRes, skillsRes, certRes, langRes] =
        await Promise.all([
          fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/profile`),
          fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/workExperience`),
          fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/education`),
          fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/skills`),
          fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/certifications`),
          fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/languages`),
        ]);

      const profileData = await profileRes.json();
      const workData = await workRes.json();
      const educationData = await educationRes.json();
      const skillsData = await skillsRes.json();
      const certificationsData = await certRes.json();
      const languagesData = await langRes.json();
      console.log("Profile data:", profileData[0]);
      setPersonalInfo(profileData[0]);
      setWorkExperience(workData);
      setEducation(educationData);
      setSkills(skillsData);
      setCertifications(certificationsData);
      setLanguages(languagesData);

      setLoading(false); // Dados carregados, remove o loading
    } catch (error) {
      console.error("Erro ao buscar dados do currículo:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-gray-100">
      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="flex items-center justify-center space-x-2">
            <div className="spinner-border inline-block h-8 w-8 animate-spin rounded-full border-4 border-t-4 border-gray-200"></div>
            <span className="text-xl text-white">
              Fetching data from the database...
            </span>
          </div>
        </div>
      )}

      {!loading && (
        <div className="container mx-auto px-4 py-6">
          {profile && (
            <div className="flex flex-col items-center rounded-lg border border-gray-300 p-6 shadow-sm transition duration-200 ease-in-out hover:shadow-lg md:flex-row">
              {/* Profile Image */}
              <div className="mb-4 w-full md:mb-0 md:mr-6 md:w-1/4">
                <Image
                  src={"/me.jpg"}
                  alt={`${profile.name} Profile`}
                  width={150}
                  height={150}
                  className="rounded-full object-cover"
                />
              </div>

              {/* Text content (name, title, description) */}
              <div className="w-full md:w-3/4">
                <h1 className="text-3xl font-semibold text-gray-900">
                  {profile.name}
                </h1>
                <h2 className="text-xl font-light text-gray-600">
                  {profile.title}
                </h2>
                <p className="mt-2 text-gray-700">{profile.description}</p>
              </div>
            </div>
          )}
          <div className="mt-10">
            <p className="mt-2 text-gray-700">Email: {profile?.email}</p>
            <p className="mt-2 text-gray-700">linkedin: {profile?.linkedin}</p>
          </div>

          {/* Work Experience */}
          <div className="mt-10">
            <h3 className="mb-6 text-2xl font-bold text-gray-800">
              Work Experience
            </h3>
            <div className="space-y-6">
              {workExperience.map((exp) => (
                <div
                  key={exp.id}
                  className="rounded-lg border border-gray-300 p-6 shadow-sm transition duration-200 ease-in-out hover:shadow-lg"
                >
                  <div className="mb-3 flex items-center justify-between">
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900">
                        {exp.title}
                      </h4>
                      <span className="text-sm text-gray-500">
                        {exp.company}
                      </span>
                    </div>
                    <div className="text-sm text-gray-400">
                      {exp.start_date} - {exp.end_date || "Present"}
                    </div>
                  </div>
                  <div className="text-gray-700">
                    <p>
                      <span className="font-semibold">Location:</span>{" "}
                      {exp.location}
                    </p>
                    <p>
                      <span className="font-semibold">Description:</span>{" "}
                      {exp.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education and Certifications */}
          <div className="mt-10">
            {/* Education */}
            <div className="mb-6">
              <h3 className="mb-4 text-xl font-bold text-gray-800">
                Education
              </h3>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {education.map((edu) => (
                  <div
                    key={edu.id}
                    className="rounded-lg border border-gray-300 p-4 shadow-sm transition duration-200 ease-in-out hover:shadow-lg"
                  >
                    <strong>{edu.degree}</strong> from {edu.institution}
                    <br />
                    <span className="text-sm text-gray-500">
                      {edu.start_date} - {edu.end_date}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="mb-4 text-xl font-bold text-gray-800">
                Certifications
              </h3>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {certifications.map((cert) => (
                  <div
                    key={cert.id}
                    className="rounded-lg border border-gray-300 p-4 shadow-sm transition duration-200 ease-in-out hover:shadow-lg"
                  >
                    <strong>{cert.name}</strong> from {cert.provider}
                    <br />
                    <span className="text-sm text-gray-500">
                      {cert.completion_date}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Skills */}
          <div className="mt-10">
            <h3 className="mb-4 text-xl font-bold text-gray-800">Skills</h3>

            <div className="space-y-6">
              {/* Primeira Tabela */}
              <div>
                <table className="min-w-full table-auto border-collapse">
                  <thead>
                    <tr className="bg-black">
                      {Array.from(
                        new Set(
                          skills
                            .slice(0, Math.ceil(skills.length / 3))
                            .map((skill) => skill.category),
                        ),
                      ).map((category, index) => (
                        <th
                          key={index}
                          className="border-b px-4 py-2 text-left font-semibold text-white"
                        >
                          {category}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      {Array.from(
                        new Set(
                          skills
                            .slice(0, Math.ceil(skills.length / 3))
                            .map((skill) => skill.category),
                        ),
                      ).map((category, index) => (
                        <td
                          key={index}
                          className="border-b px-4 py-2 text-gray-700"
                        >
                          {skills
                            .filter((skill) => skill.category === category)
                            .map((filteredSkill) => (
                              <div key={filteredSkill.id}>
                                {filteredSkill.skill_name}
                              </div>
                            ))}
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Segunda Tabela */}
              <div>
                <table className="min-w-full table-auto border-collapse">
                  <thead>
                    <tr className="bg-black">
                      {Array.from(
                        new Set(
                          skills
                            .slice(
                              Math.ceil(skills.length / 3),
                              Math.ceil(skills.length / 3) * 2,
                            )
                            .map((skill) => skill.category),
                        ),
                      ).map((category, index) => (
                        <th
                          key={index}
                          className="border-b px-4 py-2 text-left font-semibold text-white"
                        >
                          {category}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      {Array.from(
                        new Set(
                          skills
                            .slice(
                              Math.ceil(skills.length / 3),
                              Math.ceil(skills.length / 3) * 2,
                            )
                            .map((skill) => skill.category),
                        ),
                      ).map((category, index) => (
                        <td
                          key={index}
                          className="border-b px-4 py-2 text-gray-700"
                        >
                          {skills
                            .filter((skill) => skill.category === category)
                            .map((filteredSkill) => (
                              <div key={filteredSkill.id}>
                                {filteredSkill.skill_name}
                              </div>
                            ))}
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Terceira Tabela */}
              <div>
                <table className="min-w-full table-auto border-collapse">
                  <thead>
                    <tr className="bg-black">
                      {Array.from(
                        new Set(
                          skills
                            .slice(Math.ceil(skills.length / 3) * 2)
                            .map((skill) => skill.category),
                        ),
                      ).map((category, index) => (
                        <th
                          key={index}
                          className="border-b px-4 py-2 text-left font-semibold text-white"
                        >
                          {category}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      {Array.from(
                        new Set(
                          skills
                            .slice(Math.ceil(skills.length / 3) * 2)
                            .map((skill) => skill.category),
                        ),
                      ).map((category, index) => (
                        <td
                          key={index}
                          className="border-b px-4 py-2 text-gray-700"
                        >
                          {skills
                            .filter((skill) => skill.category === category)
                            .map((filteredSkill) => (
                              <div key={filteredSkill.id}>
                                {filteredSkill.skill_name}
                              </div>
                            ))}
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Languages */}
          <div className="mt-10">
            <h3 className="mb-4 text-xl font-bold text-gray-800">Languages</h3>
            <ul className="list-disc space-y-2 pl-5">
              {languages.map((lang) => (
                <li key={lang.id} className="text-gray-700">
                  {lang.language}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResumePage;
