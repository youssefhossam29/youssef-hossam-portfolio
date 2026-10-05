# 🚀 Portfolio Project Roadmap & Execution Plan
**Owner:** Youssef Hossam Eldin  
**Role:** Software Engineer (Backend / Laravel & WordPress Specialist)  
**Last Updated:** 2026-10-04  

---

## 📌 نظرة عامة على المشروع (Project Overview)
بناء موقع بورتفوليو شخصي هندسي متكامل عالي الأداء من 4 صفحات رئيسية (الرئيسية، About، Projects، Contact) بالإضافة لهيدر لاصق (Sticky Header) وفوتر غني. يجمع الموقع بين قوة معمارية الـ Backend (Laravel & APIs) وخبرة حلول ومتاجر الـ WordPress، بهوية بصرية استثنائية وألوان عصرية، وتوافق تام مع شاشات الكمبيوتر والموبايل واستضافة سريعة على Vercel.

---

## 🗺️ خريطة المراحل (Project Epics & Status)

| المرحلة (Epic) | الوصف | الحالة | نسبة الإنجاز |
| :--- | :--- | :---: | :---: |
| **Epic 1: Personal Branding & Identity** | تحديد الهوية، باليتة الألوان المحدثة، الخطوط، والنسختين من الشعار | ✅ مكتمل (Done) | 100% |
| **Epic 2: UI & UX Design System** | المواصفات الكاملة للصفحات الأربعة، الهيدر التفاعلي، الفوتر، والشعارات المحدثة | ✅ مكتمل (Done) | 100% |
| **Epic 3: Framework & Tech Stack** | اعتماد إطار العمل (Next.js)، معمارية المكونات، وبنية البيانات الثابتة | ✅ مكتمل (Done) | 100% |
| **Epic 4: Implementation & Deployment** | التكويد الفعلي لصفحات ومكونات Next.js، الحركات التفاعلية، والرفع على Vercel | ⏳ قيد التنفيذ (In Progress) | 10% |

---

## 📌 Epic 1: Personal Branding (الهوية الشخصية) ✅
> **الحالة:** مكتمل بنجاح  
> **المخرجات المعتمدة:** وثيقة الهوية البصرية ونظام الألوان المحدث والشعارات

### 📋 تفاصيل الهوية المعتمدة:
- [x] **Task 1.1: الجمهور المستهدف والرسالة:**
  - **الجمهور المستهدف:** مسار مزدوج يجمع مديري التوظيف والشركات (Backend / Laravel) وعملاء العمل الحر (WordPress / E-Commerce).
  - **نبرة الصوت (Voice):** "الخبير التقني المعتمد" – لغة واثقة، هندسية، تركز على جودة الكود، المعمارية النظيفة، وتحقيق نمو حقيقي للأعمال.
- [x] **Task 1.2: القيمة المضافة (Value Proposition):**
  - "هندسة برمجية متكاملة لنمو أعمالك: من منصات الووردبريس السريعة، إلى أنظمة الـ Backend المعقدة والقابلة للتوسع باستخدام Laravel."
  - *"Engineering growth. From WordPress to Laravel."*
- [x] **Task 1.3: باليتة الألوان المعتمدة (Color Palette System):**
  - **الأزرق الملكي الأساسي (Primary Royal Blue):** `#0649C1`
  - **البنفسجي الإنديجو الإضافي (Accent Iris/Indigo):** `#676CDB`
  - **الدرجة الفاتحة الخافتة (Lavender Mist/Tint):** `#EDEBFF`
  - **الوضع الداكن (Dark Mode):** خلفية أساسية `#0B1120` | أسطح الكروت `#111827` / `#1E293B` | نصوص `#F8FAFC`
  - **الوضع الفاتح (Light Mode):** خلفية أساسية `#FFFFFF` | أسطح الكروت `#F8FAFC` | نصوص `#0F172A`
- [x] **Task 1.4: نسختي الشعار (Logo Variations):**
  - **النسخة الأولى (Avatar + Wordmark - مرجع `logo.png`):** صورة شخصية دائرية بإطار مميز + اسم "Youssef Hossam" بخط عصري بارز + سطر "SOFTWARE ENGINEER" بلون إنديجو/أزرق هادئ.
  - **النسخة الثانية (Typographic Icon Mark - مرجع `logo1.png`):** شعار نصي هندسي حديث لكلمة `Youssef.` مع خط مائل قطري (Slash) يخترق الحرف الأول ونقطة متباينة في النهاية.

---

## 🎨 Epic 2: UI & UX Design (تصميم الواجهات وتجربة المستخدم) ✅
> **الحالة:** مكتمل بالكامل وموثق في [UI_UX_SPECIFICATION.md](file:///c:/Users/yh571/OneDrive/Desktop/portofolio/website/UI_UX_SPECIFICATION.md)  
> **الهيكل المعتمد:** 4 صفحات منفصلة + Sticky Header + Rich Footer

### 📋 تفاصيل المكونات والصفحات المعتمدة:
- [x] **Task 2.1: الهيدر التفاعلي وشريط التنقل (Header System):**
  - **شاشات الكمبيوتر (Desktop - مرجع `header.png`):**
    - شريط لاصق زجاجي (Sticky Glassmorphism Header).
    - يسار: الشعار (الصورة الدائرية + الاسم + التخصص).
    - وسط: روابط التنقل السريع (Home, About, Projects, Contact).
    - يمين: زر تغيير اللغة (AR / EN) + زر التبديل بين الداكن والفاتح 🌙/☀️ + زر بارز لتحميل/عرض السيرة الذاتية (`CV`).
  - **شاشات الموبايل (Mobile - مرجع `header-phone.png.png`):**
    - يسار: اللوجو.
    - يمين: أيقونة الهمبرجر (Hamburger Menu).
    - بين اللوجو والهمبرجر: زر تغيير اللغة (AR) ومفتاح Light/Dark Mode.
    - عند النقر على الهمبرجر: تنبثق شاشة كاملة زرقاء ملكية داكنة تحوي روابط التنقل في المنتصف وزر إغلاق `[X]` في الأعلى وزر اتخاذ إجراء بارز في الأسفل.
- [x] **Task 2.2: الفوتر الاحترافي (Footer):**
  - الشعار المعتمد + الـ Slogan الهندسي.
  - الروابط السريعة لكافة صفحات الموقع (Quick Links).
  - بيانات التواصل المباشرة (Contact Info: Alexandria, Email, Phone).
  - روابط حسابات التواصل المهنية (Social Links: GitHub, LinkedIn, WhatsApp).
  - حالة التوفر الحالية (🟢 Available for Opportunities) وحقوق الملكية.
- [x] **Task 2.3: الصفحة الرئيسية (Home Page - مرجع `home1-.png.png`):**
  - **السكشن الأول (Hero Section):**
    - النص البارز: *"Hi, I'm Youssef Hossam a Backend Engineer (Laravel and PHP)"* مع تمييز لوني تفاعلي.
    - فقرة وصفية تعبر عن الشغف والكفاءة العالية في هندسة Laravel ومنصات WordPress.
    - أزرار الدعوة للإجراء: زر أساسي ممتلئ (`Keep In Touch`) وزر إطار ناعم (`View CV`).
    - شريط أيقونات التواصل المصغر: GitHub, Email, LinkedIn, Phone.
    - الصورة الشخصية على اليمين: الصورة الفنية المقسمة لشبكة مربعات هندسية (مرجع `home-persolan-image.png`).
    - زر واتساب عائم سريع وثابت في أسفل الشاشة للوصول الفوري.
  - **سكاشن المعاينة المختارة من باقي الصفحات (Preview Sections):**
    - سكشن معاينة موجزة للمسارين: مسار الـ Backend ومسار الـ WordPress.
    - سكشن استعراض لأبرز المشاريع (Featured Projects Preview) مع رابط الانتقال لصفحة المشاريع كاملة.
    - سكشن شريط لوجوهات التقنيات المتحركة (Tech Logos Marquee).
    - سكشن دعوة للتواصل السريع (CTA Banner).
- [x] **Task 2.4: صفحة المشاريع (Projects Page - مرجع `projects.png` & `project-info.png`):**
  - شارة علوية وعنوان رئيسي قوي: *"Real projects driving tangible business outcomes"*.
  - أزرار الفلترة الفورية بالأقسام المطلوبة: `All`, `Ecommerce`, `Portofilio`, `Landing`.
  - تخطيط شبكي حر ومتناسق الارتفاعات (Masonry Layout Grid).
  - **تصميم كارت المشروع المبتكر (مرجع `project-info.png`):**
    - هيكل شريط المتصفح المصغر (Mac Dots: Red/Yellow/Green + URL Badge).
    - حواف الكارت مستديرة، مع **المنحنى الداخلي المميز (Curved Cutout Notch)** في الزاوية الذي يحتضن زر السهم الدائري التفاعلي (`↗`).
    - وسم التصنيف الرئيسي والبلد والمجال (Country, Industry, Tools Used).
    - وصف مختصر من 2 إلى 3 سطور يشرح المشكلة والحل.
    - وسوم التقنيات المستخدمة (Tech Chips).
    - ربط مباشر للصور من مجلد `projects/` (بدون صفحات فردية منفصلة حسب طلبك).
- [x] **Task 2.5: صفحة عن يوسف (About Page):**
  - **سكشن من أنا (مرجع `about.png`):** تعريف احترافي يركز على العقلية الهندسية، مع وسوم المهارات الأساسية ورسم توضيحي للمطور.
  - **سكشن المهارات (Skills - مرجع `skills.png`):** 4 بطاقات مقسمة (Backend & Laravel, WordPress & E-Commerce, Soft Skills, Languages).
  - **سكشن الخبرات والخط الزمني (Timeline - مرجع `timeline.png`):** خط زمني رأسي مضيء يوضح محطات العمل في Gen-Tech و ITI.
  - **سكشن التعليم والشهادات (Education - مرجع `Education.png`):** بطاقات بكالوريوس حاسبات الإسكندرية (GPA 3.6/4) ومنح معهد ITI.
  - **سكشن الأسئلة الشائعة (FAQ Accordion - مرجع `faq.png`):** قائمة أسئلة منسدلة تفاعلية مع كولاج صوري بجانبها.
  - **شريطي اللوجوهات المتحركة (Logos Marquee - مرجع `logos.png`):** شريطان متوازيان من شعارات مجلد `tech logos` يتحركان بسلاسة لا نهائية في اتجاهين متعاكسين.
- [x] **Task 2.6: صفحة التواصل (Contact Page - مرجع `contact.png`):**
  - جهة اليسار: عنوان ترحيبي، نص محفز للتعاون، معلومات التواصل الرسمية (الموقع، الإيميل، الهاتف)، وروابط شبكات التواصل الدائرية.
  - جهة اليمين: بطاقة نموذج الاتصال المتكامل: الاسم بالكامل (Full Name)، البريد الإلكتروني (Email Address)، رقم الهاتف (Phone Number)، الموضوع (Subject)، نص الرسالة (Message)، وزر الإرسال البارز (`Send Us Message >`).

---

## ⚙️ Epic 3: Framework & Tech Stack Selection ✅
> **الحالة:** مكتمل بنجاح  
> **الإطار المعتمد:** Next.js (App Router / Static HTML Export)  
> **المخرجات:** معمارية تقنية فائقة السرعة ومتوافقة 100% مع Vercel و SEO

### 📋 القرارات التقنية المعتمدة:
- [x] **Task 3.1: إطار العمل (Core Framework):** اعتماد **Next.js** للأداء والسرعة العالية ودعمه الممتاز للـ SEO والرفع المباشر على Vercel.
- [x] **Task 3.2: أدوات التنسيق (Styling & Animation):** Vanilla CSS / Modern Utility Classes مع متغيرات الهوية البصرية (`#0649C1`, `#676CDB`, `#EDEBFF`).
- [x] **Task 3.3: بنية البيانات الثابتة (Static Data Architecture):** ملفات بيانات `projects.json`, `experience.json`, `faq.json` لإدارة وتحديث محتوى الموقع بسهولة.

---

## 💻 Epic 4: Implementation & Deployment ⏳
> **الحالة:** مكتمل التكويد البرمجي واختبار الـ Build بنجاح (85%)  
> **الهدف:** تهيئة مشروع Next.js وبناء المكونات التفاعلية والصفحات الأربعة ثم الرفع على GitHub و Vercel

### 📋 المهام المنجزة:
- [x] **Task 4.1: تهيئة مشروع Next.js (App Router + TypeScript):**
  - تهيئة الهيكل البرمجي المركزي `src/config/site.ts` ليكون Single Source of Truth لكل الألوان، الخطوط، واللوجوهات.
  - نقل وربط كافة المجلدات (`logo`, `projects`, `tech logos`, `files`) داخل `public/`.
- [x] **Task 4.2: تصميم الـ Glassmorphism ونظام الألوان:**
  - برمجة متغيرات الهوية البصرية والوضع الداكن الافتراضي في `src/app/globals.css`.
  - تطبيق خلفيات الزجاج الشفاف (Backdrop Blur)، خطوط التوهج، وأزرار التفاعل.
- [x] **Task 4.3: بناء المكونات العامة (Shared Components):**
  - الهيدر اللاصق `Header.tsx` مع قائمة الموبايل المنبثقة `Mobile Drawer`.
  - الفوتر الاحترافي `Footer.tsx`.
  - كارت المشروع المبتكر `ProjectCard.tsx` بالمنحنى المقعر ونقاط الماك ونظام الفلترة.
  - شريطي لوجوهات التقنيات المتحركة `TechMarquee.tsx`.
  - زر الواتساب العائم النابض `FloatingWhatsApp.tsx`.
- [x] **Task 4.4: تكويد الصفحات الأربعة كاملة:**
  - الصفحة الرئيسية `src/app/page.tsx` (Hero Section المتطابق مع `home1-.png.png`, مساري العمل, المشاريع المميزة).
  - صفحة من أنا `src/app/about/page.tsx` (التعريف، بطاقات المهارات الـ 4، التايم لاين، التعليم والشهادات، والأسئلة الشائعة FAQ Accordion).
  - صفحة المشاريع `src/app/projects/page.tsx` (الفلترة الفورية بالأقسام `All`, `Ecommerce`, `Portofilio`, `Landing` وعرض 17 مشروعاً).
  - صفحة التواصل `src/app/contact/page.tsx` (بيانات التواصل، نسخ الإيميل بنقرة واحدة، ونموذج إرسال الرسائل التفاعلي).
- [x] **Task 4.5: الفحص والتحقق (Production Build Validation):**
  - بناء المشروع بنجاح عبر `npm run build` والتحقق من سلامة كافة الـ Typescript Routes وتوليد الصفحات الثابتة بـ 0 أخطاء.
- [ ] **Task 4.6: الرفع على مستودع GitHub و Vercel:**
  - ربط المشروع بمستودع `youssef-hossam-portfolio` ودفع الكود.
