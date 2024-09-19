import Header from "../components/Header";
import Footer from "../components/Footer";
import AutoSignOut from "../components/AutoSignOut";

const Layout = ({ children }) => {
  return (
    <div className="relative flex flex-col min-h-screen ">
      {/* Arka plan resmi ekranı tam olarak kaplayacak */}
      <div 
        className="absolute inset-0 bg-[url('/Mobil.jpg')] bg-cover bg-center z-0 "
        style={{  width: '100%', height: '100vh' }} 
      ></div>

      {/* İçerik ve şeffaf arkaplan overlay */}
      <div className="relative flex flex-col flex-grow z-10 bg-black/5">
        <Header />
        <AutoSignOut />
        <main className="flex-grow z-10">
          {children}
        </main>
      </div>

      {/* Footer her zaman ekranın altında görünecek */}
      <Footer  />
    </div>
  );
};

export default Layout;
