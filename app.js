const languages = {
    ar: {
        nav_title: "Project Nord Oran - E.N.S.P",
        login_title: "Project Nord Oran",
        login_subtitle: "بوابة تسجيل الدخول الموحدة للموظفين والإطارات",
        email_label: "البريد الإلكتروني",
        password_label: "كلمة المرور",
        login_btn: "دخول آمن",
        user_role: "منسق", /* تعديل المسمى الوظيفي هنا */
        thursday: "الخميس",
        quick_stats: "إحصائيات سريعة",
        stat_workers: "عدد العمال",
        stat_vehicles: "المركبات",
        stat_faults: "الأعطال النشطة",
        stat_reports: "التقارير المرفوعة",
        mod_workers: "العمال",
        mod_absences: "الغيابات",
        mod_attendance: "الحضور والانصراف",
        mod_vehicles: "المركبات",
        mod_fuel: "الوقود والتموين",
        mod_maintenance: "الصيانة الدورية",
        mod_reports: "التقارير و PDF",
        mod_accidents: "الأعطال والحوادث",
        mod_weather: "حالة الطقس HSEQ",
        mod_gps: "الموقع / GPS",
        mod_qr: "رمز QR للعمال",
        mod_signature: "التوقيع الإلكتروني",
        mod_archive: "الأرشفة الرقمية",
        mod_charts: "منحنيات الأداء",
        mod_settings: "الإعدادات والصلاحيات",
        footer_text: "© 2026 Project Nord Oran - المؤسسة الوطنية لخدمات الآبار E.N.S.P - جميع الحقوق محفوظة",
        alert_msg: "جاري فتح وحدة المتابعة الخاصة بـ: ",
        error_auth: "البريد الإلكتروني أو كلمة المرور غير صحيحة!"
    },
    fr: {
        nav_title: "Project Nord Oran - E.N.S.P",
        login_title: "Project Nord Oran",
        login_subtitle: "Portail de Connexion Unique du Personnel",
        email_label: "Adresse Email",
        password_label: "Mot de Passe",
        login_btn: "Connexion Sécurisée",
        user_role: "Le Coordinateur", /* تصحيح الكلمة بالفرنسية */
        thursday: "Jeudi",
        quick_stats: "Statistiques Rapides",
        stat_workers: "Total Employés",
        stat_vehicles: "Véhicules Actifs",
        stat_faults: "Anomalies Actives",
        stat_reports: "Rapports Soumis",
        mod_workers: "Personnel",
        mod_absences: "Absences",
        mod_attendance: "Présence & Shifts",
        mod_vehicles: "Gestion Flotte",
        mod_fuel: "Carburant & Suivi",
        mod_maintenance: "Maintenance Périodique",
        mod_reports: "Rapports & PDF",
        mod_accidents: "Pannes & Accidents",
        mod_weather: "Météo & HSEQ",
        mod_gps: "Localisation / GPS",
        mod_qr: "Code QR Personnel",
        mod_signature: "Signature Électronique",
        mod_archive: "Archivage Numérique",
        mod_charts: "Courbes de Performance",
        mod_settings: "Paramètres & Droits",
        footer_text: "© 2026 Project Nord Oran - Entreprise Nationale des Services aux Puits E.N.S.P - Tous droits réservés",
        alert_msg: "Ouverture du module de: ",
        error_auth: "Email ou mot de passe incorrect!"
    }
};

let currentLang = 'ar';

function switchLanguage(lang) {
    currentLang = lang;
    const htmlTag = document.documentElement;
    
    if (lang === 'ar') {
        htmlTag.setAttribute('dir', 'rtl');
        htmlTag.setAttribute('lang', 'ar');
        document.getElementById('lang-ar')?.classList.add('active');
        document.getElementById('lang-fr')?.classList.remove('active');
        if(!document.getElementById('main-dashboard').classList.contains('hidden')) {
            document.getElementById('user-display-name').innerText = "عبد القادر حفراد";
        }
    } else {
        htmlTag.setAttribute('dir', 'ltr');
        htmlTag.setAttribute('lang', 'fr');
        document.getElementById('lang-fr')?.classList.add('active');
        document.getElementById('lang-ar')?.classList.remove('active');
        if(!document.getElementById('main-dashboard').classList.contains('hidden')) {
            document.getElementById('user-display-name').innerText = "Abdelkader Hafrad";
        }
    }

    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (languages[lang][key]) {
            // التحقق لمنع مسح الأيقونات الداخلية أثناء تحديث النصوص
            const icon = element.querySelector('i');
            if (icon) {
                element.innerHTML = '';
                element.appendChild(icon);
                element.appendChild(document.createTextNode(' ' + languages[lang][key]));
            } else {
                element.innerText = languages[lang][key];
            }
        }
    });

    updateLiveDateAndDay();
}

function updateLiveDateAndDay() {
    const now = new Date();
    const locale = currentLang === 'ar' ? 'ar-DZ' : 'fr-FR';
    const dayElem = document.getElementById('live-day');
    const dateElem = document.getElementById('live-date');
    if (dayElem && dateElem) {
        dayElem.innerText = now.toLocaleDateString(locale, { weekday: 'long' });
        
        // الحفاظ على الأيقونة داخل حقل التاريخ عند تحديث اللغة
        dateElem.innerHTML = `<i class="fa-regular fa-calendar-days"></i> ${now.toLocaleDateString(locale, { year: 'numeric', month: 'long', day: 'numeric' })}`;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById('login-form');
    const loginScreen = document.getElementById('login-screen');
    const mainDashboard = document.getElementById('main-dashboard');
    const loginError = document.getElementById('login-error');
    const btnLogout = document.getElementById('btn-logout');
    const themeToggle = document.getElementById('theme-toggle');

    const isLoggedIn = sessionStorage.getItem('isLoggedIn');
    
    if (isLoggedIn === 'true') {
        loginScreen.classList.add('hidden');
        mainDashboard.classList.remove('hidden');
        switchLanguage('ar');
        startLiveSystem();
    } else {
        switchLanguage('ar');
    }

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('login-email').value.trim();
            const password = document.getElementById('login-password').value.trim();

            if (email === "admin@company.com" && password === "123456") {
                loginError.innerText = "";
                sessionStorage.setItem('isLoggedIn', 'true');
                loginScreen.classList.add('hidden');
                mainDashboard.classList.remove('hidden');
                startLiveSystem();
            } else {
                loginError.innerText = languages[currentLang].error_auth;
            }
        });
    }

    if (btnLogout) {
        btnLogout.addEventListener('click', () => {
            sessionStorage.removeItem('isLoggedIn');
            mainDashboard.classList.add('hidden');
            loginScreen.classList.remove('hidden');
        });
    }

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

function startLiveSystem() {
    setInterval(() => {
        const now = new Date();
        
        // جلب أرقام الوقت فقط بدون توليد أيقونات إضافية لتفادي تكرار شكل الساعة
        let hours = String(now.getHours()).padStart(2, '0');
        let minutes = String(now.getMinutes()).padStart(2, '0');
        let seconds = String(now.getSeconds()).padStart(2, '0');
        
        const liveTimeElem = document.getElementById('live-time');
        if(liveTimeElem) {
            // تحديث الأرقام النصية فقط داخل حاوية الـ span المحمية
            liveTimeElem.innerText = `${hours}:${minutes}:${seconds}`;
        }
    }, 1000);
}

function triggerModule(moduleKey) {
    const moduleName = languages[currentLang]['mod_' + moduleKey] || moduleKey;
    alert(`${languages[currentLang].alert_msg} [ ${moduleName} ]`);
}