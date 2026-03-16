const Stats = ({
  title,
  valueAll,
  valueComplete,
  valueTestComplete,
  className,
}: {
  title: string;
  valueAll: number;
  valueComplete: number;
  valueTestComplete?: number;
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
        <div className="rounded-lg px-2 py-1 bg-[#006644] text-white">
          COMPLETE
        </div>
        <div className={title == "General" ? "text-white" : "text-gray-600"}>
          {valueComplete}
        </div>
      </div>
      {valueTestComplete &&
        <div className="flex items-center space-x-4 text-sm">
          <div className="rounded-lg px-2 py-1 bg-amber-400 text-black">
            TEST SUBMITTED
          </div>
          <div className={title == "General" ? "text-white" : "text-gray-600"}>
            {valueTestComplete}
          </div>
        </div>
      }
    </div>
  );
};

export default Stats;
