import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { theme } from './styles/theme';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import LogoOverlay from './components/LogoOverlay/LogoOverlay';
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs';
import EconomicExcellence from './components/EconomicExcellence/EconomicExcellence';
import Services from './components/Services/Services';
import EconomicIndicators from './components/EconomicIndicators/EconomicIndicators';
import FeaturedProgram from './components/FeaturedProgram/FeaturedProgram';
import LatestResearch from './components/LatestResearch/LatestResearch';
import ExpertTeam from './components/ExpertTeam/ExpertTeam';
import ContactSection from './components/ContactSection/ContactSection';
import Footer from './components/Footer/Footer';
import InstitutionalBackground from './pages/About/InstitutionalBackground';
import InstitutionalInsights from './pages/About/InstitutionalInsights';
import TeamManagement from './pages/About/TeamManagement';
import StaffManagement from './pages/About/StaffManagement';
import Internship from './pages/About/Internship';
import ClementMalala from './pages/About/team/ClementMalala';
import BradElledge from './pages/About/team/BradElledge';
import BlessingsNtesa from './pages/About/team/BlessingsNtesa';
import ThomsonSilomba from './pages/About/staff/ThomsonSilomba';
import AnnualReports from './pages/Reports/AnnualReports';
import StrategicPlans from './pages/Reports/StrategicPlans';
import ResearchWork from './pages/Research/ResearchWork';
import BudgetAnalysis from './pages/Research/BudgetAnalysis';
import MiscellaneousResearch from './pages/Research/MiscellaneousResearch';
import ParliamentarySubmissions from './pages/Research/ParliamentarySubmissions';
import PolicyBriefs from './pages/Research/PolicyBriefs';
import WorkingPapers from './pages/Research/WorkingPapers';
import Updates from './pages/NoticeBoard/Updates';
import CapacityBuilding from './pages/Services/CapacityBuilding';
import FeasibilityStudies from './pages/Services/FeasibilityStudies';
import ConsultancyServices from './pages/Services/ConsultancyServices';
import EconomicResearch from './pages/Services/EconomicResearch';
import DataCollection from './pages/Services/DataCollection';
import ServicePage from './pages/Services';
import Contact from './pages/Contact';
import PathwaysDetails from './pages/Programs/PathwaysDetails';
import LoginRegister from './pages/LoginRegister';
import UserDashboard from './pages/UserDashboard';
import { PrivateRoutes } from './components/PrivateRoutes';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import Governance from './pages/About/Governance';

// ScrollToTop component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Home page component
const Home = () => (
  <>
    <Hero />
    <LogoOverlay />
    <WhyChooseUs />
    <EconomicExcellence />
    <Services />
    <EconomicIndicators />
    <FeaturedProgram />
    <LatestResearch />
    <ExpertTeam />
    <ContactSection />
  </>
);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div>
          <ScrollToTop />
          <Navbar />
          <main style={{ flex: 1 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about/institutional-background" element={<InstitutionalBackground />} />
              <Route path="/about/institutional-insights" element={<InstitutionalInsights />} />
              <Route path="/about/team-management" element={<TeamManagement />} />
              <Route path="/about/staff-management" element={<StaffManagement />} />
              <Route path="/about/internship" element={<Internship />} />
              <Route path="/about/team/clement-malala" element={<ClementMalala />} />
              <Route path="/about/team/brad-elledge" element={<BradElledge />} />
              <Route path="/about/team/blessings-ntesa" element={<BlessingsNtesa />} />
              <Route path="/about/staff/thomson-silomba" element={<ThomsonSilomba />} />
              <Route path="/about/governance" element={<Governance />} />
              <Route element={<PrivateRoutes />}>
                <Route path="/reports/annual-reports" element={<AnnualReports />} />
                <Route path="/reports/strategic-plans" element={<StrategicPlans />} />
                <Route path="/research/research-work" element={<ResearchWork />} />
                <Route path="/research/budget-analysis" element={<BudgetAnalysis />} />
                <Route path="/research/miscellaneous-research" element={<MiscellaneousResearch />} />
                <Route path="/research/parliamentary-submissions" element={<ParliamentarySubmissions />} />
                <Route path="/research/policy-briefs" element={<PolicyBriefs />} />
                <Route path="/research/working-papers" element={<WorkingPapers />} />
                <Route path="/dashboard" element={<UserDashboard />} />
              </Route>
              <Route path="/notice-board/updates" element={<Updates />} />
              <Route path="/services/capacity-building" element={<CapacityBuilding />} />
              <Route path="/services/feasibility-studies" element={<FeasibilityStudies />} />
              <Route path="/services/consultancy-services" element={<ConsultancyServices />} />
              <Route path="/services/economic-research" element={<EconomicResearch />} />
              <Route path="/services/data-collection" element={<DataCollection />} />
              <Route path="/pages/services" element={<ServicePage />} />
              <Route path="/pages/contact" element={<Contact />} />
              <Route path="/program/pathways-details" element={<PathwaysDetails />} />
              <Route path="/login" element={<LoginRegister />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<TermsOfService />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;