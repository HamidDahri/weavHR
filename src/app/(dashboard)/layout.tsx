import { Sidebar } from "../components/SideBar";
import { TopNav } from "../components/TopNav";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full">
        <TopNav />
        <div className="w-full max-h-screen bg-gray-50">
          <div className="px-5 py-4">{children}</div>
        </div>
      </div>
    </div>
  );
}
