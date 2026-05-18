const languages = {
    ar: {
        nav_title: "Project Nord Oran - E.N.S.P",
        login_title: "Project Nord Oran",
        login_subtitle: "بوابة تسجيل الدخول الموحدة للموظفين والإطارات",
        email_label: "البريد الإلكتروني",
        password_label: "كلمة المرور",
        login_btn: "دخول آمن",
        user_role: "منسق",
        thursday: "الخميس",
        quick_stats: "إحصائيات سريعة",
        stat_workers: "عدد العمال",
        stat_vehicles: "المركبات والآليات",
        stat_faults: "الأعطال النشطة",
        stat_reports: "التقارير المرفوعة",
        mod_workers: "العمال",
        mod_absences: "إدارة الغيابات",
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
        theme_label: "الوضع / المظهر:",
        lang_label: "لغة النظام:",
        footer_text: "© 2026 Project Nord Oran - المؤسسة الوطنية لخدمات الآبار E.N.S.P - جميع الحقوق محفوظة",
        alert_msg: "جاري فتح وحدة المتابعة الخاصة بـ: ",
        error_auth: "البريد الإلكتروني أو كلمة المرور غير صحيحة!",
        other_means: "وسائل أخرى",
        settings_title: "الاعـدادات"
    },
    en: {
        nav_title: "Project Nord Oran - E.N.S.P",
        login_title: "Project Nord Oran",
        login_subtitle: "Unified Login Portal for Staff & Managers",
        email_label: "Email Address",
        password_label: "Password",
        login_btn: "Secure Login",
        user_role: "Coordinator",
        thursday: "Thursday",
        quick_stats: "Quick Stats",
        stat_workers: "Total Workers",
        stat_vehicles: "Vehicles & Machinery",
        stat_faults: "Active Faults",
        stat_reports: "Submitted Reports",
        mod_workers: "Workers",
        mod_absences: "Absence Management",
        mod_attendance: "Attendance & Shifts",
        mod_vehicles: "Vehicles",
        mod_fuel: "Fuel & Supply",
        mod_maintenance: "Periodic Maintenance",
        mod_reports: "Reports & PDF",
        mod_accidents: "Faults & Accidents",
        mod_weather: "Weather Status HSEQ",
        mod_gps: "Location / GPS",
        mod_qr: "Workers QR Code",
        mod_signature: "E-Signature",
        mod_archive: "Digital Archiving",
        mod_charts: "Performance Charts",
        mod_settings: "Settings & Permissions",
        theme_label: "Theme / Mode:",
        lang_label: "System Language:",
        footer_text: "© 2026 Project Nord Oran - National Well Services Company E.N.S.P - All Rights Reserved",
        alert_msg: "Opening module: ",
        error_auth: "Incorrect email or password!",
        other_means: "Other Options",
        settings_title: "Settings"
    },
    fr: {
        nav_title: "Project Nord Oran - E.N.S.P",
        login_title: "Project Nord Oran",
        login_subtitle: "Portail de Connexion Unique du Personnel",
        email_label: "Adresse Email",
        password_label: "Mot de Passe",
        login_btn: "Connexion Sécurisée",
        user_role: "Coordinateur",
        thursday: "Jeudi",
        quick_stats: "Statistiques Rapides",
        stat_workers: "Total Employés",
        stat_vehicles: "Véhicules Actifs",
        stat_faults: "Anomalies Actives",
        stat_reports: "Rapports Soumis",
        mod_workers: "Personnel",
        mod_absences: "Absences",
        mod_attendance: "Présence & Shifts",
        mod_vehicles: "Véhicules",
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
        theme_label: "Mode / Thème:",
        lang_label: "Langue du Système:",
        footer_text: "© 2026 Project Nord Oran - Entreprise Nationale des Services aux Puits E.N.S.P - Tous droits réservés",
        alert_msg: "Ouverture du module de: ",
        error_auth: "Email ou mot de passe incorrect!",
        other_means: "Autres Moyens",
        settings_title: "Paramètres"
    }
};

let currentLang = 'ar';

function switchLanguage(lang) {
    currentLang = lang;
    const htmlTag = document.documentElement;
    
    if (lang === 'ar') {
        htmlTag.setAttribute('dir', 'rtl');
        htmlTag.setAttribute('lang', 'ar');
        if(!document.getElementById('main-dashboard').classList.contains('hidden')) {
            document.getElementById('user-display-name').innerText = "عبد القادر حفراد";
        }
    } else {
        htmlTag.setAttribute('dir', 'ltr');
        htmlTag.setAttribute('lang', lang);
        if(!document.getElementById('main-dashboard').classList.contains('hidden')) {
            document.getElementById('user-display-name').innerText = "Abdelkader Hafrad";
        }
    }

    const langSelect = document.getElementById('sidebar-lang-select');
    if(langSelect) langSelect.value = lang;

    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (languages[lang][key]) {
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
    let locale = 'ar-DZ';
    if(currentLang === 'fr') locale = 'fr-FR';
    if(currentLang === 'en') locale = 'en-US';

    const dayElem = document.getElementById('live-day');
    const dateElem = document.getElementById('live-date');
    if (dayElem && dateElem) {
        dayElem.innerText = now.toLocaleDateString(locale, { weekday: 'long' });
        dateElem.innerHTML = `<i class="fa-regular fa-calendar-days"></i> ${now.toLocaleDateString(locale, { year: 'numeric', month: 'long', day: 'numeric' })}`;
    }
}

function toggleSettingsSidebar(show) {
    const sidebar = document.getElementById('settings-sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    if (sidebar && overlay) {
        if (show) {
            sidebar.classList.add('open');
            overlay.classList.add('show');
        } else {
            sidebar.classList.remove('open');
            overlay.classList.remove('show');
        }
    }
}

function triggerModule(moduleKey) {
    const moduleName = languages[currentLang]['mod_' + moduleKey] || moduleKey;
    alert(`${languages[currentLang].alert_msg} [ ${moduleName} ]`);
}

function startLiveSystem() {
    setInterval(() => {
        const now = new Date();
        let hours = String(now.getHours()).padStart(2, '0');
        let minutes = String(now.getMinutes()).padStart(2, '0');
        let seconds = String(now.getSeconds()).padStart(2, '0');
        
        const liveTimeElem = document.getElementById('live-time');
        if(liveTimeElem) {
            liveTimeElem.innerText = `${hours}:${minutes}:${seconds}`;
        }
    }, 1000);
}

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById('login-form');
    const loginScreen = document.getElementById('login-screen');
    const mainDashboard = document.getElementById('main-dashboard');
    const loginError = document.getElementById('login-error');
    const btnLogout = document.getElementById('btn-logout');
    
    const menuToggleBtn = document.getElementById('menu-toggle-btn');
    const sidebarThemeToggle = document.getElementById('sidebar-theme-toggle');

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
                switchLanguage(currentLang);
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

    // ✅ التعديل الوحيد: زر الثلاثة أعمدة يفتح الإعدادات
    if (menuToggleBtn) {
        menuToggleBtn.addEventListener('click', () => toggleSettingsSidebar(true));
    }

    if (sidebarThemeToggle) {
        sidebarThemeToggle.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            if (currentTheme === 'dark') {
                document.documentElement.removeAttribute('data-theme');
                sidebarThemeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
            } else {
                document.documentElement.setAttribute('data-theme', 'dark');
                sidebarThemeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
            }
        });
    }
});