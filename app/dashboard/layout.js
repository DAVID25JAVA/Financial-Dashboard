import Navbar from "../component/Navbar";
import SecondNavbar from "../component/secondNav/secondNavbar";
 

export default function DashboardLayout({ children }) {
  return (
    <>
     <div className="flex h-screen bg-gray-100">
     

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
       
        <Navbar />
        <SecondNavbar />

        {/* Page Content */}
        <main className="flex- overflow-y-auto p-6">
          {children}
        </main>
      </div>
    // </div>
    </>
  );
}