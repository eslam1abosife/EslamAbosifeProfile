import { useEffect } from "react";
import { motion } from "framer-motion";
import QuestionHeader from "./QuestionHeader";
import QuestionSection from "./QuestionSection";
import QuestionFooter from "./QuestionFooter";
import { questionsData } from "./questionsData";

const InterviewQuestions = () => {
  useEffect(() => {
    document.title = "أسئلة المقابلات التقنية | Eslam Abosife";
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-8 px-4 sm:py-12 sm:px-6 lg:px-8"
    >
      <div className="max-w-5xl mx-auto">
        <QuestionHeader />
        {/* JavaScript */}
        <QuestionSection
          id="section-javascript"
          title={questionsData.javascript.title}
          icon={questionsData.javascript.icon}
          color={questionsData.javascript.color}
          questions={questionsData.javascript.questions}
        />
        {/* Vue.js */}
        <QuestionSection
          id="section-vue"
          title={questionsData.vue.title}
          icon={questionsData.vue.icon}
          color={questionsData.vue.color}
          questions={questionsData.vue.questions}
        />
        {/* Web Security */}
        <QuestionSection
          id="section-security"
          title={questionsData.security.title}
          icon={questionsData.security.icon}
          color={questionsData.security.color}
          questions={questionsData.security.questions}
        />
        {/* HTML & CSS */}
        <QuestionSection
          id="section-htmlcss"
          title={questionsData.htmlcss.title}
          icon={questionsData.htmlcss.icon}
          color={questionsData.htmlcss.color}
          questions={questionsData.htmlcss.questions}
        />
        {/* Git & GitHub */}
        <QuestionSection
          id="section-git"
          title={questionsData.git.title}
          icon={questionsData.git.icon}
          color={questionsData.git.color}
          questions={questionsData.git.questions}
        />
        {/* Command Line */}
        <QuestionSection
          id="section-commandline"
          title={questionsData.commandline.title}
          icon={questionsData.commandline.icon}
          color={questionsData.commandline.color}
          questions={questionsData.commandline.questions}
        />
        {/* Front-end Basics */}
        <QuestionSection
          id="section-Front_end"
          title={questionsData.Front_end.title}
          icon={questionsData.Front_end.icon}
          color={questionsData.Front_end.color}
          questions={questionsData.Front_end.questions}
        />
        {/* Backend Basics */}
        <QuestionSection
          id="section-Backend"
          title={questionsData.Backend.title}
          icon={questionsData.Backend.icon}
          color={questionsData.Backend.color}
          questions={questionsData.Backend.questions}
        />
        <QuestionSection
          id="section-cpp" 
          title={questionsData.cpp.title}
          icon={questionsData.cpp.icon}
          color={questionsData.cpp.color}
          questions={questionsData.cpp.questions}
        />
        <QuestionFooter />
      </div>
    </motion.div>
  );
};

export default InterviewQuestions;
