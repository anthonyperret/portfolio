'use client';
import { useEffect, useState } from "react";
import NavItem from "@/components/NavItem";
import SkillTag from "@/components/SkillTag";
import { FaGithub, FaLinkedin, FaRegEnvelope  } from "react-icons/fa";

export default function Home() {
const [activeSection, setActiveSection] = useState("about");


  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log("set active section du observer")
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-30% 0px -50% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);
  return (
    <div className="mx-auto min-h-screen max-w-7xl px-6 py-12 font-body md:px-12 md:py-16 lg:py-0 flex flex-col lg:flex-row-reverse">

      <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
        <div className="flex flex-col items-start lg:items-end">
          <h1 className="lg:text-5xl text-4xl font-bold">Anthony Perret</h1>
          <h2 className="text-xl">Développeur FullStack</h2>
          <nav className="hidden lg:flex justify-end mt-12">
            <ul className="w-max">
              <NavItem id="about" label="à propos de moi" activeSection={activeSection} />
              <NavItem id="experiences" label="mes expériences pro" activeSection={activeSection} />
              <NavItem id="education" label="mes formations" activeSection={activeSection} />
              <NavItem id="projects" label="mes projets" activeSection={activeSection} />
            </ul>
          </nav>
        </div>

        <div className="flex justify-start lg:justify-end gap-3 mt-10 lg:mt-0">
          <a href="https://github.com/anthonyperret" target="_blank" rel="noopener noreferrer">
            <FaGithub size={24} className="hover:text-primary/80" />
          </a>

          <a href="https://www.linkedin.com/in/anthony-perret/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={24} className="hover:text-primary/80" />
          </a>

          <a href="mailto:anthony.perret.contact@gmail.com" target="_blank" rel="noopener noreferrer">
            <FaRegEnvelope size={24} className="hover:text-primary/80" />
          </a>
        </div>
        
      </header>

      <main className="pt-24 lg:w-[52%] lg:py-24">
        <section id="about" className="mb-24 scroll-mt-24">
          <h3 className="lg:hidden text-lg uppercase">À propos de moi</h3>
          <p className="pb-5 text-white/70">
            Je suis un <strong>développeur fullstack</strong> qui conçoit des applications web et logicielles complètes. Spécialisé en <strong>JavaScript</strong> et ses frameworks, je possède toutefois des compétences sur d&apos;autres langages afin d&apos;adapter chaque solution aux besoins. Également <strong>passionné</strong> par le design, je m&apos;efforce de créer des interfaces intuitives et attrayantes afin de garantir des <strong>expériences fluides</strong>.
          </p>

          <p className="pb-5 text-white/70">
            Toujours dans l&apos;optique de progresser, je rejoindrai à partir d&apos;<strong>Octobre 2026</strong> le Master of Science d&apos;<strong>Epitech</strong>, et je suis donc à la recherche d&apos;une <strong>alternance sur deux ans</strong> pour mettre mes compétences en pratique et valider cette formation.
          </p>

          <p className="pb-5 text-white/70">
            Par le passé, j&apos;ai travaillé sur de <strong>nombreux projets dans des environnements très variés</strong> — domaines skiables, parcs d&apos;attraction, organismes sociaux ou encore lieux de culte. Ces expériences m&apos;ont appris à m&apos;<strong>adapter</strong> rapidement à des contextes différents tout en alliant <strong>rigueur, persévérance et créativité</strong>.
          </p>

        </section>

        <section id="experiences" className="mb-24 scroll-mt-24 lg:border-l border-primary">
          <h3 className="lg:hidden text-lg uppercase">Mes expériences pro</h3>
          <ol>
            <li className="mb-6 lg:ml-3">
              <a href="https://thewalkingnerds.com/" target="_blank" 
                className="block rounded-md lg:p-5 hover:bg-indigo-200/5 hover:shadow-lg">
                <span className="text-white/70 text-xs font-light uppercase">Novembre 2023 — Août 2024</span>
                <div className="mb-3">
                  <h4 className="text-primary font-bold">Développeur Web FullStack · The Walking Nerds</h4>
                  <p className="text-sm text-white/70">
                    Développement et maintenance d&apos;applications web fullstack au sein de plusieurs projets SaaS, notamment un LMS destiné à des organismes de formation et de réinsertion professionnelle. Conception d&apos;outils métiers comme une application de planification et de réservation pour un centre spécialisé, ainsi que participation au développement d&apos;un serious game web dédié à l&apos;évaluation de candidats.
                  </p>
                </div>
                <div>
                  <ul className="flex flex-wrap gap-2">
                    <li><SkillTag>JavaScript</SkillTag></li>
                    <li><SkillTag>TypeScript</SkillTag></li>
                    <li><SkillTag>HTML & CSS</SkillTag></li>
                    <li><SkillTag>Vue.js</SkillTag></li>
                    <li><SkillTag>Next.js</SkillTag></li>
                    <li><SkillTag>GraphQL</SkillTag></li>
                  </ul>
                </div>
              </a>
            </li>

            <li className="mb-6 lg:ml-3">
              <a href="https://www.intence.tech/" target="_blank" 
                className="block rounded-md lg:p-5 hover:bg-indigo-200/5 hover:shadow-lg">
                <span className="text-white/70 text-xs font-light uppercase">Octobre 2021 — Octobre 2023</span>
                <div className="mb-3">
                  <h4 className="text-primary font-bold">Lead Développeur FullStack · Intence</h4>
                  <p className="text-sm text-white/70">
                    Développement de solutions web sur mesure pour divers clients, incluant des tunnels de vente avec intégration de systèmes de paiement. Mise en place et personnalisation d&apos;une solution de point de vente basée sur Odoo pour la vente de forfaits de ski, avec gestion de tarifications complexes et intégrations matérielles. Développement et maintenance de modules Odoo ainsi que d&apos;une API REST, avec ajout de nouvelles fonctionnalités et mise en place de tests.
                  </p>
                </div>
                <div>
                  <ul className="flex flex-wrap gap-2">
                    <li><SkillTag>JavaScript</SkillTag></li>
                    <li><SkillTag>TypeScript</SkillTag></li>
                    <li><SkillTag>HTML & CSS</SkillTag></li>
                    <li><SkillTag>Node.js</SkillTag></li>
                    <li><SkillTag>Python</SkillTag></li>
                    <li><SkillTag>Flask</SkillTag></li>
                    <li><SkillTag>Odoo</SkillTag></li>
                    <li><SkillTag>PHP</SkillTag></li>
                    <li><SkillTag>PayZen</SkillTag></li>
                    <li><SkillTag>PostgreSQL</SkillTag></li>
                    <li><SkillTag>Java Android</SkillTag></li>
                  </ul>
                </div>
              </a>
            </li>


            <li className="mb-6 lg:ml-3">
              <a href="https://www.intence.tech/" target="_blank" 
                className="block rounded-md lg:p-5 hover:bg-indigo-200/5 hover:shadow-lg">
                <span className="text-white/70 text-xs font-light uppercase">Août 2020 — Octobre 2021</span>
                <div className="mb-3">
                  <h4 className="text-primary font-bold">Alternant Développeur FullStack · Intence</h4>
                  <p className="text-sm text-white/70">
                    Développement fullstack d&apos;un SaaS de gestion en temps réel pour des domaines skiables (Avoriaz, Val Thorens, Peyragudes…). Réalisation d&apos;un prototype de tunnel de vente web pour l&apos;achat de forfaits, dans une logique d&apos;expérimentation et d&apos;amélioration du parcours utilisateur.
                  </p>
                </div>
                <div>
                  <ul className="flex flex-wrap gap-2">
                    <li><SkillTag>JavaScript</SkillTag></li>
                    <li><SkillTag>HTML & CSS</SkillTag></li>
                    <li><SkillTag>PHP</SkillTag></li>
                    <li><SkillTag>PrestaShop</SkillTag></li>
                    <li><SkillTag>PostgreSQL</SkillTag></li>
                    <li><SkillTag>Python</SkillTag></li>
                  </ul>
                </div>
              </a>
            </li>
          </ol>
        </section>

        <section id="education" className="mb-24 scroll-mt-24 lg:border-l border-primary">
          <h3 className="lg:hidden text-lg uppercase">Mes formations</h3>
          <ol>
            <li className="mb-6 lg:ml-3">
              <a href="https://cfa.take-off.tech/formation-webdesign/" target="_blank" 
                className="block rounded-md lg:p-5 hover:bg-indigo-200/5 hover:shadow-lg">
              <span className="text-white/70 text-xs font-light uppercase">Décembre 2024 — Janvier 2026</span>
              <div className="mb-3">
                <h4 className="text-primary font-bold">Titre Professionnel Concepteur Designer UI</h4>
                <p className="text-sm text-white/70">
                  Formation axée sur le marketing, la conception d&apos;interfaces et la gestion de projets web, avec la réalisation de projets concrets de la réflexion UX jusqu&apos;à l&apos;intégration.
                </p>
              </div>
              <span className="text-white/70 text-xs font-light uppercase">Take-Off — Maubeuge</span>
              </a>
            </li>

            <li className="mb-6 lg:ml-3">
              <a href="https://www.univ-tlse3.fr/medias/fichier/lp-info-dql_1626356071308-pdf" target="_blank" 
                className="block rounded-md lg:p-5 hover:bg-indigo-200/5 hover:shadow-lg">
                <span className="text-white/70 text-xs font-light uppercase">Septembre 2020 — Juin 2021</span>
                <div className="mb-3">
                  <h4 className="text-primary font-bold">Licence Professionnelle Développement et Qualité des Logiciels</h4>
                  <p className="text-sm text-white/70">
                    Approfondissement du développement logiciel avec une attention portée à la qualité du code, aux tests et aux bonnes pratiques dans des environnements professionnels.
                  </p>
                </div>
                <span className="text-white/70 text-xs font-light uppercase">IUT Paul Sabatier — Toulouse</span>
              </a>
            </li>

            <li className="mb-6 lg:ml-3">
              <a href="https://iut.univ-tlse3.fr/bachelor-specialite-informatique" target="_blank" 
                className="block rounded-md lg:p-5 hover:bg-indigo-200/5 hover:shadow-lg">
                <span className="text-white/70 text-xs font-light uppercase">Septembre 2018 — Juin 2020</span>
                <div className="mb-3">
                  <h4 className="text-primary font-bold">Diplôme Universitaire de Technologie en Informatique</h4>
                  <p className="text-sm text-white/70">
                    Acquisition des bases solides en programmation, algorithmique et développement à travers des projets pratiques et encadrés.
                  </p>
                </div>
                <span className="text-white/70 text-xs font-light uppercase">IUT Paul Sabatier — Toulouse</span>
              </a>
            </li>
          </ol>
        </section>


        <section id="projects" className="mb-28 scroll-mt-24 lg:border-l border-primary">
          <h3 className="lg:hidden text-lg uppercase">Mes projets</h3>
          <ol>
            <li className="flex flex-col-reverse lg:flex-row lg:gap-3 mb-12 lg:mb-6 lg:ml-3 lg:p-5 rounded-md hover:bg-indigo-200/5 hover:shadow-lg">

              <div className="w-35 shrink-0 aspect-video overflow-hidden">
                <img
                  src="https://elements-resized.envatousercontent.com/elements-cover-images/edbbc4ab-95c0-4fca-b096-036d38cc9711?w=433&cf_fit=scale-down&q=85&format=auto&s=3055db25f7249cccc3be0006043c1d05b75d5250c9dc3ed0d834b382906e22db"
                  alt="Spotify Profile app homepage"
                  className="w-full object-cover rounded border-2 border-slate-200/10 mt-1"
                  loading="lazy"
                />
              </div>

              <div className="mb-3 flex-1">
                <h4 className="text-primary font-bold">Création d&apos;un site vitrine · Random Entreprise</h4>
                <p className="text-sm text-white/70">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat tortor sit amet leo dapibus, quis mollis lacus bibendum. Aliquam vitae blandit enim. Nam et leo turpis. Cras eget lacus eget arcu sagittis ullamcorper eu a massa. In efficitur nec mi vel rutrum.
                </p>
                
              </div>
            </li>

            <li className="flex flex-col-reverse lg:flex-row lg:gap-3 mb-6 lg:ml-3 lg:p-5 rounded-md hover:bg-indigo-200/5 hover:shadow-lg">

              <div className="w-35 shrink-0 aspect-video overflow-hidden">
                <img
                  src="https://elements-resized.envatousercontent.com/elements-cover-images/edbbc4ab-95c0-4fca-b096-036d38cc9711?w=433&cf_fit=scale-down&q=85&format=auto&s=3055db25f7249cccc3be0006043c1d05b75d5250c9dc3ed0d834b382906e22db"
                  alt="Spotify Profile app homepage"
                  className="w-full object-cover rounded border-2 border-slate-200/10 mt-1"
                  loading="lazy"
                />
              </div>

              <div className="mb-3 flex-1">
                <h4 className="text-primary font-bold">Création d&apos;un site vitrine · Random Entreprise</h4>
                <p className="text-sm text-white/70">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat tortor sit amet leo dapibus, quis mollis lacus bibendum. Aliquam vitae blandit enim. Nam et leo turpis. Cras eget lacus eget arcu sagittis ullamcorper eu a massa. In efficitur nec mi vel rutrum.
                </p>
                
              </div>
            </li>

            <li className="flex flex-col-reverse lg:flex-row lg:gap-3 mb-6 lg:ml-3 lg:p-5 rounded-md hover:bg-indigo-200/5 hover:shadow-lg">

              <div className="w-35 shrink-0 aspect-video overflow-hidden">
                <img
                  src="https://elements-resized.envatousercontent.com/elements-cover-images/edbbc4ab-95c0-4fca-b096-036d38cc9711?w=433&cf_fit=scale-down&q=85&format=auto&s=3055db25f7249cccc3be0006043c1d05b75d5250c9dc3ed0d834b382906e22db"
                  alt="Spotify Profile app homepage"
                  className="w-full object-cover rounded border-2 border-slate-200/10 mt-1"
                  loading="lazy"
                />
              </div>

              <div className="mb-3 flex-1">
                <h4 className="text-primary font-bold">Création d&apos;un site vitrine · Random Entreprise</h4>
                <p className="text-sm text-white/70">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat tortor sit amet leo dapibus, quis mollis lacus bibendum. Aliquam vitae blandit enim. Nam et leo turpis. Cras eget lacus eget arcu sagittis ullamcorper eu a massa. In efficitur nec mi vel rutrum.
                </p>
                
              </div>
            </li>
          </ol>
        </section>

        <footer className="flex justify-center lg:justify-start">
          <span className="text-sm text-white/70">
            © 2026 Anthony Perret. Tous droits réservés.
          </span>
        </footer>

      </main>
      
    </div>
  );
}
