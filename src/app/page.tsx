// app/page.tsx

import Image from "next/image";
import Link from "next/link";
import biggreen from "../../public/biggreen.png";
import farm2u from "../../public/farm2u.png";
import alpinclub from "../../public/alpinclub.png";
import arede from "../../public/arede.png";
import profileImage from "../../public/me.png";

const HomePage = () => {
  const portfolioItems = [
    {
      name: "BIG GREEN COFFEE & CO",
      description: "Import Export Business",
      link: "https://biggreentrading.com/",
      image: biggreen,
      tech: "Laravel, MySQL",
      size: 100,
    },
    {
      name: "Farm2u",
      description: "NATURAL FOOD",
      link: "https://farm2u.com.br/",
      image: farm2u,
      tech: "Laravel, MySQL",
      size: 100,
    },
    {
      name: "AlpinClub Trading",
      description: "Export Business",
      link: "https://alpinclubtrading.com.br/",
      image: alpinclub,
      tech: "Laravel, MySQL",
      size: 100,
    },
    {
      name: "A Rede de Imóveis",
      description: "Real Estate Business",
      link: "https://arededeimoveis.com.br/",
      image: arede,
      tech: "Laravel, MySQL",
      size: 200,
    },
  ];

  const projects = [
    {
      name: "Laravel Project",
      description: "Developed a complete application using Laravel framework.",
      link: "/projects",
    },
    {
      name: "Symfony Project",
      description: "Created a robust API with Symfony framework.",
      link: "/projects",
    },
    {
      name: "Node-React Project",
      description: "Built a full-stack application using Node.js and React.",
      link: "/projects",
    },
  ];

  return (
    <div className="container mx-auto space-y-16 p-6">
      {/* Profile Header */}
      <section className="border-b pb-10 text-center">
        <Image
          src={profileImage}
          alt="Profile Image"
          width={150}
          height={150}
          className="mx-auto mb-5 rounded-full"
        />
        <h1 className="mb-2 text-4xl font-bold">Welcome to My Page</h1>
        <h4 className="text-xl font-semibold">Francisco Pinto</h4>
        <p className="text-lg font-medium text-gray-600">
          Full Stack Developer | PHP | Laravel | JavaScript | Typescript |
          Next.js | React | Vue.js | Flutter
        </p>
        <p className="text-md mt-2 text-gray-500">
          12+ years of experience in software development, passionate about
          creating scalable web applications.
        </p>
      </section>

      {/* Introduction Section */}
      <section className="container border-b pb-10">
        <h2 className="mb-5 text-3xl font-bold">Introduction</h2>
        <p className="mb-4 text-lg text-gray-700">
          Welcome to my personal website, an online portfolio designed to
          showcase my technical skills, experience, and projects as a
          programmer. This site was built using <strong>Next.js</strong> with{" "}
          <strong>TypeScript</strong> and incorporates a variety of modern web
          technologies, including React, MySQL, Prisma, and Tailwind CSS. Here,
          visitors can explore my expertise through real examples of my work,
          gaining a comprehensive look at my professional background.
        </p>
        <p className="mb-4 text-lg text-gray-700">
          This project demonstrates my capability to create a full-stack web
          application by utilizing key Next.js features, such as Server-Side
          Rendering (SSR) and Static Site Generation (SSG), which enhance
          performance and SEO. By implementing a scalable, optimized, and
          user-friendly structure, I have developed a dynamic platform that not
          only reflects my skills but also emphasizes my focus on delivering
          efficient and impactful solutions.
        </p>

        <div className="mt-5 flex space-x-4">
          <Link
            href="/resume"
            className="rounded-md bg-blue-500 px-4 py-2 text-white"
          >
            Resume
          </Link>
          <Link
            href="/projects"
            className="rounded-md bg-blue-500 px-4 py-2 text-white"
          >
            Projects
          </Link>
          <Link
            href="/nextjs-demos"
            className="rounded-md bg-blue-500 px-4 py-2 text-white"
          >
            Next.js Demos
          </Link>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="container border-b pb-10">
        <h2 className="mb-5 text-3xl font-bold">Portfolio</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map((item) => (
            <div
              key={item.name}
              className="flex flex-col items-center rounded-lg bg-white p-5 shadow-lg"
            >
              <Image
                src={item.image}
                className="mb-3 rounded-lg"
                alt={item.name}
                width={item.size}
                height={item.size}
                style={{ objectFit: "contain" }}
              />
              <h5 className="text-2xl font-semibold">{item.name}</h5>
              <p className="mb-4 text-gray-600">{item.description}</p>
              <div className="flex space-x-2">
                {item.tech.split(",").map((tech, index) => (
                  <span
                    key={index}
                    className="rounded-full bg-red-500 px-3 py-1 text-sm text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <Link
                href={item.link}
                className="mt-5 rounded-md bg-blue-500 px-4 py-2 text-white"
                target="_blank"
              >
                Visit Website
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="container pb-10">
        <h2 className="mb-5 text-3xl font-bold">Personal Projects</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.name}
              className="rounded-lg bg-white p-5 shadow-lg"
            >
              <h5 className="mb-2 text-2xl font-semibold">{project.name}</h5>
              <p className="mb-4 text-gray-600">{project.description}</p>
              <Link
                href={project.link}
                className="rounded-md bg-blue-500 px-4 py-2 text-white"
              >
                View Project
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
