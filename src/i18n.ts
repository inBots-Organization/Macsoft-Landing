import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector) // detect language from browser/localStorage
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    debug: true,

    interpolation: {
      escapeValue: false, // react already safes from xss
    },

    resources: {
      en: {
        translation: {
          // Navbar
          navbar: {
            features: "Features",
            developers: "Developers",
            company: "Company",
            blog: "Blog",
            changelog: "Changelog",
            joinWaitlist: "Join waitlist",
            openMenu: "Open menu",
            closeMenu: "Close menu",
          },

          // Hero Section
          hero: {
            title: "AI with",
            titleHighlight: "Attitude",
            description: "We don't build passive software. We engineer Agentic Systems that work, decide, and enforce standards like your best employees.",
            terminalComment: "// system_audit.log",
            terminalText: "Uploading incomplete safety report...",
            terminalStatus: "REJECTED",
            terminalError: "[!] Violation: Missing PPE in Zone B. Workflow Halted.",
            tagline1: "Most software waits for input.",
            tagline2: "Ours demands standards.",
            bookDemo: "Book a Demo",
            buildAI: "Build AI",
          },

          // Social Proof Section
          socialProof: {
            title: "Social Proof",
            subtitle: "Here's what people are saying about us",
            testimonial1: {
              name: "Sean Rose",
              title: "Ops Director, Tier-1 Construction Firm",
              quote: "Rejected 142 non-compliant site reports in Week 1. Saved us from a major audit failure.",
            },
            testimonial2: {
              name: "Ryan Delk",
              title: "Head of Logistics, Global Freight Corp",
              quote: "Cut procurement invoice processing by 85% while increasing error catch-rate.",
            },
          },

          // Stop Buying Tools Section
          stopBuying: {
            title: "STOP",
            titleRest: "Buying Tools. Start Hiring Systems.",
            description: "Everyone else is selling you polite chatbots and passive \"assistants.\" We build Agentic Systems—platforms with a backbone.",
            subtitle: "An Agentic System doesn't just record data; it has the attitude to audit it.",
            subtitleDescription: "Discover the unique advantages that set us apart in the world of AI innovation",
            point1: "It doesn't just accept a file; it ",
            point1Highlight: "inspects",
            point1Rest: " it against your policy.",
            point2: "It doesn't just log a task; it ",
            point2Highlight: "executes",
            point2Rest: " it to completion.",
            point3: "It doesn't wait for permission; it ",
            point3Highlight: "drives compliance",
            point3Rest: ".",
            footer: "We don't build passive software. We engineer Agentic Systems that work, decide, and enforce standards like your best employees.",
          },

          // Features Section
          features: {
            title: "A System",
            titleHighlight: "That Knows Its Job",
            description: "In a MacSoft Agentic System, your dashboard isn't filled with blank data entry fields. It is populated by specialized AI Agents who know their specific roles.",
            enforcer: {
              title: "The ENFORCER",
              subtitle: "Validation Agent",
              description: "Whether checking safety gear or validating permits, this agent rejects non-compliance instantly.",
            },
            specialist: {
              title: "The Specialist",
              subtitle: "Financial Analyst",
              description: "From reading obscure meter digits to catching fractional financial variances, these agents see details humans miss.",
            },
            manager: {
              title: "The Manager",
              subtitle: "Workflow Overseer",
              description: "Tracks trends, flags anomalies, and approves standard workflows 24/7 without coffee breaks.",
            },
            liveAgentView: "[Live Agent View]",
            processing: "Processing...",
          },

          // Integrations Section
          integrations: {
            title: "Enforces",
            titleRest: "Standards On Top Of Your Existing Stack",
            subtitle: "Trusted by the world's most innovative teams",
          },

          // Why AI with Attitude Section
          whyAI: {
            title: "Why AI with",
            titleHighlight: "Attitude?",
            description: "Because \"polite\" AI is useless in operations. You need systems that",
            point1Title: "• Push Back:",
            point1Text: "If the quality isn't there, the system says \"No.\"",
            point2Title: "• Take Ownership:",
            point2Text: "They don't pass the buck back to a human. They solve the ticket.",
            point3Title: "• Scale Ruthlessly:",
            point3Text: "Whether checking 10 items or 10,000, the standard never drops.",
          },

          // Final CTA Section
          cta: {
            title: "See What \"",
            titleHighlight: "AI With Attitude",
            titleRest: "\" Looks Like In Action.",
            description: "Don't just take our word for it. Watch our agents audit a file, reject a critical error, and fix a live workflow in real-time.",
            button: "See The Agents in Action",
            footer: "No \"rip-and-replace\" required. We deploy alongside your current systems.",
          },
        },
      },
      ar: {
        translation: {
          // Navbar
          navbar: {
            features: "الميزات",
            developers: "المطورون",
            company: "الشركة",
            blog: "المدونة",
            changelog: "التحديثات",
            joinWaitlist: "انضم للقائمة",
            openMenu: "فتح القائمة",
            closeMenu: "إغلاق القائمة",
          },

          // Hero Section
          hero: {
            title: "ذكاء اصطناعي",
            titleHighlight: "بحــزم",
            description: "نحن لا نطوّر برمجيات تقليدية. نحن نبني أنظمة ذكاء اصطناعي تشغيلية (Agentic Systems) تعمل باستقلالية، تتخذ القرار، وتُطبّق المعايير كما يفعل أفضل أفراد فريقك.",
            terminalComment: "// سجل_التدقيق_النظام",
            terminalText: "جاري رفع تقرير السلامة غير المكتمل...",
            terminalStatus: "مرفوض",
            terminalError: "[!] انتهاك: معدات الحماية مفقودة في المنطقة ب. توقف سير العمل.",
            tagline1: "معظم البرمجيات تنتظر منك الإدخال.",
            tagline2: "أنظمتنا تتفاعل وتُنجز.",
            bookDemo: "إحجز تجربة الآن",
            buildAI: "أنشئ ذكاء إصطناعي",
          },

          // Social Proof Section
          socialProof: {
            title: "نحن نهتم!",
            subtitle: "هكذا يتحدث عملاؤنا عنا",
            testimonial1: {
              name: "شون روز",
              title: "مدير العمليات، شركة إنشاءات من الدرجة الأولى",
              quote: "رفض 142 تقريراً غير ممتثل في الأسبوع الأول. أنقذنا من فشل تدقيق كبير.",
            },
            testimonial2: {
              name: "رايان ديلك",
              title: "رئيس اللوجستيات، شركة الشحن العالمية",
              quote: "خفض معالجة فواتير المشتريات بنسبة 85٪ مع زيادة معدل اكتشاف الأخطاء.",
            },
          },

          // Stop Buying Tools Section
          stopBuying: {
            title: "توقف",
            titleRest: "عن شراء الأدوات. وابدأ ببناء نظام يعمل",
            description: "السوق ممتلئ بروبوتات محادثة و“مساعدين”. نحن نقدّم أنظمة تشغيلية—منصّات متكاملة تمتلك منطق تشغيل واضحاً ومسؤولية تنفيذ.",
            subtitle: "النظام التشغيلي لا يكتفي بتسجيل البيانات؛ بل يدقّقها ويعتمدها.",
            subtitleDescription: "اكتشف المزايا التي تميزنا في عالم الذكاء الاصطناعي",
            point1: "لا يكتفي باستقبال ملف؛ بل يفحصه ويتحقق منه.",
            point1Highlight: "",
            point1Rest: "",
            point2: "لا يكتفي بتسجيل مهمة؛ بل ينفّذها وفق المسار المعتمد.",
            point2Highlight: "",
            point2Rest: "",
            point3: "لا ينتظر إذناً؛ بل يضمن الالتزام بالمعايير والإجراءات.",  
            point3Highlight: "",
            point3Rest: "",
            footer: "نحن لا نبني برمجيات سلبية. نحن نُهندس أنظمة ذكية تعمل، تُقرر، وتفرض المعايير.",
          },

          // Features Section
          features: {
            title: "نظام",
            titleHighlight: "يعرف دوره.",
            description: "في أنظمة MacSoft التشغيلية، لوحة التحكم ليست حقول إدخال؛ بل وكلاء ذكاء اصطناعي متخصصون، لكل منهم دور واضح:",
            enforcer: {
              title: "المدقّق/المراقب",
              subtitle: "",
              description: "يتحقق من الالتزام ويمنع أي حالة عدم مطابقة فوراً—سواء في السلامة، الجودة، أو المشتريات",
            },
            specialist: {
              title: "المتخصص",
              subtitle: "",
              description: "لتقط التفاصيل الدقيقة: تحليل صور، قراءة بيانات منخفضة الوضوح، واستخراج مؤشرات قد لا تُلاحظ بشرياً",
            },
            manager: {
              title: "المدير",
              subtitle: "",
              description: "يراقب الأداء، يرصد الأنماط والشذوذ، ويعتمد مسارات العمل على مدار الساعة.",
            },
            liveAgentView: "[عرض الوكيل المباشر]",
            processing: "جاري المعالجة...",
          },

          // Integrations Section
          integrations: {
            title: "هذه ليست أتمتة تقليدية؛",
            titleRest: "بل منظومة رقمية متكاملة.",
            subtitle: "موثوق من قِبل أكثر الفرق ابتكارًا في العالم",
          },

          // Why AI with Attitude Section
          whyAI: {
            title: "لماذا الذكاء الاصطناعي",
            titleHighlight: "بشخصيــة؟",
            description: "أن بيئات العمل تحتاج أكثر من تفاعل لطيف. تحتاج أنظمة:",
            point1Title: "• تتخذ موقفاً واضحاً:",
            point1Text: "عند عدم تحقق شرط الجودة، يرفض النظام الانتقال للمرحلة التالية.",
            point2Title: "• تتحمل المسؤولية:",
            point2Text: " لا تكتفي بالتنبيه؛ بل تُكمل الإجراء حتى حلّ الحالة وإغلاقها.",
            point3Title: "• تتوسع دون المساس بالمعايير:",
            point3Text: " سواء تمت مراجعة 10 عناصر أو 10,000، تبقى القواعد ثابتة.",
          },

          // Final CTA Section
          cta: {
            title: " تحديات أعمالك واقعية. وبرمجياتك",
            titleHighlight: " يجب أن ترتقي اليها.",
            titleRest: "",
            description: "تجاوز مرحلة الوكلاء البسطاء. اعتمد نظاماً تشغيلياً قائماً على الوكلاء يتولّى التنفيذ والحوكمة.",
            button: "صمّم نظامك",
            footer: "لا حاجة لربط معقد. نعمل بجانب أنظمتك الحالية.",
          },
        },
      },
    },
  });

export default i18n;
