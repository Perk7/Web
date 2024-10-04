import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './scrollToTop';

import AboutPage from './pages/about'
import Report from './pages/report'
import AdminPage from './pages/admin'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/" element={<Report />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;