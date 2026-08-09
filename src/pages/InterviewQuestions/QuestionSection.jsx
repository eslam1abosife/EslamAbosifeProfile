import { useState, useEffect, useRef } from 'react';
import QuestionItem from './QuestionItem';

const QuestionSection = ({ id, title, icon, color, questions }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const [allOpen, setAllOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { 
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
    setAllOpen(false);
  };

  const toggleAll = () => {
    if (allOpen) {
      setOpenIndex(null);
      setAllOpen(false);
    } else {
      setOpenIndex(-1);
      setAllOpen(true);
    }
  };

  const isOpen = (index) => {
    if (allOpen) return true;
    return openIndex === index;
  };

  const colorClasses = {
    blue: 'bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800',
    green: 'bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300 border-green-200 dark:border-green-800',
    red: 'bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-300 border-red-200 dark:border-red-800',
    purple: 'bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800',
    orange: 'bg-orange-100 dark:bg-orange-900/40 text-orange-700 dark:text-orange-300 border-orange-200 dark:border-orange-800',
    gray: 'bg-gray-100 dark:bg-gray-700/50 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-600',
    teal: 'bg-teal-100 dark:bg-teal-900/40 text-teal-700 dark:text-teal-300 border-teal-200 dark:border-teal-800'
  };

  return (
    <div 
      id={id} 
      ref={sectionRef}
      className={`mb-12 scroll-mt-24 transition-all duration-700 transform ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : ' translate-y-8'
      }`}
    >
      {/* ✅ عنوان القسم - منظم وواضح */}
      <div className="flex flex-wrap items-center justify-between mb-6 gap-3">
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-2xl">{icon}</span>
          <h2 className={`text-xl md:text-2xl font-bold px-4 py-2 rounded-xl border ${colorClasses[color]}`}>
            {title}
          </h2>
          <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700/50 px-3 py-1 rounded-full border border-gray-200 dark:border-gray-600/50">
            {questions.length} سؤال
          </span>
        </div>
        <button
          onClick={toggleAll}
          className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium transition-colors px-3 py-1 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20"
        >
          {allOpen ? 'إغلاق الكل' : 'فتح الكل'}
        </button>
      </div>

      <div className="space-y-4">
        {questions.map((item, index) => (
          <QuestionItem
            key={index}
            index={index}
            question={item.question}
            answer={item.answer}
            category={item.category}
            isOpen={isOpen(index)}
            onToggle={() => toggleAnswer(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default QuestionSection;