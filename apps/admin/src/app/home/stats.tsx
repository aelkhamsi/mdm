const Stats = ({
  title,
  valueAll,
  valueComplete,
  className,
}: {
  title: string;
  valueAll: number;
  valueComplete: number;
  className?: string;
}) => {
  return (
    <div
      className={`text-xl font-medium rounded-xl p-4 w-fit space-y-1 ${className}`}
    >
      <div>{title}</div>
      <div className="flex items-center space-x-4 text-sm">
        <div className="rounded-lg px-2 py-1 bg-gray-300 text-black">All</div>
        <div className={title == "General" ? "text-white" : "text-gray-600"}>
          {valueAll}
        </div>
      </div>
      <div className="flex items-center space-x-4 text-sm">
        <div className="rounded-lg px-2 py-1 bg-[#FFE380] text-black">
          COMPLETE
        </div>
        <div className={title == "General" ? "text-white" : "text-gray-600"}>
          {valueComplete}
        </div>
      </div>
    </div>
  );
};

export default Stats;
