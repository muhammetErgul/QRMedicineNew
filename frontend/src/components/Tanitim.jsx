import { useTranslation } from "react-i18next";

const Tanitim = () => {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen flex justify-center  items-center py-4 mt-2 mb-20">
      <div className="w-full sm:w-11/12 md:w-10/12 lg:w-4/5 xl:w-3/4  flex flex-col md:flex-row items-start gap-0">
        <div className="flex-1 w-full flex items-center justify-center">
          <div className="relative w-full h-0 pb-[56.25%]">
            {" "}
            {/* 16:9 oranı */}
            <iframe
              className="absolute inset-0 w-full h-full rounded-t-md"
              src="https://www.youtube.com/embed/Y7FvHzZ9sKU?si=sXhqb8SUNWSaDKeN"
              title="Medicine Hospital Tanitim Filmi"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="flex-1 p-4 rounded-b-md bg-white bg-opacity-90 shadow-sm ">
          <h1 className="text-3xl font-bold text-center font-libre text-[#0A568C] mb-4">
            {t("tanitim-baslik")}
          </h1>
          <p className="text-[#333] font-libre text-base leading-relaxed">
            {t("tanitim-icerik")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tanitim;
