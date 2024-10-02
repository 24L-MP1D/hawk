import { DashboardAside } from "@/components/Dashboard";

const Dashboard = () => {
  return (
    <div className="flex">
      <DashboardAside />
      <div className="px-6 py-[34px] flex flex-col gap-[34px]">
        <div className="flex gap-6">
          <div className="flex flex-col gap-3">
            <div className="flex gap-2 text-[#121316]">
              <div>$</div>
              <div className="text-base">Орлого</div>
            </div>
            <div className="text-[#121316]">235,000₮</div>
            <div></div>
          </div>
          <div></div>
        </div>
        <div></div>
      </div>
    </div>
  );
};
export default Dashboard;
