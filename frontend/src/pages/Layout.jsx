import Header from "../components/Header";
import Footer from "../components/Footer";
import AutoSignOut from "../components/AutoSignOut";
import '../translations/layout.css'


const Layout = ({ children }) => {
  return (
    <div className="relative flex flex-col">
      <div
        className="fixed inset-0 bg-[url('/atlasUni2-min.jpg')] bg-cover z-0 no-repeat overflow-hidden bg-image"
        style={{
          width: "100%",
          height: "93vh",
        }}
      ></div>

      <div className="relative flex flex-col min-h-screen">
        <div className="flex-grow z-10 bg-black/5">
          <Header />
          <AutoSignOut />
          <main className="pb-16">
            {children}
          </main>
        </div>
        <Footer />
      </div>
    </div>
  );
};



export default Layout;
