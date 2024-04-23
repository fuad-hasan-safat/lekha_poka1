import ProcchodLeftContent from "@/components/procchodLeftContent/ProcchodLeftContent";
import Sidebar from "@/components/sidebar/Sidebar";
export default function Procchod() {
  return (
    <section className="all__post__sec__wrap">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="all__post__content flex flex-row pt-10">
                <div className="w-maincontainwidth pr-10">
                  <ProcchodLeftContent />
                </div>
                <div className="w-sidebarwidth">
                  <Sidebar />
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
}
