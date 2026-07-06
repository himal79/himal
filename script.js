/* ================================================================
   HIMAL THAPA – PORTFOLIO SCRIPT  v2.0
   ──────────────────────────────────────────────────────────────
   ★  EDIT GUIDE  ★
   ─────────────────
   1. SOCIAL CONFIG   → line ~20   (URLs, email, WhatsApp)
   2. TRANSLATIONS    → line ~50   (NP / EN – edit any text here)
   3. TYPED WORDS     → inside TRANSLATIONS, key "typed_words"

   All visible text is driven from TRANSLATIONS; HTML has zero
   hard-coded strings so switching language is instant and you
   only ever edit ONE place.
================================================================ */

'use strict';

/* ================================================================
   ✏  SECTION 1 – SOCIAL CONFIG
   Edit these URLs with your real accounts.
================================================================ */
const SOCIAL = {
  facebook:    'https://facebook.com/thimal522',   // ← real
  youtube:     'https://www.youtube.com/@HimalThapa', // ← real
  tiktok:      'https://tiktok.com/@YOUR_TIKTOK',
  instagram:   'https://instagram.com/YOUR_INSTAGRAM',
  github:      'https://github.com/YOUR_GITHUB',
  linkedin:    'https://linkedin.com/in/YOUR_LINKEDIN',
  email:       'hthapa208@gmail.com',               // ← real
  phone:       '+9779851214522',                    // used for tel: link
  whatsapp:    '+9779851214522',                    // ← real
  whatsappMsg: 'नमस्ते! म हिमाल थापाको पोर्टफोलियोबाट सम्पर्क गर्दैछु।',
};


/* ================================================================
   ✏  SECTION 2 – BILINGUAL TRANSLATIONS
   np = नेपाली (default)  |  en = English
   To add a third language: copy one block, give it a new key
   e.g. "hi" for Hindi, then add a toggle button in the navbar.
================================================================ */
const TRANSLATIONS = {

  /* ─────────────────────────── NEPALI ─────────────────────── */
  np: {
    /* Page metadata */
    page_title:   'हिमाल थापा | IT इन्जिनियर',
    page_desc:    'हिमाल थापा – IT इन्जिनियर, वेब डेभलपर र सफ्टवेयर डेभलपर। मेरो पोर्टफोलियो अन्वेषण गर्नुहोस्।',

    /* Loader */
    loader_text: 'पोर्टफोलियो लोड हुँदैछ…',

    /* Navbar */
    nav_home:       'गृहपृष्ठ',
    nav_about:      'परिचय',
    nav_skills:     'सीपहरू',
    nav_services:   'सेवाहरू',
    nav_portfolio:  'पोर्टफोलियो',
    nav_experience: 'अनुभव',
    nav_education:  'शिक्षा',
    nav_certs:      'प्रमाणपत्र',
    nav_blog:       'ब्लग',
    nav_contact:    'सम्पर्क',
  
    


    /* Hero */
    hero_greeting: 'नमस्ते, म हुँ',
    hero_name_np:  'हिमाल थापा<br/><small class="hero-subtitle">IT इन्जिनियर</small>',
    hero_name_en:  'Himal Thapa<br/><small class="hero-subtitle">IT Engineer</small>',
    hero_bio:      'रचनात्मक डिजिटल सामग्री, स्मार्ट IT समाधान र विश्लेषणात्मक सोचको संयोजनले उत्कृष्ट डिजिटल अनुभव निर्माण गर्दछु। प्रत्येक समस्यालाई अवसरमा बदल्दै डिजिटल संसारमा नयाँ सम्भावना सिर्जना पार्दछु।',
    btn_resume:    'CV डाउनलोड',
    btn_hire:      'काममा लगाउनुहोस्',
    btn_work:      'मेरो काम',
    badge_open:    'काममा उपलब्ध',
    badge_open1:    ' डिजिटल सामग्री सिर्जनाकर्ता',
    badge_open2:    ' आईटी परामर्शदाता',
    badge_open3:    ' सामाजिक सञ्जाल विशेषज्ञ',

    

    /* ✏ Typed rotating words */
    typed_words: ['आईटी परामर्शदाता', 'समस्या समाधानकर्ता', 'डिजिटल सामग्री सिर्जनाकर्ता', 'वेब डेभलपर', 'सफ्टवेयर डेभलपर', 'सामाजिक सञ्जाल विशेषज्ञ'],

    /* About */
    about_label:      'परिचय',
    about_title:      'मेरो ',
    about_title_span: 'बारेमा',
    about_exp_num:    '३+',
    about_exp_badge:  'वर्षको अनुभव',
    about_role:       'समस्या समाधानकर्ता',
    about_desc1:      'म हिमाल थापा हुँ, नेपालमा आधारित एक उत्साही आईटी इन्जिनियर। प्रविधि, सिर्जनशीलता र विश्लेषणात्मक सोचको संयोजनमार्फत प्रभावकारी डिजिटल समाधान निर्माण गर्नु मेरो मुख्य रुचि हो। प्रविधिप्रतिको जिज्ञासाबाट सुरु भएको मेरो यात्रा आज निरन्तर सिकाइ, नवप्रवर्तन र डिजिटल संसारमा मूल्य सिर्जना गर्ने लक्ष्यतर्फ अग्रसर छ। प्रत्येक परियोजनामा गुणस्तर, सिर्जनशीलता र समस्या समाधानलाई प्राथमिकता दिँदै उत्कृष्ट परिणाम प्रदान गर्ने प्रयास गर्दछु।',
    about_desc2:      'डिजिटल सामग्री निर्माणदेखि लिएर वेब विकास, सफ्टवेयर समाधान, सामाजिक सञ्जाल व्यवस्थापन तथा आईटी परामर्शसम्मका क्षेत्रमा म निरन्तर सक्रिय छु। जटिल समस्याहरूलाई सरल, प्रभावकारी र प्रयोगकर्ता-मैत्री समाधानमा रूपान्तरण गर्न मलाई विशेष रुचि छ।',
    astat_proj_num:   '५०+',
    astat_cli_num:    '३०+',
    astat_tech_num:   '१०+',
    stat_projects:    'परियोजनाहरू',
    stat_clients:     'ग्राहकहरू',
    stat_tech:        'प्रविधिहरू',
    info_location:    'काठमाडौं, नेपाल',
    info_work:        'फ्रिल्यान्स र पूर्ण/अंशकालिन',
    info_lang:        'नेपाली, अङ्ग्रेजी',
    btn_talk:         'कुरा गरौं',

    /* Skills */
    skills_label:       'मलाई के आउँछ',
    skills_title_my:    'मेरो',
    skills_title:       'सीपहरू',
    skill_cat_frontend: 'IT समर्थन तथा समस्या समाधान',
    skill_cat_backend:  'डिजिटल सामग्री तथा डिजाइन',
    skill_cat_db:       'सामाजिक सञ्जाल व्यवस्थापन',
    skill_cat_tools:    'वेब तथा सफ्टवेयर विकास',

    /* Services */
    services_label:    'म के गर्छु',
    services_title_my: 'मेरो',
    services_title:    'सेवाहरू',
    svc1_title: 'आईटी परामर्श तथा समस्या समाधान',
    svc1_desc:  'व्यवसाय वा व्यक्तिगत आवश्यकताअनुसार IT परामर्श, प्राविधिक मार्गदर्शन, प्रणाली विश्लेषण तथा समस्या समाधान सेवाहरू प्रदान गर्दछु।',
    svc2_title: 'प्राविधिक सहयोग तथा प्रणाली व्यवस्थापन',
    svc2_desc:  'कम्प्युटर हार्डवेयर, सफ्टवेयर स्थापना, प्रणाली मर्मत, नेटवर्क समस्या समाधान तथा प्राविधिक सहयोग प्रदान गर्दछु।',
    svc3_title: 'डिजिटल सामग्री निर्माण तथा डिजाइन',
    svc3_desc:  'भिडियो सम्पादन, ग्राफिक डिजाइन, सामग्री योजना तथा विभिन्न डिजिटल प्लेटफर्मका लागि सिर्जनात्मक सामग्री निर्माण गर्दछु।',
    svc4_title: 'सामाजिक सञ्जाल व्यवस्थापन',
    svc4_desc:  'सामाजिक सञ्जाल खाता व्यवस्थापन, सामग्री प्रकाशन, समुदायसँग अन्तरक्रिया तथा प्रदर्शन विश्लेषणमार्फत डिजिटल उपस्थितिलाई मजबुत बनाउँछु।',
    svc5_title: 'वेबसाइट तथा वेब समाधान',
    svc5_desc:  'आधुनिक प्रविधि प्रयोग गरी आकर्षक, छरितो र प्रयोगकर्ता-मैत्री वेबसाइट तथा वेब समाधान निर्माण गर्दछु।',
    svc6_title: 'सफ्टवेयर विकास',
    svc6_desc:  'आवश्यकताअनुसार अनुकूलित सफ्टवेयर, डेटाबेस व्यवस्थापन तथा डिजिटल समाधान विकासमा सहयोग गर्दछु।',

    /* Portfolio */
    portfolio_label:        'मेरो काम',
    portfolio_title_recent: 'हालका',
    portfolio_title:        'परियोजनाहरू',
    filter_all:      'सबै',
    filter_web:      'वेब',
    filter_app:      'एप',
    filter_software: 'सफ्टवेयर',
    proj_live:   'लाइभ हेर्नुहोस्',
    proj_source: 'स्रोत कोड',
    proj1_title: 'ई-कमर्स प्लेटफर्म',
    proj1_desc:  'कार्ट, भुक्तानी र एडमिन डासबोर्डसहित पूर्ण-सुविधा अनलाइन पसल।',
    proj2_title: 'कार्य व्यवस्थापन एप',
    proj2_desc:  'रियल-टाइम सहकार्य र म्याद ट्र्याकिङसहित उत्पादकता एप।',
    proj3_title: 'स्वास्थ्य डासबोर्ड',
    proj3_desc:  'क्लिनिक व्यवस्थापन प्रणालीका लागि स्वच्छ र पहुँचयोग्य UI।',
    proj4_title: 'विद्यालय व्यवस्थापन प्रणाली',
    proj4_desc:  'विद्यार्थी, शिक्षक र तालिका व्यवस्थापनका लागि व्यापक प्रणाली।',
    proj5_title: 'समाचार पोर्टल',
    proj5_desc:  'वर्ग फिल्टर र खोज सुविधासहित गतिशील समाचार एग्रिगेटर।',

    /* New Portfolio Items */
    port1_title: 'IT समर्थन र समस्या समाधान',
    port1_desc:  'विन्डोज, लिनक्स र नेटवर्किङ समस्याहरू समाधान गर्ने विशेषज्ञ।',
    port2_title: 'डिजिटल सामग्री र डिजाइन',
    port2_desc:  'ग्राफिक डिजाइन, भिडियो सम्पादन र सामग्री सिर्जना।',
    port3_title: 'सामाजिक संजाल व्यवस्थापन',
    port3_desc:  'सामाजिक संजाल ह्यान्डल, सामग्री र विश्लेषण।',
    port4_title: 'वेब र सफ्टवेयर विकास',
    port4_desc:  'आधुनिक वेबसाइट र सफ्टवेयर समाधान विकास।',
    port5_title: 'कम्प्युटर हार्डवेयर र स्थापना',
    port5_desc:  'हार्डवेयर स्थापना, व्यवस्थापन र रखरखाव सेवा।',
    port6_title: 'वेबसाइट र वेब समाधान',
    port6_desc:  'आकर्षक र प्रयोगकर्ता-मैत्री वेबसाइट विकास।',
    port7_title: 'सफ्टवेयर विकास',
    port7_desc:  'अनुकूलित सफ्टवेयर, डेटाबेस र API समाधान।',
    proj6_title: 'मौसम डासबोर्ड',
    proj6_desc:  'पूर्वानुमान र अन्तरक्रियात्मक चार्टसहित रियल-टाइम मौसम एप।',

    /* Experience */
    exp_label:      'मेरो यात्रा',
    exp_title_work: 'कार्य',
    exp_title:      'अनुभव',
    exp1_title:     'IT इन्जिनियर',
    exp1_company:   'सनातन मिडिया ग्रुप',
    exp1_year:      '२०८२ – हालसम्म',
    exp1_desc:      'IT समर्थन तथा समस्या समाधानमा नेतृत्व प्रदान गर्दै प्रणाली व्यवस्थापन र नेटवर्क समाधानलाई सुदृढ बनाएको। साथै भिडियो सम्पादन, ग्राफिक डिजाइन, सामग्री निर्माण र योजना गर्दै मिडिया कम्पनीको डिजिटल उपस्थिति र सञ्चार दक्षता विस्तार गरेको। वेब तथा सफ्टवेयर विकासमार्फत प्राविधिक संरचना अझ मजबुत बनाएको।',
    exp2_title:     'फ्रीलान्स सेवा',
    exp2_company:   'स्वरोजगार',
    exp2_year:      '२०७६ – हालसम्म',
    exp2_desc:      'स्वतन्त्र रूपमा स्थानीय व्यवसायहरूका लागि IT समर्थन तथा समस्या समाधान प्रदान गर्दै सञ्चालन दक्षता सुधार गरेको। सामग्री निर्माण, योजना, सामाजिक सञ्जाल व्यवस्थापन र डिजिटल डिजाइनमार्फत व्यवसायहरूको डिजिटल उपस्थिति विस्तार गरेको। फ्रन्टएन्ड, ब्याकएन्ड र डेटाबेसमा दक्षता प्रयोग गर्दै वेब तथा सफ्टवेयर समाधान विकास गरेको।',
    exp3_title:     'IT विभाग',
    exp3_company:   'सनातन मोर्चा & राष्ट्रवादी केन्द्र',
    exp3_year:      '२०७२ – हालसम्म',
    exp3_desc:      'IT समर्थन, प्रणाली स्थापना र नेटवर्क समाधानमा योगदान दिँदै संगठनको प्राविधिक क्षमता बढाएको। सामाजिक सञ्जाल सञ्चालन, सामग्री व्यवस्थापन, विश्लेषणात्मक सहकार्य र अन्तरक्रियाद्वारा संगठनको गतिविधि प्रभावकारी बनाएको। वेब तथा सफ्टवेयर विकास प्रयोग गर्दै डिजिटल उपस्थितिलाई अझ मजबुत बनाएको।',

    /* Education */
    edu_label:    'शैक्षिक पृष्ठभूमि',
    edu_title_my: 'मेरो',
    edu_title:    'शिक्षा',
    edu1_year:  'स्नातक',
    edu1_title: 'आईटी इन्जिनियरिङ्',
    edu1_inst:  'पोखरा विश्वविद्यालय, नेपाल',
    edu1_desc:  'कृत्रिम बुद्धिमता, कम्प्युटर तथा डिजिटल प्रणालीमा दक्षता। सफ्टवेयर, हार्डवयर र नेटवर्कमा केन्द्रित गरी छात्रवृत्तिमा अध्ययन पुरा।',
    edu1_badge: '🏆 University',
    edu2_year:  '+२',
    edu2_title: 'विज्ञान',
    edu2_inst:  'उच्च माध्यमिक शिक्षा',
    edu2_desc:  'IT र विज्ञान प्रतियोगिताहरूमा केन्द्रित विश्लेषणात्मक क्षमता र समस्या समाधान गर्ने दक्षता विकास गर्दै अध्ययन पूरा गरेको।',
    edu2_badge: '⭐ HSEB',
    edu3_year:  '१०',
    edu3_title: 'एस. एल. सि.',
    edu3_inst:  'विद्यालय छोडेको प्रमाणपत्र',
    edu3_desc:  'सरकारी विद्यालयबाट गणित र कार्यलय व्यवस्थापन विषय लिई विभिन्न प्रतियोगिताहरूमा सहभागि हुँदै अध्ययन पूरा गरेको।',
    edu3_badge: '🎯 OCE',

    /* Certifications */
    cert_label:      'प्रमाण-पत्रहरू',
    cert_title_my:   'मेरो',
    cert_title:      'प्रमाणपत्रहरू',
    cert_modal_note: 'प्रमाणपत्र पूर्वावलोकन चाँडै आउँदैछ।',

    /* Stats */
    stats_projects: 'सम्पन्न परियोजनाहरू',
    stats_clients:  'खुसी ग्राहकहरू',
    stats_exp:      'वर्षको अनुभव',
    stats_tech:     'प्रविधिहरू',

    /* Testimonials */
    test_label:      'ग्राहकको प्रतिक्रिया',
    test_title_what: 'उहाँहरूले',
    test_title:      'के भन्नुहुन्छ',
    test1_text: 'हिमालले हाम्रो IT सम्बन्धी समस्या छिटो र प्रभावकारी रूपमा समाधान गर्नुभयो। उहाँको प्राविधिक ज्ञान, समयमै सहयोग र व्यावसायिक व्यवहारले हामी अत्यन्त सन्तुष्ट छौं।',
    test1_name: 'रमेश कुमार',    test1_role: 'व्यवस्थापक',
    test2_text: 'कम्प्युटर सेटअप, सफ्टवेयर स्थापना र नेटवर्क व्यवस्थापन सबै काम व्यवस्थित रूपमा सम्पन्न गर्नुभयो। भविष्यमा पनि उहाँसँग काम गर्न चाहन्छौं।',
    test2_name: 'सुनिता प्रधान', test2_role: 'कार्यालय प्रशासक',
    test3_text: 'हाम्रो ब्रान्डका लागि तयार गरिएको डिजाइन र भिडियोहरू आकर्षक तथा व्यावसायिक थिए। अपेक्षाभन्दा उत्कृष्ट परिणाम प्राप्त भयो।',
    test3_name: 'अरुण श्रेष्ठ',  test3_role: 'ब्रान्ड व्यवस्थापक',
    test4_text: 'सामाजिक सञ्जालको योजना, सामग्री प्रकाशन र व्यवस्थापन अत्यन्त प्रभावकारी थियो। हाम्रो अनलाइन पहुँच र सहभागिता उल्लेखनीय रूपमा बढ्यो।',
    test4_name: 'बिनिता तामाङ',  test4_role: 'डिजिटल मार्केटिङ संयोजक',
    test5_text: 'सिर्जनात्मक सामग्री, पोस्ट डिजाइन र क्याप्सन सबै गुणस्तरीय थिए। समयमै काम सम्पन्न गर्ने उहाँको बानी प्रशंसनीय छ।',
    test5_name: 'मनिषा गुरुङ',  test5_role: 'कन्टेन्ट व्यवस्थापक',
    test6_text: 'हाम्रो वेबसाइट आधुनिक, छरितो र प्रयोगकर्ता-मैत्री बनाइदिनुभयो। डिजाइन र कार्यसम्पादन दुवै उत्कृष्ट छन्।',
    test6_name: 'बिकास अधिकारी',  test6_role: 'व्यवसाय सञ्चालक',
    test7_text: 'IT Support, Web Development, Design र Social Media सबै क्षेत्रमा उहाँको काम उत्कृष्ट छ। एकै ठाउँबाट सबै डिजिटल सेवा प्राप्त गर्न सकिनु हाम्रो लागि ठूलो फाइदा भयो।',
    test7_name: 'सन्दीप लामा',  test7_role: 'उद्यमी',

    /* Blog */
    blog_label:        'विचार र धारणाहरू',
    blog_title_latest: 'ताजा',
    blog_title:        'लेखहरू',
    blog1_date:  'मे १५, २०२६', blog1_cat: 'वेब डेभ',
    blog1_title: '२०२६ का शीर्ष १० वेब विकास ट्रेन्डहरू',
    blog1_desc:  'यस वर्ष वेब विकासलाई पुनर्आकार दिइरहेका अत्याधुनिक प्रविधि र विधिहरू अन्वेषण गर्नुहोस्।',
    blog2_date:  'अप्रिल २८, २०२६', blog2_cat: 'सुरक्षा',
    blog2_title: 'डेभलपरका लागि साइबर सुरक्षाका उत्तम अभ्यासहरू',
    blog2_desc:  'प्रत्येक डेभलपरले आफ्ना एप्लिकेशन सुरक्षित राख्न जान्नुपर्ने आवश्यक सुरक्षा अभ्यासहरू।',
    blog3_date:  'अप्रिल १०, २०२६',
    blog3_title: 'कसरी AI ले सफ्टवेयर विकास बदलिरहेको छ',
    blog3_desc:  'आधुनिक सफ्टवेयर इन्जिनियरिङ कार्यप्रवाहमा कृत्रिम बुद्धिमत्ताको प्रभावमा गहिरो डुब।',
    blog_readmore: 'थप पढ्नुहोस्',

    /* Contact */
    contact_label:    'सम्पर्कमा आउनुहोस्',
    contact_title:    'सम्पर्क',
    contact_title_me: 'गर्नुहोस्',
    contact_heading:  'केही अद्भुत',
    contact_heading2: 'बनाऊं',
    contact_sub:      'अर्को परियोजना सुरु गर्न तयार हुनुहुन्छ वा कुनै प्रश्न छ? तलका कुनै पनि माध्यमबाट सम्पर्क गर्नुहोस्।',
    cc_call:          'फोन गर्नुहोस्',
    cc_email:         'इमेल गर्नुहोस्',
    cc_location:      'स्थान',
    cc_location_val:  'काठमाडौं, नेपाल',
    form_name:        'पूरा नाम',
    form_name_ph:     'तपाईंको पूरा नाम',
    form_email:       'इमेल ठेगाना',
    form_subject:     'विषय',
    form_subject_ph:  'म तपाईंलाई कसरी सहायता गर्न सक्छु?',
    form_message:     'सन्देश',
    form_message_ph:  'आफ्नो परियोजनाबारे बताउनुहोस्…',
    form_send:        'सन्देश पठाउनुहोस्',
    form_success:     'सन्देश पठाइयो! म चाँडै जवाफ दिनेछु।',

    /* Validation errors */
    err_name:    'कृपया आफ्नो पूरा नाम लेख्नुहोस्।',
    err_email:   'मान्य इमेल ठेगाना लेख्नुहोस्।',
    err_subject: 'विषय कम्तिमा ३ अक्षर हुनुपर्छ।',
    err_message: 'सन्देश कम्तिमा १० अक्षर हुनुपर्छ।',
    sending:     'पठाउँदैछु…',

    /* Footer */
    footer_tagline1: 'IT इन्जिनियर · वेब डेभलपर · समस्या समाधानकर्ता',
    footer_tagline2: 'एक–एक लाइन कोडमा डिजिटल उत्कृष्टता।',
    footer_quick:    'द्रुत लिङ्कहरू',
    footer_social:   'सामाजिक सञ्जाल',
    footer_copy:     '© २०२६ हिमाल थापा। सर्वाधिकार सुरक्षित।',
    footer_made:     'हिमाल थापाद्वारा',
    footer_made2:    'सँग डिजाइन र विकसित',

    /* Lang toggle label */
    lang_btn_label: 'EN',
  },

  /* ─────────────────────────── ENGLISH ────────────────────── */
  en: {
    page_title:  'Himal Thapa | IT Engineer',
    page_desc:   'Himal Thapa – IT Engineer, Web Developer & Software Developer based in Nepal.',

    loader_text: 'Initialising Portfolio…',

    nav_home: 'Home', nav_about: 'About', nav_skills: 'Skills',
    nav_services: 'Services', nav_portfolio: 'Portfolio',
    nav_experience: 'Experience', nav_education: 'Education',
    nav_certs: 'Certs', nav_blog: 'Blog', nav_contact: 'Contact',

    hero_greeting: "Hello, I'm",
    hero_name_np:  'हिमाल थापा<br/><small class="hero-subtitle">IT इन्जिनियर</small>',
    hero_name_en:  'Himal Thapa<br/><small class="hero-subtitle">IT Engineer</small>',
    hero_bio:    'By combining creative digital content, smart IT solutions, and analytical thinking, I create great digital experiences. I transform every problem into an opportunity and bring new possibilities to the digital world.',
    btn_resume:  'Resume', btn_hire: 'Hire Me', btn_work: 'My Work',
    badge_open:  'Open to Work',
    badge_open1:    ' Digital Creator',
    badge_open2:    ' IT Consultant',
    badge_open3:    ' Social Media Specialist',

    typed_words: ['IT Consultant', 'Problem Solver', 'Digital Creator', 'Web Developer', 'Software Developer', 'Social Media Specialist'],

    about_label: 'Get To Know', about_title: 'About ', about_title_span: 'Me',
    about_exp_num:   '3+',
    about_exp_badge: 'Years Experience',
    about_role:  'Problem Solver',
    about_desc1: "I am Himal Thapa, an enthusiastic IT engineer based in Nepal. My main interest is to build effective digital solutions through a combination of technology, creativity, and analytical thinking. My journey, which started with a curiosity about technology, has today led to a goal of continuous learning, innovation, and creating value in the digital world. I strive to deliver excellent results by prioritizing quality, creativity, and problem solving in every project.",
    about_desc2: 'I am constantly active in areas ranging from digital content creation to web development, software solutions, social media management, and IT consulting. I am particularly interested in transforming complex problems into simple, effective, and user-friendly solutions.',
    astat_proj_num: '50+',
    astat_cli_num:  '30+',
    astat_tech_num: '10+',
    stat_projects: 'Projects', stat_clients: 'Clients', stat_tech: 'Technologies',
    info_location: 'Kathmandu, Nepal', info_work: 'Freelance & Full/Part-time',
    info_lang: 'Nepali, English', btn_talk: "Let's Talk",

    skills_label:       'What I Know',
    skills_title_my:    'My',
    skills_title:       'Skills',
    skill_cat_frontend: 'IT Support & Troubleshooting',
    skill_cat_backend:  'Digital Content & Design',
    skill_cat_db:       'Social Media Management',
    skill_cat_tools:    'Web & Software Development',

    services_label: 'What I Offer', services_title_my: 'My', services_title: 'Services',
    svc1_title: 'IT Consulting and Troubleshooting',
    svc1_desc:  'I provide IT consulting, technical guidance, system analysis, and problem solving services according to business or personal needs.',
    svc2_title: 'Technical support and system management',
    svc2_desc:  'I provide computer hardware, software installation, system maintenance, network troubleshooting, and technical support.',
    svc3_title: 'Digital content creation and design',
    svc3_desc:  'I do video editing, graphic design, content planning, and creative content creation for various digital platforms.',
    svc4_title: 'Social media management',
    svc4_desc:  'I strengthen my digital presence through social media account management, content publishing, community interaction, and performance analysis.',
    svc5_title: 'Websites and web solutions',
    svc5_desc:  'I create attractive, fast, and user-friendly websites and web solutions using modern technology.',
    svc6_title: 'Software development',
    svc6_desc:  'I assist in developing customized software, database management, and digital solutions as needed.',

    portfolio_label: 'My Work', portfolio_title_recent: 'Recent', portfolio_title: 'Projects',
    filter_all: 'All', filter_web: 'Web', filter_app: 'App', filter_software: 'Software',
    proj_live: 'Live Demo', proj_source: 'Source',
    proj1_title: 'E-Commerce Platform',
    proj1_desc:  'A full-featured online store with cart, payments, and admin dashboard.',
    proj2_title: 'Task Manager App',
    proj2_desc:  'Productivity app with real-time collaboration and deadline tracking.',
    proj3_title: 'Healthcare Dashboard',
    proj3_desc:  'Clean and accessible dashboard UI for a clinic management system.',
    proj4_title: 'School Management System',

    /* New Portfolio Items */
    port1_title: 'IT Support & Troubleshooting',
    port1_desc:  'Expert in solving Windows, Linux, and networking issues.',
    port2_title: 'Digital Content & Design',
    port2_desc:  'Graphic design, video editing, and content creation.',
    port3_title: 'Social Media Management',
    port3_desc:  'Social media handling, content, and analytics.',
    port5_title: 'Computer Hardware & Installation',
    port5_desc:  'Hardware installation, management, and maintenance services.',
    port6_title: 'Websites & Web Solutions',
    port6_desc:  'Creating attractive and user-friendly website development.',
    port7_title: 'Software Development',
    port7_desc:  'Customized software, database, and API solutions.',

    exp_label: 'My Journey', exp_title_work: 'Work', exp_title: 'Experience',
    exp1_title: 'IT Engineer', exp1_year: '2026 – Present', exp1_company:'Sanatan Media Group',
    exp1_desc:  "Strengthened systems management and network solutions by providing leadership in IT support and problem solving. Expanded the media company's digital presence and communications capabilities through video editing, graphic design, content creation and planning. Strengthened the technical infrastructure through web and software development.",
    exp2_title: 'Freelance service', exp2_year: '2020 – Present',exp2_company:'Self-employed',
    exp2_desc:  'Independently provided IT support and troubleshooting for local businesses, improving operational efficiency. Expanded businesses digital presence through content creation, planning, social media management, and digital design. Developed web and software solutions using expertise in frontend, backend, and databases.',
    exp3_title: 'IT Department', exp3_company: 'Sanatan Morcha & Rastrabadi Kendra', exp3_year: '2016 – Present',
    exp3_desc:  "Contributed to IT support, system installation, and network solutions, increasing the organization's technical capabilities. Made the organization's activities more effective through social media operations, content management, analytical collaboration, and interaction. Strengthened the digital presence using web and software development.",

    edu_label: 'Academic Background', edu_title_my: 'My', edu_title: 'Education',
    edu1_year: 'Bachelor', edu1_title: 'IT Engineering',
    edu1_inst:  'Pokhara University, Nepal', 
    edu1_desc:  'Completed studies through a scholarship with proficiency in AI, Computer, and Digital Systems; specialized in Software, Hardware, and Network Administration.',
    edu1_badge: '🏆 University',
    edu2_year: '+2', edu2_title: 'Science',
    edu2_inst:  'Higher Secondary Education',
    edu2_desc:  'Completed studies with a focus on IT and science competitions, developing strong analytical skills and problem-solving abilities throughout the academic journey.',
    edu2_badge: '⭐ HSEB',
    edu3_year: '10', edu3_title: 'SLC',
    edu3_inst:  'School Leaving Certificate',
    edu3_desc:  'Completed studies from a government school with focus on Mathematics and Office Management, actively participating in various competitions during the academic journey.',
    edu3_badge: '🎯 OCE',

    cert_label: 'Credentials', cert_title_my: 'My', cert_title: 'Certifications',
    cert_modal_note: 'Certificate preview coming soon.',

    stats_projects: 'Projects Completed', stats_clients: 'Happy Clients',
    stats_exp: 'Years Experience', stats_tech: 'Technologies Mastered',

    test_label: 'Client Feedback', test_title_what: 'What They', test_title: 'Say',
    test1_text: 'Himal resolved our IT-related issues quickly and efficiently. His technical expertise, timely support, and professional approach left us highly satisfied.',
    test1_name: 'Ramesh Kumar',
    test1_role: 'Manager',

    test2_text: 'He completed our computer setup, software installation, and network configuration in a well-organized and professional manner. We look forward to working with him again.',
    test2_name: 'Sunita Pradhan',
    test2_role: 'Office Administrator',

    test3_text: 'The designs and videos created for our brand were creative and highly professional. The final results exceeded our expectations.',
    test3_name: 'Arun Shrestha',
    test3_role: 'Brand Manager',

    test4_text: 'His social media planning, content publishing, and account management were highly effective. Our online reach and audience engagement improved significantly.',
    test4_name: 'Binita Tamang',
    test4_role: 'Digital Marketing Coordinator',

    test5_text: 'The creative content, post designs, and captions were all of excellent quality. His ability to deliver work on time is truly commendable.',
    test5_name: 'Manisha Gurung',
    test5_role: 'Content Manager',

    test6_text: 'He transformed our website into a modern, fast, and user-friendly platform. Both the design and overall performance are outstanding.',
    test6_name: 'Bikash Adhikari',
    test6_role: 'Business Owner',

    test7_text: 'His expertise in IT Support, Web Development, Design, and Social Media Management is exceptional. Having all these digital services in one place has been a great advantage for us.',
    test7_name: 'Sandeep Lama',
    test7_role: 'Entrepreneur',


    blog_label: 'Thoughts & Ideas', blog_title_latest: 'Latest', blog_title: 'Articles',
    blog1_date: 'May 15, 2026', blog1_cat: 'Web Dev',
    blog1_title: 'Top 10 Web Development Trends in 2026',
    blog1_desc:  'Explore the cutting-edge technologies and methodologies reshaping web development this year.',
    blog2_date: 'Apr 28, 2026', blog2_cat: 'Security',
    blog2_title: 'Cybersecurity Best Practices for Developers',
    blog2_desc:  'Essential security practices every developer should know to protect their applications.',
    blog3_date: 'Apr 10, 2026',
    blog3_title: 'How AI Is Changing Software Development',
    blog3_desc:  'A deep dive into the impact of artificial intelligence on modern software engineering workflows.',
    blog_readmore: 'Read More',

    contact_label: 'Get In Touch', contact_title: 'Contact', contact_title_me: 'Me',
    contact_heading: "Let's Build Something", contact_heading2: 'Amazing',
    contact_sub: 'Ready to start your next project or have a question? Reach out through any of the channels below.',
    cc_call: 'Call Me', cc_email: 'Email Me', cc_location: 'Location',
    cc_location_val: 'Kathmandu, Nepal',
    form_name: 'Full Name', form_name_ph: 'Your full name',
    form_email: 'Email Address',
    form_subject: 'Subject', form_subject_ph: 'How can I help you?',
    form_message: 'Message', form_message_ph: 'Tell me about your project…',
    form_send: 'Send Message',
    form_success: "Message sent! I'll reply soon.",
    err_name:    'Please enter your full name.',
    err_email:   'Enter a valid email address.',
    err_subject: 'Subject must be at least 3 characters.',
    err_message: 'Message must be at least 10 characters.',
    sending:     'Sending…',

    footer_tagline1: 'IT Engineer · Web Developer · Problem Solver',
    footer_tagline2: 'Crafting digital excellence, one line at a time.',
    footer_quick: 'Quick Links', footer_social: 'Social Media',
    footer_copy: '© 2026 Himal Thapa. All Rights Reserved.',
    footer_made: 'Designed & Developed with', footer_made2: 'by Himal Thapa',

    lang_btn_label: 'NP',
  }
};


/* ================================================================
   LANGUAGE SYSTEM
================================================================ */
let currentLang = (function() {
  try { return localStorage.getItem('ht-lang') || 'np'; }
  catch(e) { return 'np'; }
})();

/** Get a translation string. Falls back to NP then to key itself. */
function t(key) {
  return (TRANSLATIONS[currentLang] && TRANSLATIONS[currentLang][key]) ||
         (TRANSLATIONS['np'][key]) || key;
}

/** Apply all translations to the DOM */
function applyTranslations(lang) {
  const html = document.documentElement;
  html.setAttribute('data-lang', lang);
  html.setAttribute('lang', lang === 'np' ? 'ne' : 'en');

  /* Text content */
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = TRANSLATIONS[lang][key];
    if (val !== undefined) el.textContent = val;
  });

  /* Placeholders */
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    const val = TRANSLATIONS[lang][key];
    if (val !== undefined) el.setAttribute('placeholder', val);
  });

  /* Hero name (has inner HTML span) */
  const heroNameEl = document.getElementById('hero-name-el');
  if (heroNameEl) {
    heroNameEl.innerHTML = lang === 'np'
      ? TRANSLATIONS[lang].hero_name_np
      : TRANSLATIONS[lang].hero_name_en;
  }

  /* About title (has nested gradient span) */
  const aboutTitleEl = document.querySelector('.about-title-h2');
  if (aboutTitleEl) {
    aboutTitleEl.innerHTML =
      TRANSLATIONS[lang].about_title +
      `<span class="gradient-text">${TRANSLATIONS[lang].about_title_span}</span>`;
  }

  /* Page title & meta description */
  document.title = TRANSLATIONS[lang].page_title;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute('content', TRANSLATIONS[lang].page_desc || '');

  /* Lang button label */
  const langLabel = document.getElementById('lang-label');
  if (langLabel) langLabel.textContent = TRANSLATIONS[lang].lang_btn_label;

  /* Typed text */
  restartTyped(TRANSLATIONS[lang].typed_words);

  /* Sync form validation lang */
  currentValidationLang = lang;
}

/** Update resume download link based on current language */
function updateResumeDownloadLink(lang) {
  const resumeBtn = document.getElementById('resume-download-btn');
  if (!resumeBtn) return;
  
  const resumeFile = lang === 'np' ? 'assets/files/htcvn.pdf' : 'assets/files/htcve.pdf';
  resumeBtn.href = resumeFile;
}

/** Init the language toggle button */
function initLangToggle() {
  const btn = document.getElementById('lang-toggle');
  if (!btn) return;
  applyTranslations(currentLang);
  updateResumeDownloadLink(currentLang);

  btn.addEventListener('click', () => {
    const next = currentLang === 'np' ? 'en' : 'np';
    currentLang = next;
    try { localStorage.setItem('ht-lang', next); } catch(e) {}

    /* Flash transition */
    document.body.classList.add('lang-switching');
    requestAnimationFrame(() => {
      setTimeout(() => document.body.classList.remove('lang-switching'), 180);
    });

    applyTranslations(next);
    updateResumeDownloadLink(next);
  });
}


/* ================================================================
   1. LOADER  – hide once page loaded
================================================================ */
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  if (!loader) return;
  applyTranslations(currentLang); // apply lang before showing
  updateResumeDownloadLink(currentLang); // set correct resume file on load
  setTimeout(() => {
    loader.classList.add('hide');
    loader.setAttribute('aria-hidden', 'true');
  }, 700);
});


/* ================================================================
   2. CUSTOM CURSOR
================================================================ */
(function initCursor() {
  if (window.matchMedia('(pointer: coarse)').matches) return; // skip on touch
  const dot  = document.getElementById('cursor-dot');
  const ring = document.getElementById('cursor-ring');
  if (!dot || !ring) return;
  let mx = 0, my = 0, rx = 0, ry = 0;
  document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; }, { passive: true });
  function tick() {
    dot.style.transform  = `translate(${mx}px,${my}px)`;
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    ring.style.transform = `translate(${rx}px,${ry}px)`;
    requestAnimationFrame(tick);
  }
  tick();
  document.addEventListener('mousedown', () => ring.classList.add('clicked'));
  document.addEventListener('mouseup',   () => ring.classList.remove('clicked'));
  document.querySelectorAll('a,button,.cert-card').forEach(el => {
    el.addEventListener('mouseenter', () => ring.classList.add('hovered'));
    el.addEventListener('mouseleave', () => ring.classList.remove('hovered'));
  });
})();


/* ================================================================
   3. SCROLL PROGRESS BAR
================================================================ */
(function initScrollProgress() {
  const bar = document.getElementById('scroll-progress');
  if (!bar) return;
  window.addEventListener('scroll', () => {
    const pct = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    bar.style.width = Math.min(pct, 100) + '%';
  }, { passive: true });
})();


/* ================================================================
   4. NAVBAR – scroll shrink + active link tracking
================================================================ */
(function initNavbar() {
  const nav = document.getElementById('navbar');
  const burger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');
  if (!nav) return;

  /* Scroll shrink */
  let lastY = 0;
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    nav.classList.toggle('scrolled', y > 50);
    nav.classList.toggle('nav-hidden', y > lastY + 5 && y > 200);
    nav.classList.toggle('nav-visible', y < lastY - 5);
    lastY = y;
  }, { passive: true });

  /* Hamburger */
  if (burger && navLinks) {
    burger.addEventListener('click', () => {
      const open = navLinks.classList.toggle('open');
      burger.classList.toggle('open', open);
      burger.setAttribute('aria-expanded', String(open));
      burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });
    /* Close on link click */
    navLinks.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        burger.classList.remove('open');
        burger.setAttribute('aria-expanded', 'false');
        burger.setAttribute('aria-label', 'Open menu');
      });
    });
    /* Close on outside click */
    document.addEventListener('click', e => {
      if (!nav.contains(e.target)) {
        navLinks.classList.remove('open');
        burger.classList.remove('open');
        burger.setAttribute('aria-expanded', 'false');
        burger.setAttribute('aria-label', 'Open menu');
      }
    });
  }

  /* Active link on scroll */
  const sections = document.querySelectorAll('section[id]');
  const links = document.querySelectorAll('.nav-link');
  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        links.forEach(l => l.classList.remove('active'));
        const active = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
        if (active) active.classList.add('active');
      }
    });
  }, { threshold: 0.4 });
  sections.forEach(s => obs.observe(s));
})();


/* ================================================================
   5. THEME TOGGLE (Dark / Light)
================================================================ */
(function initTheme() {
  const btn  = document.getElementById('theme-toggle');
  const icon = document.getElementById('theme-icon');
  const root = document.documentElement;

  let theme;
  try { theme = localStorage.getItem('ht-theme'); } catch(e) {}
  if (!theme) theme = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  applyTheme(theme);

  if (btn) btn.addEventListener('click', () => {
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    try { localStorage.setItem('ht-theme', next); } catch(e) {}
  });

  function applyTheme(t) {
    root.setAttribute('data-theme', t);
    if (icon) {
      icon.className = t === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
    }
  }
})();


/* ================================================================
   6. BACK-TO-TOP BUTTON
================================================================ */
(function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
})();


/* ================================================================
   7. TYPED TEXT ANIMATION
================================================================ */
let typedInterval = null;
function restartTyped(words) {
  if (!words || !words.length) return;
  const el = document.getElementById('typed-text');
  if (!el) return;
  if (typedInterval) { clearInterval(typedInterval); typedInterval = null; }
  el.textContent = '';

  let wIdx = 0, cIdx = 0, deleting = false;
  const SPEED_TYPE = 80, SPEED_DEL = 45, PAUSE = 1800;

  function step() {
    const word = words[wIdx];
    if (!deleting) {
      el.textContent = word.slice(0, ++cIdx);
      if (cIdx === word.length) {
        deleting = true;
        typedInterval = setTimeout(step, PAUSE);
        return;
      }
    } else {
      el.textContent = word.slice(0, --cIdx);
      if (cIdx === 0) {
        deleting = false;
        wIdx = (wIdx + 1) % words.length;
      }
    }
    typedInterval = setTimeout(step, deleting ? SPEED_DEL : SPEED_TYPE);
  }
  step();
}


/* ================================================================
   8. PARTICLE CANVAS
================================================================ */
(function initParticles() {
  const canvas = document.getElementById('particle-canvas');
  if (!canvas) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const ctx = canvas.getContext('2d');
  let W = 0, H = 0, particles = [];
  const COUNT = Math.min(55, Math.floor(window.innerWidth / 20));

  function resize() {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  }
  resize();

  class Particle {
    constructor() { this.reset(); }
    reset() {
      this.x  = Math.random() * W;
      this.y  = Math.random() * H;
      this.vx = (Math.random() - 0.5) * 0.4;
      this.vy = (Math.random() - 0.5) * 0.4;
      this.r  = Math.random() * 2 + 1;
      this.a  = Math.random() * 0.5 + 0.1;
    }
    update() {
      this.x += this.vx; this.y += this.vy;
      if (this.x < 0 || this.x > W) this.vx *= -1;
      if (this.y < 0 || this.y > H) this.vy *= -1;
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0,229,255,${this.a})`;
      ctx.fill();
    }
  }

  for (let i = 0; i < COUNT; i++) particles.push(new Particle());

  let raf;
  function loop() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => { p.update(); p.draw(); });
    /* Connect nearby */
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const d  = dx * dx + dy * dy;
        if (d < 12000) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(108,99,255,${0.12 * (1 - d / 12000)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }
    raf = requestAnimationFrame(loop);
  }
  loop();

  /* Pause when hidden (performance) */
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) cancelAnimationFrame(raf);
    else loop();
  });

  window.addEventListener('resize', resize, { passive: true });
})();


/* ================================================================
   9. SKILL BARS – animate on enter
================================================================ */
(function initSkillBars() {
  const bars = document.querySelectorAll('.skill-fill');
  if (!bars.length) return;
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const bar = e.target;
        bar.style.width = (bar.dataset.width || 0) + '%';
        obs.unobserve(bar);
      }
    });
  }, { threshold: 0.3 });
  bars.forEach(b => { b.style.width = '0'; obs.observe(b); });
})();




/* ================================================================
   11. COUNTER ANIMATION
================================================================ */
(function initCounters() {
  const counters = document.querySelectorAll('.counter');
  if (!counters.length) return;
  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el     = entry.target;
      const target = +el.dataset.target;
      const dur    = 1600;
      const step   = dur / target;
      let current  = 0;
      obs.unobserve(el);
      const timer = setInterval(() => {
        current = Math.min(current + 1, target);
        el.textContent = current + '+';
        if (current >= target) clearInterval(timer);
      }, step);
    });
  }, { threshold: 0.5 });
  counters.forEach(c => obs.observe(c));
})();


/* ================================================================
   12. TESTIMONIALS CAROUSEL
================================================================ */
(function initTestimonials() {
  const track  = document.getElementById('testimonials-track');
  const dotsEl = document.getElementById('tl-dots');
  const prevBtn = document.getElementById('tl-prev');
  const nextBtn = document.getElementById('tl-next');
  if (!track) return;

  const cards = track.querySelectorAll('.testimonial-card');
  let current = 0;
  let autoplay;

  /* Build dots */
  if (dotsEl) {
    cards.forEach((_, i) => {
      const d = document.createElement('button');
      d.type = 'button';
      d.className = 'tl-dot' + (i === 0 ? ' active' : '');
      d.setAttribute('aria-label', `Testimonial ${i + 1}`);
      d.setAttribute('role', 'tab');
      d.addEventListener('click', () => goTo(i));
      dotsEl.appendChild(d);
    });
  }

  function goTo(idx) {
    current = (idx + cards.length) % cards.length;
    track.style.transform = `translateX(-${current * 100}%)`;
    dotsEl && dotsEl.querySelectorAll('.tl-dot').forEach((d, i) => d.classList.toggle('active', i === current));
  }

  if (prevBtn) prevBtn.addEventListener('click', () => { goTo(current - 1); resetAuto(); });
  if (nextBtn) nextBtn.addEventListener('click', () => { goTo(current + 1); resetAuto(); });

  function startAuto() { autoplay = setInterval(() => goTo(current + 1), 4500); }
  function resetAuto()  { clearInterval(autoplay); startAuto(); }
  startAuto();

  /* Pause on hover */
  track.addEventListener('mouseenter', () => clearInterval(autoplay));
  track.addEventListener('mouseleave', startAuto);

  /* Swipe */
  let startX = 0;
  track.addEventListener('touchstart', e => { startX = e.touches[0].clientX; }, { passive: true });
  track.addEventListener('touchend',   e => {
    const diff = startX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) { goTo(diff > 0 ? current + 1 : current - 1); resetAuto(); }
  }, { passive: true });
})();


/* ================================================================
   13. CERT MODAL
================================================================ */
const CERT_DATA = [
  { icon: '<i class="fa-solid fa-headset"></i> &nbsp;',        title: 'IT Consulting & Support',     issuer: 'HP LIFE',       year: '2023' },
  { icon: '<i class="fa-solid fa-network-wired"></i> &nbsp',     title: 'Computer Hardware & Networking',          issuer: 'Cisco Networking Academy',         year: '2023' },
  { icon: '<i class="fa-solid fa-hashtag"></i> &nbsp',      title: 'Social Media Marketing',issuer: 'HubSpot Academy',           year: '2022' },
  { icon: '<i class="fa-solid fa-bullhorn"></i> &nbsp',    title: 'Content Marketing',      issuer: 'HubSpot Academy',         year: '2022' },
  { icon: '<i class="fa-solid fa-palette"></i> &nbsp', title: 'Graphic Design Essentials',   issuer: 'Canva Design School',  year: '2021' },
  { icon: '<i class="fa-solid fa-code"></i> &nbsp',    title: 'Web Development',       issuer: 'freeCodeCamp',                     year: '2021' },
  { icon: '<i class="fa-solid fa-chart-line"></i> &nbsp',    title: 'Digital Marketing',       issuer: 'Google Digital Garage',                     year: '2021' },
  { icon: '<i class="fa-solid fa-shield-halved"></i> &nbsp',    title: 'Cybersecurity Essentials',       issuer: 'Cisco Networking Academy',                     year: '2021' },
];

function openCertModal(idx) {
  const modal   = document.getElementById('cert-modal');
  const data    = CERT_DATA[idx];
  if (!modal || !data) return;
  const certImage = document.getElementById('modal-cert-image');
  certImage.src = `assets/certificate/cert-${idx + 1}.png`;
  document.getElementById('modal-title').innerHTML = `${data.icon} ${data.title}`;
  document.getElementById('modal-issuer').textContent = data.issuer;
  document.getElementById('modal-year').textContent   = data.year;
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
  modal.querySelector('.modal-close').focus();
}

function closeCertModal() {
  const modal = document.getElementById('cert-modal');
  if (!modal) return;
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

/* Keyboard: Escape closes modal */
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeCertModal();
});

/* Keyboard: Enter/Space on cert cards */
document.querySelectorAll('.cert-card').forEach((card, i) => {
  card.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openCertModal(i); }
  });
});


/* ================================================================
   14. CONTACT FORM – validation + submit
================================================================ */
let currentValidationLang = currentLang;

(function initForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  /** Strip HTML to prevent XSS in textContent */
  function sanitize(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#x27;')
      .trim();
  }

  function setError(id, msg) {
    const errEl = document.getElementById(id + '-error');
    const inp   = document.getElementById(id);
    if (errEl) errEl.textContent = msg;
    if (inp)   inp.classList.toggle('invalid', !!msg);
  }

  function validate() {
    let ok = true;
    const L = TRANSLATIONS[currentValidationLang] || TRANSLATIONS['np'];
    const name    = sanitize(form.name.value);
    const email   = form.email.value.trim();
    const subject = sanitize(form.subject.value);
    const message = sanitize(form.message.value);
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    if (!name    || name.length < 2)       { setError('name',    L.err_name);    ok = false; } else setError('name',    '');
    if (!email   || !emailRe.test(email))  { setError('email',   L.err_email);   ok = false; } else setError('email',   '');
    if (!subject || subject.length < 3)    { setError('subject', L.err_subject); ok = false; } else setError('subject', '');
    if (!message || message.length < 10)   { setError('message', L.err_message); ok = false; } else setError('message', '');
    return ok;
  }

  let isSubmitting = false;

  form.addEventListener('submit', e => {
    e.preventDefault();
    if (!validate()) return;
    if (isSubmitting) return;

    isSubmitting = true;
    const L       = TRANSLATIONS[currentValidationLang] || TRANSLATIONS['np'];
    const btnText = document.getElementById('form-btn-text');
    const success = document.getElementById('form-success');

    if (btnText) btnText.innerHTML = `<i class="fas fa-spinner fa-spin" aria-hidden="true"></i> ${L.sending}`;
    form.querySelector('button[type="submit"]').disabled = true;

    // Collect form data
    const name    = sanitize(form.name.value);
    const email   = form.email.value.trim();
    const subject = sanitize(form.subject.value);
    const message = sanitize(form.message.value);

    // Construct WhatsApp message with proper line breaks
    const whatsappMessage = `*New Contact Form Submission*

*Name:* ${name}
*Email:* ${email}
*Subject:* ${subject}

*Message:*
${message}`;

    const whatsappNumber = SOCIAL.whatsapp.replace(/\D/g, '');
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    // Try to open WhatsApp
    const whatsappOpened = window.open(whatsappUrl, '_blank');
    
    // Fallback: if WhatsApp was blocked or failed, show success message anyway
    // (The form data is preserved in the WhatsApp URL, so user can still send it)
    setTimeout(() => {
      if (btnText) {
        btnText.innerHTML = `<i class="fas fa-paper-plane" aria-hidden="true"></i> <span data-i18n="form_send">${L.form_send}</span>`;
      }
      form.querySelector('button[type="submit"]').disabled = false;
      if (success) {
        const msgEl = success.querySelector('[data-i18n="form_success"]');
        if (msgEl) msgEl.textContent = L.form_success;
        success.style.display = 'flex';
      }
      form.reset();
      isSubmitting = false;
      setTimeout(() => { if (success) success.style.display = 'none'; }, 5000);
    }, 1000);
  });
})();


/* ================================================================
   15. SOCIAL LINKS – inject all hrefs from SOCIAL config
================================================================ */
(function initSocialLinks() {
  const wa = `https://wa.me/${SOCIAL.whatsapp.replace(/\D/g,'')}?text=${encodeURIComponent(SOCIAL.whatsappMsg)}`;

  const map = {
    'sl-github':  SOCIAL.github,
    'sl-linkedin':SOCIAL.linkedin,
    'sl-email':   'mailto:' + SOCIAL.email,
    'cs-fb':  SOCIAL.facebook,
    'cs-yt':  SOCIAL.youtube,
    'cs-tt':  SOCIAL.tiktok,
    'cs-ig':  SOCIAL.instagram,
    'cs-gh':  SOCIAL.github,
    'cs-li':  SOCIAL.linkedin,
    'cs-em':  'mailto:' + SOCIAL.email,
    'fs-fb':  SOCIAL.facebook,
    'fs-yt':  SOCIAL.youtube,
    'fs-tt':  SOCIAL.tiktok,
    'fs-ig':  SOCIAL.instagram,
    'fs-gh':  SOCIAL.github,
    'fs-li':  SOCIAL.linkedin,
    'fs-em':  'mailto:' + SOCIAL.email,
    'cc-email-link': 'mailto:' + SOCIAL.email,
    'cc-phone': 'tel:' + SOCIAL.phone,
  };

  Object.entries(map).forEach(([id, href]) => {
    const el = document.getElementById(id);
    if (el) {
      el.href = href;
      if (!href.startsWith('mailto:') && !href.startsWith('tel:') && !href.startsWith('#')) {
        el.target = '_blank';
        el.rel    = 'noopener noreferrer';
      }
    }
  });

  /* WhatsApp links */
  document.querySelectorAll('.whatsapp-link').forEach(el => {
    el.href   = wa;
    el.target = '_blank';
    el.rel    = 'noopener noreferrer';
  });

  /* Project GitHub links */
  document.querySelectorAll('.proj-github').forEach(el => {
    el.href   = SOCIAL.github;
    el.target = '_blank';
    el.rel    = 'noopener noreferrer';
  });

  /* Contact card email value display */
  const ccEm = document.getElementById('cc-email-val');
  if (ccEm) ccEm.textContent = SOCIAL.email;

  /* Phone display */
  const ccPh = document.getElementById('cc-phone-num');
  if (ccPh) ccPh.textContent = SOCIAL.phone;

  /* WhatsApp display */
  const ccWa = document.getElementById('cc-wa-num');
  if (ccWa) ccWa.textContent = SOCIAL.whatsapp;
})();


/* ================================================================
   16. MAGNETIC BUTTON EFFECT
================================================================ */
(function initMagnetic() {
  if (window.matchMedia('(pointer: coarse)').matches) return;
  document.querySelectorAll('.magnetic').forEach(btn => {
    btn.addEventListener('mousemove', function(e) {
      const r  = this.getBoundingClientRect();
      const mx = (e.clientX - r.left - r.width  / 2) * 0.16;
      const my = (e.clientY - r.top  - r.height / 2) * 0.16;
      this.style.transform = `translate(${mx}px,${my}px)`;
    });
    btn.addEventListener('mouseleave', function() { this.style.transform = ''; });
  });
})();


/* ================================================================
   17. RIPPLE EFFECT ON BUTTONS
================================================================ */
(function initRipple() {
  document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
      const r    = this.getBoundingClientRect();
      const size = Math.max(r.width, r.height);
      const el   = document.createElement('span');
      el.className = 'ripple';
      el.style.cssText = `width:${size}px;height:${size}px;left:${e.clientX - r.left - size/2}px;top:${e.clientY - r.top - size/2}px`;
      this.appendChild(el);
      setTimeout(() => el.remove(), 700);
    });
  });
})();


/* ================================================================
   18. AOS + DOM READY init
================================================================ */
document.addEventListener('DOMContentLoaded', () => {
  if (typeof AOS !== 'undefined') {
    AOS.init({ duration: 650, once: true, offset: 70, easing: 'ease-out-cubic' });
  }
  initLangToggle();
});


/* ================================================================
   19. SMOOTH SCROLL (native CSS preferred, this is a fallback)
================================================================ */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const navH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) || 70;
    window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - navH, behavior: 'smooth' });
  });
});


/* ================================================================
   20. PARALLAX HERO SHAPES
================================================================ */
(function initParallax() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (window.matchMedia('(pointer: coarse)').matches) return;
  const shapes = document.querySelectorAll('.hero-shapes .shape');
  if (!shapes.length) return;
  window.addEventListener('mousemove', e => {
    const cx = (e.clientX / window.innerWidth  - 0.5) * 28;
    const cy = (e.clientY / window.innerHeight - 0.5) * 28;
    shapes.forEach((s, i) => {
      const f = (i + 1) * 0.5;
      s.style.transform = `translate(${cx * f}px,${cy * f}px)`;
    });
  }, { passive: true });
})();
