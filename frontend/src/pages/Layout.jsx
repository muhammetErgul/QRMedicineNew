import Header from "../components/Header";
import Footer from "../components/Footer";
import AutoSignOut from "../components/AutoSignOut";

const Layout = ({ children }) => {
  return (
    <div className="relative flex flex-col min-h-screen">
      {/* Arka plan resmi ekranı tam olarak kaplayacak */}
      <div
        className="fixed inset-0 bg-[url('/atlasUni2.jpg')] bg-cover z-0 no-repeat"
        style={{
          width: "100%",
          height: "100vh",
          backgroundPositionY: " -40px ",
        }}
      ></div>

      {/* İçerik ve şeffaf arkaplan overlay */}
      <div className="relative flex flex-col min-h-screen">
        <div className="flex-grow z-10 bg-black/5">
          <Header />
          <AutoSignOut />
          <main className="pb-16"> {/* Footer'ın yüksekliği kadar padding-bottom */}
            {children}
          </main>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;