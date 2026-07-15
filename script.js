(function() {
    'use strict';

    // ---------- دیکشنری دو زبانه ----------
    const translations = {
        fa: {
            nav_home: 'خانه',
            nav_about: 'درباره ما',
            nav_services: 'خدمات',
            nav_brands: 'برندها',
            nav_clients: 'مشتریان',
            nav_careers: 'همکاری',
            nav_contact: 'تماس',
            hero_title: 'پل ارتباطی بازارهای جهانی',
            hero_desc: 'ما با رویکردی نوین، زنجیره تأمین را از منابع بین‌المللی تا بازارهای داخلی و منطقه‌ای هدایت می‌کنیم.',
            hero_cta: 'ارتباط با ما',
            about_title: 'درباره SAMMER',
            about_subtitle: 'تجربه‌ای پویا در عرصه تجارت و تأمین کالا',
            about_sammer_meaning: '<strong>SAM</strong> نام هلدینگ ما و <strong>MER</strong> مخفف سه ارزش کلیدی <strong>Market • Exchange • Reach</strong> است.',
            about_p1: 'شرکت SAMMER با بهره‌گیری از شبکه‌ای گسترده از تأمین‌کنندگان معتبر در سطح جهانی، توانسته است نقشی کلیدی در تأمین مواد اولیه و محصولات راهبردی برای صنایع مختلف ایفا کند.',
            about_p2: 'ما با درک عمیق از نیازهای بازار، علاوه بر تأمین کالا، خدمات جانبی نظیر بسته‌بندی، برندینگ و توزیع هوشمند را نیز ارائه می‌دهیم تا ارزش افزوده‌ای متمایز برای شرکای خود خلق کنیم.',
            stat_years: 'سال تجربه',
            stat_partners: 'شریک تجاری',
            stat_countries: 'کشور فعال',
            services_title: 'خدمات ما',
            services_subtitle: 'راهکارهای جامع برای زنجیره تأمین و توسعه برند',
            service_1_title: 'تأمین بین‌المللی',
            service_1_desc: 'دسترسی به منابع معتبر جهانی و عقد قراردادهای تأمین با بهترین شرایط.',
            service_2_title: 'بسته‌بندی و برندینگ',
            service_2_desc: 'طراحی بسته‌بندی و هویت برند متناسب با بازار هدف و استانداردهای روز.',
            service_3_title: 'توزیع و لجستیک',
            service_3_desc: 'مدیریت زنجیره تأمین از مبادی ورودی تا تحویل به مشتریان نهایی.',
            service_4_title: 'مشاوره بازار',
            service_4_desc: 'تحلیل بازار و ارائه راهکارهای استراتژیک برای ورود یا گسترش فعالیت.',
            brands_title: 'برندهای SAMMER',
            brands_subtitle: 'زیرمجموعه‌های ما در صنایع مختلف',
            clients_title: 'مشتریان و همکاران',
            clients_subtitle: 'مجموعه‌هایی که به ما اعتماد کرده‌اند',
            clients_count_label: 'مشتری فعال',
            clients_count_desc: 'شمار مشتریان ما همواره در حال افزایش است و ما به ارائه خدمات با کیفیت به آن‌ها افتخار می‌کنیم.',
            careers_title: 'فرصت‌های همکاری',
            careers_subtitle: 'به تیم حرفه‌ای SAMMER بپیوندید',
            careers_intro: 'ما در SAMMER به دنبال افراد با استعداد، خلاق و متعهد هستیم. اگر به دنبال محیطی پویا و چالش‌های جذاب هستید، جای شما خالی است. لطفا رزومه خود را به career@samrel.ir ارسال کنید.',
            contact_title: 'تماس با ما',
            contact_subtitle: 'مشتاق شنیدن دیدگاه شما هستیم',
            contact_address_label: 'آدرس',
            contact_address_value: 'تهران، خیابان ولیعصر، پلاک ۱۲۳',
            contact_phone_label: 'تلفن',
            contact_email_label: 'ایمیل',
            contact_hours_label: 'ساعات کاری',
            contact_hours_value: 'شنبه تا چهارشنبه ۹ تا ۱۷',
            form_name: 'نام و نام خانوادگی',
            form_email: 'ایمیل',
            form_subject: 'موضوع',
            form_message: 'پیام شما...',
            form_submit: 'ارسال پیام',
            footer_text: 'تمامی حقوق برای شرکت SAMMER محفوظ است.',
            // جدید
            visit_site: 'بازدید سایت'
        },
        en: {
            nav_home: 'Home',
            nav_about: 'About',
            nav_services: 'Services',
            nav_brands: 'Brands',
            nav_clients: 'Clients',
            nav_careers: 'Careers',
            nav_contact: 'Contact',
            hero_title: 'Bridging Global Markets',
            hero_desc: 'With a modern approach, we steer the supply chain from international sources to domestic and regional markets.',
            hero_cta: 'Contact Us',
            about_title: 'About SAMMER',
            about_subtitle: 'Dynamic experience in trade and supply',
            about_sammer_meaning: '<strong>SAM</strong> is our holding name and <strong>MER</strong> stands for three core values: <strong>Market • Exchange • Reach</strong>.',
            about_p1: 'SAMMER leverages a broad network of reputable global suppliers to play a key role in providing raw materials and strategic products for various industries.',
            about_p2: 'Understanding market needs deeply, we offer additional services like packaging, branding, and smart distribution to create distinct added value for our partners.',
            stat_years: 'Years',
            stat_partners: 'Partners',
            stat_countries: 'Countries',
            services_title: 'Our Services',
            services_subtitle: 'Comprehensive solutions for supply chain and brand development',
            service_1_title: 'International Sourcing',
            service_1_desc: 'Access to reliable global sources and supply agreements under optimal conditions.',
            service_2_title: 'Packaging & Branding',
            service_2_desc: 'Designing packaging and brand identity tailored to target markets and current standards.',
            service_3_title: 'Distribution & Logistics',
            service_3_desc: 'Supply chain management from entry points to final delivery.',
            service_4_title: 'Market Consulting',
            service_4_desc: 'Market analysis and strategic advice for entry or expansion.',
            brands_title: 'SAMMER Brands',
            brands_subtitle: 'Our subsidiaries in various industries',
            clients_title: 'Clients & Partners',
            clients_subtitle: 'Organizations that trusted us',
            clients_count_label: 'Active Clients',
            clients_count_desc: 'Our client count is constantly growing, and we are proud to provide quality services to them.',
            careers_title: 'Career Opportunities',
            careers_subtitle: 'Join the SAMMER professional team',
            careers_intro: 'At SAMMER, we are looking for talented, creative, and committed individuals. If you are looking for a dynamic environment and exciting challenges, we have a place for you. Please send your CV to career@samrel.ir .',
            contact_title: 'Contact Us',
            contact_subtitle: 'We look forward to hearing from you',
            contact_address_label: 'Address',
            contact_address_value: 'Tehran, Valiasr St., No. 123',
            contact_phone_label: 'Phone',
            contact_email_label: 'Email',
            contact_hours_label: 'Working Hours',
            contact_hours_value: 'Sat to Wed 9 AM - 5 PM',
            form_name: 'Full Name',
            form_email: 'Email',
            form_subject: 'Subject',
            form_message: 'Your Message...',
            form_submit: 'Send Message',
            footer_text: 'All rights reserved for SAMMER.',
            // جدید
            visit_site: 'Visit Site'
        }
    };

    // ---------- داده‌های دو زبانه برای برندها ----------
    const brandsData = {
        fa: [
            { name: 'بسته بندی ارغوان کیش', desc: 'بسته بندی محصولات مختلف', icon: 'fa-thin fa-cubes', link: '#' }
        ],
        en: [
            { name: 'Kish Arghavan Packaging', desc: 'Packaging different Products', icon: 'fa-thin fa-cubes', link: '#' }
        ]
    };

    // ---------- داده‌های دو زبانه برای مشتریان ----------
    const clientsData = {
        fa: [
            { name: 'صنایع آریا', icon: 'fa-building', link: '#' },
            { name: 'بازرگانی پارس', icon: 'fa-shipping-fast', link: '#' },
            { name: 'کشاورزی سبز', icon: 'fa-leaf', link: '#' },
            { name: 'توزیع آرمان', icon: 'fa-store', link: '#' }
        ],
        en: [
            { name: 'Aria Industries', icon: 'fa-building', link: '#' },
            { name: 'Pars Trading', icon: 'fa-shipping-fast', link: '#' },
            { name: 'Green Agro', icon: 'fa-leaf', link: '#' },
            { name: 'Arman Distribution', icon: 'fa-store', link: '#' }
        ]
    };

    // ---------- داده‌های دو زبانه برای موقعیت‌های شغلی ----------
    const careersData = {
        fa: [
            { title: 'مدیر فروش بین‌الملل', bullets: ['حداقل ۵ سال سابقه', 'مسلط به زبان انگلیسی', 'آشنایی با قوانین تجارت'] },
            { title: 'کارشناس بازرگانی', bullets: ['تحصیلات مرتبط', 'آشنایی با لجستیک', 'توانایی مذاکره'] },
            { title: 'طراح گرافیک و برندینگ', bullets: ['مسلط به نرم‌افزارهای گرافیکی', 'خلاقیت بالا', 'سابقه کار در برندینگ'] },
            { title: 'کارشناس دیجیتال مارکتینگ', bullets: ['آشنایی با سئو و شبکه‌های اجتماعی', 'تحلیل داده', 'ایده‌پردازی'] },
            { title: 'مشاور حقوقی', bullets: ['دارای پروانه وکالت', 'آشنایی با حقوق تجارت', 'تجربه قراردادهای بین‌المللی'] }
        ],
        en: [
            { title: 'International Sales Manager', bullets: ['Min 5 years experience', 'Fluent in English', 'Familiar with trade laws'] },
            { title: 'Trade Specialist', bullets: ['Relevant education', 'Logistics knowledge', 'Negotiation skills'] },
            { title: 'Graphic & Branding Designer', bullets: ['Proficient in graphic software', 'High creativity', 'Branding experience'] },
            { title: 'Digital Marketing Expert', bullets: ['SEO & social media', 'Data analysis', 'Creative thinking'] },
            { title: 'Legal Advisor', bullets: ['Law license', 'Commercial law knowledge', 'International contract experience'] }
        ]
    };

    // ---------- وضعیت ----------
    let currentLang = 'en';
    let currentTheme = 'dark';

    // ---------- عناصر DOM ----------
    const themeToggle = document.getElementById('themeToggle');
    const langToggle = document.getElementById('langToggle');
    const langLabel = document.getElementById('langLabel');
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    const html = document.documentElement;
    const allI18n = document.querySelectorAll('[data-i18n]');
    const allPlaceholders = document.querySelectorAll('[data-i18n-placeholder]');
    const brandsSlider = document.getElementById('brandsSlider');
    const careersSlider = document.getElementById('careersSlider');
    const prevBrand = document.getElementById('prevBrand');
    const nextBrand = document.getElementById('nextBrand');
    const prevCareer = document.getElementById('prevCareer');
    const nextCareer = document.getElementById('nextCareer');
    const clientCounter = document.getElementById('clientCounter');
    const statYears = document.getElementById('statYears');
    const statPartners = document.getElementById('statPartners');
    const statCountries = document.getElementById('statCountries');
    const clientsGrid = document.getElementById('clientsGrid');
    const navLinksItems = document.querySelectorAll('.nav-links a');

    // ---------- توابع تم و زبان ----------
    function setTheme(theme) {
        currentTheme = theme;
        if (theme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        } else {
            document.documentElement.removeAttribute('data-theme');
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        }
        localStorage.setItem('sammer-theme', theme);
    }

    function toggleTheme() {
        setTheme(currentTheme === 'light' ? 'dark' : 'light');
    }

    // ---------- به‌روزرسانی دکمه‌های اسلایدر ----------
    function updateSliderButtons(lang) {
        const isRtl = lang === 'fa';
        if (prevBrand && nextBrand) {
            prevBrand.innerHTML = isRtl ? '<i class="fas fa-chevron-right"></i>' : '<i class="fas fa-chevron-left"></i>';
            nextBrand.innerHTML = isRtl ? '<i class="fas fa-chevron-left"></i>' : '<i class="fas fa-chevron-right"></i>';
        }
        if (prevCareer && nextCareer) {
            prevCareer.innerHTML = isRtl ? '<i class="fas fa-chevron-right"></i>' : '<i class="fas fa-chevron-left"></i>';
            nextCareer.innerHTML = isRtl ? '<i class="fas fa-chevron-left"></i>' : '<i class="fas fa-chevron-right"></i>';
        }
    }

    // ---------- رندر مشتریان ----------
    function renderClients(lang) {
        const data = clientsData[lang] || clientsData.fa;
        clientsGrid.innerHTML = '';
        data.forEach(client => {
            const div = document.createElement('div');
            div.className = 'client-item';
            div.innerHTML = `
                <i class="fas ${client.icon}"></i>
                <span class="client-name">${client.name}</span>
                <a href="${client.link}" target="_blank" class="btn-visit" data-i18n="visit_site">${translations[lang].visit_site}</a>
            `;
            clientsGrid.appendChild(div);
        });
    }

    // ---------- ساخت اسلایدر برندها (با دکمه) ----------
    function buildBrandsSlider(lang) {
        brandsSlider.innerHTML = '';
        const data = brandsData[lang] || brandsData.fa;
        data.forEach(brand => {
            const slide = document.createElement('div');
            slide.className = 'brand-slide';
            slide.innerHTML = `
                <i class="fas ${brand.icon}"></i>
                <h3>${brand.name}</h3>
                <p>${brand.desc}</p>
                <a href="${brand.link}" target="_blank" class="btn-visit" data-i18n="visit_site">${translations[lang].visit_site}</a>
            `;
            brandsSlider.appendChild(slide);
        });
    }

    // ---------- ساخت اسلایدر موقعیت‌های شغلی ----------
    function buildCareersSlider(lang) {
        careersSlider.innerHTML = '';
        const data = careersData[lang] || careersData.fa;
        data.forEach(job => {
            const slide = document.createElement('div');
            slide.className = 'career-slide';
            let bulletList = '<ul>';
            job.bullets.forEach(b => {
                bulletList += `<li>${b}</li>`;
            });
            bulletList += '</ul>';
            slide.innerHTML = `
                <h3>${job.title}</h3>
                ${bulletList}
            `;
            careersSlider.appendChild(slide);
        });
    }

    // ---------- مدیریت منوی فعال ----------
    function setActiveLink(id) {
        navLinksItems.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + id) {
                link.classList.add('active');
            }
        });
    }

    function setupActiveNav() {
        const sections = document.querySelectorAll('section[id]');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && entry.intersectionRatio >= 0.3) {
                    setActiveLink(entry.target.id);
                }
            });
        }, { threshold: 0.3 });
        sections.forEach(section => observer.observe(section));

        // کلیک روی لینک‌ها
        navLinksItems.forEach(link => {
            link.addEventListener('click', function(e) {
                const id = this.getAttribute('href').substring(1);
                setActiveLink(id);
                // بستن منو در موبایل
                navLinks.classList.remove('open');
            });
        });

        // فعال کردن Home در ابتدا
        setActiveLink('home');
    }

    // ---------- توابع زبان ----------
    function applyLanguage(lang) {
        currentLang = lang;
        allI18n.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                if (key === 'visit_site') {
                    // برای دکمه‌های بازدید که به‌تازگی ساخته شده‌اند، جداگانه مدیریت می‌شوند
                    return;
                }
                el.innerHTML = translations[lang][key];
            }
        });
        // به‌روزرسانی placeholderها
        allPlaceholders.forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (translations[lang] && translations[lang][key]) {
                el.placeholder = translations[lang][key];
            }
        });
        langLabel.textContent = lang === 'fa' ? 'فا' : 'EN';
        if (lang === 'fa') {
            html.setAttribute('dir', 'rtl');
            html.setAttribute('lang', 'fa');
        } else {
            html.setAttribute('dir', 'ltr');
            html.setAttribute('lang', 'en');
        }
        localStorage.setItem('sammer-lang', lang);

        // به‌روزرسانی دکمه‌های اسلایدر
        updateSliderButtons(lang);

        // بازسازی اسلایدرها و مشتریان با زبان جدید
        buildBrandsSlider(lang);
        buildCareersSlider(lang);
        renderClients(lang);
        resetSliderIndices();
    }

    function toggleLanguage() {
        const nextLang = currentLang === 'fa' ? 'en' : 'fa';
        applyLanguage(nextLang);
    }

    // ---------- منو ----------
    function toggleMenu() {
        navLinks.classList.toggle('open');
    }
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => navLinks.classList.remove('open'));
    });

    // ---------- ریست ایندکس اسلایدرها ----------
    let brandSliderIndex = 0;
    let careerSliderIndex = 0;

    function resetSliderIndices() {
        brandSliderIndex = 0;
        careerSliderIndex = 0;
        setTimeout(() => {
            updateBrandSlider();
            updateCareerSlider();
        }, 50);
    }

    // ---------- اسلایدر کنترل ----------
    function createSlider(sliderElement, prevBtn, nextBtn, getIndex, setIndex) {
        let slidesPerView = getSlidesPerView();

        function getSlidesPerView() {
            if (window.innerWidth < 768) return 1;
            if (window.innerWidth < 992) return 2;
            return 3;
        }

        function getMaxIndex() {
            const total = sliderElement.children.length;
            return Math.max(0, total - slidesPerView);
        }

        function updateSlider() {
            const maxIndex = getMaxIndex();
            let idx = getIndex();
            if (idx > maxIndex) {
                idx = maxIndex;
                setIndex(idx);
            }
            const firstSlide = sliderElement.querySelector('.brand-slide') || sliderElement.querySelector('.career-slide');
            if (!firstSlide) return;
            const slideWidth = firstSlide.offsetWidth;
            const gap = 20;
            const offset = idx * (slideWidth + gap);
            const isRtl = document.documentElement.dir === 'rtl';
            sliderElement.style.transform = `translateX(${isRtl ? offset : -offset}px)`;
        }

        function nextSlide() {
            const maxIndex = getMaxIndex();
            let idx = getIndex();
            if (idx < maxIndex) {
                idx++;
            } else {
                idx = 0;
            }
            setIndex(idx);
            updateSlider();
        }

        function prevSlide() {
            const maxIndex = getMaxIndex();
            let idx = getIndex();
            if (idx > 0) {
                idx--;
            } else {
                idx = maxIndex;
            }
            setIndex(idx);
            updateSlider();
        }

        nextBtn.addEventListener('click', nextSlide);
        prevBtn.addEventListener('click', prevSlide);

        let resizeTimer;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                slidesPerView = getSlidesPerView();
                const maxIndex = getMaxIndex();
                let idx = getIndex();
                if (idx > maxIndex) idx = maxIndex;
                setIndex(idx);
                updateSlider();
            }, 200);
        });

        let autoSlide = setInterval(nextSlide, 4000);
        sliderElement.addEventListener('mouseenter', () => clearInterval(autoSlide));
        sliderElement.addEventListener('mouseleave', () => {
            autoSlide = setInterval(nextSlide, 4000);
        });

        setTimeout(updateSlider, 150);
        window.addEventListener('load', updateSlider);

        return { update: updateSlider };
    }

    // ---------- مدیریت اسلایدرها ----------
    let brandSliderControl, careerSliderControl;

    function initSliders() {
        buildBrandsSlider(currentLang);
        brandSliderControl = createSlider(
            brandsSlider,
            prevBrand,
            nextBrand,
            () => brandSliderIndex,
            (val) => { brandSliderIndex = val; }
        );

        buildCareersSlider(currentLang);
        careerSliderControl = createSlider(
            careersSlider,
            prevCareer,
            nextCareer,
            () => careerSliderIndex,
            (val) => { careerSliderIndex = val; }
        );
    }

    function updateBrandSlider() {
        if (brandSliderControl) brandSliderControl.update();
    }

    function updateCareerSlider() {
        if (careerSliderControl) careerSliderControl.update();
    }

    // ---------- شمارنده پویا ----------
    function animateCounter(element, target, suffix = '', duration = 2000) {
        let start = 0;
        const increment = target / (duration / 16);
        const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
                start = target;
                clearInterval(timer);
            }
            const displayValue = Math.floor(start);
            element.textContent = displayValue + suffix;
        }, 16);
    }

    function setupAboutCounters() {
        const aboutSection = document.getElementById('about');
        if (!aboutSection) return;
        let counted = false;
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !counted) {
                    counted = true;
                    animateCounter(statYears, 2, '+', 2000);
                    animateCounter(statPartners, 7, '+', 2000);
                    animateCounter(statCountries, 5, '+', 2000);
                }
            });
        }, { threshold: 0.3 });
        observer.observe(aboutSection);
    }

    function setupCounterObserver() {
        const counterWrapper = document.querySelector('.counter-wrapper');
        if (!counterWrapper) return;
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter(clientCounter, 10, '', 2500);
                    observer.disconnect();
                }
            });
        }, { threshold: 0.3 });
        observer.observe(counterWrapper);
    }

    function setupFadeInObserver() {
        const fadeElements = document.querySelectorAll('.fade-in');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });
        fadeElements.forEach(el => observer.observe(el));
    }

    // ---------- بارگذاری اولیه ----------
    function init() {
        // تم
        const savedTheme = localStorage.getItem('sammer-theme');
        if (savedTheme) {
            setTheme(savedTheme);
        } else {
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                setTheme('dark');
            } else {
                setTheme('light');
            }
        }

        // زبان
        const savedLang = localStorage.getItem('sammer-lang');
        if (savedLang && (savedLang === 'fa' || savedLang === 'en')) {
            applyLanguage(savedLang);
        } else {
            applyLanguage('fa');
        }

        // رویدادها
        themeToggle.addEventListener('click', toggleTheme);
        langToggle.addEventListener('click', toggleLanguage);
        hamburger.addEventListener('click', toggleMenu);

        // منوی فعال
        setupActiveNav();

        // راه‌اندازی اسلایدرها
        initSliders();

        // رندر مشتریان
        renderClients(currentLang);

        // شمارنده‌ها
        setupAboutCounters();
        setupCounterObserver();

        // افکت Fade-in
        setupFadeInObserver();

        // فرم تماس
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            alert(currentLang === 'fa' ? 'پیام شما با موفقیت ارسال شد!' : 'Your message was sent successfully!');
            this.reset();
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
