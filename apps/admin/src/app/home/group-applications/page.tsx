"use client";

import { ApplicationsTable } from "@/app/home/group-applications/components/applications-table";
import { useRecoilValue } from "recoil";
import { columns } from "./components/columns";
import { ApplicationRow } from "./components/columns";
import { useEffect, useState } from "react";
import { groupApplicationsState } from "@/store/groupApplicationsState";

export default function GroupApplicationsPage() {
  const applications = useRecoilValue(groupApplicationsState);
  const [tableData, setTableData] = useState<ApplicationRow[]>([]);

  useEffect(() => {
    if (applications) {
      setTableData(
        applications.map((application: any) => ({
          id: application?.id,
          name: `${application?.user?.firstName} ${application?.user?.lastName}`,
          email: application?.user?.email,
          phoneNumber: application?.phoneNumber,
          establishment: `${application?.establishmentName} (${application?.establishmentLevel})`,
          numberOfParticipants: application?.numberOfParticipants,
          status: application?.status,
        })),
      );
    }
  }, [applications]);

  return (
    <div className="space-y-8">
      <div className="from-black to-stone-500 bg-clip-text text-4xl font-medium">
        Group Applications
      </div>

      <ApplicationsTable columns={columns} data={tableData} />
    </div>
  );
}
