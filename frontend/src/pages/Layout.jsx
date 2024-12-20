import Header from "../components/Header";
import Footer from "../components/Footer";
import AutoSignOut from "../components/AutoSignOut";

const Layout = ({ children }) => {
  return (
    <div className="relative flex flex-col ">
      {/* Arka plan resmi ekranı tam olarak kaplayacak */}
      <div
        className="fixed inset-0 bg-[url('/atlasUni2-min.jpg')] bg-cover z-0 no-repeat sm:bg-[position:center_-50px] 
          md:bg-[position:center_-100px] 
          lg:bg-[position:center_-150px] 
          xl:bg-[position:center_-200px] 
          2xl:bg-[position:center_-250px]"
        style={{
          width: "100%",
          height: "94vh",
        }}
      ></div>

      {/* İçerik ve şeffaf arkaplan overlay */}
      <div className="relative flex flex-col min-h-screen">
        <div className="flex-grow z-10 bg-black/5">
          <Header />
          <AutoSignOut />
          <main className="pb-16">
            {" "}
            {/* Footer'ın yüksekliği kadar padding-bottom */}
            {children}
          </main>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
