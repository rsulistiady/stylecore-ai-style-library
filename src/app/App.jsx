import { useMemo, useState } from 'react';
import Sidebar from '../components/layout/Sidebar';
import Topbar from '../components/layout/Topbar';
import PageContainer from '../components/layout/PageContainer';
import DashboardHome from '../components/dashboard/DashboardHome';
import StyleExplorer from '../components/explorer/StyleExplorer';
import CombinationLab from '../components/lab/CombinationLab';
import Card from '../components/shared/Card';

const pageTitles = {
  dashboard: 'Dashboard Home',
  explorer: 'Style Explorer',
  lab: 'Combination Lab',
  presets: 'Saved Presets',
  admin: 'Admin / Content Management',
};

function Placeholder({ title, description }) {
  return (
    <Card>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-slate-300">{description}</p>
    </Card>
  );
}

export default function App() {
  const [activePage, setActivePage] = useState('dashboard');

  const pageContent = useMemo(() => {
    switch (activePage) {
      case 'dashboard':
        return <DashboardHome />;
      case 'explorer':
        return <StyleExplorer />;
      case 'lab':
        return <CombinationLab />;
      case 'presets':
        return (
          <Placeholder
            title="Saved Presets (Planned)"
            description="Preset persistence and cloud sync are intentionally deferred for future auth-enabled releases."
          />
        );
      case 'admin':
        return (
          <Placeholder
            title="Admin Content Management (Planned)"
            description="Future admin tools will manage style libraries, curated packs, and team-safe governance workflows."
          />
        );
      default:
        return <DashboardHome />;
    }
  }, [activePage]);

  return (
    <div className="min-h-screen bg-surface lg:flex">
      <Sidebar activePage={activePage} onPageChange={setActivePage} />
      <div className="min-w-0 flex-1">
        <Topbar pageTitle={pageTitles[activePage] || 'StyleCore'} />
        <PageContainer>{pageContent}</PageContainer>
      </div>
    </div>
  );
}
