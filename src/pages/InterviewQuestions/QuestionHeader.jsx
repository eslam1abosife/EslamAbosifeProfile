const QuestionHeader = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="text-center mb-12 sm:mb-16">
      {/* أيقونة الرأس */}
      <div className="inline-block p-3 bg-blue-100 dark:bg-blue-900/40 rounded-full mb-4 shadow-lg dark:shadow-blue-900/20">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>

      {/* العنوان */}
      <h1 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
        أسئلة المقابلات التقنية
      </h1>
      <p className="mt-3 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
        مجموعة شاملة من أهم الأسئلة الشائعة في المقابلات التقنية
      </p>

      {/* الأزرار (Tags) - مع إضافة C++ */}
      <div className="mt-6 flex flex-wrap justify-center gap-2.5">
        <button
          onClick={() => scrollToSection('section-javascript')}
          className="px-4 py-1.5 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium hover:bg-blue-200 dark:hover:bg-blue-800/60 transition-all duration-300 cursor-pointer border border-blue-200 dark:border-blue-800/50 hover:scale-105 hover:shadow-md"
        >
          JavaScript
        </button>
        <button
          onClick={() => scrollToSection('section-vue')}
          className="px-4 py-1.5 bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300 rounded-full text-sm font-medium hover:bg-green-200 dark:hover:bg-green-800/60 transition-all duration-300 cursor-pointer border border-green-200 dark:border-green-800/50 hover:scale-105 hover:shadow-md"
        >
          Vue.js
        </button>
        <button
          onClick={() => scrollToSection('section-security')}
          className="px-4 py-1.5 bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-300 rounded-full text-sm font-medium hover:bg-red-200 dark:hover:bg-red-800/60 transition-all duration-300 cursor-pointer border border-red-200 dark:border-red-800/50 hover:scale-105 hover:shadow-md"
        >
          Security
        </button>
        <button
          onClick={() => scrollToSection('section-htmlcss')}
          className="px-4 py-1.5 bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium hover:bg-purple-200 dark:hover:bg-purple-800/60 transition-all duration-300 cursor-pointer border border-purple-200 dark:border-purple-800/50 hover:scale-105 hover:shadow-md"
        >
          HTML/CSS
        </button>
        <button
          onClick={() => scrollToSection('section-git')}
          className="px-4 py-1.5 bg-orange-100 dark:bg-orange-900/40 text-orange-700 dark:text-orange-300 rounded-full text-sm font-medium hover:bg-orange-200 dark:hover:bg-orange-800/60 transition-all duration-300 cursor-pointer border border-orange-200 dark:border-orange-800/50 hover:scale-105 hover:shadow-md"
        >
          Git
        </button>
        <button
          onClick={() => scrollToSection('section-commandline')}
          className="px-4 py-1.5 bg-gray-200 dark:bg-gray-700/50 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:bg-gray-300 dark:hover:bg-gray-600/60 transition-all duration-300 cursor-pointer border border-gray-300 dark:border-gray-600/50 hover:scale-105 hover:shadow-md"
        >
          Linux
        </button>
        <button
          onClick={() => scrollToSection('section-Front_end')}
          className="px-4 py-1.5 bg-teal-100 dark:bg-teal-900/40 text-teal-700 dark:text-teal-300 rounded-full text-sm font-medium hover:bg-teal-200 dark:hover:bg-teal-800/60 transition-all duration-300 cursor-pointer border border-teal-200 dark:border-teal-800/50 hover:scale-105 hover:shadow-md"
        >
          Front-end
        </button> <button
          onClick={() => scrollToSection('section-Backend')}
          className="px-4 py-1.5 bg-teal-100 dark:bg-teal-900/40 text-teal-700 dark:text-teal-300 rounded-full text-sm font-medium hover:bg-teal-200 dark:hover:bg-teal-800/60 transition-all duration-300 cursor-pointer border border-teal-200 dark:border-teal-800/50 hover:scale-105 hover:shadow-md"
        >
          Backend
        </button>
        {/* ✅ زر C++ الجديد */}
        <button
          onClick={() => scrollToSection('section-cpp')}
          className="px-4 py-1.5 bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 rounded-full text-sm font-medium hover:bg-indigo-200 dark:hover:bg-indigo-800/60 transition-all duration-300 cursor-pointer border border-indigo-200 dark:border-indigo-800/50 hover:scale-105 hover:shadow-md"
        >
          C++
        </button>
      </div>
    </div>
  );
};

export default QuestionHeader;