import React from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import DashBoard from './pages/DashBoard';
import AtsScanner from './pages/AtsScanner';
import InterviewPrep from './pages/InterviewPrep';
import JobSearch from './pages/JobSearch';
import PlacementResources from './pages/PlacementResources';
import Bot from './chatbot/Bot';

const DashboardLayout = () => {
  return (
    <div className="h-full relative">
      <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-10 bg-gray-600">
        <Sidebar />
      </div>
      <main className="md:pl-72 pb-10">
        <Navbar />
        <Routes>
          <Route path="/" element={<DashBoard />} />
          <Route path="/ats" element={<AtsScanner />} />
          <Route path="/interview-prep" element={<InterviewPrep />} />
          <Route path="/resources" element={<PlacementResources />} />
          <Route path="/jobs" element={<JobSearch />} />
        </Routes>
        <Bot/>
      </main>
    </div>
  );
};

export default DashboardLayout;
