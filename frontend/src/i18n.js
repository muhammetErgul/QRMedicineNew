import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    lng: "tr",
    resources: {
      tr: {
        translation: {
          "tanitim-icerik": `
            Atlas Üniversitesi Medicine Hastanesi; 1998’den beri kaliteli sağlık
            hizmetleriyle hastalarının güvenini kazanmış, başarılı tanı ve tedavi
            süreçleriyle birçok hastasının şifa bulmasına vesile olmuş saygın bir
            sağlık kurumu olarak hizmetlerini devam ettirmektedir. Hastanemiz, son
            teknoloji ile donatılmış modern binası, teknik cihaz ve
            ekipmanlarıyla, 75.000 m2 kapalı alana sahiptir. 400 yatak kapasitesi,
            biri hibrit olmak üzere 19 ameliyathanesi ile yılda 400 bin poliklinik
            ve 30 binden fazla ameliyat gerçekleştirerek sunduğu hizmetlerle
            sağlık sistemimiz içerisinde, öncü ve lider kurumlardan biri olmayı
            başarmıştır. Ayrıca 250 kişilik konferans salonu, 3 adet dersliği ile
            hastanemiz; yıllardır lise ve üniversite düzeyinde uygulama eğitimi ve
            sağladığı staj olanaklarıyla 10 bini aşkın öğrencisine sağlık eğitimi
            vererek önemli bir misyon üstlenmiştir. Güçlü bir akademik kadroya ve
            bilimsel birikime sahip olan hastanemiz 2019 yılından itibaren “Atlas
            Üniversitesi Medicine Hastanesi” olarak, etik tutumu ve ilkeli
            duruşundan taviz vermeden, ülkemiz ve dünya tıbbına hizmet vermeye
            devam edecektir.
          `,
          "tanitim-baslik": "ATLAS ÜNİVERSİTESİ HASTANESİ",
          "footer-title": "Atlas Üniversitesi Hastanesi",
          "cominication": "Iletisim Bilgileri",
          "survey-page": "Anketler",
          "about-us": "Hakkımızda",
          "appointment": "Randevu",
          "info": "Bilgi",
          "order-screen": "Sipariş",
          "survey-title": "Anketler",
          "sonuc": "Sonuçlar",
        },
      },
      en: {
        translation: {
        "tanitim-icerik": `
            Atlas University Medicine Hospital; Since 1998, it has been continuing its services as a reputable health institution that has gained the trust of its patients with its quality health services and has been instrumental in healing many patients with successful diagnosis and treatment processes. Our hospital has a modern building equipped with the latest technology, technical devices and
            has a closed area of 75,000 m2 with its equipment. With its 400 bed capacity, 19 operating rooms, one of which is hybrid, it has managed to become one of the pioneering and leading institutions in our healthcare system with the services it provides by performing 400 thousand polyclinics and more than 30 thousand surgeries annually. In addition, with its 250-seat conference hall and 3 classrooms, our hospital has been providing practical education and training at high school and university level for years.
            has undertaken an important mission by providing health education to more than 10 thousand students with internship opportunities. Our hospital, which has a strong academic staff and scientific accumulation, will continue to serve our country and the world medicine as “Atlas University Medicine Hospital” since 2019, without compromising its ethical attitude and principled stance.
          `,
          "tanitim-baslik": "ATLAS UNIVERSITY HOSPITAL",
          "footer-title": "Atlas University Hospital",
          "cominication": "Communication Info",
          "survey-page": "Surveys",
          "about-us": "About Us",
          "appointment": "Appointment",
          "info": "Information",
          "order-screen": "Order",
          "survey-title": "Surveys",
          "sonuc": "Results",
        },
      },
      ar: {
        translation: {
          "tanitim-icerik": `
            مستشفى أطلس للطب الجامعي؛ منذ عام 1998، اكتسب مستشفى أطلس للطب الجامعي ثقة مرضاه بخدماته الصحية عالية الجودة، ويواصل خدماته كمؤسسة صحية مرموقة كان لها دور فعال في شفاء العديد من المرضى من خلال عمليات التشخيص والعلاج الناجحة. يحتوي مستشفانا على مبنى حديث مجهز بأحدث التقنيات والأجهزة التقنية و
            يحتوي على مساحة مغلقة تبلغ 75,000 م2 بتجهيزاته. بسعة 400 سرير، و19 غرفة عمليات، إحداها هجينة، استطاع المستشفى أن يصبح من المؤسسات الرائدة والرائدة في نظامنا الصحي بالخدمات التي يقدمها من خلال إجراء 400 ألف عيادة متعددة التخصصات وأكثر من 30 ألف عملية جراحية سنوياً. وبالإضافة إلى ذلك، يوفر المستشفى منذ سنوات التعليم والتدريب العملي على مستوى المدارس الثانوية والجامعات من خلال قاعة مؤتمرات تتسع لـ 250 شخصًا و3 قاعات دراسية.
            وقد اضطلع المستشفى بمهمة هامة من خلال توفير التعليم الصحي لأكثر من 10 آلاف طالب من خلال فرص التدريب التي يوفرها. سيستمر مستشفانا، الذي يتمتع بطاقم أكاديمي قوي وتراكم علمي كبير، في خدمة بلدنا والطب العالمي باسم ”مستشفى أطلس للطب الجامعي“ منذ عام 2019، دون المساس بموقفه الأخلاقي وموقفه المبدئي.
          `,
          "tanitim-baslik": "مستشفى أطلس الجامعي",
          "footer-title": "مستشفى أطلس الجامعي",
          "cominication": "معلومات الاتصال",
          "survey-page": "الاستبيانات",
          "about-us": "الطب - نحن",
          "appointment":" التعيين",
          "info": "معلومات",
          "order-screen": "الطلب",
          "survey-title": "الاستبيانات",
          "sonuc": "النتائج",
        },
      },
    },
  });

export default i18n;
