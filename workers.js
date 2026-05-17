// قاعدة بيانات العمال المحدثة والمصححة بالكامل (عربي / فرنسي)
const workersDatabase = [
    {
        id: "emp01",
        firstname_ar: "عبد القادر", lastname_ar: "حفراد",
        firstname_fr: "Abdelkader", lastname_fr: "Hafrad",
        age: 42, phone: "+213 655 12 34 56", married_ar: "متزوج", married_fr: "Marié",
        course_ar: "إدارة الحقول وعمليات الآبار النفطية والأمن الصناعي HSE",
        course_fr: "Gestion des champs, opérations des puits et sécurité industrielle HSE",
        course_date: "12-01-2024",
        course_place_ar: "معهد سوناطراك المتقدم (حاسي مسعود)", course_place_fr: "Institut Avancé de Sonatrach (Hassi Messaoud)"
    },
    {
        id: "emp02",
        firstname_ar: "أحمد", lastname_ar: "حفراد",
        firstname_fr: "Ahmed", lastname_fr: "Hafrad",
        age: 35, phone: "+213 770 98 76 54", married_ar: "متزوج", married_fr: "Marié",
        course_ar: "متابعة الآليات والوقود والصيانة الوقائية للمركبات",
        course_fr: "Suivi des équipements, carburant et maintenance préventive",
        course_date: "05-03-2025",
        course_place_ar: "مركز التكوين التقني شلمبرجير (وهران)", course_place_fr: "Centre de Formation Technique Schlumberger (Oran)"
    },
    {
        id: "emp03",
        firstname_ar: "بالقاسم", lastname_ar: "جودي",
        firstname_fr: "Belgacem", lastname_fr: "Djoudi",
        age: 39, phone: "+213 661 45 89 12", married_ar: "متزوج", married_fr: "Marié",
        course_ar: "عمليات العزل الميكانيكي وتفريغ الغازات من الخزانات",
        course_fr: "Isolation mécanique et dégazage des bacs de stockage",
        course_date: "18-11-2023",
        course_place_ar: "مركز التدريب ENSP (حاسي مسعود)", course_place_fr: "Centre de formation ENSP (Hassi Messaoud)"
    },
    {
        id: "emp04",
        firstname_ar: "محمد", lastname_ar: "ويسي",
        firstname_fr: "Mohamed", lastname_fr: "Ouissi",
        age: 41, phone: "+213 662 78 45 11", married_ar: "متزوج", married_fr: "Marié",
        course_ar: "تفتيش السلامة وإصدار تصاريح العمل الميدانية",
        course_fr: "Inspection de sécurité et délivrance des permis de travail",
        course_date: "22-02-2024",
        course_place_ar: "معهد البترول الجزائري IAP (أرزيو)", course_place_fr: "Institut Algérien du Pétrole IAP (Arzew)"
    },
    {
        id: "emp05",
        firstname_ar: "هواري", lastname_ar: "نعاس",
        firstname_fr: "Houari", lastname_fr: "Naas",
        age: 34, phone: "+213 550 14 25 36", married_ar: "أعزب", married_fr: "Célibataire",
        course_ar: "تقنيات التدخل السريع ومكافحة الحرائق الصناعية",
        course_fr: "Techniques d'intervention rapide et lutte contre les incendies industriels",
        course_date: "09-10-2024",
        course_place_ar: "مركز الحماية المدنية والأمن (وهران)", course_place_fr: "Centre de Protection Civile et Sécurité (Oran)"
    },
    {
        id: "emp06",
        firstname_ar: "سفيان", lastname_ar: "الحجاري",
        firstname_fr: "Sofiane", lastname_fr: "El Hedjari",
        age: 37, phone: "+213 772 33 66 99", married_ar: "متزوج", married_fr: "Marié",
        course_ar: "المعايير المتقدمة لحماية البيئة في المنشآت النفطية HSEQ",
        course_fr: "Normes avancées de protection de l'environnement HSEQ",
        course_date: "14-05-2025",
        course_place_ar: "مديرية البيئة والسلامة للمشاريع (أرزيو)", course_place_fr: "Direction Environnement et Sécurité (Arzew)"
    },
    {
        id: "emp07",
        firstname_ar: "سفيان", lastname_ar: "رحراحي",
        firstname_fr: "Sofiane", lastname_fr: "Rahrahi",
        age: 31, phone: "+213 658 88 11 22", married_ar: "أعزب", married_fr: "Célibataire",
        course_ar: "إدارة المخازن الرقمية وقطع الغيار الصناعية الميكانيكية",
        course_fr: "Gestion digitale des stocks et pièces de rechange industrielles",
        course_date: "11-01-2026",
        course_place_ar: "القطب التكنولوجي الفني (وهران)", course_place_fr: "Pôle Technologique Technique (Oran)"
    },
    {
        id: "emp08",
        firstname_ar: "محمد", lastname_ar: "مباركي",
        firstname_fr: "Mohamed", lastname_fr: "Mebarki",
        age: 45, phone: "+213 664 55 44 33", married_ar: "متزوج", married_fr: "Marié",
        course_ar: "الإشراف الميداني وتنسيق الورشات الصناعية الكبرى",
        course_fr: "Supervision sur terrain et coordination des grands ateliers",
        course_date: "03-09-2023",
        course_place_ar: "معهد إدارة المشاريع الصناعية (الجزائر العاصمة)", course_place_fr: "Institut de Gestion des Projets Industriels (Alger)"
    },
    {
        id: "emp09",
        firstname_ar: "كريم", lastname_ar: "زنطار",
        firstname_fr: "Karim", lastname_fr: "Zentar",
        age: 29, phone: "+213 561 77 44 11", married_ar: "أعزب", married_fr: "Célibataire",
        course_ar: "الهندسة الكهربائية والصيانة الدورية للمولدات النفطية",
        course_fr: "Génie électrique et maintenance des générateurs de chantier",
        course_date: "19-06-2024",
        course_place_ar: "مدرسة الصيانة الصناعية والكهرباء (سيدي بلعباس)", course_place_fr: "École de Maintenance Industrielle (Sidi Bel Abbès)"
    },
    {
        id: "emp10",
        firstname_ar: "موسى", lastname_ar: "فغول",
        firstname_fr: "Moussa", lastname_fr: "Faghoule",
        age: 43, phone: "+213 660 12 85 96", married_ar: "متزوج", married_fr: "Marié",
        course_ar: "مراقبة جودة خطوط الأنابيب وصمامات الضغط العالي",
        course_fr: "Contrôle qualité des pipelines et vannes haute pression",
        course_date: "30-10-2024",
        course_place_ar: "معهد اللحام والمراقبة التقنية (سكيكدة)", course_place_fr: "Institut de Soudure et Contrôle Technique (Skikda)"
    },
    {
        id: "emp11",
        firstname_ar: "إسماعيل", lastname_ar: "حمادوش",
        firstname_fr: "Ismail", lastname_fr: "Hamadouche",
        age: 36, phone: "+213 775 41 23 69", married_ar: "متزوج", married_fr: "Marié",
        course_ar: "إدارة المخاطر المهنية والتحليل الأمني للوظائف JSA",
        course_fr: "Gestion des risques professionnels et analyse JSA sur site",
        course_date: "15-12-2025",
        course_place_ar: "المركز الوطني للأمن الصناعي (حاسي الرمل)", course_place_fr: "Centre National de Sécurité Industrielle (Hassi R'mel)"
    },
    {
        id: "emp12",
        firstname_ar: "محمد", lastname_ar: "شرقي",
        firstname_fr: "Mohamed", lastname_fr: "Chergui",
        age: 38, phone: "+213 669 85 74 12", married_ar: "متزوج", married_fr: "Marié",
        course_ar: "صيانة أنظمة الهيدروليك والآلات الميكانيكية الثقيلة",
        course_fr: "Maintenance des systèmes hydrauliques et machines lourdes",
        course_date: "08-04-2024",
        course_place_ar: "مجمع التكوين الميكانيكي المتقدم (قسنطينة)", course_place_fr: "Complexe de Formation Mécanique (Constantine)"
    },
    {
        id: "emp13",
        firstname_ar: "جلالي", lastname_ar: "نمر",
        firstname_fr: "Djellouli", lastname_fr: "Nemer",
        age: 40, phone: "+213 552 96 32 14", married_ar: "متزوج", married_fr: "Marié",
        course_ar: "الإسعافات الأولية المتقدمة والاستجابة الطبية للطوارئ",
        course_fr: "Secourisme avancé et réponse médicale d'urgence sur site",
        course_date: "25-05-2024",
        course_place_ar: "الهلال الأحمر للتكوين الطبي (وهران)", course_place_fr: "Croissant Rouge - Formation Médicale (Oran)"
    },
    {
        id: "emp14",
        firstname_ar: "أحمد", lastname_ar: "بن مريم",
        firstname_fr: "Ahmed", lastname_fr: "Ben Meryem",
        age: 34, phone: "+213 778 41 22 33", married_ar: "متزوج", married_fr: "Marié",
        course_ar: "تأمين بيئة العمل والتحكم في أنظمة العزل الميكانيكي",
        course_fr: "Sécurisation de l'environnement et systèmes d'isolation mécanique",
        course_date: "14-02-2025",
        course_place_ar: "معهد سوناطراك المتقدم (حاسي مسعود)", course_place_fr: "Institut Avancé de Sonatrach (Hassi Messaoud)"
    },
    {
        id: "emp15",
        firstname_ar: "بشير", lastname_ar: "خنيفي",
        firstname_fr: "Bachir", lastname_fr: "Khnifi",
        age: 33, phone: "+213 771 63 52 41", married_ar: "أعزب", married_fr: "Célibataire",
        course_ar: "حماية البيئة وإدارة النفايات الكيميائية الصناعية السامة",
        course_fr: "Protection de l'environnement et gestion des déchets toxiques",
        course_date: "17-09-2025",
        course_place_ar: "الوكالة الوطنية للنفايات الصناعية (الجزائر العاصمة)", course_place_fr: "Agence Nationale des Déchets Industriels (Alger)"
    },
    {
        id: "emp16",
        firstname_ar: "نور الدين", lastname_ar: "كعيوة",
        firstname_fr: "Noureddine", lastname_fr: "Kaioua",
        age: 44, phone: "+213 663 14 74 85", married_ar: "متزوج", married_fr: "Marié",
        course_ar: "تشغيل وصيانة لوحات التحكم الكهربائية ومراقبة القياس SCADA",
        course_fr: "Opération des panneaux de contrôle et supervision SCADA",
        course_date: "04-11-2024",
        course_place_ar: "معهد الهندسة الإلكترونية والكهربائية (بومرداس)", course_place_fr: "Institut de Génie Électrique et Électronique (Boumerdès)"
    },
    {
        id: "emp17",
        firstname_ar: "فريد", lastname_ar: "برصا",
        firstname_fr: "Farid", lastname_fr: "Barsa",
        age: 32, phone: "+213 554 85 96 32", married_ar: "أعزب", married_fr: "Célibataire",
        course_ar: "بروتوكولات الفحص الفني الدوري الشامل لشاحنات الحقل والمناولة",
        course_fr: "Inspection technique périodique des camions de chantier",
        course_date: "21-03-2025",
        course_place_ar: "المؤسسة الوطنية للمراقبة التقنية (مستغانم)", course_place_fr: "Entreprise Nationale de Contrôle Technique (Mostaganem)"
    },
    {
        id: "emp18",
        firstname_ar: "فوضيل", lastname_ar: "بالقاسم زحماني",
        firstname_fr: "Fodil", lastname_fr: "Belgacem Zahmani",
        age: 46, phone: "+213 661 74 12 58", married_ar: "متزوج", married_fr: "Marié",
        course_ar: "القيادة الإدارية وحل الأزمات العمالية المفاجئة في الورشات",
        course_fr: "Leadership managérial et gestion des crises d'ateliers",
        course_date: "02-06-2023",
        course_place_ar: "المدرسة العليا لتسيير المشاريع (الجزائر العاصمة)", course_place_fr: "École Supérieure de Gestion des Projets (Alger)"
    },
    {
        id: "emp19",
        firstname_ar: "حبيب", lastname_ar: "شهايدية",
        firstname_fr: "Habib", lastname_fr: "Chahaidia",
        age: 39, phone: "+213 665 32 14 78", married_ar: "متزوج", married_fr: "Marié",
        course_ar: "إجراءات التدقيق والسلامة الداخلية لمنشآت تخزين الوقود NAFTAL",
        course_fr: "Procédures d'audit de sécurité des dépôts de carburant NAFTAL",
        course_date: "07-05-2025",
        course_place_ar: "المركز التقني للأمن الصناعي (وهران)", course_place_fr: "Centre Technique de Sécurité Industrielle (Oran)"
    },
    {
        id: "emp20",
        firstname_ar: "نصر الدين", lastname_ar: "بوزيد",
        firstname_fr: "Nasreddine", lastname_fr: "Bouzid",
        age: 41, phone: "+213 551 88 99 00", married_ar: "متزوج", married_fr: "Marié",
        course_ar: "صيانة وإصلاح المضخات الهيدروليكية العملاقة في محطات التكرير",
        course_fr: "Maintenance des pompes hydrauliques dans les raffineries",
        course_date: "19-11-2024",
        course_place_ar: "مجمع التكوين الفني لشركة RA1Z (أرزيو)", course_place_fr: "Complexe de Formation Technique de RA1Z (Arzew)"
    },
    {
        id: "emp21",
        firstname_ar: "لطفي", lastname_ar: "دوادي",
        firstname_fr: "Lotfi", lastname_fr: "Douadi",
        age: 30, phone: "+213 773 11 22 44", married_ar: "أعزب", married_fr: "Célibataire",
        course_ar: "أنظمة الرصد الرقمي والتتبع اللوجستي للمركبات عبر الأقمار الصناعية GPS",
        course_fr: "Systèmes de suivi logistique des véhicules par satellite GPS",
        course_date: "28-01-2026",
        course_place_ar: "مركز التكوين الرقمي والاتصالات (وهران)", course_place_fr: "Centre de Formation Digitale et Télécoms (Oran)"
    },
    {
        id: "emp22",
        firstname_ar: "خلفي", lastname_ar: "معزوز",
        firstname_fr: "Khelfi", lastname_fr: "Maazouz",
        age: 38, phone: "+213 662 44 55 66", married_ar: "متزوج", married_fr: "Marié",
        course_ar: "تأمين الآلات الكهربائية الثقيلة في ورشات الغاز الطبيعي المضغوط",
        course_fr: "Sécurisation des équipements électriques dans les ateliers de GNC",
        course_date: "12-09-2024",
        course_place_ar: "معهد الغاز والكهرباء (عين تموشنت)", course_place_fr: "Institut du Gaz et de l'Électricité (Aïn Témouchent)"
    },
    {
        id: "emp23",
        firstname_ar: "محفوظ", lastname_ar: "حواس",
        firstname_fr: "Mahfoud", lastname_fr: "Houas",
        age: 36, phone: "+213 553 66 77 88", married_ar: "متزوج", married_fr: "Marié",
        course_ar: "تقنيات الفحص الهيكلي بالأشعة السينية للأنابيب النفطية الناقلة",
        course_fr: "Contrôle non destructif par radiographie des pipelines",
        course_date: "04-04-2025",
        course_place_ar: "المؤسسة الوطنية للمراقبة التقنية الصناعية (أرزيو)", course_place_fr: "Entreprise de Contrôle Technique Industriel (Arzew)"
    },
    {
        id: "emp24",
        firstname_ar: "خالد", lastname_ar: "حراث",
        firstname_fr: "Khaled", lastname_fr: "Harrath",
        age: 34, phone: "+213 776 22 33 44", married_ar: "أعزب", married_fr: "Célibataire",
        course_ar: "تطبيقات الصحة المهنية والبيئية والإدارة الشاملة لنظام HSEQ في الحقول",
        course_fr: "Applications HSE et gestion intégrée du système HSEQ sur site",
        course_date: "15-11-2025",
        course_place_ar: "مركز التدريب والمتابعة التقنية ENSP (وهران)", course_place_fr: "Centre de Formation Technique ENSP (Oran)"
    }
];

// قاموس الترجمة المخصص لصفحة العمال (AR / FR)
const pageLanguages = {
    ar: {
        workers_page_title: "قاعدة بيانات شؤون الموظفين والعمال",
        select_worker_hint: "اختر عمال الحقل الفعليين:",
        empty_worker_view: "الرجاء اختيار موظف من القائمة لعرض ملفه التقني الشخصي وسجل التكوين الخاص به.",
        back_btn: "الرجوع للرئيسية",
        active_status: "متصل ميدانياً",
        lbl_name: "الاسم:",
        lbl_lastname: "اللقب:",
        lbl_age: "العمر:",
        lbl_phone: "رقم الهاتف:",
        lbl_status: "الحالة الاجتماعية:",
        years_unit: "عاماً",
        training_title: "بيانات وحقيبة التكوين المهني الصناعي",
        lbl_course: "مادة التكوين المعتمدة:",
        lbl_course_date: "تاريخ الدورة والتكوين:",
        lbl_course_place: "مقر ومكان التكوين:"
    },
    fr: {
        workers_page_title: "Base de Données du Personnel & Équipe",
        select_worker_hint: "Sélectionnez un membre de l'équipe:",
        empty_worker_view: "Veuillez sélectionner un employé pour afficher son profil technique et ses qualifications.",
        back_btn: "Retour au Tableau de Bord",
        active_status: "Actif sur le terrain",
        lbl_name: "Prénom:",
        lbl_lastname: "Nom:",
        lbl_age: "Âge:",
        lbl_phone: "N° de Téléphone:",
        lbl_status: "Statut Familial:",
        years_unit: "ans",
        training_title: "Dossier de Formation Professionnelle Industrielle",
        lbl_course: "Module de Formation Certifié:",
        lbl_course_date: "Date de la Session:",
        lbl_course_place: "Lieu de Formation:"
    }
};

let pageLang = 'ar';

function switchLanguage(lang) {
    pageLang = lang;
    const htmlTag = document.documentElement;
    
    if (lang === 'ar') {
        htmlTag.setAttribute('dir', 'rtl');
        htmlTag.setAttribute('lang', 'ar');
        document.getElementById('lang-ar')?.classList.add('active');
        document.getElementById('lang-fr')?.classList.remove('active');
        document.getElementById('user-display-name').innerText = "عبد القادر حفراد";
    } else {
        htmlTag.setAttribute('dir', 'ltr');
        htmlTag.setAttribute('lang', 'fr');
        document.getElementById('lang-fr')?.classList.add('active');
        document.getElementById('lang-ar')?.classList.remove('active');
        document.getElementById('user-display-name').innerText = "Abdelkader Hafrad";
    }

    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (pageLanguages[lang][key]) {
            element.innerText = pageLanguages[lang][key];
        }
    });

    renderStandaloneList();
    
    const activeItem = document.querySelector('.page-worker-item.selected-active');
    if (activeItem) {
        const currentActiveId = activeItem.getAttribute('data-id');
        loadWorkerData(currentActiveId, activeItem);
    }
}

function renderStandaloneList() {
    const container = document.getElementById('workers-standalone-list');
    if (!container) return;
    
    const activeItem = document.querySelector('.page-worker-item.selected-active');
    const currentActiveId = activeItem ? activeItem.getAttribute('data-id') : null;
    
    container.innerHTML = "";

    workersDatabase.forEach(worker => {
        const item = document.createElement('div');
        item.className = "page-worker-item";
        item.setAttribute('data-id', worker.id);
        
        const firstName = pageLang === 'ar' ? worker.firstname_ar : worker.firstname_fr;
        const lastName = pageLang === 'ar' ? worker.lastname_ar : worker.lastname_fr;
        
        item.innerHTML = `<i class="fa-solid fa-user-gear"></i> ${firstName} ${lastName}`;
        item.onclick = () => loadWorkerData(worker.id, item);
        
        if (worker.id === currentActiveId) {
            item.classList.add('selected-active');
        }
        
        container.appendChild(item);
    });
}

function loadWorkerData(workerId, element) {
    document.querySelectorAll('.page-worker-item').forEach(el => el.classList.remove('selected-active'));
    element.classList.add('selected-active');

    const worker = workersDatabase.find(w => w.id === workerId);
    if (!worker) return;

    document.getElementById('page-empty-state').classList.add('hidden');
    document.getElementById('full-profile-view').classList.remove('hidden');

    const firstName = pageLang === 'ar' ? worker.firstname_ar : worker.firstname_fr;
    const lastName = pageLang === 'ar' ? worker.lastname_ar : worker.lastname_fr;

    document.getElementById('wp-fullname').innerText = `${firstName} ${lastName}`;
    document.getElementById('wp-firstname').innerText = firstName;
    document.getElementById('wp-lastname').innerText = lastName;
    document.getElementById('wp-age').innerText = worker.age;
    document.getElementById('wp-phone').innerText = worker.phone;
    document.getElementById('wp-married').innerText = pageLang === 'ar' ? worker.married_ar : worker.married_fr;
    
    document.getElementById('wp-course').innerText = pageLang === 'ar' ? worker.course_ar : worker.course_fr;
    document.getElementById('wp-course-date').innerText = worker.course_date;
    document.getElementById('wp-course-place').innerText = pageLang === 'ar' ? worker.course_place_ar : worker.course_place_fr;
    
    document.getElementById('wp-photo').src = "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150";
}

document.addEventListener("DOMContentLoaded", () => {
    
    // 🔒 فحص الأمان ومنع العودة الاستفزازية لشاشة التسجيل
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');
    if (isLoggedIn !== 'true') {
        window.location.href = "index.html";
        return; 
    }

    switchLanguage('ar');

    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            if (currentTheme === 'dark') {
                document.documentElement.removeAttribute('data-theme');
                themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
            } else {
                document.documentElement.setAttribute('data-theme', 'dark');
                themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
            }
        });
    }
});