import { motion } from "framer-motion";
import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";
import {
  FaSearch,
  FaVuejs,
  FaReact,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import { SiDotnet } from 'react-icons/si'

// واستخدمها كده

import { SiCplusplus, SiJavascript } from "react-icons/si";

// استيراد البيانات
import {
  vueProjects,
  reactProjects,
  htmlCssProjects,
  cppProjects,
  jsChallenges,
  cppChallenges,
  blazorProjects,
} from "../data/projectsData";

// استيراد الكومبوننتات
import SectionHeader from "../components/SectionHeader";
import ProjectCard from "../components/ProjectCard";
import ChallengeCard from "../components/ChallengeCard";

const Projects = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const isRTL = language === "ar";

  const [searchTerm, setSearchTerm] = useState("");

  // Sections configuration
  const sections = [
 
    {
      id: "vue",
      title: isRTL ? "مشاريع Vue.js" : "Vue.js Projects",
      icon: <FaVuejs className="text-green-400" />,
      data: vueProjects,
      component: ProjectCard,
    },
       {
      id: "blazor",
      title: isRTL ? "مشاريع Blazor و .NET" : "Blazor & .NET Projects",
      icon: <SiDotnet className="text-purple-400" />,
      data: blazorProjects,
      component: ProjectCard,
    },
    {
      id: "react",
      title: isRTL ? "مشاريع React.js" : "React.js Projects",
      icon: <FaReact className="text-blue-400" />,
      data: reactProjects,
      component: ProjectCard,
    },
    {
      id: "html-css",
      title: isRTL ? "مشاريع HTML & CSS" : "HTML & CSS Projects",
      icon: <FaHtml5 className="text-orange-500" />,
      data: htmlCssProjects,
      component: ProjectCard,
    },
    {
      id: "cpp",
      title: isRTL ? "مشاريع C++" : "C++ Projects",
      icon: <SiCplusplus className="text-blue-500" />,
      data: cppProjects,
      component: ProjectCard,
    },
    {
      id: "cpp-challenges",
      title: isRTL ? "تحديات C++" : "C++ Challenges",
      icon: <SiCplusplus className="text-blue-500" />,
      data: cppChallenges,
      component: ChallengeCard,
    },
    {
      id: "js",
      title: isRTL ? "تحديات JavaScript" : "JavaScript Challenges",
      icon: <SiJavascript className="text-yellow-400" />,
      data: jsChallenges,
      component: ChallengeCard,
    },
  ];

  // Filter function
  const filterProjects = (projects) => {
    if (!projects || !Array.isArray(projects)) return [];
    if (!searchTerm) return projects;
    return projects.filter(
      (p) =>
        p?.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p?.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p?.tech?.some((t) =>
          t.toLowerCase().includes(searchTerm.toLowerCase()),
        ),
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-28 px-6 pb-16"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className={`mb-10 ${isRTL ? "text-right" : "text-left"}`}
        >
          <h1 className="text-4xl font-bold mb-3">
            <span className="gradient-text">🚀 {t.projects.title}</span>
          </h1>
          <p className="text-muted text-lg max-w-2xl">{t.projects.subtitle}</p>
        </motion.div>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10"
        >
          <div className="relative max-w-md">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted" />
            <input
              type="text"
              placeholder={
                isRTL ? "🔍 ابحث عن مشروع..." : "🔍 Search projects..."
              }
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border transition-all focus:ring-2 focus:ring-accent/50 outline-none"
              style={{
                background: "var(--bg-card)",
                borderColor: "var(--border-color)",
                color: "var(--text-primary)",
              }}
            />
          </div>
        </motion.div>

        {/* Sections */}
        <div className="space-y-12">
          {sections.map((section) => {
            const filteredData = filterProjects(section.data);
            if (filteredData.length === 0) return null;

            return (
              <div key={section.id}>
                <SectionHeader
                  icon={section.icon}
                  title={section.title}
                  count={filteredData.length}
                  isRTL={isRTL}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredData.map((item, index) => {
                    if (!item) return null;

                    // ✅ استخدام ChallengeCard للأقسام التي تحتوي على كود
                    if (
                      section.id === "js" ||
                      section.id === "cpp-challenges"
                    ) {
                      return (
                        <ChallengeCard
                          key={item.id || index}
                          challenge={item}
                          index={index}
                          isRTL={isRTL}
                        />
                      );
                    }
                    return (
                      <ProjectCard
                        key={item.id || index}
                        project={item}
                        index={index}
                        isRTL={isRTL}
                      />
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* No Results */}
        {sections.every((s) => filterProjects(s.data).length === 0) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="text-6xl mb-4">🔍</div>
            <p className="text-muted text-lg">
              {isRTL ? "لا توجد مشاريع مطابقة للبحث" : "No projects found"}
            </p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default Projects;
