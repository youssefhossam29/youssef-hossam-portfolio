# 🎨 الدليل التفصيلي لتصميم واجهة وتجربة المستخدم (UI & UX Specification)
**المشروع:** بورتفوليو يوسف حسام الدين (Youssef Hossam Portfolio)  
**المرحلة:** Epic 2 - UI & UX Design System (معتمد)  
**المسؤول:** Senior Product Owner & UX Architect  
**آخر تحديث:** 2026-10-04  

---

## 🎨 1. نظام الهوية البصرية والألوان (Design Tokens & Color Palette)

### 🔹 باليتة الألوان المعتمدة (Color Palette):
- **الأزرق الملكي (Primary Brand):** `#0649C1` — للروابط الرئيسية، الأزرار الأساسية، والتركيز الهندسي.
- **البنفسجي الإنديجو (Secondary Accent):** `#676CDB` — للأزرار الثانوية، علامات التبويب، والحدود النشطة.
- **الرمادي البنفسجي الفاتح (Subtle Lavender Tint):** `#EDEBFF` — لخلفيات الشارات (Badges)، الحقول النشطة، وتأثيرات الـ Glow الخفيفة.
- **الوضع الداكن (Dark Mode - الافتراضي):**
  - خلفية الموقع الأساسية: `#0B1120`
  - خلفية الكروت والأسطح: `#111827` و `#1E293B`
  - الحدود والخطوط الفاصلة: `rgba(255, 255, 255, 0.08)`
  - لون النصوص الرئيسية: `#F8FAFC`
  - لون النصوص الثانوية: `#94A3B8`
- **الوضع الفاتح (Light Mode):**
  - خلفية الموقع الأساسية: `#FFFFFF`
  - خلفية الكروت: `#F8FAFC`
  - الحدود: `#E2E8F0`
  - لون النصوص الرئيسية: `#0F172A`
  - لون النصوص الثانوية: `#64748B`

### 🔹 نسختي الشعار (Logo Variations):
1. **النسخة الأولى (المعتمدة في الهيدر - مرجع `images/logo.png`):**
   - صورة شخصية دائرية بإطار ملون متوهج (Glow Border) بلون `#676CDB` / `#0649C1`.
   - اسم "Youssef Hossam" بخط سميك أنيق وعصري.
   - المسمى الوظيفي: "SOFTWARE ENGINEER" بحروف صغيرة/كبيرة باللون الأزرق `#0649C1` أو الرمادي المنظم.
2. **النسخة الثانية (الشعار النصي الهندسي - مرجع `images/logo1.png`):**
   - كلمة `Youssef.` بخط عصري فخم، يخترق الحرف الأول خط مائل قطري ملون (Slanted Slash) بلون ذهبي أو إنديجو `#676CDB` مع نقطة متباينة في النهاية.

---

## 🧭 2. شريط التنقل العلوي (Header System)

### 💻 شاشات الكمبيوتر (Desktop - مرجع `images/header.png`):
- **الخاصية:** شريط لاصق زجاجي (Sticky Glassmorphism) يبقى ثابتاً أثناء التمرير مع تأثير غباش خفيف (`backdrop-blur-md`).
- **العناصر من اليسار إلى اليمين:**
  1. **اللوجو:** صورة دائرية + الاسم والمسمى الوظيفي.
  2. **روابط التنقل السريع:**
     - الرئيسية (Home)
     - من أنا (About)
     - المشاريع (Projects)
     - تواصل معي (Contact)
  3. **أدوات التحكم والإجراءات:**
     - زر تبديل اللغة (`AR` / `EN`) مع تصميم بيضاوي ناعم.
     - زر تبديل الوضع الليلي والنهاري (`🌙` / `☀️`).
     - زر السيرة الذاتية (`CV`) بتصميم محدد بإطار أنيق (Outline Pill Button) يفتح رابط الـ CV على Google Drive أو يحمله مباشرة.

### 📱 شاشات الهواتف (Mobile - مرجع `images/header-phone.png.png`):
- **البار العلوي في الموبايل:**
  - جهة اليسار: اللوجو.
  - في المنتصف إلى اليمين: زر اللغة (`AR`) + زر الوضع الداكن/الفاتح.
  - أقصى اليمين: أيقونة الهمبرجر (`Hamburger Menu Icon`).
- **قائمة الهاتف التفاعلية (Mobile Drawer / Overlay):**
  - عند النقر على الهمبرجر، تنفتح شاشة كاملة بانسيابية ذات خلفية زرقاء ملكية داكنة راقية.
  - أعلى الشاشة: اللوجو وزر الإغلاق `[X]` وزر اللغة.
  - منتصف الشاشة: روابط الصفحات الرئيسية بخط كبير ومسافات لمسية مريحة.
  - أسفل الشاشة: زر بارز لتحميل السيرة الذاتية أو استشارة مجانية (`Free Consultation` / `View CV`).

---

## 🦶 3. الفوتر (Footer System)
- **محتوى الفوتر:**
  - **العمود الأول:** الشعار مع الـ Slogan:  
    *"Engineering growth. From WordPress to Laravel — Building scalable backends and high-converting web solutions."*
  - **العمود الثاني (Quick Links):** روابط التنقل لجميع صفحات الموقع الأربعة.
  - **العمود الثالث (Contact Info):**
    - الموقع: Alexandria, Egypt (متاح للعمل عن بُعد وللانتقال).
    - البريد: `youssefhossam2902@gmail.com`
    - الهاتف / واتساب: `(+20) 1279932792`
  - **العمود الرابع (Social Links):** روابط الحسابات المهنية (GitHub, LinkedIn, WhatsApp).
  - **الشريط السفلي:** شارة الحالة `🟢 Available for Opportunities` وحقوق الملكية `© 2026 Youssef Hossam. All rights reserved.`

---

## 🏠 4. الصفحة الرئيسية (Home Page)

### 🔹 السكشن الأول (Hero Section - مرجع `images/home1-.png.png`):
- **جهة اليسار (نصوص وإجراءات):**
  - عنوان ترحيبي عريض:  
    `Hi, I'm Youssef Hossam a Backend Engineer (Laravel and PHP)`  
    مع تمييز عبارة `Backend Engineer (Laravel and PHP)` بلون لافت جذاب.
  - فقرة تعريفية مركزة:  
    *"I'm passionate about programming and aim to utilize my expertise in web development with Laravel and WordPress to deliver high-performance, efficient solutions."*
  - الأزرار التفاعلية المزدوجة:
    - زر أساسي ممتلئ: `Keep In Touch` (ينقل لصفحة التواصل).
    - زر إطار ناعم: `View CV` (يفتح السيرة الذاتية).
  - شريط أيقونات التواصل الاجتماعي المصغر: (GitHub, Email, LinkedIn, Phone).
- **جهة اليمين (الصورة الفنية):**
  - استخدام الصورة الفنية المقسمة لشبكة مربعات هندسية فخمة (مرجع `images/home-persolan-image.png`).
  - وسوم تقنية عائمة حول الصورة (Laravel, PHP, WordPress).
- **زر واتساب العائم (Floating WhatsApp):**
  - أيقونة واتساب دائرية خضراء ثابتة في الزاوية السفلية تتيح لأي عميل أو مسؤول توظيف فتح محادثة فورية.

### 🔹 سكاشن المعاينة المختارة من باقي الصفحات (Home Preview Sections):
1. **المساران التخصصيان (Dual-Track Focus Teaser):**
   - بطاقة مسار الـ Backend (Laravel, APIs, MySQL, Clean Architecture).
   - بطاقة مسار الـ WordPress (Custom Themes, WooCommerce, Fast Speed).
2. **معاينة مختارة من المشاريع (Featured Projects Preview):**
   - عرض 3 كروت مميزة من المشاريع مع زر الانتقال المباشر لصفحة المشاريع الكاملة (`View All Projects ↗`).
3. **شريط لوجوهات التقنيات المتحرك (Tech Logos Marquee Teaser):**
   - شريط متحرك بانسيابية يعرض أهم التقنيات التي يتقنها يوسف.
4. **بانر الدعوة للعمل (Call to Action Banner):**
   - *"جاهز للتعاون في مشروعك القادم؟"* مع زر سريع لصفحة الاتصال.

---

## 💼 5. صفحة المشاريع (Projects Page)

### 🔹 الهيكل العام (مرجع `images/projects.png`):
- **العنوان الرئيسي:** *"Real projects driving tangible business outcomes"*
- **الوصف:** *"Live production platforms, ecommerce storefronts, and digital experiences we engineered for forward-moving businesses."*
- **أزرار الفلترة الفورية (Category Tabs):**
  - `All` (جميع المشاريع)
  - `Ecommerce` (متاجر إلكترونية)
  - `Portofilio` (مواقع بورتفوليو وتعريفية)
  - `Landing` (صفحات هبوط تسويقية)
- **طريقة التوزيع:** تخطيط شبكي حر (Masonry Grid) يتكيف مع مختلف أبعاد المشاريع.
- **سياسة الصفحات:** بدون Single Page لكل مشروع (معلومات المشروع كاملة ومباشرة على نفس الصفحة).

### 🔹 تشريح كارت المشروع المميز (مرجع `images/project-info.png`):
- **شريط المتصفح المصغر (Browser Top Bar):** نقاط نظام الماك (أحمر، أصفر، أخضر) مع شارة الحالة (`🟢 Live Production` أو `🟢 Live Platform`).
- **صورة المشروع:** من مجلد `projects/` (12 مشروع حقيقي تشمل allura-eg, ash-natural, misk-qa, hawaaeg, dataskool, وغيرها).
- **المنحنى الهندسي الفريد (Curved Cutout Notch):**
  - زاوية سفلية منحوتة بانحناء مقعر داخلي (Concave Curve) مخصص يحتضن الزر الدائري البارز الذي يحمل سهم الانتقال (`↗`).
- **بيانات الكارت:**
  - وسم التصنيف (Badge) + اسم المشروع بخط عريض.
  - وسم البلد (Country e.g. Egypt / Saudi Arabia / Qatar).
  - وسم المجال (Industry e.g. E-Commerce, Education, Health, Events).
  - وسوم الأدوات والتقنيات (Tools Used e.g. Laravel, WordPress, WooCommerce, MySQL, Tailwind).
  - وصف مختصر من 2-3 سطور يوضح المشكلة والأثر التجاري للمشروع.
  - زر الإطلاق المباشر (`Launch Live Demo ↗`).

---

## 👤 6. صفحة من أنا (About Page)

تتكون صفحة About من 6 سكاشن غنية ومتكاملة:
1. **سكشن معلومات عني (مرجع `images/about.png`):**
   - عنوان رئيسي بارز مع تمييز لوني للكلمات (مثلاً: `Backend & WordPress Engineer`).
   - نبذة تعريفية عميقة مستمدة من السيرة الذاتية (خريج كلية الحاسبات بجامعة الإسكندرية GPA 3.6/4، مطور Laravel في Gen-Tech، وخريج ITI).
   - وسوم سريعة للمهارات الأساسية مع رسم/توضيح هندسي للمطور.
2. **سكشن المهارات التقنية والشخصية (مرجع `images/skills.png`):**
   - 4 بطاقات متجاورة:
     - **Backend Engineering:** PHP, Laravel, RESTful APIs, MySQL, WebSockets, Redis, Microservices.
     - **WordPress & Web:** Custom Theme Dev, WooCommerce, ACF Pro, Amelia LMS, Polylang, Site Speed 90+.
     - **Soft Skills:** Problem Solving, Clean Architecture, Team Leadership, Fast Adaptability, Attention to Details.
     - **Languages:** Arabic (Native), English (Professional).
3. **سكشن الخط الزمني للخبرات (Timeline - مرجع `images/timeline.png`):**
   - خط رأسي مضيء في المنتصف تتفرع منه البطاقات يميناً ويساراً:
     - **Backend Laravel Developer** @ Gen-Tech (08/2025 – Current)
     - **WordPress Developer** @ Gen-Tech (11/2024 – 08/2025)
     - **Full Stack WordPress Developer** @ ITI (05/2024 – 08/2024)
4. **سكشن التعليم والمنح (Education & Scholarships - مرجع `images/Education.png`):**
   - بطاقة بكالوريوس الحاسب الآلي والإحصاء - جامعة الإسكندرية (GPA: 3.6/4).
   - بطاقة منحة معهد تكنولوجيا المعلومات ITI (Intensive Code Camp - CMS Track).
   - بطاقة التدريب والتطوير المستمر وتأدية الخدمة العسكرية.
5. **سكشن الأسئلة الشائعة (FAQ Accordion - مرجع `images/faq.png`):**
   - جهة اليسار: كولاج صوري احترافي مع خلفية نقطية دقيقة.
   - جهة اليمين: عنوان جذاب وأسئلة منسدلة تفاعلية (Accordion) تجيب على استفسارات مديري التوظيف والعملاء:
     - ما هي الخدمات التي تقدمها؟
     - كيف تضمن أمان وسرعة الموقع والـ APIs؟
     - هل أنت متاح لفرص العمل بدوام كامل أم مشاريع الفريلانس؟
     - كيف يتم تسليم المشاريع والدعم الفني؟
6. **شريطي اللوجوهات المتحركة (Logos Marquee - مرجع `images/logos.png`):**
   - شريطان متوازيان يعرضان شعارات التقنيات من مجلد `tech logos` (Laravel, WordPress, Node.js, Next.js, Django, React, Flutter, .NET, Moodle).
   - حركة مستمرة لا نهائية وسلسة للغاية (Smooth Infinite Scroll): الشريط العلوي يتحرك من اليمين لليسار، والشريط السفلي يتحرك في الاتجاه المعاكس من اليسار لليمين.

---

## 📬 7. صفحة التواصل (Contact Page - مرجع `images/contact.png`)

- **جهة اليسار (معلومات التواصل المباشرة):**
  - شارة: `Get In Touch`
  - العنوان الرئيسي: `Let's Talk For your Next Projects`
  - نبذة تشجيعية للبدء في مشاريع جديدة أو الانضمام لفرق عمل واعدة.
  - بطاقات المعلومات:
    - 📍 **الموقع:** Alexandria, Egypt (جاهز للعمل عن بُعد وللانتقال).
    - ✉️ **البريد الإلكتروني:** `youssefhossam2902@gmail.com` مع زر نسخ سريع بنقرة واحدة.
    - 📞 **الهاتف / واتساب:** `(+20) 1279932792`
  - قسم تابعني (`Follow Me`): أزرار دائرية أنيقة لـ (GitHub, LinkedIn, WhatsApp).
- **جهة اليمين (بطاقة نموذج الاتصال):**
  - **Full Name \***: حقل إدخال الاسم.
  - **Email Address \***: حقل إدخال البريد.
  - **Phone Number \***: حقل إدخال رقم الهاتف مع رمز الدولة.
  - **Subject \***: قائمة منسدلة (Full-time Backend Opportunity, Custom WordPress Project, Consultation, Other).
  - **Message \***: مساحة كتابة الرسالة.
  - زر الإرسال المضيء: `Send Us Message >` مع تفاعل حركي فوري.
