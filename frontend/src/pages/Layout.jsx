

import Header from "../components/Header";
import Footer from '../components/Footer';
import AutoSignOut from "../components/AutoSignOut";


const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-[url('/arkaplan-min.png')] bg-no-repeat bg-cover bg-center">
       {/* <div className="absolute inset-0 bg-black opacity-10 z-0"></div> */}
      <Header />
      <AutoSignOut />
      <div className="flex-1">{children}</div>
      <Footer />
    
    </div>
  );
};

export default Layout;
