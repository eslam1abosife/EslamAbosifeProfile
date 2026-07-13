import { motion } from "framer-motion";
import { useState, useMemo, useCallback, lazy, Suspense, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";
import { FaSearch, FaVuejs, FaReact, FaHtml5, FaCss3Alt, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { SiDotnet, SiCplusplus, SiJavascript } from "react-icons/si";

// استيراد البيانات
import {
  vueProjects,
  reactProjects,
  htmlCssProjects,
  jsChallenges,
  cppChallenges,
  blazorProjects,
} from "../data/projectsData";

// استيراد الكومبوننتات (مع Lazy Loading)
const SectionHeader = lazy(() => import("../components/SectionHeader"));
const ProjectCard = lazy(() => import("../components/ProjectCard"));
const ChallengeCard = lazy(() => import("../components/ChallengeCard"));

const Projects = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const isRTL = language === "ar";

  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState({});
  const [loading, setLoading] = useState(true);
  const itemsPerPage = 6; // عدد التحديات في كل صفحة

  // محاكاة تحميل البيانات
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 300);
    return () => clearTimeout(timer);
  }, []);

  // تعريف الأقسام مع تحديد是否需要 Pagination
  const sections = useMemo(() => [
    {
      id: "vue",
      title: t.projects.vueProjects || (isRTL ? "مشاريع Vue.js" : "Vue.js Projects"),
      icon: <FaVuejs className="text-green-400" />,
      data: vueProjects,
      component: ProjectCard,
      hasPagination: false, // ❌ بدون Pagination
    },
    {
      id: "blazor",
      title: t.projects.blazorProjects || (isRTL ? "مشاريع Blazor و .NET" : "Blazor & .NET Projects"),
      icon: <SiDotnet className="text-purple-400" />,
      data: blazorProjects,
      component: ProjectCard,
      hasPagination: false, // ❌ بدون Pagination
    },
    {
      id: "react",
      title: t.projects.reactProjects || (isRTL ? "مشاريع React.js" : "React.js Projects"),
      icon: <FaReact className="text-blue-400" />,
      data: reactProjects,
      component: ProjectCard,
      hasPagination: false, // ❌ بدون Pagination
    },
    {
      id: "html-css",
      title: t.projects.htmlCssProjects || (isRTL ? "مشاريع HTML & CSS" : "HTML & CSS Projects"),
      icon: <FaHtml5 className="text-orange-500" />,
      data: htmlCssProjects,
      component: ProjectCard,
      hasPagination: false, // ❌ بدون Pagination
    },
    {
      id: "cpp-challenges",
      title: t.projects.cppChallenges || (isRTL ? "تحديات C++" : "C++ Challenges"),
      icon: <SiCplusplus className="text-blue-500" />,
      data: cppChallenges,
      component: ChallengeCard,
      hasPagination: true, // ✅ مع Pagination
    },
    {
      id: "js",
      title: t.projects.jsChallenges || (isRTL ? "تحديات JavaScript" : "JavaScript Challenges"),
      icon: <SiJavascript className="text-yellow-400" />,
      data: jsChallenges,
      component: ChallengeCard,
      hasPagination: true, // ✅ مع Pagination
    },
  ], [t, isRTL]);

  // Filter function
  const filterProjects = useCallback((projects) => {
    if (!projects || !Array.isArray(projects)) return [];
    if (!searchTerm) return projects;
    const term = searchTerm.toLowerCase();
    return projects.filter(
      (p) =>
        p?.title?.toLowerCase().includes(term) ||
        p?.description?.toLowerCase().includes(term) ||
        p?.tech?.some((t) => t.toLowerCase().includes(term)),
    );
  }, [searchTerm]);

  // Pagination functions (للتحديات فقط)
  const paginate = useCallback((items, sectionId) => {
    const page = currentPage[sectionId] || 1;
    const startIndex = (page - 1) * itemsPerPage;
    return items.slice(startIndex, startIndex + itemsPerPage);
  }, [currentPage, itemsPerPage]);

  const getTotalPages = useCallback((items) => {
    return Math.ceil(items.length / itemsPerPage);
  }, [itemsPerPage]);

  const handlePageChange = useCallback((sectionId, newPage) => {
    setCurrentPage(prev => ({
      ...prev,
      [sectionId]: newPage
    }));
  }, []);

  // Loading State
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-accent/30 border-t-accent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-muted">{isRTL ? 'جاري التحميل...' : 'Loading...'}</p>
        </div>
      </div>
    );
  }

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
              placeholder={isRTL ? "🔍 ابحث عن مشروع..." : "🔍 Search projects..."}
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage({});
              }}
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

            // ✅ تحديد البيانات المعروضة (مع أو بدون Pagination)
            let displayData = filteredData;
            let totalPages = 1;
            let page = 1;

            if (section.hasPagination) {
              totalPages = getTotalPages(filteredData);
              page = currentPage[section.id] || 1;
              if (page > totalPages && totalPages > 0) {
                handlePageChange(section.id, 1);
              }
              displayData = paginate(filteredData, section.id);
            }

            return (
              <div key={section.id}>
                <Suspense fallback={<div className="text-center py-4">{isRTL ? 'جاري التحميل...' : 'Loading...'}</div>}>
                  <SectionHeader
                    icon={section.icon}
                    title={section.title}
                    count={filteredData.length}
                    isRTL={isRTL}
                  />
                </Suspense>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Suspense fallback={<div className="col-span-full text-center py-10">{isRTL ? 'جاري التحميل...' : 'Loading...'}</div>}>
                    {displayData.map((item, index) => {
                      if (!item) return null;

                      if (section.id === "js" || section.id === "cpp-challenges") {
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
                  </Suspense>
                </div>

                {/* ✅ Pagination Controls (للتحديات فقط) */}
                {section.hasPagination && totalPages > 1 && (
                  <div className="flex justify-center items-center gap-4 mt-6">
                    <button
                      onClick={() => handlePageChange(section.id, Math.max(page - 1, 1))}
                      disabled={page === 1}
                      className="p-2 rounded-xl border transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:bg-accent/10"
                      style={{
                        borderColor: 'var(--border-color)',
                        color: 'var(--text-primary)'
                      }}
                    >
                      {isRTL ? <FaChevronRight /> : <FaChevronLeft />}
                    </button>

                    <span className="text-sm text-muted">
                      {isRTL ? `صفحة ${page} من ${totalPages}` : `Page ${page} of ${totalPages}`}
                    </span>

                    <button
                      onClick={() => handlePageChange(section.id, Math.min(page + 1, totalPages))}
                      disabled={page === totalPages}
                      className="p-2 rounded-xl border transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:bg-accent/10"
                      style={{
                        borderColor: 'var(--border-color)',
                        color: 'var(--text-primary)'
                      }}
                    >
                      {isRTL ? <FaChevronLeft /> : <FaChevronRight />}
                    </button>
                  </div>
                )}
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