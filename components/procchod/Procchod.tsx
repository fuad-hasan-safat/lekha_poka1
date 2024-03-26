import ProcchodLeftContent from "@/components/procchodLeftContent/ProcchodLeftContent";
import Sidebar from "@/components/sidebar/Sidebar";
export default function Procchod() {
  return (
    <div className="flex flex-row pt-10">
      <div className="w-maincontainwidth">
        <ProcchodLeftContent />
      </div>
      <div className="w-sidebarwidth">
        <Sidebar />
      </div>
    </div>
  );
}
