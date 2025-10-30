import { useTranslation } from "react-i18next";

const Tanitim = () => {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen flex justify-center items-center py-4 mt-2 mb-20">
      <div className="w-full sm:w-11/12 md:w-10/12 lg:w-4/5 xl:w-3/4 flex flex-col md:flex-row gap-0 md:gap-8 md:bg-white md:bg-opacity-90 md:p-8 md:rounded-lg md:shadow-lg">
        {/* Video Bölümü */}
        <div className="flex-1 w-full">
          <div className="relative w-full h-0 pb-[56.25%] md:rounded-lg overflow-hidden shadow-md">
            <iframe
              className="absolute inset-0 w-full h-full rounded-t-md md:rounded-lg"
              src="https://youtu.be/WniUSOq3tZg"
              title="Atlas Üniversitesi Hastanesi Tanitim Filmi"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* İçerik Bölümü */}
        <div className="flex-1 p-4 md:p-0 rounded-b-md md:rounded-none bg-white bg-opacity-90 md:bg-transparent shadow-sm md:shadow-none">
          <h1 className="text-2xl md:text-4xl font-bold text-center font-libre text-[#0A568C] mb-4 md:mb-8">
            {t("tanitim-baslik")}
          </h1>
          <p className="text-[#333] font-libre text-sm md:text-lg leading-relaxed md:leading-loose">
            {t("tanitim-icerik")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tanitim;
