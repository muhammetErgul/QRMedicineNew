import Header from "../components/Header";
import Footer from "../components/Footer";
import AutoSignOut from "../components/AutoSignOut";

const Layout = ({ children }) => {
  return (
    <div className="relative flex flex-col min-h-screen overflow-hidden">
      {/* Background image with adjusted position */}
      <div
        className="fixed inset-0 bg-[url('/atlasUni2-min.jpg')] bg-cover bg-center z-0 no-repeat"
        style={{
          width: "100%",
          height: "100vh",
          backgroundPosition: "center 400%" // This will move the image up
        }}
      ></div>

      {/* Content and transparent background overlay */}
      <div className="relative flex flex-col flex-grow">
        <div className="flex-grow z-10 bg-black/5">
          <Header />
          <AutoSignOut />
          <main className="pb-20"> {/* Increased padding for larger footer */}
            {children}
          </main>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
