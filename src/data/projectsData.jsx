import {
  FaVuejs,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaCode,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaExternalLinkAlt,
  FaJs,
  FaPlay,
  FaCopy,
  FaCheck,
  FaServer, // ← استخدم FaServer بدل FaDotNet
} from "react-icons/fa";

import {
  SiCplusplus,
  SiJavascript,
  SiTailwindcss,
  SiFirebase,
  SiMongodb,
  SiExpress,
  SiDotnet, // ← أو استخدم SiDotnet
} from "react-icons/si";
import electricalStoreImg from "../assets/image.png";
import TamkinDashboard from "../assets/image1.png";
import ShareMobile from "../assets/image2.png";
import AgentWebPlatform from "../assets/image3.png";
import AwnPlatform from "../assets/image4.png";
import EllaEcommre from "../assets/image5.png";
import RealEstate from "../assets/image6.png";
import AlSerajAlMunir from "../assets/image8.png";
import Profile from "../assets/image9.png";




// ==================== Vue.js Projects ====================
export const vueProjects = [
  {
    id: 0,
    title: "Electrical Store",
    category: "vue",
    type: "E-Commerce",
    description:
      "Full-featured e-commerce store for electrical products built with Nuxt.js, featuring Supabase authentication, real-time inventory, and secure payment processing",
    tech: ["Nuxt.js", "Vue.js", "Supabase", "Tailwind CSS", "Pinia"],
    icon: <FaVuejs className="text-green-400" />,
    link: "https://electrical-store-nine.vercel.app/",
    github: "https://github.com/eslam1abosife/electrical-store",
    image: electricalStoreImg,
  },



 
  {
    id: 1,
    title: "Awn (Platform)",
    category: "vue",
    type: "Charity Platform",
    description:
      "Platform for charities to assist those in need and help charities and supervisors to track their work",
    tech: [
      "HTML",
      "Tailwind CSS",
      "JavaScript",
      "Vue.js",
      "Vuetify",
      "Firebase",
    ],
    icon: <FaVuejs className="text-green-400" />,
    github: "https://github.com/Salem-Team/awn_project",
    link: "https://awon-template.vercel.app/",
    image:
      AwnPlatform,
  },
    {
    id: 2,
    title: "Ella Ecommre",
    category: "vue",
    type: "E-Commerce",
    description:
      "Dynamic eCommerce platform using Vue.js and a third-party API, featuring responsive interface, product listings, shopping cart, and secure payment processing",
    tech: ["HTML", "CSS", "Vuetify", "Vue.js"],
    icon: <FaVuejs className="text-green-400" />,
      link: "https://ella-ecommre.web.app/",
    github: "https://github.com/eslam1abosife/ella-ecommre",
    image:
      EllaEcommre,
  },
 
    {
    id: 3,
    title: "Tamkin Dashboard",
    category: "vue",
    type: "Admin Panel",
    description:
      "Admin dashboard for managing accessibility tools (sign language avatar, screen reader, high contrast, etc.)",
    tech: ["Vue.js", "Node.js", "Express.js", "MongoDB", "Tamkin SDK"],
    icon: <FaVuejs className="text-green-400" />,
    link: "https://tamkin-dashboard-tamkin-dashboard.vercel.app/",
    github: "https://github.com/eslam1abosife/Tamkin-dashboard",
    image: TamkinDashboard,
  },
  {
    id: 4,
    title: "Share Mobile",
    category: "vue",
    type: "Full-Stack",
    description:
      "Full-stack video upload, embed & streaming platform with real-time features",
    tech: ["Vue.js", "Node.js", "Express.js", "MongoDB"],
    icon: <FaVuejs className="text-green-400" />,
    link: "https://share-main.vercel.app/",
    github: "https://github.com/eslam1abosife/share-main",
    image: ShareMobile,
  },
  {
    id: 5,
    title: "Video Player Web",
    category: "vue",
    type: "Media Player",
    description:
      "Custom video player with synchronized subtitles, sign-language translation character, playback speed control, and full accessibility support",
    tech: ["Vue.js", "Video.js", "WebVTT", "Tamkin SDK"],
    icon: <FaVuejs className="text-green-400" />,
    github: "https://github.com/eslam1abosife/player-web",
   
    image:
      TamkinDashboard,
  },
  {
    id: 6,
    title: "Real Estate Website",
    category: "vue",
    type: "Website",
    description: "Real estate platform with property listings",
    tech: ["HTML", "Tailwind CSS", "JavaScript", "Vue.js", "Vuetify"],
    icon: <FaVuejs className="text-green-400" />,
    link: "https://rest-sys-2024.vercel.app/",
    github: "https://github.com/Salem-Team/Real_Estate",
    image: RealEstate,
  },
   {
    id: 7,
    title: "Al Seraj Al Munir",
    category: "vue",
    type: "Educational Platform",
    description:
      "School website for supervisors, students, and parents to track school activities, students' tests, grades, and educational progress",
    tech: ["HTML", "CSS", "Vuetify", "Vue.js", "Firebase", "MongoDB"],
    icon: <FaVuejs className="text-green-400" />,
    link: "https://alseraj-rho.vercel.app/",
    github: "https://github.com/eslam1abosife/alseraj",
    image: AlSerajAlMunir,
  },
 
];
// ==================== Blazor / .NET Projects ====================
export const blazorProjects = [
  {
    id: 0,
    title: "Agent Web Platform",
    category: "blazor",
    type: "Web Application",
    description:
      "Full-stack AI-powered customer service agent with live chat, accessibility features & admin panel, built with Blazor WebAssembly.",
    tech: ["Blazor", "C#", ".NET", "WebAssembly", "ASP.NET Core"],
    icon: <SiDotnet className="text-purple-400" />,
    github: "https://github.com/eslam1abosife/agent-web-main",
    link: "https://agent-web-main.vercel.app/",
    image:
      AgentWebPlatform,
  },
];
// ==================== React.js Projects ====================
export const reactProjects = [
   {
    id: 9,
    title: "Eslam Abosife Profile",
    category: "react",
    type: "Personal Portfolio",
    description: "موقع شخصي واحترافي يعرض الخبرات والمشاريع كمطور ويب متكامل باستخدام React.js و Tailwind CSS.",
    tech: ["React.js", "Vite", "Tailwind CSS", "Framer Motion", "React Router"],
    icon: <FaReact className="text-blue-400" />,
    github: "https://github.com/eslam1abosife/EslamAbosifeProfile",
    link: "https://eslam-abosife-profile-two.vercel.app/", 
    image: Profile,
  },
];

// ==================== HTML & CSS Projects ====================
export const htmlCssProjects = [
  {
    id: 10, // بداية ترقيم جديدة لهذا القسم
    title: "Engaz Company",
    category: "html-css",
    type: "Company Website",
    description: "Professional corporate website for Engaz Software Company, featuring responsive design, services showcase, and modern UI/UX with interactive elements.",
    tech: ["HTML", "CSS", "JavaScript"],
    icon: <FaHtml5 className="text-orange-500" />,
    link: "https://engaz-company-red.vercel.app/",
    github: "https://github.com/eslam1abosife/EngazCompany",
    image: "https://via.placeholder.com/400x200/1e3a8a/ffffff?text=Engaz+Company"
  },
  {
    id: 11,
    title: "Special Design",
    category: "html-css",
    type: "Design",
    description: "Creative design project using HTML, CSS, and JavaScript",
    tech: ["HTML", "CSS", "JavaScript"],
    icon: <FaHtml5 className="text-orange-500" />,
    link: "https://eslam1abosife.github.io/specialdesign/",
    github: "https://github.com/eslam1abosife/specialdesign",
    image: "https://via.placeholder.com/400x200/f97316/ffffff?text=Special+Design",
  },
  {
    id: 12,
    title: "Elzero Template",
    category: "html-css",
    type: "Template",
    description: "Professional HTML/CSS template with modern design",
    tech: ["HTML", "CSS", "JavaScript"],
    icon: <FaCss3Alt className="text-blue-500" />,
    github: "https://github.com/eslam1abosife/Elzero",
    image: "https://via.placeholder.com/400x200/06b6d4/ffffff?text=Elzero+Template",
  },
  {
    id: 13,
    title: "LightCode",
    category: "html-css",
    type: "Portfolio",
    description: "Personal portfolio website with light theme",
    tech: ["HTML", "Tailwind CSS", "JavaScript"],
    icon: <FaCss3Alt className="text-blue-500" />,
    link: "https://eslam1abosife.github.io/LightCode/",
    github: "https://github.com/eslam1abosife/LightCode",
    image: "https://via.placeholder.com/400x200/fbbf24/ffffff?text=LightCode",
  },
  {
    id: 14,
    title: "Dashboard UI",
    category: "html-css",
    type: "Dashboard",
    description: "Admin dashboard UI with dark theme",
    tech: ["HTML", "CSS"],
    icon: <FaHtml5 className="text-orange-500" />,
    github: "https://github.com/eslam1abosife/Dashboard",
    image: "https://via.placeholder.com/400x200/8b5cf6/ffffff?text=Dashboard+UI",
  },
  {
    id: 15,
    title: "Kasper Template",
    category: "html-css",
    type: "Template",
    description: "Creative agency template",
    tech: ["HTML", "CSS"],
    icon: <FaCss3Alt className="text-blue-500" />,
    github: "https://github.com/eslam1abosife/Kasper",
    image: "https://via.placeholder.com/400x200/ef4444/ffffff?text=Kasper+Template",
  },
  {
    id: 16,
    title: "Bondi Template",
    category: "html-css",
    type: "Template",
    description: "Clean and modern business template",
    tech: ["HTML", "CSS", "JavaScript"],
    icon: <FaHtml5 className="text-orange-500" />,
    link: "https://eslam1abosife.github.io/Bondi/",
    github: "https://github.com/eslam1abosife/Bondi",
    image: "https://via.placeholder.com/400x200/3b82f6/ffffff?text=Bondi+Template",
  },
];

// ==================== C++ Projects ====================
// export const cppProjects = [
//   {
//     id: 17,
//     title: "Data Structures Library",
//     category: "cpp",
//     type: "Library",
//     description: "Custom implementation of data structures in C++",
//     tech: ["C++", "Data Structures", "OOP"],
//     icon: <SiCplusplus className="text-blue-500" />,
//     github: "https://github.com/eslamabosife/data-structures-cpp",
//     image:
//       "https://via.placeholder.com/400x200/f59e0b/ffffff?text=Data+Structures",
//   },
//   {
//     id: 18,
//     title: "Algorithm Solutions",
//     category: "cpp",
//     type: "Problem Solving",
//     description: "100+ algorithmic problem solutions from LeetCode, Codeforces",
//     tech: ["C++", "Algorithms", "Problem Solving"],
//     icon: <FaCode className="text-purple-400" />,
//     github: "https://github.com/eslamabosife/algorithm-solutions",
//     image:
//       "https://via.placeholder.com/400x200/10b981/ffffff?text=Algorithm+Solutions",
//   },
//   {
//     id: 19,
//     title: "Sorting Visualizer",
//     category: "cpp",
//     type: "Visualization",
//     description: "Interactive sorting algorithm visualizer with SFML",
//     tech: ["C++", "SFML", "Algorithms"],
//     icon: <SiCplusplus className="text-blue-500" />,
//     github: "https://github.com/eslamabosife/sorting-visualizer",
//     image:
//       "https://via.placeholder.com/400x200/ef4444/ffffff?text=Sorting+Visualizer",
//   },
// ];

// ==================== C++ Challenges (25 مسألة) ====================
export const cppChallenges = [
  // Task 1
  {
    id: 20,
    title: "طباعة الاسم",
    category: "cpp-challenges",
    type: "Challenge",
    description: "طباعة اسم المستخدم باستخدام دالة",
    tech: ["C++", "Functions", "Basic"],
    icon: <SiCplusplus className="text-blue-500" />,
    code: `void PrintName(string Name) {
    cout << "\\n Your Name is : " << Name << endl;
}
// الاستخدام
PrintName("Eslam");`,
    output: "Your Name is : Eslam",
    isChallenge: true,
  },
  // Task 2
  {
    id: 21,
    title: "قراءة وطباعة الاسم",
    category: "cpp-challenges",
    type: "Challenge",
    description: "قراءة اسم المستخدم ثم طباعته",
    tech: ["C++", "Functions", "Input/Output"],
    icon: <SiCplusplus className="text-blue-500" />,
    code: `string ReadName() {
    string Name;
    cout << "Please enter Your name? " << endl;
    getline(cin, Name);
    return Name;
}
void PrintName(string Name) {
    cout << "\\n Your Name is: " << Name << endl;
}
// الاستخدام
PrintName(ReadName());`,
    output: "Your Name is: [user input]",
    isChallenge: true,
  },
  // Task 3
  {
    id: 22,
    title: "التحقق من الزوجي والفردي",
    category: "cpp-challenges",
    type: "Challenge",
    description: "التحقق إذا كان الرقم زوجي أم فردي",
    tech: ["C++", "Enum", "Conditions"],
    icon: <SiCplusplus className="text-blue-500" />,
    code: `enum enNumberType { Odd = 1, Even = 2 };

int ReadNumber() {
    int Num;
    cout << "Please enter a number? " << endl;
    cin >> Num;
    return Num;
}

enNumberType CheckNumberType(int Num) {
    return (Num % 2 == 0) ? enNumberType::Even : enNumberType::Odd;
}

void PrintNumberType(enNumberType NumberType) {
    if (NumberType == enNumberType::Even)
        cout << "\\n Number is Even. \\n";
    else
        cout << "\\n Number is Odd \\n";
}

// الاستخدام
PrintNumberType(CheckNumberType(ReadNumber()));`,
    output: "Number is Even / Number is Odd",
    isChallenge: true,
  },
  // Task 4
  {
    id: 23,
    title: "فحص التوظيف (العمر + رخصة)",
    category: "cpp-challenges",
    type: "Challenge",
    description: "فحص إذا كان المتقدم مؤهل للوظيفة (العمر > 21 ولديه رخصة)",
    tech: ["C++", "Struct", "Conditions"],
    icon: <SiCplusplus className="text-blue-500" />,
    code: `struct stInfo {
    int Age;
    bool HasDrivingLicense;
};

stInfo ReadInfo() {
    stInfo Info;
    cout << "Please Enter Your Age?" << endl;
    cin >> Info.Age;
    cout << "Do you have driver License?" << endl;
    cin >> Info.HasDrivingLicense;
    return Info;
}

bool IsAccepted(stInfo Info) {
    return (Info.Age > 21 && Info.HasDrivingLicense);
}

void PrintResult(stInfo Info) {
    if (IsAccepted(Info))
        cout << "\\n Hired" << endl;
    else
        cout << "\\n Rejected" << endl;
}

// الاستخدام
PrintResult(ReadInfo());`,
    output: "Hired / Rejected",
    isChallenge: true,
  },
  // Task 5
  {
    id: 24,
    title: "فحص التوظيف (مع التوصية)",
    category: "cpp-challenges",
    type: "Challenge",
    description: "فحص التوظيف مع إمكانية التوصية",
    tech: ["C++", "Struct", "Conditions"],
    icon: <SiCplusplus className="text-blue-500" />,
    code: `struct stInfo {
    int Age;
    bool HasDrivingLicense;
    bool HasRecommendation;
};

stInfo ReadInfo() {
    stInfo Info;
    cout << "Please Enter Your Age?" << endl;
    cin >> Info.Age;
    cout << "Do you have driver License?" << endl;
    cin >> Info.HasDrivingLicense;
    cout << "Do you have recommendation?" << endl;
    cin >> Info.HasRecommendation;
    return Info;
}

bool IsAccepted(stInfo Info) {
    if (Info.HasRecommendation) return true;
    return (Info.Age > 21 && Info.HasDrivingLicense);
}

// الاستخدام
PrintResult(ReadInfo());`,
    output: "Hired / Rejected",
    isChallenge: true,
  },
  // Task 6
  {
    id: 25,
    title: "دمج الاسم الأول والأخير",
    category: "cpp-challenges",
    type: "Challenge",
    description: "دمج الاسم الأول والأخير في اسم كامل",
    tech: ["C++", "Struct", "String"],
    icon: <SiCplusplus className="text-blue-500" />,
    code: `struct stInfo {
    string FirstName;
    string LastName;
};

stInfo ReadInfo() {
    stInfo Info;
    cout << "Please Enter Your First Name?" << endl;
    cin >> Info.FirstName;
    cout << "Please Enter Your Last Name?" << endl;
    cin >> Info.LastName;
    return Info;
}

string GetFullName(stInfo Info) {
    return Info.FirstName + " " + Info.LastName;
}

// الاستخدام
PrintFullName(GetFullName(ReadInfo()));`,
    output: "Your full name is: [First] [Last]",
    isChallenge: true,
  },
  // Task 7
  {
    id: 26,
    title: "حساب نصف الرقم",
    category: "cpp-challenges",
    type: "Challenge",
    description: "حساب نصف الرقم المدخل",
    tech: ["C++", "Functions", "Math"],
    icon: <SiCplusplus className="text-blue-500" />,
    code: `int ReadNumber() {
    int Num;
    cout << "Please enter a Number? " << endl;
    cin >> Num;
    return Num;
}

float CalculateHalfNumber(int Num) {
    return (float) Num / 2;
}

void PrintResults(int Num) {
    cout << endl << "Half of " << Num << " is " << CalculateHalfNumber(Num) << endl;
}

// الاستخدام
PrintResults(ReadNumber());`,
    output: "Half of [num] is [result]",
    isChallenge: true,
  },
  // Task 8
  {
    id: 27,
    title: "التحقق من النجاح والرسوب (علامة)",
    category: "cpp-challenges",
    type: "Challenge",
    description: "التحقق إذا كانت العلامة 50 فأكثر = نجاح",
    tech: ["C++", "Enum", "Conditions"],
    icon: <SiCplusplus className="text-blue-500" />,
    code: `enum enPassFail { Pass = 1, Fail = 2 };

int ReadMark() {
    int Mark;
    cout << "Please enter a Mark? " << endl;
    cin >> Mark;
    return Mark;
}

enPassFail CheckMark(int Mark) {
    return (Mark >= 50) ? enPassFail::Pass : enPassFail::Fail;
}

void PrintResults(int Mark) {
    if (CheckMark(Mark) == enPassFail::Pass)
        cout << "\\n You Passed" << endl;
    else
        cout << "\\n You Failed" << endl;
}

// الاستخدام
PrintResults(ReadMark());`,
    output: "You Passed / You Failed",
    isChallenge: true,
  },
  // Task 9
  {
    id: 28,
    title: "جمع 3 أرقام",
    category: "cpp-challenges",
    type: "Challenge",
    description: "جمع 3 أرقام مدخلة من المستخدم",
    tech: ["C++", "Functions", "Math"],
    icon: <SiCplusplus className="text-blue-500" />,
    code: `void ReadNumbers(int& Num1, int& Num2, int& Num3) {
    cout << "Please enter Number 1? " << endl;
    cin >> Num1;
    cout << "Please enter Number 2? " << endl;
    cin >> Num2;
    cout << "Please enter Number 3? " << endl;
    cin >> Num3;
}

int SumOf3Numbers(int Num1, int Num2, int Num3) {
    return Num1 + Num2 + Num3;
}

void PrintResults(int Total) {
    cout << "\\n The total sum is: " << Total << endl;
}

// الاستخدام
int n1,n2,n3;
ReadNumbers(n1,n2,n3);
PrintResults(SumOf3Numbers(n1,n2,n3));`,
    output: "The total sum is: [result]",
    isChallenge: true,
  },
  // Task 10
  {
    id: 29,
    title: "حساب متوسط 3 علامات",
    category: "cpp-challenges",
    type: "Challenge",
    description: "حساب متوسط 3 علامات مدخلة",
    tech: ["C++", "Functions", "Math"],
    icon: <SiCplusplus className="text-blue-500" />,
    code: `void ReadNumbers(int& Mark1, int& Mark2, int& Mark3) {
    cout << "Please enter Mark 1? " << endl;
    cin >> Mark1;
    cout << "Please enter Mark 2? " << endl;
    cin >> Mark2;
    cout << "Please enter Mark 3? " << endl;
    cin >> Mark3;
}

float CalculateAverage(int Mark1, int Mark2, int Mark3) {
    return (float)(Mark1 + Mark2 + Mark3) / 3;
}

void PrintResults(float Average) {
    cout << "\\n The Average is: " << Average << endl;
}

// الاستخدام
int m1,m2,m3;
ReadNumbers(m1,m2,m3);
PrintResults(CalculateAverage(m1,m2,m3));`,
    output: "The Average is: [result]",
    isChallenge: true,
  },
  // Task 11
  {
    id: 30,
    title: "المتوسط + نجاح/رسوب",
    category: "cpp-challenges",
    type: "Challenge",
    description: "حساب المتوسط والتحقق من النجاح (>= 50)",
    tech: ["C++", "Enum", "Math"],
    icon: <SiCplusplus className="text-blue-500" />,
    code: `enum enPassFail { Pass = 1, Fail = 2 };

float CalculateAverage(int Mark1, int Mark2, int Mark3) {
    return (float)(Mark1 + Mark2 + Mark3) / 3;
}

enPassFail CheckAverage(float Average) {
    return (Average >= 50) ? enPassFail::Pass : enPassFail::Fail;
}

void PrintResults(float Average) {
    cout << "\\n The Average is: " << Average << endl;
    if (CheckAverage(Average) == enPassFail::Pass)
        cout << "\\n You Passed" << endl;
    else
        cout << "\\n You Failed" << endl;
}

// الاستخدام
int m1,m2,m3;
ReadNumbers(m1,m2,m3);
PrintResults(CalculateAverage(m1,m2,m3));`,
    output: "The Average is: [result]\nYou Passed/Failed",
    isChallenge: true,
  },
  // Task 12
  {
    id: 31,
    title: "إيجاد أكبر رقمين",
    category: "cpp-challenges",
    type: "Challenge",
    description: "إيجاد أكبر رقم من رقمين مدخلين",
    tech: ["C++", "Functions", "Conditions"],
    icon: <SiCplusplus className="text-blue-500" />,
    code: `int MaxOf2Numbers(int Num1, int Num2) {
    return (Num1 > Num2) ? Num1 : Num2;
}

void PrintResults(int Max) {
    cout << "\\n The Maximum Number is: " << Max << endl;
}

// الاستخدام
int n1,n2;
ReadNumbers(n1,n2);
PrintResults(MaxOf2Numbers(n1,n2));`,
    output: "The Maximum Number is: [result]",
    isChallenge: true,
  },
  // Task 13
  {
    id: 32,
    title: "إيجاد أكبر 3 أرقام",
    category: "cpp-challenges",
    type: "Challenge",
    description: "إيجاد أكبر رقم من 3 أرقام مدخلة",
    tech: ["C++", "Functions", "Conditions"],
    icon: <SiCplusplus className="text-blue-500" />,
    code: `int MaxOf3Numbers(int Num1, int Num2, int Num3) {
    if (Num1 > Num2 && Num1 > Num3) return Num1;
    else if(Num2 > Num3) return Num2;
    else return Num3;
}

// الاستخدام
int n1,n2,n3;
ReadNumbers(n1,n2,n3);
PrintResults(MaxOf3Numbers(n1,n2,n3));`,
    output: "The Maximum Number is: [result]",
    isChallenge: true,
  },
  // Task 14
  {
    id: 33,
    title: "تبديل رقمين",
    category: "cpp-challenges",
    type: "Challenge",
    description: "تبديل قيمة رقمين باستخدام متغير مؤقت",
    tech: ["C++", "Functions", "Swap"],
    icon: <SiCplusplus className="text-blue-500" />,
    code: `void Swap(int& A, int& B) {
    int Temp = A;
    A = B;
    B = Temp;
}

void PrintNumbers(int Num1, int Num2) {
    cout << "\\n Number1 = " << Num1 << endl;
    cout << " Number2 = " << Num2 << endl;
}

// الاستخدام
int n1,n2;
ReadNumbers(n1,n2);
Swap(n1,n2);
PrintNumbers(n1,n2);`,
    output: "Number1 = [B]\nNumber2 = [A]",
    isChallenge: true,
  },
  // Task 15
  {
    id: 34,
    title: "مساحة المستطيل",
    category: "cpp-challenges",
    type: "Challenge",
    description: "حساب مساحة المستطيل (الطول × العرض)",
    tech: ["C++", "Functions", "Math"],
    icon: <SiCplusplus className="text-blue-500" />,
    code: `float CalculateRectangleArea(float A, float B) {
    return A * B;
}

// الاستخدام
float A,B;
ReadNumbers(A,B);
PrintResult(CalculateRectangleArea(A,B));`,
    output: "Rectangle Area = [result]",
    isChallenge: true,
  },
  // Task 16
  {
    id: 35,
    title: "مساحة المستطيل (الضلع + القطر)",
    category: "cpp-challenges",
    type: "Challenge",
    description: "حساب مساحة المستطيل باستخدام الضلع والقطر",
    tech: ["C++", "Functions", "Math", "cmath"],
    icon: <SiCplusplus className="text-blue-500" />,
    code: `#include <cmath>

float RectangleAreaBySideAndDiagonal(float A, float D) {
    return A * sqrt(pow(D, 2) - pow(A, 2));
}

// الاستخدام
float A,D;
ReadNumbers(A,D);
PrintResult(RectangleAreaBySideAndDiagonal(A,D));`,
    output: "Rectangle Area = [result]",
    isChallenge: true,
  },
  // Task 17
  {
    id: 36,
    title: "مساحة المثلث",
    category: "cpp-challenges",
    type: "Challenge",
    description: "حساب مساحة المثلث (القاعدة × الارتفاع ÷ 2)",
    tech: ["C++", "Functions", "Math"],
    icon: <SiCplusplus className="text-blue-500" />,
    code: `float TriangleArea(float A, float H) {
    return (A / 2) * H;
}

// الاستخدام
float A,H;
ReadNumbers(A,H);
PrintResult(TriangleArea(A,H));`,
    output: "Triangle Area = [result]",
    isChallenge: true,
  },
  // Task 18
  {
    id: 37,
    title: "مساحة الدائرة (نصف القطر)",
    category: "cpp-challenges",
    type: "Challenge",
    description: "حساب مساحة الدائرة باستخدام نصف القطر",
    tech: ["C++", "Functions", "Math", "cmath"],
    icon: <SiCplusplus className="text-blue-500" />,
    code: `#include <cmath>

float CircleArea(float R) {
    const float PI = 3.14;
    return pow(R, 2) * PI;
}

// الاستخدام
PrintResult(CircleArea(ReadRadious()));`,
    output: "Circle Area = [result]",
    isChallenge: true,
  },
  // Task 19
  {
    id: 38,
    title: "مساحة الدائرة (القطر)",
    category: "cpp-challenges",
    type: "Challenge",
    description: "حساب مساحة الدائرة باستخدام القطر",
    tech: ["C++", "Functions", "Math", "cmath"],
    icon: <SiCplusplus className="text-blue-500" />,
    code: `#include <cmath>

float CircleAreaByDiameter(float D) {
    const float PI = 3.141592653589793238;
    return (pow(D, 2) * PI) / 4;
}

// الاستخدام
PrintResult(CircleAreaByDiameter(ReadDiameter()));`,
    output: "Circle Area = [result]",
    isChallenge: true,
  },
  // Task 20
  {
    id: 39,
    title: "مساحة الدائرة المحاطة بمربع",
    category: "cpp-challenges",
    type: "Challenge",
    description: "حساب مساحة الدائرة المحاطة بمربع",
    tech: ["C++", "Functions", "Math", "cmath"],
    icon: <SiCplusplus className="text-blue-500" />,
    code: `#include <cmath>

float CircleAreaInscribedInSquare(float A) {
    const float PI = 3.141592653589793238;
    return (PI * pow(A, 2)) / 4;
}

// الاستخدام
PrintResult(CircleAreaInscribedInSquare(ReadSquareSide()));`,
    output: "Circle Area = [result]",
    isChallenge: true,
  },
  // Task 21
  {
    id: 40,
    title: "مساحة الدائرة (المحيط)",
    category: "cpp-challenges",
    type: "Challenge",
    description: "حساب مساحة الدائرة باستخدام المحيط",
    tech: ["C++", "Functions", "Math", "cmath"],
    icon: <SiCplusplus className="text-blue-500" />,
    code: `#include <cmath>

float CircleAreaByCircumference(float L) {
    const float PI = 3.141592653589793238;
    return pow(L, 2) / (4 * PI);
}

// الاستخدام
PrintResult(CircleAreaByCircumference(ReadCircumference()));`,
    output: "Circle Area = [result]",
    isChallenge: true,
  },
  // Task 22
  {
    id: 41,
    title: "مساحة الدائرة (مثلث متساوي الساقين)",
    category: "cpp-challenges",
    type: "Challenge",
    description: "حساب مساحة الدائرة المحاطة بمثلث متساوي الساقين",
    tech: ["C++", "Functions", "Math", "cmath"],
    icon: <SiCplusplus className="text-blue-500" />,
    code: `#include <cmath>

float CircleAreaByTriangle(float A, float B) {
    const float PI = 3.141592653589793238;
    return PI * (pow(B, 2) / 4) * ((2 * A - B) / (2 * A + B));
}

// الاستخدام
float A,B;
ReadTriangleData(A,B);
PrintResult(CircleAreaByTriangle(A,B));`,
    output: "Circle Area = [result]",
    isChallenge: true,
  },
  // Task 23
  {
    id: 42,
    title: "مساحة الدائرة (مثلث عام)",
    category: "cpp-challenges",
    type: "Challenge",
    description: "حساب مساحة الدائرة المحاطة بمثلث عام",
    tech: ["C++", "Functions", "Math", "cmath"],
    icon: <SiCplusplus className="text-blue-500" />,
    code: `#include <cmath>

float CircleAreaByTriangle(float A, float B, float C) {
    const float PI = 3.141592653589793238;
    float P = (A + B + C) / 2;
    float T = (A * B * C) / (4 * sqrt(P * (P - A) * (P - B) * (P - C)));
    return PI * pow(T, 2);
}

// الاستخدام
float A,B,C;
ReadTriangleData(A,B,C);
PrintResult(CircleAreaByTriangle(A,B,C));`,
    output: "Circle Area = [result]",
    isChallenge: true,
  },
  // Task 24
  {
    id: 43,
    title: "التحقق من العمر في النطاق",
    category: "cpp-challenges",
    type: "Challenge",
    description: "التحقق إذا كان العمر بين 18 و 45",
    tech: ["C++", "Functions", "Conditions"],
    icon: <SiCplusplus className="text-blue-500" />,
    code: `bool ValidateNumberInRange(int Number, int From, int To) {
    return (Number >= From && Number <= To);
}

void PrintResult(int Age) {
    if (ValidateNumberInRange(Age, 18, 45))
        cout << Age << " is a valid age \\n";
    else
        cout << Age << " is an invalid age \\n";
}

// الاستخدام
PrintResult(ReadAge());`,
    output: "Age is a valid/invalid age",
    isChallenge: true,
  },
  // Task 25
  {
    id: 44,
    title: "قراءة العمر حتى يصبح صحيحاً",
    category: "cpp-challenges",
    type: "Challenge",
    description: "قراءة العمر بشكل متكرر حتى يصبح بين 18 و 45",
    tech: ["C++", "Functions", "Loops", "Do-While"],
    icon: <SiCplusplus className="text-blue-500" />,
    code: `int ReadAge() {
    int Age;
    cout << "Please enter Your Age between 18 and 45? " << endl;
    cin >> Age;
    return Age;
}

bool ValidateNumberInRange(int Number, int From, int To) {
    return (Number >= From && Number <= To);
}

int ReadUntilAgeBetween(int From, int To) {
    int Age = 0;
    do {
        Age = ReadAge();
    } while (!ValidateNumberInRange(Age, From, To));
    return Age;
}

void PrintResult(int Age) {
    cout << Age << " is a valid age \\n";
}

// الاستخدام
PrintResult(ReadUntilAgeBetween(18, 45));`,
    output: "Age is a valid age",
    isChallenge: true,
  },
];

// ==================== JavaScript Challenges (50 مسألة) ====================
export const jsChallenges = [
  // 1
  {
    id: 45,
    title: "استخراج اسم الملف والامتداد",
    category: "js",
    type: "Challenge",
    description: "استخراج اسم الملف والامتداد من مسار ملف",
    tech: ["JavaScript", "String", "Split"],
    icon: <FaJs className="text-yellow-400" />,
    code: `let fileName = "Elzero.php";
console.log(fileName.split(".")[0]); // Elzero
console.log(fileName.split(".")[1]); // php`,
    output: "Elzero\nphp",
    isChallenge: true,
  },
  // 2
  {
    id: 46,
    title: "تكرار النص",
    category: "js",
    type: "Challenge",
    description: "تكرار النص عدد محدد من المرات",
    tech: ["JavaScript", "String", "Loop"],
    icon: <FaJs className="text-yellow-400" />,
    code: `function elzeroRepeat() {
  let str = "Elzero ";
  let repeatCount = 3;
  let repeatedStr = "";
  for (let i = 0; i < repeatCount; i++) {
    repeatedStr += str;
  }
  return repeatedStr;
}
console.log(elzeroRepeat()); // Elzero Elzero Elzero`,
    output: "Elzero Elzero Elzero",
    isChallenge: true,
  },
  // 3
  {
    id: 47,
    title: "تنسيق الأرقام بالفاصلات",
    category: "js",
    type: "Challenge",
    description: "تحويل رقم إلى صيغة مفصولة بفواصل",
    tech: ["JavaScript", "Number", "Formatting"],
    icon: <FaJs className="text-yellow-400" />,
    code: `let myMoney = 5301503206;
let arr = myMoney.toString().split("");
let rgh = /\\d{3}/gi;
let arr2 = [arr.slice(1).join("").match(rgh).join(",")];
console.log(arr.shift() + "," + arr2.join("")); // 5,301,503,206`,
    output: "5,301,503,206",
    isChallenge: true,
  },
  // 4
  {
    id: 48,
    title: "تصفية الأسماء المتشابهة",
    category: "js",
    type: "Challenge",
    description: "تصفية الأسماء التي تبدأ وتنتهي بنفس الحرف",
    tech: ["JavaScript", "Array", "Filter"],
    icon: <FaJs className="text-yellow-400" />,
    code: `let names = ["Osso", "Aola", "Essa", "Igaa", "Daad", "Roor"];
let result = [];
names.filter((name) => {
  if (name.split("")[0].toUpperCase() === 
      name.split("")[name.length - 1].toUpperCase()) {
    result.push(name);
  }
});
console.log(result); // ['Osso', 'Aola', 'Daad', 'Roor']`,
    output: "['Osso', 'Aola', 'Daad', 'Roor']",
    isChallenge: true,
  },
  // 5
  {
    id: 49,
    title: "استخراج الحروف من النص",
    category: "js",
    type: "Challenge",
    description: "استخراج الحروف من النص بطرق مختلفة",
    tech: ["JavaScript", "String", "Slice"],
    icon: <FaJs className="text-yellow-400" />,
    code: `let theName = "Elzero";
console.log(theName.split("").shift() + theName.split("").pop()); // Eo
console.log(theName.slice(1, theName.length - 1)); // lzer
console.log(theName.slice(2, theName.length - 2)); // ze`,
    output: "Eo\nlzer\nze",
    isChallenge: true,
  },
  // 6
  {
    id: 50,
    title: "تكرار الحروف بقواعد محددة",
    category: "js",
    type: "Challenge",
    description: "تكرار كل حرف بعدد محدد حسب موقعه",
    tech: ["JavaScript", "String", "Loop"],
    icon: <FaJs className="text-yellow-400" />,
    code: `function repeatWithRules(word) {
  let result = [];
  word.split("").map((wod, index) => {
    if (index === 0) result.push(wod);
    else if (index === 1) result.push(wod.repeat(2));
    else if (index === 2) result.push(wod.repeat(3));
    else if (index === 3) result.push(wod.repeat(4));
    else if (index === 4) result.push(wod.repeat(5));
    else if (index === 5) result.push(wod.repeat(6));
  });
  return result.join("");
}
console.log(repeatWithRules("Elzero")); // Ellzzzeeeerrrrroooooo`,
    output: "Ellzzzeeeerrrrroooooo",
    isChallenge: true,
  },
  // 7
  {
    id: 51,
    title: "دمج الكلمات مع حذف آخر حرف",
    category: "js",
    type: "Challenge",
    description: "دمج الكلمات مع حذف آخر حرف من كل كلمة",
    tech: ["JavaScript", "Array", "String"],
    icon: <FaJs className="text-yellow-400" />,
    code: `function concatenateWithoutLast(words) {
  let result = [];
  words.map((word) => {
    if (word.length > 1) {
      word = word.slice(0, word.length - 1);
    }
    result.push(word);
  });
  return result.join(" ");
}
console.log(concatenateWithoutLast(["Elzeros", "Webd", "Schoold"])); // Elzero Web School`,
    output: "Elzero Web School",
    isChallenge: true,
  },
  // 8
  {
    id: 52,
    title: "استخراج الأحرف من البداية والنهاية",
    category: "js",
    type: "Challenge",
    description: "استخراج عدد محدد من الأحرف من البداية والنهاية",
    tech: ["JavaScript", "String", "Slice"],
    icon: <FaJs className="text-yellow-400" />,
    code: `function getCharacters(word, nums) {
  let result = word.split("");
  return result.slice(0, nums).join("") + result.slice(-nums).join("");
}
console.log(getCharacters("Elzero School", 2)); // Elol
console.log(getCharacters("Elzero School", 3)); // Elzool`,
    output: "Elol\nElzool",
    isChallenge: true,
  },
  // 9
  {
    id: 53,
    title: "تنسيق الأسماء بالحروف الأولى",
    category: "js",
    type: "Challenge",
    description: "استخراج الحروف الأولى من الأسماء وتنسيقها",
    tech: ["JavaScript", "String", "Format"],
    icon: <FaJs className="text-yellow-400" />,
    code: `function formatName(theName) {
  let result = [];
  theName.split(" ").map((name) => {
    result.push(name[0]);
  });
  return result.join("").split("").map((wod, index) => {
    if (index === 0) return wod.toUpperCase();
    else return wod.toLowerCase();
  }).join(".");
}
console.log(formatName("Osama Elzero")); // O.e
console.log(formatName("Elzero Web School")); // E.w.s`,
    output: "O.e\nE.w.s",
    isChallenge: true,
  },
  // 10
  {
    id: 54,
    title: "تحويل أول حرف لكبير - 7 طرق",
    category: "js",
    type: "Challenge",
    description: "تحويل أول حرف من النص إلى حرف كبير بطرق مختلفة",
    tech: ["JavaScript", "String", "Case"],
    icon: <FaJs className="text-yellow-400" />,
    code: `let st = "elzero";
console.log(st[0].toUpperCase() + st.substring(1).toLowerCase()); // Elzero
console.log(st.split("").shift().toUpperCase() + st.slice(1)); // Elzero
console.log(st.slice(0, 1).toUpperCase() + st.slice(1)); // Elzero
console.log(st.substring(0, 1).toUpperCase() + st.slice(1)); // Elzero
console.log(st.split("").sort()[0].toUpperCase() + st.slice(1)); // Elzero
console.log(st.split("").map((s, i) => i === 0 ? s.toUpperCase() : s.toLowerCase()).join("")); // Elzero
console.log(st[0].toUpperCase() + st.substring(1).toLowerCase()); // Elzero`,
    output: "Elzero (7 ways)",
    isChallenge: true,
  },
  // 11
  {
    id: 55,
    title: "إعادة ترتيب النص",
    category: "js",
    type: "Challenge",
    description: "إعادة ترتيب النص إلى الصيغة المطلوبة",
    tech: ["JavaScript", "String", "Slice"],
    icon: <FaJs className="text-yellow-400" />,
    code: `let st = "Web SchoolElzero ";
console.log(st.slice(-7) + st.slice(-18, -13) + st.slice(-13, -7)); // Elzero Web School`,
    output: "Elzero Web School",
    isChallenge: true,
  },
  // 12
  {
    id: 56,
    title: "إضافة El قبل النص",
    category: "js",
    type: "Challenge",
    description: "إضافة El قبل النص إذا لم يكن موجوداً",
    tech: ["JavaScript", "String", "Condition"],
    icon: <FaJs className="text-yellow-400" />,
    code: `function addEl(str) {
  let arr = Array.from(str);
  if (str === "") return arr.concat('""').join();
  else if (arr.join("").startsWith("El")) return str;
  else return "El" + arr.join("");
}
console.log(addEl("")); // ""
console.log(addEl("Elzero")); // Elzero
console.log(addEl("zero")); // Elzero`,
    output: '""\nElzero\nElzero',
    isChallenge: true,
  },
  // 13
  {
    id: 57,
    title: "استخراج آخر حرف - 6 طرق",
    category: "js",
    type: "Challenge",
    description: "استخراج آخر حرف من النص بطرق متعددة",
    tech: ["JavaScript", "String", "Extract"],
    icon: <FaJs className="text-yellow-400" />,
    code: `let st = "Elzero";
console.log(st.slice(-1)); // o
console.log(st.substring(5)); // o
console.log(st.substr(-1)); // o
console.log(st.charAt(5)); // o
console.log(st.split("").pop()); // o
console.log(st.split("")[5]); // o`,
    output: "o (6 ways)",
    isChallenge: true,
  },
  // 14
  {
    id: 58,
    title: "استخراج آخر رقم",
    category: "js",
    type: "Challenge",
    description: "استخراج آخر رقم من العدد",
    tech: ["JavaScript", "Number", "Extract"],
    icon: <FaJs className="text-yellow-400" />,
    code: `function getLastDigit(num) {
  return +num.toString().split("").pop();
}
console.log(getLastDigit(1)); // 1
console.log(getLastDigit(18)); // 8
console.log(getLastDigit(305)); // 5`,
    output: "1\n8\n5",
    isChallenge: true,
  },
  // 15
  {
    id: 59,
    title: "إزالة الحروف الأولى",
    category: "js",
    type: "Challenge",
    description: "إزالة الحروف الأولى من النصوص ودمجها",
    tech: ["JavaScript", "String", "Replace"],
    icon: <FaJs className="text-yellow-400" />,
    code: `let str1 = "AElzero";
let str2 = "ZAcademy";
let rh1 = str1.replace("A", "");
let rh2 = str2.replace("Z", " ");
console.log(rh1, rh2); // Elzero Academy`,
    output: "Elzero Academy",
    isChallenge: true,
  },
  // 16
  {
    id: 60,
    title: "عكس النص مع الاحتفاظ بالحروف الأولى",
    category: "js",
    type: "Challenge",
    description: "عكس النص مع الاحتفاظ بالحروف الأولى",
    tech: ["JavaScript", "String", "Reverse"],
    icon: <FaJs className="text-yellow-400" />,
    code: `function reversing(str) {
  return str.split(" ").map((chr) => {
    return chr[0] + chr[1] + chr.split("").splice(2, 5).reverse().join("");
  }).join(", ");
}
console.log(reversing(",@Hello, E@lzero")); // ,@olleH, E@orezl`,
    output: ",@olleH, E@orezl",
    isChallenge: true,
  },
  // 17
  {
    id: 61,
    title: "وضع شرطة بين الأرقام الفردية",
    category: "js",
    type: "Challenge",
    description: "وضع شرطة بين الأرقام الفردية المتتالية",
    tech: ["JavaScript", "Number", "Format"],
    icon: <FaJs className="text-yellow-400" />,
    code: `function dashBetweenOdd(num) {
  return num.toString().split("").reduce((acc, cur, index) => {
    if (+acc % 2 !== 0 && +cur % 2 !== 0) {
      return acc + "-" + cur;
    } else {
      return acc + cur;
    }
  });
}
console.log(dashBetweenOdd(150653127)); // 1-5065-3-127`,
    output: "1-5065-3-127",
    isChallenge: true,
  },
  // 18
  {
    id: 62,
    title: "إزالة التكرار من المصفوفة",
    category: "js",
    type: "Challenge",
    description: "إزالة العناصر المكررة من المصفوفة",
    tech: ["JavaScript", "Array", "Unique"],
    icon: <FaJs className="text-yellow-400" />,
    code: `let myArr = [10, 10, 20, 20, 10, 30, 50, 20, 10];
console.log([...new Set(myArr)]); // [10, 20, 30, 50]
console.log(myArr.filter((el, i) => myArr.indexOf(el) === i)); // [10, 20, 30, 50]`,
    output: "[10, 20, 30, 50]",
    isChallenge: true,
  },
  // 19
  {
    id: 63,
    title: "تحويل ASCII إلى نص",
    category: "js",
    type: "Challenge",
    description: "تحويل أرقام ASCII إلى نص",
    tech: ["JavaScript", "ASCII", "Convert"],
    icon: <FaJs className="text-yellow-400" />,
    code: `let myArr = ["69", "108", "122", "101", "114", "111"];
let result = String.fromCharCode(myArr[0]) + 
             String.fromCharCode(myArr[1]) + 
             String.fromCharCode(myArr[2]) + 
             String.fromCharCode(myArr[3]) + 
             String.fromCharCode(myArr[4]) + 
             String.fromCharCode(myArr[5]);
console.log(result); // Elzero`,
    output: "Elzero",
    isChallenge: true,
  },
  // 20
  {
    id: 64,
    title: "دمج المصفوفات وترتيبها",
    category: "js",
    type: "Challenge",
    description: "دمج المصفوفات وترتيب الأرقام",
    tech: ["JavaScript", "Array", "Merge"],
    icon: <FaJs className="text-yellow-400" />,
    code: `function customMerge(...arr) {
  return arr.reduce((a, b) => [
    ...a.map((ele) => +ele),
    ...b.map((ele) => +ele)
  ]);
}
console.log(customMerge([10, 20, "30"], [100, "50", 20], [90, 20, "40"]));
// [10, 10, 20, 20, 20, 30, 40, 50, 90, 100]`,
    output: "[10, 10, 20, 20, 20, 30, 40, 50, 90, 100]",
    isChallenge: true,
  },
  // 21
  {
    id: 65,
    title: "حساب معقد مع التصفية",
    category: "js",
    type: "Challenge",
    description: "تصفية الأرقام ثم إجراء عملية حسابية",
    tech: ["JavaScript", "Array", "Calculate"],
    icon: <FaJs className="text-yellow-400" />,
    code: `function customCalc(...nums) {
  let result = nums.filter((ele) => parseInt(ele))
                   .map((ele) => +ele)
                   .reduce((acc, ele) => acc + ele);
  return result * nums[0] * nums[nums.length - 1];
}
console.log(customCalc("10", 20, "A", "40", 15)); // 12750`,
    output: "12750",
    isChallenge: true,
  },
  // 22
  {
    id: 66,
    title: "تنظيف النص من الرموز",
    category: "js",
    type: "Challenge",
    description: "تنظيف النص من الرموز غير المرغوب فيها",
    tech: ["JavaScript", "String", "Clean"],
    icon: <FaJs className="text-yellow-400" />,
    code: `let myString = "Hello Elzero Web School @ We Love Programming@ @#!@#$%%^&*";
console.log(myString.split("g@")[0]); // Hello Elzero Web School @ We Love Programming`,
    output: "Hello Elzero Web School @ We Love Programming",
    isChallenge: true,
  },
  // 23
  {
    id: 67,
    title: "طباعة الأرقام بفواصل 10 خطوات",
    category: "js",
    type: "Challenge",
    description: "طباعة الأرقام بفواصل 10 خطوات",
    tech: ["JavaScript", "Loop", "Pattern"],
    icon: <FaJs className="text-yellow-400" />,
    code: `for (let i = 1; i < 100; i += 5) {
  console.log(i);
  i += 5;
}`,
    output: "1, 11, 21, 31, 41, 51, 61, 71, 81, 91",
    isChallenge: true,
  },
  // 24
  {
    id: 68,
    title: "نسخ المصفوفة - 7 طرق",
    category: "js",
    type: "Challenge",
    description: "نسخ المصفوفة بطرق متعددة",
    tech: ["JavaScript", "Array", "Clone"],
    icon: <FaJs className="text-yellow-400" />,
    code: `let myArray = [100, 200, 300, 400];
let clonedArray = [...myArray];
// أو Array.from(myArray) أو myArray.slice()
console.log(clonedArray); // [100, 200, 300, 400]`,
    output: "[100, 200, 300, 400]",
    isChallenge: true,
  },
  // 25
  {
    id: 69,
    title: "تحويل النص إلى رقم - 6 طرق",
    category: "js",
    type: "Challenge",
    description: "تحويل النص إلى رقم بطرق مختلفة",
    tech: ["JavaScript", "Convert", "Number"],
    icon: <FaJs className="text-yellow-400" />,
    code: `let strNumber = "10";
console.log(parseInt(strNumber)); // 10
console.log(+strNumber); // 10
console.log(Number(strNumber)); // 10
console.log(strNumber * 1); // 10
console.log(strNumber - 0); // 10
console.log(strNumber / 1); // 10`,
    output: "10 (6 ways)",
    isChallenge: true,
  },
  // 26
  {
    id: 70,
    title: "إزالة التكرار بطرق مختلفة",
    category: "js",
    type: "Challenge",
    description: "إزالة العناصر المكررة من المصفوفة",
    tech: ["JavaScript", "Array", "Unique"],
    icon: <FaJs className="text-yellow-400" />,
    code: `let arr = [1, 1, 1, 2, 3, 4, 3];
let uniqueElements = [...new Set([...arr])];
console.log(uniqueElements); // [1, 2, 3, 4]`,
    output: "[1, 2, 3, 4]",
    isChallenge: true,
  },
  // 27
  {
    id: 71,
    title: "إنشاء رقم سري عشوائي",
    category: "js",
    type: "Challenge",
    description: "إنشاء رقم سري عشوائي بطول 20 حرف",
    tech: ["JavaScript", "Random", "String"],
    icon: <FaJs className="text-yellow-400" />,
    code: `function serial() {
  var chars = "1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
  var serialLength = 20;
  var serial = "";
  for (var i = 0; i < serialLength; i++) {
    serial += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return serial;
}
console.log(serial()); // Random 20 chars`,
    output: "Random 20 characters",
    isChallenge: true,
  },
  // 28
  {
    id: 72,
    title: "إنشاء الحروف الصغيرة من a إلى z",
    category: "js",
    type: "Challenge",
    description: "إنشاء جميع الحروف الصغيرة من a إلى z",
    tech: ["JavaScript", "String", "Range"],
    icon: <FaJs className="text-yellow-400" />,
    code: `let smallLetters = String.fromCharCode(...Array(123).keys()).slice(97);
console.log(smallLetters); // abcdefghijklmnopqrstuvwxyz`,
    output: "abcdefghijklmnopqrstuvwxyz",
    isChallenge: true,
  },
  // 29
  {
    id: 73,
    title: "مقارنة الأرقام بـ Ternary",
    category: "js",
    type: "Challenge",
    description: "مقارنة رقمين باستخدام Ternary Operator",
    tech: ["JavaScript", "Condition", "Ternary"],
    icon: <FaJs className="text-yellow-400" />,
    code: `let numOne = 100;
let numTwo = 200;
numOne > numTwo ? console.log("1st > 2nd") : 
numOne < numTwo ? console.log("1st < 2nd") : 
console.log("1st = 2nd"); // 1st < 2nd`,
    output: "1st < 2nd",
    isChallenge: true,
  },
  // 30
  {
    id: 74,
    title: "تحويل النص إلى تنسيق جميل",
    category: "js",
    type: "Challenge",
    description: "تحويل كل كلمة إلى أول حرف كبير",
    tech: ["JavaScript", "String", "Format"],
    icon: <FaJs className="text-yellow-400" />,
    code: `let str = "i lovE elzeRO weB schOOL";
let result = str.split(" ").map((ele) => 
  ele[0].toUpperCase() + ele.slice(1).toLowerCase()
).join(" ");
console.log(result); // I Love Elzero Web School`,
    output: "I Love Elzero Web School",
    isChallenge: true,
  },
  // 31
  {
    id: 75,
    title: "إضافة وحذف من المصفوفة",
    category: "js",
    type: "Challenge",
    description: "إضافة وحذف عنصر من المصفوفة",
    tech: ["JavaScript", "Array", "Push", "Pop"],
    icon: <FaJs className="text-yellow-400" />,
    code: `let myData = ["Osama", "Mohamed", "Elsayed", "Elzero"];
myData.push("Name");
myData.pop();
console.log(myData); // ['Osama', 'Mohamed', 'Elsayed', 'Elzero']`,
    output: "['Osama', 'Mohamed', 'Elsayed', 'Elzero']",
    isChallenge: true,
  },
  // 32
  {
    id: 76,
    title: "التحقق من الأرقام في النطاق",
    category: "js",
    type: "Challenge",
    description: "التحقق إذا كانت جميع الأرقام في نطاق معين",
    tech: ["JavaScript", "Condition", "Range"],
    icon: <FaJs className="text-yellow-400" />,
    code: `function checkRange(n1, n2, n3, n4, n5) {
  let range = { min: Math.min(n4, n5), max: Math.max(n4, n5) };
  if (n1 >= range.min && n1 <= range.max && 
      n2 >= range.min && n2 <= range.max && 
      n3 >= range.min && n3 <= range.max) {
    return "Yes All Numbers In Range";
  } else {
    return "No All Numbers In Range";
  }
}
console.log(checkRange(5, 10, 15, 5, 50)); // Yes All Numbers In Range`,
    output: "Yes All Numbers In Range",
    isChallenge: true,
  },
  // 33
  {
    id: 77,
    title: "إضافة وحذف خاصية من Object",
    category: "js",
    type: "Challenge",
    description: "إضافة وحذف خاصية من Object",
    tech: ["JavaScript", "Object", "Delete"],
    icon: <FaJs className="text-yellow-400" />,
    code: `const myData = { user: "Elzero", age: 41, country: "Egypt" };
myData.skill = "Programming";
console.log(delete myData.skill); // true
console.log(myData.skill); // undefined`,
    output: "true\nundefined",
    isChallenge: true,
  },
  // 34
  {
    id: 78,
    title: "نسخ Object بطرق مختلفة",
    category: "js",
    type: "Challenge",
    description: "نسخ Object بطرق متعددة",
    tech: ["JavaScript", "Object", "Clone"],
    icon: <FaJs className="text-yellow-400" />,
    code: `const myData = { user: "Elzero", age: 41, country: "Egypt" };
let cloned = new Object({ ...myData });
console.log(cloned); // {user: 'Elzero', age: 41, country: 'Egypt'}`,
    output: "{user: 'Elzero', age: 41, country: 'Egypt'}",
    isChallenge: true,
  },
  // 35
  {
    id: 79,
    title: "طباعة الأرقام بالتناقص",
    category: "js",
    type: "Challenge",
    description: "طباعة الأرقام بالتناقص 4 خطوات",
    tech: ["JavaScript", "Loop", "While"],
    icon: <FaJs className="text-yellow-400" />,
    code: `let last = 30;
while (last > 0) {
  last -= 1;
  console.log(last);
  last -= 3;
}`,
    output: "29, 25, 21, 17, 13, 9, 5, 1",
    isChallenge: true,
  },
  // 36
  {
    id: 80,
    title: "إنشاء مصفوفة أرقام متتالية",
    category: "js",
    type: "Challenge",
    description: "إنشاء مصفوفة من 1 إلى 10",
    tech: ["JavaScript", "Array", "Range"],
    icon: <FaJs className="text-yellow-400" />,
    code: `let rangeEnd = 10;
let myRange = Array.from({ length: rangeEnd }, (_, i) => i + 1);
console.log(myRange); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]`,
    output: "[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]",
    isChallenge: true,
  },
  // 37
  {
    id: 81,
    title: "إيجاد أكبر رقم",
    category: "js",
    type: "Challenge",
    description: "إيجاد أكبر رقم في المصفوفة",
    tech: ["JavaScript", "Array", "Max"],
    icon: <FaJs className="text-yellow-400" />,
    code: `let nums = [10, -20, 300, 50, 100, -50];
console.log(Math.max(...nums)); // 300`,
    output: "300",
    isChallenge: true,
  },
  // 38
  {
    id: 82,
    title: "تبديل أول وآخر حرف",
    category: "js",
    type: "Challenge",
    description: "تبديل أول وآخر حرف في النص",
    tech: ["JavaScript", "String", "Swap"],
    icon: <FaJs className="text-yellow-400" />,
    code: `function replaceFirstWithLast(word) {
  let arr = word.split("");
  let arr1 = arr[0];
  let arr2 = arr[word.length - 1];
  [arr1, arr2] = [arr2, arr1];
  return [arr1, ...arr.slice(1, arr.length - 1), arr2].join("");
}
console.log(replaceFirstWithLast("olzerE")); // Elzero`,
    output: "Elzero",
    isChallenge: true,
  },
  // 39
  {
    id: 83,
    title: "إيجاد أكبر رقم في النص",
    category: "js",
    type: "Challenge",
    description: "إيجاد أكبر رقم داخل نص",
    tech: ["JavaScript", "String", "Max"],
    icon: <FaJs className="text-yellow-400" />,
    code: `function checkBiggestNum(word) {
  return Math.max(...word.split(""));
}
console.log(checkBiggestNum("1500654")); // 6`,
    output: "6",
    isChallenge: true,
  },
  // 40
  {
    id: 84,
    title: "إيجاد أكبر رقمين",
    category: "js",
    type: "Challenge",
    description: "إيجاد أكبر رقمين في المصفوفة",
    tech: ["JavaScript", "Array", "Max"],
    icon: <FaJs className="text-yellow-400" />,
    code: `let nums = [20, 100, 50, 10, 15, -20, 30];
let max1 = Math.max(...nums);
let sorted = nums.sort((a,b) => a - b);
console.log(max1, sorted[nums.length - 2]); // 100, 50`,
    output: "100, 50",
    isChallenge: true,
  },
  // 41
  {
    id: 85,
    title: "إيجاد أقرب رقم للهدف",
    category: "js",
    type: "Challenge",
    description: "إيجاد أقرب رقم للهدف المحدد",
    tech: ["JavaScript", "Array", "Closest"],
    icon: <FaJs className="text-yellow-400" />,
    code: `let nums = [10, 80, 85, 25, 30, 88, 15];
let goal = 100;
let closest = nums.filter(n => n <= goal).reduce((a, b) => 
  goal - a < goal - b ? a : b
);
console.log(closest); // 88`,
    output: "88",
    isChallenge: true,
  },
  // 42
  {
    id: 86,
    title: "تبديل حالة الحروف كل حرفين",
    category: "js",
    type: "Challenge",
    description: "تبديل حالة الحروف كل حرفين",
    tech: ["JavaScript", "String", "Case"],
    icon: <FaJs className="text-yellow-400" />,
    code: `function swapEveryTwoChars(word) {
  return word.split("").map((char, index) => {
    if (index % 2 === 0) {
      return char === char.toLowerCase() ? char.toUpperCase() : char.toLowerCase();
    } else {
      return char.toLowerCase();
    }
  }).join("");
}
console.log(swapEveryTwoChars("elZeRo")); // Elzero`,
    output: "Elzero",
    isChallenge: true,
  },
  // 43
  {
    id: 87,
    title: "طباعة CSS مخصصة في Console",
    category: "js",
    type: "Challenge",
    description: "طباعة نص مع تنسيق CSS في Console",
    tech: ["JavaScript", "Console", "CSS"],
    icon: <FaJs className="text-yellow-400" />,
    code: `console.log("%cElzero Web School", 
"background-color:#0693e3; font-size: 40px; color:white; padding:60px;");`,
    output: "Styled text in console",
    isChallenge: true,
  },
  // 44
  {
    id: 88,
    title: "استخراج البيانات من GitHub API",
    category: "js",
    type: "Challenge",
    description: "استخراج البيانات من GitHub API وعرضها",
    tech: ["JavaScript", "API", "Fetch"],
    icon: <FaJs className="text-yellow-400" />,
    code: `fetch("https://api.github.com/users/ElzeroWebSchool/repos")
  .then(result => result.json())
  .then(full => {
    full.length = 15;
    full.forEach(item => {
      // Create table rows with repo data
    });
  });`,
    output: "Table with 15 repos",
    isChallenge: true,
  },
  // 45
  {
    id: 89,
    title: "حفظ النص في ملف",
    category: "js",
    type: "Challenge",
    description: "حفظ النص من Textarea في ملف",
    tech: ["JavaScript", "DOM", "File"],
    icon: <FaJs className="text-yellow-400" />,
    code: `// JavaScript code to save text from textarea to file`,
    output: "File saved",
    isChallenge: true,
  },
  // 46
  {
    id: 90,
    title: "مقارنة الأرقام - If/Else",
    category: "js",
    type: "Challenge",
    description: "مقارنة رقمين باستخدام If/Else",
    tech: ["JavaScript", "Condition", "If/Else"],
    icon: <FaJs className="text-yellow-400" />,
    code: `let numOne = 100;
let numTwo = 200;
if (numOne > numTwo) {
  console.log("1st > 2nd");
} else if (numOne < numTwo) {
  console.log("1st < 2nd");
} else {
  console.log("1st = 2nd");
}`,
    output: "1st < 2nd",
    isChallenge: true,
  },
  // 47
  {
    id: 91,
    title: "تكرار النص - طريقة مختلفة",
    category: "js",
    type: "Challenge",
    description: "تكرار النص باستخدام repeat()",
    tech: ["JavaScript", "String", "Repeat"],
    icon: <FaJs className="text-yellow-400" />,
    code: `let str = "Elzero ";
console.log(str.repeat(3)); // Elzero Elzero Elzero`,
    output: "Elzero Elzero Elzero",
    isChallenge: true,
  },
  // 48
  {
    id: 92,
    title: "التحقق من النطاق - طريقة مختلفة",
    category: "js",
    type: "Challenge",
    description: "التحقق من الأرقام في النطاق باستخدام every()",
    tech: ["JavaScript", "Array", "Every"],
    icon: <FaJs className="text-yellow-400" />,
    code: `function checkRange(...nums) {
  let [n1, n2, n3, min, max] = nums;
  return [n1, n2, n3].every(n => n >= min && n <= max) 
    ? "Yes All Numbers In Range" 
    : "No All Numbers In Range";
}`,
    output: "Yes All Numbers In Range",
    isChallenge: true,
  },
  // 49
  {
    id: 93,
    title: "دمج المصفوفات - طريقة Spread",
    category: "js",
    type: "Challenge",
    description: "دمج المصفوفات باستخدام Spread Operator",
    tech: ["JavaScript", "Array", "Spread"],
    icon: <FaJs className="text-yellow-400" />,
    code: `let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let merged = [...arr1, ...arr2];
console.log(merged); // [1, 2, 3, 4, 5, 6]`,
    output: "[1, 2, 3, 4, 5, 6]",
    isChallenge: true,
  },
  // 50
  {
    id: 94,
    title: "استخراج الأحرف - طريقة Destructuring",
    category: "js",
    type: "Challenge",
    description: "استخراج الأحرف باستخدام Destructuring",
    tech: ["JavaScript", "String", "Destructuring"],
    icon: <FaJs className="text-yellow-400" />,
    code: `let [first, ...rest] = "Elzero";
console.log(first); // E
console.log(rest.join("")); // lzero`,
    output: "E\nlzero",
    isChallenge: true,
  },
];
