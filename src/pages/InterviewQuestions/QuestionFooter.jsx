const QuestionFooter = () => {
  return (
    <div className="mt-16 text-center text-gray-500 dark:text-gray-400 text-sm border-t border-gray-200 dark:border-gray-700/50 pt-8">
      <p>جميع الأسئلة والأجوبة هي للمراجعة الشخصية والمقابلات التقنية</p>
      <p className="mt-1">
        تم التحديث في <span className="font-medium text-gray-700 dark:text-gray-300">{new Date().toLocaleDateString('ar-EG')}</span>
      </p>
    </div>
  );
};

export default QuestionFooter;