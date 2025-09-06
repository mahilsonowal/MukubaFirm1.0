import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
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
import PastEvents from './pages/Programs/PastEvents';
import TargetAudience from './pages/Programs/TargetAudience';
import VisionMission from './pages/Programs/VisionMission';
import Sponsors from './pages/Programs/Sponsors';
import LoginRegister from './pages/LoginRegister';
import UserDashboard from './pages/UserDashboard';
import { PrivateRoutes } from './components/PrivateRoutes';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import Governance from './pages/About/Governance';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import { useAuth } from './context/AuthContext';
import { useLocation, Routes, Route } from 'react-router-dom';
import AdminPrivateRoute from './components/AdminPrivateRoute';
import AdminReportUpload from './pages/AdminReportUpload';
import ServiceAgreement from './pages/ServiceAgreement';
import B2BServiceAgreement from './pages/B2BServiceAgreement';
import NDA from './pages/NDA';
import DPA from './pages/DPA';
import BrandedLoader from './components/common/BrandedLoader';
import { useState } from 'react';
import ResetPassword from './pages/ResetPassword';
import TOTPPasswordReset from './components/TOTPPasswordReset';
import TOTPSetup from './components/TOTPSetup';

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
  const [showLoader, setShowLoader] = useState(true);
  const location = useLocation();

  // Show loader on first mount
  useEffect(() => {
    const timer = setTimeout(() => setShowLoader(false), 500);
    return () => clearTimeout(timer);
  }, []);

  // Always show ResetPassword if type=recovery is present in the URL
  const params = new URLSearchParams(location.search);
  if (params.get('type') === 'recovery') {
    return <ResetPassword />;
  }

  if (showLoader) {
    return <BrandedLoader />;
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* Remove <Router> wrapper, just return the contents */}
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
            </Route>
            <Route path="/user-dashboard" element={<UserDashboard />} />
            <Route path="/notice-board/updates" element={<Updates />} />
            <Route path="/services/capacity-building" element={<CapacityBuilding />} />
            <Route path="/services/feasibility-studies" element={<FeasibilityStudies />} />
            <Route path="/services/consultancy-services" element={<ConsultancyServices />} />
            <Route path="/services/economic-research" element={<EconomicResearch />} />
            <Route path="/services/data-collection" element={<DataCollection />} />
            <Route path="/pages/services" element={<ServicePage />} />
            <Route path="/pages/contact" element={<Contact />} />
            <Route path="/program/pathways-details" element={<PathwaysDetails />} />
            <Route path="/pathways-details/past-events" element={<PastEvents />} />
            <Route path="/pathways-details/target-audience" element={<TargetAudience />} />
            <Route path="/pathways-details/vision-mission" element={<VisionMission />} />
            <Route path="/pathways-details/sponsors" element={<Sponsors />} />
            <Route path="/login" element={<LoginRegister />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/totp-reset" element={<TOTPPasswordReset />} />
            <Route path="/totp-setup" element={<TOTPSetup />} />
            <Route path="/admin-login" element={<AdminLogin />} />
            <Route element={<AdminPrivateRoute />}>
              <Route path="/admin-dashboard" element={<AdminDashboard />} />
              <Route path="/admin-upload-report" element={<AdminReportUpload />} />
            </Route>
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/service-agreement" element={<ServiceAgreement />} />
            <Route path="/b2b-service-agreement" element={<B2BServiceAgreement />} />
            <Route path="/nda" element={<NDA />} />
            <Route path="/dpa" element={<DPA />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;