/* ============================================
   Centralized Configuration File
   All assets, data, and translations managed here
   ============================================ */

const CONFIG = {
    // ============================================
    // Personal Information
    // ============================================
    personal: {
        name: {
            ne: 'हिमाल थापा',
            en: 'Himal Thapa'
        },
        profession: {
            ne: 'आईटी इन्जिनियर',
            en: 'IT Engineer'
        },
        location: {
            ne: 'काठमाडौं, नेपाल',
            en: 'Kathmandu, Nepal'
        },
        email: 'hthapa208@gmail.com',
        phone: '+977 9851214522',
        whatsapp: '9779851214522'
    },

    // ============================================
    // Social Media Links
    // ============================================
    social: {
        facebook: 'https://facebook.com/thimal522',
        youtube: 'https://youtube.com/@himalthapa',
        tiktok: 'https://tiktok.com/@aipro522',
        instagram: 'https://instagram.com/himalthapa',
        github: 'https://github.com/himalthapa',
        linkedin: 'https://linkedin.com/in/himalthapa'
    },

    // ============================================
    // Asset Paths
    // ============================================
    assets: {
        profile: 'assets/images/profile.jpg',
        resume: 'assets/resume/Himal_Thapa_Resume.pdf',
        favicon: 'assets/favicon.ico',
        ogImage: 'assets/images/og-image.jpg',
        twitterImage: 'assets/images/twitter-image.jpg',
        certificates: {
            aws: 'assets/certificates/aws.jpg',
            gcp: 'assets/certificates/gcp.jpg',
            meta: 'assets/certificates/meta.jpg',
            security: 'assets/certificates/security.jpg'
        },
        projects: {
            ecommerce: 'assets/projects/ecommerce.jpg',
            lms: 'assets/projects/lms.jpg',
            taskmanager: 'assets/projects/taskmanager.jpg',
            dashboard: 'assets/projects/dashboard.jpg',
            inventory: 'assets/projects/inventory.jpg',
            blog: 'assets/projects/blog.jpg'
        },
        blog: {
            react: 'assets/blog/react.jpg',
            design: 'assets/blog/design.jpg',
            database: 'assets/blog/database.jpg'
        }
    },

    // ============================================
    // Translations (Nepali and English)
    // ============================================
    translations: {
        ne: {
            // Loading
            loading: 'लोड हुँदैछ...',
            
            // Navigation
            nav: {
                home: 'गृह',
                about: 'बारेमा',
                skills: 'सीपहरू',
                services: 'सेवाहरू',
                portfolio: 'पोर्टफोलियो',
                experience: 'अनुभव',
                education: 'शिक्षा',
                certifications: 'प्रमाणपत्रहरू',
                blog: 'ब्लग',
                contact: 'सम्पर्क'
            },
            
            // Hero Section
            hero: {
                greeting: 'नमस्ते, म',
                profession: 'आईटी इन्जिनियर',
                typing: ['आईटी इन्जिनियर', 'वेब डेभलपर', 'सफ्टवेयर डेभलपर', 'टेक उत्साही', 'समस्या समाधानकर्ता'],
                contact: 'सम्पर्क गर्नुहोस्',
                downloadResume: 'रिज्यूमे डाउनलोड गर्नुहोस्',
                hireMe: 'मलाई हायर गर्नुहोस्',
                scrollDown: 'तल स्क्रोल गर्नुहोस्'
            },
            
            // Personal Information
            personal: {
                name: 'हिमाल थापा',
                profession: 'आईटी इन्जिनियर',
                location: 'काठमाडौं, नेपाल'
            },
            
            // About Section
            about: {
                title: 'मेरो बारेमा',
                subtitle: 'मलाई राम्रोसँग चिन्नुहोस्',
                bio: 'म हिमाल थापा, वेब डेभलपमेन्ट, सफ्टवेयर समाधान, र टेक्निकल कन्सल्टिङमा विशेषज्ञता भएको एक उत्साही आईटी इन्जिनियर हुँ। फ्रन्टएन्ड र ब्याकएन्ड टेक्नोलोजीमा बलियो आधार भएको, म व्यापार वृद्धिलाई चालन गर्न अभिनव डिजिटल समाधानहरू सिर्जना गर्छु।',
                passion: 'मेरो रुचि अर्को कोड र अन्तर्दृष्टिपूर्ण डिजाइन मार्फत जटिल समस्याहरू समाधान गर्नुमा छ। म निरन्तर सिक्न र नवीनतम टेक्नोलोजीहरूसँग अपडेट रहन विश्वास गर्छु अभिनव समाधानहरू प्रदान गर्न।',
                goal: 'मेरो करियर लक्ष्य एक अग्रणी टेक्नोलोजी कन्सल्टेन्ट बन्नु हो, व्यवसायहरूलाई अभिनव टेक्नोलोजी समाधानहरू मार्फत आफ्नो डिजिटल उपस्थिति परिवर्तन गर्न र आफ्ना उद्देश्यहरू प्राप्त गर्न मद्दत गर्न।',
                name: 'नाम: हिमाल थापा',
                professionLabel: 'पेशा: आईटी इन्जिनियर',
                locationLabel: 'स्थान: नेपाल',
                emailLabel: 'इमेल: himal@example.com',
                projects: 'परियोजनाहरू',
                clients: 'ग्राहकहरू',
                years: 'वर्ष',
                awards: 'पुरस्कारहरू'
            },
            
            // Skills Section
            skills: {
                title: 'मेरा सीपहरू',
                subtitle: 'म जसमा काम गर्छु ती टेक्नोलोजीहरू',
                frontend: 'फ्रन्टएन्ड',
                backend: 'ब्याकएन्ड',
                database: 'डेटाबेस',
                tools: 'उपकरणहरू'
            },
            
            // Services Section
            services: {
                title: 'मेरा सेवाहरू',
                subtitle: 'म तपाईंको लागि के गर्न सक्छु',
                webDev: 'वेबसाइट विकास',
                webDevDesc: 'आधुनिक टेक्नोलोजी र उत्तम अभ्यासहरूसँग तपाईंको आवश्यकताअनुसार अनुकूलित वेबसाइटहरू।',
                webDesign: 'वेब डिजाइन',
                webDesignDesc: 'सुन्दर, प्रतिक्रियाशील, र प्रयोगकर्ता-अनुकूल डिजाइनहरू जसले तपाईंको दर्शकहरूलाई मोहित गर्छ।',
                uiux: 'UI/UX डिजाइन',
                uiuxDesc: 'अन्तर्दृष्टिपूर्ण प्रयोगकर्ता इन्टरफेसहरू र असाधारण प्रयोगकर्ता अनुभवहरू जसले संलग्नता चलाउँछ।',
                software: 'सफ्टवेयर समाधान',
                softwareDesc: 'तपाईंको अद्वितीय व्यापार चुनौतीहरू समाधान गर्न अनुकूलित सफ्टवेयर विकास।',
                support: 'टेक्निकल समर्थन',
                supportDesc: 'तपाईंको प्रणालीहरू सुचारू रूपमा चल्न विश्वसनीय टेक्निकल समर्थन र रखरखाव।',
                consulting: 'आईटी कन्सल्टिङ',
                consultingDesc: 'टेक्नोलोजी रणनीति, कार्यान्वयन, र अनुकूलनमा विशेषज्ञ सल्लाह।',
                learnMore: 'थप जान्नुहोस्'
            },
            
            // Portfolio Section
            portfolio: {
                title: 'मेरो पोर्टफोलियो',
                subtitle: 'मैले काम गरेका हालका परियोजनाहरू',
                all: 'सबै',
                web: 'वेब',
                app: 'एप',
                uiux: 'UI/UX',
                software: 'सफ्टवेयर',
                liveDemo: 'लाइभ डेमो',
                sourceCode: 'स्रोत कोड'
            },
            
            // Experience Section
            experience: {
                title: 'अनुभव',
                subtitle: 'मेरो व्यावसायिक यात्रा'
            },
            
            // Education Section
            education: {
                title: 'शिक्षा',
                subtitle: 'मेरो शैक्षिक पृष्ठभूमि',
                deansList: 'डीन्स लिस्ट',
                bestProject: 'उत्कृष्ट परियोजना पुरस्कार',
                distinction: 'विशिष्टता',
                top10: 'शीर्ष १०%',
                firstDivision: 'प्रथम श्रेणी',
                meritCertificate: 'मेरिट प्रमाणपत्र'
            },
            
            // Certifications Section
            certifications: {
                title: 'प्रमाणपत्रहरू',
                subtitle: 'मैले प्राप्त गरेका व्यावसायिक प्रमाणपत्रहरू',
                viewCertificate: 'प्रमाणपत्र हेर्नुहोस्'
            },
            
            // Statistics Section
            statistics: {
                projectsCompleted: 'पूरा भएका परियोजनाहरू',
                happyClients: 'सन्तुष्ट ग्राहकहरू',
                yearsExperience: 'वर्षको अनुभव',
                technologiesMastered: 'मास्टर गरिएका टेक्नोलोजीहरू'
            },
            
            // Testimonials Section
            testimonials: {
                title: 'सिफारिशहरू',
                subtitle: 'ग्राहकहरूले मेरो बारेमा के भन्छन्'
            },
            
            // Blog Section
            blog: {
                title: 'ब्लग',
                subtitle: 'नवीनतम लेखहरू र अन्तर्दृष्टिहरू',
                development: 'विकास',
                design: 'डिजाइन',
                backend: 'ब्याकएन्ड',
                readMore: 'थप पढ्नुहोस्'
            },
            
            // Contact Section
            contact: {
                title: 'सम्पर्क गर्नुहोस्',
                subtitle: 'संगै काम गरौं',
                getInTouch: 'सम्पर्कमा आउनुहोस्',
                description: 'सहयोग, परियोजनाहरू, वा केवल नमस्ते भन्नको लागि स्वतन्त्र रूपमा सम्पर्क गर्नुहोस्!',
                email: 'इमेल',
                phone: 'फोन',
                location: 'स्थान',
                callMe: 'मलाई कल गर्नुहोस्',
                emailMe: 'मलाई इमेल गर्नुहोस्',
                whatsapp: 'व्हाट्सएप',
                locationBtn: 'स्थान',
                followMe: 'मलाई फलो गर्नुहोस्',
                name: 'नाम',
                emailLabel: 'इमेल',
                subject: 'विषय',
                message: 'सन्देश',
                sendMessage: 'सन्देश पठाउनुहोस्',
                namePlaceholder: 'तपाईंको नाम',
                emailPlaceholder: 'तपाईंको इमेल',
                subjectPlaceholder: 'विषय',
                messagePlaceholder: 'तपाईंको सन्देश',
                successMessage: 'सन्देश सफलतापूर्वक पठाइयो! (डेमो मोड)'
            },
            
            // Footer
            footer: {
                quickLinks: 'द्रुत लिंकहरू',
                connect: 'जडान गर्नुहोस्',
                copyright: '© २०२६ हिमाल थापा। सर्वाधिकार सुरक्षित।'
            },
            
            // Form Validation
            validation: {
                nameRequired: 'नाम कम्तिमा २ अक्षर हुनुपर्छ',
                emailInvalid: 'कृपया वैध इमेल ठेगाना प्रविष्ट गर्नुहोस्',
                subjectRequired: 'विषय कम्तिमा ३ अक्षर हुनुपर्छ',
                messageRequired: 'सन्देश कम्तिमा १० अक्षर हुनुपर्छ'
            }
        },
        
        en: {
            // Loading
            loading: 'Loading...',
            
            // Navigation
            nav: {
                home: 'Home',
                about: 'About',
                skills: 'Skills',
                services: 'Services',
                portfolio: 'Portfolio',
                experience: 'Experience',
                education: 'Education',
                certifications: 'Certifications',
                blog: 'Blog',
                contact: 'Contact'
            },
            
            // Hero Section
            hero: {
                greeting: 'Hello, I\'m',
                profession: 'IT Engineer',
                typing: ['IT Engineer', 'Web Developer', 'Software Developer', 'Tech Enthusiast', 'Problem Solver'],
                contact: 'Contact Me',
                downloadResume: 'Download Resume',
                hireMe: 'Hire Me',
                scrollDown: 'Scroll Down'
            },
            
            // Personal Information
            personal: {
                name: 'Himal Thapa',
                profession: 'IT Engineer',
                location: 'Kathmandu, Nepal'
            },
            
            // About Section
            about: {
                title: 'About Me',
                subtitle: 'Get to know me better',
                bio: 'I\'m Himal Thapa, a passionate IT Engineer with expertise in web development, software solutions, and technical consulting. With a strong foundation in both frontend and backend technologies, I create innovative digital solutions that drive business growth.',
                passion: 'My passion lies in solving complex problems through elegant code and intuitive design. I believe in continuous learning and staying updated with the latest technologies to deliver cutting-edge solutions.',
                goal: 'My career goal is to become a leading technology consultant, helping businesses transform their digital presence and achieve their objectives through innovative technology solutions.',
                name: 'Name: Himal Thapa',
                professionLabel: 'Profession: IT Engineer',
                locationLabel: 'Location: Nepal',
                emailLabel: 'Email: himal@example.com',
                projects: 'Projects',
                clients: 'Clients',
                years: 'Years',
                awards: 'Awards'
            },
            
            // Skills Section
            skills: {
                title: 'My Skills',
                subtitle: 'Technologies I work with',
                frontend: 'Frontend',
                backend: 'Backend',
                database: 'Database',
                tools: 'Tools'
            },
            
            // Services Section
            services: {
                title: 'My Services',
                subtitle: 'What I can do for you',
                webDev: 'Website Development',
                webDevDesc: 'Custom websites tailored to your needs with modern technologies and best practices.',
                webDesign: 'Web Design',
                webDesignDesc: 'Beautiful, responsive, and user-friendly designs that captivate your audience.',
                uiux: 'UI/UX Design',
                uiuxDesc: 'Intuitive user interfaces and exceptional user experiences that drive engagement.',
                software: 'Software Solutions',
                softwareDesc: 'Custom software development to solve your unique business challenges.',
                support: 'Technical Support',
                supportDesc: 'Reliable technical support and maintenance to keep your systems running smoothly.',
                consulting: 'IT Consulting',
                consultingDesc: 'Expert advice on technology strategy, implementation, and optimization.',
                learnMore: 'Learn More'
            },
            
            // Portfolio Section
            portfolio: {
                title: 'My Portfolio',
                subtitle: 'Recent projects I\'ve worked on',
                all: 'All',
                web: 'Web',
                app: 'App',
                uiux: 'UI/UX',
                software: 'Software',
                liveDemo: 'Live Demo',
                sourceCode: 'Source Code'
            },
            
            // Experience Section
            experience: {
                title: 'Experience',
                subtitle: 'My professional journey'
            },
            
            // Education Section
            education: {
                title: 'Education',
                subtitle: 'My academic background',
                deansList: 'Dean\'s List',
                bestProject: 'Best Project Award',
                distinction: 'Distinction',
                top10: 'Top 10%',
                firstDivision: 'First Division',
                meritCertificate: 'Merit Certificate'
            },
            
            // Certifications Section
            certifications: {
                title: 'Certifications',
                subtitle: 'Professional certifications I\'ve earned',
                viewCertificate: 'View Certificate'
            },
            
            // Statistics Section
            statistics: {
                projectsCompleted: 'Projects Completed',
                happyClients: 'Happy Clients',
                yearsExperience: 'Years Experience',
                technologiesMastered: 'Technologies Mastered'
            },
            
            // Testimonials Section
            testimonials: {
                title: 'Testimonials',
                subtitle: 'What clients say about me'
            },
            
            // Blog Section
            blog: {
                title: 'Blog',
                subtitle: 'Latest articles and insights',
                development: 'Development',
                design: 'Design',
                backend: 'Backend',
                readMore: 'Read More'
            },
            
            // Contact Section
            contact: {
                title: 'Contact Me',
                subtitle: 'Let\'s work together',
                getInTouch: 'Get In Touch',
                description: 'Feel free to reach out for collaborations, projects, or just to say hello!',
                email: 'Email',
                phone: 'Phone',
                location: 'Location',
                callMe: 'Call Me',
                emailMe: 'Email Me',
                whatsapp: 'WhatsApp',
                locationBtn: 'Location',
                followMe: 'Follow Me',
                name: 'Name',
                emailLabel: 'Email',
                subject: 'Subject',
                message: 'Message',
                sendMessage: 'Send Message',
                namePlaceholder: 'Your Name',
                emailPlaceholder: 'Your Email',
                subjectPlaceholder: 'Subject',
                messagePlaceholder: 'Your Message',
                successMessage: 'Message sent successfully! (Demo mode)'
            },
            
            // Footer
            footer: {
                quickLinks: 'Quick Links',
                connect: 'Connect',
                copyright: '© 2026 Himal Thapa. All Rights Reserved.'
            },
            
            // Form Validation
            validation: {
                nameRequired: 'Name must be at least 2 characters',
                emailInvalid: 'Please enter a valid email address',
                subjectRequired: 'Subject must be at least 3 characters',
                messageRequired: 'Message must be at least 10 characters'
            }
        }
    },

    // ============================================
    // Default Settings
    // ============================================
    settings: {
        defaultLanguage: 'ne', // Nepali as default
        defaultTheme: 'dark',
        typingSpeed: 100,
        deletingSpeed: 50,
        typingDelay: 2000,
        deletingDelay: 500
    },

    // ============================================
    // Project Data
    // ============================================
    projects: [
        {
            id: 1,
            name: {
                ne: 'इ-कमर्स प्लेटफर्म',
                en: 'E-Commerce Platform'
            },
            description: {
                ne: 'भुक्तानी एकीकरणसँग पूर्ण-सुविधा युक्त अनलाइन खरिद प्लेटफर्म।',
                en: 'A full-featured online shopping platform with payment integration.'
            },
            technologies: ['React', 'Node.js', 'MongoDB'],
            category: 'web',
            liveDemo: '#',
            sourceCode: '#'
        },
        {
            id: 2,
            name: {
                ne: 'सिक्षा व्यवस्थापन प्रणाली',
                en: 'Learning Management System'
            },
            description: {
                ne: 'अनलाइन कोर्सहरू र विद्यार्थी व्यवस्थापनको लागि अन्तरक्रियात्मक प्लेटफर्म।',
                en: 'Interactive platform for online courses and student management.'
            },
            technologies: ['React', 'Express', 'MySQL'],
            category: 'web',
            liveDemo: '#',
            sourceCode: '#'
        },
        {
            id: 3,
            name: {
                ne: 'कार्य प्रबन्धक एप',
                en: 'Task Manager App'
            },
            description: {
                ne: 'कार्यहरू र परियोजनाहरू कार्यक्षमतापूर्वक व्यवस्थापन गर्न उत्पादकता एप।',
                en: 'Productivity app for managing tasks and projects efficiently.'
            },
            technologies: ['React Native', 'Firebase'],
            category: 'app',
            liveDemo: '#',
            sourceCode: '#'
        },
        {
            id: 4,
            name: {
                ne: 'ड्यासबोर्ड UI डिजाइन',
                en: 'Dashboard UI Design'
            },
            description: {
                ne: 'डेटा भिजुअलाइजेसन अवयवहरूसँग आधुनिक ड्यासबोर्ड इन्टरफेस।',
                en: 'Modern dashboard interface with data visualization components.'
            },
            technologies: ['Figma', 'Adobe XD'],
            category: 'uiux',
            liveDemo: '#',
            sourceCode: '#'
        },
        {
            id: 5,
            name: {
                ne: 'इन्भेन्टरी व्यवस्थापन',
                en: 'Inventory Management'
            },
            description: {
                ne: 'इन्भेन्टरी ट्र्याक गर्न र व्यवस्थापन गर्न व्यापक सफ्टवेयर।',
                en: 'Comprehensive software for tracking and managing inventory.'
            },
            technologies: ['Python', 'Django', 'PostgreSQL'],
            category: 'software',
            liveDemo: '#',
            sourceCode: '#'
        },
        {
            id: 6,
            name: {
                ne: 'ब्लग प्लेटफर्म',
                en: 'Blog Platform'
            },
            description: {
                ne: 'CMS र SEO सुविधाहरूसँग गतिशील ब्लगिङ प्लेटफर्म।',
                en: 'Dynamic blogging platform with CMS and SEO features.'
            },
            technologies: ['Next.js', 'Sanity', 'Vercel'],
            category: 'web',
            liveDemo: '#',
            sourceCode: '#'
        }
    ],

    // ============================================
    // Experience Data
    // ============================================
    experience: [
        {
            company: 'Tech Solutions Inc.',
            position: {
                ne: 'वरिष्ठ आईटी इन्जिनियर',
                en: 'Senior IT Engineer'
            },
            year: '2023 - Present',
            description: {
                ne: 'विकास टोलीहरूको नेतृत्व गर्दै र उद्यम ग्राहकहरूको लागि मापनयोग्य समाधानहरू वास्तुकला गर्दै। उत्तम अभ्यासहरू कार्यान्वयन गर्दै र जुनियर डेभलपरहरूलाई मार्गदर्शन गर्दै।',
                en: 'Leading development teams and architecting scalable solutions for enterprise clients. Implementing best practices and mentoring junior developers.'
            }
        },
        {
            company: 'Digital Agency Pro',
            position: {
                ne: 'फुल स्ट्याक डेभलपर',
                en: 'Full Stack Developer'
            },
            year: '2021 - 2023',
            description: {
                ne: 'विभिन्न उद्योगहरूका ग्राहकहरूको लागि धेरै वेब एप्लिकेसनहरू विकसित गर्दै र रखरखाव गर्दै। निर्बाध प्रयोगकर्ता अनुभवहरू सिर्जना गर्न डिजाइन टोलीहरूसँग सहयोग गर्दै।',
                en: 'Developed and maintained multiple web applications for clients across various industries. Collaborated with design teams to create seamless user experiences.'
            }
        },
        {
            company: 'StartUp Hub',
            position: {
                ne: 'वेब डेभलपर',
                en: 'Web Developer'
            },
            year: '2019 - 2021',
            description: {
                ne: 'स्टार्टअप ग्राहकहरूको लागि प्रतिक्रियाशील वेबसाइटहरू र वेब एप्लिकेसनहरू निर्माण गर्दै। आधुनिक फ्रन्टएन्ड फ्रेमवर्कहरू कार्यान्वयन गर्दै र प्रदर्शन अनुकूलन गर्दै।',
                en: 'Built responsive websites and web applications for startup clients. Implemented modern frontend frameworks and optimized performance.'
            }
        },
        {
            company: 'CodeCraft Studio',
            position: {
                ne: 'जुनियर डेभलपर',
                en: 'Junior Developer'
            },
            year: '2018 - 2019',
            description: {
                ne: 'व्यावसायिक यात्रा सुरु गर्दै वेबसाइटहरू विकसित गर्दै र उद्योग उत्तम अभ्यासहरू सिक्दै। विभिन्न परियोजनाहरूमा सहायता गर्दै र हाते-अनुभव प्राप्त गर्दै।',
                en: 'Started my professional journey developing websites and learning industry best practices. Assisted in various projects and gained hands-on experience.'
            }
        }
    ],

    // ============================================
    // Education Data
    // ============================================
    education: [
        {
            degree: {
                ne: 'कम्प्युटर साइन्स स्नातक',
                en: 'Bachelor of Computer Science'
            },
            institution: 'Tribhuvan University',
            year: '2018 - 2022',
            description: {
                ne: 'सम्मानसहित स्नातक। सफ्टवेयर इन्जिनियरिङ र वेब टेक्नोलोजीमा विशेषज्ञता।',
                en: 'Graduated with honors. Specialized in Software Engineering and Web Technologies.'
            },
            achievements: ['deansList', 'bestProject']
        },
        {
            degree: {
                ne: 'उच्च माध्यमिक शिक्षा',
                en: 'Higher Secondary Education'
            },
            institution: 'National College',
            year: '2016 - 2018',
            description: {
                ne: 'भौतिकी, रसायन विज्ञान, गणित, र कम्प्युटर साइन्समा ध्यान केन्द्रित विज्ञान प्रवाह।',
                en: 'Science stream with focus on Physics, Chemistry, Mathematics, and Computer Science.'
            },
            achievements: ['distinction', 'top10']
        },
        {
            degree: {
                ne: 'माध्यमिक शिक्षा',
                en: 'Secondary Education'
            },
            institution: 'Model Secondary School',
            year: '2014 - 2016',
            description: {
                ne: 'उत्कृष्ट शैक्षिक प्रदर्शनसँग माध्यमिक शिक्षा पूरा गरियो।',
                en: 'Completed secondary education with excellent academic performance.'
            },
            achievements: ['firstDivision', 'meritCertificate']
        }
    ],

    // ============================================
    // Blog Data
    // ============================================
    blog: [
        {
            id: 1,
            title: {
                ne: 'React सँग आधुनिक वेब एप्लिकेसनहरू निर्माण गर्दै',
                en: 'Building Modern Web Applications with React'
            },
            date: 'March 15, 2024',
            category: 'development',
            excerpt: {
                ne: '२०२४ मा मापनयोग्य React एप्लिकेसनहरू सिर्जना गर्न उत्तम अभ्यासहरू र तकनीकहरू अन्वेषण गर्नुहोस्।',
                en: 'Explore the best practices and techniques for creating scalable React applications in 2024.'
            }
        },
        {
            id: 2,
            title: {
                ne: 'UI/UX डिजाइनको भविष्य',
                en: 'The Future of UI/UX Design'
            },
            date: 'March 10, 2024',
            category: 'design',
            excerpt: {
                ne: 'प्रयोगकर्ता इन्टरफेस डिजाइनको भविष्य आकार दिने उदीयमान प्रवृत्ति र टेक्नोलोजीहरू खोज्नुहोस्।',
                en: 'Discover emerging trends and technologies shaping the future of user interface design.'
            }
        },
        {
            id: 3,
            title: {
                ne: 'डेटाबेस प्रदर्शन अनुकूलन गर्दै',
                en: 'Optimizing Database Performance'
            },
            date: 'March 5, 2024',
            category: 'backend',
            excerpt: {
                ne: 'तपाईंको डेटाबेस प्रदर्शन र मापनयोग्यता सुधार गर्न रणनीति र तकनीकहरू सिक्नुहोस्।',
                en: 'Learn strategies and techniques to improve your database performance and scalability.'
            }
        }
    ]
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}
