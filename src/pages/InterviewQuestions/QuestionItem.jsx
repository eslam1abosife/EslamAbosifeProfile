import { motion } from 'framer-motion';

const getCategoryTag = (category) => {
  const tags = {
    security: '🔒 أمن',
    javascript: '📜 JavaScript',
    vue: '🟢 Vue.js',
    htmlcss: '🎨 HTML/CSS',
    git: '🐙 Git',
    commandline: '💻 Linux',
    backend: '⚙️ Node.js'
  };
  return tags[category] || category;
};

const QuestionItem = ({ index, question, answer, category, isOpen, onToggle }) => {
  return (
    <div
      className={`bg-white dark:bg-gray-800/90 rounded-2xl shadow-lg hover:shadow-xl dark:shadow-gray-900/30 transition-all duration-300 overflow-hidden border ${
        isOpen 
          ? 'border-blue-400 dark:border-blue-500 ring-2 ring-blue-500/20 dark:ring-blue-400/30' 
          : 'border-gray-200 dark:border-gray-700/50 hover:border-blue-300 dark:hover:border-blue-700'
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full text-right p-5 md:p-6 flex items-start justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-2xl transition-colors hover:bg-gray-50 dark:hover:bg-gray-700/30"
        aria-expanded={isOpen}
      >
        <div className="flex items-start gap-3 flex-1 min-w-0">
          {/* ✅ رقم السؤال - واضح ومنظم */}
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 font-bold text-sm flex-shrink-0 mt-0.5">
            {index + 1}
          </span>
          <span className="text-base md:text-lg font-semibold text-gray-800 dark:text-gray-100 text-right">
            {question}
          </span>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-6 w-6 text-blue-500 dark:text-blue-400 transition-transform duration-300 flex-shrink-0 mt-1 ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="px-5 md:px-6 pb-5 md:pb-6"
        >
          <div className="border-t border-gray-200 dark:border-gray-700/50 pt-4">
            <div
              className="prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-200 leading-relaxed [&_code]:bg-gray-100 [&_code]:dark:bg-gray-700/70 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-blue-600 dark:[&_code]:text-blue-400 [&_pre]:bg-gray-100 [&_pre]:dark:bg-gray-700/50 [&_pre]:p-3 [&_pre]:rounded-lg [&_pre]:overflow-x-auto [&_ul]:pr-6 [&_ul]:space-y-1 [&_ol]:pr-6 [&_ol]:space-y-1 [&_li]:mb-1"
              dangerouslySetInnerHTML={{ __html: answer }}
            />
            <div className="mt-4 pt-3 border-t border-gray-100 dark:border-gray-700/30 flex justify-end">
              <span className="text-xs text-gray-400 dark:text-gray-500 bg-gray-100 dark:bg-gray-700/30 px-3 py-1 rounded-full">
                {getCategoryTag(category)}
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default QuestionItem;