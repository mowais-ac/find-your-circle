/**
 * All user-facing strings in English and Arabic (Modern Standard Arabic, Google Translate style).
 * Keys are used with useTranslations(); when locale is "ar", Arabic text is shown.
 */
export type Locale = "en" | "ar";

export const translations: Record<Locale, Record<string, string>> = {
  en: {
    "brand.name": "Circle Society",
    // Nav & Header
    "nav.about": "ABOUT",
    "nav.stories": "Stories",
    "nav.store": "STORE",
    "nav.contactUs": "Contact Us",
    "nav.download": "Download",
    "nav.blogs": "Blogs",
    "nav.eng": "Eng",
    "nav.aria.language": "Language",
    "nav.aria.menuOpen": "Open menu",
    "nav.aria.menuClose": "Close menu",

    // Hero
    "hero.enterCircle": "Enter the Circle",
    "hero.clickToBegin": "Click to begin your journey",
    "hero.yourSocialLife": "YOUR SOCIAL LIFE",
    "hero.allInOneApp": "ALL IN ONE APP",
    "hero.discoverTagline":
      "Discover events, communities, and people around you, through shared experiences.",
    "hero.downloadIos": "Download for iOS",
    "hero.downloadAndroid": "Download for Android",

    // Where Real Connections
    "connections.title": "Where real",
    "connections.highlight": "connections",
    "connections.suffix": "come to life",

    // Who We Are
    "whoWeAre.heading": "Who we are",
    "whoWeAre.title": "A Social Hub for Everyday Life",
    "whoWeAre.desc":
      "Circle Society helps people discover communities, attend local events, and build meaningful social connections. Whether you're new to a city, exploring interests, or looking for real-world activities — this is where social life begins.",

    // Easy & Safe Features (What You Can Do)
    "features.whatYouCanDo": "What You Can Do on",
    "features.theCircleSociety": "The Circle Society",
    "features.joinCommunities": "Join Communities",
    "features.joinCommunitiesDesc":
      "Discover groups around shared interests, passions, and lifestyles.",
    "features.attendEvents": "Attend Events",
    "features.attendEventsDesc":
      "From small meetups to large gatherings — online discovery, real-life fun.",
    "features.meetNaturally": "Meet Naturally",
    "features.meetNaturallyDesc":
      "Connections happen through shared moments, not forced matching.",

    // How Circle Society Works
    "howItWorks.title": "How Circle Society Works",
    "howItWorks.discoverActivities": "Discover Activities",
    "howItWorks.discoverActivitiesDesc":
      "Take our fun quiz, no boring questions. Just tell us what lights you up: Travel? Dogs? Memes?",
    "howItWorks.joinCommunity": "Join a Community or Event",
    "howItWorks.joinCommunityDesc":
      "Our matching engine compares your vibe with everyone else's to find the strongest spark.",
    "howItWorks.buildConnections": "Build Real Connections",
    "howItWorks.buildConnectionsDesc":
      "No swiping. No awkward intros. Just show up and see who you matched with instantly.",

    // Statistics
    "stats.active": "Active",
    "stats.members": "Members",
    "stats.membersDesc": "Active across cities and interest-based communities.",
    "stats.communities": "communities",
    "stats.communitiesDesc":
      "From fitness and food to faith, family, and business.",
    "stats.eventsHosted": "Events Hosted",
    "stats.eventsHostedDesc":
      "Events, meetups, and experiences happening every day.",

    // Faith Communities
    "faith.title": "Communities Built on Faith & Real Life",
    "faith.desc":
      "Circle Society connects people through faith-based groups, events, and shared interests in real life.",

    // Find Your People
    "findYourPeople.title": "Find Your People. Do What You Love.",
    "findYourPeople.desc1":
      "Circle Society is built around activities, not algorithms.",
    "findYourPeople.desc2":
      "Join communities, attend local events, and connect naturally through what you enjoy doing in real life.",
    "findYourPeople.bikeTrips": "Bike Trips",
    "findYourPeople.hiking": "Hiking & Trekking",
    "findYourPeople.gymCrew": "Gym Crew",
    "findYourPeople.carEnthusiasts": "Car Enthusiasts",

    // Testimonials
    "testimonials.label": "Testimonials",
    "testimonials.title": "Real Stories From Real People",
    "testimonials.adeelNameLocation": "Adeel, Dubai",
    "testimonials.nouraNameLocation": "Noura, Abu Dhabi",
    "testimonials.markNameLocation": "Mark, London",
    "testimonials.adeelRole": "Joined a Fitness & Community Group",
    "testimonials.adeelQuote":
      "I didn't want another social app. I wanted people who actually show up. Circle Society helped me find a local community that meets weekly. It feels real, not fanced.",
    "testimonials.nouraRole": "Community Member",
    "testimonials.nouraQuote":
      "It feels safe because you meet through shared interests.",
    "testimonials.markRole": "Event Host",
    "testimonials.markQuote":
      "The events are what make this different. From art meetups to group dinners, everything is built around real activities. You meet people naturally.",

    // Video section
    "video.title": "Your social life, all in one place",
    "video.subtitle":
      "Discover events, communities, and people around you — all through shared activities.",

    // Download section (alt text only; image is SVG)
    "download.alt": "Download The App Now",

    // Footer
    "footer.tagline":
      "Your social life, all in one app. Discover events, communities, and people around you.",
    "footer.contactUs": "Contact Us",
    "footer.quickLink": "Quick Link",
    "footer.home": "Home",
    "footer.about": "About",
    "footer.stories": "Stories",
    "footer.store": "Store",
    "footer.subscribe": "Subscribe",
    "footer.subscribeDesc":
      "Don't miss to subscribe to our new feeds, kindly fill the form below.",
    "footer.emailPlaceholder": "Email Address",
    "footer.aria.subscribe": "Subscribe",
    "footer.followUs": "Follow us",
    "footer.rights": "All rights reserved",
    "footer.circleSociety": "Circle Society",
    "footer.terms": "Terms & Conditions",
    "footer.privacy": "Privacy Policy",
    "footer.refundPolicy": "Refund & Cancellation Policy",

    // Blog
    "blog.title": "Blog",
    "blog.subtitle":
      "Ideas, stories, and updates from the Circle — community tips, event highlights, and how we're building real connections.",
    "blog.readMore": "Read more",
    "blog.minRead": "min read",
    "blog.backToBlog": "Back to Blog",
    "blog.noPosts": "No posts yet. Check back soon.",
    "blog.latestPosts": "Latest from the Circle",
    "blog.ctaTitle": "Stay in the loop",
    "blog.ctaDesc":
      "Get the app for events, communities, and updates — all in one place.",
    "blog.ctaButton": "Get the app",
    "blog.post1Title": "How to Find Your Community in a New City",
    "blog.post1Excerpt":
      "Moving to a new place? Here’s how Circle Society helps you discover local events, faith groups, and people who share what you care about.",
    "blog.post2Title": "Why Real-Life Events Beat Endless Scrolling",
    "blog.post2Excerpt":
      "From meetups to workshops — why showing up in person still makes the best connections.",
    "blog.post3Title": "Building Faith-Based Communities That Last",
    "blog.post3Excerpt":
      "How we bring together faith communities and local groups in one place for meaningful, in-person connection.",
    "blog.post4Title": "5 Types of Events That Bring People Together",
    "blog.post4Excerpt":
      "Explore the kinds of gatherings that create real bonds: from fitness and food to culture and conversation.",
    "blog.post5Title": "From First Event to Real Friends",
    "blog.post5Excerpt":
      "Stories and tips on turning a single meetup into lasting friendships and a real social circle.",
    "blog.post6Title": "Safe and Easy: How We Design for Trust",
    "blog.post6Excerpt":
      "How Circle Society keeps discovery safe and simple so you can focus on showing up and connecting.",
    "blog.post1Body2":
      "Whether you're into fitness, faith, food, or finding your crew — the app brings events and communities into one feed. You can browse what's happening near you, join groups that match your interests, and sign up for meetups without the guesswork.",
    "blog.post1Body3":
      "The best part? Everything leads to real-life connection. No endless DMs. You show up, you meet people who showed up too, and you build from there. Download the app and see what's happening in your city this week.",
    "blog.post2Body2":
      "Algorithms can suggest friends, but shared experiences create them. When you attend a workshop, a dinner, or a local run, you're already in the same room with people who chose to be there. That shared choice is a better starting point than a profile swipe.",
    "blog.post2Body3":
      "Circle Society is built around this idea: discover events and communities first, then connect with the people you meet. Try it for your next weekend — find one event, show up, and see who you meet.",
    "blog.post3Body2":
      "We don't replace your local mosque, church, or community centre — we help more people find them. Events and groups are organised by real communities, so you're joining something that already exists and grows through its members.",
    "blog.post3Body3":
      "If you've been looking for a faith-based or values-driven circle, the app makes it easier to discover what's near you and to show up in person. Real connection starts when you're in the same room.",
    "blog.post4Body2":
      "Think workshops and skill-sharing, social dinners and food meetups, fitness and outdoor activities, culture and arts, and casual hangouts. Each type attracts different people and creates different kinds of bonds — but they all work best when they happen in real life.",
    "blog.post4Body3":
      "In the Circle Society app you can filter by what you like and when you're free. Pick one type to start, join an event, and see how it feels. Most of our members say the first event is the one that changes the game.",
    "blog.post5Body2":
      "It often starts with one event: you go, you talk to a few people, and maybe you stay in touch. Then you show up again. Over time, the same faces become familiar, and familiar faces become friends. That's how circles are built — not in one click, but over shared moments.",
    "blog.post5Body3":
      "If you're new to a city or just want to expand your circle, try this: find one recurring event or community in the app, go once, then go again. The rest tends to follow.",
    "blog.post6Body2":
      "We focus on clear event details, real organisers, and in-person meetups. You decide what you want to join and when. There's no pressure to match or message — the goal is to get you from the screen to the room.",
    "blog.post6Body3":
      "We're always improving how we surface events and communities so you can discover without overwhelm. Download the app and explore what's happening near you in a safe, simple way.",

    // Contact form
    "form.name": "Name",
    "form.email": "Email",
    "form.phone": "Phone",
    "form.phoneOptional": "(optional)",
    "form.message": "Message",
    "form.placeholderName": "Your name",
    "form.placeholderEmail": "you@example.com",
    "form.placeholderPhone": "+971 50 123 4567",
    "form.placeholderMessage": "How can we help?",
    "form.sendMessage": "Send message",
    "form.sending": "Sending…",
    "form.success":
      "Thanks for reaching out. We'll get back to you within 24–48 hours.",
    "form.error":
      "Something went wrong. Please try again or email us directly.",
    "form.errorNameRequired": "Name is required",
    "form.errorEmailRequired": "Email is required",
    "form.errorEmailInvalid": "Enter a valid email",
    "form.errorPhoneRequired": "Phone number is required",
    "form.errorReasonRequired": "Please select a reason",
    "form.errorMessageRequired": "Message is required",
    "form.reason": "Reason for Contact",
    "form.reasonPlaceholder": "Select a reason",

    // Contact Us page
    "contact.title": "Contact Us",
    "contact.subtitle":
      "Questions, feedback, or want to bring your community to Circle Society? We'd love to hear from you.",
    "contact.sendMessageTitle": "Send a message",
    "contact.sendMessageDesc":
      "Fill out the form below and we'll get back to you within 24–48 hours.",
    "contact.emailLabel": "Email",
    "contact.supportEmail": "support@circlesociety.ae",

    // Store page
    "store.title": "Store",
    "store.subtitle": "Explore merchandise and more from Circle Society.",
    "store.shop": "Shop",
    "store.comingSoon": "Content coming soon.",

    // Terms & Conditions (summary keys for policy pages)
    "terms.title": "Terms & Conditions",
    "terms.lastUpdated": "Last Updated:",
    "terms.feb2026": "February 2026",
    "terms.welcome": "Welcome to",
    "terms.welcomeDesc":
      "By accessing or using our website and mobile application, you agree to be bound by the following Terms & Conditions. If you do not agree, please refrain from using our services.",
    "terms.platformOverview": "1. Platform Overview",
    "terms.platformOverviewDesc":
      "Circle Society is a community-based platform that allows users to create profiles, join communities, participate in events, and engage in paid and free activities. Some services offered on the platform may require payment.",
    "terms.userEligibility": "2. User Eligibility",
    "terms.userEligibility1": "Users must be at least 18 years old.",
    "terms.userEligibility2":
      "Users are responsible for ensuring the accuracy of the information provided during registration.",
    "terms.userEligibility3":
      "Circle Society reserves the right to approve, suspend, or terminate accounts at its discretion.",
    "terms.userResponsibilities": "3. User Responsibilities",
    "terms.userResp1":
      "Users must not engage in illegal, abusive, or harmful activities.",
    "terms.userResp2":
      "Events, profiles, and content are subject to admin review and approval.",
    "terms.userResp3":
      "Misuse of the platform may result in account suspension or termination.",
    "terms.payments": "4. Payments & Transactions",
    "terms.payments1":
      "Payments for events, memberships, or activities are processed through secure third-party payment gateways.",
    "terms.payments2": "Circle Society does not store card or banking details.",
    "terms.payments3":
      "All prices are displayed in AED unless otherwise stated.",
    "terms.events": "5. Events & Communities",
    "terms.events1":
      "Event organizers are responsible for the accuracy of event information.",
    "terms.events2":
      "Circle Society is not responsible for event cancellations, changes, or user disputes but may assist in resolution where possible.",
    "terms.ip": "6. Intellectual Property",
    "terms.ipDesc":
      "All content, branding, and platform functionality belong to Circle Society and may not be copied or reused without written permission.",
    "terms.liability": "7. Limitation of Liability",
    "terms.liabilityDesc":
      "Circle Society shall not be liable for any indirect, incidental, or consequential damages arising from platform usage.",
    "terms.governingLaw": "8. Governing Law",
    "terms.governingLawDesc":
      "These Terms are governed by the laws of the United Arab Emirates.",
    "terms.companyInfo": "Company Information",
    "terms.address":
      "339, Building B, Jarn Yafour, Al Mafraq Industrial, Abu Dhabi",

    // Privacy Policy
    "privacy.title": "Privacy Policy",
    "privacy.intro":
      "Circle Society values your privacy and is committed to protecting your personal data.",
    "privacy.collect": "1. Information We Collect",
    "privacy.collect1": "Personal details such as name, email, phone number",
    "privacy.collect2": "Profile information",
    "privacy.collect3": "Payment transaction references (no card details)",
    "privacy.collect4": "Device and usage data",
    "privacy.use": "2. How We Use Information",
    "privacy.use1": "To provide and improve platform services",
    "privacy.use2": "To process payments and bookings",
    "privacy.use3": "To communicate updates, notifications, and support",
    "privacy.use4": "To ensure platform security and compliance",
    "privacy.protection": "3. Data Protection",
    "privacy.protection1": "All data is stored securely.",
    "privacy.protection2": "Access is limited to authorized personnel only.",
    "privacy.protection3":
      "Industry-standard security measures are implemented.",
    "privacy.thirdParty": "4. Third-Party Services",
    "privacy.thirdPartyIntro": "We may share limited information with:",
    "privacy.thirdParty1": "Payment gateways",
    "privacy.thirdParty2": "Analytics services",
    "privacy.thirdParty3": "Cloud hosting providers",
    "privacy.thirdPartyOutro": "Only for operational purposes.",
    "privacy.userRights": "5. User Rights",
    "privacy.userRightsDesc":
      "Users may request access, correction, or deletion of their personal data by contacting support.",
    "privacy.contact": "6. Contact",

    // Refund & Cancellation
    "refund.title": "Refund & Cancellation Policy",
    "refund.section1": "1. Event & Activity Payments",
    "refund.s1p1":
      "Payments made for events, memberships, or activities are generally",
    "refund.nonRefundable": "non-refundable",
    "refund.s1p1b": "unless otherwise stated.",
    "refund.s1p2": "Refunds may be considered only if:",
    "refund.s1li1": "An event is cancelled by the organizer",
    "refund.s1li2": "A technical error results in duplicate payment",
    "refund.section2": "2. Refund Requests",
    "refund.s2li1": "Refund requests must be submitted within",
    "refund.s2li1b": "7 days",
    "refund.s2li1c": "of payment.",
    "refund.s2li2":
      "Approved refunds will be processed to the original payment method within",
    "refund.s2li2b": "7–14 business days,",
    "refund.s2li2c": "subject to bank processing times.",
    "refund.section3": "3. Event Cancellations",
    "refund.s3p":
      "If an event is cancelled by the organizer, eligible users may receive a refund or credit at Circle Society's discretion.",
    "refund.section4": "4. No-Show Policy",
    "refund.s4p":
      "Failure to attend an event without prior cancellation does not qualify for a refund.",
    "refund.section5": "5. Platform Rights",
    "refund.s5p":
      "Circle Society reserves the right to deny refund requests that do not meet the policy criteria.",

    "about.heroHeading": "Where real connections happen",
    "about.heroDesc":
      "Circle Society is where your social life comes together — discover events, join communities, and connect with people around you through shared experiences.",
    "about.whoWeAreDesc":
      "We believe everyone deserves a place to belong. Circle Society brings events, faith communities, and local groups into one app so you can find your people and show up — in person — for what matters.",
    "about.whoWeAreDesc2":
      "We're building a home for real connections: discover what's happening near you, join circles that share your values, and create moments that matter.",
    "about.title": "About Us",
    "about.whoWeAreTitle": "Who We Are",
    "about.whoWeAreSubtitle": "A place where everyone belongs",
    "about.whatWeOfferTitle": "What We Offer",
    "about.whatWeOffer1":
      "Events & meetups — Find and join events near you, from workshops to social gatherings.",
    "about.whatWeOffer2":
      "Communities & circles — Connect with groups that share your interests and values.",
    "about.whatWeOffer3":
      "Your social life, one app — Safe, easy discovery so you can focus on showing up.",
    "about.missionTitle": "Our Mission",
    "about.missionDesc":
      "To bring people together in real life. We build a platform where everyone can discover local events, join communities that matter to them, and form lasting connections through shared experiences — not screens.",
    "about.visionTitle": "Our Vision",
    "about.visionDesc":
      "A world where no one has to feel alone in their city. Circle Society is the place where your next friend, community, or adventure is one tap away.",
    "about.whyChooseTitle": "Why Circle Society",
    "about.whyChooseSubtitle":
      "We're different by design — built for real life, not endless scrolling.",
    "about.whyRealConnections": "Real connections",
    "about.whyRealConnectionsDesc":
      "Meet through events and communities. No swiping, no algorithms — just shared interests and real moments.",
    "about.whySafeEasy": "Safe & easy",
    "about.whySafeEasyDesc":
      "Verified communities and clear event details. You know what you're joining and who you're meeting.",
    "about.whyOneApp": "One app for social life",
    "about.whyOneAppDesc":
      "Events, faith groups, hobbies, and local circles in one place. Your calendar and your community, together.",
    "about.joinCircleTitle": "Join the Circle",
    "about.joinCircleDesc":
      "Your next community, event, or connection is waiting. Download the app and start showing up — in person.",
    "about.joinCircleCta": "Download the app",
    "stories.realCouplesP1":
      "Every match has a story. Here we share how people met their person on Circle Society — from the first message to the first date, and the moments that made them choose each other.",
    "stories.realCouplesP2":
      "Whether you're looking for something serious or taking it slow, these stories show what's possible when you put yourself out there and find your circle.",
    "stories.comingSoonDesc":
      "We're gathering stories from couples who met on Circle Society. If you found your person here — whether it's a new spark or a lasting relationship — we'd love to hear from you. Check back soon or join the app to share your story.",
    "stories.loveStoriesTitle": "Love Stories",
    "stories.loveStoriesSubtitle":
      "Here, people from our community share their own stories — how they met, what connected them, and the moments that mattered.",
    "stories.heroExplain":
      "Real members, real voices. Love, friendship, and everything in between — in their own words.",
    "stories.realCouplesTitle": "Real Couples, Real Love",
    "stories.moreComingSoon": "More love stories coming soon",
    "stories.heroHeading": "Real stories from real people",
    "stories.heroLabel": "Stories",
    "stories.connectionsTitle": "More than romance",
    "stories.connectionsDesc":
      "Circle Society is where connections start — at events, in communities, and through shared moments. Many found love here; others found best friends, adventure buddies, or their next community. Every story is different.",
    "stories.shareTitle": "Share your story",
    "stories.shareDesc":
      "Met someone special on Circle Society? We'd love to hear from you. Your story could inspire others to find their circle.",
    "stories.shareCta": "Join the app to share",
  },
  ar: {
    // Nav & Header
    "nav.about": "من نحن",
    "nav.stories": "قصص",
    "nav.store": "المتجر",
    "nav.contactUs": "اتصل بنا",
    "nav.download": "تنزيل",
    "nav.blogs": "المدونة",
    "nav.eng": "إنجليزي",
    "nav.aria.language": "اللغة",
    "nav.aria.menuOpen": "فتح القائمة",
    "nav.aria.menuClose": "إغلاق القائمة",

    "hero.enterCircle": "ادخل الدائرة",
    "hero.clickToBegin": "انقر لبدء رحلتك",
    "hero.yourSocialLife": "حياتك الاجتماعية",
    "hero.allInOneApp": "كل ذلك في تطبيق\u00A0واحد",
    "hero.discoverTagline":
      "اكتشف الفعاليات والمجتمعات والأشخاص من حولك من خلال التجارب المشتركة.",
    "hero.downloadIos": "تنزيل لـ iOS",
    "hero.downloadAndroid": "تنزيل لـ أندرويد",

    "brand.name": "مجتمع الدائرة",
    "connections.title": "حيث تأتي",
    "connections.highlight": "الروابط الحقيقية",
    "connections.suffix": "إلى الحياة",

    "whoWeAre.heading": "من نحن",
    "whoWeAre.title": "مركز اجتماعي للحياة اليومية",
    "whoWeAre.desc":
      "يساعد مجتمع الدائرة الأشخاص على اكتشاف المجتمعات وحضور الفعاليات المحلية وبناء روابط اجتماعية ذات معنى. سواء كنت جديداً في المدينة أو تستكشف اهتماماتك أو تبحث عن أنشطة حقيقية — هنا تبدأ الحياة الاجتماعية.",

    "features.whatYouCanDo": "ما الذي يمكنك فعله على",
    "features.theCircleSociety": "مجتمع الدائرة",
    "features.joinCommunities": "انضم إلى المجتمعات",
    "features.joinCommunitiesDesc":
      "اكتشف مجموعات حول اهتمامات وشغف وأنماط حياة مشتركة.",
    "features.attendEvents": "حضور الفعاليات",
    "features.attendEventsDesc":
      "من اللقاءات الصغيرة إلى التجمعات الكبيرة — اكتشاف عبر الإنترنت ومتعة حقيقية.",
    "features.meetNaturally": "تعرف بشكل طبيعي",
    "features.meetNaturallyDesc":
      "تحدث الروابط من خلال اللحظات المشتركة وليس المطابقة القسرية.",

    "howItWorks.title": "كيف يعمل مجتمع الدائرة",
    "howItWorks.discoverActivities": "اكتشف الأنشطة",
    "howItWorks.discoverActivitiesDesc":
      "اخضع لاختبارنا الممتع، بدون أسئلة مملة. أخبرنا فقط ما يثير حماسك: السفر؟ الكلاب؟ الميمات؟",
    "howItWorks.joinCommunity": "انضم إلى مجتمع أو فعالية",
    "howItWorks.joinCommunityDesc":
      "تقارن آلية المطابقة لدينا بينك وبين الآخرين لإيجاد أقوى توافق.",
    "howItWorks.buildConnections": "ابنِ روابط حقيقية",
    "howItWorks.buildConnectionsDesc":
      "بدون سحب. بدون مقدّمات محرجة. فقط احضر وشاهد من تطابقت معه فوراً.",

    "stats.active": "نشط",
    "stats.members": "عضو",
    "stats.membersDesc": "نشطون في مدن ومجتمعات قائمة على الاهتمامات.",
    "stats.communities": "مجتمع",
    "stats.communitiesDesc":
      "من اللياقة والطعام إلى الإيمان والعائلة والأعمال.",
    "stats.eventsHosted": "فعالية مُنظّمة",
    "stats.eventsHostedDesc": "فعاليات ولقاءات وتجارب تحدث كل يوم.",

    "faith.title": "مجتمعات مبنية على الإيمان والحياة الحقيقية",
    "faith.desc":
      "يربط مجتمع الدائرة الأشخاص من خلال مجموعات قائمة على الإيمان والفعاليات والاهتمامات المشتركة في الحياة الحقيقية.",

    "findYourPeople.title": "اعثر على أصدقائك. افعل ما تحب.",
    "findYourPeople.desc1": "مجتمع الدائرة مبني حول الأنشطة وليس الخوارزميات.",
    "findYourPeople.desc2":
      "انضم إلى المجتمعات، احضر الفعاليات المحلية، وتواصل بشكل طبيعي من خلال ما تستمتع بفعله في الحياة الحقيقية.",
    "findYourPeople.bikeTrips": "رحلات الدراجات",
    "findYourPeople.hiking": "المشي لمسافات طويلة",
    "findYourPeople.gymCrew": "فريق الجيم",
    "findYourPeople.carEnthusiasts": "عشاق السيارات",

    "testimonials.label": "شهادات",
    "testimonials.title": "قصص حقيقية من أناس حقيقيين",
    "testimonials.adeelNameLocation": "عادل، دبي",
    "testimonials.nouraNameLocation": "نورة، أبوظبي",
    "testimonials.markNameLocation": "مارك، لندن",
    "testimonials.adeelRole": "انضم إلى مجموعة اللياقة والمجتمع",
    "testimonials.adeelQuote":
      "لم أرد تطبيقاً اجتماعياً آخر. أردت أناساً يحضرون فعلاً. ساعدني مجتمع الدائرة في إيجاد مجتمع محلي يجتمع أسبوعياً. يشعرك بأنه حقيقي.",
    "testimonials.nouraRole": "عضو في المجتمع",
    "testimonials.nouraQuote":
      "تشعر بالأمان لأنك تلتقي من خلال اهتمامات مشتركة.",
    "testimonials.markRole": "مضيف فعاليات",
    "testimonials.markQuote":
      "الفعاليات هي ما يميز هذا. من لقاءات الفن إلى العشاء الجماعي، كل شيء مبني حول أنشطة حقيقية. تلتقي بالناس بشكل طبيعي.",

    "video.title": "حياتك الاجتماعية، كلها في مكان واحد",
    "video.subtitle":
      "اكتشف الفعاليات والمجتمعات والأشخاص من حولك — كل ذلك من خلال الأنشطة المشتركة.",

    "download.alt": "تنزيل التطبيق الآن",

    "footer.tagline":
      "حياتك الاجتماعية، كلها في تطبيق واحد. اكتشف الفعاليات والمجتمعات والأشخاص من حولك.",
    "footer.contactUs": "اتصل بنا",
    "footer.quickLink": "روابط سريعة",
    "footer.home": "الرئيسية",
    "footer.about": "من نحن",
    "footer.stories": "قصص",
    "footer.store": "المتجر",
    "footer.subscribe": "اشترك",
    "footer.subscribeDesc":
      "لا تفوت الاشتراك في موجزنا الجديد، يرجى ملء النموذج أدناه.",
    "footer.emailPlaceholder": "البريد الإلكتروني",
    "footer.aria.subscribe": "اشترك",
    "footer.followUs": "تابعنا",
    "footer.rights": "جميع الحقوق محفوظة",
    "footer.circleSociety": "مجتمع الدائرة",
    "footer.terms": "الشروط والأحكام",
    "footer.privacy": "سياسة الخصوصية",
    "footer.refundPolicy": "سياسة الاسترداد والإلغاء",

    // Blog
    "blog.title": "المدونة",
    "blog.subtitle":
      "أفكار وقصص وتحديثات من الدائرة — نصائح للمجتمع، أبرز الفعاليات، وكيف نبني روابط حقيقية.",
    "blog.readMore": "اقرأ المزيد",
    "blog.minRead": "دقيقة قراءة",
    "blog.backToBlog": "العودة إلى المدونة",
    "blog.noPosts": "لا توجد مقالات بعد. تفضل بالعودة قريباً.",
    "blog.latestPosts": "الأحدث من الدائرة",
    "blog.ctaTitle": "ابق على اطلاع",
    "blog.ctaDesc":
      "احصل على التطبيق للفعاليات والمجتمعات والتحديثات — كل ذلك في مكان واحد.",
    "blog.ctaButton": "احصل على التطبيق",
    "blog.post1Title": "كيف تجد مجتمعك في مدينة جديدة",
    "blog.post1Excerpt":
      "انتقلت لمكان جديد؟ إليك كيف يساعدك مجتمع الدائرة في اكتشاف الفعاليات المحلية ومجتمعات الإيمان والأشخاص الذين يشاركونك ما تهتم به.",
    "blog.post2Title": "لماذا تفوق الفعاليات الحقيقية التمرير اللانهائي",
    "blog.post2Excerpt":
      "من اللقاءات إلى ورش العمل — لماذا الحضور شخصياً لا يزال يصنع أفضل الروابط.",
    "blog.post3Title": "بناء مجتمعات إيمان تدوم",
    "blog.post3Excerpt":
      "كيف نجمع مجتمعات الإيمان والمجموعات المحلية في مكان واحد للتواصل الحقيقي وجهاً لوجه.",
    "blog.post4Title": "٥ أنواع من الفعاليات تجمع الناس",
    "blog.post4Excerpt":
      "اكتشف أنواع اللقاءات التي تصنع روابط حقيقية: من اللياقة والطعام إلى الثقافة والحوار.",
    "blog.post5Title": "من أول فعالية إلى أصدقاء حقيقيين",
    "blog.post5Excerpt":
      "قصص ونصائح لتحويل لقاء واحد إلى صداقات دائمة ودائرة اجتماعية حقيقية.",
    "blog.post6Title": "آمن وسهل: كيف نصمم من أجل الثقة",
    "blog.post6Excerpt":
      "كيف يحافظ مجتمع الدائرة على الاكتشاف آمناً وبسيطاً حتى تركز على الحضور والتواصل.",
    "blog.post1Body2":
      "سواء كنت مهتماً باللياقة أو الإيمان أو الطعام أو إيجاد رفاقك — التطبيق يجمع الفعاليات والمجتمعات في موجز واحد. يمكنك تصفح ما يحدث قربك، والانضمام لمجموعات تتناسب مع اهتماماتك، والتسجيل في لقاءات دون تخمين.",
    "blog.post1Body3":
      "الأفضل؟ كل شيء يؤدي إلى تواصل حقيقي وجهاً لوجه. لا رسائل لا نهائية. تحضر، تلتقي بأشخاص حضروا أيضاً، وتبني من هناك. حمّل التطبيق واكتشف ما يحدث في مدينتك هذا الأسبوع.",
    "blog.post2Body2":
      "الخوارزميات قد تقترح أصدقاء، لكن التجارب المشتركة تصنعهم. عندما تحضر ورشة أو عشاء أو جولة محلية، أنت بالفعل في نفس الغرفة مع أشخاص اختاروا أن يكونوا هناك. ذلك الاختيار المشترك نقطة انطلاق أفضل من تمريرة ملف شخصي.",
    "blog.post2Body3":
      "مجتمع الدائرة مبني على هذه الفكرة: اكتشف الفعاليات والمجتمعات أولاً، ثم تواصل مع من تلتقي بهم. جربها في عطلة نهاية الأسبوع القادمة — اعثر على فعالية واحدة، احضر، وانظر من تلتقي.",
    "blog.post3Body2":
      "نحن لا نستبدل مسجدك أو كنيستك أو مركز مجتمعك — نساعد المزيد من الناس على إيجادهم. الفعاليات والمجموعات ينظمها مجتمعات حقيقية، لذا أنت تنضم لشيء موجود وينمو عبر أعضائه.",
    "blog.post3Body3":
      "إن كنت تبحث عن دائرة قائمة على الإيمان أو القيم، التطبيق يسهل اكتشاف ما هو قربك والحضور شخصياً. التواصل الحقيقي يبدأ عندما تكون في نفس الغرفة.",
    "blog.post4Body2":
      "فكر في ورش العمل وتبادل المهارات، والعشاءات الاجتماعية ولقاءات الطعام، واللياقة والأنشطة الخارجية، والثقافة والفنون، واللقاءات غير الرسمية. كل نوع يجذب أناساً مختلفين ويخلق روابط مختلفة — لكنها كلها تعمل بشكل أفضل عندما تحدث في الواقع.",
    "blog.post4Body3":
      "في تطبيق مجتمع الدائرة يمكنك التصفية حسب ما تحب ومتى تكون حراً. اختر نوعاً واحداً للبدء، انضم لفعالية، وانظر كيف تشعر. معظم أعضائنا يقولون إن الفعالية الأولى هي التي تغير اللعبة.",
    "blog.post5Body2":
      "غالباً يبدأ بلقاء واحد: تذهب، تتحدث مع بعض الناس، وربما تبقى على تواصل. ثم تحضر مرة أخرى. مع الوقت تصبح الوجوه نفسها مألوفة، والمألوفة أصدقاء. هكذا تُبنى الدوائر — ليس بنقرة واحدة، بل عبر لحظات مشتركة.",
    "blog.post5Body3":
      "إن كنت جديداً في مدينة أو تريد توسيع دائرتك، جرب هذا: اعثر على فعالية أو مجتمع متكرر في التطبيق، اذهب مرة، ثم مرة أخرى. الباقي يأتي تلقائياً.",
    "blog.post6Body2":
      "نركز على تفاصيل فعاليات واضحة ومنظمين حقيقيين ولقاءات شخصية. أنت تقرر ما تريد الانضمام إليه ومتى. لا ضغط للمطابقة أو المراسلة — الهدف هو الانتقال من الشاشة إلى الغرفة.",
    "blog.post6Body3":
      "نحسّن دائماً طريقة عرض الفعاليات والمجتمعات حتى تكتشف دون إرهاق. حمّل التطبيق واستكشف ما يحدث قربك بطريقة آمنة وبسيطة.",

    "form.name": "الاسم",
    "form.email": "البريد الإلكتروني",
    "form.phone": "الهاتف",
    "form.phoneOptional": "(اختياري)",
    "form.message": "الرسالة",
    "form.placeholderName": "اسمك",
    "form.placeholderEmail": "you@example.com",
    "form.placeholderPhone": "+٩٧١ ٥٠ ١٢٣ ٤٥٦٧",
    "form.placeholderMessage": "كيف يمكننا المساعدة؟",
    "form.sendMessage": "إرسال الرسالة",
    "form.sending": "جاري الإرسال…",
    "form.success": "شكراً لتواصلك. سنرد عليك خلال ٢٤–٤٨ ساعة.",
    "form.error": "حدث خطأ ما. يرجى المحاولة مرة أخرى أو مراسلتنا مباشرة.",
    "form.errorNameRequired": "الاسم مطلوب",
    "form.errorEmailRequired": "البريد الإلكتروني مطلوب",
    "form.errorEmailInvalid": "أدخل بريداً إلكترونياً صالحاً",
    "form.errorPhoneRequired": "رقم الهاتف مطلوب",
    "form.errorReasonRequired": "يرجى اختيار سبب التواصل",
    "form.errorMessageRequired": "الرسالة مطلوبة",
    "form.reason": "سبب التواصل",
    "form.reasonPlaceholder": "اختر سبباً",

    "contact.title": "اتصل بنا",
    "contact.subtitle":
      "أسئلة أو ملاحظات أو تريد إحضار مجتمعك إلى مجتمع الدائرة؟ نحب أن نسمع منك.",
    "contact.sendMessageTitle": "إرسال رسالة",
    "contact.sendMessageDesc": "املأ النموذج أدناه وسنرد عليك خلال ٢٤–٤٨ ساعة.",
    "contact.emailLabel": "البريد الإلكتروني",
    "contact.supportEmail": "support@circlesociety.ae",

    "store.title": "المتجر",
    "store.subtitle": "استكشف المنتجات والمزيد من مجتمع الدائرة.",
    "store.shop": "تسوق",
    "store.comingSoon": "المحتوى قريباً.",

    "terms.title": "الشروط والأحكام",
    "terms.lastUpdated": "آخر تحديث:",
    "terms.feb2026": "فبراير ٢٠٢٦",
    "terms.welcome": "مرحباً بك في",
    "terms.welcomeDesc":
      "بالوصول إلى موقعنا أو تطبيقنا الجوال أو استخدامهما، فإنك توافق على الالتزام بالشروط والأحكام التالية. إذا كنت لا توافق، يرجى الامتناع عن استخدام خدماتنا.",
    "terms.platformOverview": "١. نظرة عامة على المنصة",
    "terms.platformOverviewDesc":
      "مجتمع الدائرة منصة قائمة على المجتمع تتيح للمستخدمين إنشاء ملفات وانضمام مجتمعات والمشاركة في فعاليات وأنشطة مدفوعة ومجانية. قد تتطلب بعض الخدمات المقدمة على المنصة الدفع.",
    "terms.userEligibility": "٢. أهلية المستخدم",
    "terms.userEligibility1": "يجب أن يكون المستخدمون بعمر ١٨ عاماً على الأقل.",
    "terms.userEligibility2":
      "المستخدمون مسؤولون عن ضمان دقة المعلومات المقدمة أثناء التسجيل.",
    "terms.userEligibility3":
      "تحتفظ مجتمع الدائرة بحق الموافقة على الحسابات أو تعليقها أو إنهاؤها وفق تقديرها.",
    "terms.userResponsibilities": "٣. مسؤوليات المستخدم",
    "terms.userResp1":
      "يجب ألا يشارك المستخدمون في أنشطة غير قانونية أو مسيئة أو ضارة.",
    "terms.userResp2":
      "الفعاليات والملفات والمحتوى تخضع لمراجعة وموافقة الإدارة.",
    "terms.userResp3":
      "إساءة استخدام المنصة قد تؤدي إلى تعليق الحساب أو إنهائه.",
    "terms.payments": "٤. المدفوعات والمعاملات",
    "terms.payments1":
      "تتم معالجة مدفوعات الفعاليات والعضويات أو الأنشطة عبر بوابات دفع آمنة لجهات خارجية.",
    "terms.payments2": "لا تخزن مجتمع الدائرة تفاصيل البطاقات أو البنوك.",
    "terms.payments3":
      "جميع الأسعار معروضة بالدرهم الإماراتي ما لم يُذكر خلاف ذلك.",
    "terms.events": "٥. الفعاليات والمجتمعات",
    "terms.events1": "منظمو الفعاليات مسؤولون عن دقة معلومات الفعالية.",
    "terms.events2":
      "مجتمع الدائرة غير مسؤولة عن إلغاءات أو تغييرات الفعاليات أو نزاعات المستخدمين ولكن قد تساعد في الحل عند الإمكان.",
    "terms.ip": "٦. الملكية الفكرية",
    "terms.ipDesc":
      "جميع المحتويات والعلامة والوظائف تنتمي إلى مجتمع الدائرة ولا يجوز نسخها أو إعادة استخدامها دون إذن كتابي.",
    "terms.liability": "٧. حد المسؤولية",
    "terms.liabilityDesc":
      "لا تتحمل مجتمع الدائرة أي أضرار غير مباشرة أو عرضية أو تبعية ناتجة عن استخدام المنصة.",
    "terms.governingLaw": "٨. القانون الحاكم",
    "terms.governingLawDesc":
      "تخضع هذه الشروط لقوانين دولة الإمارات العربية المتحدة.",
    "terms.companyInfo": "معلومات الشركة",
    "terms.address": "٣٣٩، مبنى B، جارن يافور، الصناعية المفرق، أبوظبي",

    "privacy.title": "سياسة الخصوصية",
    "privacy.intro":
      "تحترم مجتمع الدائرة خصوصيتك وتلتزم بحماية بياناتك الشخصية.",
    "privacy.collect": "١. المعلومات التي نجمعها",
    "privacy.collect1": "تفاصيل شخصية مثل الاسم والبريد الإلكتروني ورقم الهاتف",
    "privacy.collect2": "معلومات الملف الشخصي",
    "privacy.collect3": "مراجع معاملات الدفع (بدون تفاصيل البطاقة)",
    "privacy.collect4": "بيانات الجهاز والاستخدام",
    "privacy.use": "٢. كيف نستخدم المعلومات",
    "privacy.use1": "لتقديم خدمات المنصة وتحسينها",
    "privacy.use2": "لمعالجة المدفوعات والحجوزات",
    "privacy.use3": "لإبلاغك بالتحديثات والإشعارات والدعم",
    "privacy.use4": " لضمان أمان المنصة والامتثال",
    "privacy.protection": "٣. حماية البيانات",
    "privacy.protection1": "يتم تخزين جميع البيانات بشكل آمن.",
    "privacy.protection2": "الوصول محدود للمصرح لهم فقط.",
    "privacy.protection3": "تُنفذ إجراءات أمنية وفق المعايير الصناعية.",
    "privacy.thirdParty": "٤. خدمات الطرف الثالث",
    "privacy.thirdPartyIntro": "قد نشارك معلومات محدودة مع:",
    "privacy.thirdParty1": "بوابات الدفع",
    "privacy.thirdParty2": "خدمات التحليلات",
    "privacy.thirdParty3": "مزودي الاستضافة السحابية",
    "privacy.thirdPartyOutro": "لأغراض تشغيلية فقط.",
    "privacy.userRights": "٥. حقوق المستخدم",
    "privacy.userRightsDesc":
      "يمكن للمستخدمين طلب الوصول أو التصحيح أو الحذف لبياناتهم الشخصية بالاتصال بالدعم.",
    "privacy.contact": "٦. اتصل بنا",

    "refund.title": "سياسة الاسترداد والإلغاء",
    "refund.section1": "١. مدفوعات الفعاليات والأنشطة",
    "refund.s1p1":
      "المدفوعات الخاصة بالفعاليات أو العضويات أو الأنشطة بشكل عام",
    "refund.nonRefundable": "غير قابلة للاسترداد",
    "refund.s1p1b": "ما لم يُذكر خلاف ذلك.",
    "refund.s1p2": "قد يُنظر في الاسترداد فقط إذا:",
    "refund.s1li1": "ألغى المنظم الفعالية",
    "refund.s1li2": "أدى خطأ تقني إلى دفع مكرر",
    "refund.section2": "٢. طلبات الاسترداد",
    "refund.s2li1": "يجب تقديم طلبات الاسترداد خلال",
    "refund.s2li1b": "٧ أيام",
    "refund.s2li1c": "من الدفع.",
    "refund.s2li2":
      "سيتم معالجة الاستردادات المعتمدة إلى طريقة الدفع الأصلية خلال",
    "refund.s2li2b": "٧–١٤ يوماً عمل،",
    "refund.s2li2c": "حسب أوقات معالجة البنك.",
    "refund.section3": "٣. إلغاء الفعاليات",
    "refund.s3p":
      "إذا ألغى المنظم الفعالية، قد يحصل المستخدمون المؤهلون على استرداد أو رصيد وفق تقدير مجتمع الدائرة.",
    "refund.section4": "٤. سياسة عدم الحضور",
    "refund.s4p": "عدم حضور الفعالية دون إلغاء مسبق لا يؤهل للاسترداد.",
    "refund.section5": "٥. حقوق المنصة",
    "refund.s5p":
      "تحتفظ مجتمع الدائرة بحق رفض طلبات الاسترداد التي لا تستوفي معايير السياسة.",

    "about.heroHeading": "حيث تحدث الروابط الحقيقية",
    "about.heroDesc":
      "مجتمع الدائرة هو حيث تجتمع حياتك الاجتماعية — اكتشف الفعاليات، انضم إلى المجتمعات، وتواصل مع من حولك من خلال التجارب المشتركة.",
    "about.whoWeAreDesc":
      "نؤمن بأن الجميع يستحق مكاناً ينتمي إليه. مجتمع الدائرة تجمع الفعاليات ومجتمعات الإيمان والمجموعات المحلية في تطبيق واحد لتجد أصدقاءك وتحضر — شخصياً — لما يهم.",
    "about.whoWeAreDesc2":
      "نبني بيتاً للروابط الحقيقية: اكتشف ما يحدث قربك، انضم إلى دوائر تشاركك قيمك، واصنع لحظات ذات معنى.",
    "about.title": "من نحن",
    "about.whoWeAreTitle": "من نحن",
    "about.whoWeAreSubtitle": "مكان ينتمي إليه الجميع",
    "about.whatWeOfferTitle": "ماذا نقدم",
    "about.whatWeOffer1":
      "فعاليات ولقاءات — اكتشف وانضم لفعاليات قربك، من ورش عمل إلى تجمعات اجتماعية.",
    "about.whatWeOffer2":
      "مجتمعات ودوائر — تواصل مع مجموعات تشاركك اهتماماتك وقيمك.",
    "about.whatWeOffer3":
      "حياتك الاجتماعية في تطبيق واحد — اكتشاف آمن وسهل لتتركّز على الحضور.",
    "about.missionTitle": "مهمتنا",
    "about.missionDesc":
      "جمع الناس في الحياة الحقيقية. نبني منصة يكتشف فيها الجميع الفعاليات المحلية وينضمون لمجتمعات تهمهم ويبنون روابط دائمة من خلال تجارب مشتركة — وليس الشاشات.",
    "about.visionTitle": "رؤيتنا",
    "about.visionDesc":
      "عالم لا يشعر فيه أحد بالوحدة في مدينته. مجتمع الدائرة هو المكان الذي يكون فيه صديقك أو مجتمعك أو مغامرتك القادمة بضغطة واحدة.",
    "about.whyChooseTitle": "لماذا مجتمع الدائرة",
    "about.whyChooseSubtitle":
      "نختلف بالتصميم — مبني للحياة الحقيقية، وليس التمرير اللانهائي.",
    "about.whyRealConnections": "روابط حقيقية",
    "about.whyRealConnectionsDesc":
      "التقِ من خلال الفعاليات والمجتمعات. بدون سحب أو خوارزميات — فقط اهتمامات مشتركة ولحظات حقيقية.",
    "about.whySafeEasy": "آمن وسهل",
    "about.whySafeEasyDesc":
      "مجتمعات موثقة وتفاصيل فعاليات واضحة. تعرف ما الذي تنضم إليه ومع من تلتقي.",
    "about.whyOneApp": "تطبيق واحد للحياة الاجتماعية",
    "about.whyOneAppDesc":
      "فعاليات ومجتمعات إيمان وهوايات ودوائر محلية في مكان واحد. تقويمك ومجتمعك معاً.",
    "about.joinCircleTitle": "انضم إلى الدائرة",
    "about.joinCircleDesc":
      "مجتمعك أو فعاليتك أو ارتباطك القادم في انتظارك. حمّل التطبيق وابدأ بالحضور — شخصياً.",
    "about.joinCircleCta": "تنزيل التطبيق",
    "stories.realCouplesP1":
      "كل لقاء له قصة. نشارك هنا كيف التقى الناس بشريكهم على مجتمع الدائرة — من أول رسالة إلى أول موعد، ولحظات اختاروا فيها بعضهم.",
    "stories.realCouplesP2":
      "سواء كنت تبحث عن شيء جاد أو تأخذ الأمور ببطء، هذه القصص تظهر ما هو ممكن عندما تخرج وتجد دائرتك.",
    "stories.comingSoonDesc":
      "نجمع قصصاً من أزواج التقوا على مجتمع الدائرة. إن وجدت شريكك هنا — سواء شرارة جديدة أو علاقة دائمة — نحب أن نسمع منك. عد قريباً أو انضم للتطبيق لمشاركة قصتك.",
    "stories.loveStoriesTitle": "قصص حب",
    "stories.loveStoriesSubtitle":
      "هنا يشارك أفراد مجتمعنا قصصهم — كيف التقوا، وما الذي ربطهم، واللحظات التي كانت مهمة.",
    "stories.heroExplain":
      "أعضاء حقيقيون، أصوات حقيقية. الحب والصداقة وكل ما بينهما — بكلماتهم هم.",
    "stories.realCouplesTitle": "أزواج حقيقيون، حب حقيقي",
    "stories.moreComingSoon": "المزيد من قصص الحب قريباً",
    "stories.heroHeading": "قصص حقيقية من أناس حقيقيين",
    "stories.heroLabel": "قصص",
    "stories.connectionsTitle": "أكثر من الحب",
    "stories.connectionsDesc":
      "مجتمع الدائرة هو حيث تبدأ الروابط — في الفعاليات والمجتمعات ومن خلال اللحظات المشتركة. كثيرون وجدوا الحب هنا؛ وآخرون وجدوا أفضل الأصدقاء أو رفاق المغامرة أو مجتمعهم القادم. كل قصة مختلفة.",
    "stories.shareTitle": "شارك قصتك",
    "stories.shareDesc":
      "التقيت بشخص مميز على مجتمع الدائرة؟ نحب أن نسمع منك. قصتك قد تلهم آخرين لإيجاد دائرتهم.",
    "stories.shareCta": "انضم للتطبيق للمشاركة",
  },
};

export function getTranslation(locale: Locale, key: string): string {
  const dict = translations[locale];
  return dict[key] ?? translations.en[key] ?? key;
}
