import Header from "../components/Header";
import Footer from "../components/Footer";
import AutoSignOut from "../components/AutoSignOut";
import '../translations/layout.css'
import PropTypes from 'prop-types';

const Layout = ({ children }) => {
  return (
    <div className="relative flex flex-col min-h-screen">
      <div
        className="fixed inset-0 bg-cover z-0 no-repeat overflow-hidden bg-image"
        style={{
          width: "100%",
          height: "93vh",
          backgroundImage: `url(${window.innerWidth >= 768 ? '/hospital-bg.png' : '/atlasUni2-min.jpg'})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <div className="hidden md:block absolute inset-0 bg-black/20"></div>
      </div>

      <div className="relative flex flex-col flex-grow w-full">
        <div className="flex-grow z-10 md:bg-transparent bg-black/5">
          <Header />
          <AutoSignOut />
          <main className="pb-16 md:pb-24 px-4 md:px-8 lg:px-16">
            {children}
          </main>
        </div>
        <Footer />
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
