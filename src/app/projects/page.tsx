"use client";
import { useEffect, useState } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/github.css";

type Project = {
  name: string;
  description: string;
};

const Projects = () => {
  const projects: Project[] = [
    { name: "Laravel", description: "Projeto com framework Laravel." },
    { name: "Symfony", description: "Projeto com framework Symfony." },
    { name: "Node-React", description: "Projeto com Node.js e React." },
  ];

  const codeSnippets = {
    layout: `
      import type { Metadata } from "next";
      import localFont from "next/font/local";
      import "../../styles/globals.css";
      import Header from "../components/Header";
      import Footer from "../components/Footer";

      const geistSans = localFont({
        src: "./fonts/GeistVF.woff",
        variable: "--font-geist-sans",
        weight: "100 900",
      });
      const geistMono = localFont({
        src: "./fonts/GeistMonoVF.woff",
        variable: "--font-geist-mono",
        weight: "100 900",
      });

      export const metadata: Metadata = {
        title: "Francisco Pinto",
        description: "Next JS Project",
        icons: {
          icon: "/favicon.png",
        },
      };

      export default function RootLayout({
        children,
      }: Readonly<{
        children: React.ReactNode;
      }>) {
        return (
          <html lang="en">
            <body
              className={{geistSans.variable} {geistMono.variable} antialiased}
            >
              <Header></Header>
              {children}
              <Footer></Footer>
            </body>
          </html>
        );
      }`,
    Header: `
      "use client";

      import React, { useState } from "react";
      import Image from "next/image";

      const Header = () => {
        const [isMenuOpen, setIsMenuOpen] = useState(false);

        const toggleMenu = () => {
          setIsMenuOpen(!isMenuOpen);
        };

        return (
          <header className="bg-gray-900 text-white shadow-md">
            <div className="mx-auto flex max-w-screen-xl items-center justify-between px-6 py-4">
              {/* Logo */}
              <div className="flex items-center text-2xl font-semibold">
                {/* Logo ao lado do nome */}
                <Image
                  src={"/logo.png"}
                  alt={"logo"}
                  width={40}
                  height={40}
                  className="mr-3 h-10 w-10"
                />

                {/* Nome com link */}
                <a
                  href="/"
                  className="text-white transition-colors duration-200 hover:text-gray-300"
                >
                  Francisco Pinto
                </a>
              </div>

              {/* Menu de navegação - Desktop */}
              <nav className="hidden space-x-8 md:flex">
                <a
                  href="/"
                  className="transition-colors duration-200 hover:text-gray-300"
                >
                  Home
                </a>
                <a
                  href="/resume"
                  className="transition-colors duration-200 hover:text-gray-300"
                >
                  Resume
                </a>
                <a
                  href="/projects"
                  className="transition-colors duration-200 hover:text-gray-300"
                >
                  Projects
                </a>
                <a
                  href="/demos"
                  className="transition-colors duration-200 hover:text-gray-300"
                >
                  Demos
                </a>
              </nav>

              {/* Menu Hamburguer (para mobile) */}
              <div className="flex items-center md:hidden">
                <button onClick={toggleMenu} className="text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-8 w-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Menu Responsivo - Mobile */}
            {isMenuOpen && (
              <div className="space-y-4 bg-gray-800 px-6 py-4 text-white md:hidden">
                <a
                  href="/"
                  className="block transition-colors duration-200 hover:text-gray-300"
                >
                  Home
                </a>
                <a
                  href="/resume"
                  className="block transition-colors duration-200 hover:text-gray-300"
                >
                  Resume
                </a>
                <a
                  href="/projects"
                  className="block transition-colors duration-200 hover:text-gray-300"
                >
                  Projects
                </a>
                <a
                  href="/demos"
                  className="block transition-colors duration-200 hover:text-gray-300"
                >
                  Demos
                </a>
              </div>
            )}
          </header>
        );
      };

      export default Header;

    `,
    route: `
      import { NextResponse } from 'next/server';
      import prisma from '../../../../lib/prisma';

      export async function GET() {
          try {
            const skills = await prisma.skills.findMany();
            return NextResponse.json(skills);
          } catch (error) {
            console.error("Erro ao buscar skills:", error);
            return NextResponse.json({ error: "Erro ao buscar skills" }, { status: 500 });
          }
        }
    `,
  };

  const [activeTab, setActiveTab] = useState<"layout" | "Header" | "route">(
    "layout",
  );

  useEffect(() => {
    hljs.highlightAll();
  }, [activeTab]);

  return (
    <div className="flex min-h-screen flex-col bg-gray-100">
      <main className="container mx-auto my-10 px-5">
        {/* Project Description Header */}
        <section className="mb-8 text-center">
          <h2 className="text-3xl font-bold">
            Project using Next.js, TypeScript, MySQL, Tailwind, and Prisma
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            A full-stack web application that leverages Next.js with TypeScript
            for the frontend, MySQL for data management, and Tailwind for
            styling. The backend is connected to the database through Prisma,
            providing efficient data queries.
          </p>
        </section>

        {/* Project Overview */}
        <section className="mb-8">
          <h4 className="mb-4 text-xl font-semibold">Project Overview</h4>
          <p className="text-gray-700">
            This project was developed to create a modern web application with
            Next.js as the framework, using TypeScript for static type checking.
            The frontend leverages Tailwind for responsive and customizable UI
            styling, while the backend uses Prisma to interact with a MySQL
            database, ensuring efficient querying.
          </p>
          <p className="mt-4 text-gray-700">
            The project follows the folder structure typical for Next.js, with a
            focus on clean and modular components. It includes a homepage, API
            routes for interacting with the database, and custom components for
            dynamic content rendering.
          </p>
        </section>

        <hr className="my-8" />

        {/* Technologies Used */}
        <section className="mb-8">
          <h4 className="mb-4 text-xl font-semibold">Technologies Used</h4>
          <ul className="list-disc pl-5 text-gray-700">
            <li>
              <strong>Next.js:</strong> A React framework for building
              full-stack web applications with server-side rendering and static
              site generation.
            </li>
            <li>
              <strong>TypeScript:</strong> A superset of JavaScript that adds
              static typing to improve developer experience and code quality.
            </li>
            <li>
              <strong>MySQL:</strong> A relational database used for managing
              the applications data.
            </li>
            <li>
              <strong>Prisma:</strong> An ORM for Node.js and TypeScript that
              simplifies database access and improves query performance.
            </li>
            <li>
              <strong>Tailwind CSS:</strong> A utility-first CSS framework for
              rapid UI development and customization.
            </li>
            <li>
              <strong>React:</strong> A JavaScript library for building user
              interfaces, used within Next.js for dynamic frontend rendering.
            </li>
            <li>
              <strong>ESLint:</strong> A linting tool used to enforce coding
              standards and improve code quality.
            </li>
            <li>
              <strong>Git:</strong> A version control system used for tracking
              changes and collaborating on the codebase.
            </li>
          </ul>
          <p className="mt-4 text-gray-700">
            You can find the project repository on{" "}
            <a
              href="https://github.com/franciscopinto21/ResumeNext.JS"
              target="_blank"
              className="text-blue-500"
            >
              GitHub
            </a>
            .
          </p>
        </section>

        <hr className="my-8" />

        {/* Key Features */}
        <section className="mb-8">
          <h4 className="mb-4 text-xl font-semibold">Key Features</h4>
          <ul className="list-disc pl-5 text-gray-700">
            <li>A dynamic homepage built with Next.js and TypeScript.</li>
            <li>
              API routes for querying data from a MySQL database using Prisma.
            </li>
            <li>
              Responsive UI designed with Tailwind CSS for seamless mobile and
              desktop experiences.
            </li>
            <li>
              Modular components for reusable UI elements and easy
              customization.
            </li>
            <li>
              Clean and maintainable codebase with ESLint for consistent coding
              practices.
            </li>
            <li>
              Full integration with MySQL for persistent data storage and
              retrieval.
            </li>
          </ul>
        </section>

        <hr className="my-8" />

        {/* Code Snippets */}
        <section className="mb-8">
          <h4 className="mb-4 text-xl font-semibold">Code Snippets</h4>
          <div className="rounded border">
            <ul className="flex border-b">
              {Object.keys(codeSnippets).map((tab) => (
                <li key={tab} className="mr-1">
                  <button
                    className={`px-4 py-2 font-semibold ${
                      activeTab === tab
                        ? "bg-gray-300 text-gray-800"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                    onClick={() =>
                      setActiveTab(tab as "layout" | "Header" | "route")
                    }
                  >
                    {tab}.tsx
                  </button>
                </li>
              ))}
            </ul>
            <div className="bg-gray-50 p-4">
              <pre>
                <code className="language-javascript">
                  {codeSnippets[activeTab]}
                </code>
              </pre>
            </div>
          </div>
        </section>

        {/* Other Projects */}
        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">Other Projects</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.name}
                className="rounded-lg bg-white p-4 shadow"
              >
                <h5 className="font-bold">{project.name}</h5>
                <p className="text-gray-600">{project.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Projects;
