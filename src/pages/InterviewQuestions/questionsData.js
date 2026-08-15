export const questionsData = {
  javascript: {
    title: "JavaScript (ES6+)",
    icon: "📜",
    color: "blue",
    questions: [
      // ============================
      // المستوى الأول: أساسيات JavaScript
      // ============================
      {
        question: "ما هي JavaScript؟",
        answer: `
      <p>JavaScript دي لغة برمجة عالية المستوى، مفسرة (interpreted)، بتستخدمها عشان تضيف تفاعل وحركة للمواقع.</p>
      <p class="mt-2">بتشتغل في المتصفح (Client-side) وكمان على السيرفر عن طريق Node.js.</p>
      <p class="mt-2">مميزاتها:</p>
      <ul class="list-disc pr-6 space-y-1 mt-1">
        <li>متعددة الاستخدامات (Front-end و Back-end).</li>
        <li>بتدعم البرمجة الكائنية (OOP) والوظيفية (Functional).</li>
        <li>عندها مجتمع ضخم ومكتبات وأطر عمل كتير.</li>
      </ul>
    `,
      },
      {
        question: "ما هي أنواع البيانات في JavaScript؟",
        answer: `
      <p>أنواع البيانات في JavaScript بتنقسم لقسمين:</p>
      <ul class="list-disc pr-6 space-y-2 mt-2">
        <li>
          <strong>الأنواع الأساسية (Primitive Types):</strong>
          <ul class="list-circle pr-6 space-y-1 mt-1">
            <li>string ← النصوص</li>
            <li>number ← الأرقام</li>
            <li>bigint ← الأرقام الكبيرة جدًا</li>
            <li>boolean ← true أو false</li>
            <li>undefined ← قيمة مش معرّفة</li>
            <li>null ← قيمة فارغة مقصودة</li>
            <li>symbol ← قيمة فريدة (من ES6)</li>
          </ul>
        </li>
        <li>
          <strong>النوع المرجعي (Reference Type):</strong>
          <ul class="list-circle pr-6 space-y-1 mt-1">
            <li>object ← الكائنات (مصفوفات، دوال، تواريخ...)</li>
          </ul>
        </li>
      </ul>
    `,
      },
      {
        question: "ما الفرق بين null و undefined؟",
        answer: `
      <ul class="list-disc pr-6 space-y-2">
        <li>
          <strong>undefined:</strong>
          <ul class="list-circle pr-6 space-y-1 mt-1">
            <li>يعني المتغير اتعرّف بس لسه ماخدش قيمة.</li>
            <li>بيظهر لما تحاول توصل لخاصية مش موجودة في كائن.</li>
            <li>هي القيمة الافتراضية للمتغيرات اللي مش متعرفة.</li>
          </ul>
        </li>
        <li>
          <strong>null:</strong>
          <ul class="list-circle pr-6 space-y-1 mt-1">
            <li>قيمة مقصودة من المطور معناها "مفيش حاجة" أو "فارغ".</li>
            <li>بتستخدمها لما تكون عايز تقول إن المتغير فاضي عن قصد.</li>
          </ul>
        </li>
      </ul>
      <div class="mt-3 p-3 bg-yellow-50 dark:bg-yellow-900/20 border-r-4 border-yellow-500 rounded">
        <p class="text-sm"><strong>⚠️ ملاحظة مهمة:</strong> typeof null بيرجع "object"، وده خطأ تاريخي في اللغة ومش هيتصلح.</p>
      </div>
    `,
      },
      {
        question: "ما الفرق بين == و ===؟",
        answer: `
      <ul class="list-disc pr-6 space-y-3">
        <li>
          <strong>== (مساواة مرنة):</strong>
          <ul class="list-circle pr-6 space-y-1 mt-1">
            <li>بتقارن القيم بعد ما تحول الأنواع (Type Coercion).</li>
            <li>مثال: 5 == '5' بترجع true.</li>
            <li>null == undefined بترجع true.</li>
          </ul>
        </li>
        <li>
          <strong>=== (مساواة صارمة):</strong>
          <ul class="list-circle pr-6 space-y-1 mt-1">
            <li>بتقارن القيمة والنوع مع بعض من غير أي تحويل.</li>
            <li>مثال: 5 === '5' بترجع false.</li>
            <li>null === undefined بترجع false.</li>
          </ul>
        </li>
      </ul>
      <p class="mt-3"><strong>التوصية:</strong> استخدم === دايمًا عشان تتجنب أخطاء مش متوقعة.</p>
    `,
      },
      {
        question: "ما هو Hoisting في JavaScript؟",
        answer: `
      <p>Hoisting (الرفع) ده آلية في JavaScript بترفع تصريحات المتغيرات والدوال لأعلى النطاق قبل ما الكود يتنفذ.</p>
      <ul class="list-disc pr-6 space-y-2 mt-2">
        <li>
          <strong>Function Declarations:</strong>
          <ul class="list-circle pr-6 space-y-1 mt-1">
            <li>بتترفع بالكامل مع جسم الدالة.</li>
            <li>تقدر تناديها قبل ما تتعرف في الكود.</li>
          </ul>
        </li>
        <li>
          <strong>var:</strong>
          <ul class="list-circle pr-6 space-y-1 mt-1">
            <li>بيترفع وبياخد قيمة undefined.</li>
            <li>تقدر تستخدمه قبل التصريح بس قيمته هتبقى undefined.</li>
          </ul>
        </li>
        <li>
          <strong>let و const:</strong>
          <ul class="list-circle pr-6 space-y-1 mt-1">
            <li>بيترفعوا بس بيدخلوا في Temporal Dead Zone (TDZ).</li>
            <li>متقدرش تستخدمهم قبل التصريح وإلا هتاخد ReferenceError.</li>
          </ul>
        </li>
      </ul>
    `,
      },
      {
        question: "ما الفرق بين var و let و const؟",
        answer: `
      <p>الفرق بينهم كالتالي:</p>
      <ul class="list-disc pr-6 space-y-2 mt-2">
        <li><strong>النطاق:</strong> var Function Scope، أما let و const Block Scope.</li>
        <li><strong>إعادة التصريح:</strong> var مسموح، let و const مش مسموح.</li>
        <li><strong>إعادة التعيين:</strong> var و let مسموح، const مش مسموح.</li>
        <li><strong>Hoisting:</strong> var بيترفع وياخد undefined، let و const بيترفعوا بس في TDZ.</li>
        <li><strong>الربط بالـ Window:</strong> var بيرتبط، let و const لأ.</li>
      </ul>
      <p class="mt-3"><strong>التوصية:</strong> استخدم const دايمًا، و let بس لما تحتاج تعيد التعيين، وابتعد عن var.</p>
    `,
      },
      {
        question: "ما هو النطاق (Scope) في JavaScript؟",
        answer: `
      <p>النطاق (Scope) هو المنطقة اللي المتغير بيبقى متاح فيها.</p>
      <ul class="list-disc pr-6 space-y-2 mt-2">
        <li>
          <strong>Global Scope:</strong>
          <ul class="list-circle pr-6 space-y-1 mt-1">
            <li>المتغيرات اللي برة أي دالة أو كتلة.</li>
            <li>متاحة في كل حتة في الكود.</li>
          </ul>
        </li>
        <li>
          <strong>Function Scope:</strong>
          <ul class="list-circle pr-6 space-y-1 mt-1">
            <li>المتغيرات اللي جوه دالة بـ var.</li>
            <li>متاحة بس جوه الدالة دي.</li>
          </ul>
        </li>
        <li>
          <strong>Block Scope:</strong>
          <ul class="list-circle pr-6 space-y-1 mt-1">
            <li>المتغيرات اللي جوه {} بـ let و const.</li>
            <li>متاحة بس جوه الكتلة (if, for, while...).</li>
          </ul>
        </li>
      </ul>
    `,
      },
      {
        question: "ما هو Closure في JavaScript؟",
        answer: `
      <p>الـ Closure هو قدرة الدالة الداخلية إنها تفتكر وتوصل لمتغيرات النطاق الخارجي حتى بعد ما الدالة الخارجية تخلص تنفيذها.</p>
      <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
        <pre class="text-sm overflow-x-auto"><code>function outer() {
  let count = 0
  
  return function inner() {
    count++
    return count
  }
}

const counter = outer()
console.log(counter()) // 1
console.log(counter()) // 2
console.log(counter()) // 3</code></pre>
      </div>
      <p class="mt-2">بتستخدمه عشان تعمل متغيرات خاصة (Private)، وفي الـ Factory Functions، وفي React Hooks، وفي setTimeout و addEventListener.</p>
    `,
      },
      {
        question: "ما هو this في JavaScript وكيف يتغير حسب السياق؟",
        answer: `
      <p>this كلمة مفتاحية بتشير للكائن اللي الكود بيشتغل جواه، وقيمتها بتتغير حسب طريقة استدعاء الدالة.</p>
      <ul class="list-disc pr-6 space-y-2 mt-2">
        <li><strong>استدعاء عادي:</strong> بيكون window (أو undefined في strict mode).</li>
        <li><strong>دالة جوه كائن (Method):</strong> بيكون الكائن نفسه.</li>
        <li><strong>Arrow Function:</strong> مش ليها this خاص، بترث من النطاق الخارجي.</li>
        <li><strong>call / apply / bind:</strong> بتقدر تحدد قيمة this بنفسك.</li>
        <li><strong>في أحداث DOM:</strong> بيكون العنصر اللي أطلق الحدث.</li>
      </ul>
    `,
      },
      {
        question: "ما هي الـ Promises وكيف تعمل؟",
        answer: `
      <p>الـ Promise كائن بيمثل نتيجة عملية غير متزامنة (زي طلب API أو قراءة ملف).</p>
      <p class="mt-2">ليه 3 حالات:</p>
      <ul class="list-disc pr-6 space-y-1 mt-1">
        <li>pending ← لسه مستنية.</li>
        <li>fulfilled ← تمت بنجاح.</li>
        <li>rejected ← فشلت.</li>
      </ul>
      <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
        <pre class="text-sm overflow-x-auto"><code>const myPromise = new Promise((resolve, reject) => {
  const success = true
  if (success) {
    resolve('تمت العملية بنجاح')
  } else {
    reject('حدث خطأ')
  }
})

myPromise
  .then(result => console.log(result))
  .catch(error => console.error(error))</code></pre>
      </div>
    `,
      },
      {
        question: "ما الفرق بين async/await و Promises العادية؟",
        answer: `
      <ul class="list-disc pr-6 space-y-3">
        <li>
          <strong>async/await:</strong>
          <ul class="list-circle pr-6 space-y-1 mt-1">
            <li>سكر نحوي فوق الـ Promises.</li>
            <li>بيخلي الكود الغير متزامن يبان كأنه متزامن.</li>
            <li>أسهل في القراءة خصوصًا مع عمليات كتير متسلسلة.</li>
            <li>بتستخدم try/catch لمعالجة الأخطاء.</li>
          </ul>
        </li>
        <li>
          <strong>Promises العادية:</strong>
          <ul class="list-circle pr-6 space-y-1 mt-1">
            <li>بتستخدم .then() و .catch().</li>
            <li>ممكن تبقى معقدة لو العمليات كتير (Callback Hell).</li>
          </ul>
        </li>
      </ul>
    `,
      },
      {
        question: "ما هو Event Loop في JavaScript؟",
        answer: `
      <p>الـ Event Loop هو الآلية اللي بتخلي JavaScript (لغة Single-Threaded) تنفذ عمليات غير متزامنة من غير ما توقف الخيط الرئيسي.</p>
      <p class="mt-2">ترتيب التنفيذ:</p>
      <ol class="list-decimal pr-6 space-y-2 mt-1">
        <li><strong>Call Stack:</strong> بينفذ الكود المتزامن الأول.</li>
        <li><strong>Microtasks:</strong> زي Promise.then و queueMicrotask (لها أولوية أعلى).</li>
        <li><strong>Macrotasks:</strong> زي setTimeout و setInterval وأحداث DOM.</li>
      </ol>
      <p class="mt-2">مهم تعرف إن Microtasks بتنفذ قبل Macrotasks، حتى لو الـ setTimeout وقته صفر.</p>
    `,
      },
      {
        question: "ما هي الدوال (Functions) في JavaScript وأنواعها؟",
        answer: `
      <p>الدوال كتل كود قابلة لإعادة الاستخدام، وفيه أنواع كتير:</p>
      <ul class="list-disc pr-6 space-y-2 mt-2">
        <li><strong>Function Declaration:</strong> بتترفع بالكامل، تقدر تناديها قبل التعريف.</li>
        <li><strong>Function Expression:</strong> مش بتترفع كدالة.</li>
        <li><strong>Arrow Function:</strong> صيغة مختصرة، مش ليها this خاص، ومش بتشتغل مع new.</li>
        <li><strong>Anonymous Function:</strong> من غير اسم، بتستخدم كـ callback.</li>
        <li><strong>IIFE:</strong> بتنفذ فور تعريفها.</li>
      </ul>
    `,
      },
      {
        question: "ما هي الـ Higher-Order Functions؟",
        answer: `
      <p>Higher-Order Function هي دالة بتحقق شرط من الاتنين:</p>
      <ul class="list-disc pr-6 space-y-2 mt-2">
        <li>بتاخد دالة تانية كـ parameter.</li>
        <li>أو بترجع دالة تانية.</li>
      </ul>
      <p class="mt-2">أمثلة شائعة: map، filter، reduce، setTimeout، addEventListener.</p>
    `,
      },
      {
        question: "ما هي الـ Pure Functions؟",
        answer: `
      <p>Pure Function (دالة نقية) بتحقق شرطين:</p>
      <ul class="list-disc pr-6 space-y-2 mt-2">
        <li>نفس المدخلات بتدي نفس المخرجات دايمًا.</li>
        <li>مش بتعمل أي Side Effects (مش بتغير متغيرات خارجية ولا بتعمل طلبات API ولا بتعدل في الـ DOM).</li>
      </ul>
    `,
      },
      {
        question: "ما هو الـ Callback Hell وكيف نتجنبه؟",
        answer: `
      <p>Callback Hell هو تداخل عميق للـ callbacks جوه بعض، وده بيخلي الكود صعب القراءة والصيانة.</p>
      <p class="mt-2">بتتجنبه بـ:</p>
      <ul class="list-disc pr-6 space-y-1 mt-1">
        <li>استخدام Promises مع .then().</li>
        <li>استخدام async/await (الأفضل).</li>
        <li>تقسيم الكود لدوال صغيرة.</li>
      </ul>
    `,
      },
      {
        question: "ما هي المصفوفات (Arrays) في JavaScript؟",
        answer: `
      <p>المصفوفة كائن بتخزن فيه مجموعة عناصر (أي نوع بيانات) في مكان واحد، والعناصر مرقمة من صفر.</p>
      <p class="mt-2">حجمها ديناميكي، وفيها دوال كتير مفيدة زي map و filter و reduce.</p>
    `,
      },
      {
        question: "أشهر دوال المصفوفات في JavaScript؟",
        answer: `
      <p>أشهر الدوال اللي هتستخدمها يوميًا:</p>
      <ul class="list-disc pr-6 space-y-2 mt-2">
        <li><strong>map()</strong> ← بتعمل مصفوفة جديدة بتطبيق دالة على كل عنصر.</li>
        <li><strong>filter()</strong> ← بترجع العناصر اللي بتحقق شرط معين.</li>
        <li><strong>reduce()</strong> ← بتجمع العناصر في قيمة واحدة.</li>
        <li><strong>forEach()</strong> ← بتنفذ دالة على كل عنصر من غير ما ترجع مصفوفة.</li>
        <li><strong>find()</strong> ← بترجع أول عنصر بحقق الشرط.</li>
        <li><strong>findIndex()</strong> ← بترجع مكان أول عنصر بحقق الشرط.</li>
        <li><strong>some()</strong> ← بترجع true لو في عنصر واحد على الأقل بحقق الشرط.</li>
        <li><strong>every()</strong> ← بترجع true لو كل العناصر بتحقق الشرط.</li>
      </ul>
    `,
      },
      {
        question:
          "ما الفرق بين Promise.all و Promise.allSettled و Promise.race و Promise.any؟",
        answer: `
    <p>دول أربع طرق مختلفة للتعامل مع أكتر من Promise مرة واحدة:</p>
    <ul class="list-disc pr-6 space-y-2 mt-2">
      <li>
        <strong>Promise.all():</strong>
        <ul class="list-circle pr-6 space-y-1 mt-1">
          <li>بتستنى كل الـ Promises تخلص.</li>
          <li>بترجع مصفوفة بالنتائج.</li>
          <li>لو واحدة فشلت، بترفض على طول.</li>
        </ul>
      </li>
      <li>
        <strong>Promise.allSettled():</strong>
        <ul class="list-circle pr-6 space-y-1 mt-1">
          <li>بتستنى كل الـ Promises تخلص برضو.</li>
          <li>بترجع نتائج النجاح والفشل مع بعض.</li>
          <li>عمرها ما بترفض.</li>
        </ul>
      </li>
      <li>
        <strong>Promise.race():</strong>
        <ul class="list-circle pr-6 space-y-1 mt-1">
          <li>بتستنى أول Promise تخلص (سواء نجحت أو فشلت).</li>
          <li>بترجع نتيجة أول واحدة.</li>
        </ul>
      </li>
      <li>
        <strong>Promise.any():</strong>
        <ul class="list-circle pr-6 space-y-1 mt-1">
          <li>بتستنى أول Promise تنجح.</li>
          <li>بترجع نتيجة أول واحدة نجحت.</li>
          <li>بترفض بس لو كلهم فشلوا.</li>
        </ul>
      </li>
    </ul>
  `,
      },
      {
        question: "ما الفرق بين try/catch و .catch() في معالجة الأخطاء؟",
        answer: `
    <ul class="list-disc pr-6 space-y-3">
      <li>
        <strong>try/catch:</strong>
        <ul class="list-circle pr-6 space-y-1 mt-1">
          <li>بتستخدمها مع async/await والكود المتزامن.</li>
          <li>بتلقط الأخطاء في نطاق محدد.</li>
        </ul>
      </li>
      <li>
        <strong>.catch():</strong>
        <ul class="list-circle pr-6 space-y-1 mt-1">
          <li>بتستخدمها مع الـ Promises.</li>
          <li>بتلقط الأخطاء في سلسلة الـ Promise.</li>
        </ul>
      </li>
    </ul>
    <p class="mt-2">الاتنين بيعملوا نفس الفكرة، بس try/catch أسهل في القراءة مع async/await.</p>
  `,
      },
      {
        question: "ما الفرق بين Error و Exception في JavaScript؟",
        answer: `
    <ul class="list-disc pr-6 space-y-3">
      <li>
        <strong>Error:</strong>
        <ul class="list-circle pr-6 space-y-1 mt-1">
          <li>كائن بيمثل الخطأ.</li>
          <li>فيه message و stack و name.</li>
          <li>تقدر تعمله بـ new Error('message').</li>
        </ul>
      </li>
      <li>
        <strong>Exception:</strong>
        <ul class="list-circle pr-6 space-y-1 mt-1">
          <li>الحدث اللي بيحصل لما الكود يقابل خطأ.</li>
          <li>لما بتعمل throw لـ Error، بيبقى Exception.</li>
        </ul>
      </li>
    </ul>
    <p class="mt-2">باختصار: Error هو الكائن، و Exception هو الحدث نفسه.</p>
  `,
      },
      {
        question: "ما الفرق بين throw و return في JavaScript؟",
        answer: `
    <ul class="list-disc pr-6 space-y-3">
      <li>
        <strong>return:</strong>
        <ul class="list-circle pr-6 space-y-1 mt-1">
          <li>بتنهي الدالة وبترجع قيمة.</li>
          <li>بتستخدمها في الكود العادي.</li>
          <li>مش بتقطع البرنامج.</li>
        </ul>
      </li>
      <li>
        <strong>throw:</strong>
        <ul class="list-circle pr-6 space-y-1 mt-1">
          <li>بتنهي الدالة وبرمي خطأ.</li>
          <li>بتستخدمها لمعالجة الأخطاء.</li>
          <li>لازم تتلقط بـ try/catch، وإلا البرنامج هيقف.</li>
        </ul>
      </li>
    </ul>
  `,
      },
      {
        question: "ما الفرق بين Event Bubbling و Event Capturing في DOM؟",
        answer: `
    <ul class="list-disc pr-6 space-y-3">
      <li>
        <strong>Event Bubbling (الافتراضي):</strong>
        <ul class="list-circle pr-6 space-y-1 mt-1">
          <li>الحدث بيتحرك من تحت لفوق (من العنصر الهدف للجذر).</li>
        </ul>
      </li>
      <li>
        <strong>Event Capturing:</strong>
        <ul class="list-circle pr-6 space-y-1 mt-1">
          <li>الحدث بيتحرك من فوق لتحت (من الجذر للعنصر الهدف).</li>
          <li>بتفعله لما تحط true كمعامل تالت في addEventListener.</li>
        </ul>
      </li>
    </ul>
    <p class="mt-2">تقدر توقف الانتشار بـ e.stopPropagation().</p>
  `,
      },
      {
        question: "ما الفرق بين Event Delegation و Event Propagation؟",
        answer: `
    <ul class="list-disc pr-6 space-y-3">
      <li>
        <strong>Event Propagation:</strong>
        <ul class="list-circle pr-6 space-y-1 mt-1">
          <li>هي المراحل اللي الحدث بيمر بيها (Capturing → Target → Bubbling).</li>
        </ul>
      </li>
      <li>
        <strong>Event Delegation:</strong>
        <ul class="list-circle pr-6 space-y-1 mt-1">
          <li>تقنية بتستخدم الـ Bubbling.</li>
          <li>بتحط Event Listener على العنصر الأب بدل ما تحطه على كل العناصر الأبناء.</li>
          <li>مفيدة جدًا مع العناصر اللي بتضاف ديناميكي.</li>
        </ul>
      </li>
    </ul>
  `,
      },
      {
        question: "ما الفرق بين ESM (ES Modules) و CommonJS؟",
        answer: `
    <ul class="list-disc pr-6 space-y-3">
      <li>
        <strong>ES Modules (ESM):</strong>
        <ul class="list-circle pr-6 space-y-1 mt-1">
          <li>بتستخدم import و export.</li>
          <li>تحميل ثابت (Static).</li>
          <li>مدعوم في المتصفح و Node.js.</li>
          <li>بيدعم Tree Shaking.</li>
        </ul>
      </li>
      <li>
        <strong>CommonJS:</strong>
        <ul class="list-circle pr-6 space-y-1 mt-1">
          <li>بتستخدم require و module.exports.</li>
          <li>تحميل ديناميكي (Dynamic).</li>
          <li>الافتراضي في Node.js القديم.</li>
          <li>مش مدعوم في المتصفح.</li>
        </ul>
      </li>
    </ul>
  `,
      },
      {
        question: "ما الفرق بين Dynamic Import و Static Import؟",
        answer: `
    <ul class="list-disc pr-6 space-y-3">
      <li>
        <strong>Static Import:</strong>
        <ul class="list-circle pr-6 space-y-1 mt-1">
          <li>import ... from ...</li>
          <li>بيتحمل في بداية الملف.</li>
          <li>مش تقدر تحطه جوه if أو دالة.</li>
        </ul>
      </li>
      <li>
        <strong>Dynamic Import:</strong>
        <ul class="list-circle pr-6 space-y-1 mt-1">
          <li>import() كدالة.</li>
          <li>بيتحمل عند الطلب (Lazy Loading).</li>
          <li>تقدر تحطه في أي حتة.</li>
          <li>بيرجع Promise.</li>
        </ul>
      </li>
    </ul>
  `,
      },
      {
        question: "ما الفرق بين Tree Shaking و Dead Code Elimination؟",
        answer: `
    <ul class="list-disc pr-6 space-y-3">
      <li>
        <strong>Tree Shaking:</strong>
        <ul class="list-circle pr-6 space-y-1 mt-1">
          <li>تقنية في الـ Bundlers (Vite و Webpack).</li>
          <li>بتشيل الكود اللي مش مستخدم من الحزمة النهائية.</li>
          <li>بتشتغل مع ES Modules.</li>
        </ul>
      </li>
      <li>
        <strong>Dead Code Elimination:</strong>
        <ul class="list-circle pr-6 space-y-1 mt-1">
          <li>مصطلح أعم لإزالة أي كود مش هيتنفذ.</li>
          <li>ممكن يحصل في الـ Compiler أو الـ Bundler.</li>
        </ul>
      </li>
    </ul>
  `,
      },
      {
        question: "ما الفرق بين <script> مع async و defer؟",
        answer: `
    <ul class="list-disc pr-6 space-y-3">
      <li>
        <strong>async:</strong>
        <ul class="list-circle pr-6 space-y-1 mt-1">
          <li>بيتحمل بالتوازي مع الـ HTML.</li>
          <li>بتنفذ فور ما يخلص التحميل.</li>
          <li>مش بيضمن الترتيب.</li>
          <li>مناسب للسكربتات المستقلة (زي Analytics).</li>
        </ul>
      </li>
      <li>
        <strong>defer:</strong>
        <ul class="list-circle pr-6 space-y-1 mt-1">
          <li>بيتحمل بالتوازي برضو.</li>
          <li>بتنفذ بعد ما الـ HTML يخلص بالكامل.</li>
          <li>بيحافظ على الترتيب.</li>
          <li>مناسب لسكربتات التطبيق الرئيسية.</li>
        </ul>
      </li>
    </ul>
  `,
      },
      {
        question: "ما الفرق بين DOMContentLoaded و load events؟",
        answer: `
    <ul class="list-disc pr-6 space-y-3">
      <li>
        <strong>DOMContentLoaded:</strong>
        <ul class="list-circle pr-6 space-y-1 mt-1">
          <li>بيتنفذ لما الـ HTML يتحمل والـ DOM Tree يتبني.</li>
          <li>مش بيستنى الصور أو الـ CSS أو الـ iframes.</li>
          <li>بيحصل أسرع.</li>
        </ul>
      </li>
      <li>
        <strong>load:</strong>
        <ul class="list-circle pr-6 space-y-1 mt-1">
          <li>بيتنفذ لما كل حاجة تتحمل (HTML + صور + CSS + iframes).</li>
          <li>بيحصل بعد DOMContentLoaded.</li>
        </ul>
      </li>
    </ul>
  `,
      },
      {
        question: "ما الفرق بين Callback و Promise و async/await؟",
        answer: `
    <p>دول تلات طرق للتعامل مع الكود الغير متزامن:</p>
    <ul class="list-disc pr-6 space-y-3">
      <li>
        <strong>Callback:</strong>
        <ul class="list-circle pr-6 space-y-1 mt-1">
          <li>الطريقة القديمة.</li>
          <li>بتمرر دالة تتنفذ لما العملية تخلص.</li>
          <li>عيب كبير: Callback Hell لما العمليات تتداخل.</li>
        </ul>
      </li>
      <li>
        <strong>Promise:</strong>
        <ul class="list-circle pr-6 space-y-1 mt-1">
          <li>أحسن من الـ Callback.</li>
          <li>بتستخدم .then() و .catch().</li>
          <li>بتتجنب التداخل العميق.</li>
        </ul>
      </li>
      <li>
        <strong>async/await:</strong>
        <ul class="list-circle pr-6 space-y-1 mt-1">
          <li>الأسهل والأوضح.</li>
          <li>بيخلي الكود يبان كأنه متزامن.</li>
          <li>بتستخدم try/catch لمعالجة الأخطاء.</li>
          <li>هو مجرد سكر نحوي فوق الـ Promises.</li>
        </ul>
      </li>
    </ul>
    <p class="mt-2">من ناحية الأداء كلهم زي بعض، بس async/await هو الأفضل في القراءة والتصحيح.</p>
  `,
      },
      {
        question: "ما هو الفرق بين map و forEach؟",
        answer: `
    <ul class="list-disc pr-6 space-y-3">
      <li>
        <strong>map():</strong>
        <ul class="list-circle pr-6 space-y-1 mt-1">
          <li>بترجع مصفوفة جديدة.</li>
          <li>بتستخدمها لما تكون عايز تحول البيانات.</li>
        </ul>
      </li>
      <li>
        <strong>forEach():</strong>
        <ul class="list-circle pr-6 space-y-1 mt-1">
          <li>مش بترجع حاجة (undefined).</li>
          <li>بتستخدمها لما تكون عايز تنفذ حاجة على كل عنصر من غير ما تعمل مصفوفة جديدة.</li>
        </ul>
      </li>
    </ul>
  `,
      },
      {
        question: "ما هو الفرق بين filter و find؟",
        answer: `
    <ul class="list-disc pr-6 space-y-3">
      <li>
        <strong>filter():</strong>
        <ul class="list-circle pr-6 space-y-1 mt-1">
          <li>بترجع مصفوفة بكل العناصر اللي بتحقق الشرط.</li>
        </ul>
      </li>
      <li>
        <strong>find():</strong>
        <ul class="list-circle pr-6 space-y-1 mt-1">
          <li>بترجع أول عنصر بس بحقق الشرط.</li>
          <li>لو مفيش، بترجع undefined.</li>
        </ul>
      </li>
    </ul>
  `,
      },
      {
        question: "ما هو الفرق بين slice و splice؟",
        answer: `
    <ul class="list-disc pr-6 space-y-3">
      <li>
        <strong>slice():</strong>
        <ul class="list-circle pr-6 space-y-1 mt-1">
          <li>بترجع جزء من المصفوفة من غير ما تعدل الأصلية.</li>
          <li>مش بتغير المصفوفة الأصلية.</li>
        </ul>
      </li>
      <li>
        <strong>splice():</strong>
        <ul class="list-circle pr-6 space-y-1 mt-1">
          <li>بتعدل المصفوفة الأصلية (بتضيف أو بتشيل عناصر).</li>
          <li>بترجع العناصر اللي اتشالت.</li>
        </ul>
      </li>
    </ul>
  `,
      },
      {
        question: "ما هو الفرق بين call و apply و bind؟",
        answer: `
    <ul class="list-disc pr-6 space-y-3">
      <li>
        <strong>call():</strong>
        <ul class="list-circle pr-6 space-y-1 mt-1">
          <li>بتنادي الدالة فورًا وبتحدد قيمة this.</li>
          <li>الـ arguments بتتبعت منفصلة.</li>
        </ul>
      </li>
      <li>
        <strong>apply():</strong>
        <ul class="list-circle pr-6 space-y-1 mt-1">
          <li>زي call، بس الـ arguments بتتبعت في مصفوفة.</li>
        </ul>
      </li>
      <li>
        <strong>bind():</strong>
        <ul class="list-circle pr-6 space-y-1 mt-1">
          <li>مش بتنادي الدالة فورًا.</li>
          <li>بترجع دالة جديدة مربوطة بـ this معين.</li>
        </ul>
      </li>
    </ul>
  `,
      },
      {
        question: "ما هو الفرق بين shallow copy و deep copy؟",
        answer: `
    <ul class="list-disc pr-6 space-y-3">
      <li>
        <strong>Shallow Copy:</strong>
        <ul class="list-circle pr-6 space-y-1 mt-1">
          <li>بنسخ المستوى الأول بس.</li>
          <li>لو في كائنات متداخلة، بتفضل مشتركة (Reference).</li>
          <li>بتتعمل بـ spread operator أو Object.assign أو slice.</li>
        </ul>
      </li>
      <li>
        <strong>Deep Copy:</strong>
        <ul class="list-circle pr-6 space-y-1 mt-1">
          <li>بنسخ كل المستويات.</li>
          <li>الكائنات المتداخلة بتبقى مستقلة تمامًا.</li>
          <li>بتتعمل بـ structuredClone أو JSON.parse(JSON.stringify()) أو مكتبات زي lodash.</li>
        </ul>
      </li>
    </ul>
  `,
      },
      {
        question: "ما هو الفرق بين mutable و immutable؟",
        answer: `
    <ul class="list-disc pr-6 space-y-3">
      <li>
        <strong>Mutable (قابل للتغيير):</strong>
        <ul class="list-circle pr-6 space-y-1 mt-1">
          <li>تقدر تعدل القيمة بعد إنشائها.</li>
          <li>زي الـ objects والمصفوفات.</li>
        </ul>
      </li>
      <li>
        <strong>Immutable (غير قابل للتغيير):</strong>
        <ul class="list-circle pr-6 space-y-1 mt-1">
          <li>مش تقدر تعدل القيمة بعد إنشائها.</li>
          <li>زي الـ strings والأرقام والـ boolean.</li>
          <li>لو عايز تغير، بتعمل قيمة جديدة.</li>
        </ul>
      </li>
    </ul>
  `,
      },
      {
        question: "ما هو الفرق بين == و Object.is()؟",
        answer: `
    <ul class="list-disc pr-6 space-y-3">
      <li>
        <strong>== :</strong>
        <ul class="list-circle pr-6 space-y-1 mt-1">
          <li>مساواة مرنة مع تحويل أنواع.</li>
        </ul>
      </li>
      <li>
        <strong>=== :</strong>
        <ul class="list-circle pr-6 space-y-1 mt-1">
          <li>مساواة صارمة من غير تحويل.</li>
        </ul>
      </li>
      <li>
        <strong>Object.is():</strong>
        <ul class="list-circle pr-6 space-y-1 mt-1">
          <li>شبه === بس أدق شوية.</li>
          <li>بتتعامل صح مع NaN و +0 و -0.</li>
          <li>Object.is(NaN, NaN) بترجع true.</li>
          <li>Object.is(+0, -0) بترجع false.</li>
        </ul>
      </li>
    </ul>
  `,
      },
      {
        question: "ما هو الـ Prototypal Inheritance في JavaScript؟",
        answer: `
    <p>JavaScript بتستخدم نظام وراثة عن طريق الـ Prototypes مش الـ Classes التقليدية.</p>
    <ul class="list-disc pr-6 space-y-2 mt-2">
      <li>كل كائن ليه prototype بيرجع ليه لو الخاصية مش موجودة عنده.</li>
      <li>الـ prototype chain بتستمر لحد ما توصل لـ null.</li>
      <li>ده أساس الـ Inheritance في JavaScript.</li>
    </ul>
    <p class="mt-2">حتى الـ class في ES6 هي مجرد سكر نحوي فوق الـ Prototypes.</p>
  `,
      },
      {
        question: "ما هو الفرق بين Function Declaration و Function Expression؟",
        answer: `
    <ul class="list-disc pr-6 space-y-3">
      <li>
        <strong>Function Declaration:</strong>
        <ul class="list-circle pr-6 space-y-1 mt-1">
          <li>function name() {}</li>
          <li>بتترفع بالكامل (Hoisting).</li>
          <li>تقدر تناديها قبل ما تتعرف.</li>
        </ul>
      </li>
      <li>
        <strong>Function Expression:</strong>
        <ul class="list-circle pr-6 space-y-1 mt-1">
          <li>const name = function() {}</li>
          <li>مش بتترفع كدالة.</li>
          <li>متقدرش تناديها قبل التعريف.</li>
        </ul>
      </li>
    </ul>
  `,
      },
      {
        question: "ما هو الـ Debounce والـ Throttle؟",
        answer: `
    <p>دول تقنيتين بيستخدموهم عشان يقللوا عدد مرات تنفيذ دالة بتتندّه كتير:</p>
    <ul class="list-disc pr-6 space-y-3">
      <li>
        <strong>Debounce:</strong>
        <ul class="list-circle pr-6 space-y-1 mt-1">
          <li>بتستنى المستخدم يبطل يعمل الحدث، وبعد مدة معينة بتنفذ الدالة مرة واحدة.</li>
          <li>مفيد في البحث (Search) عشان متبعتش request مع كل حرف.</li>
        </ul>
      </li>
      <li>
        <strong>Throttle:</strong>
        <ul class="list-circle pr-6 space-y-1 mt-1">
          <li>بتنفذ الدالة مرة كل فترة معينة، حتى لو الحدث بيحصل كتير.</li>
          <li>مفيد في الـ scroll أو الـ resize.</li>
        </ul>
      </li>
    </ul>
  `,
      },
      {
        question: "ما هو الـ Memory Leak وكيف تتجنبه؟",
        answer: `
    <p>Memory Leak بيحصل لما الذاكرة متتتحررش بعد ما مش محتاجها.</p>
    <ul class="list-disc pr-6 space-y-2 mt-2">
      <li>أشهر الأسباب: Event Listeners مش متشالة، Timers مش متوقفة، References دائرة.</li>
      <li>عشان تتجنبه:</li>
      <ul class="list-circle pr-6 space-y-1 mt-1">
        <li>شيل الـ Event Listeners في الـ cleanup.</li>
        <li>وقف الـ setInterval و setTimeout.</li>
        <li>فك أي references مش محتاجها.</li>
      </ul>
    </ul>
  `,
      },
      {
        question: "ما هو الـ Garbage Collection في JavaScript؟",
        answer: `
    <p>الـ Garbage Collection هو النظام اللي JavaScript بتستخدمه عشان تحرر الذاكرة من الكائنات اللي مش مستخدمة.</p>
    <ul class="list-disc pr-6 space-y-2 mt-2">
      <li>بيعتمد على مبدأ الـ Reachability (لو مفيش طريقة توصل للكائن، بيتشال).</li>
      <li>المطور مش بيتحكم فيه بشكل مباشر، بس بيقدر يساعده عن طريق إنه ميعملش Memory Leaks.</li>
    </ul>
  `,
      },
      {
        question: "ما هو الـ Strict Mode؟",
        answer: `
    <p>Strict Mode هو وضع بيخلي JavaScript أكثر صرامة في التعامل مع الأخطاء.</p>
    <ul class="list-disc pr-6 space-y-2 mt-2">
      <li>بتفعله بكتابة "use strict" في أول الملف أو الدالة.</li>
      <li>بيمنع استخدام متغيرات من غير تصريح.</li>
      <li>بيخلي this تبقى undefined في الدوال العادية بدل window.</li>
      <li>بيمنع حذف متغيرات أو دوال معينة.</li>
    </ul>
  `,
      },
      {
        question: "ما هو الـ IIFE؟",
        answer: `
    <p>IIFE معناها Immediately Invoked Function Expression، يعني دالة بتنفذ فور تعريفها.</p>
    <ul class="list-disc pr-6 space-y-2 mt-2">
      <li>الصيغة: (function() { ... })()</li>
      <li>بتستخدمها عشان تعمل scope خاص ومتلوثش الـ global scope.</li>
      <li>كانت شائعة قبل ما الـ modules تظهر.</li>
    </ul>
  `,
      },
      {
        question: "ما هو الـ Temporal Dead Zone (TDZ)؟",
        answer: `
    <p>الـ Temporal Dead Zone هي الفترة اللي المتغير فيها اتعرّف (بسبب الـ Hoisting) بس لسه مش متاح للاستخدام.</p>
    <ul class="list-disc pr-6 space-y-2 mt-2">
      <li>بتحصل مع let و const.</li>
      <li>لو حاولت تستخدم المتغير قبل سطر التصريح، هتاخد ReferenceError.</li>
      <li>ده عكس var اللي كان بيرجع undefined.</li>
    </ul>
  `,
      },
      {
        question: "ما هو الفرق بين null و undefined و undeclared؟",
        answer: `
    <ul class="list-disc pr-6 space-y-3">
      <li>
        <strong>undefined:</strong> المتغير اتعرّف بس ماخدش قيمة.
      </li>
      <li>
        <strong>null:</strong> قيمة فارغة مقصودة من المطور.
      </li>
      <li>
        <strong>undeclared:</strong> المتغير أصلًا مش متعرّف، ولو استخدمته هتاخد ReferenceError.
      </li>
    </ul>
  `,
      },
      {
        question: "ما هو الـ Currying في JavaScript؟",
        answer: `
    <p>الـ Currying هو تحويل دالة بتاخد أكتر من parameter لدوال بتاخد parameter واحد كل مرة.</p>
    <ul class="list-disc pr-6 space-y-2 mt-2">
      <li>بدل function(a, b, c) تبقى function(a)(b)(c).</li>
      <li>مفيد في إعادة الاستخدام والتخصيص.</li>
    </ul>
  `,
      },
      {
        question: "ما هو الـ Memoization؟",
        answer: `
    <p>الـ Memoization تقنية بتخزن نتائج الدوال عشان لو اتنادت بنفس المدخلات ترجع النتيجة من الكاش بدل ما تحسبها تاني.</p>
    <ul class="list-disc pr-6 space-y-2 mt-2">
      <li>بتحسن الأداء خصوصًا مع العمليات التقيلة.</li>
      <li>بتستخدم كائن أو Map كـ cache.</li>
    </ul>
  `,
      },
      {
        question: "ما هو الـ Event Loop بالتفصيل؟",
        answer: `
    <p>الـ Event Loop بيشتغل كالتالي:</p>
    <ol class="list-decimal pr-6 space-y-2 mt-1">
      <li>بينفذ كل الكود المتزامن في الـ Call Stack.</li>
      <li>لما الـ Call Stack يفضى، بينفذ كل الـ Microtasks (Promises).</li>
      <li>بعد كده بياخد مهمة واحدة من الـ Macrotasks (setTimeout وغيرها) وينفذها.</li>
      <li>بيرجع تاني يشوف الـ Microtasks، وهكذا.</li>
    </ol>
    <p class="mt-2">عشان كده Promise.then بتنفذ قبل setTimeout حتى لو الوقت صفر.</p>
  `,
      },
      {
        question: "ما هو الفرق بين let و var في الـ loops؟",
        answer: `
    <p>الفرق بيظهر واضح في الـ for loop:</p>
    <ul class="list-disc pr-6 space-y-2 mt-2">
      <li>مع <strong>var</strong>: المتغير بيبقى مشترك لكل الـ iterations، فلو استخدمت setTimeout جوه اللوب هتلاقي كلهم واخدين آخر قيمة.</li>
      <li>مع <strong>let</strong>: كل iteration بيكون ليها scope خاص، فالقيمة بتتثبت صح.</li>
    </ul>
  `,
      },
      {
        question: "ما هو الـ Rest Parameter والـ Spread Operator؟",
        answer: `
    <ul class="list-disc pr-6 space-y-3">
      <li>
        <strong>Rest Parameter (...args):</strong>
        <ul class="list-circle pr-6 space-y-1 mt-1">
          <li>بيجمع باقي الـ arguments في مصفوفة.</li>
          <li>بيتكتب في تعريف الدالة.</li>
        </ul>
      </li>
      <li>
        <strong>Spread Operator (...arr):</strong>
        <ul class="list-circle pr-6 space-y-1 mt-1">
          <li>بيفرد عناصر المصفوفة أو الكائن.</li>
          <li>بيتكتب لما بتنادي الدالة أو بتعمل copy.</li>
        </ul>
      </li>
    </ul>
  `,
      },
      {
        question: "ما هو الـ Destructuring في JavaScript؟",
        answer: `
    <p>الـ Destructuring طريقة بتستخرج قيم من المصفوفات أو الكائنات بسهولة.</p>
    <ul class="list-disc pr-6 space-y-2 mt-2">
      <li>من المصفوفة: const [a, b] = array</li>
      <li>من الكائن: const {name, age} = obj</li>
      <li>بتقدر تحط قيم افتراضية وتغير الأسماء.</li>
    </ul>
  `,
      },
      {
        question: "ما هو الـ Optional Chaining (?.) ؟",
        answer: `
    <p>الـ Optional Chaining بيخليك توصل لخصائص متداخلة من غير ما تخاف من الخطأ لو واحدة منهم null أو undefined.</p>
    <ul class="list-disc pr-6 space-y-2 mt-2">
      <li>بدل ما تكتب obj && obj.user && obj.user.name</li>
      <li>بتكتب obj?.user?.name</li>
      <li>لو أي مستوى مش موجود بيرجع undefined بدل ما يرمي Error.</li>
    </ul>
  `,
      },
      {
        question: "ما هو الـ Nullish Coalescing (??) ؟",
        answer: `
    <p>الـ ?? بيرجع القيمة اليمين بس لو القيمة الشمال null أو undefined.</p>
    <ul class="list-disc pr-6 space-y-2 mt-2">
      <li>مختلف عن || لأنه || بيرجع اليمين لو القيمة الشمال falsy (0 أو '' أو false).</li>
      <li>?? أدق لما تكون عايز تقبل الـ 0 أو الـ string الفاضي كقيم صحيحة.</li>
    </ul>
  `,
      },
      {
        question: "ما هو الـ Template Literals؟",
        answer: `
    <p>الـ Template Literals هي الطريقة الحديثة لكتابة النصوص باستخدام العلامة \` \`.</p>
    <ul class="list-disc pr-6 space-y-2 mt-2">
      <li>بتقدر تعمل multi-line strings بسهولة.</li>
      <li>بتقدر تحط متغيرات جوه النص بـ \${variable}.</li>
      <li>أوضح بكتير من الـ concatenation القديمة.</li>
    </ul>
  `,
      },
      {
        question: "ما هو الـ Set في JavaScript؟",
        answer: `
    <p>الـ Set هو مجموعة من القيم الفريدة (مفيش تكرار).</p>
    <ul class="list-disc pr-6 space-y-2 mt-2">
      <li>بتضيف فيه بـ add().</li>
      <li>بتشيك بوجود قيمة بـ has().</li>
      <li>بتستخدمه لما تكون عايز تشيل التكرارات من مصفوفة بسهولة.</li>
    </ul>
  `,
      },
      {
        question: "ما هو الـ Map في JavaScript؟",
        answer: `
    <p>الـ Map هو هيكل بيانات بتخزن أزواج key-value، والـ key يقدر يبقى أي نوع (مش شرط string).</p>
    <ul class="list-disc pr-6 space-y-2 mt-2">
      <li>أحسن من الـ object العادي لما تكون الـ keys مش strings.</li>
      <li>بيرتب العناصر حسب ترتيب الإضافة.</li>
      <li>ليه دوال واضحة زي set و get و has و delete.</li>
    </ul>
  `,
      },
      {
        question: "ما هو الفرق بين for...in و for...of؟",
        answer: `
    <ul class="list-disc pr-6 space-y-3">
      <li>
        <strong>for...in:</strong>
        <ul class="list-circle pr-6 space-y-1 mt-1">
          <li>بتلف على الـ keys (أو الـ indexes).</li>
          <li>بتشتغل مع الكائنات والمصفوفات.</li>
        </ul>
      </li>
      <li>
        <strong>for...of:</strong>
        <ul class="list-circle pr-6 space-y-1 mt-1">
          <li>بتلف على الـ values.</li>
          <li>بتشتغل مع الـ iterables (مصفوفات، strings، Map، Set).</li>
          <li>مش بتشتغل مع الكائنات العادية.</li>
        </ul>
      </li>
    </ul>
  `,
      },
      {
        question: "ما هو الـ Generator Function؟",
        answer: `
    <p>الـ Generator Function هي دالة تقدر توقف تنفيذها وترجع قيمة، وبعدين تكمل من مكان ما وقفت.</p>
    <ul class="list-disc pr-6 space-y-2 mt-2">
      <li>بتتعرف بـ function*.</li>
      <li>بتستخدم yield عشان ترجع قيمة وتوقف.</li>
      <li>بتستدعيها بـ next().</li>
      <li>مفيدة في التعامل مع البيانات الكبيرة أو الـ infinite sequences.</li>
    </ul>
  `,
      },
      {
        question: "ما هو الـ Proxy في JavaScript؟",
        answer: `
    <p>الـ Proxy بيخليك تعمل wrapper حول كائن وتتحكم في عملياته الأساسية (زي القراءة والكتابة).</p>
    <ul class="list-disc pr-6 space-y-2 mt-2">
      <li>بتقدر تعترض get و set و delete وغيرهم.</li>
      <li>ده اللي Vue 3 بتستخدمه في نظام الـ Reactivity.</li>
    </ul>
  `,
      },
      {
        question: "ما هو الـ Reflect في JavaScript؟",
        answer: `
    <p>الـ Reflect هو object مدمج بيوفر دوال للعمليات الأساسية على الكائنات.</p>
    <ul class="list-disc pr-6 space-y-2 mt-2">
      <li>بيتستخدم كتير مع الـ Proxy.</li>
      <li>دواله زي Reflect.get و Reflect.set و Reflect.has.</li>
      <li>بيخلي التعامل مع العمليات الميتا برمجية أسهل وأنظف.</li>
    </ul>
  `,
      },
      {
        question: "ما هو الـ Symbol؟",
        answer: `
    <p>الـ Symbol هو نوع بيانات أساسي بيمثل قيمة فريدة ومش قابلة للتكرار.</p>
    <ul class="list-disc pr-6 space-y-2 mt-2">
      <li>كل Symbol بيبقى مختلف حتى لو الوصف واحد.</li>
      <li>بيستخدم كتير كـ keys مخفية في الكائنات.</li>
      <li>مفيش Symbolين متشابهين.</li>
    </ul>
  `,
      },
      {
        question: "ما هو الـ WeakMap و WeakSet؟",
        answer: `
    <ul class="list-disc pr-6 space-y-3">
      <li>
        <strong>WeakMap:</strong>
        <ul class="list-circle pr-6 space-y-1 mt-1">
          <li>زي الـ Map بس الـ keys لازم تكون objects.</li>
          <li>المراجع ضعيفة، فلو مفيش reference تاني للكائن، الـ Garbage Collector بيقدر يمسحه.</li>
        </ul>
      </li>
      <li>
        <strong>WeakSet:</strong>
        <ul class="list-circle pr-6 space-y-1 mt-1">
          <li>زي الـ Set بس بيخزن objects بس.</li>
          <li>كمان المراجع ضعيفة.</li>
        </ul>
      </li>
    </ul>
    <p class="mt-2">مفيدين لما تكون عايز تخزن بيانات إضافية من غير ما تمنع الـ Garbage Collection.</p>
  `,
      },
      {
        question: "ما هو الـ Event Emitter؟",
        answer: `
    <p>الـ Event Emitter هو نمط بتخلي كائن يقدر يطلق أحداث ويستمع ليها.</p>
    <ul class="list-disc pr-6 space-y-2 mt-2">
      <li>شائع جدًا في Node.js (مكتبة events).</li>
      <li>بتستخدم on() عشان تسمع، و emit() عشان تطلق الحدث.</li>
    </ul>
  `,
      },
      {
        question: "ما هو الفرق بين Microtasks و Macrotasks؟",
        answer: `
    <ul class="list-disc pr-6 space-y-3">
      <li>
        <strong>Microtasks:</strong>
        <ul class="list-circle pr-6 space-y-1 mt-1">
          <li>Promises، queueMicrotask، MutationObserver.</li>
          <li>بتتنفذ قبل أي Macrotask.</li>
        </ul>
      </li>
      <li>
        <strong>Macrotasks:</strong>
        <ul class="list-circle pr-6 space-y-1 mt-1">
          <li>setTimeout، setInterval، setImmediate، أحداث DOM.</li>
          <li>بتتنفذ بعد ما الـ Microtasks تخلص.</li>
        </ul>
      </li>
    </ul>
  `,
      },
      {
        question: "ما هو الـ Polyfill؟",
        answer: `
    <p>الـ Polyfill هو كود بتضيفه عشان توفر ميزة حديثة في المتصفحات القديمة اللي مش بتدعمها.</p>
    <ul class="list-disc pr-6 space-y-2 mt-2">
      <li>مثال: لو المتصفح مش بيدعم Promise، بتحط polyfill بيعمل نفس السلوك.</li>
      <li>مكتبات زي core-js بتوفر polyfills كتير.</li>
    </ul>
  `,
      },
      {
        question: "ما هو الـ Transpiling؟",
        answer: `
    <p>الـ Transpiling هو تحويل كود مكتوب بإصدار حديث من JavaScript لكود بإصدار أقدم يشتغل على متصفحات قديمة.</p>
    <ul class="list-disc pr-6 space-y-2 mt-2">
      <li>أشهر أداة: Babel.</li>
      <li>بتحول arrow functions و classes و غيرهم لكود ES5.</li>
    </ul>
  `,
      },
      {
        question: "ما هو الـ Bundle؟",
        answer: `
    <p>الـ Bundle هو ملف واحد (أو أكتر) بيجمع كل ملفات المشروع بعد ما الـ Bundler يعالجها.</p>
    <ul class="list-disc pr-6 space-y-2 mt-2">
      <li>الـ Bundlers زي Webpack و Vite و Rollup بيعملوا العملية دي.</li>
      <li>بيقللوا عدد الطلبات ويحسنوا الأداء.</li>
    </ul>
  `,
      },
      {
        question: "ما هو الـ Tree Shaking بالتفصيل؟",
        answer: `
    <p>الـ Tree Shaking تقنية بيشيل بيها الـ Bundler الكود اللي مش مستخدم من الحزمة النهائية.</p>
    <ul class="list-disc pr-6 space-y-2 mt-2">
      <li>بتشتغل كويس مع ES Modules لأن الاستيراد فيها static.</li>
      <li>لو استوردت دالة واحدة من ملف فيه 10 دوال، الـ 9 التانيين بيتشالوا.</li>
    </ul>
  `,
      },
      {
        question: "ما هو الـ CORS؟",
        answer: `
    <p>CORS معناها Cross-Origin Resource Sharing.</p>
    <ul class="list-disc pr-6 space-y-2 mt-2">
      <li>هي آلية بتتحكم في إيه المواقع اللي تقدر تطلب موارد من سيرفر تاني.</li>
      <li>المتصفح بيمنع الطلبات بين origins مختلفة إلا لو السيرفر صرح بيها في الـ headers.</li>
    </ul>
  `,
      },
    ],
  },

  vue: {
    title: "Vue.js (Vue 3, Pinia, Nuxt.js)",
    icon: "🟢",
    color: "green",
    questions: [
      // ============================
      // المستوى الأول: أساسيات Vue
      // ============================
      {
        question: "ما هو Vue.js؟ وما أهم مميزاته؟",
        answer: `
        <p>Vue.js ده فريمورك تقدمي Progressive، يعني بتبني بيه واجهات المستخدم UI باستخدام JavaScript، وهو مرن تقدر تستخدمه على قد ما تحب، سواء مشروع صغير أو كبير.</p>
        <p class="mt-3"><strong>أهم مميزاته:</strong></p>
        <ul class="list-disc pr-6 space-y-1 mt-1">
          <li>سهل التعلم جدًا، منحنى التعلم بتاعه أبسط بكتير من React أو Angular، أي حد يقدر يدخل فيه بسرعة.</li>
          <li>عنده نظام Reactivity قوي، يعني لو الداتا اتغيرت الواجهة بتتحدث لوحدها أوتوماتيك من غير ما تعمل حاجة.</li>
          <li>بتشتغل بمكونات Components، فبتقدر تبني أجزاء واجهة قابلة لإعادة الاستخدام وسهلة الصيانة.</li>
          <li>بيستخدم Virtual DOM، فالأداء بتاعه عالي لأنه بيحدث بس الأجزاء اللي اتغيرت مش الصفحة كلها.</li>
          <li>في Vue 3 فيه Composition API، وده بيخليك تنظم الكود أحسن وتعيد استخدام اللوجيك بسهولة أكتر من الـ Options API القديمة.</li>
          <li>دعم TypeScript فيه ممتاز جدًا.</li>
          <li>وفيه أدوات متكاملة جاهزة زي Vue Router للـ routing، و Pinia لإدارة الـ state، و Vite كـ build tool سريع.</li>
        </ul>
      `,
      },
      {
        question: "ما الفرق بين Vue 2 و Vue 3؟",
        answer: `
        <p>الفرق بينهم كبير شوية:</p>
        <ul class="list-disc pr-6 space-y-2">
          <li>Vue 3 أسرع وأخف، حجمه أصغر بحوالي 30%.</li>
          <li>نظام التفاعلية اتغير، Vue 3 بقى بيستخدم Proxy، بينما Vue 2 كان بيستخدم Object.defineProperty، وده خلى Vue 3 أقدر يتعامل مع الخصائص الديناميكية والمصفوفات بشكل أحسن.</li>
          <li>في Vue 3 تقدر تعمل أكتر من عنصر جذر في المكون الواحد، حاجة اسمها Multiple Root Nodes.</li>
          <li>Composition API بقت رسمية في Vue 3، ودي بتسهل تنظيم الكود أكتر.</li>
          <li>دعم TypeScript بقى أحسن بكتير لأن الكود الأساسي نفسه مكتوب بـ TypeScript.</li>
          <li>إدارة الحالة بقوا بيوصوا بـ Pinia بدل Vuex.</li>
          <li>وفيه ميزات جديدة زي Teleport و Suspense و Fragments.</li>
        </ul>
      `,
      },
      {
        question: "ما هو Single File Component (SFC) في Vue؟",
        answer: `
        <p>Single File Component ده ملف بامتداد .vue فيه تلات أقسام أساسية:</p>
        <ul class="list-disc pr-6 space-y-2 mt-2">
          <li><strong>&lt;template&gt;</strong>: فيه الـ HTML بتاع المكون، وتقدر تستخدم فيه تعليمات Vue زي v-if و v-for.</li>
          <li><strong>&lt;script&gt;</strong>: فيه الـ JavaScript، وبتقدر تستخدم setup مع Composition API.</li>
          <li><strong>&lt;style&gt;</strong>: فيه الـ CSS، وتقدر تحط scoped عشان الستايل ميأثرش على باقي الصفحات.</li>
        </ul>
        <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
          <pre class="text-sm overflow-x-auto"><code>&lt;template&gt;
  &lt;div&gt;
    &lt;h1&gt;{{ message }}&lt;/h1&gt;
    &lt;button @click="increment"&gt;Count: {{ count }}&lt;/button&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue'

const message = ref('Hello Vue!')
const count = ref(0)

const increment = () => {
  count.value++
}
&lt;/script&gt;

&lt;style scoped&gt;
h1 {
  color: blue;
}
&lt;/style&gt;</code></pre>
        </div>
      `,
      },
      {
        question: "ما هو Composition API في Vue 3؟",
        answer: `
        <p>Composition API دي طريقة جديدة لكتابة اللوجيك في مكونات Vue 3، وهي بديل للـ Options API القديمة.</p>
        <ul class="list-disc pr-6 space-y-2 mt-2">
          <li>بتنظم الكود حسب الميزة مش حسب النوع (data و methods و computed).</li>
          <li>بتسهل إعادة استخدام اللوجيك عن طريق حاجة اسمها Composables.</li>
          <li>دعم TypeScript فيها ممتاز.</li>
          <li>أحسن بكتير لما المكون يبقى كبير ومعقد.</li>
        </ul>
        <p class="mt-2">بتستخدمها مع &lt;script setup&gt;، وبتوفر دوال زي ref و reactive و computed و watch.</p>
        <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
          <pre class="text-sm overflow-x-auto"><code>// Options API
export default {
  data() {
    return { count: 0 }
  },
  methods: {
    increment() { this.count++ }
  }
}

// Composition API
&lt;script setup&gt;
import { ref } from 'vue'

const count = ref(0)
const increment = () => count.value++
&lt;/script&gt;</code></pre>
        </div>
      `,
      },
      {
        question: "ما الفرق بين Options API و Composition API؟",
        answer: `
        <p>الفرق بينهم واضح:</p>
        <ul class="list-disc pr-6 space-y-2">
          <li><strong>التنظيم:</strong> Options API بتنظم حسب النوع (data, methods, computed)، أما Composition API بتنظم حسب الميزة.</li>
          <li><strong>إعادة الاستخدام:</strong> في Options API كنت بتستخدم Mixins ودي معقدة، في Composition API بتستخدم Composables ودي أسهل وأنضف.</li>
          <li><strong>TypeScript:</strong> Composition API دعمها ممتاز، Options API محدود.</li>
          <li><strong>المكونات الكبيرة:</strong> Composition API أسهل في الصيانة، Options API بتبقى صعبة.</li>
          <li><strong>المكونات الصغيرة:</strong> Options API مناسبة، Composition API ممكن تبقى زيادة عن اللزوم.</li>
        </ul>
        <p class="mt-3">التوصية دلوقتي: استخدم Composition API مع &lt;script setup&gt; في Vue 3.</p>
      `,
      },
      {
        question: "ما هو <script setup> في Vue 3؟",
        answer: `
        <p>&lt;script setup&gt; ده اختصار (Syntactic Sugar) لـ Composition API في Vue 3.</p>
        <ul class="list-disc pr-6 space-y-2 mt-2">
          <li>بيخلي الكود أقل وأوضح.</li>
          <li>مش محتاج تعمل export default.</li>
          <li>المتغيرات والدوال بتبقى متاحة أوتوماتيك في الـ Template.</li>
          <li>الأداء بتاعه أحسن في وقت التشغيل.</li>
        </ul>
        <p class="mt-2">بتستخدمه مع ref و reactive و computed، وبيدعم defineProps و defineEmits و defineExpose.</p>
        <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
          <pre class="text-sm overflow-x-auto"><code>&lt;script setup&gt;
import { ref } from 'vue'

const count = ref(0)
const increment = () => count.value++

const props = defineProps({
  title: String
})

const emit = defineEmits(['update'])
&lt;/script&gt;</code></pre>
        </div>
      `,
      },
      {
        question: "ما هو ref في Vue 3؟",
        answer: `
        <p>ref دي دالة في Composition API بتعمل بيها بيانات تفاعلية.</p>
        <ul class="list-disc pr-6 space-y-2 mt-2">
          <li>بتشتغل مع كل أنواع البيانات (أرقام، نصوص، كائنات، مصفوفات...).</li>
          <li>محتاج تستخدم .value لما تقرأ أو تعدّل في الـ script.</li>
          <li>في الـ Template بتتفك لوحدها ومش محتاج .value.</li>
        </ul>
        <p class="mt-2">بتستخدمها للبيانات البسيطة، وللكائنات والمصفوفات كمان (بس reactive أحسن للكائنات الكبيرة).</p>
        <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
          <pre class="text-sm overflow-x-auto"><code>&lt;script setup&gt;
import { ref } from 'vue'

const count = ref(0)
const name = ref('Ahmed')
const isActive = ref(true)
const user = ref({ name: 'Ahmed', age: 30 })
const items = ref([1, 2, 3])

count.value = 10
console.log(count.value) // 10

// في الـ Template
// {{ count }} ← من غير .value
&lt;/script&gt;</code></pre>
        </div>
      `,
      },
      {
        question: "ما هو reactive في Vue 3؟",
        answer: `
        <p>reactive دي دالة في Composition API بتعمل بيها كائنات تفاعلية.</p>
        <ul class="list-disc pr-6 space-y-2 mt-2">
          <li>بتشتغل بس مع الكائنات والمصفوفات (مش مع الأنواع الأساسية).</li>
          <li>مش محتاج .value، بتتعامل مع الكائن على طول.</li>
          <li>بتفقد التفاعلية لو عملت إعادة تعيين للكائن كله.</li>
        </ul>
        <p class="mt-2">بتستخدمها للكائنات الكبيرة والمعقدة، ولما مش محتاج تعيد تعيين الكائن كله.</p>
        <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
          <pre class="text-sm overflow-x-auto"><code>&lt;script setup&gt;
import { reactive } from 'vue'

const user = reactive({
  name: 'Ahmed',
  age: 30,
  address: {
    city: 'Cairo',
    street: 'Main St'
  }
})

user.age = 31
console.log(user.age) // 31

// ⚠️ تحذير: إعادة التعيين بتفقد التفاعلية
// user = reactive({ name: 'Ali' }) // ❌ غلط
// الحل: استخدم Object.assign
Object.assign(user, { name: 'Ali', age: 25 })
&lt;/script&gt;</code></pre>
        </div>
        <p class="mt-2 text-sm text-blue-600">💡 نصيحة: استخدم ref في أغلب الحالات، و reactive بس مع الكائنات الكبيرة.</p>
      `,
      },
      {
        question: "ما الفرق بين ref و reactive في Vue 3؟",
        answer: `
        <p>الفرق بينهم كالتالي:</p>
        <ul class="list-disc pr-6 space-y-3">
          <li>
            <strong>ref:</strong>
            <ul class="list-circle pr-6 space-y-1 mt-1">
              <li>بتشتغل مع كل أنواع البيانات.</li>
              <li>محتاج .value في الـ script.</li>
              <li>بتتفك لوحدها في الـ Template.</li>
              <li>بتحافظ على التفاعلية لو عملت إعادة تعيين.</li>
            </ul>
          </li>
          <li>
            <strong>reactive:</strong>
            <ul class="list-circle pr-6 space-y-1 mt-1">
              <li>بتشتغل بس مع الكائنات والمصفوفات.</li>
              <li>مش محتاج .value.</li>
              <li>بتفقد التفاعلية لو عملت إعادة تعيين كاملة.</li>
            </ul>
          </li>
        </ul>
        <div class="mt-3 p-3 bg-blue-50 dark:bg-blue-900/20 border-r-4 border-blue-500 rounded">
          <p class="text-sm"><strong>💡 التوصية:</strong> استخدم ref في أغلب الحالات، و reactive بس مع الكائنات الكبيرة اللي مش هتعيد تعيينها.</p>
        </div>
        <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
          <pre class="text-sm overflow-x-auto"><code>// ref
const count = ref(0)
const user = ref({ name: 'Ahmed' })
user.value.name = 'Ali' // ✅ شغال

// reactive
const user2 = reactive({ name: 'Ahmed' })
user2.name = 'Ali' // ✅ شغال

// ref بيحافظ على التفاعلية
let count2 = ref(0)
count2.value = 10 // ✅ لسه تفاعلي

// reactive بيفقد التفاعلية
let user3 = reactive({ name: 'Ahmed' })
user3 = reactive({ name: 'Ali' }) // ❌ بيفقد التفاعلية</code></pre>
        </div>
      `,
      },
      {
        question: "ما هو computed في Vue؟",
        answer: `
        <p>computed دي قيمة بتتحسب لوحدها بناءً على بيانات تانية (ref أو reactive)، وبتتحدث تلقائي لما التبعيات تتغير.</p>
        <ul class="list-disc pr-6 space-y-2 mt-2">
          <li>فيها تخزين مؤقت (Caching)، يعني بتعيد استخدام النتيجة طالما التبعيات ما اتغيرتش.</li>
          <li>بتتحدث لوحدها لما أي تبعية تتغير.</li>
        </ul>
        <p class="mt-2">بتستخدمها لما تكون عايز قيمة مشتقة (زي الاسم الكامل)، أو عمليات حسابية تقيلة، أو فلترة وترتيب قوائم.</p>
        <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
          <pre class="text-sm overflow-x-auto"><code>&lt;script setup&gt;
import { ref, computed } from 'vue'

const firstName = ref('Ahmed')
const lastName = ref('Mohamed')

const fullName = computed(() => {
  return firstName.value + ' ' + lastName.value
})

const fullName2 = computed({
  get: () => firstName.value + ' ' + lastName.value,
  set: (value) => {
    const parts = value.split(' ')
    firstName.value = parts[0]
    lastName.value = parts[1] || ''
  }
})

console.log(fullName.value) // 'Ahmed Mohamed'
fullName2.value = 'Ali Hassan'
&lt;/script&gt;</code></pre>
        </div>
        <p class="mt-2 text-sm text-gray-500">⚠️ متستخدمش computed لعمليات غير متزامنة زي طلبات API، استخدم watch أو دوال عادية.</p>
      `,
      },
      {
        question: "ما الفرق بين computed و methods في Vue؟",
        answer: `
    <p>الفرق بينهم مهم:</p>
    <ul class="list-disc pr-6 space-y-3">
      <li>
        <strong>computed:</strong>
        <ul class="list-circle pr-6 space-y-1 mt-1">
          <li>بتتحسب لوحدها لما التبعيات تتغير.</li>
          <li>بتعمل تخزين مؤقت (Caching)، يعني مش بتحسب كل مرة.</li>
          <li>بتستخدمها للقيم المشتقة.</li>
          <li>مش بتاخد parameters.</li>
        </ul>
      </li>
      <li>
        <strong>methods:</strong>
        <ul class="list-circle pr-6 space-y-1 mt-1">
          <li>بتتنفذ بس لما تناديها.</li>
          <li>مش بتخزن النتيجة، بتحسب كل مرة.</li>
          <li>بتستخدمها لما محتاج parameters أو أحداث.</li>
          <li>بتاخد parameters.</li>
        </ul>
      </li>
    </ul>
    <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
      <pre class="text-sm overflow-x-auto"><code>&lt;script setup&gt;
import { ref, computed } from 'vue'

const items = ref([1, 2, 3, 4, 5])

const doubleComputed = computed(() => {
  console.log('Computed executed')
  return items.value.map(item => item * 2)
})

const doubleMethod = (items) => {
  console.log('Method executed')
  return items.map(item => item * 2)
}

console.log(doubleComputed.value) // بتنفذ مرة واحدة
console.log(doubleComputed.value) // من الكاش

console.log(doubleMethod(items.value)) // بتنفذ
console.log(doubleMethod(items.value)) // بتنفذ تاني
&lt;/script&gt;</code></pre>
    </div>
  `,
      },
      {
        question: "ما هو watch في Vue؟",
        answer: `
    <p>watch دي دالة بتراقب التغييرات في البيانات التفاعلية وبتنفذ كود لما يحصل تغيير.</p>
    <ul class="list-disc pr-6 space-y-2 mt-2">
      <li>بتراقب مصدر محدد (ref واحد أو أكتر).</li>
      <li>بتنفذ بس لما المصدر يتغير.</li>
      <li>بتديك القيمة القديمة والجديدة.</li>
    </ul>
    <p class="mt-2">بتستخدمها لما عايز تعمل طلب API لما قيمة البحث تتغير، أو تخزن بيانات في Local Storage، أو تعمل أي Side Effect.</p>
    <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
      <pre class="text-sm overflow-x-auto"><code>&lt;script setup&gt;
import { ref, watch } from 'vue'

const searchQuery = ref('')
const results = ref([])

watch(searchQuery, (newValue, oldValue) => {
  console.log('Search changed from', oldValue, 'to', newValue)
  fetchResults(newValue)
})

const firstName = ref('Ahmed')
const lastName = ref('Mohamed')

watch([firstName, lastName], ([newFirst, newLast]) => {
  console.log('Name changed:', newFirst, newLast)
})

const user = ref({ name: 'Ahmed', address: { city: 'Cairo' } })
watch(user, (newUser) => {
  console.log('User changed:', newUser)
}, { deep: true })

watch(searchQuery, (query) => {
  console.log('Immediate:', query)
}, { immediate: true })
&lt;/script&gt;</code></pre>
    </div>
  `,
      },
      {
        question: "ما الفرق بين watch و watchEffect في Vue؟",
        answer: `
    <p>الفرق بينهم كالتالي:</p>
    <ul class="list-disc pr-6 space-y-3">
      <li>
        <strong>watch:</strong>
        <ul class="list-circle pr-6 space-y-1 mt-1">
          <li>بتراقب مصدر محدد.</li>
          <li>بتنفذ بس لما المصدر يتغير.</li>
          <li>بتديك القيمة القديمة والجديدة.</li>
          <li>مفيدة في الـ Side Effects.</li>
        </ul>
      </li>
      <li>
        <strong>watchEffect:</strong>
        <ul class="list-circle pr-6 space-y-1 mt-1">
          <li>بتنفذ فوراً لما تعرفها.</li>
          <li>بتتتبع كل التبعيات اللي جواها أوتوماتيك.</li>
          <li>مش محتاج تحدد المصدر بنفسك.</li>
          <li>مفيدة لما عندك تأثير جانبي معتمد على أكتر من متغير.</li>
        </ul>
      </li>
    </ul>
    <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
      <pre class="text-sm overflow-x-auto"><code>&lt;script setup&gt;
import { ref, watch, watchEffect } from 'vue'

const count = ref(0)
const double = ref(0)

watch(count, (newValue) => {
  double.value = newValue * 2
})

watchEffect(() => {
  console.log('Count is:', count.value)
})

const name = ref('Ahmed')
watchEffect(() => {
  console.log('Name:', name.value)
})
// هتطبع فوراً: 'Name: Ahmed'

watch(name, (newName) => {
  console.log('Name changed:', newName)
})
// مش هتطبع حاجة لحد ما name يتغير
&lt;/script&gt;</code></pre>
    </div>
  `,
      },
      {
        question: "ما هو v-if في Vue؟",
        answer: `
    <p>v-if دي تعليمة بتضيف أو تحذف العنصر من الـ DOM حسب شرط.</p>
    <ul class="list-disc pr-6 space-y-2 mt-2">
      <li>بتحذف أو بتضيف العنصر بالكامل من الـ DOM.</li>
      <li>تكلفتها أعلى لما بتتبدل لأنها بتعيد إنشاء العنصر.</li>
      <li>مناسبة للعناصر اللي بتتغير نادر.</li>
    </ul>
    <p class="mt-2">فيها v-else-if و v-else كمان.</p>
    <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
      <pre class="text-sm overflow-x-auto"><code>&lt;template&gt;
  &lt;div&gt;
    &lt;button @click="show = !show"&gt;Toggle&lt;/button&gt;

    &lt;p v-if="show"&gt;Visible&lt;/p&gt;

    &lt;p v-if="show"&gt;Visible&lt;/p&gt;
    &lt;p v-else&gt;Hidden&lt;/p&gt;

    &lt;p v-if="status === 'success'"&gt;✅ Success&lt;/p&gt;
    &lt;p v-else-if="status === 'loading'"&gt;⏳ Loading...&lt;/p&gt;
    &lt;p v-else&gt;❌ Error&lt;/p&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue'

const show = ref(true)
const status = ref('success')
&lt;/script&gt;</code></pre>
    </div>
  `,
      },
      {
        question: "ما الفرق بين v-if و v-show في Vue؟",
        answer: `
    <p>الفرق بينهم مهم في الأداء:</p>
    <ul class="list-disc pr-6 space-y-3">
      <li>
        <strong>v-if:</strong>
        <ul class="list-circle pr-6 space-y-1 mt-1">
          <li>بتحذف أو بتضيف العنصر بالكامل من الـ DOM.</li>
          <li>تكلفتها أعلى لما بتتبدل.</li>
          <li>مناسبة للعناصر اللي بتتغير نادر.</li>
          <li>بتدعم v-else-if و v-else.</li>
        </ul>
      </li>
      <li>
        <strong>v-show:</strong>
        <ul class="list-circle pr-6 space-y-1 mt-1">
          <li>بتسيب العنصر في الـ DOM وبتحكم في ظهوره بـ display: none.</li>
          <li>تكلفتها أقل لما بتتبدل.</li>
          <li>مناسبة للعناصر اللي بتظهر وتختفي كتير زي الـ Tabs والـ Modals.</li>
          <li>مش بتدعم v-else-if أو v-else.</li>
        </ul>
      </li>
    </ul>
    <div class="mt-3 p-3 bg-yellow-50 dark:bg-yellow-900/20 border-r-4 border-yellow-500 rounded">
      <p class="text-sm"><strong>⚡ معلومة:</strong> v-if و v-show مش بيشتغلوا مع بعض على نفس العنصر، استخدم واحد بس.</p>
    </div>
  `,
      },
      {
        question: "ما هو v-for في Vue؟",
        answer: `
    <p>v-for دي تعليمة بتكرر عناصر بناءً على مصفوفة أو كائن.</p>
    <ul class="list-disc pr-6 space-y-2 mt-2">
      <li>مع المصفوفات: v-for="item in items" أو v-for="(item, index) in items"</li>
      <li>مع الكائنات: v-for="(value, key) in object"</li>
      <li>مع الأرقام: v-for="n in 10"</li>
    </ul>
    <p class="mt-2">مهم جدًا تستخدم key، عشان Vue تعرف تتبع هوية العناصر صح، وتمنع مشاكل في الـ Re-rendering، ولازم تكون فريدة لكل عنصر.</p>
    <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
      <pre class="text-sm overflow-x-auto"><code>&lt;template&gt;
  &lt;ul&gt;
    &lt;li v-for="item in items" :key="item.id"&gt;
      {{ item.name }}
    &lt;/li&gt;
  &lt;/ul&gt;

  &lt;ul&gt;
    &lt;li v-for="(item, index) in items" :key="item.id"&gt;
      {{ index + 1 }} - {{ item.name }}
    &lt;/li&gt;
  &lt;/ul&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue'

const items = ref([
  { id: 1, name: 'Item 1', active: true },
  { id: 2, name: 'Item 2', active: false },
  { id: 3, name: 'Item 3', active: true }
])
&lt;/script&gt;</code></pre>
    </div>
  `,
      },
      {
        question: "ما أهمية key في v-for؟",
        answer: `
    <p>key دي خاصية بتستخدمها مع v-for عشان تساعد Vue تتبع هوية العناصر صح.</p>
    <ul class="list-disc pr-6 space-y-2 mt-2">
      <li>بتساعد Vue تعرف العناصر اللي اتغيرت أو اتضافت أو اتشالت.</li>
      <li>بتحسن الأداء عن طريق إعادة استخدام العناصر الموجودة بدل ما تعيد إنشاءها.</li>
      <li>بتمنع مشاكل زي فقدان التركيز في الـ inputs.</li>
    </ul>
    <p class="mt-2">الأفضل تستخدم id فريد من الداتا. لو القائمة ثابتة ومش بتتغير تقدر تستخدم index. متستخدمش أبدًا Math.random() أو Date.now().</p>
  `,
      },
      {
        question: "ما هو v-model في Vue؟",
        answer: `
    <p>v-model دي تعليمة بتعمل ربط ثنائي الاتجاه بين الداتا والعناصر في الـ Template.</p>
    <ul class="list-disc pr-6 space-y-2 mt-2">
      <li>بتشتغل مع input و textarea و checkbox و radio و select.</li>
    </ul>
    <p class="mt-2">فيها معدلات زي:</p>
    <ul class="list-disc pr-6 space-y-1 mt-1">
      <li>.lazy ← بتحدّث عند change بدل input</li>
      <li>.number ← بتحول القيمة لرقم</li>
      <li>.trim ← بتشيل المسافات الزيادة</li>
    </ul>
    <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
      <pre class="text-sm overflow-x-auto"><code>&lt;template&gt;
  &lt;input v-model="text" placeholder="Type something" /&gt;
  &lt;p&gt;Text: {{ text }}&lt;/p&gt;

  &lt;textarea v-model="message"&gt;&lt;/textarea&gt;

  &lt;input type="checkbox" v-model="isChecked" /&gt;
  &lt;p&gt;Checked: {{ isChecked }}&lt;/p&gt;

  &lt;input v-model.lazy="text" /&gt;
  &lt;input v-model.number="age" type="number" /&gt;
  &lt;input v-model.trim="name" /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue'

const text = ref('')
const message = ref('')
const isChecked = ref(false)
&lt;/script&gt;</code></pre>
    </div>
  `,
      },
      {
        question: "ما الفرق بين v-bind و v-model؟",
        answer: `
    <p>الفرق بينهم بسيط:</p>
    <ul class="list-disc pr-6 space-y-3">
      <li>
        <strong>v-bind (أو :):</strong>
        <ul class="list-circle pr-6 space-y-1 mt-1">
          <li>ربط أحادي الاتجاه (من الداتا للـ DOM).</li>
          <li>بتستخدمه لربط أي خاصية.</li>
          <li>مثال: &lt;input :value="text" /&gt;</li>
        </ul>
      </li>
      <li>
        <strong>v-model:</strong>
        <ul class="list-circle pr-6 space-y-1 mt-1">
          <li>ربط ثنائي الاتجاه (داتا ↔ DOM).</li>
          <li>اختصار لـ v-bind:value + @input.</li>
          <li>بيشتغل مع العناصر النمطية زي input و textarea و select.</li>
        </ul>
      </li>
    </ul>
  `,
      },
      {
        question: "ما هو v-on (اختصار @) في Vue؟",
        answer: `
    <p>v-on (اختصار @) دي تعليمة بتستمع للأحداث وبتنفذ دوال لما تحصل.</p>
    <ul class="list-disc pr-6 space-y-2 mt-2">
      <li>بتستخدمها مع أحداث DOM زي @click و @input و @submit و @keyup.</li>
      <li>وكمان مع الأحداث المخصصة من المكونات الابنة.</li>
    </ul>
    <p class="mt-2">فيها معدلات مفيدة:</p>
    <ul class="list-disc pr-6 space-y-1 mt-1">
      <li>.stop ← بيوقف انتشار الحدث</li>
      <li>.prevent ← بيمنع السلوك الافتراضي</li>
      <li>.once ← بتنفذ مرة واحدة بس</li>
      <li>.self ← بتنفذ لو العنصر هو الهدف</li>
      <li>.enter ← بتنفذ لما تضغط Enter</li>
    </ul>
  `,
      },
      {
        question: "ما هو v-bind (اختصار :) في Vue؟",
        answer: `
    <p>v-bind (اختصار :) دي تعليمة بتربط الداتا بالخصائص (Attributes) والـ Props.</p>
    <ul class="list-disc pr-6 space-y-2 mt-2">
      <li>بتستخدمها لربط خصائص HTML زي :src و :href</li>
      <li>لربط الـ Props للمكونات</li>
      <li>لربط الـ Classes والـ Styles</li>
    </ul>
    <p class="mt-2">تقدر كمان تعمل ربط كائن كامل بـ v-bind="object"، أو ربط ديناميكي بـ :[attributeName]="value".</p>
  `,
      },
      {
        question: "ما هي Lifecycle Hooks في Vue 3؟",
        answer: `
    <p>Lifecycle Hooks دي دوال بتديك فرصة تنفذ كود في مراحل معينة من حياة المكون (من الإنشاء للتدمير).</p>
    <ul class="list-disc pr-6 space-y-2 mt-2">
      <li>onBeforeMount ← قبل ما المكون يتضاف للـ DOM</li>
      <li>onMounted ← بعد ما المكون يتضاف (مكان مثالي لطلبات API)</li>
      <li>onBeforeUpdate ← قبل إعادة الرسم</li>
      <li>onUpdated ← بعد إعادة الرسم</li>
      <li>onBeforeUnmount ← قبل تدمير المكون (مكان مثالي للتنظيف)</li>
      <li>onUnmounted ← بعد تدمير المكون</li>
      <li>onActivated / onDeactivated ← مع keep-alive</li>
      <li>onErrorCaptured ← لما يتحبس خطأ من مكون ابن</li>
    </ul>
    <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
      <pre class="text-sm overflow-x-auto"><code>&lt;script setup&gt;
import { onMounted, onBeforeUnmount } from 'vue'

onMounted(() => {
  console.log('DOM ready!')
  fetchData()
})

onBeforeUnmount(() => {
  // تنظيف Event Listeners هنا
})
&lt;/script&gt;</code></pre>
    </div>
  `,
      },
      // ============================
      // المستوى التاني: متوسط Vue (Pinia + Router + Nuxt + ...)
      // ============================
      {
        question: "ما هو Pinia؟ وما الفرق بينه وبين Vuex؟",
        answer: `
    <p>Pinia ده المكتبة الرسمية لإدارة الحالة (State Management) في Vue 3، وهو البديل الموصى بيه لـ Vuex.</p>
    <ul class="list-disc pr-6 space-y-2 mt-2">
      <li>أبسط بكتير من Vuex، مفيش Mutations.</li>
      <li>دعم TypeScript فيه ممتاز جدًا، بيستنتج الأنواع لوحده.</li>
      <li>بيشتغل طبيعي مع Composition API.</li>
      <li>أخف وزنًا من Vuex.</li>
      <li>دعم الـ SSR فيه أحسن.</li>
    </ul>
    <p class="mt-2">باختصار، Pinia أسهل وأسرع وأنضف، وعشان كده Vue 3 بيوصي بيه بدل Vuex.</p>
  `,
      },
      {
        question: "كيف تنشئ Store في Pinia؟",
        answer: `
    <p>في Pinia فيه طريقتين لإنشاء الـ Store:</p>
    <ul class="list-disc pr-6 space-y-2 mt-2">
      <li>
        <strong>Option Store</strong> (شبه Vuex):
        <ul class="list-circle pr-6 space-y-1 mt-1">
          <li>بتستخدم state و actions و getters.</li>
          <li>مناسبة للـ Stores البسيطة.</li>
        </ul>
      </li>
      <li>
        <strong>Setup Store</strong> (شبه Composition API):
        <ul class="list-circle pr-6 space-y-1 mt-1">
          <li>بتستخدم ref و reactive و computed.</li>
          <li>أكتر مرونة ومناسبة للـ Stores المعقدة.</li>
        </ul>
      </li>
    </ul>
    <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
      <pre class="text-sm overflow-x-auto"><code>// Option Store
export const useUserStore = defineStore('user', {
  state: () => ({
    name: 'Ahmed',
    age: 30
  }),
  getters: {
    isAdult: (state) => state.age >= 18
  },
  actions: {
    setName(newName) {
      this.name = newName
    }
  }
})

// Setup Store
export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)

  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})
</code></pre>
    </div>
  `,
      },
      {
        question: "كيف تصل إلى State و Actions في Pinia؟",
        answer: `
    <p>بتوصل للـ State والـ Actions بسهولة:</p>
    <ul class="list-disc pr-6 space-y-2 mt-2">
      <li>بتستدعي الـ Store جوه الـ setup.</li>
      <li>تقدر تعدّل الـ State مباشرة (ده مسموح في Pinia).</li>
      <li>لما تبهدل الـ Store لازم تستخدم storeToRefs عشان تحافظ على التفاعلية.</li>
    </ul>
    <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
      <pre class="text-sm overflow-x-auto"><code>&lt;script setup&gt;
import { useCounterStore } from '@/stores/counter'
import { storeToRefs } from 'pinia'

const store = useCounterStore()

// الوصول المباشر
console.log(store.count)

// عشان تحافظ على التفاعلية
const { count, doubleCount } = storeToRefs(store)
const { increment } = store

// تعديل مباشر
store.count = 10
store.increment()

// إعادة تعيين
store.$reset()
store.$patch({ count: 5 })
&lt;/script&gt;</code></pre>
    </div>
  `,
      },
      {
        question: "ما هو Vue Router؟ وما أهم مميزاته؟",
        answer: `
    <p>Vue Router ده المكتبة الرسمية للتوجيه (Routing) في تطبيقات Vue، وهو أساسي لتطبيقات الـ SPA.</p>
    <ul class="list-disc pr-6 space-y-2 mt-2">
      <li>بيدعم التوجيه المتداخل (Nested Routes).</li>
      <li>بيدعم التوجيه الديناميكي زي /user/:id.</li>
      <li>فيه Navigation Guards (حراس التوجيه) زي beforeEach و beforeEnter.</li>
      <li>بيدعم Lazy Loading للمكونات.</li>
      <li>History Mode بيخليك تعمل روابط نظيفة من غير #.</li>
    </ul>
  `,
      },
      {
        question: "كيف تستخدم Vue Router في المكونات؟",
        answer: `
    <p>بتستخدمه بسهولة جوه المكونات:</p>
    <ul class="list-disc pr-6 space-y-2 mt-2">
      <li>بتستخدم router-link للتنقل.</li>
      <li>بتستخدم router-view لعرض الصفحة الحالية.</li>
      <li>بتستخدم useRouter و useRoute عشان تتحكم برمجيًا.</li>
    </ul>
    <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
      <pre class="text-sm overflow-x-auto"><code>&lt;template&gt;
  &lt;router-link to="/"&gt;Home&lt;/router-link&gt;
  &lt;router-link :to="{ name: 'about' }"&gt;About&lt;/router-link&gt;
  &lt;router-view /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const goToHome = () => router.push('/')
const goToUser = (id) => router.push({ name: 'user', params: { id } })

console.log(route.params.id)
console.log(route.query.search)
&lt;/script&gt;</code></pre>
    </div>
  `,
      },
      {
        question: "ما هي Navigation Guards في Vue Router؟",
        answer: `
    <p>Navigation Guards دي دوال بتتحكم في التنقل بين الصفحات، وبتستخدمها عشان تتحقق من الصلاحيات أو تحمل بيانات.</p>
    <ul class="list-disc pr-6 space-y-2 mt-2">
      <li><strong>Global Guards:</strong> beforeEach و beforeResolve و afterEach.</li>
      <li><strong>Per-Route Guards:</strong> beforeEnter جوه تعريف المسار.</li>
      <li><strong>In-Component Guards:</strong> onBeforeRouteEnter و onBeforeRouteUpdate و onBeforeRouteLeave.</li>
    </ul>
    <p class="mt-2">أشهر استخدام ليها إنك تمنع المستخدم يدخل صفحة معينة لو مش عامل Login.</p>
  `,
      },
      {
        question: "ما هو Nuxt.js؟ وما أهم مميزاته؟",
        answer: `
    <p>Nuxt.js ده فريمورك مبني على Vue.js، بيضيف ميزات متقدمة لتطوير تطبيقات الويب.</p>
    <ul class="list-disc pr-6 space-y-2 mt-2">
      <li>بيدعم SSR (Server-Side Rendering) عشان يحسن الـ SEO والأداء.</li>
      <li>بيدعم SSG (Static Site Generation) عشان تعمل مواقع ثابتة.</li>
      <li>File-based Routing، يعني التوجيه بيتعمل لوحده حسب هيكل الملفات.</li>
      <li>Auto-imports، المكونات والـ Composables بتستورد لوحدها.</li>
      <li>نظام Modules قوي جدًا.</li>
      <li>دعم كامل لـ Composition API و TypeScript.</li>
    </ul>
  `,
      },
      {
        question: "ما الفرق بين SSR و SSG في Nuxt.js؟",
        answer: `
    <p>الفرق بينهم كالتالي:</p>
    <ul class="list-disc pr-6 space-y-3">
      <li>
        <strong>SSR (Server-Side Rendering):</strong>
        <ul class="list-circle pr-6 space-y-1 mt-1">
          <li>الصفحات بتتعرض على السيرفر وبعدين تتبعت للمتصفح.</li>
          <li>مفيد جدًا للـ SEO وتحسين الأداء الأولي.</li>
          <li>المحتوى ديناميكي بيتغير مع كل طلب.</li>
          <li>بيستهلك موارد السيرفر أكتر.</li>
        </ul>
      </li>
      <li>
        <strong>SSG (Static Site Generation):</strong>
        <ul class="list-circle pr-6 space-y-1 mt-1">
          <li>الصفحات بتتعرض في وقت الـ Build.</li>
          <li>مفيد للمواقع الثابتة زي المدونات.</li>
          <li>المحتوى ثابت ومش بيتغير.</li>
          <li>أسرع ومش بيستهلك موارد السيرفر.</li>
        </ul>
      </li>
    </ul>
  `,
      },
      {
        question: "ما هو provide/inject في Vue؟",
        answer: `
    <p>provide/inject ده نمط بيخليك تمرر بيانات عبر مستويات متعددة من المكونات من غير ما تعديها بـ Props (Prop Drilling).</p>
    <ul class="list-disc pr-6 space-y-2 mt-2">
      <li>provide ← بتقدم البيانات من المكون الأب.</li>
      <li>inject ← بتستقبل البيانات في المكون الابن (أي مستوى).</li>
    </ul>
    <p class="mt-2">مهم تعرف إن provide/inject مش تفاعلي لوحده، لازم تستخدم ref أو reactive عشان يبقى تفاعلي.</p>
  `,
      },
      {
        question: "ما هو Teleport في Vue 3؟",
        answer: `
    <p>Teleport ده مكون في Vue 3 بيخليك ترندر جزء من الـ Template في مكان تاني في الـ DOM، برا هيكل المكون.</p>
    <ul class="list-disc pr-6 space-y-2 mt-2">
      <li>مفيد جدًا في الـ Modals.</li>
      <li>مفيد في الـ Tooltips.</li>
      <li>مفيد في الـ Notifications.</li>
    </ul>
    <p class="mt-2">بتقدر كمان تعطله بـ :disabled لو عايز.</p>
  `,
      },
      {
        question: "ما هو Suspense في Vue 3؟",
        answer: `
    <p>Suspense ده مكون في Vue 3 بيتعامل مع المكونات غير المتزامنة (Async Components) وبيعرض محتوى بديل (Fallback) أثناء التحميل.</p>
    <ul class="list-disc pr-6 space-y-2 mt-2">
      <li>مفيد لما بتحمل مكونات كبيرة بـ Lazy Loading.</li>
      <li>مفيد لما بتعمل طلب بيانات غير متزامن في الـ setup.</li>
      <li>بيخليك تعرض شاشة تحميل أثناء ما البيانات بتيجي.</li>
    </ul>
    <p class="mt-2">لسه تجريبي شوية في Vue 3، بس بيشتغل كويس مع defineAsyncComponent.</p>
  `,
      },
      {
        question: "ما هو Keep-Alive في Vue؟",
        answer: `
    <p>Keep-Alive ده مكون بيحافظ على حالة المكونات لما بتنقل بينها، بدل ما يدمرها ويعيد إنشاءها.</p>
    <ul class="list-disc pr-6 space-y-2 mt-2">
      <li>مفيد لما عايز تحافظ على حالة الفورمات.</li>
      <li>مفيد لما عايز تحافظ على مكان الـ Scroll في القوائم.</li>
      <li>بيحسن الأداء لأنه مش بيعيد تحميل المكون كل مرة.</li>
    </ul>
    <p class="mt-2">تقدر تحدد المكونات اللي هتتخزن بـ include و exclude، وتحدد الحد الأقصى بـ max.</p>
  `,
      },
      {
        question: "ما هو defineProps في Vue 3؟",
        answer: `
    <p>defineProps دي دالة بتستخدمها مع &lt;script setup&gt; عشان تعرف الـ Props اللي المكون هيستقبلها.</p>
    <ul class="list-disc pr-6 space-y-2 mt-2">
      <li>بتقدر تحدد نوع البيانات (خصوصًا مع TypeScript).</li>
      <li>بتقدر تحدد القيم الافتراضية.</li>
      <li>بتقدر تحدد لو الـ Prop مطلوبة ولا لأ.</li>
    </ul>
    <p class="mt-2">القيم بتبقى متاحة أوتوماتيك في الـ Template.</p>
  `,
      },
      {
        question: "ما هو defineEmits في Vue 3؟",
        answer: `
    <p>defineEmits دي دالة بتستخدمها مع &lt;script setup&gt; عشان تعرف الأحداث اللي المكون هيبعثها (Emits).</p>
    <ul class="list-disc pr-6 space-y-2 mt-2">
      <li>بتحدد الأحداث اللي المكون يقدر يبعتها.</li>
      <li>بتقدر تحدد الـ Payload بتاع كل حدث.</li>
      <li>بتقدر تعمل validation على البيانات اللي بتتبعت.</li>
    </ul>
    <p class="mt-2">دي الطريقة النظيفة عشان المكون الابن يكلم المكون الأب.</p>
  `,
      },
      {
        question: "ما هو defineExpose في Vue 3؟",
        answer: `
    <p>defineExpose دي دالة بتستخدمها مع &lt;script setup&gt; عشان تكشف بعض الخصائص والدوال للمكون الأب.</p>
    <ul class="list-disc pr-6 space-y-2 mt-2">
      <li>بتخلي المكون الأب يقدر ينادي دوال من المكون الابن.</li>
      <li>بتخلي المكون الأب يقدر يقرأ بيانات من المكون الابن.</li>
    </ul>
    <p class="mt-2">بتستخدمها لما تحتاج تتحكم في المكون الابن من بره عن طريق الـ ref.</p>
  `,
      },
      {
        question: "ما هو defineModel في Vue 3؟",
        answer: `
    <p>defineModel دي دالة جات في Vue 3.4 وبتسهل التعامل مع v-model في المكونات.</p>
    <ul class="list-disc pr-6 space-y-2 mt-2">
      <li>اختصار لـ props + emit بتوع الـ v-model.</li>
      <li>بتدعم v-model المتعدد.</li>
      <li>بتدعم الـ Modifiers.</li>
    </ul>
    <p class="mt-2">بدل ما تكتب props و emit يدوي، بتستخدم defineModel وبتبقى أسهل وأنظف.</p>
  `,
      },
      {
        question: "ما هو Plugin في Vue؟ وكيف تنشئ واحداً؟",
        answer: `
    <p>Plugin ده كود بتضيفه لتطبيق Vue عشان توفر وظائف عامة لكل المكونات.</p>
    <ul class="list-disc pr-6 space-y-2 mt-2">
      <li>بتسجل بيه مكونات عامة (Global Components).</li>
      <li>بتضيف بيه دوال مساعدة.</li>
      <li>بتستخدمه عشان تهيئ مكتبات خارجية زي Vue Router و Pinia.</li>
    </ul>
    <p class="mt-2">بتعمله بـ install function، وبعدين بتستخدمه بـ app.use().</p>
  `,
      },
      {
        question: "ما هو Directive في Vue؟ وكيف تنشئ توجيهاً مخصصاً؟",
        answer: `
    <p>Directive (توجيه) ده تعليمة مخصصة زي v-focus بتطبق سلوك معين على عناصر الـ DOM.</p>
    <ul class="list-disc pr-6 space-y-2 mt-2">
      <li>ليه دورة حياة: beforeMount، mounted، beforeUpdate، updated، beforeUnmount، unmounted.</li>
    </ul>
    <p class="mt-2">بتستخدمه لما تحتاج سلوك يتكرر على عناصر كتير ومش عايز تكرره في كل مكون.</p>
  `,
      },
      {
        question: "ما هو Mixin في Vue؟ وما هي عيوبه؟",
        answer: `
    <p>Mixin ده طريقة قديمة لإعادة استخدام اللوجيك بين المكونات عن طريق دمج البيانات والدوال.</p>
    <ul class="list-disc pr-6 space-y-2 mt-2">
      <li>عيوبه كتير:</li>
      <li>ممكن يحصل تضارب في الأسماء.</li>
      <li>صعب تعرف مصدر البيانات والدوال منين.</li>
      <li>لما يزيد عدد الـ Mixins الكود بيبقى معقد وصعب الصيانة.</li>
    </ul>
    <p class="mt-2">عشان كده في Vue 3 الأفضل تستخدم Composables بدل Mixins.</p>
  `,
      },
      {
        question: "ما هو Composable في Vue 3؟",
        answer: `
    <p>Composable ده دالة بتستخدم Composition API عشان تعيد استخدام اللوجيك بين المكونات.</p>
    <ul class="list-disc pr-6 space-y-2 mt-2">
      <li>بتتجنب تضارب الأسماء (عكس الـ Mixins).</li>
      <li>مصدر البيانات والدوال واضح.</li>
      <li>سهلة في الصيانة والاختبار.</li>
      <li>بتدعم TypeScript بشكل كامل.</li>
    </ul>
    <p class="mt-2">دي الطريقة الحديثة والأفضل لإعادة استخدام اللوجيك في Vue 3.</p>
  `,
      },
      {
        question: "ما الفرق بين props و provide/inject؟",
        answer: `
    <p>الفرق بينهم كالتالي:</p>
    <ul class="list-disc pr-6 space-y-3">
      <li>
        <strong>props:</strong>
        <ul class="list-circle pr-6 space-y-1 mt-1">
          <li>بتمرر البيانات من الأب للابن مباشرة.</li>
          <li>لازم تعديها من كل مستوى (Prop Drilling).</li>
          <li>البيانات للقراءة فقط.</li>
          <li>مناسبة للبيانات المحلية.</li>
        </ul>
      </li>
      <li>
        <strong>provide/inject:</strong>
        <ul class="list-circle pr-6 space-y-1 mt-1">
          <li>بتمرر البيانات عبر مستويات متعددة من غير ما تعديها يدوي.</li>
          <li>تقدر توصلها من أي مستوى (ابن أو حفيد).</li>
          <li>تقدر تخليها تفاعلية لو استخدمت ref أو reactive.</li>
          <li>مناسبة للبيانات العامة زي الثيم أو اللغة.</li>
        </ul>
      </li>
    </ul>
  `,
      },
      {
        question: "ما الفرق بين watch و computed في Vue؟",
        answer: `
    <p>الفرق بينهم واضح:</p>
    <ul class="list-disc pr-6 space-y-3">
      <li>
        <strong>computed:</strong>
        <ul class="list-circle pr-6 space-y-1 mt-1">
          <li>بتستخدمها عشان تحسب قيمة بناءً على بيانات تانية.</li>
          <li>بتعمل تخزين مؤقت (Caching).</li>
          <li>بترجع قيمة وبتستخدمها في الـ Template.</li>
          <li>مناسبة للقيم المشتقة.</li>
        </ul>
      </li>
      <li>
        <strong>watch:</strong>
        <ul class="list-circle pr-6 space-y-1 mt-1">
          <li>بتستخدمها عشان تراقب التغييرات وتنفذ كود.</li>
          <li>مش بتخزن نتيجة.</li>
          <li>مش بترجع قيمة، بتنفذ كود بس.</li>
          <li>مناسبة للعمليات غير المتزامنة زي طلبات API.</li>
        </ul>
      </li>
    </ul>
  `,
      },
      {
        question: "ما الفرق بين nextTick و $nextTick في Vue؟",
        answer: `
    <p>الاتنين نفس الفكرة، بس الفرق في طريقة الاستخدام:</p>
    <ul class="list-disc pr-6 space-y-3">
      <li>
        <strong>nextTick</strong> (في Composition API):
        <ul class="list-circle pr-6 space-y-1 mt-1">
          <li>دالة بتستوردها من vue.</li>
          <li>بتستخدمها عشان تستنى تحديث الـ DOM بعد ما الداتا تتغير.</li>
        </ul>
      </li>
      <li>
        <strong>$nextTick</strong> (في Options API):
        <ul class="list-circle pr-6 space-y-1 mt-1">
          <li>نفس الوظيفة بس خاصة بالمكون.</li>
          <li>بتستخدمها بـ this.$nextTick().</li>
        </ul>
      </li>
    </ul>
    <p class="mt-2">بتستخدمها لما تحتاج تعمل حاجة بعد ما الـ DOM يتحدث فعليًا.</p>
  `,
      },
      // ============================
      // المستوى الثالث: متقدم Vue (30 سؤال)
      // ============================
      {
        question: "ما الفرق بين provide و app.provide في Vue؟",
        answer: `
    <p>الفرق بينهم في النطاق:</p>
    <ul class="list-disc pr-6 space-y-3">
      <li>
        <strong>provide في المكون:</strong>
        <ul class="list-circle pr-6 space-y-1 mt-1">
          <li>بتستخدمه في المكون الأب.</li>
          <li>متاح بس للمكونات اللي تحت المكون ده.</li>
        </ul>
      </li>
      <li>
        <strong>app.provide:</strong>
        <ul class="list-circle pr-6 space-y-1 mt-1">
          <li>بتستخدمه على مستوى التطبيق كله في main.js.</li>
          <li>متاح لكل المكونات في التطبيق.</li>
        </ul>
      </li>
    </ul>
  `,
      },
      {
        question: "ما الفرق بين defineAsyncComponent و import() العادي؟",
        answer: `
    <p>الفرق بينهم إن defineAsyncComponent أدق وأقوى:</p>
    <ul class="list-disc pr-6 space-y-3">
      <li>
        <strong>import() العادي:</strong>
        <ul class="list-circle pr-6 space-y-1 mt-1">
          <li>تحميل ديناميكي للمكونات.</li>
          <li>بيرجع Promise.</li>
        </ul>
      </li>
      <li>
        <strong>defineAsyncComponent:</strong>
        <ul class="list-circle pr-6 space-y-1 mt-1">
          <li>دالة مخصصة في Vue.</li>
          <li>بتدعم مكون تحميل (Loading) ومكون خطأ (Error).</li>
          <li>بتدعم تأخير (Delay) ومهلة (Timeout).</li>
        </ul>
      </li>
    </ul>
  `,
      },
      {
        question: "ما الفرق بين render function و template في Vue؟",
        answer: `
    <p>الفرق بينهم في طريقة الكتابة والمرونة:</p>
    <ul class="list-disc pr-6 space-y-3">
      <li>
        <strong>template:</strong>
        <ul class="list-circle pr-6 space-y-1 mt-1">
          <li>كتابة HTML بديهية وسهلة.</li>
          <li>بتترجم لـ render function لوحدها.</li>
          <li>مناسبة لمعظم الحالات.</li>
        </ul>
      </li>
      <li>
        <strong>render function:</strong>
        <ul class="list-circle pr-6 space-y-1 mt-1">
          <li>كتابة JavaScript مباشرة لإنشاء الـ VNodes.</li>
          <li>أكتر مرونة وقوة.</li>
          <li>بتستخدمها لما الـ Template مش كافية، خصوصًا في المكتبات والمكونات عالية الأداء.</li>
        </ul>
      </li>
    </ul>
  `,
      },
      {
        question: "ما الفرق بين shallowRef و shallowReactive في Vue؟",
        answer: `
    <p>الاتنين بعملوا تفاعلية على المستوى الأول بس عشان يحسنوا الأداء:</p>
    <ul class="list-disc pr-6 space-y-3">
      <li>
        <strong>shallowRef:</strong>
        <ul class="list-circle pr-6 space-y-1 mt-1">
          <li>التفاعلية على .value بس.</li>
          <li>تغيير خصائص جوه الكائن مش بيحدث التفاعلية.</li>
        </ul>
      </li>
      <li>
        <strong>shallowReactive:</strong>
        <ul class="list-circle pr-6 space-y-1 mt-1">
          <li>التفاعلية على المستوى الأول من الخصائص.</li>
          <li>تغيير الخصائص المتداخلة مش بيحدث التفاعلية.</li>
        </ul>
      </li>
    </ul>
    <p class="mt-2">بتستخدمهم مع البيانات الكبيرة اللي مش محتاجة تفاعلية عميقة عشان تحسن الأداء.</p>
  `,
      },
      {
        question: "كيف تحسن أداء تطبيق Vue؟",
        answer: `
    <p>في كام طريقة مهمة تحسن بيها الأداء:</p>
    <ul class="list-disc pr-6 space-y-2 mt-2">
      <li>استخدم v-once و v-memo عشان تمنع إعادة الرسم الغير ضرورية.</li>
      <li>استخدم Lazy Loading للمكونات بـ defineAsyncComponent.</li>
      <li>استخدم shallowRef و shallowReactive مع البيانات الكبيرة.</li>
      <li>استخدم computed بدل methods عشان تستفيد من الـ Caching.</li>
      <li>استخدم KeepAlive عشان تحافظ على حالة المكونات.</li>
      <li>اعمل Code Splitting.</li>
      <li>متستخدمش v-for مع v-if على نفس العنصر، فلتر الأول بـ computed.</li>
    </ul>
  `,
      },
      {
        question: "ما الفرق بين $attrs و $props في Vue؟",
        answer: `
    <p>الفرق بينهم كالتالي:</p>
    <ul class="list-disc pr-6 space-y-3">
      <li>
        <strong>$props:</strong>
        <ul class="list-circle pr-6 space-y-1 mt-1">
          <li>فيها كل الـ Props اللي المكون أعلن عنها.</li>
        </ul>
      </li>
      <li>
        <strong>$attrs:</strong>
        <ul class="list-circle pr-6 space-y-1 mt-1">
          <li>فيها كل الـ Attributes اللي المكون <strong>ما أعلنهاش</strong> كـ Props.</li>
          <li>بتشمل class و style وأي خصائص DOM تانية.</li>
          <li>بتستخدمها عشان تمرر البيانات للمكونات الابنة بـ v-bind="$attrs".</li>
        </ul>
      </li>
    </ul>
  `,
      },
      {
        question: "ما الفرق بين $slots و $scopedSlots في Vue؟",
        answer: `
    <p>في Vue 3 الفرق اختفى تقريبًا:</p>
    <ul class="list-disc pr-6 space-y-3">
      <li>
        <strong>$slots:</strong>
        <ul class="list-circle pr-6 space-y-1 mt-1">
          <li>فيها كل الـ slots اللي المكون الأب بيمررها.</li>
        </ul>
      </li>
      <li>
        <strong>$scopedSlots:</strong>
        <ul class="list-circle pr-6 space-y-1 mt-1">
          <li>كانت موجودة في Vue 2 للـ Scoped slots بس.</li>
          <li>في Vue 3 ادمجت جوه $slots وبقت حاجة واحدة.</li>
        </ul>
      </li>
    </ul>
  `,
      },
      {
        question: "ما الفرق بين <slot> و <template> في Vue؟",
        answer: `
    <p>الفرق بينهم في الاستخدام:</p>
    <ul class="list-disc pr-6 space-y-3">
      <li>
        <strong>&lt;slot&gt;:</strong>
        <ul class="list-circle pr-6 space-y-1 mt-1">
          <li>بتستخدمه في المكون الابن عشان تحدد مكان عرض المحتوى اللي جاي من الأب.</li>
          <li>يقدر يبقى Named أو Scoped.</li>
        </ul>
      </li>
      <li>
        <strong>&lt;template&gt;:</strong>
        <ul class="list-circle pr-6 space-y-1 mt-1">
          <li>بتستخدمه في المكون الأب عشان تجمع المحتوى اللي هيتبعت للـ slot.</li>
          <li>بتستخدمه مع v-slot أو #.</li>
          <li>بتستخدمه كمان كعنصر تجميعي من غير ما يظهر في الـ DOM.</li>
        </ul>
      </li>
    </ul>
  `,
      },
      {
        question: "ما الفرق بين v-slot و # في Vue؟",
        answer: `
    <p>مفيش فرق فعلي، # ده اختصار لـ v-slot.</p>
    <ul class="list-disc pr-6 space-y-2 mt-2">
      <li>v-slot هي الصيغة الكاملة.</li>
      <li># هي الاختصار (Syntactic Sugar).</li>
    </ul>
    <p class="mt-2">الاتنين بيشتغلوا بنفس الطريقة، بس # أقصر وأوضح.</p>
  `,
      },
      {
        question: "كيف تتعامل مع Memory Leaks في Vue؟",
        answer: `
    <p>عشان تتجنب تسريب الذاكرة لازم تنظف وراك:</p>
    <ul class="list-disc pr-6 space-y-2 mt-2">
      <li>شيل الـ Event Listeners في onUnmounted.</li>
      <li>ألغي الـ Observers (IntersectionObserver وغيره).</li>
      <li>ألغي الـ Timers بـ clearTimeout و clearInterval.</li>
      <li>ألغي أي Subscriptions.</li>
      <li>متستخدمش متغيرات عالمية كتير من غير تنظيف.</li>
    </ul>
    <p class="mt-2">أهم حاجة: أي حاجة بتعملها في onMounted، نظفها في onUnmounted.</p>
  `,
      },
      {
        question: "ما الفرق بين vite و webpack مع Vue؟",
        answer: `
    <p>الفرق كبير في تجربة التطوير:</p>
    <ul class="list-disc pr-6 space-y-3">
      <li>
        <strong>Vite:</strong>
        <ul class="list-circle pr-6 space-y-1 mt-1">
          <li>أسرع بكتير في التطوير (HMR فوري).</li>
          <li>بيستخدم ES Modules في التطوير.</li>
          <li>بيستخدم Rollup في الإنتاج.</li>
          <li>التكوين أسهل وأقل تعقيدًا.</li>
        </ul>
      </li>
      <li>
        <strong>Webpack:</strong>
        <ul class="list-circle pr-6 space-y-1 mt-1">
          <li>أبطأ في التطوير.</li>
          <li>بيعمل Bundle كامل.</li>
          <li>التكوين أكتر تعقيدًا.</li>
        </ul>
      </li>
    </ul>
    <p class="mt-2">عشان كده Vue 3 بقى بيستخدم Vite كـ default.</p>
  `,
      },
      {
        question: "كيف تعمل Reactivity في Vue 3 (Proxy vs defineProperty)؟",
        answer: `
    <p>الفرق الجوهري بين Vue 2 و Vue 3 في نظام التفاعلية:</p>
    <ul class="list-disc pr-6 space-y-3">
      <li>
        <strong>Vue 2 (defineProperty):</strong>
        <ul class="list-circle pr-6 space-y-1 mt-1">
          <li>كان محتاج يستبدل الكائنات والمصفوفات.</li>
          <li>مش بيدعم الخصائص الديناميكية بسهولة (كان محتاج Vue.set).</li>
          <li>دعم المصفوفات كان محدود.</li>
        </ul>
      </li>
      <li>
        <strong>Vue 3 (Proxy):</strong>
        <ul class="list-circle pr-6 space-y-1 mt-1">
          <li>بيدعم كل التغييرات أوتوماتيك.</li>
          <li>بيدعم الخصائص الديناميكية من غير أي إضافات.</li>
          <li>بيدعم المصفوفات بشكل كامل.</li>
          <li>أسرع وأكثر كفاءة.</li>
        </ul>
      </li>
    </ul>
  `,
      },
      // ============================
      // المستوى الرابع: متقدم جداً (Advanced Plus) - 40 سؤال
      // ============================
      {
        question: "كيف تتعامل مع النماذج (Forms) في Vue؟",
        answer: `
    <p>التعامل مع الفورمات في Vue سهل عن طريق v-model و @submit.</p>
    <ul class="list-disc pr-6 space-y-2 mt-2">
      <li>بتستخدم v-model مع الـ inputs والـ textarea والـ checkbox والـ radio والـ select.</li>
      <li>بتقدر تستخدم الـ modifiers زي .trim و .number و .lazy.</li>
      <li>بتمنع الـ submit الافتراضي بـ @submit.prevent.</li>
      <li>بتعمل validation يدوي أو بمكتبات زي VeeValidate.</li>
    </ul>
  `,
      },
      {
        question: "كيف تتعامل مع الـ Validation في Vue؟",
        answer: `
    <p>فيه أكتر من طريقة:</p>
    <ul class="list-disc pr-6 space-y-2 mt-2">
      <li><strong>Validation يدوي:</strong> بتعمل دوال تتحقق من البيانات وتعرض رسائل الخطأ.</li>
      <li><strong>VeeValidate:</strong> مكتبة قوية وبتشتغل كويس مع Composition API، وبتدعم yup و zod.</li>
      <li><strong>Yup أو Zod:</strong> مكتبات Schema Validation بتستخدمها لوحدها أو مع VeeValidate.</li>
    </ul>
    <p class="mt-2">لو المشروع صغير اعمل validation يدوي، لو كبير استخدم VeeValidate.</p>
  `,
      },
      {
        question: "كيف تتعامل مع الـ API في Vue؟",
        answer: `
    <p>فيه تلات طرق شائعة:</p>
    <ul class="list-disc pr-6 space-y-2 mt-2">
      <li><strong>fetch:</strong> مدمج في المتصفح ومش محتاج مكتبة.</li>
      <li><strong>Axios:</strong> مكتبة أقوى وفيها interceptors وتحويل بيانات أسهل.</li>
      <li><strong>Composables:</strong> بتعمل useFetch أو useApi عشان تعيد استخدام لوجيك الـ API.</li>
    </ul>
    <p class="mt-2">الأفضل تعمل Composable خاص بيك عشان الكود يبقى نظيف وقابل لإعادة الاستخدام.</p>
  `,
      },
      {
        question: "كيف تتعامل مع الـ Authentication في Vue؟",
        answer: `
    <p>الطريقة الشائعة بتكون كالتالي:</p>
    <ul class="list-disc pr-6 space-y-2 mt-2">
      <li>بتستخدم JWT وبتخزن التوكن في localStorage أو cookies.</li>
      <li>بتعمل Pinia Store مخصوص للمصادقة فيه user و token و isAuthenticated.</li>
      <li>بتستخدم Route Guards (beforeEach) عشان تمنع الدخول للصفحات المحمية.</li>
      <li>بتضيف التوكن في هيدر الطلبات عن طريق Axios interceptor.</li>
    </ul>
  `,
      },
      {
        question: "كيف تتعامل مع الـ Environment Variables في Vue؟",
        answer: `
    <p>في Vite بتستخدم import.meta.env عشان توصل لمتغيرات البيئة.</p>
    <ul class="list-disc pr-6 space-y-2 mt-2">
      <li>الملفات بتكون .env و .env.development و .env.production و .env.local.</li>
      <li>لازم تبدأ اسم المتغير بـ VITE_ عشان يظهر في الكود.</li>
    </ul>
    <p class="mt-2">مثال: import.meta.env.VITE_API_URL</p>
  `,
      },
      {
        question: "كيف تتعامل مع الـ Internationalization (i18n) في Vue؟",
        answer: `
    <p>بتستخدم مكتبة vue-i18n.</p>
    <ul class="list-disc pr-6 space-y-2 mt-2">
      <li>بتعرف الرسائل بكل لغة.</li>
      <li>بتستخدم $t أو useI18n عشان تعرض النصوص.</li>
      <li>بتقدر تغير اللغة في أي وقت عن طريق تغيير قيمة locale.</li>
    </ul>
  `,
      },
      {
        question: "كيف تتعامل مع الـ Testing في Vue؟",
        answer: `
    <p>فيه تلات مستويات للاختبار:</p>
    <ul class="list-disc pr-6 space-y-2 mt-2">
      <li><strong>Unit Testing:</strong> بتستخدم Vitest + @vue/test-utils.</li>
      <li><strong>Component Testing:</strong> بتختبر المكونات مع الـ DOM.</li>
      <li><strong>E2E Testing:</strong> بتستخدم Cypress أو Playwright عشان تختبر التطبيق من الأول للآخر.</li>
    </ul>
  `,
      },
      {
        question: "كيف تنشر تطبيق Vue على Vercel أو Netlify؟",
        answer: `
    <p>الخطوات بسيطة:</p>
    <ul class="list-disc pr-6 space-y-2 mt-2">
      <li>بتعمل npm run build عشان يتبني مجلد dist.</li>
      <li>بترفع المشروع على GitHub.</li>
      <li>بتربط الـ Repo مع Vercel أو Netlify.</li>
      <li>بيعملوا نشر تلقائي مع كل push.</li>
    </ul>
    <p class="mt-2">مهم تحط ملف vercel.json أو netlify.toml عشان الـ SPA routing يشتغل صح.</p>
  `,
      },
      {
        question: "كيف تتعامل مع الـ SEO في Vue؟",
        answer: `
    <p>عشان تحسن الـ SEO في Vue:</p>
    <ul class="list-disc pr-6 space-y-2 mt-2">
      <li>استخدم SSR عن طريق Nuxt.js أو Vite SSR.</li>
      <li>استخدم @vueuse/head أو vue-meta عشان تتحكم في الـ title والـ meta tags.</li>
      <li>اعمل sitemap.xml و robots.txt.</li>
    </ul>
    <p class="mt-2">لو الموقع معتمد على الـ SEO، Nuxt هو الحل الأفضل.</p>
  `,
      },
      {
        question: "كيف تتعامل مع الـ Accessibility (a11y) في Vue؟",
        answer: `
    <p>عشان تخلي التطبيق accessible:</p>
    <ul class="list-disc pr-6 space-y-2 mt-2">
      <li>استخدم عناصر HTML الصحيحة (button بدل div للأزرار).</li>
      <li>ضيف ARIA attributes زي aria-label و aria-describedby.</li>
      <li>اهتم بإدارة الـ Focus وقابلية التنقل بالكيبورد.</li>
    </ul>
  `,
      },
      {
        question: "كيف تتعامل مع الـ Performance في Vue؟",
        answer: `
    <p>تحسين الأداء بيتم بعدة طرق:</p>
    <ul class="list-disc pr-6 space-y-2 mt-2">
      <li>استخدم v-once و v-memo.</li>
      <li>استخدم shallowRef و shallowReactive مع البيانات الكبيرة.</li>
      <li>اعمل Lazy Loading للمكونات.</li>
      <li>استخدم computed بدل methods.</li>
      <li>استخدم KeepAlive.</li>
      <li>فلتر القوائم بـ computed بدل v-if جوه v-for.</li>
    </ul>
  `,
      },
      {
        question: "كيف تتعامل مع الـ State Management في Vue؟",
        answer: `
    <p>بتختار الطريقة حسب حجم البيانات:</p>
    <ul class="list-disc pr-6 space-y-2 mt-2">
      <li><strong>Local State (ref):</strong> للمكونات الصغيرة.</li>
      <li><strong>Props & Emits:</strong> للمكونات المتجاورة.</li>
      <li><strong>Provide/Inject:</strong> للمكونات البعيدة.</li>
      <li><strong>Pinia:</strong> للتطبيقات الكبيرة والحالة المشتركة.</li>
      <li><strong>Composables:</strong> لإعادة استخدام اللوجيك.</li>
    </ul>
  `,
      },
      {
        question: "كيف تتعامل مع الـ Routing في Vue؟",
        answer: `
    <p>بتستخدم vue-router:</p>
    <ul class="list-disc pr-6 space-y-2 mt-2">
      <li>بتعرف الـ routes في ملف منفصل.</li>
      <li>بتستخدم router-link و router-view.</li>
      <li>بتستخدم useRouter و useRoute جوه المكونات.</li>
      <li>بتستخدم Navigation Guards عشان تحمي الصفحات.</li>
    </ul>
  `,
      },
      {
        question: "كيف تتعامل مع الـ Animations المتقدمة في Vue؟",
        answer: `
    <p>فيه أكتر من طريقة:</p>
    <ul class="list-disc pr-6 space-y-2 mt-2">
      <li>تستخدم Transition Hooks مع JavaScript (before-enter, enter, leave).</li>
      <li>تستخدم مكتبات زي GSAP أو Anime.js.</li>
      <li>تستخدم Intersection Observer عشان تشغل الأنيميشن لما العنصر يظهر.</li>
    </ul>
  `,
      },
    ],
  },
  security: {
    title: "Web Application Security",
    icon: "🔒",
    color: "red",
    questions: [
      {
        question: "ما هو OWASP Top 10؟",
        answer: `
          <p><strong>OWASP Top 10:</strong> قائمة بأهم عشرة ثغرات أمنية تواجه تطبيقات الويب، تنشرها منظمة OWASP.</p>
          <p class="mt-2">أهم نقطتين لك كمطور فرونت إند:</p>
          <ul class="list-disc pr-6 space-y-1 mt-1">
            <li><strong>XSS (Cross-Site Scripting):</strong> حقن كود خبيث.</li>
            <li><strong>CSRF (Cross-Site Request Forgery):</strong> تزوير الطلبات.</li>
          </ul>
        `,
      },
      {
        question: "ما هي ثغرة XSS وكيف نحمي منها؟",
        answer: `
          <p><strong>XSS:</strong> ثغرة تسمح للهاكر بحقن كود JavaScript خبيث في صفحة الويب.</p>
          <p class="mt-2"><strong>الحماية:</strong></p>
          <ul class="list-disc pr-6 space-y-1 mt-1">
            <li><strong>في React:</strong> JSX يقوم بتسريب (Escape) المحتوى تلقائيًا.</li>
            <li><strong>في Vue:</strong> {{ }} يقوم بالتنقية تلقائيًا.</li>
            <li><strong>تجنب v-html / dangerouslySetInnerHTML.</strong></li>
            <li><strong>استخدم DOMPurify</strong> لتنقية المحتوى.</li>
            <li><strong>HttpOnly Cookies</strong> لمنع JavaScript من الوصول للكوكيز.</li>
          </ul>
        `,
      },
      {
        question: "ما هي ثغرة CSRF وكيف نحمي منها؟",
        answer: `
    <p><strong>CSRF:</strong> هجوم بيخلي موقع خبيث يبعت طلب باسمك (زي تحويل فلوس) من غير ما تحس، لأنه بيستغل إن البراوزر بيبعت الكوكي أوتوماتيك.</p>
    <p class="mt-2"><strong>الحماية:</strong></p>
    <ul class="list-disc pr-6 space-y-1 mt-1">
      <li><strong>CSRF Token:</strong> توكن سري بيتبعت مع كل طلب مهم.</li>
      <li><strong>SameSite Cookies:</strong> Lax أو Strict.</li>
      <li><strong>في Nuxt.js:</strong> 
        <br>نزل الموديول: <code>npx nuxi module add csurf</code>
        <br>وبعدين استخدم <code>useCsrfFetch()</code> بدل <code>useFetch</code>.
      </li>
    </ul>
  `,
      },
      {
        question: "ما الفرق بين JWT و OAuth؟",
        answer: `
          <ul class="list-disc pr-6 space-y-2">
            <li><strong>JWT (JSON Web Token):</strong> شكل التوكن نفسه، عديم الحالة (Stateless).</li>
            <li><strong>OAuth (Open Authorization):</strong> بروتوكول للتفويض (مثل "تسجيل الدخول بحساب جوجل").</li>
          </ul>
          <p class="mt-2"><strong>الخلاصة:</strong> JWT هو التذكرة، OAuth هو طريقة الحصول على الإذن.</p>
        `,
      },
      {
        question: "ما الفرق بين CORS و CSP؟",
        answer: `
          <ul class="list-disc pr-6 space-y-2">
            <li><strong>CORS (Cross-Origin Resource Sharing):</strong> إعدادات من الباك إند تحدد من المسموح له طلب البيانات.</li>
            <li><strong>CSP (Content Security Policy):</strong> إعدادات في الـ HTML تمنع تنفيذ سكربتات من مصادر غير موثوقة (للحماية من XSS).</li>
          </ul>
        `,
      },
      {
        question: "ما هي تنقية المدخلات (Input Sanitization)؟",
        answer: `
          <p><strong>القاعدة الذهبية:</strong> "لا تثق أبدًا في مدخلات المستخدم".</p>
          <p class="mt-2"><strong>تنقية المدخلات:</strong> تنظيف البيانات قبل عرضها أو إرسالها لتحويل الكود الضار إلى نص آمن.</p>
          <p class="mt-2"><strong>في React/Vue:</strong> JSX و {{ }} ينقيان تلقائيًا، لكن مع v-html/dangerouslySetInnerHTML استخدم DOMPurify.</p>
        `,
      },
      {
        question: "ما هي Supabase RLS (Row Level Security)؟",
        answer: `
          <p><strong>RLS:</strong> ميزة أمان داخل Supabase تسمح بكتابة سياسات (Policies) تحدد من يمكنه رؤية/تعديل صفوف محددة.</p>
          <p class="mt-2">تُطبق على مستوى قاعدة البيانات، ولا يمكن تخطيها من الفرونت إند.</p>
        `,
      },
      {
        question: "ما هي المصادقة الآمنة (Secure Authentication)؟",
        answer: `
          <p>المصادقة الآمنة مجموعة من الممارسات:</p>
          <ul class="list-disc pr-6 space-y-1 mt-2">
            <li>تخزين كلمات المرور مشفّرة (Hashed).</li>
            <li>JWT مع Refresh Token في HttpOnly Cookie.</li>
            <li>SameSite Cookies.</li>
            <li>التحقق بخطوتين (MFA).</li>
            <li>مبدأ الحد الأدنى من الصلاحيات (Least Privilege).</li>
          </ul>
        `,
      },
    ],
  },

  htmlcss: {
    title: "HTML5 & CSS3",
    icon: "🎨",
    color: "purple",
    questions: [
      // ============================
      // HTML5 أسئلة
      // ============================
      {
        question: "ما هو HTML5؟ وما الجديد فيه مقارنة بـ HTML4؟",
        answer: `
        <p>HTML5 هو الإصدار الخامس من لغة HTML، نزل رسميًا سنة 2014.</p>
        <p class="mt-2">أهم الحاجات الجديدة فيه:</p>
        <ul class="list-disc pr-6 space-y-2 mt-2">
          <li>عناصر دلالية زي header و nav و section و article و footer.</li>
          <li>رسم مباشر في المتصفح بـ Canvas و SVG.</li>
          <li>فيديو وصوت من غير Flash (عناصر video و audio).</li>
          <li>تخزين محلي بـ localStorage و sessionStorage.</li>
          <li>APIs جديدة زي Geolocation و Web Workers و WebSocket.</li>
          <li>أنواع input جديدة في الفورمات (email, date, range...).</li>
          <li>دعم Drag and Drop مدمج.</li>
        </ul>
      `,
      },
      {
        question: "ما هي العناصر الدلالية (Semantic Elements) في HTML5؟",
        answer: `
        <p>العناصر الدلالية هي عناصر بتوصف معنى المحتوى لمحركات البحث والمتصفحات.</p>
        <ul class="list-disc pr-6 space-y-2 mt-2">
          <li><strong>header</strong> ← رأس الصفحة أو القسم.</li>
          <li><strong>nav</strong> ← قائمة التنقل.</li>
          <li><strong>main</strong> ← المحتوى الرئيسي (مرة واحدة بس في الصفحة).</li>
          <li><strong>section</strong> ← قسم من المحتوى.</li>
          <li><strong>article</strong> ← محتوى مستقل (مقال أو منشور).</li>
          <li><strong>aside</strong> ← محتوى جانبي.</li>
          <li><strong>footer</strong> ← تذييل الصفحة.</li>
          <li><strong>figure</strong> و <strong>figcaption</strong> ← للصور مع الشرح.</li>
          <li><strong>time</strong> ← للتواريخ والأوقات.</li>
          <li><strong>mark</strong> ← نص مظلل.</li>
        </ul>
        <p class="mt-2">فوائدها: بتحسن الـ SEO، وبتحسن الـ Accessibility، وبتخلي الكود أسهل في القراءة.</p>
      `,
      },
      {
        question: "ما الفرق بين div و section و article؟",
        answer: `
        <ul class="list-disc pr-6 space-y-3">
          <li>
            <strong>div:</strong>
            <ul class="list-circle pr-6 space-y-1 mt-1">
              <li>عنصر مش دلالي، مجرد حاوية.</li>
              <li>بتستخدمه للتجميع والتنسيق بس.</li>
              <li>محركات البحث مش بتفهم منه معنى.</li>
            </ul>
          </li>
          <li>
            <strong>section:</strong>
            <ul class="list-circle pr-6 space-y-1 mt-1">
              <li>عنصر دلالي بيمثل قسم من المحتوى.</li>
              <li>بيتجمع محتوى ليه علاقة ببعض.</li>
              <li>غالبًا بيبقى فيه عنوان.</li>
            </ul>
          </li>
          <li>
            <strong>article:</strong>
            <ul class="list-circle pr-6 space-y-1 mt-1">
              <li>عنصر دلالي بيمثل محتوى مستقل.</li>
              <li>يقدر يتعيد استخدامه لوحده.</li>
              <li>زي مقال أو بوست أو تعليق.</li>
            </ul>
          </li>
        </ul>
      `,
      },
      {
        question: "ما هو Canvas في HTML5؟",
        answer: `
        <p>Canvas عنصر في HTML5 بتستخدمه للرسم باستخدام JavaScript.</p>
        <ul class="list-disc pr-6 space-y-2 mt-2">
          <li>بيرسم ثنائي الأبعاد (2D) وثلاثي الأبعاد (WebGL).</li>
          <li>مناسب للرسوم المتحركة ومعالجة الصور بكسل بكسل.</li>
        </ul>
        <p class="mt-2">الفرق بينه وبين SVG:</p>
        <ul class="list-disc pr-6 space-y-1 mt-1">
          <li><strong>Canvas:</strong> معتمد على البكسل، مناسب للأنيميشن.</li>
          <li><strong>SVG:</strong> معتمد على المتجهات، مناسب للرسوم الثابتة والتفاعلية.</li>
        </ul>
      `,
      },
      {
        question: "ما هو عنصر video في HTML5؟ وما هي الصيغ المدعومة؟",
        answer: `
        <p>عنصر video بيخليك تعرض فيديو مباشرة في المتصفح من غير Flash.</p>
        <ul class="list-disc pr-6 space-y-2 mt-2">
          <li><strong>MP4 (H.264):</strong> مدعوم في كل المتصفحات الحديثة.</li>
          <li><strong>WebM:</strong> مدعوم في Chrome و Firefox و Edge.</li>
          <li><strong>Ogg:</strong> مدعوم في Firefox و Chrome و Opera.</li>
        </ul>
        <p class="mt-2">الأفضل تحط أكتر من source عشان تغطي كل المتصفحات.</p>
      `,
      },
      {
        question: "ما هو عنصر audio في HTML5؟",
        answer: `
        <p>عنصر audio بيخليك تشغل صوت مباشرة في المتصفح.</p>
        <ul class="list-disc pr-6 space-y-2 mt-2">
          <li>الصيغ الشائعة: MP3 (مدعوم في الكل)، OGG، WAV.</li>
          <li>تقدر تحط controls و autoplay و loop و muted.</li>
        </ul>
      `,
      },
      {
        question: "ما هو localStorage و sessionStorage؟",
        answer: `
        <ul class="list-disc pr-6 space-y-3">
          <li>
            <strong>localStorage:</strong>
            <ul class="list-circle pr-6 space-y-1 mt-1">
              <li>تخزين دائم (بيفضل موجود لحد ما تمسحه بنفسك).</li>
              <li>السعة حوالي 5-10 ميجا.</li>
              <li>متاح في كل التابات والنوافذ.</li>
            </ul>
          </li>
          <li>
            <strong>sessionStorage:</strong>
            <ul class="list-circle pr-6 space-y-1 mt-1">
              <li>تخزين مؤقت (بيتمسح لما تقفل التاب أو المتصفح).</li>
              <li>متاح بس في النافذة الحالية.</li>
            </ul>
          </li>
        </ul>
        <p class="mt-2">الاتنين بيشتغلوا بنفس الـ API: setItem و getItem و removeItem و clear.</p>
      `,
      },
      {
        question: "ما هو Geolocation API؟",
        answer: `
        <p>الـ Geolocation API بيخليك تجيب الموقع الجغرافي للمستخدم.</p>
        <ul class="list-disc pr-6 space-y-2 mt-2">
          <li>بتستخدمه في الخرائط والعروض القريبة وتطبيقات الطقس.</li>
          <li>المتصفح بيسأل المستخدم إذن الأول.</li>
          <li>بتقدر تجيب الموقع مرة واحدة أو تراقبه باستمرار.</li>
        </ul>
      `,
      },
      {
        question: "ما هو Web Workers؟",
        answer: `
        <p>Web Workers بيخليك تشغل كود JavaScript في الخلفية من غير ما تأثر على أداء الصفحة.</p>
        <ul class="list-disc pr-6 space-y-2 mt-2">
          <li>مفيد في العمليات الحسابية التقيلة ومعالجة البيانات الكبيرة.</li>
          <li>بيشتغل في thread منفصل.</li>
          <li>بتتواصل معاه عن طريق postMessage و onmessage.</li>
        </ul>
      `,
      },
      {
        question: "ما هو WebSocket؟",
        answer: `
        <p>WebSocket بروتوكول اتصال ثنائي الاتجاه بين المتصفح والسيرفر.</p>
        <ul class="list-disc pr-6 space-y-2 mt-2">
          <li>الاتصال بيفضل مفتوح، مش زي HTTP اللي طلب ورد.</li>
          <li>مناسب للدردشة والألعاب والإشعارات اللحظية وتحديث الأسعار.</li>
        </ul>
      `,
      },
      {
        question: "ما هو Drag and Drop في HTML5؟",
        answer: `
        <p>Drag and Drop ميزة مدمجة في HTML5 بتسمح بسحب وإفلات العناصر.</p>
        <ul class="list-disc pr-6 space-y-2 mt-2">
          <li>الأحداث المهمة: dragstart و dragend و dragover و drop.</li>
          <li>بتقدر تسحب عناصر أو ملفات.</li>
        </ul>
      `,
      },
      {
        question: "ما هي أنواع الإدخال الجديدة في HTML5؟",
        answer: `
        <p>HTML5 ضاف أنواع input جديدة مفيدة جدًا:</p>
        <ul class="list-disc pr-6 space-y-1 mt-1">
          <li>email</li>
          <li>url</li>
          <li>number</li>
          <li>range</li>
          <li>date و time و datetime-local</li>
          <li>color</li>
          <li>search</li>
          <li>tel</li>
        </ul>
        <p class="mt-2">الأنواع دي بتسهل الـ validation وبتظهر واجهات مناسبة على الموبايل.</p>
      `,
      },
      // تكملة HTML5
      {
        question: "ما هو الفرق بين localStorage و cookies؟",
        answer: `
    <ul class="list-disc pr-6 space-y-3">
      <li>
        <strong>localStorage:</strong>
        <ul class="list-circle pr-6 space-y-1 mt-1">
          <li>سعتة أكبر (5-10 ميجا).</li>
          <li>مش بيتبعت مع كل Request.</li>
          <li>أسهل في الاستخدام.</li>
        </ul>
      </li>
      <li>
        <strong>Cookies:</strong>
        <ul class="list-circle pr-6 space-y-1 mt-1">
          <li>سعتة صغيرة (حوالي 4 كيلو).</li>
          <li>بتتبعت مع كل Request للسيرفر.</li>
          <li>لها تاريخ انتهاء (Expires).</li>
        </ul>
      </li>
    </ul>
  `,
      },
      {
        question: "ما هو الـ Semantic HTML وليه مهم؟",
        answer: `
    <p>الـ Semantic HTML معناه إنك تستخدم العناصر حسب معناها مش حسب شكلها.</p>
    <ul class="list-disc pr-6 space-y-2 mt-2">
      <li>بيحسن الـ SEO لأن محركات البحث بتفهم المحتوى أحسن.</li>
      <li>بيحسن الـ Accessibility (قارئات الشاشة).</li>
      <li>بيخلي الكود أسهل في القراءة والصيانة.</li>
    </ul>
  `,
      },

      // ============================
      // CSS3 أسئلة
      // ============================
      {
        question: "ما هو CSS3؟ وما الجديد فيه؟",
        answer: `
    <p>CSS3 هو الإصدار الثالث من لغة تنسيق الصفحات.</p>
    <ul class="list-disc pr-6 space-y-2 mt-2">
      <li>ضاف Selectors أقوى.</li>
      <li>ضاف Animations و Transitions.</li>
      <li>ضاف Flexbox و Grid.</li>
      <li>ضاف Border-radius و Box-shadow و Gradients.</li>
      <li>ضاف Media Queries للتصميم المتجاوب.</li>
      <li>ضاف Transform و Filters.</li>
    </ul>
  `,
      },
      {
        question: "ما هو الفرق بين Flexbox و Grid؟",
        answer: `
    <ul class="list-disc pr-6 space-y-3">
      <li>
        <strong>Flexbox:</strong>
        <ul class="list-circle pr-6 space-y-1 mt-1">
          <li>مخصص للتخطيط في اتجاه واحد (صف أو عمود).</li>
          <li>ممتاز لتوزيع العناصر ومحاذاتها.</li>
          <li>أسهل في الاستخدام للحالات البسيطة.</li>
        </ul>
      </li>
      <li>
        <strong>Grid:</strong>
        <ul class="list-circle pr-6 space-y-1 mt-1">
          <li>مخصص للتخطيط في اتجاهين (صفوف وأعمدة).</li>
          <li>أقوى في عمل Layouts معقدة.</li>
          <li>تقدر تتحكم في الصفوف والأعمدة مع بعض.</li>
        </ul>
      </li>
    </ul>
    <p class="mt-2">القاعدة: استخدم Flexbox للمكونات الصغيرة، و Grid للـ Layout العام للصفحة.</p>
  `,
      },
      {
        question: "ما هو الفرق بين relative و absolute و fixed و sticky؟",
        answer: `
    <ul class="list-disc pr-6 space-y-3">
      <li>
        <strong>relative:</strong>
        <ul class="list-circle pr-6 space-y-1 mt-1">
          <li>بيتحرك بالنسبة لمكانه الأصلي.</li>
          <li>العنصر لسه بياخد مساحته في الـ flow.</li>
        </ul>
      </li>
      <li>
        <strong>absolute:</strong>
        <ul class="list-circle pr-6 space-y-1 mt-1">
          <li>بيتحرك بالنسبة لأقرب أب position مش static.</li>
          <li>بيتشال من الـ normal flow.</li>
        </ul>
      </li>
      <li>
        <strong>fixed:</strong>
        <ul class="list-circle pr-6 space-y-1 mt-1">
          <li>بيثبت بالنسبة للـ viewport.</li>
          <li>مش بيتحرك مع الـ scroll.</li>
        </ul>
      </li>
      <li>
        <strong>sticky:</strong>
        <ul class="list-circle pr-6 space-y-1 mt-1">
          <li>بيتصرف زي relative لحد ما يوصل لحد معين، بعدين يبقى fixed.</li>
        </ul>
      </li>
    </ul>
  `,
      },
      {
        question: "ما هو الفرق بين em و rem و px؟",
        answer: `
    <ul class="list-disc pr-6 space-y-3">
      <li>
        <strong>px:</strong> وحدة ثابتة، مش بتتأثر بحجم الخط الأب.
      </li>
      <li>
        <strong>em:</strong> نسبية لحجم خط العنصر الأب.
      </li>
      <li>
        <strong>rem:</strong> نسبية لحجم خط عنصر الـ root (html).
      </li>
    </ul>
    <p class="mt-2">الأفضل تستخدم rem في معظم الحالات عشان التحكم يكون أسهل.</p>
  `,
      },
      {
        question: "ما هو الـ Box Model في CSS؟",
        answer: `
    <p>الـ Box Model هو الطريقة اللي المتصفح بيحسب بيها حجم العنصر.</p>
    <ul class="list-disc pr-6 space-y-2 mt-2">
      <li>بيتكون من: Content → Padding → Border → Margin.</li>
      <li>في الـ content-box (الافتراضي): الـ width بتطبق على الـ content بس.</li>
      <li>في الـ border-box: الـ width بتتشمل الـ padding والـ border.</li>
    </ul>
    <p class="mt-2">نصيحة: حط box-sizing: border-box على كل العناصر عشان الحساب يبقى أسهل.</p>
  `,
      },
      {
        question:
          "ما هو الفرق بين display: none و visibility: hidden و opacity: 0؟",
        answer: `
    <ul class="list-disc pr-6 space-y-3">
      <li>
        <strong>display: none:</strong>
        <ul class="list-circle pr-6 space-y-1 mt-1">
          <li>بيشيل العنصر تمامًا من الـ layout.</li>
          <li>مش بياخد أي مساحة.</li>
        </ul>
      </li>
      <li>
        <strong>visibility: hidden:</strong>
        <ul class="list-circle pr-6 space-y-1 mt-1">
          <li>بيخفي العنصر بس بيفضل آخذ مساحته.</li>
        </ul>
      </li>
      <li>
        <strong>opacity: 0:</strong>
        <ul class="list-circle pr-6 space-y-1 mt-1">
          <li>بيخلي العنصر شفاف تمامًا.</li>
          <li>بيفضل موجود وبياخد مساحة وبيستقبل أحداث.</li>
        </ul>
      </li>
    </ul>
  `,
      },
      {
        question: "ما هو الـ Pseudo-class والـ Pseudo-element؟",
        answer: `
    <ul class="list-disc pr-6 space-y-3">
      <li>
        <strong>Pseudo-class:</strong>
        <ul class="list-circle pr-6 space-y-1 mt-1">
          <li>بتستهدف حالة معينة للعنصر.</li>
          <li>زي :hover و :focus و :nth-child و :first-child.</li>
        </ul>
      </li>
      <li>
        <strong>Pseudo-element:</strong>
        <ul class="list-circle pr-6 space-y-1 mt-1">
          <li>بتستهدف جزء من العنصر.</li>
          <li>زي ::before و ::after و ::first-line و ::selection.</li>
        </ul>
      </li>
    </ul>
  `,
      },
      {
        question: "ما هو الـ Specificity في CSS؟",
        answer: `
    <p>الـ Specificity هو نظام الأولوية اللي بيحدد أنهي ستايل هيتطبق لو في تعارض.</p>
    <ul class="list-disc pr-6 space-y-2 mt-2">
      <li>Inline styles أعلى حاجة.</li>
      <li>بعدها الـ IDs.</li>
      <li>بعدها الـ Classes و الـ Pseudo-classes و الـ Attributes.</li>
      <li>بعدها الـ Elements و الـ Pseudo-elements.</li>
    </ul>
    <p class="mt-2">لو الاتنين نفس الـ Specificity، اللي مكتوب بعدين هو اللي بيفوز.</p>
  `,
      },
      {
        question: "ما هو الـ Media Query؟",
        answer: `
    <p>الـ Media Query بتستخدمها عشان تطبق ستايلات مختلفة حسب حجم الشاشة أو نوع الجهاز.</p>
    <ul class="list-disc pr-6 space-y-2 mt-2">
      <li>أساس الـ Responsive Design.</li>
      <li>أشهر استخدام: @media (max-width: 768px) { ... }</li>
    </ul>
  `,
      },
      {
        question: "ما هو الفرق بين Transition و Animation؟",
        answer: `
    <ul class="list-disc pr-6 space-y-3">
      <li>
        <strong>Transition:</strong>
        <ul class="list-circle pr-6 space-y-1 mt-1">
          <li>بتتغير من حالة لحالة (زي hover).</li>
          <li>محتاجة trigger.</li>
          <li>أبسط.</li>
        </ul>
      </li>
      <li>
        <strong>Animation:</strong>
        <ul class="list-circle pr-6 space-y-1 mt-1">
          <li>تقدر تعمل تسلسل حركات معقد.</li>
          <li>بتستخدم @keyframes.</li>
          <li>تقدر تكررها وتتحكم في اتجاهها.</li>
        </ul>
      </li>
    </ul>
  `,
      },
    ],
  },
  git: {
    title: "Git & GitHub",
    icon: "🐙",
    color: "orange",
    questions: [
      {
        question: "ما هو Git؟ وما الفرق بينه وبين GitHub؟",
        answer: `
          <ul class="list-disc pr-6 space-y-2">
            <li><strong>Git:</strong> نظام تحكم في الإصدارات (VCS) موزع، يُستخدم لتتبع التغييرات في الكود.</li>
            <li><strong>GitHub:</strong> منصة تستضيف مستودعات Git، وتوفر واجهة ويب وأدوات تعاون (Pull Requests, Issues, Actions).</li>
          </ul>
          <p class="mt-2">Git هو الأداة، GitHub هو الخدمة السحابية.</p>
        `,
      },
      {
        question: "ما هي أوامر Git الأساسية؟",
        answer: `
          <ul class="list-disc pr-6 space-y-1 mt-2">
            <li><strong>git init:</strong> إنشاء مستودع جديد.</li>
            <li><strong>git clone:</strong> نسخ مستودع من GitHub.</li>
            <li><strong>git add:</strong> إضافة تغييرات إلى Staging Area.</li>
            <li><strong>git commit -m:</strong> حفظ التغييرات مع رسالة.</li>
            <li><strong>git push:</strong> رفع التغييرات إلى GitHub.</li>
            <li><strong>git pull:</strong> جلب التغييرات من GitHub.</li>
            <li><strong>git branch:</strong> عرض/إنشاء فروع.</li>
            <li><strong>git checkout:</strong> التنقل بين الفروع.</li>
            <li><strong>git merge:</strong> دمج فرع مع آخر.</li>
          </ul>
        `,
      },
      {
        question: "ما هو Git Flow؟",
        answer: `
          <p><strong>Git Flow:</strong> نموذج لإدارة الفروع في Git، يعتمد على فرعين رئيسيين:</p>
          <ul class="list-disc pr-6 space-y-1 mt-2">
            <li><strong>main:</strong> الكود المستقر والمُنتج (Production).</li>
            <li><strong>develop:</strong> التطوير الحالي.</li>
            <li><strong>feature/*:</strong> فروع للميزات الجديدة.</li>
            <li><strong>release/*:</strong> فروع للتجهيز للإصدار.</li>
            <li><strong>hotfix/*:</strong> فروع لإصلاح الأخطاء العاجلة.</li>
          </ul>
        `,
      },
      {
        question: "ما هي Pull Request (PR)؟",
        answer: `
          <p><strong>Pull Request:</strong> طلب دمج تغييرات من فرع إلى آخر على GitHub.</p>
          <p class="mt-2">الخطوات:</p>
          <ol class="list-decimal pr-6 space-y-1 mt-1">
            <li>أعمل fork/clone للمستودع.</li>
            <li>أنشئ فرعًا جديدًا.</li>
            <li>أضف التغييرات و commit و push.</li>
            <li>افتح Pull Request على GitHub.</li>
            <li>يناقش الفريق التغييرات ويراجعها.</li>
            <li>يتم الدمج (merge).</li>
          </ol>
        `,
      },
      {
        question: "ما الفرق بين git merge و git rebase؟",
        answer: `
                   <ul class="list-disc pr-6 space-y-2">
            <li><strong>git merge:</strong> بيدمج فرعين عن طريق إنشاء Merge Commit جديد، وبيخلي التاريخ متفرع (Non-linear).</li>
            <li><strong>git rebase:</strong> بيعيد تطبيق الكوميتات بتاعة فرعك فوق آخر كوميت في الفرع التاني، فبيخلي التاريخ خطي (Linear) ونضيف، لكنه بيعيد كتابة الـ History.</li>
          </ul>
          <p class="mt-2">Rebase بيديك تاريخ أنظف، لكن متستخدمش rebase على كوميتات شارك فيها فريق تاني عشان متكسرش الشغل.</p>
        `,
      },
    ],
  },

  commandline: {
    title: "Command Line (Linux/Shell)",
    icon: "💻",
    color: "gray",
    questions: [
      {
        question: "ما هي أوامر Linux الأساسية؟",
        answer: `
          <ul class="list-disc pr-6 space-y-1 mt-2">
            <li><strong>ls:</strong> عرض محتويات المجلد.</li>
            <li><strong>cd:</strong> تغيير المجلد.</li>
            <li><strong>pwd:</strong> عرض المجلد الحالي.</li>
            <li><strong>mkdir:</strong> إنشاء مجلد جديد.</li>
            <li><strong>rm:</strong> حذف ملف/مجلد (rm -rf لحذف مجلد ومحتوياته).</li>
            <li><strong>cp:</strong> نسخ ملف/مجلد.</li>
            <li><strong>mv:</strong> نقل/إعادة تسمية ملف/مجلد.</li>
            <li><strong>cat:</strong> عرض محتوى ملف.</li>
            <li><strong>grep:</strong> البحث عن نص داخل ملفات.</li>
            <li><strong>chmod:</strong> تغيير صلاحيات الملف.</li>
          </ul>
        `,
      },
      {
        question: "ما هو SSH؟ وكيف تستخدمه؟",
        answer: `
          <p><strong>SSH (Secure Shell):</strong> بروتوكول آمن للاتصال بالخوادم عن بُعد.</p>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code># الاتصال بخادم
ssh user@server-ip

# إنشاء مفتاح SSH
ssh-keygen -t rsa -b 4096 -C "email@example.com"

# نسخ المفتاح للخادم
ssh-copy-id user@server-ip</code></pre>
          </div>
        `,
      },
      {
        question: "ما هي صلاحيات الملفات في Linux (chmod)؟",
        answer: `
          <p>الصلاحيات في Linux: read (r=4)، write (w=2)، execute (x=1).</p>
          <p class="mt-2">مثال: chmod 755 file.txt</p>
          <ul class="list-disc pr-6 space-y-1 mt-1">
            <li><strong>7 (rwx):</strong> المالك (owner) لديه كل الصلاحيات.</li>
            <li><strong>5 (r-x):</strong> المجموعة (group) لديه قراءة وتنفيذ.</li>
            <li><strong>5 (r-x):</strong> الآخرون (others) لديه قراءة وتنفيذ.</li>
          </ul>
        `,
      },
      {
        question: "ما هو Pipe (|) في Linux؟",
        answer: `
          <p><strong>Pipe (|):</strong> يمرر مخرجات أمر كمدخلات لأمر آخر.</p>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code># عرض أول 5 ملفات في المجلد
ls -la | head -5

# البحث عن كلمة داخل ملفات
grep "error" logs.txt | wc -l</code></pre>
          </div>
        `,
      },
    ],
  },
  cpp: {
    title: "C++",
    icon: "⚙️",
    color: "blue",
    questions: [
      // ============================
      // أساسيات ومفاهيم عامة (Basic)
      // ============================
      {
        question: "ما هي لغة C++ وما الفرق بينها وبين C؟",
        answer: `
          <p><strong>C++</strong> هي لغة برمجة متعددة الاستخدامات، تم تطويرها كامتداد للغة C مع إضافة دعم <strong>البرمجة الكائنية (OOP)</strong>.</p>
          <ul class="list-disc pr-6 space-y-2 mt-2">
            <li>
              <strong>الفرق بين C و C++:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li><strong>C:</strong> لغة إجرائية (Procedure-oriented)، لا تدعم OOP.</li>
                <li><strong>C++:</strong> لغة متعددة النماذج (Multi-paradigm)، تدعم OOP، البرمجة العامة (Generic)، والبرمجة الوظيفية.</li>
                <li><strong>C++</strong> يضيف ميزات مثل: الفئات (Classes)، التحميل الزائد (Overloading)، الوراثة (Inheritance)، التوابع الافتراضية (Virtual Functions) [citation:12].</li>
              </ul>
            </li>
          </ul>
          <p class="mt-2"><strong>مميزات C++:</strong> أداء عالي، تحكم كامل في الذاكرة، مكتبة STL غنية، دعم للبرمجة متعددة الخيوط [citation:12].</p>
        `,
      },
      {
        question:
          "ما هو الفرق بين المرجع (Reference) والمؤشر (Pointer) في C++؟",
        answer: `
          <ul class="list-disc pr-6 space-y-3">
            <li>
              <strong>المرجع (Reference):</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>اسم مستعار (Alias) لمتغير موجود.</li>
                <li><strong>يجب</strong> تهيئته عند التعريف.</li>
                <li><strong>لا يمكن</strong> إعادة ربطه بمتغير آخر بعد التهيئة.</li>
                <li>يُستخدم بالاسم مباشرة (بدون <code>*</code>).</li>
                <li><strong>لا يمكن</strong> أن يكون <code>null</code>.</li>
              </ul>
            </li>
            <li>
              <strong>المؤشر (Pointer):</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>متغير يخزن <strong>عنوان</strong> متغير آخر.</li>
                <li>يمكن تهيئته أو تركه غير مهيأ.</li>
                <li><strong>يمكن</strong> إعادة ربطه بمتغير آخر.</li>
                <li>يُستخدم مع <code>*</code> للوصول للقيمة (Dereferencing).</li>
                <li><strong>يمكن</strong> أن يكون <code>nullptr</code>.</li>
                <li>يدعم العمليات الحسابية (Pointer Arithmetic).</li>
              </ul>
            </li>
          </ul>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>// Reference
int x = 10;
int &ref = x; // يجب التهيئة
ref = 20;    // x = 20

// Pointer
int y = 10;
int *ptr = &y; // يمكن التهيئة أو لا
ptr = &x;      // يمكن إعادة الربط
*ptr = 30;     // x = 30</code></pre>
          </div>
        `,
      },
      {
        question: "ما هو مفهوم OOP في C++ وما هي مبادئه الأساسية؟",
        answer: `
          <p><strong>البرمجة الكائنية (OOP)</strong> هي نموذج برمجة يعتمد على مفهوم "الكائنات" التي تحتوي على بيانات ودوال [citation:11].</p>
          <ul class="list-disc pr-6 space-y-2 mt-2">
            <li>
              <strong>المبادئ الأربعة الأساسية:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li><strong>التغليف (Encapsulation):</strong> تجميع البيانات والدوال في وحدة واحدة (Class) والتحكم في الوصول إليها باستخدام <code>private</code>, <code>protected</code>, <code>public</code> [citation:7].</li>
                <li><strong>الوراثة (Inheritance):</strong> إنشاء فئة جديدة (مشتقة) من فئة موجودة (أساسية) لوراثة خصائصها [citation:11].</li>
                <li><strong>تعدد الأشكال (Polymorphism):</strong> قدرة الدوال على اتخاذ أشكال متعددة (Overloading و Overriding) [citation:7].</li>
                <li><strong>التجريد (Abstraction):</strong> إخفاء التفاصيل الداخلية وإظهار فقط ما هو ضروري للمستخدم [citation:11].</li>
              </ul>
            </li>
          </ul>
        `,
      },
      {
        question: "ما هو Class في C++؟",
        answer: `
          <p><strong>Class (الفئة)</strong> هو الهيكل الأساسي في C++ لتطبيق البرمجة الكائنية. يُعرّف الكائن (Object) من خلال تجميع <strong>البيانات (Member Variables)</strong> و <strong>الدوال (Member Functions)</strong> في وحدة واحدة [citation:12].</p>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>class Car {
private:
    string brand;
    int speed;

public:
    Car(string b, int s) : brand(b), speed(s) {} // Constructor

    void accelerate() {
        speed += 10;
    }

    void displaySpeed() {
        cout &lt;&lt; "Speed: " &lt;&lt; speed &lt;&lt; endl;
    }
};</code></pre>
          </div>
        `,
      },
      {
        question: "ما هو Constructor و Destructor في C++؟",
        answer: `
          <ul class="list-disc pr-6 space-y-3">
            <li>
              <strong>Constructor (الدالة البانية):</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>دالة خاصة تُستدعى <strong>تلقائياً</strong> عند إنشاء كائن من الفئة.</li>
                <li>تُستخدم لـ <strong>تهيئة</strong> البيانات الأعضاء [citation:11].</li>
                <li>لها نفس اسم الفئة، ولا تُعيد قيمة.</li>
                <li>أنواعها: Default, Parameterized, Copy Constructor.</li>
              </ul>
            </li>
            <li>
              <strong>Destructor (الدالة المدمّرة):</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>دالة خاصة تُستدعى <strong>تلقائياً</strong> عند تدمير الكائن (خروج عن النطاق).</li>
                <li>تُستخدم لـ <strong>تحرير الموارد</strong> (مثل الذاكرة، الملفات) [citation:11].</li>
                <li>لها نفس اسم الفئة مسبوقاً بـ <code>~</code>.</li>
              </ul>
            </li>
          </ul>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>class MyClass {
public:
    // Constructor
    MyClass() {
        cout &lt;&lt; "Object created" &lt;&lt; endl;
    }

    // Destructor
    ~MyClass() {
        cout &lt;&lt; "Object destroyed" &lt;&lt; endl;
    }
};</code></pre>
          </div>
        `,
      },
      {
        question: "كيف تدير الذاكرة في C++ (Stack vs Heap)؟",
        answer: `
          <ul class="list-disc pr-6 space-y-3">
            <li>
              <strong>Stack (المكدس):</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>تخزين <strong>تلقائي</strong> للذاكرة.</li>
                <li>يُخصص للمتغيرات <strong>المحلية</strong> داخل الدوال.</li>
                <li>سريع، لكن حجمه <strong>محدود</strong> [citation:4].</li>
                <li>يُحرر تلقائياً عند الخروج من النطاق.</li>
              </ul>
            </li>
            <li>
              <strong>Heap (الكومة):</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>تخزين <strong>يدوي</strong> للذاكرة.</li>
                <li>يُخصص باستخدام <code>new</code> ويُحرر باستخدام <code>delete</code>.</li>
                <li>أبطأ، لكن حجمه <strong>أكبر</strong> [citation:4].</li>
                <li>يحتاج <strong>إدارة دقيقة</strong> لتجنب تسرب الذاكرة.</li>
              </ul>
            </li>
          </ul>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>// Stack allocation
int x = 10; // تُحرر تلقائياً

// Heap allocation
int* ptr = new int(20); // تخصيص يدوي
delete ptr; // يجب تحريرها يدوياً</code></pre>
          </div>
          <p class="mt-2"><strong>💡 نصيحة:</strong> استخدم الذكية (Smart Pointers) لتجنب تسرب الذاكرة [citation:4].</p>
        `,
      },
      {
        question: 'ما هو مفهوم "تعدد الأشكال" (Polymorphism) في C++؟',
        answer: `
          <p><strong>تعدد الأشكال (Polymorphism)</strong> هو قدرة الدوال على اتخاذ أشكال متعددة بناءً على السياق. ينقسم إلى نوعين [citation:7]:</p>
          <ul class="list-disc pr-6 space-y-2 mt-2">
            <li>
              <strong>Compile-time Polymorphism (ثابت):</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>يُحل في وقت الترجمة.</li>
                <li>مثال: <strong>Function Overloading</strong> و <strong>Operator Overloading</strong>.</li>
              </ul>
            </li>
            <li>
              <strong>Run-time Polymorphism (ديناميكي):</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>يُحل في وقت التنفيذ.</li>
                <li>مثال: استخدام <strong>Virtual Functions</strong> و <strong>Inheritance</strong> [citation:7].</li>
              </ul>
            </li>
          </ul>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>// Overloading (Compile-time)
int add(int a, int b) { return a + b; }
double add(double a, double b) { return a + b; }

// Overriding (Run-time)
class Base {
public:
    virtual void show() { cout &lt;&lt; "Base" &lt;&lt; endl; }
};
class Derived : public Base {
public:
    void show() override { cout &lt;&lt; "Derived" &lt;&lt; endl; }
};</code></pre>
          </div>
        `,
      },
      {
        question: "ما هو Virtual Function في C++؟",
        answer: `
          <p><strong>Virtual Function</strong> هي دالة في الفئة الأساسية (Base Class) تُصرّح بـ <code>virtual</code> لتسمح بـ <strong>تجاوزها (Overriding)</strong> في الفئات المشتقة (Derived Classes).</p>
          <ul class="list-disc pr-6 space-y-2 mt-2">
            <li>
              <strong>المميزات:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>تمكن من <strong>Runtime Polymorphism</strong> [citation:11].</li>
                <li>يتم اختيار الدالة المناسبة في وقت التنفيذ بناءً على نوع الكائن (وليس نوع المرجع).</li>
                <li>يتم إنشاء <strong>VTable</strong> (جدول التوابع الافتراضية) لكل فئة تحتوي على دوال افتراضية [citation:7].</li>
              </ul>
            </li>
          </ul>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>class Base {
public:
    virtual void print() {
        cout &lt;&lt; "Base" &lt;&lt; endl;
    }
};

class Derived : public Base {
public:
    void print() override {
        cout &lt;&lt; "Derived" &lt;&lt; endl;
    }
};

Base* obj = new Derived();
obj-&gt;print(); // يطبع "Derived" (يُحل في وقت التنفيذ)</code></pre>
          </div>
        `,
      },
      {
        question: "ما هي Pure Virtual Function؟ وكيف تؤثر على الفئة؟",
        answer: `
          <ul class="list-disc pr-6 space-y-3">
            <li>
              <strong>Pure Virtual Function:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>دالة افتراضية يتم تعريفها بـ <code>virtual</code> مع <strong>لا تنفيذ</strong> (تُكتب <code>= 0</code>) [citation:7].</li>
                <li>مثال: <code>virtual void draw() = 0;</code> [citation:7].</li>
              </ul>
            </li>
            <li>
              <strong>التأثير على الفئة:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>تصبح الفئة <strong>Abstract Class</strong> (فئة مجردة).</li>
                <li><strong>لا يمكن</strong> إنشاء كائنات منها مباشرة.</li>
                <li>تُستخدم كـ <strong>Interface</strong> لتفرض على الفئات المشتقة تنفيذ الدوال [citation:7].</li>
              </ul>
            </li>
          </ul>
        `,
      },
      {
        question: "ما هو الفرق بين Overloading و Overriding في C++؟",
        answer: `
          <ul class="list-disc pr-6 space-y-3">
            <li>
              <strong>Overloading (التحميل الزائد):</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>تعريف عدة دوال بنفس <strong>الاسم</strong> ولكن <strong>معاملات مختلفة</strong> (عدد، نوع).</li>
                <li>يحدث في <strong>نفس النطاق</strong> (نفس الفئة).</li>
                <li>يُحل في <strong>وقت الترجمة</strong> (Compile-time) [citation:11].</li>
              </ul>
            </li>
            <li>
              <strong>Overriding (التجاوز):</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>إعادة تعريف دالة افتراضية (Virtual) في فئة مشتقة بنفس <strong>الاسم والمعاملات</strong>.</li>
                <li>يحدث بين <strong>فئات مختلفة</strong> (Base & Derived).</li>
                <li>يُحل في <strong>وقت التنفيذ</strong> (Run-time) باستخدام <code>virtual</code> [citation:11].</li>
              </ul>
            </li>
          </ul>
        `,
      },
      // ============================
      // Smart Pointers و RAII (متوسط)
      // ============================
      {
        question: "ما هو مفهوم RAII في C++؟",
        answer: `
          <p><strong>RAII (Resource Acquisition Is Initialization)</strong> هو نمط برمجة في C++ يربط <strong>دورة حياة المورد</strong> (مثل الذاكرة، الملفات، الاتصالات) بـ <strong>دورة حياة الكائن</strong>.</p>
          <ul class="list-disc pr-6 space-y-2 mt-2">
            <li>
              <strong>المبدأ:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>يُكتسب المورد في <strong>Constructor</strong> (أو التهيئة).</li>
                <li>يُحرر المورد في <strong>Destructor</strong>.</li>
                <li>يضمن تحرير الموارد حتى عند حدوث <strong>استثناءات</strong> [citation:9].</li>
              </ul>
            </li>
          </ul>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>class FileHandler {
private:
    FILE* file;
public:
    FileHandler(const char* filename) {
        file = fopen(filename, "r");
    }
    ~FileHandler() {
        if (file) fclose(file); // يُحرر تلقائياً
    }
};</code></pre>
          </div>
          <p class="mt-2"><strong>💡 نصيحة:</strong> استخدم RAII مع الذكية (Smart Pointers) لتجنب تسرب الذاكرة [citation:4].</p>
        `,
      },
      {
        question: "ما هي Smart Pointers في C++ وما هي أنواعها؟",
        answer: `
          <p><strong>Smart Pointers</strong> هي كائنات تعمل كمؤشرات ولكنها تدير الذاكرة <strong>تلقائياً</strong> (تُحرر عند الخروج عن النطاق) [citation:5].</p>
          <ul class="list-disc pr-6 space-y-2 mt-2">
            <li>
              <strong>أنواعها:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li><strong><code>unique_ptr</code>:</strong> ملكية <strong>حصرية</strong> (لا يمكن نسخه، فقط نقله). الخيار الافتراضي المفضل [citation:5].</li>
                <li><strong><code>shared_ptr</code>:</strong> ملكية <strong>مشتركة</strong> مع عداد مراجع (Reference Count). استخدمه بحذر بسبب الحمل الزائد [citation:5].</li>
                <li><strong><code>weak_ptr</code>:</strong> مرجع <strong>ضعيف</strong> لكائن <code>shared_ptr</code>، يُستخدم لكسر الحلقات (Cycles) [citation:5].</li>
              </ul>
            </li>
          </ul>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>#include &lt;memory&gt;

// unique_ptr
std::unique_ptr&lt;int&gt; ptr1 = std::make_unique&lt;int&gt;(10);
// std::unique_ptr&lt;int&gt; ptr2 = ptr1; // ❌ خطأ: لا يمكن النسخ
std::unique_ptr&lt;int&gt; ptr3 = std::move(ptr1); // ✅ نقل الملكية

// shared_ptr
std::shared_ptr&lt;int&gt; shared1 = std::make_shared&lt;int&gt;(20);
std::shared_ptr&lt;int&gt; shared2 = shared1; // ✅ مشاركة الملكية

// weak_ptr
std::weak_ptr&lt;int&gt; weak = shared1; // مرجع ضعيف
if (auto locked = weak.lock()) {
    // استخدام الكائن إذا كان موجوداً
}</code></pre>
          </div>
        `,
      },
      // ============================
      // STL (متوسط)
      // ============================
      {
        question: "ما هي STL في C++ وما هي مكوناتها الرئيسية؟",
        answer: `
          <p><strong>STL (Standard Template Library)</strong> هي مكتبة قوية من القوالب (Templates) توفر <strong>حاويات (Containers)</strong>، <strong>خوارزميات (Algorithms)</strong>، و <strong>مكررات (Iterators)</strong> للتعامل مع البيانات بكفاءة [citation:1].</p>
          <ul class="list-disc pr-6 space-y-2 mt-2">
            <li>
              <strong>المكونات الرئيسية:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li><strong>Containers (حاويات):</strong> لتخزين البيانات.</li>
                <ul class="list-circle pr-6 space-y-1 mt-1">
                  <li><strong>Sequence:</strong> <code>vector</code>, <code>list</code>, <code>deque</code>.</li>
                  <li><strong>Associative (Ordered):</strong> <code>set</code>, <code>map</code> (شجرة حمراء-سوداء، O(log n)) [citation:5].</li>
                  <li><strong>Unordered:</strong> <code>unordered_set</code>, <code>unordered_map</code> (جدول تجزئة، O(1) متوسط) [citation:5].</li>
                </ul>
                <li><strong>Algorithms (خوارزميات):</strong> دوال جاهزة لمعالجة الحاويات.</li>
                <ul class="list-circle pr-6 space-y-1 mt-1">
                  <li><strong>بحث:</strong> <code>find</code>, <code>binary_search</code>.</li>
                  <li><strong>ترتيب:</strong> <code>sort</code>, <code>stable_sort</code>.</li>
                  <li><strong>تحويل:</strong> <code>transform</code>, <code>copy</code>, <code>accumulate</code> [citation:1].</li>
                </ul>
                <li><strong>Iterators (مكررات):</strong> كائنات تصل بين الخوارزميات والحاويات، تشبه المؤشرات (مثل: <code>begin()</code>, <code>end()</code>) [citation:1].</li>
              </ul>
            </li>
          </ul>
        `,
      },
      {
        question: "متى تستخدم vector بدلاً من list؟",
        answer: `
          <ul class="list-disc pr-6 space-y-3">
            <li>
              <strong><code>vector</code>:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>مصفوفة <strong>مستمرة</strong> في الذاكرة (ذاكرة تخزين مؤقت جيدة).</li>
                <li><strong>O(1)</strong> للوصول العشوائي.</li>
                <li><strong>O(1)</strong> (مطفأ) للإضافة في النهاية (<code>push_back</code>).</li>
                <li><strong>O(n)</strong> للإضافة/الحذف في المنتصف.</li>
                <li>استخدمه عندما تحتاج <strong>وصولاً عشوائياً</strong> متكرراً [citation:5].</li>
              </ul>
            </li>
            <li>
              <strong><code>list</code>:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>قائمة <strong>مزدوجة الربط</strong> (غير مستمرة في الذاكرة).</li>
                <li><strong>O(n)</strong> للوصول العشوائي (لا يدعم <code>[]</code>).</li>
                <li><strong>O(1)</strong> للإضافة/الحذف في أي مكان (مع مكرر).</li>
                <li>استخدمه عندما تحتاج <strong>إضافة وحذف</strong> متكرراً في المنتصف [citation:5].</li>
              </ul>
            </li>
          </ul>
        `,
      },
      {
        question: "ما هو الفرق بين <map> و <unordered_map>؟",
        answer: `
          <ul class="list-disc pr-6 space-y-3">
            <li>
              <strong><code>map</code> (Ordered):</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>يعتمد على <strong>شجرة حمراء-سوداء (Red-Black Tree)</strong> [citation:5].</li>
                <li>العناصر <strong>مرتبة</strong> حسب المفتاح (ترتيب تصاعدي).</li>
                <li>العمليات: <strong>O(log n)</strong> (بحث، إضافة، حذف) [citation:5].</li>
                <li>استخدمه عندما تحتاج إلى <strong>ترتيب</strong> العناصر.</li>
              </ul>
            </li>
            <li>
              <strong><code>unordered_map</code> (Unordered):</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>يعتمد على <strong>جدول تجزئة (Hash Table)</strong> [citation:5].</li>
                <li>العناصر <strong>غير مرتبة</strong> (تعتمد على دالة التجزئة).</li>
                <li>العمليات: <strong>O(1) في المتوسط</strong> (أسرع) [citation:5].</li>
                <li>استخدمه عندما تحتاج إلى <strong>سرعة</strong> في البحث ولا يهمك الترتيب.</li>
              </ul>
            </li>
          </ul>
        `,
      },
      // ============================
      // Templates (متوسط)
      // ============================
      {
        question: "ما هي Templates في C++ وكيف تُستخدم؟",
        answer: `
          <p><strong>Templates (القوالب)</strong> هي ميزة في C++ تسمح بكتابة كود <strong>عام (Generic)</strong> يعمل مع أي نوع بيانات [citation:1].</p>
          <ul class="list-disc pr-6 space-y-2 mt-2">
            <li>
              <strong>أنواعها:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li><strong>Function Templates:</strong> لإنشاء دوال عامة.</li>
                <li><strong>Class Templates:</strong> لإنشاء فئات عامة [citation:1].</li>
                <li><strong>Template Specialization:</strong> تخصيص القالب لنوع معين [citation:1].</li>
              </ul>
            </li>
          </ul>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>// Function Template
template &lt;typename T&gt;
T max(T a, T b) {
    return (a &gt; b) ? a : b;
}

// Class Template
template &lt;typename T&gt;
class Stack {
private:
    vector&lt;T&gt; elements;
public:
    void push(const T&amp; element) {
        elements.push_back(element);
    }
    T pop() {
        T top = elements.back();
        elements.pop_back();
        return top;
    }
};

// Template Specialization
template &lt;&gt;
class DataProcessor&lt;int&gt; {
public:
    void process(int data) {
        cout &lt;&lt; "Processing integer: " &lt;&lt; data &lt;&lt; endl;
    }
};</code></pre>
          </div>
        `,
      },
      // ============================
      // Memory Management (متقدم)
      // ============================
      {
        question: 'ما هو "Diamond Problem" في C++ وكيف يتم حله؟',
        answer: `
          <p><strong>Diamond Problem</strong> هي مشكلة تحدث في <strong>الوراثة المتعددة (Multiple Inheritance)</strong> عندما ترث فئة من فئتين تشتركان في فئة أساسية مشتركة، مما يؤدي إلى <strong>ازدواجية</strong> في الأعضاء الموروثة [citation:1].</p>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>class A {
public:
    int value;
};

class B : public A {};
class C : public A {};

class D : public B, public C {
    // D لديه نسختان من 'value' (واحدة من B وأخرى من C)
};

D d;
// d.value = 10; // ❌ غامض: أي 'value' نستخدم؟</code></pre>
          </div>
          <p class="mt-2"><strong>الحل:</strong> استخدام <strong>Virtual Inheritance</strong> [citation:1].</p>
          <div class="mt-3 p-3 bg-green-50 dark:bg-green-900/20 border-r-4 border-green-500 rounded">
            <pre class="text-sm overflow-x-auto"><code>class A {};
class B : virtual public A {}; // وراثة افتراضية
class C : virtual public A {};
class D : public B, public C {
    // D لديه نسخة واحدة فقط من A
};
D d;
d.value = 10; // ✅ لا غموض الآن</code></pre>
          </div>
        `,
      },
      // ============================
      // Exceptions (متقدم)
      // ============================
      {
        question: "كيف تتعامل مع الاستثناءات (Exceptions) في C++؟",
        answer: `
          <p>في C++، يتم التعامل مع الأخطاء باستخدام <strong>كتل <code>try</code> و <code>catch</code></strong> و <strong>رمي الاستثناءات</strong> باستخدام <code>throw</code> [citation:6].</p>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>#include &lt;stdexcept&gt;

double divide(double a, double b) {
    if (b == 0) {
        throw std::runtime_error("Division by zero!");
    }
    return a / b;
}

int main() {
    try {
        double result = divide(10, 0);
        cout &lt;&lt; result &lt;&lt; endl;
    } catch (const std::exception&amp; e) {
        cerr &lt;&lt; "Error: " &lt;&lt; e.what() &lt;&lt; endl;
    }
    return 0;
}</code></pre>
          </div>
          <p class="mt-2"><strong>💡 نصيحة:</strong> استخدم الاستثناءات بدلاً من أكواد الخطأ (Error Codes) لأنها أكثر تنظيماً [citation:6].</p>
        `,
      },
      // ============================
      // Move Semantics (متقدم)
      // ============================
      {
        question: "ما هي Move Semantics في C++11 ولماذا هي مهمة؟",
        answer: `
          <p><strong>Move Semantics (دلالات النقل)</strong> هي ميزة في C++11 تسمح <strong>بنقل</strong> الموارد (مثل الذاكرة) من كائن إلى آخر بدلاً من نسخها، مما يحسن الأداء بشكل كبير [citation:4].</p>
          <ul class="list-disc pr-6 space-y-2 mt-2">
            <li>
              <strong>متى تستخدمها؟</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>عند التعامل مع كائنات <strong>ثقيلة</strong> (مثل السلاسل الطويلة، الحاويات الكبيرة).</li>
                <li>لتجنب النسخ غير الضروري وتحسين الأداء [citation:5].</li>
              </ul>
            </li>
          </ul>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>#include &lt;string&gt;
#include &lt;utility&gt;

std::string createString() {
    return "Hello, World!"; // يستخدم Move تلقائياً (RVO)
}

int main() {
    std::string s1 = "Hello";
    std::string s2 = std::move(s1); // نقل الموارد من s1 إلى s2

    // s1 الآن فارغ (لا يمكن استخدامه)
    std::cout &lt;&lt; "s1: " &lt;&lt; s1 &lt;&lt; std::endl; // سيطبع سطراً فارغاً
    std::cout &lt;&lt; "s2: " &lt;&lt; s2 &lt;&lt; std::endl; // يطبع "Hello"

    return 0;
}</code></pre>
          </div>
        `,
      },
      // ============================
      // C++17/20 Features (متقدم)
      // ============================
      {
        question: "ما هي أهم الإضافات في C++17 و C++20؟",
        answer: `
          <ul class="list-disc pr-6 space-y-2 mt-2">
            <li>
              <strong>C++17:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li><strong>Structured Bindings:</strong> <code>auto [x, y] = point;</code> [citation:6].</li>
                <li><strong><code>if constexpr</code>:</strong> تنفيذ شرطي في وقت الترجمة.</li>
                <li><strong>std::optional, std::variant, std::any:</strong> أنواع بيانات جديدة.</li>
                <li><strong>Parallel Algorithms:</strong> خوارزميات متوازية في STL.</li>
              </ul>
            </li>
            <li>
              <strong>C++20:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li><strong>Concepts:</strong> قيود على القوالب (Templates) لتحسين القراءة والأخطاء [citation:6].</li>
                <li><strong>Coroutines:</strong> دوال غير متزامنة قابلة للإيقاف والاستئناف [citation:9].</li>
                <li><strong>Ranges:</strong> طريقة جديدة للتعامل مع الحاويات.</li>
                <li><strong>std::span:</strong> عرض (View) على مصفوفة أو حاوية.</li>
              </ul>
            </li>
          </ul>
        `,
      },
      // ============================
      // أسئلة برمجية (Coding)
      // ============================
      {
        question: "كيف تحذف التكرارات من مصفوفة في C++؟",
        answer: `
          <p>لحذف التكرارات من <code>vector</code>، استخدم <code>sort</code> مع <code>unique</code> و <code>erase</code>:</p>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>#include &lt;vector&gt;
#include &lt;algorithm&gt;

std::vector&lt;int&gt; arr = {1, 2, 2, 3, 3, 3, 4, 5, 5};

// 1. ترتيب العناصر
std::sort(arr.begin(), arr.end());

// 2. إزالة التكرارات المتجاورة
auto last = std::unique(arr.begin(), arr.end());

// 3. حذف العناصر المكررة
arr.erase(last, arr.end());

// arr = {1, 2, 3, 4, 5}</code></pre>
          </div>
        `,
      },
      {
        question: "كيف تنشئ Thread Pool في C++؟",
        answer: `
          <p><strong>Thread Pool</strong> هو مجموعة من الخيوط الجاهزة لتنفيذ المهام بشكل غير متزامن، مما يقلل من حمل إنشاء الخيوط في كل مرة [citation:9].</p>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>#include &lt;vector&gt;
#include &lt;queue&gt;
#include &lt;thread&gt;
#include &lt;future&gt;
#include &lt;functional&gt;

class ThreadPool {
public:
    ThreadPool(size_t numThreads) {
        for (size_t i = 0; i &lt; numThreads; ++i) {
            workers.emplace_back([this] {
                while (true) {
                    std::function&lt;void()&gt; task;
                    {
                        std::unique_lock&lt;std::mutex&gt; lock(queueMutex);
                        condition.wait(lock, [this] { return !tasks.empty() || stop; });
                        if (stop &amp;&amp; tasks.empty()) return;
                        task = std::move(tasks.front());
                        tasks.pop();
                    }
                    task();
                }
            });
        }
    }

    template&lt;typename F, typename... Args&gt;
    auto enqueue(F&amp;&amp; f, Args&amp;&amp;... args) {
        auto task = std::make_shared&lt;std::packaged_task&lt;void()&gt;&gt;(
            std::bind(std::forward&lt;F&gt;(f), std::forward&lt;Args&gt;(args)...)
        );
        auto future = task-&gt;get_future();
        {
            std::unique_lock&lt;std::mutex&gt; lock(queueMutex);
            tasks.emplace([task]() { (*task)(); });
        }
        condition.notify_one();
        return future;
    }

    ~ThreadPool() {
        {
            std::unique_lock&lt;std::mutex&gt; lock(queueMutex);
            stop = true;
        }
        condition.notify_all();
        for (std::thread&amp; worker : workers) {
            worker.join();
        }
    }

private:
    std::vector&lt;std::thread&gt; workers;
    std::queue&lt;std::function&lt;void()&gt;&gt; tasks;
    std::mutex queueMutex;
    std::condition_variable condition;
    bool stop = false;
};</code></pre>
          </div>
        `,
      },
    ],
  },
  Front_end: {
    title: "Front_end",
    icon: "⚙️",
    color: "teal",
    questions: [
      {
        question: "إيه الفرق بين HTML و CSS و JavaScript؟",
        answer: `
    <p>ببساطة:</p>
    <ul class="list-disc pr-6 space-y-2 mt-2">
      <li><strong>HTML:</strong> هيكل الصفحة والمحتوى (العظام).</li>
      <li><strong>CSS:</strong> شكل الصفحة والتنسيق (اللبس).</li>
      <li><strong>JavaScript:</strong> التفاعل والحركة والمنطق (المخ).</li>
    </ul>
  `,
      },
      {
        question: "إيه هو الـ Responsive Design؟ وإزاي بتعمله؟",
        answer: `
    <p>الـ Responsive Design معناه إن الموقع يشتغل كويس على كل الشاشات (موبايل وتابلت وكمبيوتر).</p>
    <ul class="list-disc pr-6 space-y-2 mt-2">
      <li>بتستخدم Media Queries.</li>
      <li>بتستخدم وحدات مرنة زي % و rem و vw.</li>
      <li>بتستخدم Flexbox و Grid.</li>
      <li>الصور بتكون responsive.</li>
      <li>بتبدأ تصميم Mobile First غالبًا.</li>
    </ul>
  `,
      },
      {
        question: "إيه الفرق بين Client-side و Server-side؟",
        answer: `
    <ul class="list-disc pr-6 space-y-3">
      <li>
        <strong>Client-side:</strong>
        <ul class="list-circle pr-6 space-y-1 mt-1">
          <li>الكود بيشتغل في متصفح المستخدم.</li>
          <li>HTML و CSS و JavaScript.</li>
        </ul>
      </li>
      <li>
        <strong>Server-side:</strong>
        <ul class="list-circle pr-6 space-y-1 mt-1">
          <li>الكود بيشتغل على السيرفر.</li>
          <li>زي Node.js و PHP و Python.</li>
        </ul>
      </li>
    </ul>
  `,
      },
      {
        question: "إيه هو الـ DOM؟",
        answer: `
    <p>الـ DOM هو تمثيل الصفحة كشجرة من الكائنات، JavaScript بتقدر تتحكم فيه.</p>
    <ul class="list-disc pr-6 space-y-2 mt-2">
      <li>بتقدر تضيف وتعدل وتمسح عناصر.</li>
      <li>بتقدر تغير الـ styles والـ attributes.</li>
      <li>كل ما الصفحة أكبر، التعامل مع الـ DOM بيبقى أثقل.</li>
    </ul>
  `,
      },
      {
        question: "إيه الفرق بين == و === في JavaScript؟",
        answer: `
    <ul class="list-disc pr-6 space-y-2 mt-2">
      <li><strong>==</strong> بتقارن القيمة بعد تحويل النوع.</li>
      <li><strong>===</strong> بتقارن القيمة والنوع من غير تحويل.</li>
    </ul>
    <p class="mt-2">دايمًا استخدم === عشان تتجنب مشاكل.</p>
  `,
      },
      {
        question: "إيه هو الـ Event Bubbling؟",
        answer: `
    <p>الـ Event Bubbling معناه إن الحدث بيطلع من العنصر اللي اضغط عليه لحد أعلى عنصر في الصفحة.</p>
    <ul class="list-disc pr-6 space-y-2 mt-2">
      <li>ده السلوك الافتراضي.</li>
      <li>تقدر توقفه بـ stopPropagation().</li>
      <li>بتستفيد منه في الـ Event Delegation.</li>
    </ul>
  `,
      },
      {
        question: "إيه هو الـ Event Delegation؟",
        answer: `
    <p>بدل ما تحط Event Listener على كل عنصر، بتحطه على الأب مرة واحدة.</p>
    <ul class="list-disc pr-6 space-y-2 mt-2">
      <li>مفيد جدًا مع العناصر اللي بتضاف ديناميكي.</li>
      <li>بيحسن الأداء.</li>
      <li>بيعتمد على الـ Event Bubbling.</li>
    </ul>
  `,
      },
      {
        question: "إيه الفرق بين localStorage و sessionStorage و cookies؟",
        answer: `
    <ul class="list-disc pr-6 space-y-3">
      <li>
        <strong>localStorage:</strong> تخزين دائم، سعة كبيرة، مش بيتبعت للسيرفر.
      </li>
      <li>
        <strong>sessionStorage:</strong> تخزين مؤقت لحد ما التاب يتقفل.
      </li>
      <li>
        <strong>cookies:</strong> سعة صغيرة، بيتبعت مع كل Request، ليه تاريخ انتهاء.
      </li>
    </ul>
  `,
      },
      {
        question: "إيه هو الـ CORS؟ وإزاي بتحله؟",
        answer: `
    <p>الـ CORS هو حماية من المتصفح بتمنع موقع يطلب بيانات من دومين تاني.</p>
    <ul class="list-disc pr-6 space-y-2 mt-2">
      <li>الحل بيكون من السيرفر عن طريق إرسال Headers معينة.</li>
      <li>أشهر Header: Access-Control-Allow-Origin.</li>
    </ul>
  `,
      },
      {
        question: "إيه الفرق بين GET و POST؟",
        answer: `
    <ul class="list-disc pr-6 space-y-3">
      <li>
        <strong>GET:</strong>
        <ul class="list-circle pr-6 space-y-1 mt-1">
          <li>بتجيب بيانات.</li>
          <li>البيانات بتظهر في الـ URL.</li>
          <li>تقدر تعملها Bookmark.</li>
        </ul>
      </li>
      <li>
        <strong>POST:</strong>
        <ul class="list-circle pr-6 space-y-1 mt-1">
          <li>بتبعت بيانات.</li>
          <li>البيانات في الـ Body.</li>
          <li>آمن أكتر لإرسال معلومات حساسة.</li>
        </ul>
      </li>
    </ul>
  `,
      },
      {
        question: "إيه هو الـ SPA؟ وإيه مميزاته وعيوبه؟",
        answer: `
    <p>الـ SPA هو Single Page Application، يعني الصفحة بتتحمل مرة واحدة والتحديثات بتحصل من غير Reload.</p>
    <ul class="list-disc pr-6 space-y-2 mt-2">
      <li><strong>مميزات:</strong> تجربة مستخدم أسرع وأنعم، تفاعل أعلى.</li>
      <li><strong>عيوب:</strong> الـ SEO أصعب، التحميل الأولي ممكن يبقى تقيل، محتاج JavaScript شغال.</li>
    </ul>
  `,
      },
      {
        question: "إيه الفرق بين Framework و Library؟",
        answer: `
    <ul class="list-disc pr-6 space-y-3">
      <li>
        <strong>Library:</strong>
        <ul class="list-circle pr-6 space-y-1 mt-1">
          <li>إنت بتتحكم في الكود، وبتستدعي المكتبة لما تحتاجها.</li>
          <li>زي jQuery أو Lodash.</li>
        </ul>
      </li>
      <li>
        <strong>Framework:</strong>
        <ul class="list-circle pr-6 space-y-1 mt-1">
          <li>هو اللي بيتحكم في تدفق التطبيق، وإنت بتكتب الكود جواه.</li>
          <li>زي React أو Vue أو Angular.</li>
        </ul>
      </li>
    </ul>
  `,
      },
      {
        question: "إيه هو الـ Virtual DOM؟",
        answer: `
    <p>الـ Virtual DOM هو نسخة خفيفة من الـ DOM الحقيقي بتتخزن في الذاكرة.</p>
    <ul class="list-disc pr-6 space-y-2 mt-2">
      <li>لما الداتا تتغير، بيتحدث الـ Virtual DOM الأول.</li>
      <li>بعدين بيتم مقارنة (Diffing) مع النسخة القديمة.</li>
      <li>وبيتحدث بس الأجزاء اللي اتغيرت في الـ DOM الحقيقي.</li>
      <li>ده بيخلي الأداء أحسن بكتير.</li>
    </ul>
  `,
      },
      {
        question: "إيه الفرق بين Props و State؟",
        answer: `
    <ul class="list-disc pr-6 space-y-3">
      <li>
        <strong>Props:</strong>
        <ul class="list-circle pr-6 space-y-1 mt-1">
          <li>بيانات جاية من الأب.</li>
          <li>للقراءة فقط (Read-only).</li>
        </ul>
      </li>
      <li>
        <strong>State:</strong>
        <ul class="list-circle pr-6 space-y-1 mt-1">
          <li>بيانات خاصة بالمكون نفسه.</li>
          <li>تقدر تغيرها، ولما تتغير المكون بيعمل Re-render.</li>
        </ul>
      </li>
    </ul>
  `,
      },
      {
        question: "إيه هو الـ Component في الفرونت إند؟",
        answer: `
    <p>الـ Component هو قطعة مستقلة من الواجهة قابلة لإعادة الاستخدام.</p>
    <ul class="list-disc pr-6 space-y-2 mt-2">
      <li>بتقسم الصفحة لأجزاء صغيرة.</li>
      <li>بتسهل الصيانة وإعادة الاستخدام.</li>
      <li>في React و Vue و Angular كلها مبنية على فكرة الـ Components.</li>
    </ul>
  `,
      },
      {
        question: "إزاي بتحسن أداء موقع فرونت إند؟",
        answer: `
    <ul class="list-disc pr-6 space-y-2 mt-2">
      <li>ضغط الصور واستخدام الصيغ الحديثة (WebP).</li>
      <li>Lazy Loading للصور والمكونات.</li>
      <li>Code Splitting.</li>
      <li>تقليل التعامل المباشر مع الـ DOM.</li>
      <li>استخدام CDN.</li>
      <li>تقليل حجم الـ JavaScript والـ CSS.</li>
      <li>استخدام Caching.</li>
    </ul>
  `,
      },
      {
        question: "إيه هو الـ Accessibility (a11y)؟",
        answer: `
    <p>الـ Accessibility معناها إن الموقع يبقى سهل الاستخدام لكل الناس، بما فيهم أصحاب الهمم.</p>
    <ul class="list-disc pr-6 space-y-2 mt-2">
      <li>استخدم عناصر Semantic.</li>
      <li>حط alt للصور.</li>
      <li>اهتم بالـ Keyboard Navigation.</li>
      <li>استخدم ARIA attributes لما تحتاج.</li>
      <li>خليك متأكد إن التباين اللوني كويس.</li>
    </ul>
  `,
      },
      {
        question: "إيه الفرق بين SSR و CSR و SSG؟",
        answer: `
    <ul class="list-disc pr-6 space-y-3">
      <li>
        <strong>CSR (Client-Side Rendering):</strong> الصفحة بتترندر في المتصفح.
      </li>
      <li>
        <strong>SSR (Server-Side Rendering):</strong> الصفحة بتترندر على السيرفر وتتبعث جاهزة.
      </li>
      <li>
        <strong>SSG (Static Site Generation):</strong> الصفحات بتتعمل وقت الـ Build.
      </li>
    </ul>
    <p class="mt-2">SSR و SSG أحسن للـ SEO، و CSR أسهل في التفاعل.</p>
  `,
      },
      {
        question: "إيه هو الـ REST API وإزاي بتتعامل معاه من الفرونت؟",
        answer: `
    <p>الـ REST API واجهة بتتخاطب مع السيرفر باستخدام HTTP Methods.</p>
    <ul class="list-disc pr-6 space-y-2 mt-2">
      <li>بتستخدم fetch أو Axios.</li>
      <li>GET للجلب، POST للإضافة، PUT/PATCH للتعديل، DELETE للحذف.</li>
      <li>غالبًا البيانات بتكون JSON.</li>
    </ul>
  `,
      },
      {
        question: "إيه أشهر الحاجات اللي بتتسأل في إنترفيو فرونت إند؟",
        answer: `
    <ul class="list-disc pr-6 space-y-2 mt-2">
      <li>HTML Semantic و Accessibility.</li>
      <li>CSS (Box Model, Flexbox, Grid, Positioning, Specificity).</li>
      <li>JavaScript (Closures, this, Event Loop, Promises, async/await).</li>
      <li>الفرق بين Frameworks (React vs Vue vs Angular).</li>
      <li>State Management.</li>
      <li>Performance Optimization.</li>
      <li>Responsive Design.</li>
      <li>Browser APIs (localStorage, Fetch, DOM).</li>
    </ul>
  `,
      },
      {
        question:
          "إيه الفرق بين Progressive Enhancement و Graceful Degradation؟",
        answer: `
    <ul class="list-disc pr-6 space-y-3">
      <li>
        <strong>Progressive Enhancement:</strong>
        <ul class="list-circle pr-6 space-y-1 mt-1">
          <li>بتبدأ بالأساس البسيط اللي يشتغل عند الكل.</li>
          <li>وبعدين بتضيف تحسينات للمتصفحات الحديثة.</li>
          <li>الأفضل والأكثر استخدامًا دلوقتي.</li>
        </ul>
      </li>
      <li>
        <strong>Graceful Degradation:</strong>
        <ul class="list-circle pr-6 space-y-1 mt-1">
          <li>بتبني الموقع كامل بالميزات الحديثة.</li>
          <li>وبعدين بتضمن إنه يشتغل بشكل مقبول على المتصفحات القديمة.</li>
        </ul>
      </li>
    </ul>
  `,
      },
      {
        question: "إيه هو الـ Critical Rendering Path؟",
        answer: `
    <p>الـ Critical Rendering Path هو الخطوات اللي المتصفح بيمشي فيها عشان يحول الكود لبكسلات على الشاشة.</p>
    <ul class="list-disc pr-6 space-y-2 mt-2">
      <li>بناء الـ DOM من الـ HTML.</li>
      <li>بناء الـ CSSOM من الـ CSS.</li>
      <li>دمجهم في الـ Render Tree.</li>
      <li>عمل Layout (تحديد الأماكن والأحجام).</li>
      <li>عمل Paint (الرسم على الشاشة).</li>
    </ul>
    <p class="mt-2">كل ما تقدر تقصر الطريق ده، الصفحة هتظهر أسرع.</p>
  `,
      },
      {
        question: "إيه الفرق بين Reflow و Repaint؟",
        answer: `
    <ul class="list-disc pr-6 space-y-3">
      <li>
        <strong>Reflow (أو Layout):</strong>
        <ul class="list-circle pr-6 space-y-1 mt-1">
          <li>بيحصل لما يتغير حجم أو مكان عنصر.</li>
          <li>أغلى على الأداء لأنه بيحسب تاني مواضع العناصر.</li>
        </ul>
      </li>
      <li>
        <strong>Repaint:</strong>
        <ul class="list-circle pr-6 space-y-1 mt-1">
          <li>بيحصل لما يتغير شكل العنصر من غير ما يأثر على الـ layout (زي اللون أو الظل).</li>
          <li>أرخص من الـ Reflow.</li>
        </ul>
      </li>
    </ul>
  `,
      },
      {
        question: "إزاي تقلل الـ Reflow و الـ Repaint؟",
        answer: `
    <ul class="list-disc pr-6 space-y-2 mt-2">
      <li>متغيرش الـ styles واحد واحد، غيرهم مرة واحدة.</li>
      <li>استخدم class بدل ما تغير الـ style مباشرة.</li>
      <li>تجنب قراءة layout properties (زي offsetHeight) وسط التعديلات.</li>
      <li>استخدم transform و opacity لأنها أرخص (بتشتغل على الـ GPU).</li>
      <li>استخدم DocumentFragment لو بتضيف عناصر كتير.</li>
    </ul>
  `,
      },
      {
        question: "إيه هو الـ Web Storage؟ وإيه أنواعه؟",
        answer: `
    <p>الـ Web Storage هو طريقة لتخزين بيانات في المتصفح من غير ما تبعتها للسيرفر.</p>
    <ul class="list-disc pr-6 space-y-2 mt-2">
      <li><strong>localStorage:</strong> بيانات دائمة.</li>
      <li><strong>sessionStorage:</strong> بيانات مؤقتة لحد ما التاب يتقفل.</li>
    </ul>
    <p class="mt-2">الاتنين بيخزنوا strings بس، فلو عندك object لازم تعمل JSON.stringify.</p>
  `,
      },
      {
        question: "إيه الفرق بين Cookie و Token في المصادقة؟",
        answer: `
    <ul class="list-disc pr-6 space-y-3">
      <li>
        <strong>Cookies:</strong>
        <ul class="list-circle pr-6 space-y-1 mt-1">
          <li>بتتبعت أوتوماتيك مع كل Request.</li>
          <li>السيرفر بيتحكم فيها أكتر.</li>
          <li>محتاجة حماية من CSRF.</li>
        </ul>
      </li>
      <li>
        <strong>Token (زي JWT):</strong>
        <ul class="list-circle pr-6 space-y-1 mt-1">
          <li>بتتخزن في localStorage أو memory.</li>
          <li>بتتبعت يدوي في الـ Header.</li>
          <li>شائعة أكتر في الـ SPAs.</li>
        </ul>
      </li>
    </ul>
  `,
      },
      {
        question: "إيه هو الـ JWT؟ وإزاي بيشتغل؟",
        answer: `
    <p>الـ JWT هو JSON Web Token، طريقة لنقل معلومات بشكل آمن بين طرفين.</p>
    <ul class="list-disc pr-6 space-y-2 mt-2">
      <li>بيتكون من 3 أجزاء: Header و Payload و Signature.</li>
      <li>السيرفر بيعمل الـ Token بعد الـ Login.</li>
      <li>الفرونت بيبعت الـ Token مع كل Request في الـ Authorization Header.</li>
      <li>السيرفر بيتحقق من الـ Signature من غير ما يحتاج Session.</li>
    </ul>
  `,
      },
      {
        question: "إيه هو الـ CSRF؟ وإزاي بتقي منه؟",
        answer: `
    <p>الـ CSRF هو هجوم بيخلي المتصفح يبعت Request لموقع تاني وأنت مسجل دخول فيه من غير علمك.</p>
    <ul class="list-disc pr-6 space-y-2 mt-2">
      <li>بتقي منه بـ CSRF Token.</li>
      <li>أو باستخدام SameSite Cookie.</li>
      <li>أو بالاعتماد على Tokens في الـ Header بدل الكوكيز.</li>
    </ul>
  `,
      },
      {
        question: "إيه هو الـ XSS؟ وإزاي بتقي منه؟",
        answer: `
    <p>الـ XSS هو حقن كود JavaScript خبيث في الصفحة.</p>
    <ul class="list-disc pr-6 space-y-2 mt-2">
      <li>بتقي منه بـ Sanitize أي مدخلات من المستخدم.</li>
      <li>متعملش innerHTML بأي بيانات جاية من بره.</li>
      <li>استخدم Content Security Policy (CSP).</li>
      <li>استخدم مكتبات بتأمن الـ rendering زي اللي في React و Vue.</li>
    </ul>
  `,
      },
      {
        question: "إيه الفرق بين Authentication و Authorization؟",
        answer: `
    <p>كتير ناس بتخلط بينهم، بس الفرق بسيط ومهم:</p>
    
    <ul class="list-disc pr-6 space-y-3">
      <li>
        <strong>Authentication (المصادقة):</strong>
        <ul class="list-circle pr-6 space-y-1 mt-1">
          <li>بمعناها: <strong>مين إنت؟</strong></li>
          <li>هي عملية التأكد من هوية المستخدم.</li>
          <li>يعني: هل الشخص ده فعلاً اللي بيقوله على نفسه؟</li>
          <li>أمثلة: تسجيل الدخول بـ Email و Password، أو OTP، أو Login بـ Google.</li>
          <li>النتيجة بتاعتها عادة بتكون Token أو Session.</li>
        </ul>
      </li>
      
      <li>
        <strong>Authorization (التفويض / الصلاحيات):</strong>
        <ul class="list-circle pr-6 space-y-1 mt-1">
          <li>بمعناها: <strong>إيه المسموح ليك تعمله؟</strong></li>
          <li>بتحصل <strong>بعد</strong> الـ Authentication.</li>
          <li>بتحدد هل المستخدم ده يقدر يشوف الصفحة دي؟ يقدر يعدل؟ يقدر يمسح؟</li>
          <li>أمثلة: Admin يقدر يحذف مستخدمين، User عادي يقدر يشوف بس، Guest مش يقدر يدخل أصلاً.</li>
        </ul>
      </li>
    </ul>

    <p class="mt-3"><strong>مثال بسيط عشان تثبت:</strong></p>
    <ul class="list-disc pr-6 space-y-1 mt-1">
      <li>لما تدخل بـ Username و Password ← ده <strong>Authentication</strong>.</li>
      <li>لما النظام يقولك "إنت User عادي، مش هتقدر تدخل لوحة التحكم" ← ده <strong>Authorization</strong>.</li>
    </ul>

    <p class="mt-3">باختصار:</p>
    <ul class="list-disc pr-6 space-y-1 mt-1">
      <li><strong>Authentication</strong> = إثبات الهوية</li>
      <li><strong>Authorization</strong> = تحديد الصلاحيات</li>
    </ul>
  `,
      },
      {
        question: "إيه هو الـ Bundle Size؟ وإزاي بتقلله؟",
        answer: `
    <p>الـ Bundle Size هو حجم ملفات الـ JavaScript والـ CSS النهائية اللي بتتحمل على المتصفح.</p>
    <ul class="list-disc pr-6 space-y-2 mt-2">
      <li>استخدم Code Splitting.</li>
      <li>استخدم Tree Shaking.</li>
      <li>اتأكد إنك مش مستورد مكتبات تقيلة من غير داعي.</li>
      <li>استخدم Dynamic Import.</li>
      <li>اضغط الملفات (Minify).</li>
    </ul>
  `,
      },
      {
        question: "إيه هو الـ Lazy Loading؟",
        answer: `
    <p>الـ Lazy Loading معناه إنك تحمل الموارد (صور أو مكونات) بس لما تحتاجها.</p>
    <ul class="list-disc pr-6 space-y-2 mt-2">
      <li>للصور: loading="lazy" أو Intersection Observer.</li>
      <li>للمكونات: Dynamic Import أو React.lazy.</li>
      <li>بيحسن وقت التحميل الأولي.</li>
    </ul>
  `,
      },
      {
        question: "إيه هو الـ Code Splitting؟",
        answer: `
    <p>الـ Code Splitting معناه تقسيم الـ JavaScript لملفات صغيرة بدل ملف واحد كبير.</p>
    <ul class="list-disc pr-6 space-y-2 mt-2">
      <li>الصفحة بتحمل الجزء اللي محتاجاه بس.</li>
      <li>بيتحسن الـ Initial Load Time.</li>
      <li>بيتعمل بسهولة مع React.lazy أو Dynamic Import في Vue.</li>
    </ul>
  `,
      },
      {
        question: "إيه الفرق بين Debounce و Throttle؟",
        answer: `
    <ul class="list-disc pr-6 space-y-3">
      <li>
        <strong>Debounce:</strong>
        <ul class="list-circle pr-6 space-y-1 mt-1">
          <li>بستنى المستخدم يخلص، وبعدين ينفذ.</li>
          <li>مناسب للبحث (Search Input).</li>
        </ul>
      </li>
      <li>
        <strong>Throttle:</strong>
        <ul class="list-circle pr-6 space-y-1 mt-1">
          <li>بينفذ مرة كل فترة معينة.</li>
          <li>مناسب للـ Scroll أو الـ Resize.</li>
        </ul>
      </li>
    </ul>
  `,
      },
      {
        question: "إيه هو الـ Memory Leak في الفرونت إند؟ وإزاي تتجنبه؟",
        answer: `
    <p>الـ Memory Leak بيحصل لما الذاكرة متتتحررش بعد ما مش محتاجها.</p>
    <ul class="list-disc pr-6 space-y-2 mt-2">
      <li>أشهر الأسباب: Event Listeners مش متشالة، Timers شغالة، Closures ماسكة بيانات كبيرة.</li>
      <li>الحل: نظف في الـ cleanup (useEffect return أو onUnmounted).</li>
      <li>وقف الـ setInterval و clear الـ Listeners.</li>
    </ul>
  `,
      },
      {
        question: "إيه هو الـ Service Worker؟",
        answer: `
    <p>الـ Service Worker سكربت بيشتغل في خلفية المتصفح ومنفصل عن الصفحة.</p>
    <ul class="list-disc pr-6 space-y-2 mt-2">
      <li>بيستخدم في الـ PWA.</li>
      <li>بيقدر يعمل Caching للملفات.</li>
      <li>بيقدر يشتغل Offline.</li>
      <li>بيقدر يبعت Push Notifications.</li>
    </ul>
  `,
      },
      {
        question: "إيه هو الـ PWA؟",
        answer: `
    <p>الـ PWA هو Progressive Web App، يعني موقع ويب بيحاول يقرب من تجربة التطبيق.</p>
    <ul class="list-disc pr-6 space-y-2 mt-2">
      <li>يشتغل Offline.</li>
      <li>يتثبت على الشاشة الرئيسية.</li>
      <li>يبعت إشعارات.</li>
      <li>بيعتمد على Service Worker و Web App Manifest.</li>
    </ul>
  `,
      },
      {
        question:
          "إيه الفرق بين Cookie و Session Storage و Local Storage من ناحية الأمان؟",
        answer: `
    <ul class="list-disc pr-6 space-y-2 mt-2">
      <li><strong>Cookies:</strong> ممكن تتحط HttpOnly عشان JavaScript متقدرش تقرأها (أحسن ضد XSS).</li>
      <li><strong>localStorage و sessionStorage:</strong> JavaScript تقدر تقرأهم، فمش مناسبين لتخزين توكنات حساسة لو فيه خطر XSS.</li>
    </ul>
  `,
      },
      {
        question: "إيه هو الـ Hydration؟",
        answer: `
    <p>الـ Hydration بيحصل في الـ SSR.</p>
    <ul class="list-disc pr-6 space-y-2 mt-2">
      <li>السيرفر بيبعت HTML جاهز.</li>
      <li>بعدين JavaScript بتتحمل وبتربط الـ Events والـ State بالـ HTML الموجود.</li>
      <li>ده اللي بيخلي الصفحة تفاعلية بعد ما اتعرضت.</li>
    </ul>
  `,
      },
      {
        question: "إيه أشهر المقاييس اللي بتقيس بيها أداء الفرونت إند؟",
        answer: `
    <ul class="list-disc pr-6 space-y-2 mt-2">
      <li><strong>FCP (First Contentful Paint):</strong> أول محتوى يظهر.</li>
      <li><strong>LCP (Largest Contentful Paint):</strong> أكبر عنصر يظهر.</li>
      <li><strong>TTI (Time to Interactive):</strong> الوقت لحد ما الصفحة تبقى تفاعلية.</li>
      <li><strong>CLS (Cumulative Layout Shift):</strong> استقرار الـ Layout.</li>
      <li><strong>FID أو INP:</strong> سرعة الاستجابة لتفاعل المستخدم.</li>
    </ul>
  `,
      },
    ],
  },
  Backend: {
    title: "Backend",
    icon: "⚙️",
    color: "teal",
    questions: [
      {
        question: "إيه هو الـ REST API؟ وإيه مبادئه الأساسية؟",
        answer: `
        <p>الـ REST API هي طريقة لتصميم واجهات برمجية بتشتغل عن طريق HTTP.</p>
        <ul class="list-disc pr-6 space-y-2 mt-2">
          <li>كل Resource ليه URL خاص (زي /users أو /products/5).</li>
          <li>بتستخدم HTTP Methods: GET و POST و PUT و PATCH و DELETE.</li>
          <li>Stateless ← كل Request مستقل ومش معتمد على Request قبله.</li>
          <li>البيانات غالبًا بتكون JSON.</li>
          <li>السيرفر مش بيحفظ حالة المستخدم بين الطلبات.</li>
        </ul>
      `,
      },
      {
        question: "إيه الفرق بين PUT و PATCH؟",
        answer: `
        <ul class="list-disc pr-6 space-y-3">
          <li>
            <strong>PUT:</strong>
            <ul class="list-circle pr-6 space-y-1 mt-1">
              <li>بيستبدل المورد كله.</li>
              <li>لو بعت جزء من البيانات، الباقي ممكن يتساب أو يتمسح حسب التطبيق.</li>
              <li>Idempotent (لو stabilتها أكتر من مرة بنفس البيانات، النتيجة واحدة).</li>
            </ul>
          </li>
          <li>
            <strong>PATCH:</strong>
            <ul class="list-circle pr-6 space-y-1 mt-1">
              <li>بيعدل جزء من المورد بس.</li>
              <li>بتبعت الحقول اللي عايز تغيرها فقط.</li>
              <li>أريح وأأمن في أغلب الحالات.</li>
            </ul>
          </li>
        </ul>
      `,
      },
      {
        question: "إيه الفرق بين Authentication و Authorization؟",
        answer: `
        <ul class="list-disc pr-6 space-y-3">
          <li>
            <strong>Authentication:</strong>
            <ul class="list-circle pr-6 space-y-1 mt-1">
              <li>مين إنت؟</li>
              <li>عملية التأكد من هوية المستخدم (Login).</li>
              <li>النتيجة غالبًا Token أو Session.</li>
            </ul>
          </li>
          <li>
            <strong>Authorization:</strong>
            <ul class="list-circle pr-6 space-y-1 mt-1">
              <li>إيه المسموح ليك تعمله؟</li>
              <li>بتحدد الصلاحيات بعد ما تثبت هويتك.</li>
              <li>زي: هل تقدر تحذف؟ تعدل؟ تشوف صفحة معينة؟</li>
            </ul>
          </li>
        </ul>
      `,
      },
      {
        question: "إيه هو الـ JWT؟ وإزاي بيشتغل؟",
        answer: `
        <p>الـ JWT (JSON Web Token) طريقة لنقل معلومات المستخدم بشكل آمن.</p>
        <ul class="list-disc pr-6 space-y-2 mt-2">
          <li>بيتكون من 3 أجزاء: Header + Payload + Signature.</li>
          <li>السيرفر بيعمله بعد الـ Login وبيبعتهولك.</li>
          <li>إنت بتخزنه (في memory أو localStorage أو cookie).</li>
          <li>مع كل Request بتبعت الـ Token في الـ Authorization Header.</li>
          <li>السيرفر بيتحقق من الـ Signature من غير ما يحتاج يرجع لقاعدة البيانات كل مرة.</li>
        </ul>
      `,
      },
      {
        question: "إيه الفرق بين Cookie-based Auth و Token-based Auth؟",
        answer: `
        <ul class="list-disc pr-6 space-y-3">
          <li>
            <strong>Cookie-based:</strong>
            <ul class="list-circle pr-6 space-y-1 mt-1">
              <li>السيرفر بيبعت Session ID في Cookie.</li>
              <li>المتصفح بيبعتها أوتوماتيك مع كل Request.</li>
              <li>محتاج حماية من CSRF.</li>
              <li>شائع أكتر في المواقع التقليدية.</li>
            </ul>
          </li>
          <li>
            <strong>Token-based (JWT):</strong>
            <ul class="list-circle pr-6 space-y-1 mt-1">
              <li>الـ Token بيتخزن في الفرونت.</li>
              <li>بتبعته يدوي في الـ Header.</li>
              <li>مناسب أكتر للـ SPAs والتطبيقات الموبايل.</li>
              <li>Stateless من ناحية السيرفر.</li>
            </ul>
          </li>
        </ul>
      `,
      },
      {
        question: "إيه هو الـ CORS؟ وإزاي بيأثر على الفرونت؟",
        answer: `
        <p>الـ CORS (Cross-Origin Resource Sharing) حماية من المتصفح.</p>
        <ul class="list-disc pr-6 space-y-2 mt-2">
          <li>بتمنع إن موقع يطلب بيانات من دومين تاني إلا لو السيرفر موافق.</li>
          <li>لو السيرفر مش باعت الـ Headers الصح، الطلب بيفشل من الفرونت.</li>
          <li>الحل بيكون من الـ Backend عن طريق إضافة Access-Control-Allow-Origin وغيره.</li>
        </ul>
      `,
      },
      {
        question: "إيه الفرق بين Status Code 401 و 403؟",
        answer: `
        <ul class="list-disc pr-6 space-y-3">
          <li>
            <strong>401 Unauthorized:</strong>
            <ul class="list-circle pr-6 space-y-1 mt-1">
              <li>إنت مش مسجل دخول، أو الـ Token غلط أو منتهي.</li>
              <li>المطلوب: تعمل Login تاني.</li>
            </ul>
          </li>
          <li>
            <strong>403 Forbidden:</strong>
            <ul class="list-circle pr-6 space-y-1 mt-1">
              <li>إنت مسجل دخول، بس مش عندك صلاحية تعمل الحركة دي.</li>
              <li>المطلوب: مش هتقدر تكمل حتى لو عملت Login.</li>
            </ul>
          </li>
        </ul>
      `,
      },
      {
        question: "إيه أشهر الـ HTTP Status Codes اللي لازم الفرونت يعرفها؟",
        answer: `
        <ul class="list-disc pr-6 space-y-2 mt-2">
          <li><strong>200:</strong> نجاح.</li>
          <li><strong>201:</strong> تم الإنشاء بنجاح.</li>
          <li><strong>400:</strong> غلط في البيانات اللي اتبعتت.</li>
          <li><strong>401:</strong> مش مسجل دخول.</li>
          <li><strong>403:</strong> مش عندك صلاحية.</li>
          <li><strong>404:</strong> المورد مش موجود.</li>
          <li><strong>422:</strong> البيانات صحيحة الشكل بس فيها أخطاء منطقية (Validation).</li>
          <li><strong>500:</strong> خطأ من السيرفر.</li>
        </ul>
      `,
      },
      {
        question: "إيه هو الـ Middleware؟",
        answer: `
        <p>الـ Middleware دالة بتتنفذ في منتصف الـ Request قبل ما يوصل للـ Route النهائي.</p>
        <ul class="list-disc pr-6 space-y-2 mt-2">
          <li>بتستخدم في تسجيل الطلبات (Logging).</li>
          <li>التحقق من الـ Token.</li>
          <li>التحقق من الصلاحيات.</li>
          <li>معالجة الأخطاء.</li>
          <li>تعديل الـ Request أو الـ Response.</li>
        </ul>
      `,
      },
      {
        question: "إيه الفرق بين SQL و NoSQL من وجهة نظر الفرونت؟",
        answer: `
        <ul class="list-disc pr-6 space-y-3">
          <li>
            <strong>SQL (زي MySQL و PostgreSQL):</strong>
            <ul class="list-circle pr-6 space-y-1 mt-1">
              <li>بيانات منظمة في جداول.</li>
              <li>العلاقات واضحة.</li>
              <li>الـ Response غالبًا بيكون منظم وثابت.</li>
            </ul>
          </li>
          <li>
            <strong>NoSQL (زي MongoDB):</strong>
            <ul class="list-circle pr-6 space-y-1 mt-1">
              <li>بيانات مرنة (Documents).</li>
              <li>الـ Structure ممكن يتغير.</li>
              <li>أحيانًا الـ Response بيبقى Nested أكتر.</li>
            </ul>
          </li>
        </ul>
        <p class="mt-2">كفرونت إند، الفرق بيظهر في شكل الـ JSON اللي راجع لك.</p>
      `,
      },
      {
        question: "إيه هو الـ Pagination؟ وإزاي بتتعامل معاه من الفرونت؟",
        answer: `
        <p>الـ Pagination معناه تقسيم البيانات على صفحات بدل ما ترجع كلها مرة واحدة.</p>
        <ul class="list-disc pr-6 space-y-2 mt-2">
          <li>السيرفر بيرجع جزء من البيانات + معلومات زي page و totalPages و totalItems.</li>
          <li>من الفرونت بتبعت page و limit في الـ Query Parameters.</li>
          <li>بتعرض أزرار Next و Previous أو أرقام الصفحات.</li>
        </ul>
      `,
      },
      {
        question: "إيه هو الـ Rate Limiting؟",
        answer: `
        <p>الـ Rate Limiting هو تحديد عدد الطلبات اللي المستخدم يقدر يبعتها في فترة معينة.</p>
        <ul class="list-disc pr-6 space-y-2 mt-2">
          <li>بيحمي السيرفر من الضغط أو الهجمات.</li>
          <li>لو عديت الحد، السيرفر بيرجع 429 Too Many Requests.</li>
          <li>كفرونت لازم تتعامل مع الحالة دي وتعرض رسالة مناسبة.</li>
        </ul>
      `,
      },
      {
        question: "إيه الفرق بين Stateless و Stateful؟",
        answer: `
        <ul class="list-disc pr-6 space-y-3">
          <li>
            <strong>Stateless:</strong>
            <ul class="list-circle pr-6 space-y-1 mt-1">
              <li>السيرفر مش بيحفظ معلومات عن المستخدم بين الطلبات.</li>
              <li>كل Request لازم يبقى فيه كل المعلومات المطلوبة (زي الـ Token).</li>
              <li>أسهل في التوسع (Scaling).</li>
            </ul>
          </li>
          <li>
            <strong>Stateful:</strong>
            <ul class="list-circle pr-6 space-y-1 mt-1">
              <li>السيرفر بيحفظ Session للمستخدم.</li>
              <li>الطلب معتمد على حالة موجودة على السيرفر.</li>
            </ul>
          </li>
        </ul>
      `,
      },
      {
        question: "إيه هو الـ Webhook؟",
        answer: `
        <p>الـ Webhook هو طريقة السيرفر يبعتلك بيانات أوتوماتيك لما حدث معين يحصل.</p>
        <ul class="list-disc pr-6 space-y-2 mt-2">
          <li>عكس الـ API العادي اللي إنت بتطلب فيه.</li>
          <li>هنا السيرفر هو اللي بيبدأ الكلام.</li>
          <li>مثال: لما عملية الدفع تتم، السيرفر يبعت إشعار لتطبيقك.</li>
        </ul>
      `,
      },
      {
        question: "إيه هو الـ GraphQL؟ وإيه الفرق بينه وبين REST؟",
        answer: `
        <ul class="list-disc pr-6 space-y-3">
          <li>
            <strong>REST:</strong>
            <ul class="list-circle pr-6 space-y-1 mt-1">
              <li>كل Resource ليه Endpoint ثابت.</li>
              <li>أحيانًا بترجع بيانات زيادة أو ناقصة.</li>
            </ul>
          </li>
          <li>
            <strong>GraphQL:</strong>
            <ul class="list-circle pr-6 space-y-1 mt-1">
              <li>Endpoint واحد.</li>
              <li>إنت بتحدد بالظبط إيه الحقول اللي محتاجها.</li>
              <li>بتقلل الـ Over-fetching و Under-fetching.</li>
            </ul>
          </li>
        </ul>
      `,
      },
      {
        question: "إيه هو الـ Environment Variables وإزاي بتستخدمها؟",
        answer: `
        <p>الـ Environment Variables متغيرات بتخزن فيها قيم بتختلف حسب البيئة (Development أو Production).</p>
        <ul class="list-disc pr-6 space-y-2 mt-2">
          <li>زي رابط الـ API أو المفاتيح السرية.</li>
          <li>في Vite بتبدأ بـ VITE_.</li>
          <li>مفروض متخزنش أسرار حساسة في الفرونت لأن الكود باين للمستخدم.</li>
        </ul>
      `,
      },
      {
        question: "إيه اللي بيحصل لما تبعت Request من الفرونت للـ Backend؟",
        answer: `
        <ol class="list-decimal pr-6 space-y-2 mt-2">
          <li>الفرونت بيبعت Request (fetch أو Axios).</li>
          <li>الطلب بيعدي على الشبكة.</li>
          <li>السيرفر بيستقبله ويمرره على الـ Middleware.</li>
          <li>بيتتحقق من الـ Authentication والصلاحيات.</li>
          <li>بيتنفذ الـ Logic ويتعامل مع قاعدة البيانات.</li>
          <li>بيرجع Response بالبيانات أو الخطأ.</li>
          <li>الفرونت بيستقبل الـ Response ويحدث الواجهة.</li>
        </ol>
      `,
      },
      {
        question: "إيه هو الـ Idempotent Request؟",
        answer: `
        <p>الـ Idempotent معناه إنك لو بعتت نفس الـ Request أكتر من مرة، النتيجة هتبقى واحدة ومش هتتغير.</p>
        <ul class="list-disc pr-6 space-y-2 mt-2">
          <li>GET و PUT و DELETE عادة Idempotent.</li>
          <li>POST مش Idempotent، لأن كل مرة ممكن تعمل سجل جديد.</li>
        </ul>
      `,
      },
      {
        question: "إيه الفرق بين Query Parameters و Path Parameters و Body؟",
        answer: `
        <ul class="list-disc pr-6 space-y-3">
          <li>
            <strong>Path Parameters:</strong>
            <ul class="list-circle pr-6 space-y-1 mt-1">
              <li>جزء من الـ URL نفسه (زي /users/15).</li>
              <li>بتستخدم لتحديد مورد معين.</li>
            </ul>
          </li>
          <li>
            <strong>Query Parameters:</strong>
            <ul class="list-circle pr-6 space-y-1 mt-1">
              <li>بتتضاف بعد علامة ؟ (زي /users?page=2&limit=10).</li>
              <li>بتستخدم للفلترة والترتيب والـ Pagination.</li>
            </ul>
          </li>
          <li>
            <strong>Body:</strong>
            <ul class="list-circle pr-6 space-y-1 mt-1">
              <li>بيتبعت مع POST و PUT و PATCH.</li>
              <li>بيحتوي على البيانات اللي عايز تبعتها.</li>
            </ul>
          </li>
        </ul>
      `,
      },
      {
        question: "إيه اللي لازم تعمله لو الـ API رجعت خطأ؟",
        answer: `
        <ul class="list-disc pr-6 space-y-2 mt-2">
          <li>تقرا الـ Status Code كويس.</li>
          <li>تعرض رسالة مفهومة للمستخدم.</li>
          <li>لو 401 → تحول المستخدم لصفحة الـ Login.</li>
          <li>لو 403 → تقول له إن مفيش صلاحية.</li>
          <li>لو 422 أو 400 → تعرض أخطاء الـ Validation.</li>
          <li>لو 500 → تعرض رسالة عامة إن في مشكلة في السيرفر.</li>
        </ul>
      `,
      },
    ],
  },
};
