// قاعدة بيانات العمال المحدثة والمصححة بالكامل باللغتين العربية والفرنسية
const workersDatabase = [
    {
        id: "emp01",
        firstname_ar: "عبد القادر", lastname_ar: "حفراد",
        firstname_fr: "Abdelkader", lastname_fr: "Hafrad",
        role_ar: "رئيس ورشة / منسق", role_fr: "Chef d'atelier / Coordinateur",
        team_ar: "الفرقة الشمالية الأولى", team_fr: "Équipe Nord 1",
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
        role_ar: "ميكانيكي ديزل حقول", role_fr: "Mécanicien Diesel Site",
        team_ar: "الفرقة الشمالية الأولى", team_fr: "Équipe Nord 1",
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
        role_ar: "مشغل تفريغ وعزل ميكانيكي", role_fr: "Opérateur Dégazage & Isolation",
        team_ar: "فرقة الدعم اللوجستي", team_fr: "Équipe Logistique",
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
        role_ar: "مفتش سلامة مهنية HSEQ", role_fr: "Inspecteur Sécurité HSEQ",
        team_ar: "فرقة التدخل السريع", team_fr: "Équipe d'Intervention",
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
        role_ar: "سائق مركبة ثقيلة وحقول", role_fr: "Chauffeur Poids Lourd Site",
        team_ar: "الفرقة الثانية المتنقلة", team_fr: "Équipe 2 Mobile",
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
        role_ar: "مفتش حماية بيئية HSEQ", role_fr: "Inspecteur Environnement HSEQ",
        team_ar: "الفرقة الشمالية الأولى", team_fr: "Équipe Nord 1",
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
        role_ar: "أمين مخزن قطع الغيار", role_fr: "Magasinier Pièces de Rechange",
        team_ar: "فرقة الدعم اللوجستي", team_fr: "Équipe Logistique",
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
        role_ar: "مشرف ورشات صيانة ميكانيكية", role_fr: "Superviseur Atelier Mécanique",
        team_ar: "الفرقة الثانية المتنقلة", team_fr: "Équipe 2 Mobile",
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
        role_ar: "تقني كهربائي مولدات حقل", role_fr: "Électricien Groupes Électrogènes",
        team_ar: "فرقة الدعم اللوجستي", team_fr: "Équipe Logistique",
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
        role_ar: "مراقب جودة الأنابيب والضغط", role_fr: "Contrôleur Qualité Pipelines",
        team_ar: "الفرقة الشمالية الأولى", team_fr: "Équipe Nord 1",
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
        role_ar: "مفتش سلامة مهنية HSEQ", role_fr: "Inspecteur Sécurité HSEQ",
        team_ar: "الفرقة الثانية المتنقلة", team_fr: "Équipe 2 Mobile",
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
        role_ar: "صيانة ميكانيكية حقول وآلات", role_fr: "Maintenance Machines Lourdes",
        team_ar: "فرقة الدعم اللوجستي", team_fr: "Équipe Logistique",
        age: 38, phone: "+213 669 85 74 12", married_ar: "متزوج", married_fr: "Marié",
        course_ar: "صيانة أنظمة الهيدروليك والآلات الميكانيكية الثقيلة",
        course_fr: "Maintenance des systèmes hydrauliques et machines lourdes",
        course_date: "08-04-2024",
        course_place_ar: "مجمع التكوين الميكانيكي المتقدم (قسنطينة)", course_place_fr: "Complexe de Formation Technique de RA1Z (Constantine)"
    },
    {
        id: "emp13",
        firstname_ar: "جلالي", lastname_ar: "نمر",
        firstname_fr: "Djellouli", lastname_fr: "Nemer",
        role_ar: "مسعف طبي ميداني", role_fr: "Secouriste Médical Site",
        team_ar: "فرقة التدخل السريع", team_fr: "Équipe d'Intervention",
        age: 40, phone: "+213 552 96 32 14", married_ar: "متزوج", married_fr: "Marié",
        course_ar: "الإسفاحات الأولية المتقدمة والاستجابة الطبية للطوارئ",
        course_fr: "Secourisme avancé et réponse médicale d'urgence sur site",
        course_date: "25-05-2024",
        course_place_ar: "الهلال الأحمر للتكوين الطبي (وهران)", course_place_fr: "Croissant Rouge - Formation Médicale (Oran)"
    },
    {
        id: "emp14",
        firstname_ar: "أحمد", lastname_ar: "بن مريم",
        firstname_fr: "Ahmed", lastname_fr: "Ben Meryem",
        role_ar: "مشغل عزل هيدروليكي وميكانيكي", role_fr: "Opérateur Isolation Mécanique",
        team_ar: "الفرقة الشمالية الأولى", team_fr: "Équipe Nord 1",
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
        role_ar: "مسؤول معالجة النفايات الكيميائية", role_fr: "Gestionnaire Déchets Chimiques",
        team_ar: "الفرقة الثانية المتنقلة", team_fr: "Équipe 2 Mobile",
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
        role_ar: "تقني لوحات تحكم SCADA", role_fr: "Technicien Panneaux SCADA",
        team_ar: "الفرقة الشمالية الأولى", team_fr: "Équipe Nord 1",
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
        role_ar: "مفتش تقني شاحنات وآليات", role_fr: "Contrôleur Camions & Engins",
        team_ar: "فرقة الدعم اللوجستي", team_fr: "Équipe Logistique",
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
        role_ar: "مشرف ورشات صيانة وتخطيط", role_fr: "Superviseur Planification Ateliers",
        team_ar: "الفرقة الثانية المتنقلة", team_fr: "Équipe 2 Mobile",
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
        role_ar: "مدقق أمن منشآت الوقود", role_fr: "Auditeur Sécurité Dépôts",
        team_ar: "فرقة التدخل السريع", team_fr: "Équipe d'Intervention",
        age: 39, phone: "+213 665 32 14 78", married_ar: "متزوج", married_fr: "Marié",
        course_ar: "إجراءات التدقيق والسلامة الداخلية لمنشآت تخزين الوقود NAFTAL",
        course_fr: "Procédures d'audit de sécurité des dépôt de carburant NAFTAL",
        course_date: "07-05-2025",
        course_place_ar: "المركز التقني للأمن الصناعي (وهران)", course_place_fr: "Centre Technique de Sécurité Industrielle (Oran)"
    },
    {
        id: "emp20",
        firstname_ar: "نصر الدين", lastname_ar: "بوزيد",
        firstname_fr: "Nasreddine", lastname_fr: "Bouzid",
        role_ar: "تقني مضخات هيدروليكية عملاقة", role_fr: "Technicien Pompes Raffinerie",
        team_ar: "الفرقة الشمالية الأولى", team_fr: "Équipe Nord 1",
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
        role_ar: "مسؤول تتبع لوجستي رقمي GPS", role_fr: "Opérateur Suivi Logistique GPS",
        team_ar: "فرقة الدعم اللوجستي", team_fr: "Équipe Logistique",
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
        role_ar: "تقني تأمين آلات الغاز الطبيعي", role_fr: "Sécurité Équipements GNC",
        team_ar: "الفرقة الشمالية الأولى", team_fr: "Équipe Nord 1",
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
        role_ar: "فاحص هيكلي بالأشعة للأنابيب", role_fr: "Contrôleur Radiographie Pipelines",
        team_ar: "الفرقة الشمالية الأولى", team_fr: "Équipe Nord 1",
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
        role_ar: "إداري ومتابع أنظمة HSEQ", role_fr: "Gestionnaire Intégré HSEQ Site",
        team_ar: "الفرقة الثانية المتنقلة", team_fr: "Équipe 2 Mobile",
        age: 34, phone: "+213 776 22 33 44", married_ar: "أعزب", married_fr: "Célibataire",
        course_ar: "تطبيقات الصحة المهنية والبيئية والإدارة الشاملة لنظام HSEQ في الحقول",
        course_fr: "Applications HSE et gestion intégrée du système HSEQ sur site",
        course_date: "15-11-2025",
        course_place_ar: "مركز التدريب والمتابعة التقنية ENSP (وهران)", course_place_fr: "Centre de Formation Technique ENSP (Oran)"
    }
];

let currentLang = 'ar';

const dict = {
    ar: {
        title: "منظومة إدارة عمال وموظفي ورشات ENSP",
        pdf_title: "القائمة الاسمية الرسمية لعمال الورشة",
        total: "إجمالي العمال المقيدين بالورشة: 24 عامل",
        th_img: "صورة العامل", th_name: "اسم ولقب الموظف (الرقم الوظيفي)", th_team: "الفرقة الميدانية",
        add: "إضافة عامل جديد", pdf: "تحميل وطباعة القائمة PDF",
        role_label: "منسق",
        lbl_id: "المعرف الرقمي:", lbl_age: "العمر الحالي:", lbl_phone: "رقم الهاتف:", lbl_status: "الحالة الاجتماعية:",
        training_title: "بيانات وحقيبة التكوين المهني الصناعي", lbl_course: "مادة التكوين المعتمدة:",
        lbl_date: "تاريخ الدورة والتكوين:", lbl_place: "مقر ومكان التكوين:", years: "سنة"
    },
    fr: {
        title: "Gestion du Personnel des Chantiers - ENSP",
        pdf_title: "Liste Nominale Officielle du Personnel",
        total: "Total des employés inscrits: 24",
        th_img: "Photo", th_name: "Nom & Prénom (ID)", th_team: "Équipe Terrain",
        add: "Ajouter un Employé", pdf: "Télécharger la Liste PDF",
        role_label: "Le Coordinateur",
        lbl_id: "ID Numérique:", lbl_age: "Âge Actuel:", lbl_phone: "N° de Téléphone:", lbl_status: "Statut Familial:",
        training_title: "Dossier de Formation Professionnelle Industrielle", lbl_course: "Module de Formation Certifié:",
        lbl_date: "Date de la Session:", lbl_place: "Lieu de Formation:", years: "ans"
    }
};

function getRoleTagClass(role) {
    if (!role) return 'tag-helper';
    const r = role.toLowerCase();
    if (r.includes('chef') || r.includes('opérateur') || r.includes('رئيس')) return 'tag-operator';
    if (r.includes('mécanicien') || r.includes('ميكانيك')) return 'tag-mechanic';
    if (r.includes('chauffeur') || r.includes('سائق')) return 'tag-driver';
    return 'tag-helper';
}

function toggleLanguage(lang) {
    currentLang = lang;
    const htmlTag = document.documentElement;
    if(lang === 'ar') {
        htmlTag.setAttribute('dir', 'rtl');
        htmlTag.setAttribute('lang', 'ar');
        document.getElementById('lang-ar').classList.add('active');
        document.getElementById('lang-fr').classList.remove('active');
        document.getElementById('user-display').innerText = "عبد القادر حفراد";
        document.getElementById('user-role').innerHTML = `<i class="fa-solid fa-user-shield"></i> ${dict[lang].role_label}`;
    } else {
        htmlTag.setAttribute('dir', 'ltr');
        htmlTag.setAttribute('lang', 'fr');
        document.getElementById('lang-fr').classList.add('active');
        document.getElementById('lang-ar').classList.remove('active');
        document.getElementById('user-display').innerText = "Abdelkader Hafrad";
        document.getElementById('user-role').innerHTML = `<i class="fa-solid fa-user-shield"></i> ${dict[lang].role_label}`;
    }

    document.getElementById('page-title').innerHTML = `<i class="fa-solid fa-compass-drafting"></i> ${dict[lang].title}`;
    document.getElementById('pdf-title').innerText = dict[lang].pdf_title;
    document.getElementById('txt-total').innerText = dict[lang].total;
    
    document.getElementById('th-img').innerText = dict[lang].th_img;
    document.getElementById('th-name').innerText = dict[lang].th_name;
    document.getElementById('th-team').innerText = dict[lang].th_team;
    
    document.getElementById('btn-text-add').innerText = dict[lang].add;
    document.getElementById('btn-text-pdf').innerText = dict[lang].pdf;

    document.getElementById('lbl-modal-id').innerText = dict[lang].lbl_id;
    document.getElementById('lbl-modal-age').innerText = dict[lang].lbl_age;
    document.getElementById('lbl-modal-phone').innerText = dict[lang].lbl_phone;
    document.getElementById('lbl-modal-status').innerText = dict[lang].lbl_status;
    document.getElementById('modal-training-title').innerText = dict[lang].training_title;
    document.getElementById('lbl-modal-course').innerText = dict[lang].lbl_course;
    document.getElementById('lbl-modal-date').innerText = dict[lang].lbl_date;
    document.getElementById('lbl-modal-place').innerText = dict[lang].lbl_place;

    renderWorkersTable(workersDatabase);
    updatePdfDate();
}

function switchLanguageFR() { toggleLanguage('fr'); }

function renderWorkersTable(data) {
    const tbody = document.getElementById('workers-table-body');
    if(!tbody) return;
    tbody.innerHTML = "";

    data.forEach(worker => {
        const tr = document.createElement('tr');
        const firstName = currentLang === 'ar' ? worker.firstname_ar : worker.firstname_fr;
        const lastName = currentLang === 'ar' ? worker.lastname_ar : worker.lastname_fr;
        const team = currentLang === 'ar' ? (worker.team_ar || "الفرقة الرئيسية") : (worker.team_fr || "Équipe Principale");
        
        // تحديد رابط الصورة (صورة مخصصة لعبد القادر وصور افتراضية للبقية)
        const imgSrc = worker.id === "emp01" ? "abd.icon.png" : `https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100`;

        tr.innerHTML = `
            <td style="text-align: center;"><img src="${imgSrc}" alt="${firstName}" class="table-avatar"></td>
            <td>
                <strong>${firstName} ${lastName}</strong>
                <span class="emp-badge-id">${worker.id.toUpperCase()}</span>
            </td>
            <td><i class="fa-solid fa-users" style="color:#ff7300; margin-left:6px; margin-right:6px;"></i>${team}</td>
        `;
        
        tr.onclick = () => showWorkerDetails(worker);
        tbody.appendChild(tr);
    });
}

function showWorkerDetails(worker) {
    const firstName = currentLang === 'ar' ? worker.firstname_ar : worker.firstname_fr;
    const lastName = currentLang === 'ar' ? worker.lastname_ar : worker.lastname_fr;
    const role = currentLang === 'ar' ? (worker.role_ar || "موظف حقل") : (worker.role_fr || "Agent de site");
    
    document.getElementById('modal-worker-fullname').innerText = `${firstName} ${lastName}`;
    document.getElementById('modal-worker-badge').innerText = role;
    document.getElementById('modal-worker-badge').className = `role-tag ${getRoleTagClass(worker.role_fr || worker.role_ar)}`;
    document.getElementById('modal-worker-id').innerText = worker.id.toUpperCase();
    document.getElementById('modal-worker-age').innerText = `${worker.age} ${dict[currentLang].years}`;
    document.getElementById('modal-worker-phone').innerText = worker.phone;
    document.getElementById('modal-worker-status').innerText = currentLang === 'ar' ? worker.married_ar : worker.married_fr;
    
    document.getElementById('modal-worker-course').innerText = currentLang === 'ar' ? worker.course_ar : worker.course_fr;
    document.getElementById('modal-worker-course-date').innerText = worker.course_date;
    document.getElementById('modal-worker-course-place').innerText = currentLang === 'ar' ? worker.course_place_ar : worker.course_place_fr;
    
    if(worker.id === "emp01") {
        document.getElementById('modal-worker-img').src = "abd.icon.png";
    } else {
        document.getElementById('modal-worker-img').src = "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150";
    }
    
    document.getElementById('workerProfileModal').style.display = 'block';
}

function closeWorkerModal() {
    document.getElementById('workerProfileModal').style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('workerProfileModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function filterWorkers() {
    const query = document.getElementById('search-box').value.toLowerCase();
    const filtered = workersDatabase.filter(worker => {
        const fNameAr = worker.firstname_ar.toLowerCase();
        const lNameAr = worker.lastname_ar.toLowerCase();
        const fNameFr = worker.firstname_fr.toLowerCase();
        const lNameFr = worker.lastname_fr.toLowerCase();
        const id = worker.id.toLowerCase();
        return fNameAr.includes(query) || lNameAr.includes(query) || fNameFr.includes(query) || lNameFr.includes(query) || id.includes(query);
    });
    renderWorkersTable(filtered);
}

function updatePdfDate() {
    const now = new Date();
    const dateStr = now.toLocaleDateString(currentLang === 'ar' ? 'ar-DZ' : 'fr-FR');
    document.getElementById('pdf-date-text').innerText = `تاريخ استخراج المستند: ${dateStr}`;
}

function addNewWorker() {
    alert(currentLang === 'ar' ? "سيتم فتح نافذة إضافة عامل جديد قريباً!" : "Fonction d'ajout bientôt disponible !");
}

function exportWorkersPDF() {
    const container = document.getElementById('printable-area');
    const pdfHeader = document.getElementById('pdf-only-header');
    
    container.classList.add('pdf-mode');
    pdfHeader.style.display = 'block';
    
    const opt = {
        margin:       [12, 12, 12, 12], 
        filename:     `Liste_Personnel_ENSP.pdf`,
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2, useCORS: true, scrollY: 0, logging: false },
        jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(container).save().then(() => {
        container.classList.remove('pdf-mode');
        pdfHeader.style.display = 'none';
    });
}

document.addEventListener("DOMContentLoaded", () => {
    toggleLanguage('ar');
});