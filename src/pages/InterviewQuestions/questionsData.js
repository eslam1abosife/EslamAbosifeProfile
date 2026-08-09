export const questionsData = {
  javascript: {
    title: "JavaScript (ES6+)",
    icon: "📜",
    color: "blue",
    questions: [
      // ============================
      // المستوى الأول: أساسيات (20 سؤال)
      // ============================
      {
        question: "ما هي JavaScript؟",
        answer: `
          <p><strong>JavaScript</strong> هي لغة برمجة عالية المستوى، مفسرة (interpreted)، تُستخدم لإضافة التفاعل والحركة للمواقع الإلكترونية. تعمل في بيئة المتصفح (Client-side) وفي بيئة الخادم (Server-side) عبر Node.js.</p>
          <p class="mt-2">تتميز بـ:</p>
          <ul class="list-disc pr-6 space-y-1 mt-1">
            <li>لغة متعددة الاستخدامات (Front-end و Back-end).</li>
            <li>تدعم البرمجة الكائنية (OOP) والوظيفية (Functional).</li>
            <li>تتمتع بمجتمع ضخم ومكتبات وأطر عمل عديدة.</li>
          </ul>
        `,
      },
      {
        question: "ما هي أنواع البيانات في JavaScript؟",
        answer: `
          <p>تنقسم أنواع البيانات في JavaScript إلى قسمين رئيسيين:</p>
          <ul class="list-disc pr-6 space-y-2 mt-2">
            <li>
              <strong>الأنواع الأساسية (Primitive Types):</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li><code>string</code> - النصوص</li>
                <li><code>number</code> - الأرقام (整数 والكسور)</li>
                <li><code>bigint</code> - الأرقام الكبيرة جداً</li>
                <li><code>boolean</code> - true / false</li>
                <li><code>undefined</code> - قيمة غير معرفة</li>
                <li><code>null</code> - قيمة فارغة مقصودة</li>
                <li><code>symbol</code> - قيمة فريدة (ES6)</li>
              </ul>
            </li>
            <li>
              <strong>النوع المرجعي (Reference Type):</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li><code>object</code> - الكائنات (مصفوفات، دوال، تواريخ، وغيرها)</li>
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
              <strong><code>undefined</code>:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>تعني أن المتغير مُعلن ولكن لم يتم إعطاؤه أي قيمة.</li>
                <li>تظهر عندما تحاول الوصول إلى خاصية غير موجودة في كائن.</li>
                <li>هي القيمة الافتراضية للمتغيرات غير المعرفة.</li>
              </ul>
            </li>
            <li>
              <strong><code>null</code>:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>قيمة مقصودة من المطور تعني "لا يوجد شيء" أو "فارغ".</li>
                <li>تُستخدم للإشارة إلى أن المتغير لا يحتوي على قيمة صالحة.</li>
              </ul>
            </li>
          </ul>
          <div class="mt-3 p-3 bg-yellow-50 dark:bg-yellow-900/20 border-r-4 border-yellow-500 rounded">
            <p class="text-sm"><strong>⚠️ ملاحظة مهمة:</strong> <code>typeof null</code> يرجع <code>"object"</code> وهذا خطأ تاريخي في اللغة لا يمكن إصلاحه.</p>
          </div>
        `,
      },
      {
        question: "ما الفرق بين == و ===؟",
        answer: `
          <ul class="list-disc pr-6 space-y-3">
            <li>
              <strong><code>==</code> (مساواة مرنة - Loose Equality):</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>تقارن القيم <strong>بعد تحويل الأنواع (Type Coercion)</strong>.</li>
                <li>مثال: <code>5 == '5'</code> ترجع <code>true</code> (تحول النص إلى رقم).</li>
                <li><code>null == undefined</code> ترجع <code>true</code>.</li>
              </ul>
            </li>
            <li>
              <strong><code>===</code> (مساواة صارمة - Strict Equality):</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>تقارن القيمة <strong>والنوع</strong> معاً بدون أي تحويل.</li>
                <li>مثال: <code>5 === '5'</code> ترجع <code>false</code> (الأول رقم والثاني نص).</li>
                <li><code>null === undefined</code> ترجع <code>false</code>.</li>
              </ul>
            </li>
          </ul>
          <p class="mt-3"><strong>التوصية:</strong> استخدم <code>===</code> دائماً لتجنب الأخطاء غير المتوقعة.</p>
        `,
      },
      {
        question: "ما هو Hoisting في JavaScript؟",
        answer: `
          <p><strong>Hoisting (الرفع):</strong> هي آلية في JavaScript تقوم برفع تصريحات المتغيرات والدوال إلى أعلى النطاق (Scope) قبل تنفيذ الكود. يحدث هذا أثناء مرحلة الترجمة.</p>
          <ul class="list-disc pr-6 space-y-2 mt-2">
            <li>
              <strong>الدوال (Function Declarations):</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>تُرفع <strong>بالكامل</strong> مع جسم الدالة.</li>
                <li>يمكن استدعاؤها قبل تعريفها في الكود.</li>
              </ul>
            </li>
            <li>
              <strong><code>var</code>:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>يُرفع ويُعطى قيمة <code>undefined</code> تلقائياً.</li>
                <li>يمكن استخدامه قبل التصريح لكن قيمته ستكون <code>undefined</code>.</li>
              </ul>
            </li>
            <li>
              <strong><code>let</code> و <code>const</code>:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>يُرفعان لكنهما يدخلان في <strong>Temporal Dead Zone (TDZ)</strong>.</li>
                <li>لا يمكن استخدامهما قبل التصريح وإلا ينتج خطأ <code>ReferenceError</code>.</li>
              </ul>
            </li>
          </ul>
        `,
      },
      {
        question: "ما الفرق بين var و let و const؟",
        answer: `
          <div class="overflow-x-auto">
            <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700 text-sm">
              <thead>
                <tr class="bg-gray-100 dark:bg-gray-700/50">
                  <th class="px-3 py-2 text-right">الخاصية</th>
                  <th class="px-3 py-2 text-right"><code>var</code></th>
                  <th class="px-3 py-2 text-right"><code>let</code></th>
                  <th class="px-3 py-2 text-right"><code>const</code></th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                <tr>
                  <td class="px-3 py-2 font-medium">النطاق (Scope)</td>
                  <td class="px-3 py-2">Function</td>
                  <td class="px-3 py-2">Block <code>{}</code></td>
                  <td class="px-3 py-2">Block <code>{}</code></td>
                </tr>
                <tr>
                  <td class="px-3 py-2 font-medium">إعادة التصريح</td>
                  <td class="px-3 py-2">✅ مسموح</td>
                  <td class="px-3 py-2">❌ غير مسموح</td>
                  <td class="px-3 py-2">❌ غير مسموح</td>
                </tr>
                <tr>
                  <td class="px-3 py-2 font-medium">إعادة التعيين</td>
                  <td class="px-3 py-2">✅ مسموح</td>
                  <td class="px-3 py-2">✅ مسموح</td>
                  <td class="px-3 py-2">❌ غير مسموح</td>
                </tr>
                <tr>
                  <td class="px-3 py-2 font-medium">Hoisting</td>
                  <td class="px-3 py-2">نعم (<code>undefined</code>)</td>
                  <td class="px-3 py-2">نعم (TDZ)</td>
                  <td class="px-3 py-2">نعم (TDZ)</td>
                </tr>
                <tr>
                  <td class="px-3 py-2 font-medium">ربط بالـ Window</td>
                  <td class="px-3 py-2">✅ نعم</td>
                  <td class="px-3 py-2">❌ لا</td>
                  <td class="px-3 py-2">❌ لا</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p class="mt-3"><strong>التوصية:</strong> استخدم <code>const</code> دائماً، و <code>let</code> فقط عندما تحتاج لإعادة التعيين، وتجنب <code>var</code>.</p>
        `,
      },
      {
        question: "ما هو النطاق (Scope) في JavaScript؟",
        answer: `
          <p><strong>النطاق (Scope):</strong> هو المنطقة التي يكون فيها المتغير متاحاً للاستخدام. يحدد أين يمكن الوصول إلى المتغيرات والدوال.</p>
          <ul class="list-disc pr-6 space-y-2 mt-2">
            <li>
              <strong>Global Scope (النطاق العام):</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>المتغيرات المُعرّفة خارج أي دالة أو كتلة.</li>
                <li>متاحة في كل مكان في الكود.</li>
              </ul>
            </li>
            <li>
              <strong>Function Scope (نطاق الدالة):</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>المتغيرات المُعرّفة داخل دالة باستخدام <code>var</code>.</li>
                <li>متاحة فقط داخل الدالة التي عُرفت فيها.</li>
              </ul>
            </li>
            <li>
              <strong>Block Scope (نطاق الكتلة):</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>المتغيرات المُعرّفة داخل <code>{}</code> باستخدام <code>let</code> و <code>const</code>.</li>
                <li>متاحة فقط داخل الكتلة التي عُرفت فيها (مثل: if, for, while).</li>
              </ul>
            </li>
          </ul>
        `,
      },
      {
        question: "ما هو Closure في JavaScript؟",
        answer: `
          <p><strong>الـ Closure (الإغلاق):</strong> هو قدرة الدالة الداخلية على تذكر والوصول إلى متغيرات النطاق الخارجي (الذي عُرفت فيه) حتى بعد انتهاء تنفيذ الدالة الخارجية.</p>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <p class="text-sm font-medium mb-1">مثال توضيحي:</p>
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
          <p class="mt-2"><strong>الاستخدامات الشائعة:</strong></p>
          <ul class="list-disc pr-6 space-y-1 mt-1">
            <li>إنشاء <strong>متغيرات خاصة (Private Variables)</strong>.</li>
            <li>الدوال التي تُنشئ دوال أخرى (Factory Functions).</li>
            <li>في React Hooks مثل <code>useState</code> و <code>useEffect</code>.</li>
            <li>في دوال <code>setTimeout</code> و <code>addEventListener</code>.</li>
          </ul>
        `,
      },
      {
        question: "ما هو this في JavaScript وكيف يتغير حسب السياق؟",
        answer: `
          <p><code>this</code> هو كلمة مفتاحية تشير إلى الكائن الذي ينتمي إليه الكود الجاري تنفيذه. قيمة <code>this</code> تتغير حسب <strong>طريقة استدعاء الدالة</strong>:</p>
          <ul class="list-disc pr-6 space-y-2 mt-2">
            <li>
              <strong>استدعاء عادي (Regular Function Call):</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>في الوضع العادي: يشير إلى <code>window</code> (في المتصفح).</li>
                <li>في <code>strict mode</code>: يصبح <code>undefined</code>.</li>
              </ul>
            </li>
            <li>
              <strong>دالة داخل كائن (Method Call):</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>يشير إلى الكائن نفسه الذي يملك الدالة.</li>
              </ul>
            </li>
            <li>
              <strong>دالة سهمية (Arrow Function):</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>لا تملك <code>this</code> خاصاً بها.</li>
                <li>ترث <code>this</code> من النطاق الخارجي (Lexical Scope) الذي عُرفت فيه.</li>
              </ul>
            </li>
            <li>
              <strong>استخدام <code>call</code>، <code>apply</code>، <code>bind</code>:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>تسمح بتحديد قيمة <code>this</code> يدوياً.</li>
              </ul>
            </li>
            <li>
              <strong>في الـ DOM Events:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>يشير إلى العنصر الذي أطلق الحدث.</li>
              </ul>
            </li>
          </ul>
        `,
      },
      {
        question: "ما هي الـ Promises وكيف تعمل؟",
        answer: `
          <p><strong>الـ Promise</strong> هو كائن يمثل <strong>نتيجة عملية غير متزامنة</strong> (مثل طلب API، قراءة ملف، أو عملية قاعدة بيانات). لها 3 حالات:</p>
          <ul class="list-disc pr-6 space-y-1 mt-2">
            <li><code>pending</code> (قيد الانتظار): الحالة الأولية، لم تنته العملية بعد.</li>
            <li><code>fulfilled</code> (تمت بنجاح): اكتملت العملية وأرجعت قيمة.</li>
            <li><code>rejected</code> (مرفوضة): فشلت العملية وأرجعت خطأ.</li>
          </ul>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <p class="text-sm font-medium mb-1">مثال:</p>
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
              <strong><code>async/await</code>:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>طريقة كتابة (Syntactic Sugar) فوق الـ Promises.</li>
                <li>تجعل الكود غير المتزامن يبدو وكأنه متزامن (Synchronous).</li>
                <li>تسهل القراءة والفهم، خاصة مع عدة عمليات متسلسلة.</li>
                <li>تستخدم <code>try/catch</code> لمعالجة الأخطاء.</li>
              </ul>
            </li>
            <li>
              <strong>الـ Promises العادية:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>تستخدم <code>.then()</code> و <code>.catch()</code> للتسلسل.</li>
                <li>قد تصبح معقدة مع كثرة العمليات (Callback Hell).</li>
              </ul>
            </li>
          </ul>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <p class="text-sm font-medium mb-1">مقارنة:</p>
            <pre class="text-sm overflow-x-auto"><code>// باستخدام Promises
fetchData()
  .then(data => process(data))
  .then(result => console.log(result))
  .catch(err => console.error(err))

// باستخدام async/await
async function getData() {
  try {
    const data = await fetchData()
    const result = await process(data)
    console.log(result)
  } catch (err) {
    console.error(err)
  }
}</code></pre>
          </div>
        `,
      },
      {
        question: "ما هو Event Loop في JavaScript؟",
        answer: `
          <p><strong>الـ Event Loop</strong> هو الآلية التي تسمح لجافا سكريبت (وهي لغة أحادية الخيط / Single-Threaded) بتنفيذ العمليات غير المتزامنة دون حجب الخيط الرئيسي (Main Thread).</p>
          <p class="mt-2">ترتيب التنفيذ في الـ Event Loop:</p>
          <ol class="list-decimal pr-6 space-y-2 mt-1">
            <li>
              <strong>Call Stack (مكدس الاستدعاءات):</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>يُنفذ كل الكود المتزامن (المزامن) أولاً.</li>
                <li>كل دالة تُستدعى تُضاف إلى المكدس، وعند انتهائها تُزال.</li>
              </ul>
            </li>
            <li>
              <strong>Microtasks (المهام الصغرى):</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>بعد كل عملية في الـ Call Stack، يُنفذ كل العمليات في قائمة Microtasks.</li>
                <li>مثل: <code>Promise.then</code>، <code>queueMicrotask</code>، <code>MutationObserver</code>.</li>
              </ul>
            </li>
            <li>
              <strong>Macrotasks (المهام الكبرى):</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>يُنفذ عملية واحدة من قائمة Macrotasks.</li>
                <li>مثل: <code>setTimeout</code>، <code>setInterval</code>، أحداث DOM، <code>requestAnimationFrame</code>.</li>
              </ul>
            </li>
          </ol>
          <div class="mt-3 p-3 bg-yellow-50 dark:bg-yellow-900/20 border-r-4 border-yellow-500 rounded">
            <p class="text-sm"><strong>🔑 معلومة مهمة:</strong> Microtasks لها أولوية أعلى من Macrotasks. <code>Promise.then</code> ستُنفذ قبل <code>setTimeout</code> حتى لو كان وقت الـ setTimeout صفر.</p>
          </div>
        `,
      },
      {
        question: "ما هي الدوال (Functions) في JavaScript وأنواعها؟",
        answer: `
          <p>الدوال هي كتل من الكود قابلة لإعادة الاستخدام. هناك عدة أنواع:</p>
          <ul class="list-disc pr-6 space-y-2 mt-2">
            <li>
              <strong>Function Declaration (تعريف الدالة):</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>تُرفع بالكامل (Hoisting).</li>
                <li>مثال: <code>function myFunc() { ... }</code></li>
              </ul>
            </li>
            <li>
              <strong>Function Expression (تعبير دالة):</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>لا تُرفع كدالة (فقط كمتغير).</li>
                <li>مثال: <code>const myFunc = function() { ... }</code></li>
              </ul>
            </li>
            <li>
              <strong>Arrow Function (دالة سهمية):</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>صيغة مختصرة: <code>const myFunc = () => { ... }</code></li>
                <li>لا تملك <code>this</code> خاصاً بها (ترث من النطاق الخارجي).</li>
                <li>لا يمكن استخدامها كـ Constructor (لا تعمل مع <code>new</code>).</li>
              </ul>
            </li>
            <li>
              <strong>Anonymous Function (دالة مجهولة):</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>دالة بدون اسم، تستخدم كـ callback.</li>
                <li>مثال: <code>setTimeout(function() { ... }, 1000)</code></li>
              </ul>
            </li>
            <li>
              <strong>IIFE (Immediately Invoked Function Expression):</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>تُنفذ فور تعريفها.</li>
                <li>مثال: <code>(function() { ... })()</code></li>
              </ul>
            </li>
          </ul>
        `,
      },
      {
        question: "ما هي الـ Higher-Order Functions؟",
        answer: `
          <p><strong>Higher-Order Function (دالة عالية الترتيب):</strong> هي دالة تستوفي شرطاً واحداً على الأقل:</p>
          <ul class="list-disc pr-6 space-y-2 mt-2">
            <li>تأخذ دالة أخرى كـ <strong>معامل (Parameter)</strong>.</li>
            <li>أو <strong>ترجع دالة أخرى</strong>.</li>
          </ul>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <p class="text-sm font-medium mb-1">أمثلة شائعة:</p>
            <pre class="text-sm overflow-x-auto"><code>// مثال 1: دالة تأخذ دالة كمعامل
function greet(name, callback) {
  const message = 'Hello ' + name
  callback(message)
}

greet('Ahmed', (msg) => console.log(msg))

// مثال 2: دالة ترجع دالة
function multiplier(factor) {
  return function(number) {
    return number * factor
  }
}

const double = multiplier(2)
console.log(double(5)) // 10</code></pre>
          </div>
          <p class="mt-2"><strong>الاستخدامات:</strong></p>
          <ul class="list-disc pr-6 space-y-1 mt-1">
            <li><code>map()</code>، <code>filter()</code>، <code>reduce()</code></li>
            <li><code>setTimeout()</code>، <code>addEventListener()</code></li>
            <li>React Hooks مثل <code>useState()</code></li>
          </ul>
        `,
      },
      {
        question: "ما هي الـ Pure Functions؟",
        answer: `
          <p><strong>Pure Function (دالة نقية):</strong> هي دالة تحقق شرطين:</p>
          <ul class="list-disc pr-6 space-y-2 mt-2">
            <li>
              <strong>نفس المُدخلات تعطي نفس المُخرجات دائماً:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>لا تعتمد على متغيرات خارجية (Global State).</li>
                <li>لا تستخدم قيم عشوائية أو وقت النظام.</li>
              </ul>
            </li>
            <li>
              <strong>لا تسبب آثاراً جانبية (Side Effects):</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>لا تُغير متغيرات خارجية.</li>
                <li>لا تُجري طلبات API أو تعديل DOM.</li>
                <li>لا تكتب في Console أو في ملفات.</li>
              </ul>
            </li>
          </ul>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <p class="text-sm font-medium mb-1">مثال:</p>
            <pre class="text-sm overflow-x-auto"><code>// ✅ دالة نقية (Pure Function)
function add(a, b) {
  return a + b
}

// ❌ دالة غير نقية (Impure Function)
let counter = 0
function increment() {
  counter++  // تغيير متغير خارجي (Side Effect)
  return counter
}</code></pre>
          </div>
        `,
      },
      {
        question: "ما هو الـ Callback Hell وكيف نتجنبه؟",
        answer: `
          <p><strong>Callback Hell (جحيم الـ Callbacks):</strong> هو تداخل عميق لـ callbacks داخل بعضها البعض، مما يجعل الكود صعب القراءة والصيانة.</p>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <p class="text-sm font-medium mb-1">مثال على Callback Hell:</p>
            <pre class="text-sm overflow-x-auto"><code>// ❌ Callback Hell
asyncOperation1((result1) => {
  asyncOperation2(result1, (result2) => {
    asyncOperation3(result2, (result3) => {
      asyncOperation4(result3, (result4) => {
        console.log(result4)
      })
    })
  })
})</code></pre>
          </div>
          <p class="mt-2"><strong>طرق تجنب Callback Hell:</strong></p>
          <ul class="list-disc pr-6 space-y-1 mt-1">
            <li>استخدام <strong>Promises</strong> مع <code>.then()</code>.</li>
            <li>استخدام <strong>async/await</strong> لجعل الكود يبدو متزامناً.</li>
            <li>تقسيم الكود إلى دوال صغيرة قابلة لإعادة الاستخدام.</li>
          </ul>
          <div class="mt-3 p-3 bg-green-50 dark:bg-green-900/20 border-r-4 border-green-500 rounded">
            <p class="text-sm font-medium">✅ الحل باستخدام async/await:</p>
            <pre class="text-sm overflow-x-auto"><code>async function processData() {
  const result1 = await asyncOperation1()
  const result2 = await asyncOperation2(result1)
  const result3 = await asyncOperation3(result2)
  const result4 = await asyncOperation4(result3)
  console.log(result4)
}</code></pre>
          </div>
        `,
      },
      {
        question: "ما هي المصفوفات (Arrays) في JavaScript؟",
        answer: `
          <p><strong>المصفوفة (Array):</strong> هي كائن يستخدم لتخزين مجموعة من العناصر (أي نوع من البيانات) في موقع واحد. العناصر مرقمة بدءاً من 0.</p>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <p class="text-sm font-medium mb-1">تعريف مصفوفة:</p>
            <pre class="text-sm overflow-x-auto"><code>const arr1 = [1, 2, 3, 4, 5]  // مصفوفة أرقام
const arr2 = ['Ahmed', 'Mohamed']  // مصفوفة نصوص
const arr3 = [1, 'hello', true, { name: 'Ali' }]  // أنواع مختلفة

// الوصول للعناصر
console.log(arr1[0]) // 1
console.log(arr1.length) // 5</code></pre>
          </div>
          <p class="mt-2"><strong>خصائص المصفوفات:</strong></p>
          <ul class="list-disc pr-6 space-y-1 mt-1">
            <li>يمكن أن تحتوي على <strong>أنواع مختلفة</strong> من البيانات.</li>
            <li>حجمها <strong>ديناميكي</strong> (يمكن الإضافة والحذف).</li>
            <li>لها دوال كثيرة للتعامل معها (map, filter, reduce).</li>
          </ul>
        `,
      },
      {
        question: "أشهر دوال المصفوفات في JavaScript؟",
        answer: `
          <p>أهم دوال المصفوفات (Array Methods) التي ستستخدمها يومياً:</p>
          <ul class="list-disc pr-6 space-y-2 mt-2">
            <li>
              <strong><code>map()</code>:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>تُنشئ مصفوفة جديدة بتطبيق دالة على كل عنصر.</li>
                <li>تُستخدم كثيراً في React/Vue لعرض القوائم.</li>
              </ul>
            </li>
            <li>
              <strong><code>filter()</code>:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>تُنشئ مصفوفة جديدة تحتوي فقط على العناصر التي تحقق شرطاً معيناً.</li>
              </ul>
            </li>
            <li>
              <strong><code>reduce()</code>:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>تجمع كل عناصر المصفوفة في قيمة واحدة (مثل حساب المجموع أو المتوسط).</li>
              </ul>
            </li>
            <li>
              <strong><code>forEach()</code>:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>تنفذ دالة على كل عنصر (لا ترجع مصفوفة جديدة).</li>
              </ul>
            </li>
            <li>
              <strong><code>find()</code>:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>ترجع أول عنصر يحقق الشرط.</li>
              </ul>
            </li>
            <li>
              <strong><code>findIndex()</code>:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>ترجع موقع (Index) أول عنصر يحقق الشرط.</li>
              </ul>
            </li>
            <li>
              <strong><code>some()</code>:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>ترجع <code>true</code> إذا كان هناك عنصر واحد على الأقل يحقق الشرط.</li>
              </ul>
            </li>
            <li>
              <strong><code>every()</code>:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>ترجع <code>true</code> إذا كانت جميع العناصر تحقق الشرط.</li>
              </ul>
            </li>
            <li>
              <strong><code>includes()</code>:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>تتحقق من وجود قيمة معينة في المصفوفة.</li>
              </ul>
            </li>
            <li>
              <strong><code>push()</code> / <code>pop()</code>:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>إضافة/حذف عنصر من نهاية المصفوفة.</li>
              </ul>
            </li>
            <li>
              <strong><code>shift()</code> / <code>unshift()</code>:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>إضافة/حذف عنصر من بداية المصفوفة.</li>
              </ul>
            </li>
            <li>
              <strong><code>sort()</code>:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>ترتيب عناصر المصفوفة.</li>
              </ul>
            </li>
            <li>
              <strong><code>concat()</code>:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>دمج مصفوفتين أو أكثر.</li>
              </ul>
            </li>
            <li>
              <strong><code>slice()</code>:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>استخراج جزء من المصفوفة دون تغيير الأصل.</li>
              </ul>
            </li>
            <li>
              <strong><code>splice()</code>:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>إضافة أو حذف عناصر من المصفوفة (تغير الأصل).</li>
              </ul>
            </li>
          </ul>
        `,
      },
      {
        question: "ما هو Spread Operator وكيف يُستخدم؟",
        answer: `
          <p><strong>Spread Operator (...)</strong> هو عامل (Operator) يُستخدم لفك (تفكيك) عناصر المصفوفة أو الكائن إلى عناصره الفردية.</p>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <p class="text-sm font-medium mb-1">أمثلة على الاستخدام:</p>
            <pre class="text-sm overflow-x-auto"><code>// 1. دمج مصفوفات
const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]
const combined = [...arr1, ...arr2] // [1, 2, 3, 4, 5, 6]

// 2. نسخ مصفوفة
const copy = [...arr1] // [1, 2, 3]

// 3. تمرير عناصر المصفوفة كمعاملات لدالة
const numbers = [1, 2, 3, 4, 5]
console.log(Math.max(...numbers)) // 5

// 4. دمج كائنات
const obj1 = { a: 1, b: 2 }
const obj2 = { c: 3, d: 4 }
const merged = { ...obj1, ...obj2 } // { a: 1, b: 2, c: 3, d: 4 }

// 5. نسخ كائن
const person = { name: 'Ahmed', age: 30 }
const personCopy = { ...person }</code></pre>
          </div>
        `,
      },
      {
        question: "ما هو Rest Operator وكيف يُستخدم؟",
        answer: `
          <p><strong>Rest Operator (...)</strong> يُستخدم لجمع العناصر المتبقية في مصفوفة أو كائن. يشبه Spread Operator لكنه يعمل في الاتجاه المعاكس.</p>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <p class="text-sm font-medium mb-1">أمثلة على الاستخدام:</p>
            <pre class="text-sm overflow-x-auto"><code>// 1. جمع المعاملات المتبقية في دالة
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0)
}
console.log(sum(1, 2, 3, 4)) // 10

// 2. تدمير (Destructuring) المصفوفات
const [first, second, ...rest] = [1, 2, 3, 4, 5]
console.log(first) // 1
console.log(second) // 2
console.log(rest) // [3, 4, 5]

// 3. تدمير الكائنات
const { name, ...otherProps } = { name: 'Ahmed', age: 30, city: 'Cairo' }
console.log(name) // 'Ahmed'
console.log(otherProps) // { age: 30, city: 'Cairo' }</code></pre>
          </div>
          <p class="mt-2"><strong>الفرق بين Spread و Rest:</strong></p>
          <ul class="list-disc pr-6 space-y-1 mt-1">
            <li><strong>Spread</strong> يفكك (يوسع) العناصر.</li>
            <li><strong>Rest</strong> يجمع (يضم) العناصر في مصفوفة/كائن.</li>
          </ul>
        `,
      },
      {
        question: "ما هو Destructuring في JavaScript؟",
        answer: `
          <p><strong>Destructuring (التدمير):</strong> هي صيغة تسمح باستخراج قيم من مصفوفات أو كائنات وتعيينها لمتغيرات بطريقة سهلة ومرنة.</p>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <p class="text-sm font-medium mb-1">أمثلة:</p>
            <pre class="text-sm overflow-x-auto"><code>// 1. تدمير مصفوفة (Array Destructuring)
const colors = ['red', 'green', 'blue']
const [firstColor, secondColor] = colors
console.log(firstColor) // 'red'
console.log(secondColor) // 'green'

// 2. تدمير كائن (Object Destructuring)
const person = { name: 'Ahmed', age: 30, city: 'Cairo' }
const { name, age } = person
console.log(name) // 'Ahmed'
console.log(age) // 30

// 3. إعادة تسمية المتغيرات
const { name: userName, age: userAge } = person
console.log(userName) // 'Ahmed'

// 4. قيم افتراضية
const { country = 'Egypt' } = person
console.log(country) // 'Egypt'

// 5. تدمير متداخل (Nested Destructuring)
const user = {
  id: 1,
  address: {
    city: 'Cairo',
    street: 'Main St'
  }
}
const { address: { city, street } } = user
console.log(city) // 'Cairo'</code></pre>
          </div>
        `,
      },
      {
        question: "ما هي الـ Template Literals في JavaScript؟",
        answer: `
          <p><strong>Template Literals (نصوص القوالب):</strong> هي صيغة جديدة في ES6 تسمح بكتابة نصوص متعددة الأسطر وإدراج متغيرات بداخلها بسهولة باستخدام <code>\${}</code>.</p>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <p class="text-sm font-medium mb-1">أمثلة:</p>
            <pre class="text-sm overflow-x-auto"><code>// 1. إدراج متغيرات
const name = 'Ahmed'
const age = 30
const message = \`اسمي \${name} وعمري \${age} سنة\`
console.log(message) 

// 2. نصوص متعددة الأسطر (بدون استخدام \n)
const multiLine = \`
  هذا
  نص
  متعدد
  الأسطر
\`
console.log(multiLine)

// 3. تنفيذ تعبيرات داخلية
const a = 5
const b = 10
console.log(\`مجموع \${a} + \${b} = \${a + b}\`) // 'مجموع 5 + 10 = 15'

// 4. استخدام دوال داخل \${}
console.log(\`الاسم الكبير: \${name.toUpperCase()}\`) // 'الاسم الكبير: AHMED'</code></pre>
          </div>
        `,
      },
      // ============================
      // المستوى الثاني: متوسط (30 سؤال)
      // ============================
      {
        question: "ما هو الفرق بين map() و forEach()؟",
        answer: `
          <ul class="list-disc pr-6 space-y-3">
            <li>
              <strong><code>map()</code>:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>تُنشئ <strong>مصفوفة جديدة</strong> بنفس طول المصفوفة الأصلية.</li>
                <li>تطبق دالة على كل عنصر وترجع النتيجة في مصفوفة جديدة.</li>
                <li>تُستخدم عندما تريد تحويل البيانات.</li>
              </ul>
            </li>
            <li>
              <strong><code>forEach()</code>:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li><strong>لا ترجع</strong> مصفوفة جديدة (ترجع <code>undefined</code>).</li>
                <li>تنفذ دالة على كل عنصر فقط.</li>
                <li>تُستخدم عندما تريد تنفيذ عملية (مثل طباعة) على كل عنصر.</li>
              </ul>
            </li>
          </ul>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>const numbers = [1, 2, 3, 4, 5]

// map() - ترجع مصفوفة جديدة
const doubled = numbers.map(num => num * 2)
console.log(doubled) // [2, 4, 6, 8, 10]

// forEach() - لا ترجع شيئاً
numbers.forEach(num => console.log(num * 2))
// 2, 4, 6, 8, 10 (تُطبع فقط)</code></pre>
          </div>
        `,
      },
      {
        question: "ما هو الفرق بين slice() و splice()؟",
        answer: `
          <ul class="list-disc pr-6 space-y-3">
            <li>
              <strong><code>slice(start, end)</code>:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>ترجع <strong>جزءاً</strong> من المصفوفة (من start إلى end-1).</li>
                <li><strong>لا تغير</strong> المصفوفة الأصلية.</li>
                <li>المعاملات: start (مطلوب)، end (اختياري).</li>
              </ul>
            </li>
            <li>
              <strong><code>splice(start, deleteCount, ...items)</code>:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>تغير المصفوفة الأصلية (تضيف أو تحذف عناصر).</li>
                <li>ترجع المصفوفة المحذوفة (إن وجدت).</li>
                <li>المعاملات: start (مطلوب)، deleteCount (مطلوب)، items (اختياري للإضافة).</li>
              </ul>
            </li>
          </ul>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>const arr = [1, 2, 3, 4, 5]

// slice() - لا تغير الأصل
const sliced = arr.slice(1, 4)
console.log(sliced) // [2, 3, 4]
console.log(arr) // [1, 2, 3, 4, 5] (لم تتغير)

// splice() - تغير الأصل
const spliced = arr.splice(1, 2, 10, 20)
console.log(spliced) // [2, 3] (العناصر المحذوفة)
console.log(arr) // [1, 10, 20, 4, 5] (تغيرت)</code></pre>
          </div>
        `,
      },
      {
        question: "ما هو الفرق بين for...in و for...of؟",
        answer: `
          <ul class="list-disc pr-6 space-y-3">
            <li>
              <strong><code>for...in</code>:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>تتكرر على <strong>المفاتيح (Keys)</strong> (خصائص الكائن).</li>
                <li>تتكرر على جميع الخصائص القابلة للعد (enumerable).</li>
                <li><strong>لا تستخدمها</strong> مع المصفوفات (قد تتكرر على خصائص غير مرغوب فيها).</li>
              </ul>
            </li>
            <li>
              <strong><code>for...of</code>:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>تتكرر على <strong>القيم (Values)</strong>.</li>
                <li>تعمل مع الكائنات القابلة للتكرار (Iterable) مثل المصفوفات، النصوص، Sets، Maps.</li>
                <li><strong>المفضلة</strong> للتكرار على المصفوفات.</li>
              </ul>
            </li>
          </ul>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>const arr = ['a', 'b', 'c']

// for...in - تتكرر على المفاتيح (indexes)
for (let index in arr) {
  console.log(index) // '0', '1', '2'
}

// for...of - تتكرر على القيم
for (let value of arr) {
  console.log(value) // 'a', 'b', 'c'
}

// مع الكائنات - for...in مفيدة
const person = { name: 'Ahmed', age: 30 }
for (let key in person) {
  console.log(key, person[key]) // name Ahmed, age 30
}</code></pre>
          </div>
        `,
      },
      {
        question: "ما هو Set في JavaScript؟",
        answer: `
          <p><strong>Set</strong> هو كائن يخزن <strong>قيماً فريدة</strong> (لا يسمح بالتكرار). يمكن أن يحتوي على أي نوع من البيانات.</p>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>// إنشاء Set
const mySet = new Set([1, 2, 3, 3, 4, 5, 5])
console.log(mySet) // Set(5) {1, 2, 3, 4, 5}

// إضافة عنصر
mySet.add(6)
mySet.add(3) // لن يُضاف (مكرر)

// التحقق من وجود عنصر
console.log(mySet.has(3)) // true

// حذف عنصر
mySet.delete(4)

// التكرار على Set
for (let value of mySet) {
  console.log(value) // 1, 2, 3, 5, 6
}

// تحويل Set إلى مصفوفة
const arr = [...mySet]
// أو
const arr2 = Array.from(mySet)</code></pre>
          </div>
          <p class="mt-2"><strong>الاستخدامات الشائعة:</strong></p>
          <ul class="list-disc pr-6 space-y-1 mt-1">
            <li>حذف التكرارات من مصفوفة: <code>[...new Set(array)]</code></li>
            <li>تتبع العناصر الفريدة.</li>
            <li>تحسين الأداء في عمليات البحث.</li>
          </ul>
        `,
      },
      {
        question: "ما هو Map في JavaScript؟",
        answer: `
          <p><strong>Map</strong> هو كائن يخزن <strong>أزواج من المفتاح والقيمة</strong>. يشبه الكائن العادي لكن:</p>
          <ul class="list-disc pr-6 space-y-2 mt-2">
            <li>المفاتيح يمكن أن تكون <strong>أي نوع</strong> (ليس فقط نصوص).</li>
            <li>يحتفظ بـ <strong>ترتيب الإدراج</strong>.</li>
            <li>له دوال مفيدة مثل <code>size</code>، <code>has()</code>، <code>delete()</code>.</li>
          </ul>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>// إنشاء Map
const myMap = new Map()

// إضافة عناصر
myMap.set('name', 'Ahmed')
myMap.set(1, 'رقم واحد')
myMap.set({ id: 1 }, 'كائن كمفتاح')

// الوصول للقيم
console.log(myMap.get('name')) // 'Ahmed'
console.log(myMap.get(1)) // 'رقم واحد'

// التحقق من وجود مفتاح
console.log(myMap.has('name')) // true

// التكرار على Map
for (let [key, value] of myMap) {
  console.log(key, value)
}

// تحويل Map إلى مصفوفة
const arr = [...myMap]</code></pre>
          </div>
          <p class="mt-2"><strong>الفرق بين Map و Object:</strong></p>
          <ul class="list-disc pr-6 space-y-1 mt-1">
            <li><strong>Map:</strong> أي مفتاح، يحتفظ بالترتيب، دوال مفيدة.</li>
            <li><strong>Object:</strong> مفاتيح نصوص فقط، لا يحتفظ بالترتيب، تُستخدم كـ كائنات عادية.</li>
          </ul>
        `,
      },
      {
        question: "ما هو WeakMap و WeakSet؟",
        answer: `
          <p><strong>WeakMap</strong> و <strong>WeakSet</strong> هما إصدارات ضعيفة من Map و Set، مع اختلافات مهمة:</p>
          <ul class="list-disc pr-6 space-y-2 mt-2">
            <li>
              <strong>المفاتيح:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>في <strong>WeakMap</strong>: المفاتيح <strong>يجب أن تكون كائنات</strong> (ليس قيماً أساسية).</li>
                <li>في <strong>WeakSet</strong>: العناصر <strong>يجب أن تكون كائنات</strong>.</li>
              </ul>
            </li>
            <li>
              <strong>المراجع الضعيفة (Weak References):</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>إذا لم يكن هناك مرجع آخر للكائن، يمكن لـ Garbage Collector حذفه.</li>
                <li>لا تمنع Garbage Collector من تنظيف الذاكرة.</li>
              </ul>
            </li>
            <li>
              <strong>غير قابلة للتكرار:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>لا تحتوي على دوال تكرار (مثل <code>forEach</code>، <code>keys()</code>، <code>values()</code>).</li>
                <li>لا يمكن معرفة حجمها (<code>size</code> غير موجود).</li>
              </ul>
            </li>
          </ul>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>const weakMap = new WeakMap()
let obj = { name: 'Ahmed' }

weakMap.set(obj, 'بيانات سرية')
console.log(weakMap.get(obj)) // 'بيانات سرية'

// عندما يتم حذف الكائن، سيحذفه Garbage Collector تلقائياً
obj = null
// now weakMap is empty</code></pre>
          </div>
          <p class="mt-2"><strong>الاستخدامات:</strong></p>
          <ul class="list-disc pr-6 space-y-1 mt-1">
            <li>تخزين بيانات خاصة مرتبطة بكائنات بدون منع Garbage Collector.</li>
            <li>في المكتبات والأطر لتخزين بيانات مؤقتة.</li>
            <li>تجنب تسرب الذاكرة (Memory Leaks).</li>
          </ul>
        `,
      },
      {
        question: "ما هو Promise.all وكيف يُستخدم؟",
        answer: `
          <p><strong><code>Promise.all()</code></strong> يأخذ مصفوفة من Promises وينتظر حتى <strong>تنتهي جميعها</strong> (تنجح أو تفشل).</p>
          <ul class="list-disc pr-6 space-y-2 mt-2">
            <li>
              <strong>إذا نجحت جميعها:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>ترجع مصفوفة بنتائج جميع الـ Promises بنفس الترتيب.</li>
              </ul>
            </li>
            <li>
              <strong>إذا فشلت واحدة:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>ترفض (reject) فوراً بأول خطأ يحدث.</li>
                <li>لا تنتظر انتهاء الـ Promises الأخرى.</li>
              </ul>
            </li>
          </ul>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>const promise1 = Promise.resolve(3)
const promise2 = 42
const promise3 = new Promise((resolve) => {
  setTimeout(resolve, 100, 'foo')
})

Promise.all([promise1, promise2, promise3])
  .then((values) => {
    console.log(values) // [3, 42, 'foo']
  })
  .catch((error) => {
    console.error('خطأ:', error)
  })</code></pre>
          </div>
          <p class="mt-2"><strong>الاستخدامات الشائعة:</strong></p>
          <ul class="list-disc pr-6 space-y-1 mt-1">
            <li>طلب بيانات من عدة APIs في نفس الوقت.</li>
            <li>تحميل موارد متعددة (صور، ملفات).</li>
            <li>تنفيذ عمليات متوازية.</li>
          </ul>
        `,
      },
      {
        question: "ما هو Promise.allSettled؟",
        answer: `
          <p><strong><code>Promise.allSettled()</code></strong> يأخذ مصفوفة من Promises وينتظر حتى <strong>تنتهي جميعها</strong> (سواء نجحت أو فشلت).</p>
          <ul class="list-disc pr-6 space-y-2 mt-2">
            <li>
              <strong>ترجع دائماً:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>مصفوفة من الكائنات، كل كائن يحتوي على حالة (<code>status</code>) وقيمة أو خطأ.</li>
                <li><strong>لا ترفض (reject)</strong> أبداً.</li>
              </ul>
            </li>
            <li>
              <strong>النتيجة:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>كل كائن: <code>{ status: 'fulfilled', value: result }</code> أو <code>{ status: 'rejected', reason: error }</code></li>
              </ul>
            </li>
          </ul>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>const promise1 = Promise.resolve(3)
const promise2 = new Promise((resolve, reject) => {
  setTimeout(reject, 100, 'خطأ')
})
const promise3 = Promise.resolve('foo')

Promise.allSettled([promise1, promise2, promise3])
  .then((results) => {
    results.forEach((result) => console.log(result))
    // { status: 'fulfilled', value: 3 }
    // { status: 'rejected', reason: 'خطأ' }
    // { status: 'fulfilled', value: 'foo' }
  })</code></pre>
          </div>
          <p class="mt-2"><strong>الفرق بين all و allSettled:</strong></p>
          <ul class="list-disc pr-6 space-y-1 mt-1">
            <li><strong>all:</strong> ترفض عند أول خطأ، ترجع نتائج كلها نجحت.</li>
            <li><strong>allSettled:</strong> تنتظر الكل وترجع كل النتائج.</li>
          </ul>
        `,
      },
      {
        question: "ما هو Promise.race؟",
        answer: `
          <p><strong><code>Promise.race()</code></strong> يأخذ مصفوفة من Promises وترجع <strong>أول Promise تنتهي</strong> (أياً كانت نتيجتها: نجاح أو فشل).</p>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>const promise1 = new Promise((resolve) => {
  setTimeout(resolve, 500, 'أولاً')
})
const promise2 = new Promise((resolve) => {
  setTimeout(resolve, 100, 'ثانياً')
})

Promise.race([promise1, promise2])
  .then((value) => {
    console.log(value) // 'ثانياً' (لأنها انتهت أولاً)
  })

// إذا فشلت أول Promise سترفض فوراً
const promise3 = new Promise((resolve, reject) => {
  setTimeout(reject, 100, 'خطأ')
})
const promise4 = new Promise((resolve) => {
  setTimeout(resolve, 500, 'نجاح')
})

Promise.race([promise3, promise4])
  .catch((error) => {
    console.error(error) // 'خطأ'
  })</code></pre>
          </div>
          <p class="mt-2"><strong>الاستخدامات:</strong></p>
          <ul class="list-disc pr-6 space-y-1 mt-1">
            <li>تحديد مهلة (Timeout) لطلب ما: <code>Promise.race([fetch(url), timeout(5000)])</code></li>
            <li>الحصول على أسرع استجابة من عدة مصادر.</li>
          </ul>
        `,
      },
      {
        question: "ما هو Promise.any؟",
        answer: `
          <p><strong><code>Promise.any()</code></strong> يأخذ مصفوفة من Promises وترجع <strong>أول Promise تنجح</strong> (تتجاهل الأخطاء).</p>
          <ul class="list-disc pr-6 space-y-2 mt-2">
            <li>
              <strong>إذا نجحت واحدة:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>ترجع قيمة أول Promise تنجح (أولاً).</li>
              </ul>
            </li>
            <li>
              <strong>إذا فشلت كلها:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>ترفض (reject) بـ <code>AggregateError</code> يحتوي على جميع الأخطاء.</li>
              </ul>
            </li>
          </ul>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>const promise1 = new Promise((resolve, reject) => {
  setTimeout(reject, 100, 'خطأ 1')
})
const promise2 = new Promise((resolve) => {
  setTimeout(resolve, 200, 'نجاح')
})
const promise3 = new Promise((resolve) => {
  setTimeout(resolve, 300, 'نجاح آخر')
})

Promise.any([promise1, promise2, promise3])
  .then((value) => {
    console.log(value) // 'نجاح' (أول واحدة نجحت)
  })
  .catch((error) => {
    console.error(error) // AggregateError إذا فشل الكل
  })</code></pre>
          </div>
          <p class="mt-2"><strong>الفرق بين race و any:</strong></p>
          <ul class="list-disc pr-6 space-y-1 mt-1">
            <li><strong>race:</strong> أول Promise تنتهي (نجاح أو فشل).</li>
            <li><strong>any:</strong> أول Promise تنجح (تتجاهل الفاشلة).</li>
          </ul>
        `,
      },
      {
        question: "ما هو الفرق بين deep copy و shallow copy؟",
        answer: `
          <ul class="list-disc pr-6 space-y-3">
            <li>
              <strong>Shallow Copy (نسخة سطحية):</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>تنسخ <strong>المستوى الأول</strong> فقط من الكائن أو المصفوفة.</li>
                <li>إذا كان هناك كائنات متداخلة (Nested Objects)، تُنسخ <strong>المراجع</strong> وليس القيم.</li>
                <li>طرق التنفيذ: <code>Object.assign()</code>، <code>Spread Operator (...)</code>، <code>slice()</code></li>
              </ul>
            </li>
            <li>
              <strong>Deep Copy (نسخة عميقة):</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>تنسخ <strong>جميع المستويات</strong> وتُنشئ نسخاً جديدة من الكائنات المتداخلة.</li>
                <li>لا تشارك المراجع مع الكائن الأصلي.</li>
                <li>طرق التنفيذ: <code>structuredClone()</code>، <code>JSON.parse(JSON.stringify())</code>، مكتبات مثل Lodash.</li>
              </ul>
            </li>
          </ul>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>const original = {
  name: 'Ahmed',
  address: { city: 'Cairo', street: 'Main St' }
}

// Shallow Copy
const shallow = { ...original }
shallow.address.city = 'Alex'
console.log(original.address.city) // 'Alex' (تغيرت!)

// Deep Copy
const deep = structuredClone(original)
deep.address.city = 'Tanta'
console.log(original.address.city) // 'Alex' (لم تتغير)
console.log(deep.address.city) // 'Tanta'</code></pre>
          </div>
        `,
      },
      {
        question: "ما هي الطرق المختلفة لعمل Deep Copy في JavaScript؟",
        answer: `
          <ul class="list-disc pr-6 space-y-3">
            <li>
              <strong><code>structuredClone()</code> (الأفضل والأحدث):</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>طريقة مدمجة في المتصفحات الحديثة و Node.js.</li>
                <li>تنسخ جميع الأنواع (كائنات، مصفوفات، تواريخ، RegExp).</li>
                <li>لا تدعم الدوال (Functions).</li>
              </ul>
            </li>
            <li>
              <strong><code>JSON.parse(JSON.stringify())</code>:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>طريقة شائعة لكن لها قيود.</li>
                <li>لا تنسخ الدوال، undefined، Symbol، تواريخ (تحولها لنصوص).</li>
                <li>لا تتعامل مع الحلقات (Circular References).</li>
              </ul>
            </li>
            <li>
              <strong><code>Lodash (cloneDeep)</code>:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>مكتبة خارجية قوية.</li>
                <li>تتعامل مع جميع الحالات بما فيها الدوال والحلقات.</li>
              </ul>
            </li>
            <li>
              <strong>طريقة يدوية (Recursion):</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>كتابة دالة خاصة للتكرار على جميع المستويات.</li>
                <li>مرنة لكن تحتاج لكتابة كود إضافي.</li>
              </ul>
            </li>
          </ul>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>const obj = { a: 1, b: { c: 2 } }

// 1. structuredClone (الأفضل)
const clone1 = structuredClone(obj)

// 2. JSON (قيود)
const clone2 = JSON.parse(JSON.stringify(obj))

// 3. Lodash (خارجي)
const clone3 = _.cloneDeep(obj)</code></pre>
          </div>
        `,
      },
      {
        question: "ما هو الفرق بين Object.freeze() و Object.seal()؟",
        answer: `
          <ul class="list-disc pr-6 space-y-3">
            <li>
              <strong><code>Object.freeze()</code>:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>يمنع <strong>أي تغيير</strong> في الكائن.</li>
                <li>لا يمكن إضافة، حذف، أو تعديل خصائص.</li>
                <li>كل الخصائص تصبح <strong>للقراءة فقط</strong>.</li>
              </ul>
            </li>
            <li>
              <strong><code>Object.seal()</code>:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>يمنع <strong>إضافة وحذف</strong> الخصائص.</li>
                <li>يمكن <strong>تعديل</strong> الخصائص الموجودة.</li>
              </ul>
            </li>
          </ul>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>const obj1 = { name: 'Ahmed', age: 30 }
Object.freeze(obj1)
obj1.name = 'Mohamed' // ❌ لا يعمل (خطأ في strict mode)
obj1.city = 'Cairo' // ❌ لا يعمل
delete obj1.age // ❌ لا يعمل

const obj2 = { name: 'Ahmed', age: 30 }
Object.seal(obj2)
obj2.name = 'Mohamed' // ✅ يعمل
obj2.city = 'Cairo' // ❌ لا يعمل
delete obj2.age // ❌ لا يعمل</code></pre>
          </div>
          <p class="mt-2"><strong>ملاحظة:</strong></p>
          <ul class="list-disc pr-6 space-y-1 mt-1">
            <li><code>Object.isFrozen()</code> تتحقق من الكائن مجمد.</li>
            <li><code>Object.isSealed()</code> تتحقق من الكائن مختوم.</li>
          </ul>
        `,
      },
      {
        question:
          "ما هو الفرق بين Object.keys() و Object.values() و Object.entries()؟",
        answer: `
          <ul class="list-disc pr-6 space-y-3">
            <li>
              <strong><code>Object.keys(obj)</code>:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>ترجع مصفوفة من <strong>المفاتيح</strong> (Keys) الخاصة بالكائن.</li>
              </ul>
            </li>
            <li>
              <strong><code>Object.values(obj)</code>:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>ترجع مصفوفة من <strong>القيم</strong> (Values) الخاصة بالكائن.</li>
              </ul>
            </li>
            <li>
              <strong><code>Object.entries(obj)</code>:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>ترجع مصفوفة من <strong>أزواج [مفتاح، قيمة]</strong>.</li>
              </ul>
            </li>
          </ul>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>const person = { name: 'Ahmed', age: 30, city: 'Cairo' }

console.log(Object.keys(person)) // ['name', 'age', 'city']
console.log(Object.values(person)) // ['Ahmed', 30, 'Cairo']
console.log(Object.entries(person)) // [['name', 'Ahmed'], ['age', 30], ['city', 'Cairo']]

// التكرار على الكائن
for (const [key, value] of Object.entries(person)) {
  console.log(\`<strong>\${key}:</strong> \${value}\`)
}</code></pre>
          </div>
        `,
      },
      {
        question: "ما هي الـ Generator Functions؟",
        answer: `
          <p><strong>Generator Function (دالة مولد):</strong> هي دالة يمكنها <strong>إيقاف التنفيذ مؤقتاً</strong> واستئنافه لاحقاً.</p>
          <ul class="list-disc pr-6 space-y-2 mt-2">
            <li>
              <strong>الخصائص:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>تُكتب بـ <code>function*</code> (علامة نجمية).</li>
                <li>تستخدم <code>yield</code> لإرجاع قيمة وإيقاف التنفيذ.</li>
                <li>ترجع كائن <strong>Iterator</strong>.</li>
              </ul>
            </li>
            <li>
              <strong>الاستخدامات:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>إنشاء تسلسلات لا نهائية (مثل أرقام فيبوناتشي).</li>
                <li>معالجة تدفقات البيانات (Streams).</li>
                <li>تبسيط العمليات غير المتزامنة (مع async).</li>
              </ul>
            </li>
          </ul>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>function* numberGenerator() {
  yield 1
  yield 2
  yield 3
  yield 4
}

const gen = numberGenerator()
console.log(gen.next().value) // 1
console.log(gen.next().value) // 2
console.log(gen.next().value) // 3
console.log(gen.next().value) // 4
console.log(gen.next().value) // undefined

// مثال: توليد أرقام لا نهائية
function* infiniteNumbers() {
  let i = 0
  while (true) {
    yield i++
  }
}
const infinite = infiniteNumbers()
console.log(infinite.next().value) // 0
console.log(infinite.next().value) // 1
console.log(infinite.next().value) // 2</code></pre>
          </div>
        `,
      },
      {
        question: "ما هو الـ Iterator Pattern في JavaScript؟",
        answer: `
          <p><strong>Iterator (المكرر):</strong> هو كائن يسمح بالتكرار على مجموعة من البيانات عن طريق استدعاء <code>next()</code>.</p>
          <ul class="list-disc pr-6 space-y-2 mt-2">
            <li>
              <strong>الكائنات القابلة للتكرار (Iterable):</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>تحتوي على خاصية <code>[Symbol.iterator]</code>.</li>
                <li>مثل: المصفوفات، النصوص، Sets، Maps.</li>
              </ul>
            </li>
            <li>
              <strong>طريقة عمل Iterator:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>كائن له دالة <code>next()</code> ترجع <code>{ value, done }</code>.</li>
                <li><code>value</code>: القيمة الحالية.</li>
                <li><code>done</code>: <code>true</code> إذا انتهى التكرار.</li>
              </ul>
            </li>
          </ul>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>// إنشاء Iterator مخصص
const myIterable = {
  [Symbol.iterator]: function() {
    let step = 0
    return {
      next: function() {
        step++
        if (step <= 3) {
          return { value: step, done: false }
        }
        return { value: undefined, done: true }
      }
    }
  }
}

for (let value of myIterable) {
  console.log(value) // 1, 2, 3
}

// استخدام Iterator مباشرة
const arr = ['a', 'b', 'c']
const iterator = arr[Symbol.iterator]()
console.log(iterator.next()) // { value: 'a', done: false }
console.log(iterator.next()) // { value: 'b', done: false }
console.log(iterator.next()) // { value: 'c', done: false }
console.log(iterator.next()) // { value: undefined, done: true }</code></pre>
          </div>
        `,
      },
      {
        question: "ما هو الفرق بين undefined و undeclared؟",
        answer: `
          <ul class="list-disc pr-6 space-y-3">
            <li>
              <strong><code>undefined</code>:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>المتغير <strong>مُعلن</strong> (Declared) لكن لم يُعطى قيمة.</li>
                <li>لغة JavaScript تعطي قيمة <code>undefined</code> تلقائياً.</li>
                <li>مثال: <code>let x; console.log(x) // undefined</code></li>
              </ul>
            </li>
            <li>
              <strong><code>undeclared</code>:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>المتغير <strong>غير مُعلن</strong> (Not Declared).</li>
                <li>محاولة الوصول إليه تسبب خطأ <code>ReferenceError</code>.</li>
                <li>مثال: <code>console.log(y) // ReferenceError: y is not defined</code></li>
              </ul>
            </li>
          </ul>
          <div class="mt-3 p-3 bg-yellow-50 dark:bg-yellow-900/20 border-r-4 border-yellow-500 rounded">
            <p class="text-sm"><strong>⚠️ ملاحظة:</strong> في strict mode، أي متغير غير مُعلن يسبب خطأ. في الوضع العادي، المتغير غير المُعلن يصبح Global تلقائياً (وهذا خطأ شائع).</p>
          </div>
        `,
      },
      {
        question: "ما هو الفرق بين call() و apply() و bind()؟",
        answer: `
          <ul class="list-disc pr-6 space-y-3">
            <li>
              <strong><code>call(thisArg, arg1, arg2, ...)</code>:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>يستدعي الدالة مع <code>this</code> محدد.</li>
                <li>المعاملات تُمرر <strong>كمفردة</strong> (مفصولة بفواصل).</li>
                <li>يُنفذ <strong>فوراً</strong>.</li>
              </ul>
            </li>
            <li>
              <strong><code>apply(thisArg, [argsArray])</code>:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>يستدعي الدالة مع <code>this</code> محدد.</li>
                <li>المعاملات تُمرر <strong>كمصفوفة</strong>.</li>
                <li>يُنفذ <strong>فوراً</strong>.</li>
              </ul>
            </li>
            <li>
              <strong><code>bind(thisArg, arg1, arg2, ...)</code>:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>يُعيد <strong>دالة جديدة</strong> مع <code>this</code> محدد.</li>
                <li>لا يُنفذ الدالة فوراً.</li>
                <li>يُستخدم لتثبيت <code>this</code> للاستدعاء لاحقاً.</li>
              </ul>
            </li>
          </ul>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>function greet(greeting, punctuation) {
  console.log(greeting + ' ' + this.name + punctuation)
}

const person = { name: 'Ahmed' }

// call() - معاملات مفردة
greet.call(person, 'Hello', '!') // 'Hello Ahmed!'

// apply() - معاملات كمصفوفة
greet.apply(person, ['Hi', '?']) // 'Hi Ahmed?'

// bind() - دالة جديدة
const boundGreet = greet.bind(person, 'Hey')
boundGreet('!!') // 'Hey Ahmed!!'</code></pre>
          </div>
          <p class="mt-2"><strong>متى تستخدم كل واحدة:</strong></p>
          <ul class="list-disc pr-6 space-y-1 mt-1">
            <li><strong>call:</strong> عندما تعرف عدد المعاملات.</li>
            <li><strong>apply:</strong> عندما تكون المعاملات في مصفوفة.</li>
            <li><strong>bind:</strong> عندما تريد تخزين الدالة لاستخدامها لاحقاً (مثل Event Listeners).</li>
          </ul>
        `,
      },
      {
        question: "ما هو الفرق بين Function Declaration و Function Expression؟",
        answer: `
          <ul class="list-disc pr-6 space-y-3">
            <li>
              <strong>Function Declaration (تعريف الدالة):</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>تبدأ بكلمة <code>function</code> متبوعة باسم الدالة.</li>
                <li><strong>تُرفع بالكامل</strong> (يمكن استدعاؤها قبل تعريفها).</li>
                <li>مثال: <code>function myFunc() { ... }</code></li>
              </ul>
            </li>
            <li>
              <strong>Function Expression (تعبير دالة):</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>تُعرف كجزء من تعبير (مثل تعيين لمتغير).</li>
                <li><strong>لا تُرفع</strong> (لا يمكن استدعاؤها قبل التعريف).</li>
                <li>مثال: <code>const myFunc = function() { ... }</code></li>
              </ul>
            </li>
          </ul>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>// ✅ Function Declaration - يمكن استدعاؤها قبل التعريف
console.log(add(2, 3)) // 5
function add(a, b) {
  return a + b
}

// ❌ Function Expression - لا يمكن استدعاؤها قبل التعريف
console.log(multiply(2, 3)) // ReferenceError
const multiply = function(a, b) {
  return a * b
}</code></pre>
          </div>
          <p class="mt-2"><strong>التوصية:</strong> استخدم Function Declaration للدوال الرئيسية، و Function Expression للدوال الداخلية أو كـ callbacks.</p>
        `,
      },
      {
        question: "ما هو الفرق بين Arrow Function و Regular Function؟",
        answer: `
          <ul class="list-disc pr-6 space-y-3">
            <li>
              <strong>Arrow Function (دالة سهمية):</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li><strong>لا تملك <code>this</code> خاصاً</strong>، ترثه من النطاق الخارجي.</li>
                <li><strong>لا يمكن استخدامها كـ Constructor</strong> (لا تعمل مع <code>new</code>).</li>
                <li><strong>ليس لديها <code>arguments</code> object</strong> (استخدم Rest Operator).</li>
                <li><strong>لا يمكن استخدام <code>yield</code></strong> (لا تعمل كـ Generator).</li>
                <li>صيغة مختصرة: <code>() => { ... }</code></li>
              </ul>
            </li>
            <li>
              <strong>Regular Function (دالة عادية):</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>تملك <code>this</code> خاصاً بها (يتغير حسب السياق).</li>
                <li>يمكن استخدامها كـ Constructor مع <code>new</code>.</li>
                <li>تملك <code>arguments</code> object.</li>
                <li>يمكن استخدام <code>yield</code> (كـ Generator).</li>
              </ul>
            </li>
          </ul>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>// Arrow Function - ترث this من الخارج
const obj = {
  name: 'Ahmed',
  regularFunc: function() {
    console.log(this.name) // 'Ahmed'
  },
  arrowFunc: () => {
    console.log(this.name) // undefined (ترث من النطاق الخارجي)
  }
}

// Regular Function - يمكن استخدامها كـ Constructor
function Person(name) {
  this.name = name
}
const p = new Person('Ahmed')

// Arrow Function - لا يمكن استخدامها كـ Constructor
const PersonArrow = (name) => {
  this.name = name
}
// const p2 = new PersonArrow('Ahmed') // TypeError</code></pre>
          </div>
          <p class="mt-2"><strong>التوصية:</strong> استخدم Arrow Functions للـ callbacks والدوال البسيطة، و Regular Functions للدوال التي تحتاج <code>this</code> خاصاً أو كـ Constructors.</p>
        `,
      },
      {
        question: "ما هو الفرق بين Nullish Coalescing (??) و Logical OR (||)؟",
        answer: `
          <ul class="list-disc pr-6 space-y-3">
            <li>
              <strong><code>??</code> (Nullish Coalescing):</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>ترجع الجانب الأيمن <strong>فقط إذا كان الجانب الأيسر</strong> <code>null</code> أو <code>undefined</code>.</li>
                <li>مثال: <code>null ?? 'default'</code> → 'default'</li>
                <li><code>0 ?? 'default'</code> → 0 (لأن 0 ليس null أو undefined)</li>
              </ul>
            </li>
            <li>
              <strong><code>||</code> (Logical OR):</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>ترجع الجانب الأيمن إذا كان الجانب الأيسر <strong>falsy</strong>.</li>
                <li>القيم falsy: <code>false</code>، <code>0</code>، <code>''</code>، <code>null</code>، <code>undefined</code>، <code>NaN</code>.</li>
                <li>مثال: <code>0 || 'default'</code> → 'default' (لأن 0 falsy)</li>
              </ul>
            </li>
          </ul>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>// مثال: اختيار قيمة افتراضية
const input = 0

// باستخدام || - قد تعطي نتيجة غير متوقعة
const result1 = input || 'default'
console.log(result1) // 'default' (لأن 0 falsy)

// باستخدام ?? - النتيجة الصحيحة
const result2 = input ?? 'default'
console.log(result2) // 0 (لأن 0 ليس null أو undefined)</code></pre>
          </div>
          <p class="mt-2"><strong>التوصية:</strong> استخدم <code>??</code> عندما تريد التعامل مع <code>null</code> و <code>undefined</code> فقط، واستخدم <code>||</code> عندما تريد التعامل مع جميع القيم falsy.</p>
        `,
      },
      {
        question: "ما هو Optional Chaining (?. ) في JavaScript؟",
        answer: `
          <p><strong>Optional Chaining (<code>?.</code>):</strong> يسمح بالوصول إلى خصائص كائن متداخل <strong>بدون التحقق من وجود الكائن</strong>. إذا كان الكائن <code>null</code> أو <code>undefined</code>، ترجع <code>undefined</code> بدلاً من خطأ.</p>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>const user = {
  name: 'Ahmed',
  address: {
    city: 'Cairo',
    street: 'Main St'
  }
}

// بدون Optional Chaining - قد يسبب خطأ
const city1 = user && user.address && user.address.city
console.log(city1) // 'Cairo'

// مع Optional Chaining - آمن
const city2 = user?.address?.city
console.log(city2) // 'Cairo'

// إذا كان الكائن غير موجود
const user2 = null
const city3 = user2?.address?.city
console.log(city3) // undefined (بدون خطأ)

// استخدام Optional Chaining مع الدوال
const result = user?.getFullName?.() // يستدعي الدالة إذا كانت موجودة

// استخدام Optional Chaining مع المصفوفات
const users = [{ name: 'Ahmed' }]
const firstName = users?.[0]?.name</code></pre>
          </div>
          <p class="mt-2"><strong>الفوائد:</strong></p>
          <ul class="list-disc pr-6 space-y-1 mt-1">
            <li>تجنب أخطاء <code>Cannot read property of undefined</code>.</li>
            <li>كود أقصر وأكثر قراءة.</li>
            <li>يعمل مع JavaScript و TypeScript.</li>
          </ul>
        `,
      },
      {
        question: "ما هو الفرق بين Object.assign() و Spread Operator للكائنات؟",
        answer: `
          <ul class="list-disc pr-6 space-y-3">
            <li>
              <strong><code>Object.assign(target, ...sources)</code>:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>ينسخ خصائص <strong>جميع المصادر</strong> إلى الكائن الهدف.</li>
                <li>يعدل الكائن الهدف (target).</li>
                <li>مثال: <code>Object.assign({}, obj1, obj2)</code></li>
              </ul>
            </li>
            <li>
              <strong>Spread Operator <code>{ ...obj }</code>:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>ينسخ خصائص الكائن إلى كائن <strong>جديد</strong>.</li>
                <li>لا يعدل الكائن الأصلي.</li>
                <li>مثال: <code>{ ...obj1, ...obj2 }</code></li>
              </ul>
            </li>
          </ul>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>const obj1 = { a: 1, b: 2 }
const obj2 = { c: 3, d: 4 }

// Object.assign()
const result1 = Object.assign({}, obj1, obj2)
console.log(result1) // { a: 1, b: 2, c: 3, d: 4 }

// Spread Operator
const result2 = { ...obj1, ...obj2 }
console.log(result2) // { a: 1, b: 2, c: 3, d: 4 }

// الفرق: Object.assign يعدل الكائن الهدف
const target = { a: 1 }
Object.assign(target, { b: 2 })
console.log(target) // { a: 1, b: 2 } (تغير الكائن الأصلي)

// Spread ينشئ كائناً جديداً
const source = { a: 1 }
const newObj = { ...source, b: 2 }
console.log(source) // { a: 1 } (لم يتغير)</code></pre>
          </div>
          <p class="mt-2"><strong>التوصية:</strong> استخدم Spread Operator لأنه أكثر وضوحاً وسهولة، واستخدم Object.assign فقط عندما تحتاج لتعديل كائن موجود.</p>
        `,
      },
      {
        question: "ما هو الفرق بين Local Storage و Session Storage و Cookies؟",
        answer: `
          <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700 text-sm mt-3">
            <thead>
              <tr class="bg-gray-100 dark:bg-gray-700/50">
                <th class="px-3 py-2 text-right">الخاصية</th>
                <th class="px-3 py-2 text-right">Local Storage</th>
                <th class="px-3 py-2 text-right">Session Storage</th>
                <th class="px-3 py-2 text-right">Cookies</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
              <tr>
                <td class="px-3 py-2 font-medium">المدى</td>
                <td class="px-3 py-2">دائم (حتى يتم حذفها)</td>
                <td class="px-3 py-2">جلسة واحدة (عند إغلاق المتصفح)</td>
                <td class="px-3 py-2">حسب الإعداد (يمكن أن تكون دائمة)</td>
              </tr>
              <tr>
                <td class="px-3 py-2 font-medium">السعة</td>
                <td class="px-3 py-2">~10 MB</td>
                <td class="px-3 py-2">~10 MB</td>
                <td class="px-3 py-2">~4 KB</td>
              </tr>
              <tr>
                <td class="px-3 py-2 font-medium">الإرسال مع الطلبات</td>
                <td class="px-3 py-2">❌ لا</td>
                <td class="px-3 py-2">❌ لا</td>
                <td class="px-3 py-2">✅ نعم (تلقائياً)</td>
              </tr>
              <tr>
                <td class="px-3 py-2 font-medium">الوصول من JavaScript</td>
                <td class="px-3 py-2">✅ نعم</td>
                <td class="px-3 py-2">✅ نعم</td>
                <td class="px-3 py-2">✅ نعم (يمكن تعيين HttpOnly)</td>
              </tr>
              <tr>
                <td class="px-3 py-2 font-medium">الاستخدام الشائع</td>
                <td class="px-3 py-2">تخزين التفضيلات، البيانات الثابتة</td>
                <td class="px-3 py-2">بيانات الجلسة المؤقتة</td>
                <td class="px-3 py-2">مصادقة، تتبع المستخدم</td>
              </tr>
            </tbody>
          </table>
        `,
      },
      {
        question:
          "ما هي طرق تخزين البيانات في Local Storage و Session Storage؟",
        answer: `
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>// تخزين بيانات
localStorage.setItem('name', 'Ahmed')
localStorage.setItem('age', '30')

// استرجاع بيانات
const name = localStorage.getItem('name') // 'Ahmed'

// حذف عنصر
localStorage.removeItem('name')

// حذف الكل
localStorage.clear()

// تخزين كائنات (تحتاج JSON)
const user = { name: 'Ahmed', age: 30 }
localStorage.setItem('user', JSON.stringify(user))

// استرجاع كائنات
const storedUser = JSON.parse(localStorage.getItem('user'))

// Session Storage - نفس الدوال
sessionStorage.setItem('temp', 'session data')
const temp = sessionStorage.getItem('temp')</code></pre>
          </div>
          <div class="mt-3 p-3 bg-yellow-50 dark:bg-yellow-900/20 border-r-4 border-yellow-500 rounded">
            <p class="text-sm"><strong>⚠️ تنبيه:</strong> لا تخزن بيانات حساسة (مثل كلمات المرور، معلومات بطاقات الائتمان) في Local Storage لأنها غير آمنة ضد هجمات XSS.</p>
          </div>
        `,
      },
      {
        question: "ما هو الفرق بين class و prototype في JavaScript؟",
        answer: `
          <ul class="list-disc pr-6 space-y-3">
            <li>
              <strong>الـ Class (ES6):</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>صيغة <strong>جديدة</strong> وأسهل للفهم.</li>
                <li>تُعتبر <strong>سكر syntax</strong> فوق الـ Prototypes.</li>
                <li>تدعم <code>constructor</code>، <code>super</code>، <code>extends</code>.</li>
                <li>مثال: <code>class Person { constructor(name) { this.name = name } }</code></li>
              </ul>
            </li>
            <li>
              <strong>الـ Prototype (ES5 وما قبله):</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>الطريقة <strong>الأصلية</strong> لإنشاء الكائنات في JavaScript.</li>
                <li>تعتمد على <strong>الوراثة النموذجية (Prototypal Inheritance)</strong>.</li>
                <li>تستخدم <code>prototype</code> و <code>__proto__</code>.</li>
                <li>مثال: <code>function Person(name) { this.name = name }</code></li>
              </ul>
            </li>
          </ul>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>// باستخدام Class (ES6)
class Animal {
  constructor(name) {
    this.name = name
  }
  speak() {
    console.log(this.name + ' makes a sound')
  }
}

class Dog extends Animal {
  speak() {
    console.log(this.name + ' barks')
  }
}

const dog = new Dog('Rex')
dog.speak() // 'Rex barks'

// باستخدام Prototype (ES5)
function Animal(name) {
  this.name = name
}
Animal.prototype.speak = function() {
  console.log(this.name + ' makes a sound')
}

function Dog(name) {
  Animal.call(this, name)
}
Dog.prototype = Object.create(Animal.prototype)
Dog.prototype.speak = function() {
  console.log(this.name + ' barks')
}

const dog2 = new Dog('Rex')
dog2.speak() // 'Rex barks'</code></pre>
          </div>
        `,
      },
      {
        question: "ما هي الـ Prototype Chain في JavaScript؟",
        answer: `
          <p><strong>Prototype Chain (سلسلة النماذج):</strong> هي آلية تسمح للكائنات بوراثة الخصائص من كائنات أخرى. عندما تبحث عن خاصية في كائن، تبحث JavaScript في:</p>
          <ol class="list-decimal pr-6 space-y-1 mt-2">
            <li>الكائن نفسه.</li>
            <li>نموذج الكائن (<code>__proto__</code>).</li>
            <li>نموذج النموذج، وهكذا حتى تصل إلى <code>null</code>.</li>
          </ol>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>// إنشاء سلسلة نماذج
const animal = {
  eats: true,
  walk() {
    console.log('Animal walks')
  }
}

const dog = {
  barks: true,
  __proto__: animal  // وراثة من animal
}

const puppy = {
  cute: true,
  __proto__: dog  // وراثة من dog
}

console.log(puppy.eats) // true (من animal)
console.log(puppy.barks) // true (من dog)
console.log(puppy.cute) // true (خاصة puppy)

// البحث في السلسلة:
// puppy -> dog -> animal -> Object.prototype -> null</code></pre>
          </div>
          <div class="mt-3 p-3 bg-blue-50 dark:bg-blue-900/20 border-r-4 border-blue-500 rounded">
            <p class="text-sm"><strong>📌 ملاحظة:</strong> كل كائن في JavaScript (ما عدا الكائن الأساسي) يرث من <code>Object.prototype</code>، الذي يرث من <code>null</code>.</p>
          </div>
        `,
      },
      {
        question: "ما هو الفرق بين Object.create() و new Object() و {}؟",
        answer: `
          <ul class="list-disc pr-6 space-y-3">
            <li>
              <strong><code>{}</code> (كائن حرفي - Object Literal):</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>أسهل وأسرع طريقة لإنشاء كائن.</li>
                <li>المستخدمة الأكثر شيوعاً.</li>
                <li>مثال: <code>const obj = { name: 'Ahmed' }</code></li>
              </ul>
            </li>
            <li>
              <strong><code>new Object()</code>:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>يُنشئ كائن جديد باستخدام Constructor.</li>
                <li>مرتبط بـ <code>Object.prototype</code>.</li>
                <li>مثال: <code>const obj = new Object()</code></li>
              </ul>
            </li>
            <li>
              <strong><code>Object.create(proto)</code>:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>يُنشئ كائن جديد <strong>يرث</strong> من كائن محدد.</li>
                <li>يتيح التحكم الكامل في الـ Prototype.</li>
                <li>يمكن أن يكون النموذج <code>null</code> (كائن فارغ بدون وراثة).</li>
                <li>مثال: <code>const obj = Object.create(null)</code></li>
              </ul>
            </li>
          </ul>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>// 1. Object Literal
const obj1 = { name: 'Ahmed' }
console.log(obj1.hasOwnProperty('name')) // true (يرث من Object.prototype)

// 2. new Object()
const obj2 = new Object()
obj2.name = 'Ahmed'
console.log(obj2.hasOwnProperty('name')) // true

// 3. Object.create()
const proto = { city: 'Cairo' }
const obj3 = Object.create(proto)
obj3.name = 'Ahmed'
console.log(obj3.name) // 'Ahmed' (خاصة)
console.log(obj3.city) // 'Cairo' (من النموذج)
console.log(obj3.hasOwnProperty('city')) // false (ليست خاصة)

// كائن بدون نموذج (لا يرث من Object.prototype)
const obj4 = Object.create(null)
console.log(obj4.toString) // undefined (لا يوجد وراثة)</code></pre>
          </div>
        `,
      },
      {
        question: "ما هو الفرق بين class static methods و instance methods؟",
        answer: `
          <ul class="list-disc pr-6 space-y-3">
            <li>
              <strong>Instance Methods (طرق الكائن):</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>تُستدعى على <strong>كائنات</strong> من الكلاس.</li>
                <li>يمكنها الوصول إلى <code>this</code> (خصائص الكائن).</li>
                <li>مثال: <code>const p = new Person(); p.sayHello()</code></li>
              </ul>
            </li>
            <li>
              <strong>Static Methods (طرق ثابتة):</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>تُستدعى على <strong>الكلاس</strong> نفسه، وليس على الكائنات.</li>
                <li>لا يمكنها الوصول إلى <code>this</code> (خصائص الكائن).</li>
                <li>تُستخدم للدوال المساعدة (Utility Functions).</li>
                <li>مثال: <code>Person.createAnonymous()</code></li>
              </ul>
            </li>
          </ul>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>class Person {
  constructor(name) {
    this.name = name
  }

  // Instance Method - تستدعى على الكائنات
  sayHello() {
    console.log(\`Hello, I'm \${this.name}\`)
  }

  // Static Method - تستدعى على الكلاس
  static createAnonymous() {
    return new Person('Anonymous')
  }

  static compareAge(p1, p2) {
    return p1.age - p2.age
  }
}

const p1 = new Person('Ahmed')
p1.sayHello() // 'Hello, I'm Ahmed'

const p2 = Person.createAnonymous()
p2.sayHello() // 'Hello, I'm Anonymous'

// Static methods شائعة في Math و Array
console.log(Math.max(1, 2, 3)) // Math.max هو static method
console.log(Array.isArray([])) // Array.isArray هو static method</code></pre>
          </div>
        `,
      },
      {
        question: "ما هو الفرق بين getter و setter في JavaScript؟",
        answer: `
          <p><strong>Getters</strong> و <strong>Setters</strong> هي دوال تُستخدم للوصول إلى خصائص الكائن بطريقة محكومة.</p>
          <ul class="list-disc pr-6 space-y-3 mt-2">
            <li>
              <strong>Getter (<code>get</code>):</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>تُستخدم <strong>لقراءة</strong> قيمة خاصية.</li>
                <li>تُنفذ كوداً عند الوصول إلى الخاصية.</li>
                <li>تظهر كخاصية (وليست دالة).</li>
              </ul>
            </li>
            <li>
              <strong>Setter (<code>set</code>):</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>تُستخدم <strong>لتعديل</strong> قيمة خاصية.</li>
                <li>تُنفذ كوداً عند تعيين قيمة للخاصية.</li>
                <li>تظهر كخاصية (وليست دالة).</li>
              </ul>
            </li>
          </ul>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>class Person {
  constructor(firstName, lastName) {
    this._firstName = firstName
    this._lastName = lastName
  }

  // Getter
  get fullName() {
    return \`\${this._firstName} \${this._lastName}\`
  }

  // Setter
  set fullName(name) {
    const parts = name.split(' ')
    this._firstName = parts[0]
    this._lastName = parts[1] || ''
  }

  get firstName() {
    return this._firstName
  }

  set firstName(value) {
    if (!value) throw new Error('First name is required')
    this._firstName = value
  }
}

const p = new Person('Ahmed', 'Mohamed')
console.log(p.fullName) // 'Ahmed Mohamed' (getter)
p.fullName = 'Ali Hassan' // (setter)
console.log(p.fullName) // 'Ali Hassan'</code></pre>
          </div>
        `,
      },
      {
        question:
          "ما هو الفرق بين String methods: slice() و substring() و substr()؟",
        answer: `
          <ul class="list-disc pr-6 space-y-3">
            <li>
              <strong><code>slice(start, end)</code>:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>ترجع جزءاً من النص من start إلى end-1.</li>
                <li>تدعم <strong>الأرقام السالبة</strong> (تحسب من النهاية).</li>
                <li>المعيار الأكثر استخداماً.</li>
              </ul>
            </li>
            <li>
              <strong><code>substring(start, end)</code>:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>ترجع جزءاً من النص من start إلى end-1.</li>
                <li><strong>لا تدعم</strong> الأرقام السالبة (تعاملها كـ 0).</li>
                <li>تتبادل المواضع إذا كان start > end.</li>
              </ul>
            </li>
            <li>
              <strong><code>substr(start, length)</code>:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>ترجع جزءاً من النص <strong>بطول معين</strong> (length).</li>
                <li>تدعم الأرقام السالبة (للبداية).</li>
                <li><strong>قديمة (Deprecated)</strong>، لا يُفضل استخدامها.</li>
              </ul>
            </li>
          </ul>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>const str = 'Hello World'

console.log(str.slice(0, 5)) // 'Hello'
console.log(str.slice(-5)) // 'World' (سالبة من النهاية)

console.log(str.substring(0, 5)) // 'Hello'
console.log(str.substring(5, 0)) // 'Hello' (تبادل المواضع)
console.log(str.substring(-5)) // 'Hello World' (سالبة = 0)

console.log(str.substr(0, 5)) // 'Hello'
console.log(str.substr(-5)) // 'World' (سالبة للبداية)</code></pre>
          </div>
          <p class="mt-2"><strong>التوصية:</strong> استخدم <code>slice()</code> دائماً لأنه الأكثر مرونة والمدعوم بشكل كامل.</p>
        `,
      },
      // ============================
      // المستوى الثالث: متقدم (Advanced) - 30 سؤال
      // ============================
      {
        question: "ما هو الـ Event Loop بالتفصيل مع Microtasks و Macrotasks؟",
        answer: `
          <p><strong>Event Loop</strong> هو الآلية التي تسمح لجافا سكريبت (Single-Threaded) بتنفيذ العمليات غير المتزامنة.</p>
          <p class="mt-2"><strong>ترتيب التنفيذ بالتفصيل:</strong></p>
          <ol class="list-decimal pr-6 space-y-2 mt-1">
            <li>
              <strong>Call Stack (مكدس الاستدعاءات):</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>يُنفذ كل الكود المتزامن (Synchronous Code).</li>
                <li>الدوال تُضاف وتُزال من المكدس.</li>
              </ul>
            </li>
            <li>
              <strong>Microtasks (المهام الصغرى - أعلى أولوية):</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>تُنفذ <strong>فوراً</strong> بعد كل عملية في الـ Call Stack تصبح فارغة.</li>
                <li>مثل: <code>Promise.then</code>، <code>Promise.catch</code>، <code>Promise.finally</code>، <code>queueMicrotask</code>، <code>MutationObserver</code>.</li>
                <li><strong>جميع</strong> الـ Microtasks تُنفذ قبل أي Macrotask.</li>
              </ul>
            </li>
            <li>
              <strong>Macrotasks (المهام الكبرى - أولوية أقل):</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>تُنفذ <strong>واحدة تلو الأخرى</strong> بعد انتهاء كل الـ Microtasks.</li>
                <li>مثل: <code>setTimeout</code>، <code>setInterval</code>، <code>setImmediate</code>، <code>requestAnimationFrame</code>، أحداث DOM (<code>click</code>, <code>scroll</code>, ...).</li>
              </ul>
            </li>
          </ol>
          <div class="mt-3 p-3 bg-yellow-50 dark:bg-yellow-900/20 border-r-4 border-yellow-500 rounded">
            <p class="text-sm"><strong>🔑 معلومة مهمة:</strong> Microtasks لها أولوية أعلى من Macrotasks. <code>Promise.then</code> ستُنفذ قبل <code>setTimeout</code> حتى لو كان وقت الـ setTimeout صفر.</p>
          </div>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <p class="text-sm font-medium mb-1">مثال توضيحي:</p>
            <pre class="text-sm overflow-x-auto"><code>console.log('1') // متزامن

setTimeout(() => console.log('2'), 0) // Macrotask

Promise.resolve().then(() => console.log('3')) // Microtask

console.log('4') // متزامن

// الناتج: 1, 4, 3, 2
// الشرح: المتزامن أولاً (1, 4)، ثم Microtasks (3)، ثم Macrotasks (2)</code></pre>
          </div>
        `,
      },
      {
        question:
          'ما هو الفرق بين "==" و "===" مع أمثلة على تحويل الأنواع (Type Coercion)؟',
        answer: `
          <ul class="list-disc pr-6 space-y-3">
            <li>
              <strong><code>==</code> (Loose Equality):</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>يقارن القيم <strong>بعد تحويل الأنواع (Type Coercion)</strong>.</li>
                <li>يحاول جعل الأنواع متطابقة قبل المقارنة.</li>
              </ul>
            </li>
            <li>
              <strong><code>===</code> (Strict Equality):</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>يقارن القيمة <strong>والنوع</strong> معاً بدون أي تحويل.</li>
                <li>أسرع وأكثر أماناً.</li>
              </ul>
            </li>
          </ul>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <p class="text-sm font-medium mb-1">أمثلة على تحويل الأنواع (Type Coercion) مع ==:</p>
            <pre class="text-sm overflow-x-auto"><code>// مقارنة رقم ونص
console.log(5 == '5') // true (يحول النص '5' إلى رقم 5)

// مقارنة مع boolean
console.log(true == 1) // true (يحول true إلى 1)
console.log(false == 0) // true (يحول false إلى 0)

// مقارنة مع null و undefined
console.log(null == undefined) // true (يعتبران متساويين)

// مقارنة مع NaN
console.log(NaN == NaN) // false (NaN لا يساوي نفسه أبداً)

// مقارنة مع Object
console.log([1,2] == '1,2') // true (يحول المصفوفة إلى نص)

// === لا يقوم بأي تحويل
console.log(5 === '5') // false (رقم مقابل نص)
console.log(true === 1) // false (boolean مقابل رقم)
console.log(null === undefined) // false (أنواع مختلفة)</code></pre>
          </div>
          <div class="mt-3 p-3 bg-blue-50 dark:bg-blue-900/20 border-r-4 border-blue-500 rounded">
            <p class="text-sm"><strong>📌 قاعدة ذهبية:</strong> استخدم <code>===</code> دائماً، و <code>==</code> فقط إذا كنت تعرف بالضبط ماذا تفعل وتحتاج تحويل الأنواع.</p>
          </div>
        `,
      },
      {
        question:
          "ما هو الفرق بين Shallow Copy و Deep Copy مع طرق تنفيذ كل منهما؟",
        answer: `
          <ul class="list-disc pr-6 space-y-3">
            <li>
              <strong>Shallow Copy (نسخة سطحية):</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>تنسخ <strong>المستوى الأول</strong> فقط من الكائن أو المصفوفة.</li>
                <li>إذا كان هناك كائنات متداخلة (Nested Objects)، تُنسخ <strong>المراجع</strong> وليس القيم.</li>
                <li><strong>طرق التنفيذ:</strong></li>
                <ul class="list-circle pr-6 space-y-1 mt-1">
                  <li><code>Object.assign({}, obj)</code></li>
                  <li><code>{ ...obj }</code> (Spread Operator)</li>
                  <li><code>arr.slice()</code> للمصفوفات</li>
                  <li><code>[...arr]</code> للمصفوفات</li>
                </ul>
              </ul>
            </li>
            <li>
              <strong>Deep Copy (نسخة عميقة):</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>تنسخ <strong>جميع المستويات</strong> وتُنشئ نسخاً جديدة من الكائنات المتداخلة.</li>
                <li>لا تشارك المراجع مع الكائن الأصلي.</li>
                <li><strong>طرق التنفيذ:</strong></li>
                <ul class="list-circle pr-6 space-y-1 mt-1">
                  <li><code>structuredClone(obj)</code> (الأفضل والأحدث)</li>
                  <li><code>JSON.parse(JSON.stringify(obj))</code> (قيود)</li>
                  <li><code>_.cloneDeep(obj)</code> من Lodash</li>
                  <li>دالة مخصصة باستخدام Recursion</li>
                </ul>
              </ul>
            </li>
          </ul>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>const original = {
  name: 'Ahmed',
  address: { city: 'Cairo', street: 'Main St' },
  hobbies: ['Reading', 'Gaming']
}

// Shallow Copy
const shallow = { ...original }
shallow.address.city = 'Alex' // يغير original أيضاً!
shallow.hobbies.push('Coding') // يغير original أيضاً!
console.log(original.address.city) // 'Alex' (تغيرت!)
console.log(original.hobbies) // ['Reading', 'Gaming', 'Coding']

// Deep Copy
const deep = structuredClone(original)
deep.address.city = 'Tanta' // لا يؤثر على original
deep.hobbies.push('Swimming') // لا يؤثر على original
console.log(original.address.city) // 'Alex' (لم تتغير)
console.log(original.hobbies) // ['Reading', 'Gaming', 'Coding']</code></pre>
          </div>
        `,
      },
      {
        question:
          "ما هو الفرق بين Debounce و Throttle؟ مع أمثلة على استخدام كل منهما؟",
        answer: `
          <ul class="list-disc pr-6 space-y-3">
            <li>
              <strong>Debounce (الإلغاء المؤقت):</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>ينفذ الدالة <strong>بعد فترة من توقف الاستدعاءات</strong>.</li>
                <li>يُستخدم عندما تريد تنفيذ شيء <strong>بعد أن يتوقف المستخدم</strong> عن القيام بفعل معين.</li>
                <li><strong>مثال:</strong> البحث أثناء الكتابة (Search as you type).</li>
              </ul>
            </li>
            <li>
              <strong>Throttle (الخنق):</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>ينفذ الدالة <strong>مرة واحدة كل فترة زمنية محددة</strong>.</li>
                <li>يُستخدم عندما تريد <strong>تحديد معدل التنفيذ</strong>.</li>
                <li><strong>مثال:</strong> أحداث التمرير (Scroll)، تحجيم النافذة (Resize).</li>
              </ul>
            </li>
          </ul>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <p class="text-sm font-medium mb-1">تنفيذ Debounce:</p>
            <pre class="text-sm overflow-x-auto"><code>function debounce(fn, delay) {
  let timer
  return function(...args) {
    clearTimeout(timer)
    timer = setTimeout(() => fn.apply(this, args), delay)
  }
}

const searchInput = document.getElementById('search')
const searchHandler = debounce((e) => {
  console.log('Searching for:', e.target.value)
}, 300)

searchInput.addEventListener('input', searchHandler)</code></pre>
          </div>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <p class="text-sm font-medium mb-1">تنفيذ Throttle:</p>
            <pre class="text-sm overflow-x-auto"><code>function throttle(fn, limit) {
  let inThrottle = false
  return function(...args) {
    if (!inThrottle) {
      fn.apply(this, args)
      inThrottle = true
      setTimeout(() => inThrottle = false, limit)
    }
  }
}

const scrollHandler = throttle(() => {
  console.log('Scrolled!')
}, 1000)

window.addEventListener('scroll', scrollHandler)</code></pre>
          </div>
        `,
      },
      {
        question: "ما هو الفرق بين Memoization و Caching؟",
        answer: `
          <ul class="list-disc pr-6 space-y-3">
            <li>
              <strong>Memoization (التخزين المؤقت للدوال):</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>تقنية تخزين <strong>نتائج استدعاءات الدوال</strong> بناءً على المعاملات.</li>
                <li>تُستخدم مع <strong>الدوال النقية (Pure Functions)</strong>.</li>
                <li>تخزن النتيجة في <strong>ذاكرة (Cache)</strong> محلية.</li>
                <li>مثال: <code>useMemo</code> في React، <code>memoize</code> في Lodash.</li>
              </ul>
            </li>
            <li>
              <strong>Caching (التخزين المؤقت العام):</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>تخزين البيانات <strong>بشكل عام</strong> (ليس فقط نتائج الدوال).</li>
                <li>يمكن أن يكون على <strong>مستويات مختلفة</strong>: المتصفح، الخادم، CDN.</li>
                <li>مثال: Local Storage، Session Storage، HTTP Cache.</li>
              </ul>
            </li>
          </ul>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <p class="text-sm font-medium mb-1">مثال على Memoization:</p>
            <pre class="text-sm overflow-x-auto"><code>function memoize(fn) {
  const cache = {}
  return function(...args) {
    const key = JSON.stringify(args)
    if (cache[key] !== undefined) {
      console.log('Returning from cache')
      return cache[key]
    }
    const result = fn.apply(this, args)
    cache[key] = result
    return result
  }
}

const expensiveFunction = (n) => {
  console.log('Computing...')
  return n * n
}

const memoized = memoize(expensiveFunction)
console.log(memoized(5)) // Computing... 25
console.log(memoized(5)) // Returning from cache 25
console.log(memoized(6)) // Computing... 36</code></pre>
          </div>
        `,
      },
      {
        question: "ما هو الفرق بين Currying و Partial Application؟",
        answer: `
          <ul class="list-disc pr-6 space-y-3">
            <li>
              <strong>Currying (التجزئة):</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>تحويل دالة تأخذ <strong>معاملات متعددة</strong> إلى سلسلة من الدوال، كل دالة تأخذ <strong>معاملاً واحداً</strong>.</li>
                <li>مثال: <code>f(a, b, c) → f(a)(b)(c)</code></li>
              </ul>
            </li>
            <li>
              <strong>Partial Application (التطبيق الجزئي):</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>تثبيت <strong>بعض</strong> المعاملات، وترك الباقي لتُمرر لاحقاً.</li>
                <li>مثال: <code>f(a, b, c) → f(a, b)(c)</code> أو <code>f(a)(b, c)</code></li>
              </ul>
            </li>
          </ul>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>// دالة عادية
function add(a, b, c) {
  return a + b + c
}

// Currying
function curryAdd(a) {
  return function(b) {
    return function(c) {
      return a + b + c
    }
  }
}
console.log(curryAdd(1)(2)(3)) // 6

// Currying باستخدام Arrow Functions
const curryAddArrow = a => b => c => a + b + c
console.log(curryAddArrow(1)(2)(3)) // 6

// Partial Application
function partialAdd(a, b) {
  return function(c) {
    return a + b + c
  }
}
const add5and10 = partialAdd(5, 10)
console.log(add5and10(3)) // 18

// استخدام bind لـ Partial Application
const addTwo = add.bind(null, 2)
console.log(addTwo(3, 4)) // 9 (2 + 3 + 4)</code></pre>
          </div>
        `,
      },
      {
        question: "ما هو الفرق بين Function Composition و Pipe؟",
        answer: `
          <ul class="list-disc pr-6 space-y-3">
            <li>
              <strong>Function Composition (تكوين الدوال):</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>تطبيق دوال <strong>من اليمين إلى اليسار</strong> (Right to Left).</li>
                <li>مثال: <code>compose(f, g)(x) = f(g(x))</code></li>
              </ul>
            </li>
            <li>
              <strong>Pipe (أنبوب):</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>تطبيق دوال <strong>من اليسار إلى اليمين</strong> (Left to Right).</li>
                <li>مثال: <code>pipe(f, g)(x) = g(f(x))</code></li>
              </ul>
            </li>
          </ul>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>// دوال مساعدة
const add2 = x => x + 2
const multiply3 = x => x * 3
const subtract5 = x => x - 5

// Compose (يمين لليسار)
function compose(...fns) {
  return function(x) {
    return fns.reduceRight((acc, fn) => fn(acc), x)
  }
}

const composed = compose(add2, multiply3, subtract5)
console.log(composed(10)) // (10 - 5) * 3 + 2 = 17

// Pipe (يسار لليمين)
function pipe(...fns) {
  return function(x) {
    return fns.reduce((acc, fn) => fn(acc), x)
  }
}

const piped = pipe(add2, multiply3, subtract5)
console.log(piped(10)) // (10 + 2) * 3 - 5 = 31</code></pre>
          </div>
        `,
      },
      {
        question: "ما هو الفرق بين Immutability و Mutability في JavaScript؟",
        answer: `
          <ul class="list-disc pr-6 space-y-3">
            <li>
              <strong>Mutability (قابلية التغيير):</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>يمكن <strong>تغيير</strong> قيمة المتغير أو الكائن بعد إنشائه.</li>
                <li>الكائنات والمصفوفات <strong>قابلة للتغيير</strong> في JavaScript.</li>
                <li>مثال: <code>arr.push(4)</code> يغير المصفوفة الأصلية.</li>
              </ul>
            </li>
            <li>
              <strong>Immutability (عدم قابلية التغيير):</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li><strong>لا يمكن</strong> تغيير قيمة المتغير أو الكائن بعد إنشائه.</li>
                <li>الأنواع الأساسية (Primitive Types) <strong>غير قابلة للتغيير</strong>.</li>
                <li>الكائنات والمصفوفات يمكن جعلها غير قابلة للتغيير باستخدام <code>Object.freeze()</code> أو إنشاء نسخ جديدة.</li>
                <li>مثال: <code>const newArr = [...arr, 4]</code> (ينشئ مصفوفة جديدة).</li>
              </ul>
            </li>
          </ul>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>// Mutability - تغيير الكائن الأصلي
const person = { name: 'Ahmed', age: 30 }
person.age = 31 // تغيير مباشر

const numbers = [1, 2, 3]
numbers.push(4) // تغيير المصفوفة الأصلية

// Immutability - إنشاء نسخ جديدة
const person2 = { name: 'Ahmed', age: 30 }
const updatedPerson = { ...person2, age: 31 } // كائن جديد

const numbers2 = [1, 2, 3]
const newNumbers = [...numbers2, 4] // مصفوفة جديدة

// Object.freeze() يجعل الكائن غير قابل للتغيير
const frozen = Object.freeze({ name: 'Ahmed', age: 30 })
frozen.age = 31 // ❌ لا يعمل (في strict mode يسبب خطأ)</code></pre>
          </div>
          <p class="mt-2"><strong>فوائد Immutability:</strong></p>
          <ul class="list-disc pr-6 space-y-1 mt-1">
            <li>تسهيل تتبع التغييرات (Debugging).</li>
            <li>تحسين الأداء في React (مقارنة سريعة).</li>
            <li>تجنب الآثار الجانبية (Side Effects).</li>
            <li>أسهل في التعامل مع التزامن (Concurrency).</li>
          </ul>
        `,
      },
      {
        question:
          "ما هو الفرق بين Pure Functions و Impure Functions؟ مع أمثلة؟",
        answer: `
          <ul class="list-disc pr-6 space-y-3">
            <li>
              <strong>Pure Function (دالة نقية):</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li><strong>نفس المُدخلات تعطي نفس المُخرجات</strong> دائماً.</li>
                <li><strong>لا تسبب آثاراً جانبية (Side Effects)</strong>.</li>
                <li><strong>لا تعتمد</strong> على متغيرات خارجية (Global State).</li>
                <li><strong>لا تُغير</strong> المعاملات (Parameters).</li>
              </ul>
            </li>
            <li>
              <strong>Impure Function (دالة غير نقية):</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li><strong>لا تضمن</strong> نفس المُخرجات لنفس المُدخلات.</li>
                <li><strong>تسبب آثاراً جانبية</strong> (تعديل DOM، طلبات API، تغيير متغيرات خارجية).</li>
                <li><strong>تعتمد</strong> على متغيرات خارجية (Global State).</li>
                <li><strong>تُغير</strong> المعاملات (Parameters).</li>
              </ul>
            </li>
          </ul>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>// ✅ Pure Functions
function add(a, b) {
  return a + b // نفس المُدخلات تعطي نفس المُخرجات
}

function square(x) {
  return x * x // لا تسبب آثاراً جانبية
}

// ❌ Impure Functions
let counter = 0
function increment() {
  counter++ // تغيير متغير خارجي (Side Effect)
  return counter
}

function getRandom() {
  return Math.random() // لا تضمن نفس المُخرجات
}

function logMessage(message) {
  console.log(message) // Side Effect (كتابة في Console)
}

function updateUser(user) {
  user.age = 31 // تغيير المعامل (Parameter)
  return user
}</code></pre>
          </div>
          <p class="mt-2"><strong>فوائد Pure Functions:</strong></p>
          <ul class="list-disc pr-6 space-y-1 mt-1">
            <li>سهولة الاختبار (Testing).</li>
            <li>سهولة التصحيح (Debugging).</li>
            <li>قابلة لإعادة الاستخدام (Reusable).</li>
            <li>تجنب الأخطاء غير المتوقعة.</li>
          </ul>
        `,
      },
      {
        question:
          "ما هو الفرق بين Object.freeze(), Object.seal(), Object.preventExtensions()؟",
        answer: `
          <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700 text-sm mt-3">
            <thead>
              <tr class="bg-gray-100 dark:bg-gray-700/50">
                <th class="px-3 py-2 text-right">الخاصية</th>
                <th class="px-3 py-2 text-right">freeze()</th>
                <th class="px-3 py-2 text-right">seal()</th>
                <th class="px-3 py-2 text-right">preventExtensions()</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
              <tr>
                <td class="px-3 py-2 font-medium">إضافة خصائص جديدة</td>
                <td class="px-3 py-2">❌ ممنوع</td>
                <td class="px-3 py-2">❌ ممنوع</td>
                <td class="px-3 py-2">❌ ممنوع</td>
              </tr>
              <tr>
                <td class="px-3 py-2 font-medium">حذف خصائص</td>
                <td class="px-3 py-2">❌ ممنوع</td>
                <td class="px-3 py-2">❌ ممنوع</td>
                <td class="px-3 py-2">✅ مسموح</td>
              </tr>
              <tr>
                <td class="px-3 py-2 font-medium">تعديل خصائص موجودة</td>
                <td class="px-3 py-2">❌ ممنوع</td>
                <td class="px-3 py-2">✅ مسموح</td>
                <td class="px-3 py-2">✅ مسموح</td>
              </tr>
              <tr>
                <td class="px-3 py-2 font-medium">تعديل خصائص متداخلة</td>
                <td class="px-3 py-2">✅ مسموح</td>
                <td class="px-3 py-2">✅ مسموح</td>
                <td class="px-3 py-2">✅ مسموح</td>
              </tr>
            </tbody>
          </table>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>const obj = { name: 'Ahmed', age: 30 }

// Object.preventExtensions()
Object.preventExtensions(obj)
obj.city = 'Cairo' // ❌ ممنوع (لا يمكن إضافة)
delete obj.age // ✅ مسموح
obj.age = 31 // ✅ مسموح

// Object.seal()
const obj2 = { name: 'Ahmed', age: 30 }
Object.seal(obj2)
obj2.city = 'Cairo' // ❌ ممنوع
delete obj2.age // ❌ ممنوع
obj2.age = 31 // ✅ مسموح

// Object.freeze()
const obj3 = { name: 'Ahmed', age: 30 }
Object.freeze(obj3)
obj3.city = 'Cairo' // ❌ ممنوع
delete obj3.age // ❌ ممنوع
obj3.age = 31 // ❌ ممنوع</code></pre>
          </div>
        `,
      },
      {
        question: "ما هو الفرق بين Map و Object مع تحليل الأداء؟",
        answer: `
          <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700 text-sm mt-3">
            <thead>
              <tr class="bg-gray-100 dark:bg-gray-700/50">
                <th class="px-3 py-2 text-right">الخاصية</th>
                <th class="px-3 py-2 text-right">Map</th>
                <th class="px-3 py-2 text-right">Object</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
              <tr>
                <td class="px-3 py-2 font-medium">نوع المفاتيح</td>
                <td class="px-3 py-2">أي نوع (كائنات، دوال، قيم أساسية)</td>
                <td class="px-3 py-2">نصوص أو Symbols فقط</td>
              </tr>
              <tr>
                <td class="px-3 py-2 font-medium">ترتيب الإدراج</td>
                <td class="px-3 py-2">✅ يحتفظ بالترتيب</td>
                <td class="px-3 py-2">❌ لا يحتفظ (في ES6 يحتفظ جزئياً)</td>
              </tr>
              <tr>
                <td class="px-3 py-2 font-medium">الحجم (size)</td>
                <td class="px-3 py-2">✅ خاصية size</td>
                <td class="px-3 py-2">❌ لا يوجد (يُحسب يدوياً)</td>
              </tr>
              <tr>
                <td class="px-3 py-2 font-medium">التكرار (Iteration)</td>
                <td class="px-3 py-2">✅ مباشر (for...of)</td>
                <td class="px-3 py-2">❌ يحتاج Object.keys/values/entries</td>
              </tr>
              <tr>
                <td class="px-3 py-2 font-medium">الأداء</td>
                <td class="px-3 py-2">أفضل مع الإضافة/الحذف المتكرر</td>
                <td class="px-3 py-2">أفضل مع الوصول العشوائي</td>
              </tr>
            </tbody>
          </table>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>// Map - مفاتيح من أي نوع
const map = new Map()
map.set('name', 'Ahmed')
map.set(1, 'رقم واحد')
map.set({ id: 1 }, 'كائن كمفتاح')
console.log(map.size) // 3

// Object - مفاتيح نصوص فقط
const obj = {}
obj.name = 'Ahmed'
obj[1] = 'رقم واحد'
obj[{ id: 1 }] = 'كائن كمفتاح' // يتحول إلى '[object Object]'
console.log(Object.keys(obj).length) // 3

// Map - تكرار مباشر
for (let [key, value] of map) {
  console.log(key, value)
}

// Object - يحتاج Object.entries
for (let [key, value] of Object.entries(obj)) {
  console.log(key, value)
}</code></pre>
          </div>
          <p class="mt-2"><strong>متى تستخدم Map ومتى تستخدم Object؟</strong></p>
          <ul class="list-disc pr-6 space-y-1 mt-1">
            <li><strong>استخدم Map:</strong> عندما تحتاج مفاتيح من أي نوع، إضافة/حذف متكرر، أو تحتاج لحجم (size).</li>
            <li><strong>استخدم Object:</strong> عندما تحتاج JSON (لتخزين/نقل)، أو طرق مدمجة (toString, hasOwnProperty).</li>
          </ul>
        `,
      },
      {
        question: "ما هو الفرق بين Set و Array مع تحليل الأداء؟",
        answer: `
          <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700 text-sm mt-3">
            <thead>
              <tr class="bg-gray-100 dark:bg-gray-700/50">
                <th class="px-3 py-2 text-right">الخاصية</th>
                <th class="px-3 py-2 text-right">Set</th>
                <th class="px-3 py-2 text-right">Array</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
              <tr>
                <td class="px-3 py-2 font-medium">القيم الفريدة</td>
                <td class="px-3 py-2">✅ تلقائياً (لا يسمح بالتكرار)</td>
                <td class="px-3 py-2">❌ يسمح بالتكرار</td>
              </tr>
              <tr>
                <td class="px-3 py-2 font-medium">الوصول حسب المؤشر</td>
                <td class="px-3 py-2">❌ لا (ليس مفهرساً)</td>
                <td class="px-3 py-2">✅ نعم (arr[0])</td>
              </tr>
              <tr>
                <td class="px-3 py-2 font-medium">البحث عن قيمة</td>
                <td class="px-3 py-2">O(1) (سريع جداً)</td>
                <td class="px-3 py-2">O(n) (بطيء مع البيانات الكبيرة)</td>
              </tr>
              <tr>
                <td class="px-3 py-2 font-medium">الإضافة/الحذف</td>
                <td class="px-3 py-2">O(1) (سريع)</td>
                <td class="px-3 py-2">O(1) عند النهاية، O(n) في المنتصف</td>
              </tr>
            </tbody>
          </table>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>// Set - قيم فريدة
const set = new Set([1, 2, 3, 3, 4, 5, 5])
console.log(set) // Set(5) {1, 2, 3, 4, 5}

// Set - بحث سريع
console.log(set.has(3)) // true (O(1))
console.log(set.has(10)) // false (O(1))

// Array - بحث بطيء
const arr = [1, 2, 3, 4, 5]
console.log(arr.includes(3)) // true (O(n))
console.log(arr.indexOf(3)) // 2 (O(n))

// تحويل Set إلى Array
const uniqueArr = [...set]

// حذف التكرارات من Array باستخدام Set
const duplicates = [1, 2, 2, 3, 3, 4, 5, 5]
const unique = [...new Set(duplicates)]
console.log(unique) // [1, 2, 3, 4, 5]</code></pre>
          </div>
        `,
      },
      {
        question:
          "ما هو الفرق بين Callback, Promise, و async/await؟ مع تحليل الأداء؟",
        answer: `
          <ul class="list-disc pr-6 space-y-3">
            <li>
              <strong>Callback (استدعاء عكسي):</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>دالة تُمرر كمعامل وتُنفذ <strong>بعد انتهاء</strong> عملية غير متزامنة.</li>
                <li><strong>عيوب:</strong> Callback Hell، صعوبة التعامل مع الأخطاء، صعوبة القراءة.</li>
              </ul>
            </li>
            <li>
              <strong>Promise (وعد):</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>كائن يمثل <strong>نتيجة</strong> عملية غير متزامنة.</li>
                <li><strong>مميزات:</strong> حل مشكلة Callback Hell، معالجة أخطاء أفضل، تسهيل التكامل.</li>
                <li><strong>عيوب:</strong> قد يكون معقداً مع العمليات المتسلسلة الطويلة.</li>
              </ul>
            </li>
            <li>
              <strong>async/await (غير متزامن/انتظار):</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>صيغة (Syntax) جديدة فوق الـ Promises.</li>
                <li><strong>مميزات:</strong> كود يبدو متزامناً (Synchronous)، أسهل في القراءة والتصحيح، معالجة أخطاء بـ try/catch.</li>
                <li><strong>عيب:</strong> قد تخفي تعقيد الـ Promises.</li>
              </ul>
            </li>
          </ul>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>// 1. Callback
function fetchData(callback) {
  setTimeout(() => {
    callback('Data from server')
  }, 1000)
}
fetchData((data) => console.log(data))

// 2. Promise
function fetchDataPromise() {
  return new Promise((resolve) => {
    setTimeout(() => resolve('Data from server'), 1000)
  })
}
fetchDataPromise().then(data => console.log(data))

// 3. async/await
async function getData() {
  try {
    const data = await fetchDataPromise()
    console.log(data)
  } catch (error) {
    console.error(error)
  }
}
getData()</code></pre>
          </div>
          <p class="mt-2"><strong>تحليل الأداء:</strong></p>
          <ul class="list-disc pr-6 space-y-1 mt-1">
            <li><strong>الأداء:</strong> كلهم متساوون في الأداء (async/await هو مجرد سكر فوق Promises).</li>
            <li><strong>القراءة:</strong> async/await هو الأفضل.</li>
            <li><strong>التصحيح (Debugging):</strong> async/await هو الأسهل.</li>
          </ul>
        `,
      },
      {
        question:
          "ما هو الفرق بين Promise.all, Promise.allSettled, Promise.race, Promise.any؟",
        answer: `
          <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700 text-sm mt-3">
            <thead>
              <tr class="bg-gray-100 dark:bg-gray-700/50">
                <th class="px-3 py-2 text-right">الطريقة</th>
                <th class="px-3 py-2 text-right">السلوك</th>
                <th class="px-3 py-2 text-right">النتيجة</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
              <tr>
                <td class="px-3 py-2 font-medium">Promise.all()</td>
                <td class="px-3 py-2">ينتظر <strong>جميع</strong> الـ Promises</td>
                <td class="px-3 py-2">ترجع <strong>مصفوفة النتائج</strong>، ترفض عند أول خطأ</td>
              </tr>
              <tr>
                <td class="px-3 py-2 font-medium">Promise.allSettled()</td>
                <td class="px-3 py-2">ينتظر <strong>جميع</strong> الـ Promises</td>
                <td class="px-3 py-2">ترجع <strong>مصفوفة النتائج</strong> (نجاح وفشل)، لا ترفض أبداً</td>
              </tr>
              <tr>
                <td class="px-3 py-2 font-medium">Promise.race()</td>
                <td class="px-3 py-2">ينتظر <strong>أول</strong> Promise تنتهي</td>
                <td class="px-3 py-2">ترجع <strong>نتيجة الأولى</strong> (نجاح أو فشل)</td>
              </tr>
              <tr>
                <td class="px-3 py-2 font-medium">Promise.any()</td>
                <td class="px-3 py-2">ينتظر <strong>أول</strong> Promise تنجح</td>
                <td class="px-3 py-2">ترجع <strong>نتيجة الأولى الناجحة</strong>، ترفض إذا فشل الكل</td>
              </tr>
            </tbody>
          </table>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>const p1 = Promise.resolve(3)
const p2 = new Promise((resolve) => setTimeout(resolve, 100, 'foo'))
const p3 = new Promise((resolve, reject) => setTimeout(reject, 50, 'خطأ'))

// Promise.all - ترفض عند أول خطأ
Promise.all([p1, p2, p3])
  .then(values => console.log(values))
  .catch(err => console.error('all error:', err))

// Promise.allSettled - تنتظر الكل
Promise.allSettled([p1, p2, p3])
  .then(results => console.log(results))

// Promise.race - أول من تنتهي
Promise.race([p1, p2, p3])
  .then(value => console.log('race:', value))
  .catch(err => console.error('race error:', err))

// Promise.any - أول من تنجح
Promise.any([p3, p1, p2])
  .then(value => console.log('any:', value))
  .catch(err => console.error('any error:', err))</code></pre>
          </div>
        `,
      },
      {
        question: "ما هو الفرق بين try/catch و .catch() في معالجة الأخطاء؟",
        answer: `
          <ul class="list-disc pr-6 space-y-3">
            <li>
              <strong><code>try/catch</code>:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>تُستخدم مع <strong>async/await</strong> و <strong>الكود المتزامن</strong>.</li>
                <li>تلتقط الأخطاء في <strong>نطاق محدد</strong> (بين try و catch).</li>
                <li>مثال: <code>try { await fetchData() } catch (error) { console.error(error) }</code></li>
              </ul>
            </li>
            <li>
              <strong><code>.catch()</code>:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>تُستخدم مع <strong>Promises</strong>.</li>
                <li>تلتقط الأخطاء في <strong>سلسلة الـ Promise</strong>.</li>
                <li>مثال: <code>fetchData().then(data => console.log(data)).catch(error => console.error(error))</code></li>
              </ul>
            </li>
          </ul>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>// 1. try/catch مع async/await
async function getData() {
  try {
    const data = await fetchData()
    console.log(data)
  } catch (error) {
    console.error('Error in try/catch:', error)
  }
}

// 2. .catch() مع Promise
fetchData()
  .then(data => console.log(data))
  .catch(error => console.error('Error in .catch():', error))

// 3. مزج بين الاثنين
async function getData2() {
  try {
    const data = await fetchData()
    console.log(data)
  } catch (error) {
    console.error('Error in try/catch:', error)
  }
}
getData2().catch(error => console.error('Error in .catch():', error))

// 4. finally - يُنفذ دائماً (نجاح أو فشل)
fetchData()
  .then(data => console.log(data))
  .catch(error => console.error(error))
  .finally(() => console.log('Done!'))</code></pre>
          </div>
        `,
      },
      {
        question: "ما هو الفرق بين Error و Exception في JavaScript؟",
        answer: `
          <ul class="list-disc pr-6 space-y-3">
            <li>
              <strong>Error (خطأ):</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>هو <strong>كائن</strong> يمثل خطأً.</li>
                <li>يحتوي على معلومات عن الخطأ (message، stack، name).</li>
                <li>يمكن إنشاؤه باستخدام <code>new Error('message')</code>.</li>
                <li><strong>أنواع الأخطاء:</strong></li>
                <ul class="list-circle pr-6 space-y-1 mt-1">
                  <li><code>Error</code> - الخطأ العام.</li>
                  <li><code>SyntaxError</code> - خطأ في الصياغة.</li>
                  <li><code>ReferenceError</code> - متغير غير معرّف.</li>
                  <li><code>TypeError</code> - نوع غير صحيح.</li>
                  <li><code>RangeError</code> - قيمة خارج النطاق.</li>
                  <li><code>URIError</code> - خطأ في encodeURI/decodeURI.</li>
                  <li><code>EvalError</code> - خطأ في eval().</li>
                </ul>
              </ul>
            </li>
            <li>
              <strong>Exception (استثناء):</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>هو <strong>حدث</strong> يحدث عندما يواجه الكود خطأً.</li>
                <li>يتم <strong>رمي (throw)</strong> الاستثناء، ويتم <strong>التقاط (catch)</strong> الاستثناء.</li>
                <li>عندما ترمي خطأً، يصبح <strong>استثناءً</strong>.</li>
              </ul>
            </li>
          </ul>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>// أنواع الأخطاء
try {
  // SyntaxError
  eval('console.log("Hello') // خطأ في الصياغة

  // ReferenceError
  console.log(undefinedVariable)

  // TypeError
  null.toString()

  // RangeError
  const arr = new Array(-1)
} catch (error) {
  console.log(error.name) // اسم الخطأ
  console.log(error.message) // رسالة الخطأ
  console.log(error.stack) // تتبع المكدس
}

// إنشاء خطأ مخصص
class CustomError extends Error {
  constructor(message) {
    super(message)
    this.name = 'CustomError'
  }
}

try {
  throw new CustomError('هذا خطأ مخصص')
} catch (error) {
  console.log(error.name) // 'CustomError'
  console.log(error.message) // 'هذا خطأ مخصص'
}</code></pre>
          </div>
        `,
      },
      {
        question: "ما هو الفرق بين throw و return في JavaScript؟",
        answer: `
          <ul class="list-disc pr-6 space-y-3">
            <li>
              <strong><code>return</code>:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>يُنهي <strong>الدالة</strong> ويعيد قيمة (أو undefined).</li>
                <li>يُستخدم في <strong>الكود العادي</strong>.</li>
                <li>يمكن <strong>التقاط</strong> القيمة المرجعة عادة.</li>
                <li>لا يقطع تنفيذ البرنامج بالكامل.</li>
              </ul>
            </li>
            <li>
              <strong><code>throw</code>:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>يُنهي <strong>الدالة</strong> ويرمي <strong>خطأ/استثناء</strong>.</li>
                <li>يُستخدم <strong>لمعالجة الأخطاء</strong>.</li>
                <li>يجب <strong>التقاط</strong> الاستثناء باستخدام <code>try/catch</code>.</li>
                <li>يقطع تنفيذ البرنامج <strong>إذا لم يُلتقط</strong>.</li>
              </ul>
            </li>
          </ul>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>// return - ينتهي ويُعيد قيمة
function divide(a, b) {
  if (b === 0) {
    return 'لا يمكن القسمة على صفر' // يُنهي الدالة
  }
  return a / b
}

console.log(divide(10, 2)) // 5
console.log(divide(10, 0)) // 'لا يمكن القسمة على صفر'

// throw - يرمي خطأ
function divide2(a, b) {
  if (b === 0) {
    throw new Error('لا يمكن القسمة على صفر') // يرمي خطأ
  }
  return a / b
}

try {
  console.log(divide2(10, 0))
} catch (error) {
  console.error(error.message) // 'لا يمكن القسمة على صفر'
}

// الفرق: return عادي، throw يحتاج try/catch</code></pre>
          </div>
        `,
      },
      {
        question: "ما هو الفرق بين Event Bubbling و Event Capturing في DOM؟",
        answer: `
          <ul class="list-disc pr-6 space-y-3">
            <li>
              <strong>Event Bubbling (الفقاعات):</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>الحدث ينتقل <strong>من الأسفل إلى الأعلى</strong> (من العنصر الذي أثار الحدث إلى الجذر).</li>
                <li>يبدأ من العنصر الهدف (Target) ثم العنصر الأب ثم الجد ... إلخ.</li>
                <li>هذا هو <strong>السلوك الافتراضي</strong> في DOM.</li>
              </ul>
            </li>
            <li>
              <strong>Event Capturing (التقاط):</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>الحدث ينتقل <strong>من الأعلى إلى الأسفل</strong> (من الجذر إلى العنصر الهدف).</li>
                <li>يبدأ من الجذر ثم الجد ثم الأب ثم العنصر الهدف.</li>
                <li>يتم تفعيله بتمرير <code>true</code> كمعامل ثالث لـ <code>addEventListener</code>.</li>
              </ul>
            </li>
          </ul>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>// HTML
// <div id="grandparent">
//   <div id="parent">
//     <button id="child">Click me</button>
//   </div>
// </div>

const grandparent = document.getElementById('grandparent')
const parent = document.getElementById('parent')
const child = document.getElementById('child')

// Event Bubbling (الافتراضي - false)
grandparent.addEventListener('click', () => console.log('Grandparent'), false)
parent.addEventListener('click', () => console.log('Parent'), false)
child.addEventListener('click', () => console.log('Child'), false)

// عند الضغط على child:
// Child → Parent → Grandparent

// Event Capturing (true)
grandparent.addEventListener('click', () => console.log('Grandparent'), true)
parent.addEventListener('click', () => console.log('Parent'), true)
child.addEventListener('click', () => console.log('Child'), true)

// عند الضغط على child:
// Grandparent → Parent → Child

// إيقاف انتشار الحدث (stopPropagation)
child.addEventListener('click', (e) => {
  e.stopPropagation() // يمنع الحدث من الوصول للأعلى
  console.log('Child')
})</code></pre>
          </div>
        `,
      },
      {
        question: "ما هو الفرق بين Event Delegation و Event Propagation؟",
        answer: `
          <ul class="list-disc pr-6 space-y-3">
            <li>
              <strong>Event Propagation (انتشار الحدث):</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>هو <strong>المراحل</strong> التي يمر بها الحدث.</li>
                <li>ثلاث مراحل: <strong>Capturing</strong> (من الأعلى للأسفل)، <strong>Target</strong> (العنصر الهدف)، <strong>Bubbling</strong> (من الأسفل للأعلى).</li>
              </ul>
            </li>
            <li>
              <strong>Event Delegation (تفويض الحدث):</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>هي <strong>تقنية</strong> تستخدم Event Bubbling.</li>
                <li>إضافة مستمع حدث (Event Listener) إلى <strong>عنصر أب</strong> بدلاً من كل عنصر ابن.</li>
                <li>مفيد مع العناصر التي تُضاف ديناميكياً.</li>
              </ul>
            </li>
          </ul>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>// Event Delegation
// HTML: <ul id="list"><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul>

// بدون Event Delegation - لكل عنصر مستمع
document.querySelectorAll('#list li').forEach(li => {
  li.addEventListener('click', () => console.log(li.textContent))
})

// مع Event Delegation - مستمع واحد على الأب
document.getElementById('list').addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
    console.log(e.target.textContent)
  }
})

// مفيد مع العناصر المضافه ديناميكياً
const newItem = document.createElement('li')
newItem.textContent = 'Item 4'
document.getElementById('list').appendChild(newItem)
// يعمل تلقائياً مع Event Delegation

// إيقاف Event Propagation (منع الانتشار)
document.getElementById('list').addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
    e.stopPropagation() // يمنع الحدث من الوصول للأعلى
    console.log('Clicked:', e.target.textContent)
  }
})</code></pre>
          </div>
        `,
      },
      {
        question: "ما هو الفرق بين ESM (ES Modules) و CommonJS؟",
        answer: `
          <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700 text-sm mt-3">
            <thead>
              <tr class="bg-gray-100 dark:bg-gray-700/50">
                <th class="px-3 py-2 text-right">الخاصية</th>
                <th class="px-3 py-2 text-right">ES Modules (ESM)</th>
                <th class="px-3 py-2 text-right">CommonJS (CJS)</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
              <tr>
                <td class="px-3 py-2 font-medium">الصيغة</td>
                <td class="px-3 py-2"><code>import/export</code></td>
                <td class="px-3 py-2"><code>require/module.exports</code></td>
              </tr>
              <tr>
                <td class="px-3 py-2 font-medium">التحميل</td>
                <td class="px-3 py-2">ثابت (Static) - يُحلل في وقت الترجمة</td>
                <td class="px-3 py-2">ديناميكي (Dynamic) - يُحمل في وقت التشغيل</td>
              </tr>
              <tr>
                <td class="px-3 py-2 font-medium">التخزين المؤقت</td>
                <td class="px-3 py-2">✅ يدعم التخزين المؤقت</td>
                <td class="px-3 py-2">✅ يدعم التخزين المؤقت</td>
              </tr>
              <tr>
                <td class="px-3 py-2 font-medium">المتصفح</td>
                <td class="px-3 py-2">✅ مدعوم</td>
                <td class="px-3 py-2">❌ غير مدعوم</td>
              </tr>
              <tr>
                <td class="px-3 py-2 font-medium">Node.js</td>
                <td class="px-3 py-2">✅ مدعوم (من v12)</td>
                <td class="px-3 py-2">✅ مدعوم (الافتراضي)</td>
              </tr>
              <tr>
                <td class="px-3 py-2 font-medium">تحميل جزئي</td>
                <td class="px-3 py-2">✅ نعم (Tree Shaking)</td>
                <td class="px-3 py-2">❌ لا</td>
              </tr>
            </tbody>
          </table>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>// ES Modules (ESM) - ملف example.js
export const name = 'Ahmed'
export function greet() {
  console.log('Hello')
}
export default class Person { /* ... */ }

// استيراد
import Person, { name, greet } from './example.js'
import * as all from './example.js'

// CommonJS (CJS) - ملف example.js
exports.name = 'Ahmed'
exports.greet = function() {
  console.log('Hello')
}
module.exports = class Person { /* ... */ }

// استيراد
const Person = require('./example.js')
const { name, greet } = require('./example.js')</code></pre>
          </div>
        `,
      },
      {
        question: "ما هو الفرق بين Dynamic Import و Static Import؟",
        answer: `
          <ul class="list-disc pr-6 space-y-3">
            <li>
              <strong>Static Import (استيراد ثابت):</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>يُستخدم <code>import ... from ...</code>.</li>
                <li>يُحمل <strong>في بداية</strong> تنفيذ الملف (في وقت الترجمة).</li>
                <li>يجب أن يكون في <strong>أعلى</strong> الملف.</li>
                <li>غير شرطي (لا يمكن وضعه داخل if أو دالة).</li>
              </ul>
            </li>
            <li>
              <strong>Dynamic Import (استيراد ديناميكي):</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>يُستخدم <code>import()</code> (دالة).</li>
                <li>يُحمل <strong>عند الطلب</strong> (في وقت التشغيل).</li>
                <li>يمكن وضعه في <strong>أي مكان</strong> (داخل دوال، شرطيات).</li>
                <li>يرجع <strong>Promise</strong>.</li>
                <li>مفيد لـ <strong>Lazy Loading</strong> و <strong>Code Splitting</strong>.</li>
              </ul>
            </li>
          </ul>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>// Static Import (ثابت)
import { add } from './math.js'
console.log(add(2, 3))

// Dynamic Import (ديناميكي)
// تحميل عند الطلب (Lazy Loading)
async function loadMathModule() {
  const math = await import('./math.js')
  console.log(math.add(2, 3))
}

// تحميل شرطي
if (someCondition) {
  const module = await import('./module.js')
  module.doSomething()
}

// تحميل حسب اللغة
async function loadLanguage(lang) {
  const messages = await import(\`./locales/\${lang}.js\`)
  return messages.default
}

// مع React - Lazy Loading
const LazyComponent = React.lazy(() => import('./HeavyComponent.jsx'))</code></pre>
          </div>
        `,
      },
      {
        question: "ما هو الفرق بين Tree Shaking و Dead Code Elimination؟",
        answer: `
          <ul class="list-disc pr-6 space-y-3">
            <li>
              <strong>Tree Shaking (هز الشجرة):</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>تقنية في <strong>Bundlers</strong> (مثل Webpack، Vite).</li>
                <li>تزيل <strong>الكود غير المستخدم</strong> (Dead Code) من الحزمة النهائية.</li>
                <li>تعمل مع <strong>ES Modules</strong> (import/export).</li>
                <li>تعتمد على <strong>التحليل الثابت (Static Analysis)</strong>.</li>
                <li>مثال: إذا استوردت دالة واحدة من مكتبة، تزيل الباقي.</li>
              </ul>
            </li>
            <li>
              <strong>Dead Code Elimination (إزالة الكود الميت):</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>مصطلح <strong>عام</strong> لإزالة الكود غير المستخدم.</li>
                <li>يشمل Tree Shaking و DCE (Dead Code Elimination).</li>
                <li>يمكن أن يحدث في <strong>المترجم (Compiler)</strong> أو <strong>الـ Bundler</strong>.</li>
                <li>يعتمد على تحليل <strong>تدفق البيانات (Data Flow Analysis)</strong>.</li>
              </ul>
            </li>
          </ul>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>// ملف utils.js
export function add(a, b) { return a + b }
export function subtract(a, b) { return a - b }
export function multiply(a, b) { return a * b }

// ملف main.js
import { add } from './utils.js' // فقط add مستخدمة
console.log(add(2, 3))

// بعد Tree Shaking (في الـ Bundle النهائي)
// فقط دالة add تبقى، subtract و multiply تُزال

// مع Dead Code في الدالة نفسها
function calculate(a, b) {
  if (false) {
    // هذا الكود لن ينفذ أبداً
    console.log('Dead code')
  }
  return a + b
}
// Dead Code Elimination يزيل هذا الكود</code></pre>
          </div>
        `,
      },
      {
        question: "ما هو الفرق بين <script> مع async و defer؟",
        answer: `
          <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700 text-sm mt-3">
            <thead>
              <tr class="bg-gray-100 dark:bg-gray-700/50">
                <th class="px-3 py-2 text-right">الخاصية</th>
                <th class="px-3 py-2 text-right">async</th>
                <th class="px-3 py-2 text-right">defer</th>
                <th class="px-3 py-2 text-right">بدون (Normal)</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
              <tr>
                <td class="px-3 py-2 font-medium">التحميل</td>
                <td class="px-3 py-2">غير متزامن (بالتوازي مع الـ HTML)</td>
                <td class="px-3 py-2">غير متزامن (بالتوازي مع الـ HTML)</td>
                <td class="px-3 py-2">متزامن (يوقف تحميل الـ HTML)</td>
              </tr>
              <tr>
                <td class="px-3 py-2 font-medium">التنفيذ</td>
                <td class="px-3 py-2">فور انتهاء التحميل</td>
                <td class="px-3 py-2">بعد تحميل الـ HTML بالكامل</td>
                <td class="px-3 py-2">فور التحميل</td>
              </tr>
              <tr>
                <td class="px-3 py-2 font-medium">الترتيب</td>
                <td class="px-3 py-2">❌ لا يضمن الترتيب</td>
                <td class="px-3 py-2">✅ يضمن الترتيب</td>
                <td class="px-3 py-2">✅ يضمن الترتيب</td>
              </tr>
              <tr>
                <td class="px-3 py-2 font-medium">استخدام</td>
                <td class="px-3 py-2">سكربتات مستقلة (مثل التحليلات)</td>
                <td class="px-3 py-2">سكربتات تعتمد على الـ DOM</td>
                <td class="px-3 py-2">نادر (بطيء)</td>
              </tr>
            </tbody>
          </table>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>// تنفيذ طبيعي (متزامن) - يوقف تحميل HTML
<script src="script.js"></script>

// Async - تحميل غير متزامن، تنفيذ فور التحميل
<script async src="script.js"></script>
// مناسب لـ: Google Analytics، إعلانات

// Defer - تحميل غير متزامن، تنفيذ بعد تحميل HTML
<script defer src="script.js"></script>
// مناسب لـ: سكربتات التطبيق الرئيسية

// ترتيب التنفيذ مع defer
<script defer src="script1.js"></script>
<script defer src="script2.js"></script>
// script1.js ثم script2.js (يحافظ على الترتيب)

// ترتيب التنفيذ مع async (غير مضمون)
<script async src="script1.js"></script>
<script async src="script2.js"></script>
// أي منهما يتحمّل أولاً يُنفذ أولاً</code></pre>
          </div>
        `,
      },
      {
        question: "ما هو الفرق بين DOMContentLoaded و load events؟",
        answer: `
          <ul class="list-disc pr-6 space-y-3">
            <li>
              <strong><code>DOMContentLoaded</code>:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>يُنفذ عندما يتم <strong>تحميل HTML بالكامل</strong> وبناء الـ DOM Tree.</li>
                <li><strong>لا ينتظر</strong> تحميل الصور، CSS، أو الـ iframes.</li>
                <li>مفيد عندما تريد <strong>التفاعل مع DOM</strong> (مثل إضافة Event Listeners).</li>
                <li>يحدث <strong>أسرع</strong> من load event.</li>
              </ul>
            </li>
            <li>
              <strong><code>load</code>:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>يُنفذ عندما يتم <strong>تحميل كل شيء</strong> (HTML، CSS، الصور، الـ iframes).</li>
                <li>يحدث <strong>بعد</strong> DOMContentLoaded.</li>
                <li>مفيد عندما تريد <strong>انتظار تحميل الصور</strong> أو الموارد الخارجية.</li>
              </ul>
            </li>
          </ul>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>// DOMContentLoaded - يحدث مبكراً
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM loaded!') // HTML تم تحميله
  // يمكن الوصول للعناصر
  document.getElementById('button').addEventListener('click', handleClick)
})

// load - يحدث متأخراً
window.addEventListener('load', () => {
  console.log('Page fully loaded!') // كل شيء تحمّل
  // يمكن قياس أبعاد الصور
  const img = document.querySelector('img')
  console.log(img.width, img.height)
})

// ترتيب التنفيذ:
// 1. DOMContentLoaded (عند تحميل HTML)
// 2. load (عند تحميل كل الموارد)

// iframe: في حالة iframes
// DOMContentLoaded لا ينتظر iframes
// load ينتظر iframes</code></pre>
          </div>
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
      // المستوى الأول: أساسيات Vue (20 سؤال)
      // ============================
      {
        question: "ما هو Vue.js؟ وما أهم مميزاته؟",
        answer: `
          <p><strong>Vue.js</strong> هو إطار عمل (Framework) <strong>تقدمي (Progressive)</strong> لبناء واجهات المستخدم (UI) باستخدام JavaScript.</p>
          <p class="mt-3"><strong>أهم المميزات:</strong></p>
          <ul class="list-disc pr-6 space-y-1 mt-1">
            <li><strong>سهولة التعلم:</strong> منحنى تعلم بسيط مقارنة بـ React أو Angular.</li>
            <li><strong>نظام التفاعل (Reactivity System):</strong> تحديث تلقائي للواجهة عند تغير البيانات.</li>
            <li><strong>المكونات (Components):</strong> بناء واجهات قابلة لإعادة الاستخدام.</li>
            <li><strong>Virtual DOM:</strong> أداء عالٍ من خلال تحديث الأجزاء المتغيرة فقط.</li>
            <li><strong>Composition API:</strong> (في Vue 3) طريقة أفضل لتنظيم الكود وإعادة استخدام المنطق.</li>
            <li><strong>TypeScript:</strong> دعم ممتاز للغاية.</li>
            <li><strong>أدوات متكاملة:</strong> Vue Router للتوجيه، Pinia لإدارة الحالة، و Vite كأداة بناء.</li>
          </ul>
        `,
      },
      {
        question: "ما الفرق بين Vue 2 و Vue 3؟",
        answer: `
          <ul class="list-disc pr-6 space-y-2">
            <li><strong>الأداء:</strong> Vue 3 أسرع وأخف (حجم أصغر بحوالي 30%).</li>
            <li><strong>نظام التفاعل:</strong> Vue 3 يستخدم <strong>Proxy</strong> بدلاً من <code>Object.defineProperty</code> في Vue 2.</li>
            <li><strong>Multiple Root Nodes:</strong> يمكن للمكون في Vue 3 أن يحتوي على أكثر من عنصر جذر واحد.</li>
            <li><strong>Composition API:</strong> أصبحت رسمية في Vue 3، وتتيح تنظيم الكود بشكل أفضل.</li>
            <li><strong>TypeScript:</strong> دعم أفضل بكثير في Vue 3 (الكود الأساسي مكتوب بـ TypeScript).</li>
            <li><strong>إدارة الحالة:</strong> Vue 3 يوصي باستخدام <strong>Pinia</strong> بدلاً من Vuex.</li>
            <li><strong>ميزات جديدة:</strong> Teleport، Suspense، و Fragments.</li>
          </ul>
        `,
      },
      {
        question: "ما هو Single File Component (SFC) في Vue؟",
        answer: `
          <p><strong>Single File Component (SFC)</strong> هو ملف بامتداد <code>.vue</code> يحتوي على ثلاثة أقسام:</p>
          <ul class="list-disc pr-6 space-y-2 mt-2">
            <li>
              <strong><code>&lt;template&gt;</code>:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>يحتوي على <strong>HTML</strong> الخاص بالمكون.</li>
                <li>يمكن استخدام تعليمات Vue مثل <code>v-if</code>، <code>v-for</code>.</li>
              </ul>
            </li>
            <li>
              <strong><code>&lt;script&gt;</code>:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>يحتوي على <strong>JavaScript</strong> الخاص بالمكون.</li>
                <li>يمكن استخدام <code>setup</code> مع Composition API.</li>
              </ul>
            </li>
            <li>
              <strong><code>&lt;style&gt;</code>:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>يحتوي على <strong>CSS</strong> الخاص بالمكون.</li>
                <li>يمكن استخدام <code>scoped</code> لتحديد النطاق.</li>
              </ul>
            </li>
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
          <p><strong>Composition API</strong> هي طريقة جديدة لكتابة المنطق في مكونات Vue 3، ظهرت كبديل لـ Options API.</p>
          <ul class="list-disc pr-6 space-y-2 mt-2">
            <li>
              <strong>المميزات:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>تنظيم الكود حسب <strong>الميزة (Feature)</strong> بدل النوع.</li>
                <li>سهولة إعادة استخدام المنطق عبر <strong>Composables</strong>.</li>
                <li>دعم ممتاز لـ TypeScript.</li>
                <li>أفضل للمكونات الكبيرة والمعقدة.</li>
              </ul>
            </li>
            <li>
              <strong>الاستخدام:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>تُستخدم مع <code>&lt;script setup&gt;</code> (اختصار).</li>
                <li>توفر دوال مثل <code>ref</code>، <code>reactive</code>، <code>computed</code>، <code>watch</code>.</li>
              </ul>
            </li>
          </ul>
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
          <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700 text-sm mt-3">
            <thead>
              <tr class="bg-gray-100 dark:bg-gray-700/50">
                <th class="px-3 py-2 text-right">الخاصية</th>
                <th class="px-3 py-2 text-right">Options API</th>
                <th class="px-3 py-2 text-right">Composition API</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
              <tr>
                <td class="px-3 py-2 font-medium">التنظيم</td>
                <td class="px-3 py-2">حسب <strong>النوع</strong> (data, methods, computed)</td>
                <td class="px-3 py-2">حسب <strong>الميزة</strong> (Feature)</td>
              </tr>
              <tr>
                <td class="px-3 py-2 font-medium">إعادة الاستخدام</td>
                <td class="px-3 py-2">Mixins (معقد)</td>
                <td class="px-3 py-2">Composables (سهل)</td>
              </tr>
              <tr>
                <td class="px-3 py-2 font-medium">TypeScript</td>
                <td class="px-3 py-2">محدود</td>
                <td class="px-3 py-2">ممتاز</td>
              </tr>
              <tr>
                <td class="px-3 py-2 font-medium">المكونات الكبيرة</td>
                <td class="px-3 py-2">صعبة الصيانة</td>
                <td class="px-3 py-2">سهلة الصيانة</td>
              </tr>
              <tr>
                <td class="px-3 py-2 font-medium">المكونات الصغيرة</td>
                <td class="px-3 py-2">مناسبة</td>
                <td class="px-3 py-2">قد تكون زائدة</td>
              </tr>
            </tbody>
          </table>
          <p class="mt-3"><strong>التوصية:</strong> استخدم Composition API مع <code>&lt;script setup&gt;</code> في Vue 3.</p>
        `,
      },
      {
        question: "ما هو <script setup> في Vue 3؟",
        answer: `
          <p><strong><code>&lt;script setup&gt;</code></strong> هو اختصار (Syntactic Sugar) لـ Composition API في Vue 3.</p>
          <ul class="list-disc pr-6 space-y-2 mt-2">
            <li>
              <strong>المميزات:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>كود <strong>أقل</strong> وأكثر وضوحاً.</li>
                <li>لا حاجة لـ <code>export default</code>.</li>
                <li>المتغيرات والدوال تُصبح متاحة تلقائياً في الـ Template.</li>
                <li>أداء أفضل في وقت التشغيل.</li>
              </ul>
            </li>
            <li>
              <strong>الاستخدام:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>يُستخدم مع <code>ref</code>، <code>reactive</code>، <code>computed</code>.</li>
                <li>يدعم <code>defineProps</code>، <code>defineEmits</code>، <code>defineExpose</code>.</li>
              </ul>
            </li>
          </ul>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>&lt;script setup&gt;
import { ref } from 'vue'

// متغير تفاعلي
const count = ref(0)

// دالة
const increment = () => count.value++

// Props
const props = defineProps({
  title: String
})

// Emits
const emit = defineEmits(['update'])

// متاح في template تلقائياً
&lt;/script&gt;</code></pre>
          </div>
        `,
      },
      {
        question: "ما هو ref في Vue 3؟",
        answer: `
          <p><strong><code>ref</code></strong> هو دالة في Composition API تُستخدم لإنشاء <strong>بيانات تفاعلية (Reactive)</strong>.</p>
          <ul class="list-disc pr-6 space-y-2 mt-2">
            <li>
              <strong>الخصائص:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>تعمل مع <strong>جميع أنواع البيانات</strong> (أساسية ومرجعية).</li>
                <li>تحتاج إلى استخدام <code>.value</code> عند الوصول أو التعديل في الـ script.</li>
                <li>في الـ Template، تُفك تلقائياً (لا تحتاج <code>.value</code>).</li>
              </ul>
            </li>
            <li>
              <strong>متى تستخدمها؟</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>للبيانات البسيطة (أرقام، نصوص، booleans).</li>
                <li>للكائنات والمصفوفات (لكن <code>reactive</code> أفضل للكائنات الكبيرة).</li>
              </ul>
            </li>
          </ul>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>&lt;script setup&gt;
import { ref } from 'vue'

// أنواع مختلفة
const count = ref(0)
const name = ref('Ahmed')
const isActive = ref(true)
const user = ref({ name: 'Ahmed', age: 30 })
const items = ref([1, 2, 3])

// الوصول والتعديل
count.value = 10
console.log(count.value) // 10

// في Template
// {{ count }} ← بدون .value
&lt;/script&gt;</code></pre>
          </div>
        `,
      },
      {
        question: "ما هو reactive في Vue 3؟",
        answer: `
          <p><strong><code>reactive</code></strong> هو دالة في Composition API تُستخدم لإنشاء <strong>كائنات تفاعلية (Reactive)</strong>.</p>
          <ul class="list-disc pr-6 space-y-2 mt-2">
            <li>
              <strong>الخصائص:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>تعمل فقط مع <strong>الكائنات والمصفوفات</strong> (لا تعمل مع الأنواع الأساسية).</li>
                <li><strong>لا تحتاج <code>.value</code></strong>، تتعامل مع الكائن مباشرة.</li>
                <li><strong>تفقد التفاعلية (Reactivity)</strong> إذا قمت بإعادة تعيين الكائن بالكامل.</li>
              </ul>
            </li>
            <li>
              <strong>متى تستخدمها؟</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>للكائنات الكبيرة والمعقدة.</li>
                <li>عندما لا تحتاج لإعادة تعيين الكائن بالكامل.</li>
              </ul>
            </li>
          </ul>
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

// الوصول والتعديل - بدون .value
user.age = 31
console.log(user.age) // 31

// ⚠️ تحذير: إعادة التعيين تفقد التفاعلية
// user = reactive({ name: 'Ali' }) // ❌ خطأ
// الحل: استخدم Object.assign
Object.assign(user, { name: 'Ali', age: 25 })
&lt;/script&gt;</code></pre>
          </div>
          <p class="mt-2 text-sm text-blue-600">💡 <strong>نصيحة:</strong> استخدم <code>ref</code> في أغلب الحالات، و <code>reactive</code> فقط مع الكائنات الكبيرة.</p>
        `,
      },
      {
        question: "ما الفرق بين ref و reactive في Vue 3؟",
        answer: `
          <ul class="list-disc pr-6 space-y-3">
            <li>
              <strong><code>ref</code>:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>تعمل مع <strong>جميع أنواع البيانات</strong> (الأساسية والمرجعية).</li>
                <li>تحتاج إلى استخدام <code>.value</code> في الـ script.</li>
                <li>تُفك تلقائياً في الـ Template.</li>
                <li>تحتفظ بالتفاعلية عند إعادة التعيين.</li>
              </ul>
            </li>
            <li>
              <strong><code>reactive</code>:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>تعمل فقط مع <strong>الكائنات والمصفوفات</strong>.</li>
                <li><strong>لا تحتاج <code>.value</code></strong>.</li>
                <li><strong>تفقد التفاعلية</strong> عند إعادة التعيين بالكامل.</li>
              </ul>
            </li>
          </ul>
          <div class="mt-3 p-3 bg-blue-50 dark:bg-blue-900/20 border-r-4 border-blue-500 rounded">
            <p class="text-sm"><strong>💡 التوصية:</strong> استخدم <code>ref</code> في أغلب الحالات، واستخدم <code>reactive</code> فقط مع الكائنات الكبيرة التي لا تحتاج لإعادة تعيينها.</p>
          </div>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>// ref - مع أنواع مختلفة
const count = ref(0)
const user = ref({ name: 'Ahmed' })
user.value.name = 'Ali' // ✅ تعمل

// reactive - مع الكائنات فقط
const user2 = reactive({ name: 'Ahmed' })
user2.name = 'Ali' // ✅ تعمل

// ⚠️ ref تحتفظ بالتفاعلية عند إعادة التعيين
let count2 = ref(0)
count2.value = 10 // ✅ تبقى تفاعلية

// ⚠️ reactive تفقد التفاعلية عند إعادة التعيين
let user3 = reactive({ name: 'Ahmed' })
user3 = reactive({ name: 'Ali' }) // ❌ تفقد التفاعلية</code></pre>
          </div>
        `,
      },
      {
        question: "ما هو computed في Vue؟",
        answer: `
          <p><strong><code>computed</code> (الخاصية المحسوبة):</strong> هي قيمة تعتمد على بيانات أخرى (ref أو reactive)، وتُحسب <strong>تلقائياً</strong> عند تغير هذه البيانات.</p>
          <ul class="list-disc pr-6 space-y-2 mt-2">
            <li>
              <strong>المميزات:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li><strong>التخزين المؤقت (Caching):</strong> تُعيد استخدام النتيجة المحسوبة طالما أن التبعيات لم تتغير.</li>
                <li><strong>التفاعلية:</strong> تتحديث تلقائياً عند تغير أي من التبعيات.</li>
              </ul>
            </li>
            <li>
              <strong>متى نستخدمها؟</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>عرض قيمة مشتقة من بيانات أخرى (مثل الاسم الكامل).</li>
                <li>عمليات حسابية ثقيلة تحتاج تخزيناً مؤقتاً.</li>
                <li>فلترة أو ترتيب قائمة بناءً على مدخلات المستخدم.</li>
              </ul>
            </li>
          </ul>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>&lt;script setup&gt;
import { ref, computed } from 'vue'

const firstName = ref('Ahmed')
const lastName = ref('Mohamed')

// computed - للقراءة فقط
const fullName = computed(() => {
  return firstName.value + ' ' + lastName.value
})

// computed - قابل للقراءة والكتابة
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
console.log(firstName.value) // 'Ali'
console.log(lastName.value) // 'Hassan'
&lt;/script&gt;</code></pre>
          </div>
          <p class="mt-2 text-sm text-gray-500">⚠️ لا تستخدم <code>computed</code> لإجراء عمليات غير متزامنة (مثل طلبات API)، استخدم <code>watch</code> أو دوال عادية.</p>
        `,
      },
      {
        question: "ما الفرق بين computed و methods في Vue؟",
        answer: `
          <ul class="list-disc pr-6 space-y-3">
            <li>
              <strong><code>computed</code> (خاصية محسوبة):</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>تُحسب <strong>تلقائياً</strong> عند تغير التبعيات.</li>
                <li>تُخزن النتيجة <strong>مؤقتاً (Cached)</strong>.</li>
                <li>تُستخدم للقيم المشتقة.</li>
                <li>لا تأخذ معاملات (Parameters).</li>
              </ul>
            </li>
            <li>
              <strong><code>methods</code> (دالة):</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>تُنفذ <strong>عند الاستدعاء</strong> فقط.</li>
                <li><strong>لا تُخزن</strong> النتيجة (تُحسب في كل مرة).</li>
                <li>تُستخدم للعمليات التي تحتاج معاملات أو أحداث.</li>
                <li>تأخذ معاملات (Parameters).</li>
              </ul>
            </li>
          </ul>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>&lt;script setup&gt;
import { ref, computed } from 'vue'

const items = ref([1, 2, 3, 4, 5])

// computed - تخزين مؤقت
const doubleComputed = computed(() => {
  console.log('Computed executed')
  return items.value.map(item => item * 2)
})

// method - تنفيذ في كل مرة
const doubleMethod = (items) => {
  console.log('Method executed')
  return items.map(item => item * 2)
}

// computed تُنفذ مرة واحدة (وتُخزن)
console.log(doubleComputed.value) // 'Computed executed' (مرة واحدة)
console.log(doubleComputed.value) // (من التخزين المؤقت)

// method تُنفذ في كل مرة
console.log(doubleMethod(items.value)) // 'Method executed'
console.log(doubleMethod(items.value)) // 'Method executed'
&lt;/script&gt;</code></pre>
          </div>
        `,
      },
      {
        question: "ما هو watch في Vue؟",
        answer: `
          <p><strong><code>watch</code></strong> هو دالة في Vue تُستخدم <strong>لمراقبة التغييرات</strong> في البيانات التفاعلية (ref أو reactive) وتنفيذ كود استجابة لهذه التغييرات.</p>
          <ul class="list-disc pr-6 space-y-2 mt-2">
            <li>
              <strong>الخصائص:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>تراقب <strong>مصدراً محدداً</strong> (ref واحد أو أكثر).</li>
                <li>تُنفذ <strong>عند تغير المصدر</strong> فقط.</li>
                <li>تتيح الوصول إلى <strong>القيمة القديمة والجديدة</strong>.</li>
              </ul>
            </li>
            <li>
              <strong>متى نستخدمها؟</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>طلب API عند تغير قيمة البحث.</li>
                <li>تخزين البيانات في Local Storage.</li>
                <li>تنفيذ عمليات جانبية (Side Effects).</li>
              </ul>
            </li>
          </ul>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>&lt;script setup&gt;
import { ref, watch } from 'vue'

const searchQuery = ref('')
const results = ref([])

// watch على ref واحد
watch(searchQuery, (newValue, oldValue) => {
  console.log('Search changed from', oldValue, 'to', newValue)
  // طلب API
  fetchResults(newValue)
})

// watch على عدة مصادر
const firstName = ref('Ahmed')
const lastName = ref('Mohamed')

watch([firstName, lastName], ([newFirst, newLast], [oldFirst, oldLast]) => {
  console.log('Name changed:', newFirst, newLast)
})

// watch مع deep: true (للكائنات المتداخلة)
const user = ref({ name: 'Ahmed', address: { city: 'Cairo' } })
watch(user, (newUser) => {
  console.log('User changed:', newUser)
}, { deep: true })

// watch مع immediate: true (ينفذ فوراً)
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
          <ul class="list-disc pr-6 space-y-3">
            <li>
              <strong><code>watch</code>:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>تراقب <strong>مصدراً محدداً</strong> (ref واحد أو أكثر).</li>
                <li>تُنفذ <strong>عند تغير المصدر</strong> فقط.</li>
                <li>تتيح الوصول إلى <strong>القيمة القديمة والجديدة</strong>.</li>
                <li>مفيدة لـ Side Effects.</li>
              </ul>
            </li>
            <li>
              <strong><code>watchEffect</code>:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li><strong>تُنفذ فوراً</strong> عند تعريفها.</li>
                <li>تتتبع <strong>جميع التبعيات</strong> المستخدمة داخلها تلقائياً.</li>
                <li>لا تحتاج لتحديد المصدر يدوياً.</li>
                <li>مفيدة لتأثيرات جانبية تعتمد على عدة متغيرات.</li>
              </ul>
            </li>
          </ul>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>&lt;script setup&gt;
import { ref, watch, watchEffect } from 'vue'

const count = ref(0)
const double = ref(0)

// watch - تحتاج تحديد المصدر
watch(count, (newValue) => {
  double.value = newValue * 2
})

// watchEffect - تكتشف التبعيات تلقائياً
watchEffect(() => {
  console.log('Count is:', count.value)
  // أي تغير في count يعيد التنفيذ
})

// watchEffect - تنفذ فوراً
const name = ref('Ahmed')
watchEffect(() => {
  console.log('Name:', name.value)
})
// تطبع فوراً: 'Name: Ahmed'

// watch - لا تنفذ فوراً (إلا مع immediate: true)
watch(name, (newName) => {
  console.log('Name changed:', newName)
})
// لا تطبع شيئاً (حتى يتغير name)
&lt;/script&gt;</code></pre>
          </div>
        `,
      },
      {
        question: "ما هو v-if في Vue؟",
        answer: `
          <p><strong><code>v-if</code></strong> هو تعليمة (Directive) في Vue تُستخدم <strong>لإضافة أو حذف</strong> عنصر من الـ DOM بناءً على شرط.</p>
          <ul class="list-disc pr-6 space-y-2 mt-2">
            <li>
              <strong>الخصائص:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>يضيف أو <strong>يحذف</strong> العنصر بالكامل من الـ DOM.</li>
                <li>تكلفته <strong>أعلى</strong> عند التبديل لأنه يُعيد إنشاء العنصر بالكامل.</li>
                <li>مثالي للعناصر التي <strong>تتغير نادراً</strong>.</li>
              </ul>
            </li>
            <li>
              <strong>المشتقات:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li><code>v-else-if</code> - شرط آخر.</li>
                <li><code>v-else</code> - الحالة الافتراضية.</li>
              </ul>
            </li>
          </ul>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>&lt;template&gt;
  &lt;div&gt;
    &lt;button @click="show = !show"&gt;Toggle&lt;/button&gt;

    &lt;!-- v-if بسيط --&gt;
    &lt;p v-if="show"&gt;Visible&lt;/p&gt;

    &lt;!-- v-if مع v-else --&gt;
    &lt;p v-if="show"&gt;Visible&lt;/p&gt;
    &lt;p v-else&gt;Hidden&lt;/p&gt;

    &lt;!-- v-if مع v-else-if و v-else --&gt;
    &lt;p v-if="status === 'success'"&gt;✅ Success&lt;/p&gt;
    &lt;p v-else-if="status === 'loading'"&gt;⏳ Loading...&lt;/p&gt;
    &lt;p v-else&gt;❌ Error&lt;/p&gt;

    &lt;!-- v-if مع v-for (استخدم v-for أولاً) --&gt;
    &lt;div v-for="item in items" :key="item.id"&gt;
      &lt;p v-if="item.active"&gt;{{ item.name }}&lt;/p&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue'

const show = ref(true)
const status = ref('success')
const items = ref([
  { id: 1, name: 'Item 1', active: true },
  { id: 2, name: 'Item 2', active: false }
])
&lt;/script&gt;</code></pre>
          </div>
        `,
      },
      {
        question: "ما الفرق بين v-if و v-show في Vue؟",
        answer: `
          <ul class="list-disc pr-6 space-y-3">
            <li>
              <strong><code>v-if</code>:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>يضيف أو <strong>يحذف</strong> العنصر بالكامل من الـ DOM.</li>
                <li>تكلفته <strong>أعلى</strong> عند التبديل (إعادة إنشاء).</li>
                <li>مثالي للعناصر التي <strong>تتغير نادراً</strong>.</li>
                <li>يدعم <code>v-else-if</code> و <code>v-else</code>.</li>
              </ul>
            </li>
            <li>
              <strong><code>v-show</code>:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>يترك العنصر في الـ DOM لكن يتحكم في ظهوره بـ <code>display: none</code>.</li>
                <li>تكلفته <strong>أقل</strong> عند التبديل (لا يُعيد الإنشاء).</li>
                <li>مثالي للعناصر التي <strong>تظهر وتختفي كثيراً</strong> (مثل Tabs، Modals).</li>
                <li><strong>لا يدعم</strong> <code>v-else-if</code> أو <code>v-else</code>.</li>
              </ul>
            </li>
          </ul>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>&lt;template&gt;
  &lt;div&gt;
    &lt;button @click="show = !show"&gt;Toggle&lt;/button&gt;

    &lt;!-- v-if: يحذف ويضيف العنصر --&gt;
    &lt;p v-if="show"&gt;v-if: Visible&lt;/p&gt;

    &lt;!-- v-show: يغير display: none --&gt;
    &lt;p v-show="show"&gt;v-show: Visible&lt;/p&gt;

    &lt;!-- v-if مع كتل كبيرة --&gt;
    &lt;div v-if="show"&gt;
      &lt;!-- محتوى كبير --&gt;
    &lt;/div&gt;

    &lt;!-- v-show مع تبديل متكرر --&gt;
    &lt;div v-show="activeTab === 'home'"&gt;Home Content&lt;/div&gt;
    &lt;div v-show="activeTab === 'about'"&gt;About Content&lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue'

const show = ref(true)
const activeTab = ref('home')
&lt;/script&gt;</code></pre>
          </div>
          <div class="mt-3 p-3 bg-yellow-50 dark:bg-yellow-900/20 border-r-4 border-yellow-500 rounded">
            <p class="text-sm"><strong>⚡ معلومة:</strong> <code>v-if</code> و <code>v-show</code> لا يعملان معاً على نفس العنصر، استخدم أحدهما فقط.</p>
          </div>
        `,
      },
      {
        question: "ما هو v-for في Vue؟",
        answer: `
          <p><strong><code>v-for</code></strong> هو تعليمة (Directive) في Vue تُستخدم <strong>لتكرار</strong> عناصر بناءً على مصفوفة أو كائن.</p>
          <ul class="list-disc pr-6 space-y-2 mt-2">
            <li>
              <strong>الاستخدامات:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li><strong>مع المصفوفات:</strong> <code>v-for="item in items"</code> أو <code>v-for="(item, index) in items"</code></li>
                <li><strong>مع الكائنات:</strong> <code>v-for="(value, key) in object"</code></li>
                <li><strong>مع الأرقام:</strong> <code>v-for="n in 10"</code></li>
              </ul>
            </li>
            <li>
              <strong>أهمية <code>key</code>:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>تساعد Vue على <strong>تتبع</strong> هوية العناصر بشكل صحيح.</li>
                <li>تمنع مشاكل في الـ Re-rendering.</li>
                <li>يجب أن تكون <strong>فريدة</strong> لكل عنصر.</li>
              </ul>
            </li>
          </ul>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>&lt;template&gt;
  &lt;div&gt;
    &lt;!-- مصفوفة --&gt;
    &lt;ul&gt;
      &lt;li v-for="item in items" :key="item.id"&gt;
        {{ item.name }}
      &lt;/li&gt;
    &lt;/ul&gt;

    &lt;!-- مصفوفة مع index --&gt;
    &lt;ul&gt;
      &lt;li v-for="(item, index) in items" :key="item.id"&gt;
        {{ index + 1 }} - {{ item.name }}
      &lt;/li&gt;
    &lt;/ul&gt;

    &lt;!-- كائن --&gt;
    &lt;ul&gt;
      &lt;li v-for="(value, key) in user" :key="key"&gt;
        {{ key }}: {{ value }}
      &lt;/li&gt;
    &lt;/ul&gt;

    &lt;!-- أرقام --&gt;
    &lt;ul&gt;
      &lt;li v-for="n in 10" :key="n"&gt;
        {{ n }}
      &lt;/li&gt;
    &lt;/ul&gt;

    &lt;!-- v-for مع v-if (استخدم v-for أولاً) --&gt;
    &lt;ul&gt;
      &lt;li v-for="item in items" v-if="item.active" :key="item.id"&gt;
        {{ item.name }}
      &lt;/li&gt;
    &lt;/ul&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue'

const items = ref([
  { id: 1, name: 'Item 1', active: true },
  { id: 2, name: 'Item 2', active: false },
  { id: 3, name: 'Item 3', active: true }
])

const user = ref({
  name: 'Ahmed',
  age: 30,
  city: 'Cairo'
})
&lt;/script&gt;</code></pre>
          </div>
        `,
      },
      {
        question: "ما أهمية key في v-for؟",
        answer: `
          <p><strong><code>key</code></strong> هو خاصية تُستخدم مع <code>v-for</code> لمساعدة Vue على <strong>تتبع هوية العناصر</strong> بشكل صحيح.</p>
          <ul class="list-disc pr-6 space-y-2 mt-2">
            <li>
              <strong>لماذا هو مهم؟</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>يساعد Vue على <strong>تحديد</strong> العناصر التي تغيرت، أُضيفت، أو حُذفت.</li>
                <li>يحسن <strong>الأداء</strong> عن طريق إعادة استخدام العناصر الموجودة بدلاً من إعادة إنشائها.</li>
                <li>يمنع <strong>مشاكل</strong> في الـ Re-rendering (مثل فقدان التركيز في المدخلات).</li>
              </ul>
            </li>
            <li>
              <strong>ماذا تستخدم كـ key؟</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li><strong>مفضل:</strong> <code>id</code> فريد من البيانات.</li>
                <li><strong>جيد:</strong> <code>index</code> فقط إذا كانت القائمة ثابتة (لا تتغير).</li>
                <li><strong>سيء:</strong> <code>Math.random()</code> أو <code>Date.now()</code> (تتغير في كل مرة).</li>
              </ul>
            </li>
          </ul>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>&lt;template&gt;
  &lt;div&gt;
    &lt;!-- ✅ صحيح: استخدام id فريد --&gt;
    &lt;li v-for="item in items" :key="item.id"&gt;
      {{ item.name }}
    &lt;/li&gt;

    &lt;!-- ✅ مقبول: استخدام index (إذا كانت القائمة ثابتة) --&gt;
    &lt;li v-for="(item, index) in items" :key="index"&gt;
      {{ item.name }}
    &lt;/li&gt;

    &lt;!-- ❌ خطأ: استخدام Math.random() --&gt;
    &lt;li v-for="item in items" :key="Math.random()"&gt;
      {{ item.name }}
    &lt;/li&gt;

    &lt;!-- ❌ خطأ: عدم استخدام key (تحذير في Console) --&gt;
    &lt;li v-for="item in items"&gt;
      {{ item.name }}
    &lt;/li&gt;

    &lt;!-- ✅ مع كائنات: استخدام المفتاح --&gt;
    &lt;li v-for="(value, key) in user" :key="key"&gt;
      {{ key }}: {{ value }}
    &lt;/li&gt;
  &lt;/div&gt;
&lt;/template&gt;</code></pre>
          </div>
        `,
      },
      {
        question: "ما هو v-model في Vue؟",
        answer: `
          <p><strong><code>v-model</code></strong> هو تعليمة (Directive) في Vue تُستخدم لإنشاء <strong>ربط ثنائي الاتجاه (Two-Way Binding)</strong> بين البيانات والعناصر في الـ Template.</p>
          <ul class="list-disc pr-6 space-y-2 mt-2">
            <li>
              <strong>الاستخدامات:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li><strong>مع <code>input</code>:</strong> <code>v-model="text"</code></li>
                <li><strong>مع <code>textarea</code>:</strong> <code>v-model="message"</code></li>
                <li><strong>مع <code>checkbox</code>:</strong> <code>v-model="isChecked"</code></li>
                <li><strong>مع <code>radio</code>:</strong> <code>v-model="selected"</code></li>
                <li><strong>مع <code>select</code>:</strong> <code>v-model="selectedOption"</code></li>
              </ul>
            </li>
            <li>
              <strong>المعدلات (Modifiers):</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li><code>.lazy</code> - يُحدث عند <code>change</code> بدلاً من <code>input</code>.</li>
                <li><code>.number</code> - يحول القيمة إلى رقم.</li>
                <li><code>.trim</code> - يزيل المسافات الزائدة.</li>
              </ul>
            </li>
          </ul>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>&lt;template&gt;
  &lt;div&gt;
    &lt;!-- input text --&gt;
    &lt;input v-model="text" placeholder="Type something" /&gt;
    &lt;p&gt;Text: {{ text }}&lt;/p&gt;

    &lt;!-- textarea --&gt;
    &lt;textarea v-model="message"&gt;&lt;/textarea&gt;

    &lt;!-- checkbox --&gt;
    &lt;input type="checkbox" v-model="isChecked" /&gt;
    &lt;p&gt;Checked: {{ isChecked }}&lt;/p&gt;

    &lt;!-- radio --&gt;
    &lt;input type="radio" value="A" v-model="selected" /&gt; A
    &lt;input type="radio" value="B" v-model="selected" /&gt; B

    &lt;!-- select --&gt;
    &lt;select v-model="selectedOption"&gt;
      &lt;option value="option1"&gt;Option 1&lt;/option&gt;
      &lt;option value="option2"&gt;Option 2&lt;/option&gt;
    &lt;/select&gt;

    &lt;!-- modifiers --&gt;
    &lt;input v-model.lazy="text" /&gt; &lt;!-- يحدث عند change --&gt;
    &lt;input v-model.number="age" type="number" /&gt; &lt;!-- يحول إلى رقم --&gt;
    &lt;input v-model.trim="name" /&gt; &lt;!-- يزيل المسافات --&gt;

    &lt;!-- v-model في مكون مخصص --&gt;
    &lt;CustomInput v-model="customText" /&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue'

const text = ref('')
const message = ref('')
const isChecked = ref(false)
const selected = ref('A')
const selectedOption = ref('option1')
const customText = ref('')
&lt;/script&gt;</code></pre>
          </div>
        `,
      },
      {
        question: "ما الفرق بين v-bind و v-model؟",
        answer: `
          <ul class="list-disc pr-6 space-y-3">
            <li>
              <strong><code>v-bind</code> (أو <code>:</code>):</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>ربط <strong>أحادي الاتجاه</strong> (من البيانات إلى الـ DOM).</li>
                <li>يُستخدم لربط <strong>أي خاصية</strong> (attributes) بعنصر.</li>
                <li>مثال: <code>&lt;input :value="text" /&gt;</code></li>
              </ul>
            </li>
            <li>
              <strong><code>v-model</code>:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>ربط <strong>ثنائي الاتجاه</strong> (بيانات ↔ DOM).</li>
                <li>اختصار لـ <code>v-bind:value</code> + <code>@input</code>.</li>
                <li>يعمل فقط مع <strong>العناصر النمطية</strong> (input, textarea, select).</li>
                <li>مثال: <code>&lt;input v-model="text" /&gt;</code></li>
              </ul>
            </li>
          </ul>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>&lt;template&gt;
  &lt;div&gt;
    &lt;!-- v-bind: ربط أحادي الاتجاه --&gt;
    &lt;input :value="text" @input="text = $event.target.value" /&gt;
    &lt;!-- يعادل v-model --&gt;

    &lt;!-- v-model: ربط ثنائي الاتجاه --&gt;
    &lt;input v-model="text" /&gt;

    &lt;!-- v-bind مع خصائص أخرى --&gt;
    &lt;img :src="imageUrl" /&gt;
    &lt;a :href="link"&gt;Link&lt;/a&gt;
    &lt;div :class="{ active: isActive }"&gt;Class&lt;/div&gt;

    &lt;!-- v-model مع معدلات --&gt;
    &lt;input v-model.number="age" type="number" /&gt;
    &lt;input v-model.trim="name" /&gt;
    &lt;input v-model.lazy="description" /&gt;
  &lt;/div&gt;
&lt;/template&gt;</code></pre>
          </div>
        `,
      },
      {
        question: "ما هو v-on (اختصار @) في Vue؟",
        answer: `
          <p><strong><code>v-on</code></strong> (اختصار <code>@</code>) هو تعليمة (Directive) في Vue تُستخدم <strong>للاستماع إلى الأحداث</strong> (Events) وتنفيذ دوال عند حدوثها.</p>
          <ul class="list-disc pr-6 space-y-2 mt-2">
            <li>
              <strong>الاستخدامات:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li><strong>أحداث DOM:</strong> <code>@click</code>، <code>@input</code>، <code>@submit</code>، <code>@keyup</code>.</li>
                <li><strong>أحداث مخصصة:</strong> <code>@custom-event</code> من المكونات الابنة.</li>
              </ul>
            </li>
            <li>
              <strong>المعدلات (Modifiers):</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li><code>.stop</code> - يوقف انتشار الحدث (event.stopPropagation).</li>
                <li><code>.prevent</code> - يمنع السلوك الافتراضي (event.preventDefault).</li>
                <li><code>.once</code> - ينفذ مرة واحدة فقط.</li>
                <li><code>.self</code> - ينفذ فقط إذا كان العنصر هو الهدف.</li>
                <li><code>.enter</code> - ينفذ عند ضغط Enter.</li>
                <li><code>.debounce</code> - (في Vue 3) تأخير التنفيذ.</li>
              </ul>
            </li>
          </ul>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>&lt;template&gt;
  &lt;div&gt;
    &lt;!-- أحداث بسيطة --&gt;
    &lt;button @click="handleClick"&gt;Click me&lt;/button&gt;
    &lt;input @input="handleInput" /&gt;
    &lt;form @submit.prevent="handleSubmit"&gt;
      &lt;!-- .prevent يمنع إعادة تحميل الصفحة --&gt;
      &lt;button type="submit"&gt;Submit&lt;/button&gt;
    &lt;/form&gt;

    &lt;!-- معاملات (Arguments) --&gt;
    &lt;button @click="handleClickWithParam('Hello')"&gt;Click&lt;/button&gt;
    &lt;button @click="handleClickWithEvent($event, 'Hello')"&gt;Click&lt;/button&gt;

    &lt;!-- معدلات (Modifiers) --&gt;
    &lt;button @click.stop="handleClick"&gt;Stop Propagation&lt;/button&gt;
    &lt;a @click.prevent="handleClick" href="#"&gt;Prevent Default&lt;/a&gt;
    &lt;button @click.once="handleClick"&gt;Once&lt;/button&gt;
    &lt;input @keyup.enter="handleEnter" /&gt;

    &lt;!-- أحداث مخصصة من المكونات --&gt;
    &lt;ChildComponent @custom-event="handleCustomEvent" /&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
const handleClick = () => console.log('Clicked')
const handleInput = (event) => console.log(event.target.value)
const handleSubmit = () => console.log('Submitted')
const handleClickWithParam = (msg) => console.log(msg)
const handleClickWithEvent = (event, msg) => console.log(event, msg)
const handleEnter = (event) => console.log('Enter pressed')
const handleCustomEvent = (data) => console.log('Custom event:', data)
&lt;/script&gt;</code></pre>
          </div>
        `,
      },
      {
        question: "ما هو v-bind (اختصار :) في Vue؟",
        answer: `
          <p><strong><code>v-bind</code></strong> (اختصار <code>:</code>) هو تعليمة (Directive) في Vue تُستخدم <strong>لربط البيانات</strong> بالخصائص (Attributes) والـ Props.</p>
          <ul class="list-disc pr-6 space-y-2 mt-2">
            <li>
              <strong>الاستخدامات:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li><strong>ربط الخصائص HTML:</strong> <code>:src="imageUrl"</code>، <code>:href="link"</code></li>
                <li><strong>ربط الـ Props:</strong> <code>:user="userData"</code></li>
                <li><strong>ربط الـ Classes و Styles:</strong> <code>:class="{ active: isActive }"</code></li>
              </ul>
            </li>
            <li>
              <strong>الاستخدامات المتقدمة:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li><strong>ربط كائن كامل:</strong> <code>v-bind="object"</code></li>
                <li><strong>ربط ديناميكي:</strong> <code>:[attributeName]="value"</code></li>
              </ul>
            </li>
          </ul>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>&lt;template&gt;
  &lt;div&gt;
    &lt;!-- ربط خصائص HTML --&gt;
    &lt;img :src="imageUrl" :alt="imageAlt" /&gt;
    &lt;a :href="link" :target="target"&gt;Link&lt;/a&gt;

    &lt;!-- ربط Classes --&gt;
    &lt;div :class="{ active: isActive, 'text-bold': isBold }"&gt;
      Class Binding
    &lt;/div&gt;

    &lt;!-- ربط Styles --&gt;
    &lt;div :style="{ color: textColor, fontSize: fontSize + 'px' }"&gt;
      Style Binding
    &lt;/div&gt;

    &lt;!-- ربط Props للمكونات --&gt;
    &lt;ChildComponent :user="userData" :is-visible="show" /&gt;

    &lt;!-- ربط كائن كامل --&gt;
    &lt;div v-bind="allAttributes"&gt;All Attributes&lt;/div&gt;

    &lt;!-- ربط ديناميكي (Dynamic Binding) --&gt;
    &lt;div :[attributeName]="value"&gt;Dynamic Attribute&lt;/div&gt;

    &lt;!-- اختصار: --&gt;
    &lt;img :src="imageUrl" /&gt; &lt;!-- يعادل v-bind:src="imageUrl" --&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue'

const imageUrl = ref('https://example.com/image.jpg')
const imageAlt = ref('Example image')
const link = ref('https://example.com')
const target = ref('_blank')
const isActive = ref(true)
const isBold = ref(false)
const textColor = ref('blue')
const fontSize = ref(20)
const userData = ref({ name: 'Ahmed', age: 30 })
const show = ref(true)
const allAttributes = ref({ id: 'main', class: 'container', 'data-test': 'test' })
const attributeName = ref('data-custom')
const value = ref('custom-value')
&lt;/script&gt;</code></pre>
          </div>
        `,
      },
      {
        question: "ما هي Lifecycle Hooks في Vue 3؟",
        answer: `
          <p><strong>Lifecycle Hooks</strong> هي دوال تتيح لك تنفيذ كود في <strong>مراحل محددة</strong> من دورة حياة المكون (من الإنشاء إلى التدمير).</p>
          <ul class="list-disc pr-6 space-y-2 mt-2">
            <li>
              <strong>ترتيب التنفيذ:</strong>
              <ol class="list-decimal pr-6 space-y-1 mt-1">
                <li><code>onBeforeMount</code> - قبل إضافة المكون إلى الـ DOM.</li>
                <li><code>onMounted</code> - بعد إضافة المكون (مكان <strong>مثالي</strong> لطلبات API).</li>
                <li><code>onBeforeUpdate</code> - قبل إعادة الرسم (Re-render).</li>
                <li><code>onUpdated</code> - بعد إعادة الرسم.</li>
                <li><code>onBeforeUnmount</code> - قبل تدمير المكون (مكان <strong>مثالي</strong> للتنظيف).</li>
                <li><code>onUnmounted</code> - بعد تدمير المكون.</li>
                <li><code>onActivated</code> / <code>onDeactivated</code> - مع <code>keep-alive</code>.</li>
                <li><code>onErrorCaptured</code> - عند التقاط خطأ من مكون ابن.</li>
              </ol>
            </li>
          </ul>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>&lt;script setup&gt;
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'

console.log('1. Setup (sync code)')

onBeforeMount(() => {
  console.log('2. onBeforeMount')
})

onMounted(() => {
  console.log('3. onMounted - DOM ready!')
  // ✅ طلبات API هنا
  fetchData()
})

onBeforeUpdate(() => {
  console.log('4. onBeforeUpdate')
})

onUpdated(() => {
  console.log('5. onUpdated')
})

onBeforeUnmount(() => {
  console.log('6. onBeforeUnmount')
  // ✅ تنظيف Event Listeners
})

onUnmounted(() => {
  console.log('7. onUnmounted')
})

const fetchData = async () => {
  // طلب API
}
&lt;/script&gt;</code></pre>
          </div>
          <div class="mt-3 p-3 bg-blue-50 dark:bg-blue-900/20 border-r-4 border-blue-500 rounded">
            <p class="text-sm"><strong>📌 ملاحظة:</strong> في Vue 2، كانت تُكتب كـ <code>mounted()</code>، لكن في Vue 3 Composition API نستخدم <code>onMounted()</code>.</p>
          </div>
        `,
      },
      // ============================
      // المستوى الثاني: متوسط Vue (30 سؤال)
      // ============================
      {
        question: "ما هو Pinia؟ وما الفرق بينه وبين Vuex؟",
        answer: `
          <p><strong>Pinia</strong> هو مكتبة إدارة الحالة (State Management) الرسمية لـ Vue 3، وهو البديل الموصى به لـ Vuex.</p>
          <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700 text-sm mt-3">
            <thead>
              <tr class="bg-gray-100 dark:bg-gray-700/50">
                <th class="px-3 py-2 text-right">الخاصية</th>
                <th class="px-3 py-2 text-right">Pinia</th>
                <th class="px-3 py-2 text-right">Vuex</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
              <tr>
                <td class="px-3 py-2 font-medium">المعقدية</td>
                <td class="px-3 py-2">أبسط (بدون Mutations)</td>
                <td class="px-3 py-2">أكثر تعقيداً (Mutations + Actions)</td>
              </tr>
              <tr>
                <td class="px-3 py-2 font-medium">TypeScript</td>
                <td class="px-3 py-2">دعم ممتاز (استدلال تلقائي)</td>
                <td class="px-3 py-2">دعم محدود (يحتاج تكوين)</td>
              </tr>
              <tr>
                <td class="px-3 py-2 font-medium">Composition API</td>
                <td class="px-3 py-2">دعم طبيعي</td>
                <td class="px-3 py-2">محدود</td>
              </tr>
              <tr>
                <td class="px-3 py-2 font-medium">الوزن</td>
                <td class="px-3 py-2">أخف وزناً</td>
                <td class="px-3 py-2">أثقل</td>
              </tr>
              <tr>
                <td class="px-3 py-2 font-medium">SSR</td>
                <td class="px-3 py-2">دعم أفضل</td>
                <td class="px-3 py-2">دعم جيد</td>
              </tr>
            </tbody>
          </table>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>// Pinia Store
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0
  }),
  actions: {
    increment() {
      this.count++
    }
  },
  getters: {
    doubleCount: (state) => state.count * 2
  }
})

// استخدام Pinia
const store = useCounterStore()
store.increment()
console.log(store.doubleCount)</code></pre>
          </div>
        `,
      },
      {
        question: "كيف تنشئ Store في Pinia؟",
        answer: `
          <p>في Pinia، هناك <strong>طريقتان</strong> لإنشاء Store:</p>
          <ul class="list-disc pr-6 space-y-3 mt-2">
            <li>
              <strong>Option Store (مثل Vuex):</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>تستخدم <code>state</code>، <code>actions</code>، <code>getters</code>.</li>
                <li>مناسبة للـ Stores البسيطة.</li>
              </ul>
            </li>
            <li>
              <strong>Setup Store (مثل Composition API):</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>تستخدم <code>ref</code>، <code>reactive</code>، <code>computed</code>.</li>
                <li>أكثر مرونة ومناسبة للـ Stores المعقدة.</li>
              </ul>
            </li>
          </ul>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>// 1. Option Store
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

// 2. Setup Store
export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)

  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})

// استخدام Setup Store
const store = useCounterStore()
store.increment()
console.log(store.doubleCount)</code></pre>
          </div>
        `,
      },
      {
        question: "كيف تصل إلى State و Actions في Pinia؟",
        answer: `
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>&lt;script setup&gt;
import { useCounterStore } from '@/stores/counter'
import { storeToRefs } from 'pinia' // للحفاظ على التفاعلية

const store = useCounterStore()

// ✅ الوصول المباشر (لكن يفقد التفاعلية عند التدمير)
console.log(store.count)

// ✅ استخدام storeToRefs للحفاظ على التفاعلية
const { count, doubleCount } = storeToRefs(store)
const { increment } = store

// في Template
// {{ count }} - تفاعلي
// {{ doubleCount }} - تفاعلي
// @click="increment()" - استدعاء action

// تعديل State مباشرة (مسموح في Pinia)
store.count = 10

// استدعاء Actions
store.increment()

// إعادة تعيين State
store.$reset() // فقط في Option Store

// استبدال State بالكامل
store.$patch({ count: 5 })

// استخدام Getters
console.log(store.doubleCount) // 10
&lt;/script&gt;</code></pre>
          </div>
          <p class="mt-2"><strong>ملاحظة:</strong> استخدم <code>storeToRefs</code> عند تدمير الـ Store للحفاظ على التفاعلية.</p>
        `,
      },
      {
        question: "ما هو Vue Router؟ وما أهم مميزاته؟",
        answer: `
          <p><strong>Vue Router</strong> هو المكتبة الرسمية للتوجيه (Routing) في تطبيقات Vue.js، وهو أساسي لتطبيقات الـ SPA (Single Page Applications).</p>
          <ul class="list-disc pr-6 space-y-2 mt-2">
            <li>
              <strong>المميزات:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li><strong>التوجيه المتداخل (Nested Routes):</strong> بناء واجهات معقدة بتداخل المسارات.</li>
                <li><strong>التوجيه الديناميكي:</strong> <code>/user/:id</code></li>
                <li><strong>حراس التوجيه (Navigation Guards):</strong> <code>beforeEach</code>، <code>beforeEnter</code>.</li>
                <li><strong>تحميل المكونات عند الطلب (Lazy Loading).</strong></li>
                <li><strong>History Mode:</strong> روابط نظيفة بدون <code>#</code>.</li>
              </ul>
            </li>
          </ul>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>// router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/About.vue') // Lazy Loading
  },
  {
    path: '/user/:id',
    name: 'user',
    component: () => import('@/views/User.vue'),
    props: true // تمرير المعاملات كـ Props
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/views/NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router</code></pre>
          </div>
        `,
      },
      {
        question: "كيف تستخدم Vue Router في المكونات؟",
        answer: `
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>&lt;template&gt;
  &lt;div&gt;
    &lt;!-- التنقل بين الصفحات --&gt;
    &lt;router-link to="/"&gt;Home&lt;/router-link&gt;
    &lt;router-link :to="{ name: 'about' }"&gt;About&lt;/router-link&gt;
    &lt;router-link :to="{ name: 'user', params: { id: 1 } }"&gt;User 1&lt;/router-link&gt;

    &lt;!-- عرض الصفحة الحالية --&gt;
    &lt;router-view /&gt;

    &lt;!-- عرض مسار متداخل --&gt;
    &lt;router-view name="sidebar" /&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

// التنقل برمجياً
const goToHome = () => {
  router.push('/')
}

const goToAbout = () => {
  router.push({ name: 'about' })
}

const goToUser = (id) => {
  router.push({ name: 'user', params: { id } })
}

// الوصول إلى المعاملات (Params)
console.log(route.params.id)

// الوصول إلى Query Parameters
console.log(route.query.search)

// الرجوع للخلف
const goBack = () => {
  router.back()
}

// إعادة التوجيه
const redirect = () => {
  router.replace('/home')
}
&lt;/script&gt;</code></pre>
          </div>
        `,
      },
      {
        question: "ما هي Navigation Guards في Vue Router؟",
        answer: `
          <p><strong>Navigation Guards</strong> هي دوال تتحكم في <strong>التنقل</strong> بين الصفحات، وتستخدم للتحقق من الصلاحيات أو تحميل بيانات.</p>
          <ul class="list-disc pr-6 space-y-2 mt-2">
            <li>
              <strong>أنواع الحراس:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li><strong>Global Guards:</strong> <code>beforeEach</code>، <code>beforeResolve</code>، <code>afterEach</code>.</li>
                <li><strong>Per-Route Guards:</strong> <code>beforeEnter</code> في تعريف المسار.</li>
                <li><strong>In-Component Guards:</strong> <code>onBeforeRouteEnter</code>، <code>onBeforeRouteUpdate</code>، <code>onBeforeRouteLeave</code>.</li>
              </ul>
            </li>
          </ul>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>// Global Guard - التحقق من المصادقة
router.beforeEach((to, from) => {
  const isAuthenticated = localStorage.getItem('token')
  if (to.meta.requiresAuth && !isAuthenticated) {
    return { name: 'login' }
  }
})

// Per-Route Guard
const routes = [
  {
    path: '/admin',
    component: Admin,
    meta: { requiresAuth: true },
    beforeEnter: (to, from) => {
      if (!isAdmin()) {
        return { name: 'home' }
      }
    }
  }
]

// In-Component Guard
&lt;script setup&gt;
import { onBeforeRouteLeave } from 'vue-router'

onBeforeRouteLeave((to, from) => {
  if (hasUnsavedChanges.value) {
    return confirm('هل تريد المغادرة؟')
  }
})
&lt;/script&gt;</code></pre>
          </div>
        `,
      },
      {
        question: "ما هو Nuxt.js؟ وما أهم مميزاته؟",
        answer: `
          <p><strong>Nuxt.js</strong> هو إطار عمل (Framework) مبني على Vue.js، يضيف ميزات متقدمة لتطوير تطبيقات الويب.</p>
          <ul class="list-disc pr-6 space-y-2 mt-2">
            <li>
              <strong>المميزات:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li><strong>SSR (Server-Side Rendering):</strong> تحسين SEO والأداء.</li>
                <li><strong>SSG (Static Site Generation):</strong> إنشاء مواقع ثابتة.</li>
                <li><strong>File-based Routing:</strong> توجيه تلقائي بناءً على هيكل الملفات.</li>
                <li><strong>Auto-imports:</strong> استيراد المكونات تلقائياً.</li>
                <li><strong>Modules:</strong> نظام إضافات قوي (100+ Module).</li>
                <li><strong>Composition API:</strong> دعم كامل.</li>
                <li><strong>TypeScript:</strong> دعم ممتاز.</li>
              </ul>
            </li>
          </ul>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>// هيكل مشروع Nuxt.js
nuxt-project/
├── pages/          # التوجيه التلقائي
│   ├── index.vue   # الصفحة الرئيسية (/)
│   ├── about.vue   # صفحة عن الموقع (/about)
│   └── users/
│       └── [id].vue # صفحة ديناميكية (/users/1)
├── components/     # المكونات (Auto-imported)
├── layouts/        # تخطيطات الصفحات
├── composables/    # Composables (Auto-imported)
├── stores/         # Pinia Stores
├── server/         # خادم API
└── nuxt.config.ts  # إعدادات Nuxt

// إعدادات Nuxt
export default defineNuxtConfig({
  ssr: true, // تفعيل SSR
  css: ['~/assets/css/main.css'],
  modules: ['@pinia/nuxt'],
  nitro: {
    preset: 'vercel' // للنشر على Vercel
  }
})</code></pre>
          </div>
        `,
      },
      {
        question: "ما الفرق بين SSR و SSG في Nuxt.js؟",
        answer: `
          <ul class="list-disc pr-6 space-y-3">
            <li>
              <strong>SSR (Server-Side Rendering):</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>تُعرض الصفحات <strong>على الخادم</strong> ثم تُرسل للمتصفح.</li>
                <li>مفيد لـ <strong>SEO</strong> وتحسين الأداء الأولي.</li>
                <li>محتوى <strong>ديناميكي</strong> (يتغير مع كل طلب).</li>
                <li>تستهلك <strong>موارد الخادم</strong> أكثر.</li>
              </ul>
            </li>
            <li>
              <strong>SSG (Static Site Generation):</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>تُعرض الصفحات <strong>في وقت البناء</strong> (Build Time).</li>
                <li>مفيد للمواقع <strong>الثابتة</strong> (مثل المدونات).</li>
                <li>محتوى <strong>ثابت</strong> (لا يتغير).</li>
                <li><strong>أسرع</strong> ولا تستهلك موارد الخادم.</li>
              </ul>
            </li>
          </ul>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>// في Nuxt 3 - تحديد طريقة العرض

// 1. SSR (افتراضي)
export default defineNuxtConfig({
  ssr: true // تعرض على الخادم
})

// 2. SSG (Static)
export default defineNuxtConfig({
  ssr: true,
  nitro: {
    preset: 'static' // بناء مواقع ثابتة
  }
})

// 3. Hybrid (مزيج)
export default defineNuxtConfig({
  ssr: true,
  routeRules: {
    '/': { ssr: false }, // صفحة رئيسية SPA
    '/blog/**': { ssr: true }, // مدونة SSR
    '/about': { static: true } // صفحة ثابتة
  }
})</code></pre>
          </div>
        `,
      },
      {
        question: "ما هو provide/inject في Vue؟",
        answer: `
          <p><strong>provide/inject</strong> هو نمط (Pattern) في Vue يسمح بتمرير البيانات عبر <strong>مستويات متعددة</strong> من المكونات دون الحاجة لتمريرها عبر Props (Prop Drilling).</p>
          <ul class="list-disc pr-6 space-y-2 mt-2">
            <li>
              <strong>الاستخدام:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li><code>provide</code>: يقدم البيانات من المكون الأب.</li>
                <li><code>inject</code>: يستقبل البيانات في المكون الابن (أي مستوى).</li>
              </ul>
            </li>
          </ul>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>// المكون الأب - يقدم البيانات
&lt;script setup&gt;
import { provide, ref } from 'vue'

const theme = ref('dark')
const updateTheme = (newTheme) => {
  theme.value = newTheme
}

// تقديم البيانات
provide('theme', theme)
provide('updateTheme', updateTheme)
&lt;/script&gt;

// المكون الابن (أي مستوى) - يستقبل البيانات
&lt;script setup&gt;
import { inject } from 'vue'

// استقبال البيانات
const theme = inject('theme')
const updateTheme = inject('updateTheme')

// استقبال مع قيمة افتراضية
const count = inject('count', 0)

// استقبال مع دالة لإنشاء القيمة
const user = inject('user', () => ({ name: 'Guest' }))
&lt;/script&gt;

// استخدام مع Symbol (لتجنب التعارض)
export const themeKey = Symbol('theme')
provide(themeKey, theme)
const theme = inject(themeKey)</code></pre>
          </div>
          <div class="mt-3 p-3 bg-blue-50 dark:bg-blue-900/20 border-r-4 border-blue-500 rounded">
            <p class="text-sm"><strong>📌 ملاحظة:</strong> provide/inject ليس تفاعلياً تلقائياً. استخدم <code>ref</code> أو <code>reactive</code> لجعله تفاعلياً.</p>
          </div>
        `,
      },
      {
        question: "ما هو Teleport في Vue 3؟",
        answer: `
          <p><strong><code>Teleport</code></strong> هو مكون في Vue 3 يسمح برندر جزء من الـ Template في <strong>مكان آخر</strong> في الـ DOM، خارج هيكل المكون.</p>
          <ul class="list-disc pr-6 space-y-2 mt-2">
            <li>
              <strong>الاستخدامات:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li><strong>Modals:</strong> عرض النوافذ المنبثقة في نهاية الصفحة.</li>
                <li><strong>Tooltips:</strong> عرض التلميحات خارج المكون.</li>
                <li><strong>Notifications:</strong> عرض الإشعارات في مكان محدد.</li>
              </ul>
            </li>
          </ul>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>&lt;template&gt;
  &lt;div&gt;
    &lt;button @click="showModal = true"&gt;Open Modal&lt;/button&gt;

    &lt;!-- Teleport: ينقل المحتوى إلى body --&gt;
    &lt;Teleport to="body"&gt;
      &lt;div v-if="showModal" class="modal"&gt;
        &lt;div class="modal-content"&gt;
          &lt;h2&gt;Modal Title&lt;/h2&gt;
          &lt;p&gt;This is a modal content&lt;/p&gt;
          &lt;button @click="showModal = false"&gt;Close&lt;/button&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/Teleport&gt;

    &lt;!-- Teleport إلى عنصر محدد --&gt;
    &lt;Teleport to="#app"&gt;
      &lt;div&gt;Rendered in #app&lt;/div&gt;
    &lt;/Teleport&gt;

    &lt;!-- Teleport مع شرط (disabled) --&gt;
    &lt;Teleport to="body" :disabled="isMobile"&gt;
      &lt;div&gt;يُنقل فقط على سطح المكتب&lt;/div&gt;
    &lt;/Teleport&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue'

const showModal = ref(false)
const isMobile = ref(false)
&lt;/script&gt;

&lt;style&gt;
.modal {
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
}
&lt;/style&gt;</code></pre>
          </div>
        `,
      },
      {
        question: "ما هو Suspense في Vue 3؟",
        answer: `
          <p><strong><code>Suspense</code></strong> هو مكون في Vue 3 يتعامل مع <strong>المكونات غير المتزامنة</strong> (Async Components) ويعرض محتوى <strong>بديل (Fallback)</strong> أثناء التحميل.</p>
          <ul class="list-disc pr-6 space-y-2 mt-2">
            <li>
              <strong>الاستخدامات:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>تحميل مكونات كبيرة باستخدام <strong>Lazy Loading</strong>.</li>
                <li>طلب بيانات غير متزامنة في <code>setup</code>.</li>
                <li>عرض شاشة تحميل (Loading) أثناء انتظار البيانات.</li>
              </ul>
            </li>
          </ul>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>&lt;template&gt;
  &lt;Suspense&gt;
    &lt;template #default&gt;
      &lt;AsyncComponent /&gt;
      &lt;AnotherAsyncComponent /&gt;
    &lt;/template&gt;

    &lt;template #fallback&gt;
      &lt;div class="loading"&gt;
        &lt;span&gt;Loading...&lt;/span&gt;
      &lt;/div&gt;
    &lt;/template&gt;
  &lt;/Suspense&gt;
&lt;/template&gt;

&lt;script setup&gt;
// مكون غير متزامن مع طلب بيانات
// AsyncComponent.vue
&lt;script setup&gt;
const data = await fetchData() // انتظار البيانات في setup
&lt;/script&gt;

// Lazy Loading مع Suspense
const AsyncComponent = defineAsyncComponent({
  loader: () => import('./HeavyComponent.vue'),
  loadingComponent: LoadingComponent,
  delay: 200,
  timeout: 3000
})

// استخدام مع Suspense
&lt;Suspense&gt;
  &lt;AsyncComponent /&gt;
  &lt;template #fallback&gt;
    &lt;Loading /&gt;
  &lt;/template&gt;
&lt;/Suspense&gt;</code></pre>
          </div>
          <div class="mt-3 p-3 bg-yellow-50 dark:bg-yellow-900/20 border-r-4 border-yellow-500 rounded">
            <p class="text-sm"><strong>⚠️ ملاحظة:</strong> Suspense لا يزال <strong>تجريبياً</strong> في Vue 3، لكنه يعمل مع <code>defineAsyncComponent</code> و <code>setup</code> غير المتزامن.</p>
          </div>
        `,
      },
      {
        question: "ما هو Keep-Alive في Vue؟",
        answer: `
          <p><strong><code>Keep-Alive</code></strong> هو مكون في Vue يحافظ على <strong>حالة المكونات</strong> عند التنقل بينها، بدلاً من تدميرها وإعادة إنشائها.</p>
          <ul class="list-disc pr-6 space-y-2 mt-2">
            <li>
              <strong>الاستخدامات:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>الحفاظ على حالة النماذج (Forms) عند التنقل.</li>
                <li>الحفاظ على حالة التمرير (Scroll) في القوائم.</li>
                <li>تحسين الأداء بتجنب إعادة التحميل المتكرر.</li>
              </ul>
            </li>
          </ul>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>&lt;template&gt;
  &lt;div&gt;
    &lt;button @click="currentTab = 'tab1'"&gt;Tab 1&lt;/button&gt;
    &lt;button @click="currentTab = 'tab2'"&gt;Tab 2&lt;/button&gt;

    &lt;!-- Keep-Alive: يحافظ على حالة المكونات --&gt;
    &lt;KeepAlive&gt;
      &lt;component :is="currentTab" /&gt;
    &lt;/KeepAlive&gt;

    &lt;!-- تحديد المكونات التي يتم تخزينها --&gt;
    &lt;KeepAlive include="Tab1,Tab2"&gt;
      &lt;component :is="currentTab" /&gt;
    &lt;/KeepAlive&gt;

    &lt;!-- استثناء مكونات --&gt;
    &lt;KeepAlive exclude="HeavyTab"&gt;
      &lt;component :is="currentTab" /&gt;
    &lt;/KeepAlive&gt;

    &lt;!-- تحديد الحد الأقصى للمكونات المخزنة --&gt;
    &lt;KeepAlive :max="10"&gt;
      &lt;component :is="currentTab" /&gt;
    &lt;/KeepAlive&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue'
import Tab1 from './Tab1.vue'
import Tab2 from './Tab2.vue'

const currentTab = ref('tab1')

// مع Keep-Alive، يتم تنشيط Lifecycle Hooks:
// onActivated() - عند تنشيط المكون
// onDeactivated() - عند إلغاء تنشيط المكون
&lt;/script&gt;</code></pre>
          </div>
        `,
      },
      {
        question: "ما هو defineProps في Vue 3؟",
        answer: `
          <p><strong><code>defineProps</code></strong> هو دالة في Vue 3 تُستخدم مع <code>&lt;script setup&gt;</code> لتعريف الـ <strong>Props</strong> التي يستقبلها المكون.</p>
          <ul class="list-disc pr-6 space-y-2 mt-2">
            <li>
              <strong>الاستخدام:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>تحديد نوع البيانات (TypeScript).</li>
                <li>تحديد القيم الافتراضية (Default).</li>
                <li>تحديد ما إذا كانت مطلوبة (Required).</li>
              </ul>
            </li>
          </ul>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>&lt;script setup&gt;
// 1. تعريف بسيط
const props = defineProps(['title', 'count'])

// 2. تعريف مع أنواع (TypeScript)
const props = defineProps&lt;{
  title: string
  count?: number
  user: { name: string; age: number }
}&gt;()

// 3. تعريف مع التحقق (Runtime validation)
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  count: {
    type: Number,
    default: 0
  },
  user: {
    type: Object as PropType&lt;User&gt;,
    required: true
  },
  tags: {
    type: Array as PropType&lt;string[]&gt;,
    default: () =&gt; []
  }
})

// 4. استخدام القيم
console.log(props.title)
console.log(props.count)

// 5. الوصول في Template (تلقائي)
// {{ title }} - متاح مباشرة
&lt;/script&gt;</code></pre>
          </div>
        `,
      },
      {
        question: "ما هو defineEmits في Vue 3؟",
        answer: `
          <p><strong><code>defineEmits</code></strong> هو دالة في Vue 3 تُستخدم مع <code>&lt;script setup&gt;</code> لتعريف الأحداث التي <strong>يبعثها</strong> المكون (Emits).</p>
          <ul class="list-disc pr-6 space-y-2 mt-2">
            <li>
              <strong>الاستخدام:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>تحديد الأحداث التي يمكن للمكون إرسالها.</li>
                <li>تحديد معاملات الأحداث (Payload).</li>
                <li>تحقق من نوع البيانات (TypeScript).</li>
              </ul>
            </li>
          </ul>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>&lt;script setup&gt;
// 1. تعريف بسيط
const emit = defineEmits(['update', 'delete'])

// 2. تعريف مع أنواع (TypeScript)
const emit = defineEmits&lt;{
  (e: 'update', id: number, data: string): void
  (e: 'delete', id: number): void
}&gt;()

// 3. تعريف مع التحقق
const emit = defineEmits({
  update: (id: number, data: string) =&gt; {
    if (id &lt; 0) {
      console.warn('Invalid id')
      return false
    }
    return true
  },
  delete: (id: number) =&gt; {
    if (id &lt; 0) {
      console.warn('Invalid id')
      return false
    }
    return true
  }
})

// 4. بعث الأحداث
const handleUpdate = () =&gt; {
  emit('update', 1, 'new data')
}

const handleDelete = () =&gt; {
  emit('delete', 1)
}

// 5. مع v-model
// استقبال v-model
const modelValue = defineModel()
// أو
const modelValue = defineModel('title')

// بعث تحديث v-model
modelValue.value = 'new value'
&lt;/script&gt;</code></pre>
          </div>
        `,
      },
      {
        question: "ما هو defineExpose في Vue 3؟",
        answer: `
          <p><strong><code>defineExpose</code></strong> هو دالة في Vue 3 تُستخدم مع <code>&lt;script setup&gt;</code> لـ <strong>كشف</strong> بعض الخصائص والدوال للمكون الأب.</p>
          <ul class="list-disc pr-6 space-y-2 mt-2">
            <li>
              <strong>الاستخدام:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>كشف دوال أو بيانات للمكون الأب.</li>
                <li>استدعاء دوال من المكون الابن.</li>
                <li>الوصول إلى خصائص المكون الابن.</li>
              </ul>
            </li>
          </ul>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>// المكون الابن - ChildComponent.vue
&lt;script setup&gt;
import { ref } from 'vue'

const count = ref(0)
const message = ref('Hello')

const increment = () =&gt; {
  count.value++
}

const reset = () =&gt; {
  count.value = 0
}

// كشف الدوال والبيانات
defineExpose({
  count,
  message,
  increment,
  reset
})
&lt;/script&gt;

// المكون الأب - Parent.vue
&lt;template&gt;
  &lt;ChildComponent ref="childRef" /&gt;
  &lt;button @click="handleIncrement"&gt;Increment from parent&lt;/button&gt;
  &lt;button @click="handleReset"&gt;Reset from parent&lt;/button&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue'
import ChildComponent from './ChildComponent.vue'

const childRef = ref(null)

const handleIncrement = () =&gt; {
  childRef.value?.increment()
  console.log(childRef.value?.count)
}

const handleReset = () =&gt; {
  childRef.value?.reset()
}
&lt;/script&gt;</code></pre>
          </div>
        `,
      },
      {
        question: "ما هو defineModel في Vue 3؟",
        answer: `
          <p><strong><code>defineModel</code></strong> هو دالة في Vue 3 (من v3.4) تُسهل التعامل مع <code>v-model</code> في المكونات.</p>
          <ul class="list-disc pr-6 space-y-2 mt-2">
            <li>
              <strong>الاستخدام:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>اختصار لـ <code>props</code> + <code>emit</code> للـ v-model.</li>
                <li>تدعم <code>v-model</code> المتعدد.</li>
                <li>تدعم المعدلات (Modifiers).</li>
              </ul>
            </li>
          </ul>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>// المكون الابن - Input.vue
&lt;script setup&gt;
// 1. v-model بسيط
const model = defineModel()
// يعادل: props.modelValue + emit('update:modelValue')

// 2. v-model مع اسم محدد
const title = defineModel('title')
// يعادل: props.title + emit('update:title')

// 3. مع نوع
const model = defineModel&lt;string&gt;({ required: true })

// 4. مع قيمة افتراضية
const model = defineModel({ default: '' })

// 5. v-model متعدد
const firstName = defineModel('firstName')
const lastName = defineModel('lastName')

// 6. مع المعدلات (Modifiers)
const model = defineModel({
  set(value) {
    if (value) {
      return value.trim()
    }
    return value
  }
})

// استخدام
const update = () =&gt; {
  model.value = 'new value'
}
&lt;/script&gt;

// المكون الأب
&lt;template&gt;
  &lt;!-- v-model بسيط --&gt;
  &lt;Input v-model="text" /&gt;

  &lt;!-- v-model مع اسم --&gt;
  &lt;Input v-model:title="title" /&gt;

  &lt;!-- v-model متعدد --&gt;
  &lt;Input v-model:firstName="first" v-model:lastName="last" /&gt;
&lt;/template&gt;</code></pre>
          </div>
        `,
      },
      {
        question: "ما هو Plugin في Vue؟ وكيف تنشئ واحداً؟",
        answer: `
          <p><strong>Plugin</strong> هو كود يُضاف إلى تطبيق Vue لتوفير <strong>وظائف عامة</strong> (مثل دوال، مكونات، توجيهات) في جميع أنحاء التطبيق.</p>
          <ul class="list-disc pr-6 space-y-2 mt-2">
            <li>
              <strong>الاستخدامات الشائعة:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>تسجيل مكونات عامة (Global Components).</li>
                <li>إضافة دوال مساعدة (Helper Functions).</li>
                <li>تهيئة مكتبات خارجية (مثل Vue Router، Pinia).</li>
              </ul>
            </li>
          </ul>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>// 1. إنشاء Plugin
// plugins/myPlugin.js
export default {
  install(app, options) {
    // تسجيل مكون عام
    app.component('GlobalButton', GlobalButton)

    // إضافة توجيه مخصص
    app.directive('focus', {
      mounted(el) {
        el.focus()
      }
    })

    // إضافة خاصية عامة
    app.config.globalProperties.$myMethod = () => {
      console.log('Hello from plugin')
    }

    // توفير بيانات
    app.provide('pluginOptions', options)
  }
}

// 2. استخدام Plugin
// main.js
import { createApp } from 'vue'
import App from './App.vue'
import myPlugin from './plugins/myPlugin'

const app = createApp(App)
app.use(myPlugin, { option1: 'value1' })
app.mount('#app')

// 3. استخدام في المكونات
&lt;script setup&gt;
import { inject } from 'vue'

// استخدام الدالة العامة
const $myMethod = getCurrentInstance().appContext.config.globalProperties.$myMethod

// استخدام provide
const options = inject('pluginOptions')
$myMethod()
&lt;/script&gt;</code></pre>
          </div>
        `,
      },
      {
        question: "ما هو Directive في Vue؟ وكيف تنشئ توجيهاً مخصصاً؟",
        answer: `
          <p><strong>Directive (توجيه)</strong> هو تعليمة مخصصة (مثل <code>v-focus</code>) تُستخدم لتطبيق سلوك محدد على العناصر في الـ DOM.</p>
          <ul class="list-disc pr-6 space-y-2 mt-2">
            <li>
              <strong>دورة حياة التوجيه:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li><code>beforeMount</code> - قبل إضافة العنصر للـ DOM.</li>
                <li><code>mounted</code> - بعد إضافة العنصر للـ DOM.</li>
                <li><code>beforeUpdate</code> - قبل تحديث العنصر.</li>
                <li><code>updated</code> - بعد تحديث العنصر.</li>
                <li><code>beforeUnmount</code> - قبل إزالة العنصر.</li>
                <li><code>unmounted</code> - بعد إزالة العنصر.</li>
              </ul>
            </li>
          </ul>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>// 1. إنشاء Directive محلي
// directives/focus.js
export const focus = {
  mounted(el) {
    el.focus()
  }
}

// 2. إنشاء Directive مع معاملات
export const highlight = {
  beforeMount(el, binding) {
    el.style.backgroundColor = binding.value || 'yellow'
  },
  updated(el, binding) {
    el.style.backgroundColor = binding.value || 'yellow'
  }
}

// 3. تسجيل Directive
// main.js
import { createApp } from 'vue'
import { focus, highlight } from './directives'

const app = createApp(App)
app.directive('focus', focus)
app.directive('highlight', highlight)

// 4. استخدام Directive
&lt;template&gt;
  &lt;!-- v-focus بسيط --&gt;
  &lt;input v-focus /&gt;

  &lt;!-- v-highlight مع قيمة --&gt;
  &lt;div v-highlight="'red'"&gt;Highlighted text&lt;/div&gt;

  &lt;!-- v-highlight مع كائن --&gt;
  &lt;div v-highlight="{ color: 'blue', duration: 1000 }"&gt;Highlighted&lt;/div&gt;
&lt;/template&gt;

// 5. Directive مع modifier
export const clickOutside = {
  mounted(el, binding) {
    el.clickOutsideEvent = (event) => {
      if (!(el === event.target || el.contains(event.target))) {
        binding.value()
      }
    }
    document.addEventListener('click', el.clickOutsideEvent)
  },
  unmounted(el) {
    document.removeEventListener('click', el.clickOutsideEvent)
  }
}</code></pre>
          </div>
        `,
      },
      {
        question: "ما هو Mixin في Vue؟ وما هي عيوبه؟",
        answer: `
          <p><strong>Mixin</strong> هو طريقة لإعادة استخدام المنطق بين المكونات عن طريق دمج (Merge) البيانات والدوال.</p>
          <ul class="list-disc pr-6 space-y-2 mt-2">
            <li>
              <strong>عيوب Mixins:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li><strong>تضارب الأسماء:</strong> قد تتعارض خصائص Mixin مع خصائص المكون.</li>
                <li><strong>غموض المصدر:</strong> صعب تتبع مصدر البيانات والدوال.</li>
                <li><strong>صعوبة الصيانة:</strong> مع زيادة عدد Mixins، يصبح الكود معقداً.</li>
                <li><strong>البديل الأفضل:</strong> استخدام <strong>Composables</strong> في Vue 3.</li>
              </ul>
            </li>
          </ul>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>// Mixin - الطريقة القديمة
// mixins/logger.js
export const loggerMixin = {
  data() {
    return {
      logCount: 0
    }
  },
  methods: {
    logMessage(message) {
      console.log(message)
      this.logCount++
    }
  },
  mounted() {
    console.log('Mixin mounted')
  }
}

// استخدام Mixin
export default {
  mixins: [loggerMixin],
  data() {
    return {
      // قد تتعارض مع logCount من Mixin
    }
  },
  methods: {
    // قد تتعارض مع logMessage من Mixin
  }
}

// البديل: Composables (Vue 3)
// composables/useLogger.js
export function useLogger() {
  const logCount = ref(0)

  const logMessage = (message) => {
    console.log(message)
    logCount.value++
  }

  onMounted(() => {
    console.log('Composable mounted')
  })

  return { logCount, logMessage }
}

// استخدام Composable
&lt;script setup&gt;
import { useLogger } from '@/composables/useLogger'

const { logCount, logMessage } = useLogger()
logMessage('Hello')
&lt;/script&gt;</code></pre>
          </div>
        `,
      },
      {
        question: "ما هو Composable في Vue 3؟",
        answer: `
          <p><strong>Composable</strong> هو دالة في Vue 3 تستخدم <strong>Composition API</strong> لإعادة استخدام المنطق بين المكونات.</p>
          <ul class="list-disc pr-6 space-y-2 mt-2">
            <li>
              <strong>المميزات:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>تجنب تضارب الأسماء (على عكس Mixins).</li>
                <li>مصدر واضح للبيانات والدوال.</li>
                <li>سهولة الصيانة والاختبار.</li>
                <li>تدعم TypeScript بشكل كامل.</li>
              </ul>
            </li>
          </ul>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>// composables/useCounter.js
import { ref, computed } from 'vue'

export function useCounter(initialValue = 0) {
  const count = ref(initialValue)
  const doubleCount = computed(() => count.value * 2)

  const increment = () => {
    count.value++
  }

  const decrement = () => {
    count.value--
  }

  const reset = () => {
    count.value = initialValue
  }

  return { count, doubleCount, increment, decrement, reset }
}

// composables/useFetch.js
import { ref, onMounted } from 'vue'

export function useFetch(url) {
  const data = ref(null)
  const loading = ref(false)
  const error = ref(null)

  const fetchData = async () => {
    loading.value = true
    try {
      const response = await fetch(url)
      data.value = await response.json()
    } catch (err) {
      error.value = err
    } finally {
      loading.value = false
    }
  }

  onMounted(fetchData)

  return { data, loading, error, refetch: fetchData }
}

// استخدام Composables
&lt;script setup&gt;
import { useCounter } from '@/composables/useCounter'
import { useFetch } from '@/composables/useFetch'

const { count, doubleCount, increment } = useCounter(10)
const { data, loading, error } = useFetch('https://api.example.com/users')
&lt;/script&gt;</code></pre>
          </div>
        `,
      },
      {
        question: "ما هو الفرق بين Mixin و Composable في Vue؟",
        answer: `
          <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700 text-sm mt-3">
            <thead>
              <tr class="bg-gray-100 dark:bg-gray-700/50">
                <th class="px-3 py-2 text-right">الخاصية</th>
                <th class="px-3 py-2 text-right">Mixin</th>
                <th class="px-3 py-2 text-right">Composable</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
              <tr>
                <td class="px-3 py-2 font-medium">التعارض</td>
                <td class="px-3 py-2">تضارب الأسماء ممكن</td>
                <td class="px-3 py-2">لا يوجد تضارب</td>
              </tr>
              <tr>
                <td class="px-3 py-2 font-medium">المصدر</td>
                <td class="px-3 py-2">غامض</td>
                <td class="px-3 py-2">واضح</td>
              </tr>
              <tr>
                <td class="px-3 py-2 font-medium">TypeScript</td>
                <td class="px-3 py-2">محدود</td>
                <td class="px-3 py-2">ممتاز</td>
              </tr>
              <tr>
                <td class="px-3 py-2 font-medium">الصيانة</td>
                <td class="px-3 py-2">صعبة</td>
                <td class="px-3 py-2">سهلة</td>
              </tr>
              <tr>
                <td class="px-3 py-2 font-medium">الاستخدام</td>
                <td class="px-3 py-2">Vue 2</td>
                <td class="px-3 py-2">Vue 3</td>
              </tr>
            </tbody>
          </table>
          <div class="mt-3 p-3 bg-blue-50 dark:bg-blue-900/20 border-r-4 border-blue-500 rounded">
            <p class="text-sm"><strong>📌 التوصية:</strong> استخدم Composables في Vue 3 بدلاً من Mixins.</p>
          </div>
        `,
      },
      {
        question: "كيف تتعامل مع الأخطاء في Vue؟ (Error Handling)",
        answer: `
          <p>هناك عدة طرق للتعامل مع الأخطاء في Vue:</p>
          <ul class="list-disc pr-6 space-y-2 mt-2">
            <li>
              <strong>1. Error Boundaries (Vue 3):</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>استخدام <code>onErrorCaptured</code> لالتقاط الأخطاء من المكونات الابنة.</li>
              </ul>
            </li>
            <li>
              <strong>2. Global Error Handler:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>استخدام <code>app.config.errorHandler</code> لالتقاط الأخطاء العامة.</li>
              </ul>
            </li>
            <li>
              <strong>3. try/catch مع async/await:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>معالجة الأخطاء في العمليات غير المتزامنة.</li>
              </ul>
            </li>
            <li>
              <strong>4. Vue Router Error Handling:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>معالجة أخطاء التوجيه باستخدام <code>onError</code>.</li>
              </ul>
            </li>
          </ul>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>// 1. Error Boundary في المكون
&lt;script setup&gt;
import { onErrorCaptured } from 'vue'

onErrorCaptured((error, instance, info) =&gt; {
  console.error('Error captured:', error)
  console.log('Component:', instance)
  console.log('Info:', info)
  // إرجاع false لمنع انتشار الخطأ
  return false
})
&lt;/script&gt;

// 2. Global Error Handler
// main.js
const app = createApp(App)
app.config.errorHandler = (error, instance, info) =&gt; {
  console.error('Global error:', error)
  // إرسال الخطأ إلى خدمة مراقبة الأخطاء
  logErrorToService(error)
}

// 3. try/catch مع async
async function fetchData() {
  try {
    const response = await fetch('/api/data')
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Fetch error:', error)
    throw error
  }
}

// 4. Vue Router Error Handling
router.onError((error) =&gt; {
  console.error('Router error:', error)
})</code></pre>
          </div>
        `,
      },
      {
        question: "ما هو v-model في المكونات المخصصة؟",
        answer: `
          <p>في Vue، يمكن استخدام <code>v-model</code> مع المكونات المخصصة لإنشاء <strong>ربط ثنائي الاتجاه</strong>.</p>
          <ul class="list-disc pr-6 space-y-2 mt-2">
            <li>
              <strong>الطريقة التقليدية (Vue 2 و Vue 3 قبل 3.4):</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>استقبال <code>modelValue</code> كـ Prop.</li>
                <li>بعث <code>update:modelValue</code> كـ Event.</li>
              </ul>
            </li>
            <li>
              <strong>الطريقة الحديثة (Vue 3.4+):</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>استخدام <code>defineModel</code>.</li>
              </ul>
            </li>
          </ul>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>// الطريقة التقليدية
// CustomInput.vue
&lt;script setup&gt;
const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])

const updateValue = (event) =&gt; {
  emit('update:modelValue', event.target.value)
}
&lt;/script&gt;

&lt;template&gt;
  &lt;input :value="modelValue" @input="updateValue" /&gt;
&lt;/template&gt;

// الطريقة الحديثة (Vue 3.4+)
// CustomInput.vue
&lt;script setup&gt;
const model = defineModel()
// أو
const model = defineModel({ default: '' })
&lt;/script&gt;

&lt;template&gt;
  &lt;input v-model="model" /&gt;
&lt;/template&gt;

// v-model المتعدد
&lt;script setup&gt;
const firstName = defineModel('firstName')
const lastName = defineModel('lastName')
&lt;/script&gt;

&lt;template&gt;
  &lt;input v-model="firstName" placeholder="First Name" /&gt;
  &lt;input v-model="lastName" placeholder="Last Name" /&gt;
&lt;/template&gt;

// الاستخدام
&lt;template&gt;
  &lt;CustomInput v-model="text" /&gt;
  &lt;CustomInput v-model:firstName="first" v-model:lastName="last" /&gt;
&lt;/template&gt;</code></pre>
          </div>
        `,
      },
      {
        question: "ما هي Animations و Transitions في Vue؟",
        answer: `
          <p>Vue يوفر <strong>Transition</strong> و <strong>Animation</strong> لإضافة حركات انسيابية عند إضافة أو إزالة أو تحديث العناصر.</p>
          <ul class="list-disc pr-6 space-y-2 mt-2">
            <li>
              <strong>Transition:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>يُستخدم مع <code>&lt;Transition&gt;</code> و <code>&lt;TransitionGroup&gt;</code>.</li>
                <li>يدعم CSS transitions و animations.</li>
                <li>يمكن استخدام JavaScript hooks.</li>
              </ul>
            </li>
            <li>
              <strong>الأنواع:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li><strong>Enter/Leave:</strong> عند إضافة/إزالة عنصر.</li>
                <li><strong>List Transitions:</strong> مع <code>v-for</code>.</li>
                <li><strong>State Transitions:</strong> تغيير البيانات.</li>
              </ul>
            </li>
          </ul>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>&lt;template&gt;
  &lt;div&gt;
    &lt;button @click="show = !show"&gt;Toggle&lt;/button&gt;

    &lt;!-- Transition بسيط --&gt;
    &lt;Transition name="fade"&gt;
      &lt;p v-if="show"&gt;Hello Vue!&lt;/p&gt;
    &lt;/Transition&gt;

    &lt;!-- Transition مع CSS --&gt;
    &lt;Transition name="slide" mode="out-in"&gt;
      &lt;div :key="currentTab"&gt;{{ currentTab }}&lt;/div&gt;
    &lt;/Transition&gt;

    &lt;!-- TransitionGroup مع v-for --&gt;
    &lt;TransitionGroup name="list" tag="ul"&gt;
      &lt;li v-for="item in items" :key="item.id"&gt;
        {{ item.text }}
      &lt;/li&gt;
    &lt;/TransitionGroup&gt;

    &lt;!-- JavaScript hooks --&gt;
    &lt;Transition
      @before-enter="beforeEnter"
      @enter="enter"
      @leave="leave"
    &gt;
      &lt;div v-if="show"&gt;Animated with JS&lt;/div&gt;
    &lt;/Transition&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue'

const show = ref(true)
const currentTab = ref('tab1')
const items = ref([
  { id: 1, text: 'Item 1' },
  { id: 2, text: 'Item 2' }
])

const beforeEnter = (el) => {
  el.style.opacity = 0
}
const enter = (el, done) => {
  setTimeout(() => {
    el.style.opacity = 1
    done()
  }, 1000)
}
const leave = (el, done) => {
  setTimeout(() => {
    el.style.opacity = 0
    done()
  }, 1000)
}
&lt;/script&gt;

&lt;style&gt;
/* CSS للـ Transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateY(20px);
}

.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
&lt;/style&gt;</code></pre>
          </div>
        `,
      },
      {
        question: "ما هو الفرق بين <Transition> و <TransitionGroup>؟",
        answer: `
          <ul class="list-disc pr-6 space-y-3">
            <li>
              <strong><code>&lt;Transition&gt;</code>:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>يُستخدم مع <strong>عنصر واحد</strong> (يظهر ويختفي).</li>
                <li>يدعم <code>v-if</code>، <code>v-show</code>، والمكونات الديناميكية.</li>
                <li>يُطبق على عنصر واحد فقط.</li>
              </ul>
            </li>
            <li>
              <strong><code>&lt;TransitionGroup&gt;</code>:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>يُستخدم مع <strong>قائمة من العناصر</strong> (<code>v-for</code>).</li>
                <li>يُطبق على جميع العناصر في القائمة.</li>
                <li>يدعم حركات عند الإضافة والحذف وإعادة الترتيب.</li>
                <li>يُعرض كـ عنصر DOM (مثل <code>ul</code>).</li>
              </ul>
            </li>
          </ul>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>&lt;template&gt;
  &lt;!-- Transition: عنصر واحد --&gt;
  &lt;Transition name="fade"&gt;
    &lt;p v-if="show"&gt;Single element&lt;/p&gt;
  &lt;/Transition&gt;

  &lt;!-- TransitionGroup: قائمة --&gt;
  &lt;TransitionGroup name="list" tag="ul"&gt;
    &lt;li v-for="item in items" :key="item.id"&gt;
      {{ item.text }}
    &lt;/li&gt;
  &lt;/TransitionGroup&gt;

  &lt;!-- TransitionGroup مع حركات إعادة الترتيب --&gt;
  &lt;button @click="shuffle"&gt;Shuffle&lt;/button&gt;
  &lt;TransitionGroup name="list" tag="div" class="grid"&gt;
    &lt;div v-for="item in items" :key="item.id" class="card"&gt;
      {{ item.text }}
    &lt;/div&gt;
  &lt;/TransitionGroup&gt;
&lt;/template&gt;

&lt;style&gt;
/* TransitionGroup - يحتاج .-move */
.list-move {
  transition: transform 0.5s ease;
}
&lt;/style&gt;</code></pre>
          </div>
        `,
      },
      // ============================
      // المستوى الثالث: متقدم Vue (30 سؤال)
      // ============================
      {
        question: "ما هو الفرق بين $refs و ref في Vue؟",
        answer: `
          <ul class="list-disc pr-6 space-y-3">
            <li>
              <strong><code>ref</code> (في Composition API):</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>دالة تُستخدم لإنشاء <strong>بيانات تفاعلية (Reactive)</strong>.</li>
                <li>مثال: <code>const count = ref(0)</code></li>
              </ul>
            </li>
            <li>
              <strong><code>$refs</code> (في Options API) و <code>ref</code> (في Template):</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>تُستخدم <strong>للوصول إلى عناصر DOM</strong> أو مكونات ابنة.</li>
                <li>مثال: <code>&lt;input ref="inputRef" /&gt;</code></li>
                <li>في Composition API: <code>const inputRef = ref(null)</code></li>
              </ul>
            </li>
          </ul>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>&lt;template&gt;
  &lt;div&gt;
    &lt;!-- ref في Template للوصول إلى DOM --&gt;
    &lt;input ref="inputElement" placeholder="Type something" /&gt;
    &lt;button @click="focusInput"&gt;Focus&lt;/button&gt;

    &lt;!-- ref مع مكون ابن --&gt;
    &lt;ChildComponent ref="childRef" /&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref, onMounted } from 'vue'
import ChildComponent from './ChildComponent.vue'

// ref لـ DOM
const inputElement = ref(null)

// ref لمكون ابن
const childRef = ref(null)

const focusInput = () => {
  // الوصول إلى عنصر DOM
  inputElement.value?.focus()
}

onMounted(() => {
  // الوصول إلى المكون الابن
  console.log(childRef.value)
  // استدعاء دالة من المكون الابن (إذا كانت مكشوفة)
  childRef.value?.someMethod()
})

// في Options API
export default {
  mounted() {
    // استخدام $refs
    this.$refs.inputElement.focus()
  }
}
&lt;/script&gt;</code></pre>
          </div>
        `,
      },
      {
        question: "ما هو الفرق بين $emit و v-model في Vue؟",
        answer: `
          <ul class="list-disc pr-6 space-y-3">
            <li>
              <strong><code>$emit</code>:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>يُستخدم <strong>لإرسال أحداث</strong> من المكون الابن إلى الأب.</li>
                <li>مرن: يمكن إرسال أي حدث مع أي بيانات.</li>
                <li>مثال: <code>emit('custom-event', data)</code></li>
              </ul>
            </li>
            <li>
              <strong><code>v-model</code>:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>اختصار لـ <code>:value</code> + <code>@input</code> (أو <code>update:modelValue</code>).</li>
                <li>مخصص لـ <strong>الربط ثنائي الاتجاه</strong>.</li>
                <li>مثال: <code>&lt;input v-model="text" /&gt;</code></li>
              </ul>
            </li>
          </ul>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>// المكون الابن - Child.vue
&lt;script setup&gt;
const emit = defineEmits(['update', 'custom-event'])

// استخدام $emit
const sendUpdate = () => {
  emit('update', { id: 1, data: 'new data' })
}

const sendCustomEvent = () => {
  emit('custom-event', 'Hello from child')
}

// v-model في المكون
const model = defineModel()
&lt;/script&gt;

&lt;template&gt;
  &lt;div&gt;
    &lt;!-- v-model --&gt;
    &lt;input v-model="model" /&gt;

    &lt;!-- $emit --&gt;
    &lt;button @click="sendUpdate"&gt;Send Update&lt;/button&gt;
    &lt;button @click="sendCustomEvent"&gt;Send Custom Event&lt;/button&gt;
  &lt;/div&gt;
&lt;/template&gt;

// المكون الأب - Parent.vue
&lt;template&gt;
  &lt;Child
    v-model="text"
    @update="handleUpdate"
    @custom-event="handleCustomEvent"
  /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue'
import Child from './Child.vue'

const text = ref('')

const handleUpdate = (data) => {
  console.log('Update:', data)
}

const handleCustomEvent = (message) => {
  console.log('Custom:', message)
}
&lt;/script&gt;</code></pre>
          </div>
        `,
      },
      {
        question: "ما هو الفرق بين props و provide/inject؟",
        answer: `
          <ul class="list-disc pr-6 space-y-3">
            <li>
              <strong><code>props</code>:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>تمرير البيانات من <strong>الأب إلى الابن</strong> مباشرة.</li>
                <li>يجب تمريرها عبر <strong>كل مستوى</strong> (Prop Drilling).</li>
                <li>البيانات <strong>للقراءة فقط</strong>.</li>
                <li>مناسب للبيانات المحلية.</li>
              </ul>
            </li>
            <li>
              <strong><code>provide/inject</code>:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>تمرير البيانات عبر <strong>مستويات متعددة</strong> دون تمريرها يدوياً.</li>
                <li>يمكن الوصول إليها من <strong>أي مستوى</strong> (ابن، حفيد، إلخ).</li>
                <li>البيانات <strong>يمكن أن تكون تفاعلية</strong> (مع ref/reactive).</li>
                <li>مناسب للبيانات العامة (مثل الثيم، اللغة).</li>
              </ul>
            </li>
          </ul>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>// Props - تمرير مباشر
// GrandParent.vue
&lt;template&gt;
  &lt;Parent :user="user" /&gt;
&lt;/template&gt;

// Parent.vue
&lt;template&gt;
  &lt;Child :user="user" /&gt;  &lt;!-- تمرير مرة أخرى --&gt;
&lt;/template&gt;

// Child.vue
const props = defineProps(['user']) // استقبال

// provide/inject - تمرير غير مباشر
// GrandParent.vue
&lt;script setup&gt;
import { provide, ref } from 'vue'

const user = ref({ name: 'Ahmed' })
provide('user', user)
&lt;/script&gt;

// Child.vue (أي مستوى)
&lt;script setup&gt;
import { inject } from 'vue'

const user = inject('user')
console.log(user.value.name)
&lt;/script&gt;</code></pre>
          </div>
        `,
      },
      {
        question: "ما هو الفرق بين watch و computed في Vue؟",
        answer: `
          <ul class="list-disc pr-6 space-y-3">
            <li>
              <strong><code>computed</code>:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>تُستخدم <strong>لحساب قيمة</strong> بناءً على بيانات أخرى.</li>
                <li>تُخزن النتيجة <strong>مؤقتاً (Cached)</strong>.</li>
                <li><strong>تُعيد</strong> قيمة (تُستخدم في Template).</li>
                <li>تُستخدم للقيم المشتقة.</li>
              </ul>
            </li>
            <li>
              <strong><code>watch</code>:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>تُستخدم <strong>لمراقبة التغييرات</strong> وتنفيذ كود استجابة لها.</li>
                <li><strong>لا تُخزن</strong> النتيجة (Side Effects).</li>
                <li><strong>لا تُعيد</strong> قيمة (تنفذ كود فقط).</li>
                <li>تُستخدم للعمليات غير المتزامنة (مثل طلبات API).</li>
              </ul>
            </li>
          </ul>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>&lt;script setup&gt;
import { ref, computed, watch } from 'vue'

const firstName = ref('Ahmed')
const lastName = ref('Mohamed')

// computed - تُعيد قيمة
const fullName = computed(() => {
  return firstName.value + ' ' + lastName.value
})

// computed - تُستخدم في Template
// {{ fullName }}

// watch - تنفذ كود
watch(firstName, (newName, oldName) => {
  console.log('Name changed from', oldName, 'to', newName)
  // طلب API
  fetchUserData(newName)
})

// watch - لا تُعيد قيمة
// لا يمكن استخدامها في Template
&lt;/script&gt;</code></pre>
          </div>
        `,
      },
      {
        question: "ما هو الفرق بين nextTick و $nextTick في Vue؟",
        answer: `
          <ul class="list-disc pr-6 space-y-3">
            <li>
              <strong><code>nextTick</code> (في Composition API):</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>دالة تُستخدم <strong>لانتظار تحديث DOM</strong> بعد تغيير البيانات.</li>
                <li>مثال: <code>import { nextTick } from 'vue'</code></li>
              </ul>
            </li>
            <li>
              <strong><code>$nextTick</code> (في Options API):</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>نفس الوظيفة، لكنها <strong>خاصة بالمكون</strong>.</li>
                <li>مثال: <code>this.$nextTick()</code></li>
              </ul>
            </li>
          </ul>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>&lt;template&gt;
  &lt;div&gt;
    &lt;p ref="messageRef"&gt;{{ message }}&lt;/p&gt;
    &lt;button @click="updateMessage"&gt;Update&lt;/button&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref, nextTick } from 'vue'

const message = ref('Hello')
const messageRef = ref(null)

const updateMessage = async () => {
  // تغيير البيانات
  message.value = 'Updated!'

  // ❌ DOM لم يُحدث بعد
  console.log(messageRef.value.textContent) // 'Hello'

  // ✅ انتظار تحديث DOM
  await nextTick()
  console.log(messageRef.value.textContent) // 'Updated!'

  // أو باستخدام callback
  nextTick(() => {
    console.log(messageRef.value.textContent) // 'Updated!'
  })
}

// في Options API
export default {
  data() {
    return {
      message: 'Hello'
    }
  },
  methods: {
    updateMessage() {
      this.message = 'Updated!'
      this.$nextTick(() => {
        // DOM محدّث هنا
        console.log(this.$refs.message.textContent)
      })
    }
  }
}
&lt;/script&gt;</code></pre>
          </div>
        `,
      },
      {
        question: "ما هو الفرق بين provide و app.provide في Vue؟",
        answer: `
          <ul class="list-disc pr-6 space-y-3">
            <li>
              <strong><code>provide</code> في المكون:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>يُستخدم في <strong>المكون الأب</strong> لتقديم بيانات للمكونات الابنة.</li>
                <li>متاح فقط للمكونات <strong>تحت</strong> هذا المكون.</li>
                <li>مثال: <code>provide('key', value)</code></li>
              </ul>
            </li>
            <li>
              <strong><code>app.provide</code> (على مستوى التطبيق):</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>يُستخدم في <strong>التطبيق الرئيسي</strong> لتقديم بيانات <strong>لكل المكونات</strong>.</li>
                <li>متاح لـ <strong>جميع</strong> المكونات في التطبيق.</li>
                <li>مثال: <code>app.provide('key', value)</code></li>
              </ul>
            </li>
          </ul>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>// 1. provide على مستوى المكون
// App.vue (المكون الأب)
&lt;script setup&gt;
import { provide, ref } from 'vue'

const theme = ref('dark')
provide('theme', theme)
&lt;/script&gt;

// Child.vue (مكون ابن)
&lt;script setup&gt;
import { inject } from 'vue'
const theme = inject('theme') // متاح
&lt;/script&gt;

// GrandChild.vue (مكون حفيد)
&lt;script setup&gt;
import { inject } from 'vue'
const theme = inject('theme') // متاح أيضاً
&lt;/script&gt;

// 2. app.provide على مستوى التطبيق
// main.js
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
app.provide('appConfig', {
  apiUrl: 'https://api.example.com',
  version: '1.0.0'
})
app.mount('#app')

// أي مكون في التطبيق
&lt;script setup&gt;
import { inject } from 'vue'
const config = inject('appConfig')
console.log(config.apiUrl)
&lt;/script&gt;</code></pre>
          </div>
        `,
      },
      {
        question: "ما هو الفرق بين defineAsyncComponent و import() العادي؟",
        answer: `
          <ul class="list-disc pr-6 space-y-3">
            <li>
              <strong><code>import()</code> العادي:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>تحميل <strong>ديناميكي</strong> للمكونات.</li>
                <li>يُرجع <strong>Promise</strong>.</li>
                <li>مثال: <code>const Component = () => import('./Component.vue')</code></li>
              </ul>
            </li>
            <li>
              <strong><code>defineAsyncComponent</code>:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>دالة <strong>مخصصة</strong> في Vue لتحميل المكونات غير المتزامنة.</li>
                <li>تدعم <strong>مكون تحميل (Loading)</strong> و <strong>مكون خطأ (Error)</strong>.</li>
                <li>تدعم <strong>تأخير (Delay)</strong> و <strong>مهلة (Timeout)</strong>.</li>
                <li>مثال: <code>defineAsyncComponent({ loader: () => import('./Component.vue') })</code></li>
              </ul>
            </li>
          </ul>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>// import() العادي - تحميل ديناميكي
const AsyncComponent = () => import('./HeavyComponent.vue')

// defineAsyncComponent - مع خيارات متقدمة
import { defineAsyncComponent } from 'vue'

const AsyncComponent = defineAsyncComponent({
  loader: () => import('./HeavyComponent.vue'),

  // مكون أثناء التحميل
  loadingComponent: LoadingComponent,
  // تأخير عرض مكون التحميل
  delay: 200,

  // مكون عند حدوث خطأ
  errorComponent: ErrorComponent,
  // مهلة التحميل
  timeout: 3000,

  // دالة عند حدوث خطأ
  onError(error, retry, fail, attempts) {
    if (attempts < 3) {
      retry()
    } else {
      fail()
    }
  }
})

// استخدام مع Suspense
&lt;template&gt;
  &lt;Suspense&gt;
    &lt;AsyncComponent /&gt;
    &lt;template #fallback&gt;
      &lt;Loading /&gt;
    &lt;/template&gt;
  &lt;/Suspense&gt;
&lt;/template&gt;</code></pre>
          </div>
        `,
      },
      {
        question: "ما هو الفرق بين render function و template في Vue؟",
        answer: `
          <ul class="list-disc pr-6 space-y-3">
            <li>
              <strong><code>template</code> (الطريقة الأكثر شيوعاً):</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>كتابة HTML <strong>بديهية</strong> وسهلة.</li>
                <li>تُترجم إلى render function تلقائياً.</li>
                <li>تدعم كل تعليمات Vue (<code>v-if</code>، <code>v-for</code>، ...).</li>
                <li>مناسبة لمعظم الحالات.</li>
              </ul>
            </li>
            <li>
              <strong><code>render function</code> (طريقة متقدمة):</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>كتابة <strong>JavaScript</strong> مباشرة لإنشاء الـ VNodes.</li>
                <li><strong>أكثر مرونة</strong> وقوة.</li>
                <li>تُستخدم عندما تكون الـ Template <strong>غير كافية</strong>.</li>
                <li>مناسبة للمكتبات والمكونات عالية الأداء.</li>
              </ul>
            </li>
          </ul>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>// 1. Template (الطريقة الأسهل)
&lt;template&gt;
  &lt;div&gt;
    &lt;h1&gt;{{ title }}&lt;/h1&gt;
    &lt;button @click="count++"&gt;Count: {{ count }}&lt;/button&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue'
const title = ref('Hello')
const count = ref(0)
&lt;/script&gt;

// 2. Render Function (طريقة متقدمة)
&lt;script&gt;
import { h, ref } from 'vue'

export default {
  setup() {
    const count = ref(0)
    const title = ref('Hello')

    return () => h('div', [
      h('h1', title.value),
      h('button', {
        onClick: () => count.value++
      }, \`Count: \${count.value}\`)
    ])
  }
}
&lt;/script&gt;

// 3. Render Function مع JSX (في Vue 3)
&lt;script setup&gt;
import { ref } from 'vue'

const count = ref(0)

const render = () => (
  &lt;div&gt;
    &lt;h1&gt;Hello&lt;/h1&gt;
    &lt;button onClick={() => count.value++}&gt;
      Count: {count.value}
    &lt;/button&gt;
  &lt;/div&gt;
)
&lt;/script&gt;</code></pre>
          </div>
        `,
      },
      {
        question: "ما هو الفرق بين shallowRef و shallowReactive في Vue؟",
        answer: `
          <ul class="list-disc pr-6 space-y-3">
            <li>
              <strong><code>shallowRef</code>:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>تفاعلية <strong>على المستوى الأول</strong> فقط.</li>
                <li>تغيير <code>.value</code> يُحدث التفاعلية.</li>
                <li>تغيير خصائص داخل الكائن <strong>لا يُحدث</strong> التفاعلية.</li>
                <li>مفيد للكائنات الكبيرة (تحسين الأداء).</li>
              </ul>
            </li>
            <li>
              <strong><code>shallowReactive</code>:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>تفاعلية <strong>على المستوى الأول</strong> فقط.</li>
                <li>تغيير الخصائص في المستوى الأول يُحدث التفاعلية.</li>
                <li>تغيير خصائص متداخلة <strong>لا يُحدث</strong> التفاعلية.</li>
                <li>مفيد للكائنات الكبيرة (تحسين الأداء).</li>
              </ul>
            </li>
          </ul>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>&lt;script setup&gt;
import { shallowRef, shallowReactive, ref } from 'vue'

// shallowRef
const user = shallowRef({ name: 'Ahmed', address: { city: 'Cairo' } })

// ✅ يُحدث التفاعلية (تغيير .value)
user.value = { name: 'Ali' }

// ❌ لا يُحدث التفاعلية (تغيير خاصية داخلية)
user.value.name = 'Mohamed' // لا يعمل

// ❌ لا يُحدث التفاعلية (تغيير خاصية متداخلة)
user.value.address.city = 'Alex' // لا يعمل

// shallowReactive
const user2 = shallowReactive({ name: 'Ahmed', address: { city: 'Cairo' } })

// ✅ يُحدث التفاعلية (تغيير خاصية في المستوى الأول)
user2.name = 'Ali' // يعمل

// ❌ لا يُحدث التفاعلية (تغيير خاصية متداخلة)
user2.address.city = 'Alex' // لا يعمل

// الفرق مع ref العادي
const user3 = ref({ name: 'Ahmed', address: { city: 'Cairo' } })
// ✅ كل التغييرات تعمل (لكن قد تكون أقل أداء)
user3.value.name = 'Mohamed' // يعمل
user3.value.address.city = 'Alex' // يعمل
&lt;/script&gt;</code></pre>
          </div>
        `,
      },
      {
        question: "كيف تحسن أداء تطبيق Vue؟",
        answer: `
          <ul class="list-disc pr-6 space-y-2 mt-2">
            <li>
              <strong>1. استخدام <code>v-once</code> و <code>v-memo</code>:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li><code>v-once</code>: يعرض العنصر مرة واحدة فقط.</li>
                <li><code>v-memo</code>: يخزن العنصر مؤقتاً حتى تتغير التبعيات.</li>
              </ul>
            </li>
            <li>
              <strong>2. Lazy Loading للمكونات:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>استخدام <code>defineAsyncComponent</code> و <code>import()</code>.</li>
              </ul>
            </li>
            <li>
              <strong>3. استخدام <code>shallowRef</code> و <code>shallowReactive</code>:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>للبيانات الكبيرة التي لا تحتاج تفاعلية عميقة.</li>
              </ul>
            </li>
            <li>
              <strong>4. استخدام <code>computed</code> بدلاً من <code>methods</code>:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>للاستفادة من التخزين المؤقت (Caching).</li>
              </ul>
            </li>
            <li>
              <strong>5. استخدام <code>KeepAlive</code>:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>الحفاظ على حالة المكونات عند التنقل.</li>
              </ul>
            </li>
            <li>
              <strong>6. Code Splitting:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>تقسيم الكود إلى أجزاء أصغر (مع Vite/Webpack).</li>
              </ul>
            </li>
            <li>
              <strong>7. تجنب <code>v-for</code> مع <code>v-if</code>:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>استخدم <code>computed</code> لفلترة القائمة أولاً.</li>
              </ul>
            </li>
          </ul>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>&lt;template&gt;
  &lt;div&gt;
    &lt;!-- v-once: يعرض مرة واحدة فقط --&gt;
    &lt;div v-once&gt;{{ staticData }}&lt;/div&gt;

    &lt;!-- v-memo: تخزين مؤقت حتى تتغير التبعيات --&gt;
    &lt;div v-memo="[user.id]"&gt;
      {{ user.name }} - {{ user.email }}
    &lt;/div&gt;

    &lt;!-- Lazy Loading --&gt;
    &lt;component :is="lazyComponent" /&gt;

    &lt;!-- KeepAlive --&gt;
    &lt;KeepAlive&gt;
      &lt;component :is="currentTab" /&gt;
    &lt;/KeepAlive&gt;

    &lt;!-- تجنب v-for مع v-if --&gt;
    &lt;!-- ❌ سيء --&gt;
    &lt;div v-for="item in items" v-if="item.active"&gt;
      {{ item.name }}
    &lt;/div&gt;

    &lt;!-- ✅ جيد --&gt;
    &lt;div v-for="item in activeItems" :key="item.id"&gt;
      {{ item.name }}
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref, computed, defineAsyncComponent } from 'vue'

// Lazy Loading
const lazyComponent = defineAsyncComponent(() =&gt; import('./HeavyComponent.vue'))

const items = ref([/* ... */])
const activeItems = computed(() =&gt; items.value.filter(item =&gt; item.active))
&lt;/script&gt;</code></pre>
          </div>
        `,
      },
      {
        question: "ما هو الفرق بين $attrs و $props في Vue؟",
        answer: `
          <ul class="list-disc pr-6 space-y-3">
            <li>
              <strong><code>$props</code>:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>تحتوي على <strong>جميع الـ Props</strong> التي يُعلن عنها المكون.</li>
                <li>تُستخدم للوصول إلى البيانات المُمررة.</li>
                <li>مثال: <code>props.title</code></li>
              </ul>
            </li>
            <li>
              <strong><code>$attrs</code>:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>تحتوي على <strong>جميع الـ Attributes</strong> التي <strong>لم تُعلن</strong> كـ Props.</li>
                <li>تشمل: class، style، وأي خصائص DOM.</li>
                <li>تُستخدم لتمرير البيانات إلى المكونات الابنة (<code>v-bind="$attrs"</code>).</li>
              </ul>
            </li>
          </ul>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>// المكون الابن - Child.vue
&lt;script setup&gt;
// إعلان بعض الـ Props
const props = defineProps(['title', 'count'])

// الوصول إلى $attrs
console.log(props) // { title: 'Hello', count: 0 }
console.log($attrs) // { class: 'my-class', id: 'child', 'data-test': 'test' }
&lt;/script&gt;

&lt;template&gt;
  &lt;div&gt;
    &lt;p&gt;Title: {{ title }}&lt;/p&gt;
    &lt;p&gt;Count: {{ count }}&lt;/p&gt;

    &lt;!-- تمرير $attrs إلى المكون الابن --&gt;
    &lt;GrandChild v-bind="$attrs" /&gt;
  &lt;/div&gt;
&lt;/template&gt;

// المكون الأب - Parent.vue
&lt;template&gt;
  &lt;Child
    title="Hello"
    :count="0"
    class="my-class"
    id="child"
    data-test="test"
  /&gt;
&lt;/template&gt;

// استخدام $attrs مع fallthrough
// إذا لم تُعلن prop، تنتقل تلقائياً إلى العنصر الجذر
// يمكن منع ذلك بـ inheritAttrs: false</code></pre>
          </div>
        `,
      },
      {
        question: "ما هو الفرق بين $slots و $scopedSlots في Vue؟",
        answer: `
          <ul class="list-disc pr-6 space-y-3">
            <li>
              <strong><code>$slots</code>:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>تحتوي على <strong>جميع الـ Slots</strong> التي يمررها المكون الأب.</li>
                <li>تُستخدم للوصول إلى محتوى الـ Slots.</li>
                <li>مثال: <code>$slots.default()</code></li>
              </ul>
            </li>
            <li>
              <strong><code>$scopedSlots</code> (في Vue 2):</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>كانت تحتوي على <strong>Scoped Slots</strong> فقط.</li>
                <li>في Vue 3، تم دمجها في <code>$slots</code>.</li>
                <li>الآن <code>$slots</code> تحتوي على كل شيء.</li>
              </ul>
            </li>
          </ul>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>// المكون الابن - Child.vue
&lt;template&gt;
  &lt;div&gt;
    &lt;!-- Default Slot --&gt;
    &lt;slot /&gt;

    &lt;!-- Named Slot --&gt;
    &lt;slot name="header" /&gt;

    &lt;!-- Scoped Slot --&gt;
    &lt;slot name="item" :item="item" :index="index" /&gt;

    &lt;!-- الوصول إلى $slots في script --&gt;
    &lt;div v-if="$slots.footer"&gt;
      &lt;slot name="footer" /&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { useSlots } from 'vue'

const slots = useSlots()
console.log(slots.default) // دالة ترجع VNodes
console.log(slots.header) // دالة ترجع VNodes

// التحقق من وجود Slot
if (slots.footer) {
  console.log('Footer slot exists')
}
&lt;/script&gt;

// المكون الأب - Parent.vue
&lt;template&gt;
  &lt;Child&gt;
    &lt;!-- Default Slot --&gt;
    &lt;p&gt;Default content&lt;/p&gt;

    &lt;!-- Named Slot --&gt;
    &lt;template #header&gt;
      &lt;h1&gt;Header content&lt;/h1&gt;
    &lt;/template&gt;

    &lt;!-- Scoped Slot --&gt;
    &lt;template #item="{ item, index }"&gt;
      &lt;p&gt;{{ index }}: {{ item.name }}&lt;/p&gt;
    &lt;/template&gt;

    &lt;!-- Footer Slot (اختياري) --&gt;
    &lt;template #footer&gt;
      &lt;footer&gt;Footer content&lt;/footer&gt;
    &lt;/template&gt;
  &lt;/Child&gt;
&lt;/template&gt;</code></pre>
          </div>
        `,
      },
      {
        question: "ما هو الفرق بين <slot> و <template> في Vue؟",
        answer: `
          <ul class="list-disc pr-6 space-y-3">
            <li>
              <strong><code>&lt;slot&gt;</code>:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>يُستخدم في <strong>المكون الابن</strong> لتحديد <strong>مكان</strong> عرض المحتوى من الأب.</li>
                <li>يمكن أن يكون له <strong>اسم</strong> (Named Slot) أو <strong>نطاق</strong> (Scoped Slot).</li>
                <li>يُظهر المحتوى الذي يمرره الأب.</li>
              </ul>
            </li>
            <li>
              <strong><code>&lt;template&gt;</code>:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>يُستخدم في <strong>المكون الأب</strong> لتجميع محتوى <strong>مُرسل</strong> إلى Slot.</li>
                <li>يُستخدم مع <code>v-slot</code> أو <code>#</code> لتحديد Slot.</li>
                <li>يُستخدم أيضاً كعنصر <strong>تجميعي</strong> بدون عرض (مثل React.Fragment).</li>
              </ul>
            </li>
          </ul>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>// المكون الابن - Child.vue
&lt;template&gt;
  &lt;div&gt;
    &lt;!-- 1. Slot عادي --&gt;
    &lt;slot name="header"&gt;
      &lt;!-- محتوى افتراضي --&gt;
      &lt;h2&gt;Default Header&lt;/h2&gt;
    &lt;/slot&gt;

    &lt;!-- 2. Scoped Slot --&gt;
    &lt;slot name="item" :item="item" :index="index" /&gt;

    &lt;!-- 3. Default Slot --&gt;
    &lt;slot /&gt;
  &lt;/div&gt;
&lt;/template&gt;

// المكون الأب - Parent.vue
&lt;template&gt;
  &lt;Child&gt;
    &lt;!-- template مع v-slot --&gt;
    &lt;template v-slot:header&gt;
      &lt;h1&gt;Custom Header&lt;/h1&gt;
    &lt;/template&gt;

    &lt;!-- template مع # (اختصار) --&gt;
    &lt;template #item="{ item, index }"&gt;
      &lt;p&gt;{{ index }}: {{ item.name }}&lt;/p&gt;
    &lt;/template&gt;

    &lt;!-- Default Slot (بدون template) --&gt;
    &lt;p&gt;Default content&lt;/p&gt;

    &lt;!-- template كعنصر تجميعي --&gt;
    &lt;template&gt;
      &lt;p&gt;This is grouped&lt;/p&gt;
      &lt;p&gt;Without extra DOM element&lt;/p&gt;
    &lt;/template&gt;
  &lt;/Child&gt;
&lt;/template&gt;</code></pre>
          </div>
        `,
      },
      {
        question: "ما هو الفرق بين v-slot و # في Vue؟",
        answer: `
          <ul class="list-disc pr-6 space-y-3">
            <li>
              <strong><code>v-slot</code>:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>الصيغة <strong>الكاملة</strong> لتحديد الـ Slots.</li>
                <li>تُستخدم مع <code>&lt;template&gt;</code>.</li>
                <li>مثال: <code>v-slot:header</code> أو <code>v-slot:item="{ item }"</code></li>
              </ul>
            </li>
            <li>
              <strong><code>#</code> (اختصار):</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>اختصار (Syntactic Sugar) لـ <code>v-slot</code>.</li>
                <li>أقصر وأكثر وضوحاً.</li>
                <li>مثال: <code>#header</code> أو <code>#item="{ item }"</code></li>
              </ul>
            </li>
          </ul>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>&lt;template&gt;
  &lt;Child&gt;
    &lt;!-- 1. v-slot (الصيغة الكاملة) --&gt;
    &lt;template v-slot:header&gt;
      &lt;h1&gt;Header&lt;/h1&gt;
    &lt;/template&gt;

    &lt;!-- 2. # (اختصار) --&gt;
    &lt;template #header&gt;
      &lt;h1&gt;Header&lt;/h1&gt;
    &lt;/template&gt;

    &lt;!-- 3. v-slot مع Scoped Slot --&gt;
    &lt;template v-slot:item="{ item, index }"&gt;
      &lt;p&gt;{{ index }}: {{ item.name }}&lt;/p&gt;
    &lt;/template&gt;

    &lt;!-- 4. # مع Scoped Slot --&gt;
    &lt;template #item="{ item, index }"&gt;
      &lt;p&gt;{{ index }}: {{ item.name }}&lt;/p&gt;
    &lt;/template&gt;

    &lt;!-- 5. Default Slot مع v-slot --&gt;
    &lt;template v-slot&gt;
      &lt;p&gt;Default content&lt;/p&gt;
    &lt;/template&gt;

    &lt;!-- 6. Default Slot مع # (لا يعمل، استخدم v-slot) --&gt;
    &lt;template #default&gt;
      &lt;p&gt;Default content&lt;/p&gt;
    &lt;/template&gt;
  &lt;/Child&gt;
&lt;/template&gt;</code></pre>
          </div>
          <p class="mt-2"><strong>ملاحظة:</strong> <code>#</code> يعمل فقط مع <code>&lt;template&gt;</code> وليس مع عناصر أخرى.</p>
        `,
      },
      {
        question: "ما هو الفرق بين reactive و ref في Vue 3 مع الأداء؟",
        answer: `
          <ul class="list-disc pr-6 space-y-3">
            <li>
              <strong><code>ref</code>:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>تعمل مع <strong>جميع الأنواع</strong>.</li>
                <li>تستخدم <code>.value</code> للوصول.</li>
                <li>تحتفظ بالتفاعلية عند إعادة التعيين.</li>
                <li>أفضل للأداء مع <strong>الأنواع الأساسية</strong>.</li>
              </ul>
            </li>
            <li>
              <strong><code>reactive</code>:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>تعمل فقط مع <strong>الكائنات</strong>.</li>
                <li>لا تحتاج <code>.value</code>.</li>
                <li>تفقد التفاعلية عند إعادة التعيين.</li>
                <li>أفضل للأداء مع <strong>الكائنات الكبيرة</strong> (أقل Overhead).</li>
              </ul>
            </li>
          </ul>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>// ref - مناسب للأنواع الأساسية
const count = ref(0)
const name = ref('Ahmed')
const isActive = ref(true)

// ref - مع الكائنات (يعمل لكن مع .value)
const user = ref({ name: 'Ahmed', age: 30 })
user.value.name = 'Ali' // يعمل

// reactive - مناسب للكائنات الكبيرة
const user2 = reactive({ name: 'Ahmed', age: 30 })
user2.name = 'Ali' // يعمل بدون .value

// أداء: ref مع الكائنات يضيف طبقة إضافية (.value)
// أداء: reactive مباشر ولا يحتاج .value

// ⚠️ تحذير: reactive تفقد التفاعلية
let user3 = reactive({ name: 'Ahmed' })
user3 = reactive({ name: 'Ali' }) // ❌ تفقد التفاعلية

// ✅ الحل: استخدم ref
let user4 = ref({ name: 'Ahmed' })
user4.value = { name: 'Ali' } // ✅ تبقى تفاعلية

// التوصية: استخدم ref في أغلب الحالات</code></pre>
          </div>
        `,
      },
      {
        question: "كيف تتعامل مع Memory Leaks في Vue؟",
        answer: `
          <p>تسرب الذاكرة (Memory Leaks) يحدث عندما لا يتم تحرير الذاكرة التي لم تعد مستخدمة. في Vue، يمكن تجنب ذلك عن طريق:</p>
          <ul class="list-disc pr-6 space-y-2 mt-2">
            <li>
              <strong>1. تنظيف Event Listeners:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>استخدام <code>onMounted</code> و <code>onUnmounted</code> لإزالة المستمعين.</li>
              </ul>
            </li>
            <li>
              <strong>2. إلغاء الـ Observers:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>إلغاء الـ IntersectionObserver، MutationObserver، إلخ.</li>
              </ul>
            </li>
            <li>
              <strong>3. إلغاء الـ Timers:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>استخدام <code>clearTimeout</code> و <code>clearInterval</code>.</li>
              </ul>
            </li>
            <li>
              <strong>4. إلغاء الـ Subscriptions:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>إلغاء الاشتراكات في Pinia و Vue Router.</li>
              </ul>
            </li>
            <li>
              <strong>5. تجنب استخدام المتغيرات العالمية:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>استخدام <code>window</code> و <code>document</code> بحذر.</li>
              </ul>
            </li>
          </ul>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>&lt;script setup&gt;
import { onMounted, onUnmounted, watch } from 'vue'

let intervalId = null
let eventListener = null

onMounted(() => {
  // 1. Event Listeners
  eventListener = () => console.log('Scrolled')
  window.addEventListener('scroll', eventListener)

  // 2. Timers
  intervalId = setInterval(() => {
    console.log('Interval')
  }, 1000)

  // 3. Observers
  const observer = new IntersectionObserver(() => {})
  observer.observe(document.getElementById('element'))
})

// تنظيف في onUnmounted
onUnmounted(() => {
  // إزالة Event Listeners
  if (eventListener) {
    window.removeEventListener('scroll', eventListener)
  }

  // إلغاء Timers
  if (intervalId) {
    clearInterval(intervalId)
  }

  // إلغاء Observers
  observer.disconnect()
})

// 4. إلغاء watch (إذا كان ضرورياً)
const stopWatch = watch(someRef, () => {})
// تنظيف عند الحاجة
onUnmounted(() => {
  stopWatch()
})

// 5. استخدام storeToRefs للحفاظ على التفاعلية
import { storeToRefs } from 'pinia'
import { useCounterStore } from '@/stores/counter'

const store = useCounterStore()
const { count } = storeToRefs(store) // يحافظ على التفاعلية
&lt;/script&gt;</code></pre>
          </div>
        `,
      },
      {
        question: "ما هو الفرق بين vite و webpack مع Vue؟",
        answer: `
          <ul class="list-disc pr-6 space-y-3">
            <li>
              <strong>Vite (الافتراضي في Vue 3):</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li><strong>أسرع</strong> في التطوير (HMR فوري).</li>
                <li>يستخدم <strong>ES Modules</strong> في التطوير.</li>
                <li>يستخدم <strong>Rollup</strong> للإنتاج.</li>
                <li>تكوين <strong>أسهل</strong> وأقل تعقيداً.</li>
                <li>تحميل <strong>أقل</strong> للمكتبات.</li>
              </ul>
            </li>
            <li>
              <strong>Webpack (القديم):</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li><strong>أبطأ</strong> في التطوير (إعادة بناء كاملة).</li>
                <li>يستخدم <strong>Bundle</strong> واحد في التطوير.</li>
                <li>يستخدم <strong>Webpack</strong> للإنتاج.</li>
                <li>تكوين <strong>أكثر تعقيداً</strong>.</li>
                <li>تحميل <strong>أكثر</strong> للمكتبات.</li>
              </ul>
            </li>
          </ul>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>// Vite - vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    port: 3000,
    proxy: {
      '/api': 'http://localhost:5000'
    }
  },
  build: {
    rollupOptions: {
      external: ['vue']
    }
  }
})

// Webpack - webpack.config.js
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  module: {
    rules: [
      {
        test: /.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}</code></pre>
          </div>
        `,
      },
      // ============================
      // المستوى الرابع: متقدم جداً (Advanced Plus) - 40 سؤال
      // ============================
      {
        question: "ما هو الفرق بين Composition API و Options API في الأداء؟",
        answer: `
          <ul class="list-disc pr-6 space-y-3">
            <li>
              <strong>Composition API:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>أداء <strong>أفضل</strong> مع المكونات الكبيرة.</li>
                <li>تتبع التبعيات <strong>أكثر كفاءة</strong>.</li>
                <li>يدعم <strong>Tree Shaking</strong> أفضل.</li>
                <li>تحميل <strong>أقل</strong> للكود غير المستخدم.</li>
              </ul>
            </li>
            <li>
              <strong>Options API:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>أداء <strong>جيد</strong> مع المكونات الصغيرة.</li>
                <li>تتبع التبعيات <strong>أقل كفاءة</strong>.</li>
                <li>يدعم Tree Shaking <strong>محدود</strong>.</li>
                <li>تحميل <strong>أكثر</strong> للكود غير المستخدم.</li>
              </ul>
            </li>
          </ul>
          <div class="mt-3 p-3 bg-blue-50 dark:bg-blue-900/20 border-r-4 border-blue-500 rounded">
            <p class="text-sm"><strong>📌 ملاحظة:</strong> الفرق في الأداء ملحوظ في المكونات الكبيرة فقط. للمكونات الصغيرة، الفرق ضئيل.</p>
          </div>
        `,
      },
      {
        question: "كيف تعمل Reactivity في Vue 3 (Proxy vs defineProperty)؟",
        answer: `
          <ul class="list-disc pr-6 space-y-3">
            <li>
              <strong>Vue 2 (defineProperty):</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>يستخدم <code>Object.defineProperty</code>.</li>
                <li>يحتاج إلى <strong>استبدال</strong> الكائنات والمصفوفات.</li>
                <li>لا يدعم <strong>الخصائص الديناميكية</strong> (يحتاج <code>Vue.set</code>).</li>
                <li>لا يدعم <strong>المصفوفات</strong> بشكل كامل.</li>
              </ul>
            </li>
            <li>
              <strong>Vue 3 (Proxy):</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>يستخدم <code>Proxy</code>.</li>
                <li>يدعم <strong>جميع التغييرات</strong> تلقائياً.</li>
                <li>يدعم <strong>الخصائص الديناميكية</strong> بدون إضافات.</li>
                <li>يدعم <strong>المصفوفات</strong> بشكل كامل.</li>
                <li><strong>أسرع</strong> وأكثر كفاءة.</li>
              </ul>
            </li>
          </ul>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>// Vue 2 - defineProperty
const data = { count: 0 }
Object.defineProperty(data, 'count', {
  get() { return data._count },
  set(value) {
    data._count = value
    // تحديث DOM
  }
})

// Vue 3 - Proxy
const data = { count: 0 }
const proxy = new Proxy(data, {
  get(target, key) {
    // جمع التبعيات
    return target[key]
  },
  set(target, key, value) {
    target[key] = value
    // تحديث DOM
    return true
  }
})

// الفرق العملي
// Vue 2 - تحتاج Vue.set لإضافة خاصية جديدة
Vue.set(obj, 'newProp', value)

// Vue 3 - تعمل مباشرة
obj.newProp = value</code></pre>
          </div>
        `,
      },
      {
        question: "ما هو الفرق بين Teleport و Portal في React؟",
        answer: `
          <ul class="list-disc pr-6 space-y-3">
            <li>
              <strong>Teleport (Vue 3):</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>ميزة <strong>مدمجة</strong> في Vue 3.</li>
                <li>تُستخدم مع <code>&lt;Teleport&gt;</code>.</li>
                <li>تدعم <code>:disabled</code> لتعطيل النقل.</li>
                <li>أسهل في الاستخدام.</li>
              </ul>
            </li>
            <li>
              <strong>Portal (React):</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>ليس مدمجاً في React (يحتاج <code>react-dom</code>).</li>
                <li>تُستخدم مع <code>ReactDOM.createPortal()</code>.</li>
                <li>لا تدعم التعطيل المدمج.</li>
                <li>تحتاج استيراد إضافي.</li>
              </ul>
            </li>
          </ul>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>// Vue Teleport
&lt;template&gt;
  &lt;Teleport to="body"&gt;
    &lt;div class="modal"&gt;Modal content&lt;/div&gt;
  &lt;/Teleport&gt;

  &lt;!-- مع تعطيل النقل --&gt;
  &lt;Teleport to="body" :disabled="isMobile"&gt;
    &lt;div class="modal"&gt;Modal content&lt;/div&gt;
  &lt;/Teleport&gt;
&lt;/template&gt;

// React Portal
import ReactDOM from 'react-dom'

function Modal({ children }) {
  return ReactDOM.createPortal(
    &lt;div className="modal"&gt;{children}&lt;/div&gt;,
    document.body
  )
}</code></pre>
          </div>
        `,
      },
      {
        question: "ما هو الفرق بين Pinia و Vuex في الأداء؟",
        answer: `
          <ul class="list-disc pr-6 space-y-3">
            <li>
              <strong>Pinia:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li><strong>أخف وزناً</strong> (حجم أقل).</li>
                <li><strong>أسرع</strong> في التحديثات.</li>
                <li>يدعم <strong>Tree Shaking</strong> أفضل.</li>
                <li>تتبع التبعيات <strong>أكثر كفاءة</strong>.</li>
              </ul>
            </li>
            <li>
              <strong>Vuex:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li><strong>أثقل وزناً</strong> (حجم أكبر).</li>
                <li><strong>أبطأ</strong> في التحديثات.</li>
                <li>يدعم Tree Shaking <strong>محدود</strong>.</li>
                <li>تتبع التبعيات <strong>أقل كفاءة</strong>.</li>
              </ul>
            </li>
          </ul>
          <div class="mt-3 p-3 bg-blue-50 dark:bg-blue-900/20 border-r-4 border-blue-500 rounded">
            <p class="text-sm"><strong>📌 ملاحظة:</strong> الفرق في الأداء ملحوظ في التطبيقات الكبيرة. Pinia أسرع بنسبة ~20-30% في بعض السيناريوهات.</p>
          </div>
        `,
      },
      {
        question: "كيف تعمل التوجيهات المخصصة (Custom Directives) في Vue؟",
        answer: `
          <p>التوجيهات المخصصة تسمح بتطبيق سلوك محدد على العناصر في الـ DOM.</p>
          <ul class="list-disc pr-6 space-y-2 mt-2">
            <li>
              <strong>دورة حياة التوجيه:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li><code>beforeMount</code> - قبل إضافة العنصر.</li>
                <li><code>mounted</code> - بعد إضافة العنصر.</li>
                <li><code>beforeUpdate</code> - قبل تحديث العنصر.</li>
                <li><code>updated</code> - بعد تحديث العنصر.</li>
                <li><code>beforeUnmount</code> - قبل إزالة العنصر.</li>
                <li><code>unmounted</code> - بعد إزالة العنصر.</li>
              </ul>
            </li>
          </ul>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>// 1. تعريف Directive
// directives/clickOutside.js
export default {
  beforeMount(el, binding) {
    el.clickOutsideEvent = (event) => {
      if (!(el === event.target || el.contains(event.target))) {
        binding.value(event)
      }
    }
    document.addEventListener('click', el.clickOutsideEvent)
  },
  beforeUnmount(el) {
    document.removeEventListener('click', el.clickOutsideEvent)
  }
}

// 2. تعريف Directive مع معاملات
// directives/intersection.js
export default {
  mounted(el, binding) {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        binding.value()
      }
    })
    observer.observe(el)
    el._observer = observer
  },
  beforeUnmount(el) {
    el._observer.disconnect()
  }
}

// 3. تسجيل Directive
// main.js
import clickOutside from './directives/clickOutside'
import intersection from './directives/intersection'

const app = createApp(App)
app.directive('click-outside', clickOutside)
app.directive('intersection', intersection)

// 4. استخدام Directive
&lt;template&gt;
  &lt;div v-click-outside="handleClickOutside"&gt;
    Click outside me
  &lt;/div&gt;

  &lt;div v-intersection="handleIntersection"&gt;
    Intersection observer
  &lt;/div&gt;

  &lt;!-- مع معاملات --&gt;
  &lt;div v-click-outside="() => console.log('Clicked outside')"&gt;
    Click outside
  &lt;/div&gt;

  &lt;!-- مع modifiers --&gt;
  &lt;div v-click-outside.once="handleClickOnce"&gt;
    Click outside (once)
  &lt;/div&gt;
&lt;/template&gt;</code></pre>
          </div>
        `,
      },
      {
        question: "كيف تتعامل مع الأحداث العالمية (Global Events) في Vue؟",
        answer: `
          <p>للتعامل مع الأحداث العالمية، استخدم <code>onMounted</code> لإضافة المستمعين و <code>onUnmounted</code> لإزالتهم.</p>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>&lt;script setup&gt;
import { onMounted, onUnmounted, ref } from 'vue'

const isOnline = ref(navigator.onLine)
const scrollY = ref(0)

// 1. حدث Window
const handleResize = () => {
  console.log('Window resized:', window.innerWidth)
}

const handleScroll = () => {
  scrollY.value = window.scrollY
}

// 2. حدث Document
const handleKeydown = (e) => {
  if (e.key === 'Escape') {
    console.log('Escape pressed')
  }
}

// 3. حدث Network
const handleOnline = () => {
  isOnline.value = true
  console.log('Online')
}

const handleOffline = () => {
  isOnline.value = false
  console.log('Offline')
}

onMounted(() => {
  // إضافة المستمعين
  window.addEventListener('resize', handleResize)
  window.addEventListener('scroll', handleScroll)
  document.addEventListener('keydown', handleKeydown)
  window.addEventListener('online', handleOnline)
  window.addEventListener('offline', handleOffline)
})

onUnmounted(() => {
  // إزالة المستمعين
  window.removeEventListener('resize', handleResize)
  window.removeEventListener('scroll', handleScroll)
  document.removeEventListener('keydown', handleKeydown)
  window.removeEventListener('online', handleOnline)
  window.removeEventListener('offline', handleOffline)
})

// 4. استخدام composable لإعادة الاستخدام
// composables/useWindowEvent.js
export function useWindowEvent(event, handler) {
  onMounted(() => {
    window.addEventListener(event, handler)
  })
  onUnmounted(() => {
    window.removeEventListener(event, handler)
  })
}

// استخدام composable
useWindowEvent('resize', () => console.log('Resized'))
&lt;/script&gt;</code></pre>
          </div>
        `,
      },
      {
        question: "كيف تتعامل مع النماذج (Forms) في Vue؟",
        answer: `
          <p>في Vue، يمكن التعامل مع النماذج باستخدام <code>v-model</code> و <code>@submit</code> و <code>@input</code>.</p>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>&lt;template&gt;
  &lt;form @submit.prevent="handleSubmit"&gt;
    &lt;!-- 1. v-model بسيط --&gt;
    &lt;input v-model="form.name" placeholder="Name" /&gt;
    &lt;input v-model="form.email" type="email" placeholder="Email" /&gt;
    &lt;textarea v-model="form.message" placeholder="Message" /&gt;

    &lt;!-- 2. v-model مع modifiers --&gt;
    &lt;input v-model.trim="form.name" placeholder="Name" /&gt;
    &lt;input v-model.number="form.age" type="number" placeholder="Age" /&gt;
    &lt;input v-model.lazy="form.description" placeholder="Description" /&gt;

    &lt;!-- 3. Checkbox --&gt;
    &lt;input type="checkbox" v-model="form.accepted" /&gt; Accept terms

    &lt;!-- 4. Radio --&gt;
    &lt;input type="radio" value="male" v-model="form.gender" /&gt; Male
    &lt;input type="radio" value="female" v-model="form.gender" /&gt; Female

    &lt;!-- 5. Select --&gt;
    &lt;select v-model="form.country"&gt;
      &lt;option value="eg"&gt;Egypt&lt;/option&gt;
      &lt;option value="sa"&gt;Saudi Arabia&lt;/option&gt;
    &lt;/select&gt;

    &lt;!-- 6. Validation --&gt;
    &lt;div v-if="errors.name" class="error"&gt;{{ errors.name }}&lt;/div&gt;

    &lt;!-- 7. Submit --&gt;
    &lt;button type="submit" :disabled="isSubmitting"&gt;
      {{ isSubmitting ? 'Submitting...' : 'Submit' }}
    &lt;/button&gt;
  &lt;/form&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref, reactive } from 'vue'

const form = reactive({
  name: '',
  email: '',
  message: '',
  age: null,
  description: '',
  accepted: false,
  gender: 'male',
  country: 'eg'
})

const errors = ref({})
const isSubmitting = ref(false)

const validate = () => {
  errors.value = {}
  if (!form.name) {
    errors.value.name = 'Name is required'
  }
  if (!form.email) {
    errors.value.email = 'Email is required'
  }
  return Object.keys(errors.value).length === 0
}

const handleSubmit = async () => {
  if (!validate()) return

  isSubmitting.value = true
  try {
    // إرسال البيانات
    const response = await fetch('/api/submit', {
      method: 'POST',
      body: JSON.stringify(form)
    })
    const data = await response.json()
    console.log('Success:', data)
  } catch (error) {
    console.error('Error:', error)
  } finally {
    isSubmitting.value = false
  }
}
&lt;/script&gt;</code></pre>
          </div>
        `,
      },
      {
        question: "كيف تتعامل مع الـ Validation في Vue؟",
        answer: `
          <ul class="list-disc pr-6 space-y-2 mt-2">
            <li>
              <strong>1. Validation يدوية:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>استخدام دوال للتحقق من صحة البيانات.</li>
                <li>عرض رسائل الخطأ في Template.</li>
              </ul>
            </li>
            <li>
              <strong>2. VeeValidate (مكتبة شائعة):</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>مكتبة قوية لـ Validation في Vue.</li>
                <li>تدعم <code>yup</code> و <code>zod</code>.</li>
                <li>سهلة الاستخدام مع Composition API.</li>
              </ul>
            </li>
            <li>
              <strong>3. Yup (مكتبة Schema Validation):</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>مكتبة لتعريف Schema والتحقق منها.</li>
                <li>تستخدم مع VeeValidate أو يدوياً.</li>
              </ul>
            </li>
          </ul>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>// 1. Validation يدوية
&lt;script setup&gt;
import { ref } from 'vue'

const form = ref({ name: '', email: '' })
const errors = ref({})

const validate = () => {
  errors.value = {}
  if (!form.value.name) {
    errors.value.name = 'Name is required'
  }
  if (!form.value.email) {
    errors.value.email = 'Email is required'
  } else if (!/^[^s@]+@[^s@]+.[^s@]+$/.test(form.value.email)) {
    errors.value.email = 'Invalid email format'
  }
  return Object.keys(errors.value).length === 0
}
&lt;/script&gt;

// 2. VeeValidate + Yup
&lt;script setup&gt;
import { useField, useForm } from 'vee-validate'
import * as yup from 'yup'

const schema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  age: yup.number().min(18, 'Must be 18+').required()
})

const { handleSubmit, errors } = useForm({
  validationSchema: schema
})

const { value: name } = useField('name')
const { value: email } = useField('email')
const { value: age } = useField('age')

const onSubmit = handleSubmit((values) => {
  console.log('Form submitted:', values)
})
&lt;/script&gt;

&lt;template&gt;
  &lt;form @submit="onSubmit"&gt;
    &lt;input v-model="name" placeholder="Name" /&gt;
    &lt;div class="error"&gt;{{ errors.name }}&lt;/div&gt;

    &lt;input v-model="email" placeholder="Email" /&gt;
    &lt;div class="error"&gt;{{ errors.email }}&lt;/div&gt;

    &lt;input v-model.number="age" type="number" placeholder="Age" /&gt;
    &lt;div class="error"&gt;{{ errors.age }}&lt;/div&gt;

    &lt;button type="submit"&gt;Submit&lt;/button&gt;
  &lt;/form&gt;
&lt;/template&gt;</code></pre>
          </div>
        `,
      },
      {
        question: "كيف تتعامل مع الـ API في Vue؟",
        answer: `
          <ul class="list-disc pr-6 space-y-2 mt-2">
            <li>
              <strong>1. استخدام fetch (مدمج):</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>طلب HTTP باستخدام <code>fetch</code>.</li>
                <li>معالجة البيانات وعرضها.</li>
              </ul>
            </li>
            <li>
              <strong>2. استخدام Axios (مكتبة شائعة):</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>مكتبة قوية لطلبات HTTP.</li>
                <li>تدعم interceptor، تحويل البيانات، إلخ.</li>
              </ul>
            </li>
            <li>
              <strong>3. استخدام Composables:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>إنشاء composable لإعادة استخدام منطق API.</li>
              </ul>
            </li>
          </ul>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>// 1. fetch في المكون
&lt;script setup&gt;
import { ref, onMounted } from 'vue'

const users = ref([])
const loading = ref(false)
const error = ref(null)

const fetchUsers = async () => {
  loading.value = true
  try {
    const response = await fetch('https://api.example.com/users')
    users.value = await response.json()
  } catch (err) {
    error.value = err.message
  } finally {
    loading.value = false
  }
}

onMounted(fetchUsers)
&lt;/script&gt;

// 2. Axios
&lt;script setup&gt;
import axios from 'axios'
import { ref, onMounted } from 'vue'

const users = ref([])

const fetchUsers = async () => {
  try {
    const response = await axios.get('https://api.example.com/users')
    users.value = response.data
  } catch (error) {
    console.error('Error:', error)
  }
}

onMounted(fetchUsers)
&lt;/script&gt;

// 3. Composable useFetch
// composables/useFetch.js
import { ref, onMounted } from 'vue'

export function useFetch(url) {
  const data = ref(null)
  const loading = ref(false)
  const error = ref(null)

  const fetchData = async () => {
    loading.value = true
    try {
      const response = await fetch(url)
      data.value = await response.json()
    } catch (err) {
      error.value = err.message
    } finally {
      loading.value = false
    }
  }

  onMounted(fetchData)

  return { data, loading, error, refetch: fetchData }
}

// استخدام composable
&lt;script setup&gt;
const { data, loading, error } = useFetch('https://api.example.com/users')
&lt;/script&gt;</code></pre>
          </div>
        `,
      },
      {
        question: "كيف تتعامل مع الـ Authentication في Vue؟",
        answer: `
          <ul class="list-disc pr-6 space-y-2 mt-2">
            <li>
              <strong>1. JWT Authentication:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>تخزين التوكن في <code>localStorage</code> أو <code>cookies</code>.</li>
                <li>إضافة التوكن في هيدر الطلبات.</li>
              </ul>
            </li>
            <li>
              <strong>2. Pinia Store للمصادقة:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>إنشاء Store لإدارة حالة المستخدم.</li>
                <li>تخزين التوكن ومعلومات المستخدم.</li>
              </ul>
            </li>
            <li>
              <strong>3. Route Guards:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>استخدام <code>beforeEach</code> للتحقق من المصادقة.</li>
              </ul>
            </li>
          </ul>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>// 1. Pinia Store للمصادقة
// stores/auth.js
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    token: localStorage.getItem('token'),
    isAuthenticated: false
  }),
  actions: {
    async login(email, password) {
      const response = await fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify({ email, password })
      })
      const data = await response.json()
      this.token = data.token
      this.user = data.user
      this.isAuthenticated = true
      localStorage.setItem('token', data.token)
    },
    logout() {
      this.user = null
      this.token = null
      this.isAuthenticated = false
      localStorage.removeItem('token')
    }
  }
})

// 2. Route Guard
// router/index.js
import { useAuthStore } from '@/stores/auth'

router.beforeEach((to, from) => {
  const authStore = useAuthStore()
  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    return { name: 'login' }
  }
})

// 3. Axios Interceptor
import axios from 'axios'

axios.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = \`Bearer \${token}\`
  }
  return config
})

// 4. استخدام في المكونات
&lt;script setup&gt;
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'

const authStore = useAuthStore()
const router = useRouter()

const handleLogin = async () => {
  await authStore.login('email@example.com', 'password')
  router.push('/dashboard')
}

const handleLogout = () => {
  authStore.logout()
  router.push('/login')
}
&lt;/script&gt;</code></pre>
          </div>
        `,
      },
      {
        question: "كيف تتعامل مع الـ Environment Variables في Vue؟",
        answer: `
          <p>في Vue (مع Vite)، يمكن استخدام <code>import.meta.env</code> للوصول إلى متغيرات البيئة.</p>
          <ul class="list-disc pr-6 space-y-2 mt-2">
            <li>
              <strong>ملفات .env:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li><code>.env</code> - لجميع البيئات.</li>
                <li><code>.env.development</code> - للتطوير.</li>
                <li><code>.env.production</code> - للإنتاج.</li>
                <li><code>.env.local</code> - محلي (لا يُرفع لـ Git).</li>
              </ul>
            </li>
          </ul>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>// .env
VITE_API_URL=https://api.example.com
VITE_APP_NAME=My Vue App

// .env.development
VITE_API_URL=http://localhost:5000

// .env.production
VITE_API_URL=https://api.production.com

// استخدام في Vue
&lt;script setup&gt;
const apiUrl = import.meta.env.VITE_API_URL
const appName = import.meta.env.VITE_APP_NAME

console.log('API URL:', apiUrl) // http://localhost:5000 (في التطوير)

// استخدام مع axios
import axios from 'axios'
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL
})

// التحقق من البيئة
if (import.meta.env.PROD) {
  console.log('Production mode')
} else if (import.meta.env.DEV) {
  console.log('Development mode')
}

// في vite.config.js
export default defineConfig({
  define: {
    __APP_VERSION__: JSON.stringify('1.0.0')
  }
})
&lt;/script&gt;</code></pre>
          </div>
          <p class="mt-2"><strong>ملاحظة:</strong> في Vue مع Vite، يجب أن تبدأ متغيرات البيئة بـ <code>VITE_</code> لتكون متاحة.</p>
        `,
      },
      {
        question: "كيف تتعامل مع الـ Internationalization (i18n) في Vue؟",
        answer: `
          <p>للتعامل مع الترجمة في Vue، استخدم <code>vue-i18n</code>.</p>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>// 1. تثبيت vue-i18n
// npm install vue-i18n

// 2. إعداد i18n
// i18n/index.js
import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    welcome: 'Welcome',
    home: 'Home',
    about: 'About',
    contact: 'Contact'
  },
  ar: {
    welcome: 'مرحباً',
    home: 'الرئيسية',
    about: 'عن الموقع',
    contact: 'اتصل بنا'
  }
}

const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages
})

export default i18n

// 3. استخدام i18n
// main.js
import i18n from './i18n'
app.use(i18n)

// 4. استخدام في المكونات
&lt;template&gt;
  &lt;div&gt;
    &lt;h1&gt;{{ $t('welcome') }}&lt;/h1&gt;
    &lt;p&gt;{{ $t('home') }}&lt;/p&gt;
    &lt;button @click="changeLanguage('ar')"&gt;العربية&lt;/button&gt;
    &lt;button @click="changeLanguage('en')"&gt;English&lt;/button&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const changeLanguage = (lang) => {
  locale.value = lang
}

// استخدام في script
const { t } = useI18n()
console.log(t('welcome')) // 'Welcome'
&lt;/script&gt;</code></pre>
          </div>
        `,
      },
      {
        question: "كيف تتعامل مع الـ Testing في Vue؟",
        answer: `
          <ul class="list-disc pr-6 space-y-2 mt-2">
            <li>
              <strong>1. Unit Testing (Vitest):</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>اختبار المكونات والدوال.</li>
                <li>استخدام <code>vitest</code> و <code>@vue/test-utils</code>.</li>
              </ul>
            </li>
            <li>
              <strong>2. Component Testing:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>اختبار المكونات مع الـ DOM.</li>
                <li>استخدام <code>@vue/test-utils</code>.</li>
              </ul>
            </li>
            <li>
              <strong>3. E2E Testing (Cypress):</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>اختبار التطبيق من البداية للنهاية.</li>
                <li>استخدام <code>cypress</code> أو <code>playwright</code>.</li>
              </ul>
            </li>
          </ul>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>// 1. Unit Test مع Vitest
// tests/component.spec.js
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Component from './Component.vue'

describe('Component', () => {
  it('renders correctly', () => {
    const wrapper = mount(Component, {
      props: { title: 'Hello' }
    })
    expect(wrapper.text()).toContain('Hello')
  })

  it('handles click', async () => {
    const wrapper = mount(Component)
    await wrapper.find('button').trigger('click')
    expect(wrapper.vm.count).toBe(1)
  })
})

// 2. Composable Test
// tests/composable.spec.js
import { describe, it, expect } from 'vitest'
import { useCounter } from '@/composables/useCounter'

describe('useCounter', () => {
  it('initializes correctly', () => {
    const { count } = useCounter(10)
    expect(count.value).toBe(10)
  })

  it('increments correctly', () => {
    const { count, increment } = useCounter()
    increment()
    expect(count.value).toBe(1)
  })
})

// 3. Pinia Store Test
// tests/store.spec.js
import { describe, it, expect } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useCounterStore } from '@/stores/counter'

describe('Counter Store', () => {
  it('increments correctly', () => {
    setActivePinia(createPinia())
    const store = useCounterStore()
    store.increment()
    expect(store.count).toBe(1)
  })
})</code></pre>
          </div>
        `,
      },
      {
        question: "كيف تنشر تطبيق Vue على Vercel أو Netlify؟",
        answer: `
          <ul class="list-disc pr-6 space-y-2 mt-2">
            <li>
              <strong>1. بناء التطبيق:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li><code>npm run build</code> أو <code>yarn build</code></li>
                <li>ينشئ مجلد <code>dist</code>.</li>
              </ul>
            </li>
            <li>
              <strong>2. Vercel:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>رفع المشروع على GitHub.</li>
                <li>ربط الـ GitHub مع Vercel.</li>
                <li>النشر التلقائي عند الدفع (Push).</li>
              </ul>
            </li>
            <li>
              <strong>3. Netlify:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>رفع المشروع على GitHub.</li>
                <li>ربط الـ GitHub مع Netlify.</li>
                <li>النشر التلقائي عند الدفع (Push).</li>
              </ul>
            </li>
          </ul>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>// 1. package.json - إضافة scripts
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}

// 2. vite.config.js - تهيئة النشر
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/', // أو اسم المستودع إذا كان GitHub Pages
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})

// 3. vercel.json (لـ Vercel)
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}

// 4. netlify.toml (لـ Netlify)
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

// 5. GitHub Actions (النشر التلقائي)
// .github/workflows/deploy.yml
name: Deploy
on: push
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with: { node-version: '18' }
      - run: npm install
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: \${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist</code></pre>
          </div>
        `,
      },
      {
        question: "كيف تتعامل مع الـ SEO في Vue؟",
        answer: `
          <ul class="list-disc pr-6 space-y-2 mt-2">
            <li>
              <strong>1. SSR (Server-Side Rendering):</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>استخدام <strong>Nuxt.js</strong> أو <strong>Vite SSR</strong>.</li>
                <li>يعرض الصفحات على الخادم لتحسين SEO.</li>
              </ul>
            </li>
            <li>
              <strong>2. Meta Tags:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>استخدام <code>vue-meta</code> أو <code>@vueuse/head</code>.</li>
                <li>تعيين <code>title</code>، <code>description</code>، <code>keywords</code>.</li>
              </ul>
            </li>
            <li>
              <strong>3. Sitemap و Robots.txt:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>إنشاء <code>sitemap.xml</code> و <code>robots.txt</code>.</li>
              </ul>
            </li>
          </ul>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>// 1. استخدام @vueuse/head
// npm install @vueuse/head

// main.js
import { createHead } from '@vueuse/head'
const head = createHead()
app.use(head)

// في المكون
&lt;script setup&gt;
import { useHead } from '@vueuse/head'

useHead({
  title: 'الصفحة الرئيسية',
  meta: [
    { name: 'description', content: 'وصف الصفحة' },
    { property: 'og:title', content: 'عنوان الصفحة' },
    { property: 'og:image', content: '/image.jpg' }
  ],
  link: [
    { rel: 'canonical', href: 'https://example.com' }
  ]
})
&lt;/script&gt;

// 2. Nuxt.js SEO
// nuxt.config.ts
export default defineNuxtConfig({
  app: {
    head: {
      title: 'My Vue App',
      meta: [
        { name: 'description', content: 'وصف التطبيق' }
      ]
    }
  }
})

// 3. sitemap.xml (static)
// public/sitemap.xml
&lt;?xml version="1.0" encoding="UTF-8"?&gt;
&lt;urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"&gt;
  &lt;url&gt;
    &lt;loc&gt;https://example.com/&lt;/loc&gt;
    &lt;lastmod&gt;2024-01-01&lt;/lastmod&gt;
    &lt;priority&gt;1.0&lt;/priority&gt;
  &lt;/url&gt;
&lt;/urlset&gt;</code></pre>
          </div>
        `,
      },
      {
        question: "كيف تتعامل مع الـ Accessibility (a11y) في Vue؟",
        answer: `
          <p>للتعامل مع إمكانية الوصول في Vue، اتبع هذه الممارسات:</p>
          <ul class="list-disc pr-6 space-y-2 mt-2">
            <li>
              <strong>1. استخدام عناصر HTML الصحيحة:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>استخدام <code>&lt;button&gt;</code> بدلاً من <code>&lt;div&gt;</code> للأزرار.</li>
                <li>استخدام <code>&lt;h1&gt;</code>-<code>&lt;h6&gt;</code> للعناوين.</li>
              </ul>
            </li>
            <li>
              <strong>2. إضافة ARIA attributes:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>استخدام <code>aria-label</code>، <code>aria-describedby</code>.</li>
                <li>استخدام <code>role</code> عند الحاجة.</li>
              </ul>
            </li>
            <li>
              <strong>3. إدارة التركيز (Focus):</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>استخدام <code>v-focus</code> للتحكم في التركيز.</li>
                <li>تأكد من إمكانية التنقل باستخدام لوحة المفاتيح.</li>
              </ul>
            </li>
          </ul>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>&lt;template&gt;
  &lt;div&gt;
    &lt;!-- 1. استخدام عناصر HTML الصحيحة --&gt;
    &lt;button @click="handleClick"&gt;Click me&lt;/button&gt;
    &lt;h1&gt;عنوان رئيسي&lt;/h1&gt;

    &lt;!-- 2. ARIA attributes --&gt;
    &lt;input
      aria-label="البحث"
      aria-describedby="search-help"
      v-model="search"
    /&gt;
    &lt;span id="search-help"&gt;اكتب كلمة البحث&lt;/span&gt;

    &lt;!-- 3. دور (Role) --&gt;
    &lt;div role="alert" aria-live="polite"&gt;
      {{ errorMessage }}
    &lt;/div&gt;

    &lt;!-- 4. v-focus للتحكم في التركيز --&gt;
    &lt;input v-focus v-model="name" placeholder="الاسم" /&gt;

    &lt;!-- 5. استخدام v-once للتحسين --&gt;
    &lt;div v-once&gt;{{ staticContent }}&lt;/div&gt;

    &lt;!-- 6. إدارة التركيز في المكونات --&gt;
    &lt;Modal v-model:visible="showModal" @open="handleOpen"&gt;
      &lt;input ref="modalInput" placeholder="أدخل البيانات" /&gt;
    &lt;/Modal&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref, nextTick, onMounted } from 'vue'

const search = ref('')
const errorMessage = ref('')
const name = ref('')
const showModal = ref(false)
const modalInput = ref(null)

const handleOpen = async () =&gt; {
  await nextTick()
  modalInput.value?.focus()
}

const handleClick = () =&gt; {
  // معالجة الحدث
}

// 7. استخدام composable للتركيز
// composables/useFocus.js
import { nextTick, ref } from 'vue'

export function useFocus() {
  const focused = ref(null)

  const focusElement = async (element) => {
    await nextTick()
    element?.focus()
    focused.value = element
  }

  return { focusElement, focused }
}
&lt;/script&gt;</code></pre>
          </div>
        `,
      },
      {
        question: "كيف تتعامل مع الـ Performance في Vue؟",
        answer: `
          <ul class="list-disc pr-6 space-y-2 mt-2">
            <li>
              <strong>1. استخدام <code>v-once</code> و <code>v-memo</code>:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>لمنع إعادة الرسم غير الضرورية.</li>
              </ul>
            </li>
            <li>
              <strong>2. استخدام <code>shallowRef</code> و <code>shallowReactive</code>:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>للبيانات الكبيرة التي لا تحتاج تفاعلية عميقة.</li>
              </ul>
            </li>
            <li>
              <strong>3. Lazy Loading للمكونات:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>استخدام <code>defineAsyncComponent</code>.</li>
              </ul>
            </li>
            <li>
              <strong>4. استخدام <code>computed</code> بدلاً من <code>methods</code>:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>للاستفادة من التخزين المؤقت.</li>
              </ul>
            </li>
            <li>
              <strong>5. استخدام <code>KeepAlive</code>:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>الحفاظ على حالة المكونات عند التنقل.</li>
              </ul>
            </li>
          </ul>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>&lt;template&gt;
  &lt;div&gt;
    &lt;!-- 1. v-once - عرض مرة واحدة --&gt;
    &lt;div v-once&gt;{{ staticData }}&lt;/div&gt;

    &lt;!-- 2. v-memo - تخزين مؤقت --&gt;
    &lt;div v-memo="[user.id]"&gt;
      {{ user.name }} - {{ user.email }}
    &lt;/div&gt;

    &lt;!-- 3. Lazy Loading --&gt;
    &lt;component :is="lazyComponent" /&gt;

    &lt;!-- 4. KeepAlive --&gt;
    &lt;KeepAlive&gt;
      &lt;component :is="currentTab" /&gt;
    &lt;/KeepAlive&gt;

    &lt;!-- 5. استخدام computed للفلترة --&gt;
    &lt;div v-for="item in activeItems" :key="item.id"&gt;
      {{ item.name }}
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref, computed, defineAsyncComponent, shallowRef } from 'vue'

// 1. v-memo مع المصفوفات الكبيرة
const items = ref(Array(1000).fill().map((_, i) => ({ id: i, name: \`Item \${i}\` })))
const searchQuery = ref('')
const activeItems = computed(() => {
  return items.value.filter(item => 
    item.name.includes(searchQuery.value)
  )
})

// 2. Lazy Loading
const lazyComponent = defineAsyncComponent(() => 
  import('./HeavyComponent.vue')
)

// 3. shallowRef للبيانات الكبيرة
const bigData = shallowRef({
  hugeArray: Array(10000).fill('data'),
  metadata: { version: '1.0' }
})

// 4. استخدام computed مع caching
const filteredData = computed(() => {
  return bigData.value.hugeArray.filter(item => item.includes('data'))
})

// 5. تحسين v-for مع key
const itemsList = ref([/* ... */])
// ✅ استخدم key فريد
&lt;template&gt;
  &lt;div v-for="item in itemsList" :key="item.id"&gt;
    {{ item.name }}
  &lt;/div&gt;
&lt;/template&gt;
&lt;/script&gt;</code></pre>
          </div>
        `,
      },
      {
        question: "كيف تتعامل مع الـ State Management في Vue؟",
        answer: `
          <ul class="list-disc pr-6 space-y-2 mt-2">
            <li>
              <strong>1. Local State (useState/ref):</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>للمكونات الصغيرة والمستقلة.</li>
              </ul>
            </li>
            <li>
              <strong>2. Props & Emits:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>للمكونات المتجاورة (أب ← ابن).</li>
              </ul>
            </li>
            <li>
              <strong>3. Provide/Inject:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>للمكونات البعيدة (أب ← حفيد).</li>
              </ul>
            </li>
            <li>
              <strong>4. Pinia (Vuex):</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>للتطبيقات الكبيرة والمشتركة.</li>
              </ul>
            </li>
            <li>
              <strong>5. Composables:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>لإعادة استخدام المنطق.</li>
              </ul>
            </li>
          </ul>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>// 1. Local State
&lt;script setup&gt;
import { ref } from 'vue'
const count = ref(0)
&lt;/script&gt;

// 2. Props & Emits
&lt;script setup&gt;
const props = defineProps(['count'])
const emit = defineEmits(['update:count'])
&lt;/script&gt;

// 3. Provide/Inject
// الأب
provide('theme', 'dark')

// الابن
const theme = inject('theme')

// 4. Pinia Store
// stores/counter.js
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0
  }),
  actions: {
    increment() {
      this.count++
    }
  }
})

// استخدام Pinia
const store = useCounterStore()
store.increment()

// 5. Composables
// composables/useCounter.js
export function useCounter(initial = 0) {
  const count = ref(initial)
  const increment = () => count.value++
  return { count, increment }
}

// استخدام
const { count, increment } = useCounter()</code></pre>
          </div>
        `,
      },
      {
        question: "كيف تتعامل مع الـ Routing في Vue؟",
        answer: `
          <p>للتعامل مع التوجيه في Vue، استخدم <code>vue-router</code>.</p>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>// 1. إعداد Router
// router/index.js
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/About.vue')
  },
  {
    path: '/user/:id',
    name: 'user',
    component: () => import('@/views/User.vue'),
    props: true,
    meta: { requiresAuth: true }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/views/NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// 2. Route Guards
router.beforeEach((to, from) => {
  const authStore = useAuthStore()
  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    return { name: 'login' }
  }
})

// 3. استخدام في المكونات
&lt;template&gt;
  &lt;div&gt;
    &lt;router-link to="/"&gt;Home&lt;/router-link&gt;
    &lt;router-link :to="{ name: 'about' }"&gt;About&lt;/router-link&gt;
    &lt;router-link :to="{ name: 'user', params: { id: 1 } }"&gt;User&lt;/router-link&gt;

    &lt;router-view /&gt;

    &lt;!-- Nested Routes --&gt;
    &lt;router-view name="sidebar" /&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

// التنقل برمجياً
const navigate = () =&gt; {
  router.push('/about')
  router.push({ name: 'user', params: { id: 1 } })
  router.replace('/home')
  router.back()
  router.forward()
}

// الوصول إلى المعاملات
console.log(route.params.id)
console.log(route.query.search)

// Navigation Guards في المكون
import { onBeforeRouteLeave } from 'vue-router'

onBeforeRouteLeave((to, from) =&gt; {
  if (hasUnsavedChanges.value) {
    return confirm('هل تريد المغادرة؟')
  }
})
&lt;/script&gt;</code></pre>
          </div>
        `,
      },
      {
        question: "كيف تتعامل مع الـ Animations المتقدمة في Vue؟",
        answer: `
          <ul class="list-disc pr-6 space-y-2 mt-2">
            <li>
              <strong>1. Transition Hooks:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>استخدام JavaScript hooks (<code>@before-enter</code>، <code>@enter</code>، <code>@leave</code>).</li>
              </ul>
            </li>
            <li>
              <strong>2. مكتبات Animations:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>استخدام <code>GSAP</code>، <code>Framer Motion</code>، أو <code>Anime.js</code>.</li>
              </ul>
            </li>
            <li>
              <strong>3. Intersection Observer:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>لتشغيل animations عند ظهور العنصر.</li>
              </ul>
            </li>
          </ul>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>// 1. Transition مع JavaScript Hooks
&lt;template&gt;
  &lt;Transition
    @before-enter="beforeEnter"
    @enter="enter"
    @leave="leave"
    :css="false"
  &gt;
    &lt;div v-if="show" class="box"&gt;Animated&lt;/div&gt;
  &lt;/Transition&gt;
&lt;/template&gt;

&lt;script setup&gt;
import gsap from 'gsap'

const beforeEnter = (el) =&gt; {
  el.style.opacity = 0
  el.style.transform = 'translateY(20px)'
}

const enter = (el, done) =&gt; {
  gsap.to(el, {
    opacity: 1,
    y: 0,
    duration: 0.5,
    onComplete: done
  })
}

const leave = (el, done) =&gt; {
  gsap.to(el, {
    opacity: 0,
    y: -20,
    duration: 0.3,
    onComplete: done
  })
}
&lt;/script&gt;

// 2. استخدام Intersection Observer
&lt;script setup&gt;
import { ref, onMounted } from 'vue'

const elements = ref([])

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate')
      }
    })
  })

  elements.value.forEach(el => observer.observe(el))
})
&lt;/script&gt;

&lt;template&gt;
  &lt;div ref="elements" class="fade-in"&gt;
    Content
  &lt;/div&gt;
&lt;/template&gt;

&lt;style&gt;
.fade-in {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease;
}
.fade-in.animate {
  opacity: 1;
  transform: translateY(0);
}
&lt;/style&gt;

// 3. استخدام Framer Motion مع Vue
// npm install framer-motion
&lt;script setup&gt;
import { motion } from 'framer-motion'

const animate = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
}
&lt;/script&gt;

&lt;template&gt;
  &lt;motion.div
    :initial="animate.initial"
    :animate="animate.animate"
    :exit="animate.exit"
    transition="{{ duration: 0.5 }}"
  &gt;
    Content
  &lt;/motion.div&gt;
&lt;/template&gt;</code></pre>
          </div>
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
          <p><strong>CSRF:</strong> ثغرة يخدع فيها الهاكر المتصفح ليرسل طلبًا غير مصرح به.</p>
          <p class="mt-2"><strong>الحماية:</strong></p>
          <ul class="list-disc pr-6 space-y-1 mt-1">
            <li><strong>CSRF Token:</strong> توكن فريد لكل جلسة/طلب.</li>
            <li><strong>SameSite Cookies:</strong> Lax أو Strict.</li>
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
      // HTML5 أسئلة (15 سؤال)
      // ============================
      {
        question: "ما هو HTML5؟ وما الجديد فيه مقارنة بـ HTML4؟",
        answer: `
          <p><strong>HTML5</strong> هو الإصدار الخامس من لغة HTML، تم إطلاقه في 2014.</p>
          <ul class="list-disc pr-6 space-y-2 mt-2">
            <li>
              <strong>المميزات الجديدة:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li><strong>عناصر دلالية (Semantic):</strong> <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;section&gt;</code>, <code>&lt;article&gt;</code>, <code>&lt;footer&gt;</code></li>
                <li><strong>رسم (Canvas, SVG):</strong> رسم مباشر في المتصفح.</li>
                <li><strong>فيديو وصوت:</strong> <code>&lt;video&gt;</code>, <code>&lt;audio&gt;</code> بدون Flash.</li>
                <li><strong>تخزين محلي:</strong> <code>localStorage</code>, <code>sessionStorage</code>.</li>
                <li><strong>API التطبيقات:</strong> Geolocation, Web Workers, WebSocket.</li>
                <li><strong>نماذج محسّنة:</strong> أنواع إدخال جديدة (email, date, range).</li>
                <li><strong>Drag and Drop:</strong> سحب وإفلات مدمج.</li>
              </ul>
            </li>
          </ul>
        `,
      },
      {
        question: "ما هي العناصر الدلالية (Semantic Elements) في HTML5؟",
        answer: `
          <p><strong>العناصر الدلالية</strong> هي عناصر تصف <strong>معنى</strong> المحتوى لمتصفحات الويب ومحركات البحث.</p>
          <ul class="list-disc pr-6 space-y-2 mt-2">
            <li>
              <strong>أهم العناصر الدلالية:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li><code>&lt;header&gt;</code> - رأس الصفحة أو القسم.</li>
                <li><code>&lt;nav&gt;</code> - قائمة التنقل.</li>
                <li><code>&lt;main&gt;</code> - المحتوى الرئيسي (مرة واحدة فقط).</li>
                <li><code>&lt;section&gt;</code> - قسم من المحتوى.</li>
                <li><code>&lt;article&gt;</code> - محتوى مستقل (مثل مقال أو منشور).</li>
                <li><code>&lt;aside&gt;</code> - محتوى جانبي (مثل شريط جانبي).</li>
                <li><code>&lt;footer&gt;</code> - تذييل الصفحة أو القسم.</li>
                <li><code>&lt;figure&gt;</code> - محتوى توضيحي (صورة، رسم بياني).</li>
                <li><code>&lt;figcaption&gt;</code> - شرح للمحتوى في figure.</li>
                <li><code>&lt;time&gt;</code> - تاريخ ووقت.</li>
                <li><code>&lt;mark&gt;</code> - نص مميز (مظلل).</li>
              </ul>
            </li>
          </ul>
          <div class="mt-3 p-3 bg-blue-50 dark:bg-blue-900/20 border-r-4 border-blue-500 rounded">
            <p class="text-sm"><strong>💡 فوائد العناصر الدلالية:</strong> تحسين SEO، تحسين إمكانية الوصول (Accessibility)، سهولة قراءة الكود.</p>
          </div>
        `,
      },
      {
        question: "ما الفرق بين <div> و <section> و <article>؟",
        answer: `
          <ul class="list-disc pr-6 space-y-3">
            <li>
              <strong><code>&lt;div&gt;</code>:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>عنصر <strong>غير دلالي</strong> (Generic Container).</li>
                <li>يُستخدم للتجميع والتنسيق.</li>
                <li>ليس له معنى سياقي لمحركات البحث.</li>
              </ul>
            </li>
            <li>
              <strong><code>&lt;section&gt;</code>:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>عنصر <strong>دلالي</strong> يمثل قسم من المحتوى.</li>
                <li>يُستخدم لتجميع محتوى <strong>ذات صلة</strong>.</li>
                <li>يحتوي عادةً على عنوان (<code>&lt;h1&gt;</code>-<code>&lt;h6&gt;</code>).</li>
              </ul>
            </li>
            <li>
              <strong><code>&lt;article&gt;</code>:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>عنصر <strong>دلالي</strong> يمثل محتوى <strong>مستقلاً</strong>.</li>
                <li>يمكن إعادة استخدامه بشكل مستقل.</li>
                <li>مثل: مقال، منشور مدونة، تعليق.</li>
              </ul>
            </li>
          </ul>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>&lt;!-- div - غير دلالي --&gt;
&lt;div class="container"&gt;
  &lt;div class="content"&gt;...&lt;/div&gt;
&lt;/div&gt;

&lt;!-- section - قسم --&gt;
&lt;section&gt;
  &lt;h2&gt;منتجاتنا&lt;/h2&gt;
  &lt;p&gt;نقدم أفضل المنتجات...&lt;/p&gt;
&lt;/section&gt;

&lt;!-- article - محتوى مستقل --&gt;
&lt;article&gt;
  &lt;h3&gt;عنوان المقال&lt;/h3&gt;
  &lt;p&gt;نص المقال...&lt;/p&gt;
  &lt;time&gt;2024-01-01&lt;/time&gt;
&lt;/article&gt;</code></pre>
          </div>
        `,
      },
      {
        question: "ما هو Canvas في HTML5؟",
        answer: `
          <p><strong>Canvas</strong> هو عنصر HTML5 يُستخدم <strong>للرسم</strong> باستخدام JavaScript.</p>
          <ul class="list-disc pr-6 space-y-2 mt-2">
            <li>
              <strong>الخصائص:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>رسم <strong>ثنائي الأبعاد</strong> (2D).</li>
                <li>رسم <strong>ثلاثي الأبعاد</strong> (3D) باستخدام WebGL.</li>
                <li>دعم الرسوم <strong>المتحركة</strong> (Animations).</li>
                <li>معالجة الصور <strong>بكسل بكسل</strong>.</li>
              </ul>
            </li>
          </ul>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>&lt;!-- Canvas في HTML --&gt;
&lt;canvas id="myCanvas" width="400" height="200"&gt;
  متصفحك لا يدعم Canvas
&lt;/canvas&gt;

&lt;script&gt;
  const canvas = document.getElementById('myCanvas')
  const ctx = canvas.getContext('2d')

  // رسم مستطيل
  ctx.fillStyle = 'blue'
  ctx.fillRect(50, 50, 100, 80)

  // رسم دائرة
  ctx.beginPath()
  ctx.arc(250, 100, 40, 0, Math.PI * 2)
  ctx.fillStyle = 'red'
  ctx.fill()

  // رسم خط
  ctx.beginPath()
  ctx.moveTo(10, 10)
  ctx.lineTo(150, 150)
  ctx.strokeStyle = 'green'
  ctx.stroke()

  // رسم نص
  ctx.font = '30px Arial'
  ctx.fillStyle = 'black'
  ctx.fillText('Hello Canvas', 10, 180)
&lt;/script&gt;</code></pre>
          </div>
          <p class="mt-2"><strong>الفرق بين Canvas و SVG:</strong></p>
          <ul class="list-disc pr-6 space-y-1 mt-1">
            <li><strong>Canvas:</strong> يعتمد على البكسلات (Pixel-based)، مناسب للرسوم المتحركة.</li>
            <li><strong>SVG:</strong> يعتمد على المتجهات (Vector-based)، مناسب للرسوم الثابتة والتفاعلية.</li>
          </ul>
        `,
      },
      {
        question: "ما هو <video> في HTML5؟ وما هي الصيغ المدعومة؟",
        answer: `
          <p><strong><code>&lt;video&gt;</code></strong> هو عنصر HTML5 لعرض الفيديو مباشرة في المتصفح دون الحاجة لـ Flash.</p>
          <ul class="list-disc pr-6 space-y-2 mt-2">
            <li>
              <strong>الصيغ المدعومة:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li><strong>MP4 (H.264):</strong> مدعومة في جميع المتصفحات الحديثة.</li>
                <li><strong>WebM:</strong> مدعومة في Chrome, Firefox, Edge.</li>
                <li><strong>Ogg:</strong> مدعومة في Firefox, Chrome, Opera.</li>
              </ul>
            </li>
          </ul>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>&lt;!-- video بسيط --&gt;
&lt;video src="video.mp4" controls width="600"&gt;
  متصفحك لا يدعم عنصر video
&lt;/video&gt;

&lt;!-- video مع عدة صيغ (fallback) --&gt;
&lt;video controls width="600" poster="poster.jpg"&gt;
  &lt;source src="video.mp4" type="video/mp4" /&gt;
  &lt;source src="video.webm" type="video/webm" /&gt;
  &lt;source src="video.ogg" type="video/ogg" /&gt;
  متصفحك لا يدعم عنصر video
&lt;/video&gt;

&lt;!-- video مع خيارات إضافية --&gt;
&lt;video
  src="video.mp4"
  controls
  autoplay
  loop
  muted
  preload="auto"
  width="600"
  height="400"
&gt;
  متصفحك لا يدعم عنصر video
&lt;/video&gt;

&lt;!-- video مع track (ترجمة) --&gt;
&lt;video controls width="600"&gt;
  &lt;source src="video.mp4" type="video/mp4" /&gt;
  &lt;track kind="subtitles" src="subtitles.vtt" srclang="en" label="English" /&gt;
  &lt;track kind="subtitles" src="subtitles.ar.vtt" srclang="ar" label="العربية" /&gt;
&lt;/video&gt;</code></pre>
          </div>
        `,
      },
      {
        question: "ما هو <audio> في HTML5؟",
        answer: `
          <p><strong><code>&lt;audio&gt;</code></strong> هو عنصر HTML5 لتشغيل الصوت مباشرة في المتصفح.</p>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>&lt;!-- audio بسيط --&gt;
&lt;audio src="audio.mp3" controls&gt;
  متصفحك لا يدعم عنصر audio
&lt;/audio&gt;

&lt;!-- audio مع عدة صيغ --&gt;
&lt;audio controls&gt;
  &lt;source src="audio.mp3" type="audio/mpeg" /&gt;
  &lt;source src="audio.ogg" type="audio/ogg" /&gt;
  &lt;source src="audio.wav" type="audio/wav" /&gt;
  متصفحك لا يدعم عنصر audio
&lt;/audio&gt;

&lt;!-- audio مع خيارات إضافية --&gt;
&lt;audio
  src="audio.mp3"
  controls
  autoplay
  loop
  muted
  preload="auto"
&gt;
  متصفحك لا يدعم عنصر audio
&lt;/audio&gt;

&lt;!-- الصيغ المدعومة --&gt;
&lt;!-- MP3: مدعومة في جميع المتصفحات --&gt;
&lt;!-- OGG: مدعومة في Firefox, Chrome, Opera --&gt;
&lt;!-- WAV: مدعومة في Chrome, Firefox, Safari --&gt;</code></pre>
          </div>
        `,
      },
      {
        question: "ما هو localStorage و sessionStorage في HTML5؟",
        answer: `
          <ul class="list-disc pr-6 space-y-3">
            <li>
              <strong>localStorage:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>تخزين بيانات <strong>دائم</strong> (حتى يتم حذفها يدوياً).</li>
                <li>السعة: ~5-10 MB.</li>
                <li>متاح في <strong>جميع</strong> النوافذ والعلامات (Tabs).</li>
                <li>مثال: تفضيلات المستخدم، إعدادات التطبيق.</li>
              </ul>
            </li>
            <li>
              <strong>sessionStorage:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>تخزين بيانات <strong>جلسة</strong> (تُحذف عند إغلاق المتصفح).</li>
                <li>السعة: ~5-10 MB.</li>
                <li>متاح فقط في <strong>النافذة الحالية</strong>.</li>
                <li>مثال: بيانات نموذج مؤقتة.</li>
              </ul>
            </li>
          </ul>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>// localStorage
localStorage.setItem('name', 'Ahmed')
localStorage.setItem('age', '30')

const name = localStorage.getItem('name') // 'Ahmed'
localStorage.removeItem('age')
localStorage.clear()

// تخزين كائنات (تحتاج JSON)
const user = { name: 'Ahmed', age: 30 }
localStorage.setItem('user', JSON.stringify(user))
const storedUser = JSON.parse(localStorage.getItem('user'))

// sessionStorage
sessionStorage.setItem('temp', 'session data')
const temp = sessionStorage.getItem('temp')
sessionStorage.removeItem('temp')
sessionStorage.clear()

// الفرق: localStorage دائم، sessionStorage مؤقت
// كلاهما آمن من XSS (لا يمكن الوصول إليهما من خوادم أخرى)</code></pre>
          </div>
        `,
      },
      {
        question: "ما هو Geolocation API في HTML5؟",
        answer: `
          <p><strong>Geolocation API</strong> يسمح بالحصول على <strong>موقع المستخدم</strong> الجغرافي.</p>
          <ul class="list-disc pr-6 space-y-2 mt-2">
            <li>
              <strong>الاستخدامات:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>خدمات الخرائط (تحديد الموقع).</li>
                <li>عروض قريبة من المستخدم.</li>
                <li>تطبيقات الطقس.</li>
              </ul>
            </li>
          </ul>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>&lt;!-- HTML --&gt;
&lt;button onclick="getLocation()"&gt;احصل على موقعي&lt;/button&gt;
&lt;p id="location"&gt;&lt;/p&gt;

&lt;script&gt;
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError)
  } else {
    document.getElementById('location').innerHTML = 'المتصفح لا يدعم Geolocation'
  }
}

function showPosition(position) {
  const lat = position.coords.latitude
  const lon = position.coords.longitude
  document.getElementById('location').innerHTML =
    'خط العرض: ' + lat + '&lt;br&gt;خط الطول: ' + lon
}

function showError(error) {
  switch(error.code) {
    case error.PERMISSION_DENIED:
      document.getElementById('location').innerHTML = 'تم رفض إذن الموقع'
      break
    case error.POSITION_UNAVAILABLE:
      document.getElementById('location').innerHTML = 'معلومات الموقع غير متاحة'
      break
    case error.TIMEOUT:
      document.getElementById('location').innerHTML = 'انتهى وقت الطلب'
      break
  }
}

// مراقبة الموقع المستمرة
const watchId = navigator.geolocation.watchPosition(
  (position) => console.log(position),
  (error) => console.error(error)
)

// إيقاف المراقبة
navigator.geolocation.clearWatch(watchId)
&lt;/script&gt;</code></pre>
          </div>
        `,
      },
      {
        question: "ما هو Web Workers في HTML5؟",
        answer: `
          <p><strong>Web Workers</strong> يسمح بتنفيذ <strong>كود JavaScript في الخلفية</strong> (Background Thread) دون التأثير على أداء الصفحة.</p>
          <ul class="list-disc pr-6 space-y-2 mt-2">
            <li>
              <strong>الاستخدامات:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>عمليات حسابية ثقيلة (Complex Calculations).</li>
                <li>معالجة البيانات الضخمة.</li>
                <li>تحميل الملفات (File Processing).</li>
                <li>التشفير (Encryption).</li>
              </ul>
            </li>
          </ul>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>// worker.js (ملف منفصل)
self.onmessage = function(e) {
  const result = heavyCalculation(e.data)
  self.postMessage(result)
}

function heavyCalculation(data) {
  // عملية حسابية ثقيلة
  let sum = 0
  for (let i = 0; i < data; i++) {
    sum += i
  }
  return sum
}

// main.js (الصفحة الرئيسية)
const worker = new Worker('worker.js')

// إرسال بيانات إلى الـ Worker
worker.postMessage(1000000)

// استقبال النتائج من الـ Worker
worker.onmessage = function(e) {
  console.log('Result:', e.data)
}

// معالجة الأخطاء
worker.onerror = function(error) {
  console.error('Worker error:', error)
}

// إنهاء الـ Worker
worker.terminate()

// Shared Workers (مشترك بين عدة صفحات)
const sharedWorker = new SharedWorker('shared-worker.js')
sharedWorker.port.start()
sharedWorker.port.postMessage('Hello from page 1')</code></pre>
          </div>
        `,
      },
      {
        question: "ما هو WebSocket في HTML5؟",
        answer: `
          <p><strong>WebSocket</strong> هو بروتوكول اتصال <strong>ثنائي الاتجاه</strong> (Full-Duplex) بين المتصفح والخادم.</p>
          <ul class="list-disc pr-6 space-y-2 mt-2">
            <li>
              <strong>الاستخدامات:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>تطبيقات الدردشة (Chat).</li>
                <li>الألعاب متعددة اللاعبين.</li>
                <li>الإشعارات الفورية (Real-time Notifications).</li>
                <li>تحديثات الأسعار الحية.</li>
              </ul>
            </li>
          </ul>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>// إنشاء اتصال WebSocket
const socket = new WebSocket('wss://example.com/ws')

// عند فتح الاتصال
socket.onopen = function(event) {
  console.log('Connection opened')
  socket.send('Hello Server!')
}

// عند استقبال رسالة
socket.onmessage = function(event) {
  console.log('Message from server:', event.data)
}

// عند حدوث خطأ
socket.onerror = function(error) {
  console.error('WebSocket error:', error)
}

// عند إغلاق الاتصال
socket.onclose = function(event) {
  console.log('Connection closed:', event.code, event.reason)
}

// إرسال رسائل
socket.send(JSON.stringify({ type: 'message', text: 'Hello' }))

// إغلاق الاتصال
socket.close()

// مقارنة مع HTTP:
// HTTP: طلب-استجابة (Request-Response)
// WebSocket: اتصال مستمر ثنائي الاتجاه</code></pre>
          </div>
        `,
      },
      {
        question: "ما هو Drag and Drop في HTML5؟",
        answer: `
          <p><strong>Drag and Drop</strong> هو ميزة في HTML5 تسمح <strong>بسحب وإفلات</strong> العناصر.</p>
          <ul class="list-disc pr-6 space-y-2 mt-2">
            <li>
              <strong>الأحداث الرئيسية:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li><code>dragstart</code> - بداية السحب.</li>
                <li><code>dragend</code> - نهاية السحب.</li>
                <li><code>dragover</code> - فوق العنصر الهدف.</li>
                <li><code>drop</code> - الإفلات.</li>
              </ul>
            </li>
          </ul>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>&lt;!-- HTML --&gt;
&lt;div id="dragItem" draggable="true"&gt;اسحبني&lt;/div&gt;
&lt;div id="dropZone"&gt;أفلت هنا&lt;/div&gt;

&lt;script&gt;
const dragItem = document.getElementById('dragItem')
const dropZone = document.getElementById('dropZone')

// بداية السحب
dragItem.addEventListener('dragstart', function(e) {
  e.dataTransfer.setData('text/plain', 'Hello World')
  this.style.opacity = '0.5'
})

// نهاية السحب
dragItem.addEventListener('dragend', function(e) {
  this.style.opacity = '1'
})

// فوق الهدف (مطلوب لمنع السلوك الافتراضي)
dropZone.addEventListener('dragover', function(e) {
  e.preventDefault()
})

// الإفلات
dropZone.addEventListener('drop', function(e) {
  e.preventDefault()
  const data = e.dataTransfer.getData('text/plain')
  this.innerHTML = 'تم الإفلات: ' + data
  this.style.backgroundColor = 'lightgreen'
})

// Drag مع الملفات
const fileDrop = document.getElementById('fileDrop')
fileDrop.addEventListener('drop', function(e) {
  e.preventDefault()
  const files = e.dataTransfer.files
  for (const file of files) {
    console.log('File:', file.name, file.size)
  }
})
&lt;/script&gt;</code></pre>
          </div>
        `,
      },
      {
        question: "ما هي أنواع الإدخال (Input Types) الجديدة في HTML5؟",
        answer: `
          <p>HTML5 أضاف <strong>أنواع إدخال</strong> جديدة للنماذج:</p>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>&lt;!-- 1. Email --&gt;
&lt;input type="email" placeholder="example@email.com" /&gt;

&lt;!-- 2. URL --&gt;
&lt;input type="url" placeholder="https://example.com" /&gt;

&lt;!-- 3. Number (مع min, max, step) --&gt;
&lt;input type="number" min="1" max="100" step="5" /&gt;

&lt;!-- 4. Date --&gt;
&lt;input type="date" /&gt;

&lt;!-- 5. Time --&gt;
&lt;input type="time" /&gt;

&lt;!-- 6. Datetime-local --&gt;
&lt;input type="datetime-local" /&gt;

&lt;!-- 7. Month --&gt;
&lt;input type="month" /&gt;

&lt;!-- 8. Week --&gt;
&lt;input type="week" /&gt;

&lt;!-- 9. Color --&gt;
&lt;input type="color" /&gt;

&lt;!-- 10. Range (شريط تمرير) --&gt;
&lt;input type="range" min="0" max="100" step="1" /&gt;

&lt;!-- 11. Search (مع زر حذف) --&gt;
&lt;input type="search" placeholder="بحث..." /&gt;

&lt;!-- 12. Tel (رقم هاتف) --&gt;
&lt;input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" /&gt;

&lt;!-- 13. File (رفع ملفات) --&gt;
&lt;input type="file" accept="image/*" multiple /&gt;

&lt;!-- 14. Hidden (مخفي) --&gt;
&lt;input type="hidden" name="id" value="123" /&gt;

&lt;!-- 15. Button (زر مخصص) --&gt;
&lt;input type="button" value="Click" /&gt;

&lt;!-- 16. Image (زر بصورة) --&gt;
&lt;input type="image" src="submit.png" alt="Submit" /&gt;</code></pre>
          </div>
        `,
      },
      {
        question: "ما هو <picture> في HTML5؟",
        answer: `
          <p><strong><code>&lt;picture&gt;</code></strong> هو عنصر HTML5 يسمح بتحديد <strong>صور مختلفة</strong> حسب حجم الشاشة أو نوع الجهاز.</p>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>&lt;!-- Picture مع مصادر مختلفة --&gt;
&lt;picture&gt;
  &lt;!-- للشاشات الكبيرة --&gt;
  &lt;source media="(min-width: 1200px)" srcset="image-large.jpg" /&gt;

  &lt;!-- للشاشات المتوسطة --&gt;
  &lt;source media="(min-width: 768px)" srcset="image-medium.jpg" /&gt;

  &lt;!-- للشاشات الصغيرة (افتراضي) --&gt;
  &lt;img src="image-small.jpg" alt="وصف الصورة" /&gt;
&lt;/picture&gt;

&lt;!-- Picture مع صيغ مختلفة (WebP أفضل) --&gt;
&lt;picture&gt;
  &lt;source srcset="image.webp" type="image/webp" /&gt;
  &lt;source srcset="image.jpg" type="image/jpeg" /&gt;
  &lt;img src="image.jpg" alt="وصف الصورة" /&gt;
&lt;/picture&gt;

&lt;!-- مع DPR (Device Pixel Ratio) --&gt;
&lt;picture&gt;
  &lt;source
    srcset="image-1x.jpg 1x, image-2x.jpg 2x, image-3x.jpg 3x"
    media="(max-width: 600px)"
  /&gt;
  &lt;img src="image-default.jpg" alt="وصف الصورة" /&gt;
&lt;/picture&gt;

&lt;!-- المقارنة مع srcset في img --&gt;
&lt;img
  srcset="image-small.jpg 480w, image-medium.jpg 768w, image-large.jpg 1200w"
  sizes="(max-width: 600px) 480px, (max-width: 1200px) 768px, 1200px"
  src="image-default.jpg"
  alt="وصف الصورة"
/&gt;</code></pre>
          </div>
          <p class="mt-2"><strong>فوائد &lt;picture&gt;:</strong></p>
          <ul class="list-disc pr-6 space-y-1 mt-1">
            <li>تحسين أداء التحميل (تحميل الصورة المناسبة).</li>
            <li>دعم صيغ حديثة (WebP, AVIF).</li>
            <li>تصميم متجاوب (Responsive).</li>
          </ul>
        `,
      },
      {
        question: "ما هو <details> و <summary> في HTML5؟",
        answer: `
          <p><strong><code>&lt;details&gt;</code></strong> و <strong><code>&lt;summary&gt;</code></strong> عناصر HTML5 تُستخدم لإنشاء <strong>محتوى قابل للطي</strong> (Accordion).</p>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>&lt;!-- details بسيط --&gt;
&lt;details&gt;
  &lt;summary&gt;اضغط لعرض التفاصيل&lt;/summary&gt;
  &lt;p&gt;هذا هو المحتوى المخفي الذي يظهر عند الضغط.&lt;/p&gt;
  &lt;p&gt;يمكن وضع أي محتوى هنا.&lt;/p&gt;
&lt;/details&gt;

&lt;!-- details مفتوح افتراضياً --&gt;
&lt;details open&gt;
  &lt;summary&gt;تفاصيل مفتوحة&lt;/summary&gt;
  &lt;p&gt;هذا المحتوى يظهر افتراضياً.&lt;/p&gt;
&lt;/details&gt;

&lt;!-- details متداخل --&gt;
&lt;details&gt;
  &lt;summary&gt;القسم الرئيسي&lt;/summary&gt;
  &lt;details&gt;
    &lt;summary&gt;قسم فرعي 1&lt;/summary&gt;
    &lt;p&gt;محتوى القسم الفرعي 1&lt;/p&gt;
  &lt;/details&gt;
  &lt;details&gt;
    &lt;summary&gt;قسم فرعي 2&lt;/summary&gt;
    &lt;p&gt;محتوى القسم الفرعي 2&lt;/p&gt;
  &lt;/details&gt;
&lt;/details&gt;

&lt;!-- مع قائمة --&gt;
&lt;details&gt;
  &lt;summary&gt;قائمة المهام&lt;/summary&gt;
  &lt;ul&gt;
    &lt;li&gt;المهمة 1&lt;/li&gt;
    &lt;li&gt;المهمة 2&lt;/li&gt;
    &lt;li&gt;المهمة 3&lt;/li&gt;
  &lt;/ul&gt;
&lt;/details&gt;

&lt;!-- تنسيق CSS مخصص --&gt;
&lt;style&gt;
  details {
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 10px;
  }
  summary {
    cursor: pointer;
    font-weight: bold;
    color: blue;
  }
  summary::-webkit-details-marker {
    color: red;
  }
&lt;/style&gt;</code></pre>
          </div>
        `,
      },
      {
        question: "ما هي أفضل ممارسات الـ SEO في HTML؟",
        answer: `
          <ul class="list-disc pr-6 space-y-2 mt-2">
            <li>
              <strong>1. استخدام عناصر دلالية (Semantic HTML):</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li><code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;article&gt;</code>, <code>&lt;section&gt;</code>, <code>&lt;footer&gt;</code></li>
              </ul>
            </li>
            <li>
              <strong>2. العنوان (Title Tag):</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li><code>&lt;title&gt;</code> فريد لكل صفحة، لا يتجاوز 60 حرفاً.</li>
              </ul>
            </li>
            <li>
              <strong>3. Meta Description:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li><code>&lt;meta name="description" content="..." /&gt;</code> لا يتجاوز 160 حرفاً.</li>
              </ul>
            </li>
            <li>
              <strong>4. العناوين (Headings):</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>استخدم <code>&lt;h1&gt;</code> مرة واحدة فقط، و <code>&lt;h2&gt;</code>-<code>&lt;h6&gt;</code> للتسلسل الهرمي.</li>
              </ul>
            </li>
            <li>
              <strong>5. النصوص البديلة للصور:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li><code>alt</code> في <code>&lt;img&gt;</code> يصف الصورة.</li>
              </ul>
            </li>
            <li>
              <strong>6. الروابط (Links):</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>استخدم نصوص وصفية (بدلاً من "اضغط هنا").</li>
              </ul>
            </li>
          </ul>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>&lt;!DOCTYPE html&gt;
&lt;html lang="ar"&gt;
&lt;head&gt;
  &lt;meta charset="UTF-8" /&gt;
  &lt;meta name="viewport" content="width=device-width, initial-scale=1.0" /&gt;

  &lt;!-- 1. Title - فريد لكل صفحة --&gt;
  &lt;title&gt;أفضل موقع لتعلم البرمجة - CodeMaster&lt;/title&gt;

  &lt;!-- 2. Meta Description --&gt;
  &lt;meta name="description" content="تعلم البرمجة بسهولة مع CodeMaster. دورس في HTML, CSS, JavaScript, Python والمزيد." /&gt;

  &lt;!-- 3. Open Graph (للـ Social Media) --&gt;
  &lt;meta property="og:title" content="CodeMaster - تعلم البرمجة" /&gt;
  &lt;meta property="og:description" content="أفضل موقع لتعلم البرمجة" /&gt;
  &lt;meta property="og:image" content="https://example.com/og-image.jpg" /&gt;

  &lt;!-- 4. Canonical URL --&gt;
  &lt;link rel="canonical" href="https://example.com/page" /&gt;

  &lt;!-- 5. Robots (SEO) --&gt;
  &lt;meta name="robots" content="index, follow" /&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;header&gt;
    &lt;h1&gt;CodeMaster - تعلم البرمجة&lt;/h1&gt;
    &lt;nav&gt;
      &lt;ul&gt;
        &lt;li&gt;&lt;a href="/courses"&gt;الدورات&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href="/blog"&gt;المدونة&lt;/a&gt;&lt;/li&gt;
      &lt;/ul&gt;
    &lt;/nav&gt;
  &lt;/header&gt;

  &lt;main&gt;
    &lt;article&gt;
      &lt;h2&gt;أساسيات JavaScript&lt;/h2&gt;
      &lt;p&gt;تعلم أساسيات لغة JavaScript خطوة بخطوة.&lt;/p&gt;
      &lt;img src="js-course.jpg" alt="دورة تعلم JavaScript" /&gt;
      &lt;a href="/courses/js"&gt;ابدأ التعلم الآن&lt;/a&gt;
    &lt;/article&gt;
  &lt;/main&gt;

  &lt;footer&gt;
    &lt;p&gt;© 2024 CodeMaster - جميع الحقوق محفوظة&lt;/p&gt;
  &lt;/footer&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
          </div>
        `,
      },
      // ============================
      // CSS3 أسئلة (15 سؤال)
      // ============================
      {
        question: "ما هو CSS3؟ وما الجديد فيه مقارنة بـ CSS2؟",
        answer: `
          <p><strong>CSS3</strong> هو الإصدار الثالث من CSS، أضاف ميزات جديدة لتنسيق الصفحات بشكل أفضل.</p>
          <ul class="list-disc pr-6 space-y-2 mt-2">
            <li>
              <strong>المميزات الجديدة:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li><strong>ظلال (Shadows):</strong> <code>box-shadow</code>, <code>text-shadow</code></li>
                <li><strong>زوايا دائرية:</strong> <code>border-radius</code></li>
                <li><strong>تدرج لوني (Gradients):</strong> <code>linear-gradient</code>, <code>radial-gradient</code></li>
                <li><strong>تحولات (Transforms):</strong> <code>transform: rotate, scale, translate</code></li>
                <li><strong>انتقالات (Transitions):</strong> <code>transition</code></li>
                <li><strong>رسوم متحركة (Animations):</strong> <code>animation</code>, <code>@keyframes</code></li>
                <li><strong>Flexbox:</strong> تخطيط مرن (One-dimensional).</li>
                <li><strong>CSS Grid:</strong> تخطيط شبكي (Two-dimensional).</li>
                <li><strong>استعلامات الوسائط (Media Queries):</strong> تصميم متجاوب.</li>
                <li><strong>متغيرات CSS (Custom Properties):</strong> <code>--variable</code></li>
                <li><strong>Selectors جديدة:</strong> <code>:nth-child()</code>, <code>:not()</code>, <code>:is()</code></li>
              </ul>
            </li>
          </ul>
        `,
      },
      {
        question: "ما هو Box Model في CSS؟",
        answer: `
          <p><strong>Box Model</strong> هو نموذج يصف كيفية حساب حجم العنصر في CSS.</p>
          <ul class="list-disc pr-6 space-y-2 mt-2">
            <li>
              <strong>مكونات Box Model:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li><strong>Content:</strong> المحتوى (نص أو صورة).</li>
                <li><strong>Padding:</strong> المسافة بين المحتوى والحدود (داخل العنصر).</li>
                <li><strong>Border:</strong> الحدود المحيطة بالـ Padding.</li>
                <li><strong>Margin:</strong> المسافة خارج الحدود (بين العناصر).</li>
              </ul>
            </li>
          </ul>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>/* Box Model الافتراضي (content-box) */
.box {
  width: 200px;
  padding: 20px;
  border: 5px solid black;
  margin: 10px;
  box-sizing: content-box; /* الافتراضي */
}
/* العرض الكلي: 200 + 20*2 + 5*2 = 250px */

/* Box Model مع border-box (المفضل) */
.box2 {
  width: 200px;
  padding: 20px;
  border: 5px solid black;
  margin: 10px;
  box-sizing: border-box;
}
/* العرض الكلي: 200px (padding و border داخل العرض) */

/* الفرق بينهما */
/* content-box: العرض = width + padding + border */
/* border-box: العرض = width (padding و border داخلها) */</code></pre>
          </div>
          <p class="mt-2"><strong>💡 نصيحة:</strong> استخدم <code>box-sizing: border-box</code> لتسهيل حساب الأبعاد.</p>
        `,
      },
      {
        question: "ما الفرق بين Flexbox و CSS Grid؟",
        answer: `
          <ul class="list-disc pr-6 space-y-3">
            <li>
              <strong>Flexbox (تخطيط مرن):</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li><strong>أحادي البعد (One-dimensional):</strong> صف واحد أو عمود واحد.</li>
                <li>مثالي لـ <strong>المكونات الصغيرة</strong> (مثل القوائم، الأزرار).</li>
                <li>يوزع المساحة بين العناصر (flex-grow, flex-shrink).</li>
                <li>يُستخدم للمحاذاة (center, space-between).</li>
                <li>مثال: <code>display: flex; justify-content: center; align-items: center;</code></li>
              </ul>
            </li>
            <li>
              <strong>CSS Grid (تخطيط شبكي):</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li><strong>ثنائي الأبعاد (Two-dimensional):</strong> صفوف وأعمدة معاً.</li>
                <li>مثالي لـ <strong>التخطيطات الكبيرة</strong> (مثل الصفحات، الشاشات).</li>
                <li>يحدد صفوف وأعمدة محددة (grid-template-rows/columns).</li>
                <li>يُستخدم لتحديد مواقع العناصر (grid-row, grid-column).</li>
                <li>مثال: <code>display: grid; grid-template-columns: 1fr 1fr 1fr;</code></li>
              </ul>
            </li>
          </ul>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>/* Flexbox - تخطيط أحادي البعد */
.flex-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
}
.flex-item {
  flex: 1;
  min-width: 100px;
}

/* CSS Grid - تخطيط ثنائي الأبعاد */
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto 200px auto;
  gap: 20px;
}
.grid-item {
  grid-column: span 2;
  grid-row: 1 / 3;
}

/* استخدام كلاهما معاً */
.page {
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: 20px;
}
.sidebar {
  display: flex;
  flex-direction: column;
  gap: 10px;
}</code></pre>
          </div>
          <p class="mt-2"><strong>💡 قاعدة ذهبية:</strong> استخدم Flexbox للمكونات الصغيرة، و Grid للتخطيطات الكبيرة.</p>
        `,
      },
      {
        question: "ما هي Media Queries وكيف تستخدمها؟",
        answer: `
          <p><strong>Media Queries</strong> هي تقنية في CSS تسمح بتطبيق تنسيقات مختلفة حسب <strong>خصائص الجهاز</strong> (العرض، الارتفاع، الاتجاه).</p>
          <ul class="list-disc pr-6 space-y-2 mt-2">
            <li>
              <strong>الاستخدامات:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>تصميم متجاوب (Responsive Design).</li>
                <li>تحسين العرض على الهواتف والأجهزة اللوحية.</li>
                <li>تغيير التخطيط حسب حجم الشاشة.</li>
              </ul>
            </li>
          </ul>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>/* 1. Media Query أساسية */
@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }
  .sidebar {
    display: none;
  }
}

/* 2. Media Query مع min-width */
@media (min-width: 1200px) {
  .container {
    max-width: 1200px;
    margin: 0 auto;
  }
}

/* 3. Media Query مع نطاق */
@media (min-width: 768px) and (max-width: 1199px) {
  .container {
    grid-template-columns: 1fr 1fr;
  }
}

/* 4. Media Query مع orientation */
@media (orientation: landscape) {
  .video {
    width: 100%;
    height: auto;
  }
}

/* 5. Media Query مع prefers-color-scheme (Dark Mode) */
@media (prefers-color-scheme: dark) {
  body {
    background: #1a1a1a;
    color: #ffffff;
  }
}

/* 6. Media Query مع prefers-reduced-motion */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}

/* 7. Media Query مع print */
@media print {
  .no-print {
    display: none;
  }
  body {
    font-size: 12pt;
    color: black;
  }
}

/* 8. Media Query مع resolution */
@media (min-resolution: 2dppx) {
  .logo {
    background-image: url('logo@2x.png');
  }
}</code></pre>
          </div>
        `,
      },
      {
        question: "ما هي الـ Pseudo-classes و Pseudo-elements في CSS؟",
        answer: `
          <ul class="list-disc pr-6 space-y-3">
            <li>
              <strong>Pseudo-classes (:) :</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>تحدد <strong>حالة</strong> العنصر.</li>
                <li>مثال: <code>:hover</code>, <code>:focus</code>, <code>:active</code>, <code>:visited</code></li>
                <li><code>:nth-child()</code>, <code>:first-child</code>, <code>:last-child</code></li>
                <li><code>:not()</code>, <code>:is()</code>, <code>:where()</code></li>
                <li><code>:checked</code>, <code>:disabled</code>, <code>:enabled</code></li>
              </ul>
            </li>
            <li>
              <strong>Pseudo-elements (::) :</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>تضيف أنماطاً لـ <strong>أجزاء</strong> من العنصر.</li>
                <li>مثال: <code>::before</code>, <code>::after</code></li>
                <li><code>::first-line</code>, <code>::first-letter</code></li>
                <li><code>::selection</code>, <code>::placeholder</code></li>
                <li><code>::marker</code>, <code>::file-selector-button</code></li>
              </ul>
            </li>
          </ul>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>/* Pseudo-classes - حالة العنصر */
button:hover {
  background: blue;
  color: white;
}
input:focus {
  border-color: blue;
  outline: none;
}
li:nth-child(odd) {
  background: #f0f0f0;
}
li:last-child {
  border-bottom: none;
}
input:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
p:not(.special) {
  color: gray;
}
:is(header, footer) {
  background: black;
  color: white;
}

/* Pseudo-elements - أجزاء من العنصر */
p::first-line {
  font-weight: bold;
  color: blue;
}
p::first-letter {
  font-size: 2em;
  color: red;
}
.element::before {
  content: "→ ";
  color: green;
}
.element::after {
  content: " ←";
  color: green;
}
::selection {
  background: yellow;
  color: black;
}
input::placeholder {
  color: gray;
  font-style: italic;
}</code></pre>
          </div>
        `,
      },
      {
        question: "ما هو CSS Flexbox وكيف يعمل؟",
        answer: `
          <p><strong>Flexbox</strong> هو نموذج تخطيط في CSS يسمح بترتيب العناصر في <strong>صف واحد أو عمود واحد</strong> بمرونة.</p>
          <ul class="list-disc pr-6 space-y-2 mt-2">
            <li>
              <strong>خصائص الحاوية (Container):</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li><code>display: flex</code> - تفعيل Flexbox.</li>
                <li><code>flex-direction</code> - الاتجاه (row, column).</li>
                <li><code>justify-content</code> - محاذاة أفقية.</li>
                <li><code>align-items</code> - محاذاة رأسية.</li>
                <li><code>flex-wrap</code> - التفاف العناصر.</li>
                <li><code>gap</code> - المسافة بين العناصر.</li>
              </ul>
            </li>
            <li>
              <strong>خصائص العناصر (Items):</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li><code>flex-grow</code> - النمو (قسمة المساحة).</li>
                <li><code>flex-shrink</code> - الانكماش.</li>
                <li><code>flex-basis</code> - الحجم الأساسي.</li>
                <li><code>align-self</code> - محاذاة فردية.</li>
              </ul>
            </li>
          </ul>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>/* 1. حاوية Flexbox */
.container {
  display: flex;
  flex-direction: row; /* row (افتراضي) | column | row-reverse */
  justify-content: center; /* flex-start | flex-end | center | space-between | space-around */
  align-items: center; /* stretch | flex-start | flex-end | center | baseline */
  flex-wrap: wrap; /* nowrap | wrap | wrap-reverse */
  gap: 20px;
  min-height: 100vh;
}

/* 2. عناصر Flexbox */
.item {
  flex: 1; /* flex-grow: 1, flex-shrink: 1, flex-basis: 0% */
  flex-grow: 1; /* النمو لتعبئة المساحة */
  flex-shrink: 0; /* عدم الانكماش */
  flex-basis: 200px; /* الحجم الأساسي */
  align-self: center; /* محاذاة فردية */
  order: 2; /* ترتيب العرض */
}

/* 3. أمثلة عملية */
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
.card {
  flex: 1 1 300px; /* flex-grow: 1, flex-shrink: 1, flex-basis: 300px */
  padding: 20px;
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

/* 4. استخدام Flexbox مع gap */
.grid-flex {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
.grid-flex > * {
  flex: 1 1 calc(33.333% - 20px);
  min-width: 250px;
}</code></pre>
          </div>
        `,
      },
      {
        question: "ما هو CSS Grid وكيف يعمل؟",
        answer: `
          <p><strong>CSS Grid</strong> هو نموذج تخطيط في CSS يسمح بترتيب العناصر في <strong>شبكة من الصفوف والأعمدة</strong>.</p>
          <ul class="list-disc pr-6 space-y-2 mt-2">
            <li>
              <strong>خصائص الحاوية (Container):</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li><code>display: grid</code> - تفعيل Grid.</li>
                <li><code>grid-template-columns</code> - تعريف الأعمدة.</li>
                <li><code>grid-template-rows</code> - تعريف الصفوف.</li>
                <li><code>gap</code> - المسافة بين الخلايا.</li>
                <li><code>grid-auto-flow</code> - اتجاه التدفق.</li>
              </ul>
            </li>
            <li>
              <strong>خصائص العناصر (Items):</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li><code>grid-column</code> - موقع العمود.</li>
                <li><code>grid-row</code> - موقع الصف.</li>
                <li><code>grid-area</code> - منطقة محددة.</li>
              </ul>
            </li>
          </ul>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>/* 1. حاوية Grid */
.container {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr; /* 3 أعمدة */
  grid-template-rows: auto 200px auto; /* 3 صفوف */
  gap: 20px;
  min-height: 100vh;
}

/* 2. عناصر Grid */
.item {
  grid-column: 1 / 3; /* من العمود 1 إلى 3 */
  grid-row: 1 / 2; /* من الصف 1 إلى 2 */
}

.item2 {
  grid-column: span 2; /* يمتد لعمودين */
  grid-row: span 2; /* يمتد لصفين */
}

/* 3. Grid مع named areas */
.container2 {
  display: grid;
  grid-template-areas:
    "header header header"
    "sidebar main main"
    "footer footer footer";
  grid-template-columns: 200px 1fr 1fr;
  grid-template-rows: auto 1fr auto;
  gap: 10px;
}
.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.footer { grid-area: footer; }

/* 4. Grid مع repeat و auto-fill */
.container3 {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}

/* 5. Grid مع fr (fractional units) */
.container4 {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 10px;
}

/* 6. Grid متقدم */
.container5 {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(100px, auto);
}
.item-large {
  grid-column: 2 / 4;
  grid-row: 1 / 3;
}</code></pre>
          </div>
        `,
      },
      {
        question: "ما هي متغيرات CSS (Custom Properties)؟",
        answer: `
          <p><strong>Custom Properties (متغيرات CSS)</strong> هي متغيرات تُعرّف في CSS وتُستخدم في جميع أنحاء الملف.</p>
          <ul class="list-disc pr-6 space-y-2 mt-2">
            <li>
              <strong>المميزات:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>إعادة استخدام القيم بسهولة.</li>
                <li>تحديث القيم في مكان واحد (لجميع الملفات).</li>
                <li>دعم الـ Themes (Light/Dark).</li>
                <li>وراثة (Inheritance) من العناصر.</li>
              </ul>
            </li>
          </ul>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>/* 1. تعريف متغيرات CSS */
:root {
  --primary-color: #3498db;
  --secondary-color: #2ecc71;
  --font-size: 16px;
  --spacing: 20px;
  --border-radius: 8px;
}

/* 2. استخدام المتغيرات */
.button {
  background: var(--primary-color);
  color: white;
  padding: var(--spacing);
  border-radius: var(--border-radius);
  font-size: var(--font-size);
}

.button-secondary {
  background: var(--secondary-color);
}

/* 3. تغيير المتغيرات في نطاق محدد */
.container {
  --primary-color: #e74c3c;
}
.container .button {
  background: var(--primary-color); /* #e74c3c (يتغير في هذا النطاق) */
}

/* 4. قيم افتراضية (Fallback) */
.element {
  color: var(--text-color, black); /* إذا لم يُعرّف text-color، يستخدم black */
}

/* 5. Dynamic Themes (Light/Dark) */
:root {
  --bg-color: #ffffff;
  --text-color: #000000;
}
[data-theme="dark"] {
  --bg-color: #1a1a1a;
  --text-color: #ffffff;
}

body {
  background: var(--bg-color);
  color: var(--text-color);
}

/* 6. استخدام في JavaScript */
// الحصول على قيمة متغير
const root = document.documentElement
const primaryColor = getComputedStyle(root).getPropertyValue('--primary-color')

// تغيير قيمة متغير
root.style.setProperty('--primary-color', '#ff0000')</code></pre>
          </div>
        `,
      },
      {
        question: "ما هو CSS Transitions وكيف تستخدمه؟",
        answer: `
          <p><strong>CSS Transitions</strong> تسمح <strong>بتغيير تدريجي</strong> بين حالتين من عنصر (مثل :hover).</p>
          <ul class="list-disc pr-6 space-y-2 mt-2">
            <li>
              <strong>خصائص Transition:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li><code>transition-property</code> - الخاصية المتغيرة.</li>
                <li><code>transition-duration</code> - مدة التغيير.</li>
                <li><code>transition-timing-function</code> - منحنى الحركة.</li>
                <li><code>transition-delay</code> - تأخير البداية.</li>
              </ul>
            </li>
          </ul>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>/* 1. Transition بسيط */
.button {
  background: blue;
  color: white;
  transition: background 0.3s ease, transform 0.3s ease;
}
.button:hover {
  background: darkblue;
  transform: scale(1.1);
}

/* 2. Transition لكل خاصية */
.element {
  width: 100px;
  height: 100px;
  background: red;
  transition: width 0.5s ease, height 0.5s ease, background 0.3s ease;
}
.element:hover {
  width: 200px;
  height: 200px;
  background: blue;
}

/* 3. Transition مع delay */
.element2 {
  transition: opacity 0.5s ease 0.2s; /* التأخير 0.2 ثانية */
}

/* 4. Transition مع timing functions */
.element3 {
  transition: all 0.5s ease-in-out;
  /* ease | linear | ease-in | ease-out | ease-in-out */
}

/* 5. Transition مع cubic-bezier */
.element4 {
  transition: all 0.5s cubic-bezier(0.42, 0, 0.58, 1);
}

/* 6. Transition مع transform */
.card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.2);
}

/* 7. Transition مع opacity */
.fade {
  opacity: 1;
  transition: opacity 0.5s ease;
}
.fade.hidden {
  opacity: 0;
}

/* 8. Transition للقوائم */
.nav-link {
  color: black;
  transition: color 0.3s ease, background 0.3s ease;
}
.nav-link:hover {
  color: blue;
  background: #f0f0f0;
}</code></pre>
          </div>
        `,
      },
      {
        question: "ما هو CSS Animations وكيف تستخدمه؟",
        answer: `
          <p><strong>CSS Animations</strong> تسمح بإنشاء <strong>رسوم متحركة</strong> باستخدام <code>@keyframes</code>.</p>
          <ul class="list-disc pr-6 space-y-2 mt-2">
            <li>
              <strong>خصائص Animation:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li><code>animation-name</code> - اسم الـ @keyframes.</li>
                <li><code>animation-duration</code> - مدة التنفيذ.</li>
                <li><code>animation-timing-function</code> - منحنى الحركة.</li>
                <li><code>animation-delay</code> - تأخير البداية.</li>
                <li><code>animation-iteration-count</code> - عدد التكرار.</li>
                <li><code>animation-direction</code> - اتجاه الحركة.</li>
                <li><code>animation-fill-mode</code> - حالة البداية/النهاية.</li>
              </ul>
            </li>
          </ul>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>/* 1. تعريف Keyframes */
@keyframes slideIn {
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
}

@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* 2. استخدام Animation */
.element {
  animation: slideIn 0.5s ease-out;
}

.element2 {
  animation: pulse 2s ease-in-out infinite;
}

.element3 {
  animation: rotate 3s linear infinite;
}

/* 3. Animation مع خيارات متعددة */
.element4 {
  animation-name: pulse;
  animation-duration: 2s;
  animation-timing-function: ease-in-out;
  animation-delay: 0.5s;
  animation-iteration-count: 3;
  animation-direction: alternate;
  animation-fill-mode: both;
}

/* 4. Animation مختصرة (Shorthand) */
.element5 {
  animation: pulse 2s ease-in-out 0.5s 3 alternate both;
}

/* 5. Animation مع state (play/pause) */
.element6 {
  animation: rotate 3s linear infinite;
  animation-play-state: running;
}
.element6.paused {
  animation-play-state: paused;
}

/* 6. Animation مع multiple keyframes */
@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  40% { transform: translateY(-30px); }
  60% { transform: translateY(-15px); }
}

/* 7. Animation مع text */
@keyframes fadeInText {
  0% { opacity: 0; letter-spacing: 10px; }
  100% { opacity: 1; letter-spacing: 0; }
}</code></pre>
          </div>
        `,
      },
      {
        question: "ما هو CSS Transforms وكيف تستخدمه؟",
        answer: `
          <p><strong>CSS Transforms</strong> تسمح <strong>بتغيير شكل وموضع</strong> العناصر في 2D و 3D.</p>
          <ul class="list-disc pr-6 space-y-2 mt-2">
            <li>
              <strong>أنواع Transforms:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li><strong>2D:</strong> translate, rotate, scale, skew.</li>
                <li><strong>3D:</strong> rotateX, rotateY, rotateZ, perspective.</li>
              </ul>
            </li>
          </ul>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>/* 1. Translate - تحريك */
.element1 {
  transform: translate(50px, 100px); /* X, Y */
  transform: translateX(50px);
  transform: translateY(100px);
  transform: translateZ(50px); /* 3D */
}

/* 2. Rotate - تدوير */
.element2 {
  transform: rotate(45deg);
  transform: rotateX(45deg); /* 3D */
  transform: rotateY(45deg); /* 3D */
  transform: rotateZ(45deg); /* 3D */
}

/* 3. Scale - تكبير/تصغير */
.element3 {
  transform: scale(1.5); /* 1.5x أكبر */
  transform: scale(0.5); /* 0.5x أصغر */
  transform: scaleX(2);
  transform: scaleY(2);
}

/* 4. Skew - إمالة */
.element4 {
  transform: skew(10deg, 20deg);
  transform: skewX(10deg);
  transform: skewY(20deg);
}

/* 5. Transform متعدد */
.element5 {
  transform: translate(50px, 50px) rotate(45deg) scale(1.2);
}

/* 6. Transform Origin */
.element6 {
  transform-origin: top left; /* نقطة البداية */
  transform: rotate(45deg);
}

/* 7. 3D Transform مع perspective */
.container {
  perspective: 1000px; /* عمق المشهد */
}
.element7 {
  transform: rotateY(45deg) translateZ(100px);
}

/* 8. Card flip (3D) */
.card {
  transform-style: preserve-3d;
  transition: transform 0.6s;
}
.card:hover {
  transform: rotateY(180deg);
}
.card-front, .card-back {
  backface-visibility: hidden;
}
.card-back {
  transform: rotateY(180deg);
}</code></pre>
          </div>
        `,
      },
      {
        question: "ما هي أفضل ممارسات CSS؟",
        answer: `
          <ul class="list-disc pr-6 space-y-2 mt-2">
            <li>
              <strong>1. تنظيم الكود:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>استخدام methodology مثل BEM, SMACSS, OOCSS.</li>
                <li>فصل الملفات (components, layout, pages).</li>
              </ul>
            </li>
            <li>
              <strong>2. استخدام CSS Variables:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>لتسهيل إدارة الألوان والقيم.</li>
              </ul>
            </li>
            <li>
              <strong>3. تحسين الأداء:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>تجنب الـ Selectors الثقيلة (مثل #id #id .class).</li>
                <li>تصغير (Minify) ملفات CSS.</li>
                <li>استخدام <code>will-change</code> للـ Animations الثقيلة.</li>
              </ul>
            </li>
            <li>
              <strong>4. التوافق (Cross-browser):</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>استخدام الـ Vendor Prefixes (<code>-webkit-</code>, <code>-moz-</code>, <code>-ms-</code>).</li>
                <li>استخدام Autoprefixer.</li>
              </ul>
            </li>
            <li>
              <strong>5. التصميم المتجاوب (Responsive):</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>استخدام Media Queries.</li>
                <li>استخدام وحدات مرنة (rem, em, %, vh, vw).</li>
              </ul>
            </li>
          </ul>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>/* 1. BEM Methodology */
.block { /* المكون الأساسي */ }
.block__element { /* جزء من المكون */ }
.block--modifier { /* حالة مختلفة */ }

/* مثال: */
.card { /* ... */ }
.card__title { /* ... */ }
.card__image { /* ... */ }
.card--featured { /* ... */ }

/* 2. استخدام Variables */
:root {
  --primary: #3498db;
  --text: #333;
  --spacing: 1rem;
}

/* 3. تحسين الأداء */
.animation {
  will-change: transform, opacity;
}

/* 4. Vendor Prefixes (مع Autoprefixer) */
.element {
  display: flex;
  display: -webkit-flex;
  display: -moz-flex;
}

/* 5. وحدات مرنة */
.responsive {
  width: 100%;
  max-width: 1200px;
  padding: 1rem 2rem;
  font-size: 1.125rem;
  height: 100vh;
}

/* 6. Reset/Normalize */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* 7. استخدام Mobile First */
.container {
  padding: 10px;
}
@media (min-width: 768px) {
  .container {
    padding: 20px;
  }
}
@media (min-width: 1200px) {
  .container {
    padding: 40px;
  }
}</code></pre>
          </div>
        `,
      },
      {
        question: "ما هو CSS Resets و Normalize؟",
        answer: `
          <ul class="list-disc pr-6 space-y-3">
            <li>
              <strong>CSS Reset:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>يزيل <strong>جميع</strong> التنسيقات الافتراضية للمتصفحات.</li>
                <li>يبدأ من <strong>صفر</strong> (No default styles).</li>
                <li>مثال: <code>* { margin: 0; padding: 0; }</code></li>
                <li>مكتبات: Eric Meyer Reset, CSS Reset.</li>
              </ul>
            </li>
            <li>
              <strong>Normalize.css:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>يحافظ على التنسيقات المفيدة، ويوحدها بين المتصفحات.</li>
                <li>يصحح الأخطاء (Bugs) في المتصفحات.</li>
                <li>لا يزيل كل شيء، بل يوحد التنسيقات.</li>
                <li>مكتبة: Normalize.css (مستخدمة في Bootstrap و Tailwind).</li>
              </ul>
            </li>
          </ul>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>/* 1. Reset بسيط */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* 2. Reset متقدم */
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

/* 3. Normalize.css (جزء منه) */
/* أضف Normalize.css كـ CDN */
/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"> */

/* 4. Custom Normalization */
html {
  box-sizing: border-box;
}
*, *::before, *::after {
  box-sizing: inherit;
}

body {
  margin: 0;
  line-height: 1.6;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}

button, input, select, textarea {
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}</code></pre>
          </div>
        `,
      },
      {
        question:
          "ما هو الفرق بين relative و absolute و fixed و sticky في CSS؟",
        answer: `
          <ul class="list-disc pr-6 space-y-3">
            <li>
              <strong><code>static</code> (الافتراضي):</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>يتبع التدفق الطبيعي للصفحة.</li>
                <li>لا يتأثر بـ <code>top</code>, <code>bottom</code>, <code>left</code>, <code>right</code>.</li>
              </ul>
            </li>
            <li>
              <strong><code>relative</code>:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>يتبع التدفق الطبيعي.</li>
                <li>يمكن تحريكه بالنسبة لموقعه الأصلي.</li>
                <li>مثال: <code>top: 10px</code> يتحرك لأسفل من موقعه الأصلي.</li>
              </ul>
            </li>
            <li>
              <strong><code>absolute</code>:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>يُزال من التدفق الطبيعي.</li>
                <li>يتحرك بالنسبة لأقرب عنصر <code>relative</code> أو <code>absolute</code>.</li>
                <li>إذا لم يوجد، يتحرك بالنسبة للـ <code>body</code>.</li>
              </ul>
            </li>
            <li>
              <strong><code>fixed</code>:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>يُزال من التدفق الطبيعي.</li>
                <li>يتحرك بالنسبة للـ <strong>viewport</strong> (ثابت عند التمرير).</li>
                <li>مثال: Navbar ثابتة.</li>
              </ul>
            </li>
            <li>
              <strong><code>sticky</code>:</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li>مزيج بين <code>relative</code> و <code>fixed</code>.</li>
                <li>يظل <code>relative</code> حتى يصل إلى موضع محدد، ثم يصبح <code>fixed</code>.</li>
                <li>مثال: Header يلتصق بالأعلى عند التمرير.</li>
              </ul>
            </li>
          </ul>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>/* 1. Relative - تحريك من موقعه */
.relative {
  position: relative;
  top: 20px; /* يتحرك لأسفل 20px */
  left: 30px; /* يتحرك لليمين 30px */
}

/* 2. Absolute - تحريك بالنسبة للحاوية */
.container {
  position: relative; /* نقطة مرجعية */
}
.absolute {
  position: absolute;
  top: 0;
  right: 0;
  width: 100px;
  height: 100px;
}

/* 3. Fixed - ثابت بالنسبة للـ viewport */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background: white;
}

/* 4. Sticky - يلتصق عند التمرير */
.header {
  position: sticky;
  top: 0; /* يلتصق بالأعلى */
  background: white;
  z-index: 100;
}

/* 5. مثال شامل */
.page {
  min-height: 200vh;
}
.relative-box {
  position: relative;
  top: 20px;
  background: lightblue;
  padding: 20px;
}
.absolute-box {
  position: absolute;
  bottom: 0;
  right: 0;
  background: lightgreen;
  padding: 20px;
}
.fixed-box {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: lightcoral;
  padding: 20px;
}
.sticky-box {
  position: sticky;
  top: 10px;
  background: lightyellow;
  padding: 20px;
}</code></pre>
          </div>
        `,
      },
      {
        question: "ما هي وحدات القياس في CSS؟ (px, em, rem, %, vh, vw)",
        answer: `
          <ul class="list-disc pr-6 space-y-3">
            <li>
              <strong>وحدات مطلقة (Absolute):</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li><code>px</code> (بكسل) - ثابتة، تستخدم للقيم الدقيقة.</li>
              </ul>
            </li>
            <li>
              <strong>وحدات نسبية (Relative):</strong>
              <ul class="list-circle pr-6 space-y-1 mt-1">
                <li><code>%</code> - بالنسبة للعنصر الأب.</li>
                <li><code>em</code> - بالنسبة لحجم الخط في العنصر الأب.</li>
                <li><code>rem</code> - بالنسبة لحجم الخط في العنصر الجذر (<code>html</code>).</li>
                <li><code>vh</code> - 1% من ارتفاع الـ viewport.</li>
                <li><code>vw</code> - 1% من عرض الـ viewport.</li>
                <li><code>vmin</code> - 1% من القيمة الأصغر (vh أو vw).</li>
                <li><code>vmax</code> - 1% من القيمة الأكبر (vh أو vw).</li>
                <li><code>ch</code> - عرض حرف "0" في الخط الحالي.</li>
                <li><code>ex</code> - ارتفاع حرف "x" في الخط الحالي.</li>
              </ul>
            </li>
          </ul>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>/* 1. px - ثابتة */
.text-px {
  font-size: 16px;
  padding: 10px;
}

/* 2. % - بالنسبة للأب */
.container {
  width: 80%; /* 80% من عرض الأب */
}
.child {
  width: 50%; /* 50% من عرض .container */
}

/* 3. em - بالنسبة لحجم الخط في الأب */
.parent {
  font-size: 20px;
}
.child-em {
  font-size: 1.5em; /* 20px * 1.5 = 30px */
  padding: 1em; /* 30px */
}

/* 4. rem - بالنسبة لحجم الخط في الجذر (html) */
html {
  font-size: 16px; /* القيمة الافتراضية */
}
.text-rem {
  font-size: 1.5rem; /* 16px * 1.5 = 24px */
  padding: 1rem; /* 16px */
}

/* 5. vh و vw - بالنسبة للـ viewport */
.full-screen {
  height: 100vh; /* ارتفاع كامل الشاشة */
  width: 100vw; /* عرض كامل الشاشة */
}
.half-screen {
  height: 50vh; /* نصف ارتفاع الشاشة */
}

/* 6. استخدامات عملية */
/* نصوص قابلة للتكبير (استخدم rem) */
h1 {
  font-size: 2rem; /* 32px */
}
p {
  font-size: 1rem; /* 16px */
}

/* حواف مرنة (استخدم em أو %) */
.card {
  padding: 1.5rem;
  margin: 1rem;
}

/* أبعاد كاملة الشاشة (استخدم vh/vw) */
.hero {
  min-height: 100vh;
  width: 100vw;
}

/* نصوص مرنة (استخدم clamp) */
.flexible-text {
  font-size: clamp(1rem, 2.5vw, 2rem);
}</code></pre>
          </div>
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
            <li><strong>git merge:</strong> يدمج فرعين معًا ويحتفظ بتاريخ الفروع (يُنشئ commit دمج).</li>
            <li><strong>git rebase:</strong> يعيد تطبيق commits من فرع على رأس فرع آخر (يحافظ على تاريخ خطي نظيف).</li>
          </ul>
          <p class="mt-2">Rebase ينتج تاريخًا أنظف، لكن لا تُعدل commits مشتركة مع فريق.</p>
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
  backend: {
    title: "Backend Basics (Node.js, Express, REST APIs)",
    icon: "⚙️",
    color: "teal",
    questions: [
      {
        question: "ما هو Node.js؟",
        answer: `
          <p><strong>Node.js:</strong> بيئة تشغيل لجافا سكريبت خارج المتصفح، مبنية على V8 Engine (Chrome).</p>
          <p class="mt-2"><strong>المميزات:</strong></p>
          <ul class="list-disc pr-6 space-y-1 mt-1">
            <li>Event-driven و Non-blocking I/O.</li>
            <li>Single-threaded مع Event Loop.</li>
            <li>إدارة الحزم عبر npm.</li>
            <li>مثالي للـ REST APIs والتطبيقات في الوقت الحقيقي.</li>
          </ul>
        `,
      },
      {
        question: "ما هو Express.js؟",
        answer: `
          <p><strong>Express.js:</strong> إطار عمل (Framework) لـ Node.js، يُستخدم لبناء REST APIs و تطبيقات الويب.</p>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>const express = require('express')
const app = express()

app.get('/api/users', (req, res) => {
  res.json({ users: ['Ahmed', 'Mohamed'] })
})

app.listen(3000, () => console.log('Server running'))</code></pre>
          </div>
        `,
      },
      {
        question: "ما هو REST API؟",
        answer: `
          <p><strong>REST API:</strong> واجهة برمجة تطبيقات تتبع مبادئ REST (Representational State Transfer).</p>
          <p class="mt-2"><strong>المبادئ:</strong></p>
          <ul class="list-disc pr-6 space-y-1 mt-1">
            <li>استخدام HTTP Methods: GET, POST, PUT, DELETE.</li>
            <li>Stateless (عديم الحالة).</li>
            <li>استخدام JSON/XML للبيانات.</li>
            <li>URI تعبر عن الموارد (مثل /users/1).</li>
          </ul>
        `,
      },
      {
        question: "ما هي Middleware في Express.js؟",
        answer: `
          <p><strong>Middleware:</strong> دوال تُنفذ في منتصف الطلب والاستجابة (Request-Response cycle).</p>
          <p class="mt-2"><strong>الاستخدامات:</strong></p>
          <ul class="list-disc pr-6 space-y-1 mt-1">
            <li>تسجيل (Logging).</li>
            <li>مصادقة (Authentication).</li>
            <li>تحليل البيانات (body-parser).</li>
            <li>إدارة CORS.</li>
            <li>معالجة الأخطاء.</li>
          </ul>
          <div class="mt-3 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
            <pre class="text-sm overflow-x-auto"><code>app.use((req, res, next) => {
//   
  next()
})</code></pre>
          </div>
        `,
      },
    ],
  },
};
