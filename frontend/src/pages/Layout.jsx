import Header from "../components/Header";
import Footer from '../components/Footer';
import AutoSignOut from "../components/AutoSignOut";


const Layout = ({ children }) => {
  return (
    <div className="relative flex flex-col ">
      {/* Arka plan resmini daha yukarı taşımak ve parallax etkisi vermek */}
      <div 
        className="absolute inset-0 bg-[url('/Mobil.jpg')] bg-cover bg-top  z-0"
        style={{ backgroundAttachment: 'fixed' }} 
      ></div>
      {/* İçerik ve şeffaf arkaplan overlay */}
      <div className="relative flex flex-col min-h-screen  z-10">
        <Header />
        <AutoSignOut />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;

