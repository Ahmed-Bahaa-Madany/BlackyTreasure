import './App.scss';
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import { lazy } from 'react';
import { LanguageProvider } from './context/LanguageContext'
import Navbar from './Components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Services from './pages/Services/Services';
import About from './pages/About/About';
import NotFound from './pages/NotFound/NotFound';
import Footer from './Components/Footer/Footer';
// import WhatsApp from './Components/WhatsApp/WhatsApp';
import ContactUs from './pages/ContactUs/ContactUs';
import ContactModal from './Components/ContactModal/ContactModal';
import Login from './pages/Login/Login';
import Admin from './pages/Admin/Admin';

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Navbar />
        <ContactModal />
        <Switch>
          <Route path={'/'} exact component={Home} />
          <Route path={'/services'} exact component={Services} />
          <Route path={'/about'} exact component={About} />
          <Route path={'/contact'} exact component={ContactUs} />
          <Route path={'/admin'} exact component={Login} />
          <Route path={'/adminpanal'} exact component={Admin} />
          <Route path={'*'} exact component={NotFound} />
        </Switch>
        <Footer />
        {/* <WhatsApp /> */}
      </BrowserRouter>
    </LanguageProvider>
  );
}
