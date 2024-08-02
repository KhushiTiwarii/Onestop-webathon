import React from 'react';
import Sidebar from './components/sidebar';
import Navbar from './components/navbar';

const DashboardLayout = ({ children }) => {
    return (
        <div>
            <div className="h-full relative">
                <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-80 bg-gray-600">
                  <Sidebar />

                </div>
                <main className="md:pl-72 pb-10">
                    <Navbar/>
                    {children}
                </main>
            </div>
        </div>
    );
}

export default DashboardLayout;