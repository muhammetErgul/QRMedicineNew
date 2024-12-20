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
            Çeyrek asırlık sağlık tecrübesini kaliteli hizmet anlayışıyla birleştiren hastanemiz, modern altyapısı ve ileri teknolojik donanımıyla her yıl yüz binlerce hastaya güvenle hizmet sunmaktadır. 400 yatak kapasitesi, biri hibrit olmak üzere 19 ameliyathanesi, 75.000 m² kapalı alanı ve yıllık 400 bin poliklinik ile 30 binden fazla ameliyat kapasitesiyle sağlık sektöründe öncü bir rol üstlenmiştir.Atlas Üniversitesi ile güçlerini birleştiren hastanemiz, bilimsel birikim ve akademik desteğiyle ülkemiz ve dünya tıbbına katkı sağlamaya devam etmektedir. Ayrıca, 10 bini aşkın öğrenciye uygulama eğitimi ve staj olanağı sunarak, sağlık eğitiminin geliştirilmesinde önemli bir misyon üstlenmiştir.Atlas Üniversitesi’nin vizyonu ile birleşen hastanemiz, etik tutumu ve ilkeli duruşundan taviz vermeden, hasta odaklı hizmet anlayışıyla sağlık ve eğitim alanında bir referans noktası olmaya devam edecektir.
          `,
          "tanitim-baslik": "ATLAS ÜNİVERSİTESİ HASTANESİ",
          "footer-title": "Atlas Üniversitesi Hastanesi",
          "cominication": "Iletisim Bilgileri",
          "survey-page": "Anketler",
          "about-us": "Hakkımızda",
          "appointment": "Randevu",
          "helpDesk": "Destek",
          "patientMessageStart": "Değerli Misafirimiz; Tedaviniz süresince karşılaşmanızı arzu etmediğimiz sorunlarla ilgili ",
          "patientMessageMiddle": " numaralı dahiliyi tuşlayarak hasta temsilcimize ",
          "patientMessageEnd": " ulaşabilirsiniz.",
          "order-screen": "Sipariş",
          "survey-title": "Anketler",
          "sonuc": "Sonuçlar",
          "staff":"Personel",
          "temizlik": "Temizlik",
          "teknik": "Teknik",
          "anketTitle": "Değerlendirme Anketi",
        },
      },
      en: {
        translation: {
        "tanitim-icerik": `
            Combining a quarter-century of healthcare experience with an understanding of quality service, our hospital safely serves hundreds of thousands of patients every year with its modern infrastructure and advanced technological equipment. With its 400 bed capacity, 19 operating rooms, one of which is hybrid, 75,000 m² closed area, 400 thousand outpatient clinics and more than 30 thousand surgeries per year, it has assumed a leading role in the health sector. Joining forces with Atlas University, our hospital continues to contribute to our country and world medicine with its scientific knowledge and academic support. In addition, it has undertaken an important mission in the development of health education by providing practical training and internship opportunities to more than 10 thousand students. Combining with the vision of Atlas University, our hospital will continue to be a reference point in the field of health and education with its patient-oriented service approach without compromising its ethical attitude and principled stance.
          `,
          "tanitim-baslik": "ATLAS UNIVERSITY HOSPITAL",
          "footer-title": "Atlas University Hospital",
          "cominication": "Communication Info",
          "survey-page": "Surveys",
          "about-us": "About Us",
          "appointment": "Appointment",
          "helpDesk": "Support",
          "order-screen": "Order",
          "survey-title": "Surveys",
          "sonuc": "Results",
          "patientMessageStart": "Dear Guest; If you encounter any issues that we do not wish for you to experience during your treatment, you can reach our patient representative by dialing the internal number ",
        "patientMessageMiddle": " available ",
        "patientMessageEnd": ".",
        "staff":"Personnel",
        "temizlik": "Cleaning",
        "teknik": "Technical",
        "anketTitle": "Evaluation Survey",
        },
      },
      ar: {
        translation: {
          "tanitim-icerik": `
            يقدم مستشفانا، الذي يجمع بين خبرة ربع قرن من الخبرة في مجال الصحة وفهم جودة الخدمة، خدمة آمنة لمئات الآلاف من المرضى كل عام بفضل بنيته التحتية الحديثة ومعداته التكنولوجية المتقدمة. بسعة 400 سرير، و19 غرفة عمليات، إحداها هجينة، و75,000 متر مربع من المساحة المغلقة، و400 ألف عيادة خارجية وأكثر من 30 ألف عملية جراحية سنوياً، فقد اضطلع المستشفى بدور رائد في القطاع الصحي. وبالتعاون مع جامعة أطلس، يواصل مستشفانا المساهمة في بلدنا والطب العالمي بمعرفته العلمية ودعمه الأكاديمي. بالإضافة إلى ذلك، اضطلع بمهمة هامة في تطوير التعليم الصحي من خلال توفير فرص التدريب العملي والتدريب الداخلي لأكثر من 10 آلاف طالب. سيظل مستشفانا، متحداً مع رؤية جامعة أطلس، نقطة مرجعية في مجال الصحة والتعليم من خلال نهج الخدمة الموجهة للمرضى دون المساس بموقفه الأخلاقي وموقفه المبدئي.
          `,
          "tanitim-baslik": "مستشفى أطلس الجامعي",
          "footer-title": "مستشفى أطلس الجامعي",
          "cominication": "معلومات الاتصال",
          "survey-page": "الاستبيانات",
          "about-us": "الطب - نحن",
          "appointment":" التعيين",
          "helpDesk": "الدعم",
          "order-screen": "الطلب",
          "survey-title": "الاستبيانات",
          "sonuc": "النتائج",
          "patientMessageStart": "ضيفنا العزيز؛ إذا واجهت أي مشاكل لا نرغب في مواجهتها أثناء علاجك، يمكنك الاتصال بممثل المرضى لدينا بالاتصال على الرقم الداخلي ",
        "patientMessageMiddle": " المتاح ",
        "patientMessageEnd": ".",
        "staff":"الموظفون",
        "temizlik": "التنظيف",
        "teknik": "التقني",
        "anketTitle": "استبيان التقييم",
        },
      },
    },
  });

export default i18n;
