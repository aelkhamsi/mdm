import { applicationsState } from "@/store/applicationsState";
import { useRecoilState } from "recoil";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/shared/select";
import { putApplication } from "@/api/ApplicationApi";
import { toast } from "@/components/hooks/use-toast";

export type Status = "DRAFT" | "COMPLETE" | "EMPTY";

export const getStatusClassname = (status: Status, size: "sm" | "md") => {
  const baseClassname =
    size === "md" ? "rounded-lg px-6 py-1" : "rounded-lg px-2";

  let colorClassname;

  switch (status) {
    case "DRAFT":
      colorClassname = "bg-gray-300 text-black";
      break;
    case "EMPTY":
      colorClassname = "bg-gray-100 text-black";
      break;
    case "COMPLETE":
      colorClassname = "bg-[#006644] text-white";
      break;
  }

  return `${baseClassname} ${colorClassname}`;
};

export const statusOptions = [
  { value: "DRAFT", label: "DRAFT" },
  { value: "COMPLETE", label: "COMPLETE" },
];

const StatusCard = ({ value }: { value: Status }) => {
  return <div className={getStatusClassname(value, "md")}>{value}</div>;
};

const ApplicationStatus = ({
  applicationId,
  status,
}: {
  applicationId: number;
  status: string;
}) => {
  const [applications, setApplications] = useRecoilState(applicationsState);
  const handleStatusChange = async (value: Status) => {
    const response = (await putApplication(applicationId, {
      status: value,
    })) as any;

    if (response?.statusCode === 200) {
      setApplications(
        applications.map((entry: any) => {
          if (entry?.id === applicationId) {
            return { ...entry, status: { ...entry.status, status: value } };
          }
          return entry;
        }),
      );

      toast({
        title: "Status update",
        description: "The status is updated with success",
      });
    } else {
      toast({
        title: "Status update failed",
        description: "The status update have failed. Please try later.",
        variant: "destructive",
      });
    }
  };

  return (
    <div>
      <Select defaultValue={status} onValueChange={handleStatusChange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select a status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="DRAFT">
            <StatusCard value="DRAFT" />
          </SelectItem>
          <SelectItem value="COMPLETE">
            <StatusCard value="COMPLETE" />
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default ApplicationStatus;
