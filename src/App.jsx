import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./components/Logo";

import { asset } from "./utils/asset";
import {
  formspreeEndpoint,
  translations,
} from "./data/content";
import { useLanguage } from "./i18n";

export default function App() {
  const { language, setLanguage } = useLanguage();
  const t = translations[language];
  const navLinks = t.navLinks;
  const announcements = t.announcementsData;
  const education = t.educationData;
  const experience = t.experienceData;
  const projects = t.projectsData;
  const blogs = t.blogsData;
  const [open, setOpen] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailAddr, setEmailAddr] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [subscribeMessage, setSubscribeMessage] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);
  const scrollToSection = (e, id) => {
    if (e && e.preventDefault) e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    // fallback: update the hash so the browser lands there
    if (typeof window !== "undefined") {
      window.location.hash = id;
    }
  };

  return (
    <main className="relative min-h-screen overflow-x-hidden text-[#1a211d] bg-[#e7efe1]">
      <div className="relative z-10">
        <nav className="fixed top-0 left-0 right-0 z-[10003] flex items-center justify-center pt-4 sm:pt-6 px-4 gap-2">
          <div className="glass rounded-full w-11 h-11 flex items-center justify-center">
            <Logo />
          </div>

            <div className="glass rounded-2xl px-5 sm:px-8 py-3 flex items-center gap-4 sm:gap-8 overflow-x-auto">
            {navLinks.map((item, index) => (
              <a
                key={item}
                href={`#${translations.en.navLinks[index].toLowerCase()}`}
                onClick={(e) => scrollToSection(e, translations.en.navLinks[index].toLowerCase())}
                className="text-[14px] sm:text-[16px] whitespace-nowrap text-[#1a211d]/80 hover:text-[#1a211d] font-semibold transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </div>
          <div className="glass rounded-full p-1 flex items-center shrink-0" aria-label="Language switch">
            {["en", "de"].map((code) => (
              <button
                key={code}
                type="button"
                onClick={() => setLanguage(code)}
                className={`h-9 px-3 rounded-full text-xs font-black uppercase transition-colors ${language === code ? "bg-[#111827] text-white" : "text-[#111827]/65 hover:text-[#111827]"}`}
                aria-pressed={language === code}
                aria-label={code === "de" ? "Deutsch" : "English"}
              >
                {code}
              </button>
            ))}
          </div>
        </nav>

        <section className="min-h-[calc(100vh-96px)] flex items-center px-6 sm:px-12 md:px-16 lg:px-20 py-20 sm:py-24">
          <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1fr] items-stretch overflow-hidden rounded-3xl bg-[#f7f9f4] shadow-[0_18px_55px_rgba(17,24,39,0.12)]">
            <div className="bg-[#f7f9f4] text-[#111827] px-8 sm:px-12 md:px-14 py-14 sm:py-16 lg:py-18 rounded-t-3xl lg:rounded-l-3xl lg:rounded-r-none min-h-[360px] sm:min-h-[420px] flex flex-col justify-center">
              <p className="text-sm sm:text-base font-semibold mb-3">
                {t.heroIntro}
              </p>

              <h1 className="text-[3rem] sm:text-[4.2rem] md:text-[5rem] leading-[0.88] font-bold tracking-tight mb-7">
                Sanket
                <br />
                Agalave
              </h1>

              <h2 className="text-base sm:text-lg md:text-xl font-bold text-[#18a878] leading-tight mb-7 max-w-sm">
                {t.heroRole}
                <br />
                {t.heroRoleLine}
              </h2>

              <div className="flex items-center gap-3 flex-wrap">
                <a href="#projects" onClick={(e) => scrollToSection(e, "projects")} className="rounded-full border border-[#111827]/15 px-5 py-3 text-[13px] font-semibold hover:bg-[#111827] hover:text-white transition-all duration-300">{t.viewProjects} ↗</a>
                <a href="#blogs" onClick={(e) => scrollToSection(e, "blogs")} className="rounded-full border border-[#111827]/15 px-5 py-3 text-[13px] font-semibold hover:bg-[#111827] hover:text-white transition-all duration-300">{t.readBlogs} ↗</a>
              </div>
            </div>

            <div className="bg-[#f7f9f4] p-4 sm:p-5 md:p-6 rounded-b-3xl lg:rounded-r-3xl lg:rounded-l-none">
              <div className="h-full min-h-[360px] sm:min-h-[420px] overflow-hidden rounded-2xl bg-[#dfe6dc] ring-1 ring-[#111827]/5">
                <img
                  src={asset("/profile.jpeg")}
                  alt="Sanket Agalave"
                  className="w-full h-full min-h-[360px] sm:min-h-[420px] object-cover object-[center_30%] saturate-[0.88] contrast-[1.04] brightness-[1.03]"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="border-t border-[#1a211d]/10">
          <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-20 lg:px-28 py-28">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] gap-10 lg:gap-16 items-center">
              <div>
                <span className="text-[16px] sm:text-[18px] uppercase tracking-[0.22em] text-[#168954] font-black">{t.about}</span>
                <h2 className="mt-4 text-[2.4rem] sm:text-[3.2rem] md:text-[4rem] leading-[0.98] font-black tracking-tight text-[#111827] max-w-md">
                  {t.aboutTitle}
                  <br />
                  {t.aboutTitleLine}
                </h2>

                <div className="mt-8 flex items-center gap-5 flex-wrap">
                  <img src={asset("/bbw.svg")} alt="BBW University" className="h-14 w-auto" />
                  <img src={asset("/infosys.svg")} alt="Infosys" className="h-14 w-auto" />
                  <img src={asset("/rollsroyce.svg")} alt="Rolls-Royce" className="h-12 w-auto" />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4">
                <div className="rounded-2xl bg-white/90 px-6 py-5 shadow-[0_8px_30px_rgba(17,24,39,0.06)]">
                  <p className="text-[#168954] font-black text-lg leading-tight">{t.basedInLabel}</p>
                  <p className="mt-2 text-[12px] sm:text-[13px] uppercase tracking-[0.08em] font-black text-[#111827]">{language === "de" ? "Berlin, Deutschland" : "Berlin, Germany"}</p>
                </div>

                <div className="rounded-2xl bg-white/90 px-6 py-5 shadow-[0_8px_30px_rgba(17,24,39,0.06)]">
                  <p className="text-[#168954] font-black text-lg leading-tight">{t.workedAtLabel}</p>
                  <p className="mt-2 text-[12px] sm:text-[13px] uppercase tracking-[0.08em] font-black text-[#111827]">
                    Infosys (2 years)
                    <br />
                    Rolls-Royce (1.5 years)
                  </p>
                </div>

                <div className="rounded-2xl bg-white/90 px-6 py-5 shadow-[0_8px_30px_rgba(17,24,39,0.06)]">
                  <p className="text-[#168954] font-black text-lg leading-tight">{t.rolesLabel}</p>
                  <p className="mt-2 text-[12px] sm:text-[13px] uppercase tracking-[0.08em] font-black text-[#111827]">
                    System Engineer,
                    <br />
                    Lifecycle Engineer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="announcements" className="border-t border-[#1a211d]/10">
          <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-20 lg:px-28 py-28">
            <span className="text-[16px] sm:text-[18px] uppercase tracking-[0.22em] text-[#168954] font-black">{t.announcements}</span>

            <div className="mt-10 space-y-4">
              {announcements.map((item) => (
                typeof item === "string" ? (
                  <div key={item} className="glass rounded-2xl px-6 py-5 text-[#111827] text-[15px] sm:text-base font-semibold leading-relaxed">{item}</div>
                ) : (
                  <a
                    key={item.text}
                    href={item.externalUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="block glass rounded-2xl px-6 py-5 text-[#111827] text-[15px] sm:text-base font-semibold leading-relaxed hover:bg-white/70 transition-colors"
                  >
                    {item.text} <span aria-hidden="true">↗</span>
                  </a>
                )
              ))}
            </div>
          </div>
        </section>

        <section id="education" className="border-t border-[#1a211d]/10">
          <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-20 lg:px-28 py-28">
            <span className="text-[16px] sm:text-[18px] uppercase tracking-[0.22em] text-[#168954] font-black">{t.education}</span>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
              {education.map((e) => (
                <div key={e.degree} className="glass rounded-3xl p-8">
                  <div className="flex items-start justify-between mb-10">
                    <img src={e.logo} alt={e.school} className="w-auto h-16 object-contain" />
                    <div className="text-[12px] font-bold text-[#111827]/70">{e.date}</div>
                  </div>

                  <h3 className="text-[1.4rem] font-semibold mb-4">{e.degree}</h3>
                  <p className="text-[#111827]/80 font-semibold">{e.school}</p>
                  <p className="text-[#111827]/65 text-[13px] mt-2">{e.location}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="border-t border-[#1a211d]/10">
          <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-20 lg:px-28 py-28">
            <span className="text-[16px] sm:text-[18px] uppercase tracking-[0.22em] text-[#168954] font-black">{t.experience}</span>

            <div className="mt-10 space-y-6">
              {experience.map((item) => (
                <div key={item.role} className="glass rounded-3xl p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                    <div className="flex items-start gap-5">
                      <div className="glass rounded-2xl w-16 h-16 flex items-center justify-center">
                        <img src={item.logo} alt={item.company} className="w-10 h-10 object-contain" />
                      </div>

                      <div>
                        <h3 className="text-[1.5rem] sm:text-[2rem] font-semibold mb-2">{item.role}</h3>
                        <p className="text-[#111827]/80 font-semibold">{item.company}</p>
                      </div>
                    </div>

                    <div className="text-[#111827]/70 text-[13px] font-bold">{item.date}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="blogs" className="border-t border-[#1a211d]/10">
          <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-20 lg:px-28 py-28">
            <span className="text-[16px] sm:text-[18px] uppercase tracking-[0.22em] text-[#168954] font-black">{t.blogs}</span>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10">
              {blogs.map((blog) => (
                <Link
                  key={blog.id}
                  to={`/blog/${blog.id}`}
                  className="block glass rounded-3xl p-8 sm:p-10 hover:bg-white/5 transition-colors"
                >
                  <div className="text-[12px] sm:text-[13px] uppercase tracking-[0.08em] text-[#168954] mb-5 font-bold">{blog.category}</div>

                  <h3 className="text-[1.5rem] sm:text-[2rem] md:text-[2.2rem] leading-[1.2] font-semibold max-w-3xl mb-6 text-[#1a211d]">
                    {blog.title}
                  </h3>

                  <p className="text-[#111827]/75 max-w-2xl leading-[1.7] mb-8 text-[15px] sm:text-base">{blog.excerpt}</p>

                  <div className="inline-flex items-center rounded-2xl px-5 py-3 sm:py-4 glass text-sm sm:text-base text-[#1a211d]/85 hover:text-[#1a211d] transition-colors font-medium">
                    {t.openBlog} ↗
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="border-t border-[#1a211d]/10">
          <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-20 lg:px-28 py-28">
            <span className="text-[16px] sm:text-[18px] uppercase tracking-[0.22em] text-[#168954] font-black">{t.projects}</span>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
              {projects.map((item) => (
                item.title.startsWith("Engineering") || item.title.startsWith("Engineering-Fallstudie") ? (
                  <button
                    key={item.title}
                    type="button"
                    onClick={() => setSelectedProject(item)}
                    className="glass rounded-3xl p-10 transition-all duration-300 hover:bg-white/5 block text-left w-full"
                  >
                  <div className="flex flex-col justify-between h-full min-h-[240px]">
                    <div>
                      <div className="text-[12px] uppercase tracking-[0.2em] text-[#168954] font-bold mb-6">{t.category}</div>
                      <h3 className="text-[1.8rem] sm:text-[2rem] font-semibold leading-tight text-[#1a211d]">{item.title}</h3>
                      <p className="text-[#111827]/75 mt-5 leading-[1.7] text-[15px] max-w-sm line-clamp-2">{item.cardDesc || item.desc}</p>
                    </div>

                    <div className="pt-10 text-sm text-[#1a211d]/60">
                      {item.linkText}
                    </div>
                  </div>
                  </button>
                ) : (
                  <a
                    key={item.title}
                    href={item.externalUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="glass rounded-3xl p-10 transition-all duration-300 hover:bg-white/5 block"
                  >
                    <div className="flex flex-col justify-between h-full min-h-[240px]">
                      <div>
                        <div className="text-[12px] uppercase tracking-[0.2em] text-[#168954] font-bold mb-6">{t.category}</div>
                        <h3 className="text-[1.8rem] sm:text-[2rem] font-semibold leading-tight text-[#1a211d]">{item.title}</h3>
                        <p className="text-[#111827]/75 mt-5 leading-[1.7] text-[15px] max-w-sm">{item.desc}</p>
                      </div>

                      <div className="pt-10 text-sm text-[#1a211d]/60">
                        {item.linkText}
                      </div>
                    </div>
                  </a>
                )
              ))}
            </div>
          </div>
        </section>

        <footer id="contact" className="w-full bg-[#1fc667] text-[#102416] mt-24 px-6 sm:px-12 md:px-20 lg:px-28 py-16">
          <div className="max-w-7xl mx-auto rounded-3xl p-6 md:p-10 border border-[#102416]/10 bg-white/10">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
              <div className="md:col-span-5">
                <div className="flex items-center gap-3 mb-6">
                  <div className="glass rounded-full w-11 h-11 flex items-center justify-center"><Logo /></div>
                  <span className="text-xl font-medium">Sanket Agalave</span>
                </div>

                <p className="text-[15px] leading-[1.7] max-w-sm text-[#102416]/85">{t.footerDescription}</p>

                <button onClick={() => setOpen(true)} className="rounded-full border border-[#102416]/20 px-5 py-3 text-[13px] mt-8 hover:bg-[#102416] hover:text-white transition-all duration-300">{t.subscribeUpdates}</button>
              </div>

              <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-10">
                <div>
                  <h3 className="text-sm uppercase tracking-wider text-[#102416] mb-4">{t.explore}</h3>
                  <ul className="space-y-3 text-sm text-[#102416]/85">
                    <li><a href="#about" onClick={(e) => scrollToSection(e, 'about')}>{t.about}</a></li>
                    <li><a href="#announcements" onClick={(e) => scrollToSection(e, 'announcements')}>{t.announcements}</a></li>
                    <li><a href="#blogs" onClick={(e) => scrollToSection(e, 'blogs')}>{t.blogs}</a></li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-sm uppercase tracking-wider text-[#102416] mb-4">{t.work}</h3>
                  <ul className="space-y-3 text-sm text-[#102416]/85">
                    <li><a href="#education" onClick={(e) => scrollToSection(e, 'education')}>{t.education}</a></li>
                    <li><a href="#experience" onClick={(e) => scrollToSection(e, 'experience')}>{t.experience}</a></li>
                    <li><a href="#projects" onClick={(e) => scrollToSection(e, 'projects')}>{t.projects}</a></li>
                    <li><a href="#projects" onClick={(e) => scrollToSection(e, 'projects')}>{t.supplyChainManagement}</a></li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-sm uppercase tracking-wider text-[#102416] mb-4">{t.connect}</h3>
                  <ul className="space-y-3 text-sm text-[#102416]/85">
                    <li><a href="mailto:sanketagalave20@gmail.com">Email</a></li>
                    <li><a href="https://www.linkedin.com/in/sanket-agalave-03b17220b/" target="_blank" rel="noreferrer">LinkedIn</a></li>
                    <li><a href="https://github.com/Sanket22-creator" target="_blank" rel="noreferrer">GitHub</a></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[#102416]/15 flex flex-col md:flex-row items-center justify-between gap-6">
              <p className="text-[11px] uppercase tracking-[0.3em] font-bold text-[#102416]/80">{t.designedBy}</p>

              <div className="flex items-center gap-5 text-sm font-semibold text-[#102416]/85">
                <a href="https://www.linkedin.com/in/sanket-agalave-03b17220b/" target="_blank" rel="noreferrer">LinkedIn</a>
                <a href="https://github.com/Sanket22-creator" target="_blank" rel="noreferrer">GitHub</a>
                <a href="mailto:sanketagalave20@gmail.com">Email</a>
              </div>
            </div>
          </div>
        </footer>

        {open && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-md px-6">
            <div className="bg-[#f7f9f4] text-[#111827] border border-[#111827]/10 rounded-3xl w-full max-w-md p-8 relative shadow-[0_24px_70px_rgba(17,24,39,0.28)]">
              <button onClick={() => setOpen(false)} className="absolute top-5 right-5 text-[#111827]/55 hover:text-[#111827]">✕</button>

              <h3 className="text-2xl font-black mb-3 text-[#111827]">{t.subscribe}</h3>
              <p className="text-[#111827]/70 text-sm leading-[1.7] mb-8">{t.subscribeDescription}</p>

              <form
                className="space-y-4"
                onSubmit={async (e) => {
                  e.preventDefault();
                  setSubmitting(true);
                  setSubscribeMessage("");

                  try {
                    const fd = new FormData();
                    fd.append("firstName", firstName);
                    fd.append("lastName", lastName);
                    fd.append("email", emailAddr);

                    const res = await fetch(formspreeEndpoint, {
                      method: "POST",
                      headers: { Accept: "application/json" },
                      body: fd,
                    });

                    if (res.ok) {
                      setSubscribeMessage(t.subscribeSuccess);
                      setFirstName("");
                      setLastName("");
                      setEmailAddr("");
                      setTimeout(() => setOpen(false), 1200);
                    } else {
                      const data = await res.json().catch(() => null);
                      setSubscribeMessage((data && data.error) || t.subscribeFailure);
                    }
                  } catch (err) {
                    setSubscribeMessage(t.networkError);
                  } finally {
                    setSubmitting(false);
                  }
                }}
              >
                <input
                  type="text"
                  required
                  placeholder={`${t.firstName} *`}
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="glass w-full rounded-2xl px-5 py-4 text-[#111827] bg-white/70 outline-none placeholder:text-[#111827]/45"
                />

                <input
                  type="text"
                  required
                  placeholder={`${t.lastName} *`}
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="glass w-full rounded-2xl px-5 py-4 text-[#111827] bg-white/70 outline-none placeholder:text-[#111827]/45"
                />

                <input
                  type="email"
                  required
                  placeholder={`${t.emailAddress} *`}
                  value={emailAddr}
                  onChange={(e) => setEmailAddr(e.target.value)}
                  className="glass w-full rounded-2xl px-5 py-4 text-[#111827] bg-white/70 outline-none placeholder:text-[#111827]/45"
                />

                <button
                  type="submit"
                  disabled={submitting}
                  className="bg-[#1fc667] text-[#102416] font-bold w-full rounded-2xl py-4 hover:bg-[#18ad58] transition-all duration-300 disabled:opacity-50"
                >
                  {submitting ? t.sending : t.joinJourney}
                </button>

                {subscribeMessage && <div className="text-sm text-[#111827]/80 mt-2">{subscribeMessage}</div>}
              </form>
            </div>
          </div>
        )}

        {selectedProject && (
          <div
            className="fixed inset-0 z-[10004] flex items-center justify-center bg-black/55 backdrop-blur-md px-6"
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) setSelectedProject(null);
            }}
          >
            <div
              role="dialog"
              aria-modal="true"
              aria-labelledby="project-dialog-title"
              className="bg-[#f7f9f4] text-[#111827] border border-[#111827]/10 rounded-3xl w-full max-w-2xl max-h-[85vh] overflow-y-auto p-8 sm:p-10 relative shadow-[0_24px_70px_rgba(17,24,39,0.28)]"
            >
              <div className="flex items-start justify-between gap-6 mb-5">
                <h3 id="project-dialog-title" className="text-2xl sm:text-3xl font-black text-[#111827]">
                  {selectedProject.title}
                </h3>
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="shrink-0 h-9 w-9 flex items-center justify-center rounded-full text-[#111827]/55 hover:text-[#111827] hover:bg-white"
                  aria-label="Close project details"
                >
                  ✕
                </button>
              </div>
              <p className="text-[#111827]/75 text-[15px] sm:text-base leading-[1.8] mb-8">
                {selectedProject.desc}
              </p>
              <a
                href={selectedProject.externalUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-2xl bg-[#1fc667] px-5 py-3 text-sm sm:text-base font-bold text-[#102416] hover:bg-[#18ad58] transition-colors"
              >
                {t.readEngineeringPaper} ↗
              </a>
            </div>
          </div>
        )}

      </div>
    </main>
  );
}
