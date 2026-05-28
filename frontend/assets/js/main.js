// ====================== MAIN.JS - FULL CODE ======================

let currentLang = 'en';

const translations = {
  en: {
    nav_about: 'About',
    nav_products: 'Products',
    nav_team: 'Team',
    nav_contact: 'Contact',
    lang_button: 'मराठी',
    app_login: 'App Login',
    hero_premium: 'Premium Packaged Drinking Water',
    hero_subtitle: 'Trusted Every Drop',
    hero_quote_left: 'विश्वासाचे शुद्ध पाणी,',
    hero_quote_right: 'प्रत्येकासाठी!',
    hero_cta_contact: 'Inquiry',
    hero_cta_order: 'Order Water',
    stat_customers: 'Customers',
    stat_towns: 'Towns',
    stat_certified: 'ISI Certified',
    product_20l_title: '20L Water Can',
    product_20l_desc: 'Home | Store | Hotel | Office',
    product_delivery: 'Home Delivery',
    quality_title: 'Purity You Can Count On',
    quality_subtitle: 'Our water is purified, tested, and packaged with care so every bottle delivers safe, refreshing hydration for your family and business.',
    quality_lab_title: 'Lab Tested',
    quality_lab_desc: 'Regular quality checks ensure every batch meets the highest safety standards.',
    quality_filter_title: 'Advanced Filtration',
    quality_filter_desc: 'RO, UV and mineral balancing deliver pure water with natural taste.',
    quality_pack_title: 'Secure Packaging',
    quality_pack_desc: 'Tamper-evident seals and hygienic packing keep every bottle safe.',
    quality_delivery_title: 'Fast Delivery',
    quality_delivery_desc: 'Reliable local delivery across nearby towns and neighborhoods.',
    quality_tagline: 'Trusted Water Solutions',
    quality_right_title: 'Clean, Certified, and Delivered',
    quality_right_body: 'From source to bottle, we keep every step transparent so you always get water you can trust.',
    quality_right_point1: 'ISO & ISI approved production standards',
    quality_right_point2: 'Daily hygiene audits and staff training',
    quality_right_point3: '24/7 customer support for orders and delivery',
    about_label: 'Our Perspective',
    about_heading: 'A dream begins, trust continues',
    about_intro: 'Our story did not start like a product launch — it grew from gentle care in a small village. Every drop carries our promise of purity.',
    about_card1_title: 'Fresh Initiative',
    about_card1_body: 'We deliver water founded on transparency and trust, building satisfaction for our village community.',
    about_quote: '"If not us, then who will serve our people?"',
    about_card2_title: 'Purpose Takes Shape',
    about_card2_body: 'The idea of purifying community water gives direction to our journey.',
    about_card3_title: 'A Step Toward the Goal',
    about_card3_body: 'Delivering pure water to homes, clinics, shops and schools is our mission.',
    about_heading_part1: 'A',
    about_heading_em: 'Dream',
    about_heading_part2: 'Begins,',
    about_heading_part3: 'Trust Journey',
    about_right_tag: 'Our Values',
    about_right_title: 'Water is life, every drop with integrity.',
    about_right_body: 'We focus on delivering clean, certified, and trusted water for local communities. Every bottle is made from careful testing and safe packing.',
    about_right_list_title: 'Our key pillars',
    about_value1: 'Highest-quality water',
    about_value2: 'Stable and safe delivery',
    about_value3: 'Local jobs and fair practices',
    about_value4: 'Environmental responsibility',
    about_cta_label: 'Commitment to trust',
    about_cta_heading: 'Bringing trust to every drop — and making every moment matter.',
    about_cta_body: 'Purity and responsibility are our top priorities at every step.',
    team_title: 'Our Leadership Team',
    team_pill: 'Our Team',
    team_title_part1: 'Meet The People Behind',
    team_title_brand: 'Anivex',
    team_subtitle: '"Anivex — passionate people building trust."',
    contact_title: 'Contact Us',
    contact_subtitle: 'Reach out for orders and inquiries',
    contact_phone: 'Phone',
    contact_email: 'Email',
    contact_address: 'Address',
    footer_tagline: 'Pure Water • Pure Trust',
    pill_packaged: 'Packaged Water',
    pill_20l: '20L Service',
    pill_retail: 'Retail',
    pill_wholesale: 'Wholesale',
    pill_event: 'Event',
    footer_copyright: '© 2026 Anivex Water Solutions. All Rights Reserved.'
  },
  mr: {
    nav_about: 'आमच्याबद्दल',
    nav_products: 'उत्पादने',
    nav_team: 'टीम',
    nav_contact: 'संपर्क',
    lang_button: 'EN',
    app_login: 'अ‍ॅप लॉगिन',
    hero_premium: 'प्रिमियम पॅकेज्ड ड्रिंकिंग वॉटर',
    hero_subtitle: 'विश्वासाचे प्रत्येक थेंब',
    hero_quote_left: 'विश्वासाचे शुद्ध पाणी,',
    hero_quote_right: 'प्रत्येकासाठी!',
    hero_cta_contact: 'चौकशी करा',
    hero_cta_order: 'पाणी ऑर्डर करा',
    stat_customers: 'ग्राहक',
    stat_towns: 'गावे',
    stat_certified: 'ISI प्रमाणित',
    product_20l_title: '20L वॉटर कॅन',
    product_20l_desc: 'घर | दुकान | हॉटेल | कार्यालय',
    product_delivery: 'होम डिलिव्हरी',
    quality_title: 'शुद्धता ज्यावर तुम्ही विश्वास ठेवू शकता',
    quality_subtitle: 'आमचे पाणी स्वच्छ, तपासलेले आणि काळजीपूर्वक पॅक केले जाते ज्यामुळे प्रत्येक बाटली आपल्या कुटुंबासाठी सुरक्षित आणि ताजेतवाने असते.',
    quality_lab_title: 'लॅब टेस्टेड',
    quality_lab_desc: 'दररोजच्या गुणवत्तेच्या तपासण्या प्रत्येक बॅच उच्च सुरक्षा मानकांवर पूर्ण करत असल्याची हमी देतात.',
    quality_filter_title: 'प्रगत फिल्ट्रेशन',
    quality_filter_desc: 'RO, UV आणि मिनरल बॅलन्सिंग स्वच्छ चव आणि आरोग्यदायी पाणी देते.',
    quality_pack_title: 'सुरक्षित पॅकिंग',
    quality_pack_desc: 'तेम्पर-एविडंट सील आणि स्वच्छ पॅकिंग प्रत्येक बाटली सुरक्षित ठेवतात.',
    quality_delivery_title: 'वेगवान डिलीव्हरी',
    quality_delivery_desc: 'जवळच्या गावांमध्ये आणि शेजारील भागात विश्वसनीय स्थानिक डिलिव्हरी.',
    quality_tagline: 'विश्वासार्ह जल समाधान',
    quality_right_title: 'स्वच्छ, प्रमाणित आणि वितरित',
    quality_right_body: 'स्त्रोतापासून बाटलीपर्यंत, आम्ही प्रत्येक टप्पा पारदर्शक ठेवतो जेणेकरुन तुम्हाला नेहमी विश्वासार्ह पाणी मिळेल.',
    quality_right_point1: 'ISO आणि ISI मंजूर उत्पादन मानके',
    quality_right_point2: 'दैनंदिन स्वच्छता ऑडिट आणि कर्मचारी प्रशिक्षण',
    quality_right_point3: 'ऑर्डर आणि डिलिव्हरीसाठी 24/7 ग्राहक समर्थन',
    about_label: 'आमचे दृष्टिकोन',
    about_heading: 'एक स्वप्नाची सुरुवात, विश्वासाची वाटचाल',
    about_intro: 'आमची गोष्ट व्यवसायाने सुरू झाली नाही — ती एका छोट्या गावाच्या हृदयातून जन्मलेल्या स्वप्नाने सुरू झाली.',
    about_card1_title: 'नव पुढाकार',
    about_card1_body: 'आम्ही नेहमी पारदर्शकता आणि विश्वासावर आधारित पाणी पुरवतो, गावातील लोकांसाठी समाधान तयार करतो.',
    about_quote: '"जर आपण नाही, तर आपल्या माणसांसाठी कोण करणार?"',
    about_card2_title: 'उद्देशाचा जन्म',
    about_card2_body: 'समाजाचे पाणी स्वच्छ करण्याची संकल्पना आमच्या वाटचालीला आकार देते.',
    about_card3_title: 'ध्येयाचे एक पाऊल',
    about_card3_body: 'घर, दवाखाना, दुकाने आणि शाळांपर्यंत शुद्ध पाणी पोहोचवणे आमचे ध्येय आहे.',
    about_heading_part1: 'एक',
    about_heading_em: 'स्वप्नाची',
    about_heading_part2: 'सुरुवात,',
    about_heading_part3: 'विश्वासाची वाटचाल',
    about_right_tag: 'आमचे मूल्य',
    about_right_title: 'पाणी म्हणजे जीवन, प्रत्येक थेंबात निष्ठा.',
    about_right_body: 'आम्ही स्थानिक समुदायासाठी स्वच्छ, प्रमाणित आणि विश्वासार्ह पाणी पुरवण्यावर लक्ष केंद्रित करतो. प्रत्येक बाटली कठोर चाचणी आणि सुरक्षित पॅकिंग पासून तयार होते.',
    about_right_list_title: 'आमचे मुख्य मुद्दे',
    about_value1: 'उच्चतम दर्जाचे पाणी',
    about_value2: 'स्थिर आणि सुरक्षित वितरण',
    about_value3: 'स्थानिक रोजगार आणि न्याय्य व्यवहार',
    about_value4: 'पर्यावरणाबद्दल संवेदनशीलता',
    about_cta_label: 'विश्वासाचा निर्धार',
    about_cta_heading: 'प्रत्येक थेंबत विश्वास पोहोचवणे — आणि प्रत्येक घडवणे.',
    about_cta_body: 'आमच्या प्रत्येक पावलावर शुद्धता आणि जबाबदारी हीच प्राथमिकता आहे.',
    team_title: 'आमचे नेतृत्व संच',
    team_pill: 'आमची टीम',
    team_title_part1: 'आमच्या मागे असलेले लोक ओळखा',
    team_title_brand: 'अनिवेक्स',
    team_subtitle: '"Anivex मागे विश्वास निर्माण करणारे उत्साही लोक."',
    contact_title: 'संपर्क करा',
    contact_subtitle: 'ऑर्डर आणि चौकशीसाठी आमच्याशी संपर्क साधा',
    contact_phone: 'फोन',
    contact_email: 'ईमेल',
    contact_address: 'पत्ता',
    footer_tagline: 'स्वच्छ पाणी • विश्वासाची हमी',
    pill_packaged: 'पॅकड पाणी',
    pill_20l: '२०L सेवा',
    pill_retail: 'रिटेल',
    pill_wholesale: 'थोक ऑर्डर',
    pill_event: 'इव्हेंट',
    footer_copyright: '© 2026 अनिवेक्स वॉटर सोल्यूशन्स. सर्व हक्क राखीव.'
  }
};

const teamMembers = [
  {
    name: "Pranita Sanjay Junne",
    role_en: "Founder & Owner",
    role_mr: "संस्थापक & मालक",
    desc_en: "M.Sc. Software Engineering professional who transformed a heartfelt dream into a mission to build a trusted brand that serves society.",
    desc_mr: "एम.एससी. सॉफ्टवेअर इंजिनिअरिंग व्यावसायिक. सामाजिक सेवेसाठी स्वप्नाला वास्तवात आणणारी.",
    img: "assets/images/pranita.png"
  },
  {
    name: "Dnyaneshwar Venkatrao Junne",
    role_en: "Operations Manager",
    role_mr: "ऑपरेशन्स मॅनेजर",
    desc_en: "Coming from strong farming roots and known for innovative agriculture in turmeric, maize, ginger, cotton and chilli.",
    desc_mr: "शेतीची मजबूत पार्श्वभूमी. नाविन्यपूर्ण कृषी क्षेत्रात काम करणारे.",
    img: "assets/images/dnyaneshwar.png"
  },
  {
    name: "Sunil Kalyan",
    role_en: "Production Manager",
    role_mr: "प्रॉडक्शन मॅनेजर",
    desc_en: "Focused on maintaining production quality, operational consistency and ensuring every process runs smoothly with dedication and discipline.",
    desc_mr: "उत्पादन गुणवत्ता आणि प्रक्रिया सुसूत्रित ठेवण्यावर लक्ष केंद्रित.",
    img: "assets/images/sunil.png"
  },
  {
    name: "Arun Junne",
    role_en: "Product Delivery Manager",
    role_mr: "प्रॉडक्ट डिलिव्हरी मॅनेजर",
    desc_en: "Committed to timely delivery and customer satisfaction, ensuring reliable service and smooth product delivery operations across every order.",
    desc_mr: "समयबद्ध डिलिव्हरी आणि ग्राहक समाधानासाठी कटिबद्ध, प्रत्येक ऑर्डरमध्ये विश्वसनीय सेवा सुनिश्चित करणारे.",
    img: "assets/images/arun.png"
  },
  {
    name: "Mayur Junne",
    role_en: "Finance Manager",
    role_mr: "फायनान्स मॅनेजर",
    desc_en: "Managing financial planning with responsibility and vision for a strong and stable future.",
    desc_mr: "जबाबदारीने आर्थिक नियोजन आणि कंपनीच्या भविष्यकडे पाहणारे.",
    img: "assets/images/mayur.png"
  },
  {
    name: "Vedant Junne",
    role_en: "New Ideas & Innovation",
    role_mr: "नवीन कल्पना आणि नवोन्मेष",
    desc_en: "A young mind full of curiosity, creativity and fresh thinking, inspiring new ideas and innovation for the future of Anivex.",
    desc_mr: "कुतूहल, सर्जनशीलता आणि नवीन विचारांनी भरलेला तरुण मन, अनिवेक्सच्या भविष्यासाठी नवोन्मेष प्रेरित करणारा.",
    img: "assets/images/vedant.png"
  }
];

function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang === 'mr' ? 'mr' : 'en';

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    if (translations[lang] && translations[lang][key] !== undefined) {
      el.textContent = translations[lang][key];
    }
  });

  const langToggle = document.getElementById('lang-toggle');
  if (langToggle) langToggle.textContent = translations[lang].lang_button;

  const appLogin = document.getElementById('app-login');
  if (appLogin) appLogin.innerHTML = `<i class="fas fa-user"></i> ${translations[lang].app_login}`;

  renderTeam();
  initTeamSlider();
}

function toggleLanguage() {
  setLanguage(currentLang === 'en' ? 'mr' : 'en');
}

function renderTeam() {
  const container = document.getElementById('team-grid');
  if (!container) return;

  container.innerHTML = teamMembers.map(member => `
    <div class="team-card">
      <div class="team-media">
        <img src="${member.img}" alt="${member.name}" />
        <span class="role-badge">${member[`role_${currentLang}`] || member.role_en}</span>
      </div>
      <div class="card-content">
        <div class="member-role">${member[`role_${currentLang}`] || member.role_en}</div>
        <div class="member-name">${member.name}</div>
        <div class="member-desc">${member[`desc_${currentLang}`] || member.desc_en}</div>
      </div>
    </div>
  `).join('');
}

// Team Slider
let _teamCurrent = 0;
function initTeamSlider() {
  const track = document.getElementById('team-grid');
  const prev = document.getElementById('team-prev');
  const next = document.getElementById('team-next');
  const dotsContainer = document.getElementById('team-dots');
  if (!track) return;

  const cards = Array.from(track.children);
  const count = cards.length;
  if (!dotsContainer) return;

  dotsContainer.innerHTML = '';
  cards.forEach((card, i) => {
    card.dataset.index = i;
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'team-dot';
    btn.dataset.index = i;
    btn.addEventListener('click', () => goToTeam(i, true));
    dotsContainer.appendChild(btn);
  });

  function setActive(i) {
    cards.forEach((c, idx) => c.classList.toggle('active', idx === i));
    const dots = dotsContainer.querySelectorAll('.team-dot');
    dots.forEach((d, idx) => d.classList.toggle('active', idx === i));
  }

  window.goToTeam = function(i, focus = false) {
    if (i < 0) i = count - 1;
    if (i >= count) i = 0;
    _teamCurrent = i;
    const card = cards[i];
    if (card && track) {
      card.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      setActive(i);
    }
  };

  prev && (prev.onclick = () => goToTeam(_teamCurrent - 1, true));
  next && (next.onclick = () => goToTeam(_teamCurrent + 1, true));

  goToTeam(0);
}

// WhatsApp Functions
const whatsappNumber = "9730619511";   // Change this to your number

function openWhatsAppInquiry() {
  const message = "Hello Anivex, I would like to inquire about your water services.";
  window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
}

function openWhatsAppOrder() {
  const message = "Hello Anivex, I want to order water. Please send me details.";
  window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
}

// Product Modal on Click
function showProductModal() {
  const modalHTML = `
    <div id="product-modal" class="fixed inset-0 bg-black/70 flex items-center justify-center z-[1000] p-4">
      <div class="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl">
        <div class="relative">
          <button onclick="closeProductModal()" 
                  class="absolute top-4 right-4 bg-white rounded-full w-11 h-11 flex items-center justify-center text-3xl shadow-md hover:bg-gray-100 z-10">×</button>
          <img src="assets/images/anivex-bottles.jpg" alt="Anivex Water" class="w-full">
        </div>
        <div class="p-8 text-center">
          <h2 class="text-3xl font-bold text-blue-900">ANIVEX AQUA</h2>
          <p class="text-gray-600 mt-2">Pure • Safe • Trusted Every Drop</p>
          <button onclick="closeProductModal()" class="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-10 py-3.5 rounded-full font-semibold">Close</button>
        </div>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML('beforeend', modalHTML);
}

function closeProductModal() {
  const modal = document.getElementById('product-modal');
  if (modal) modal.remove();
}

// Product Showcase Scroll Animation
function animateProductShowcase() {
  const showcase = document.getElementById('product-showcase');
  if (!showcase) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        showcase.classList.add('visible');
      }
    });
  }, { threshold: 0.3 });

  observer.observe(showcase);
}

// ==================== INITIALIZE ALL ====================
document.addEventListener('DOMContentLoaded', () => {
  setLanguage(currentLang);
  renderTeam();
  initTeamSlider();
  animateProductShowcase();
});