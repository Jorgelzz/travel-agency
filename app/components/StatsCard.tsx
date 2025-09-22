import { calculateTrendPercentage } from "lib/utils";

declare interface StatsCardProps {
  headerTitle: string;
  value: number;
  currentMonth: number;
}

const StatsCard = ({ headerTitle, value, currentMonth }: StatsCardProps) => {
  const { trend, percentage } = calculateTrendPercentage(value, currentMonth);
  const isDrecrement = trend === "decrement";
  return (
    <div className="stats-card">
      <h3 className="text-base font-medium">{headerTitle}</h3>
      <div className="content">
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl font-semibold">{value}</h2>
          <div className="flex items-center gap-2">
            <figure className="flex items-center">
              <img
                src={`/assets/icons/${isDrecrement ? "arrow-down-red" : "arrow-up-green"}.svg`}
                alt="arrow"
              />
            </figure>
            <figcaption className="text-sm font-medium" style={{ color: isDrecrement ? "#F87171" : "#22C55E" }}>
                {Math.round(percentage)}%
            </figcaption>
             </div>
        </div>
      </div>
      <p className="text-sm">Current Month: {currentMonth}</p>
      <p className="text-sm">Trend: {trend}</p>
      <p
        className={`text-sm ${percentage > 0 ? "text-green-500" : "text-red-500"}`}
      >
        Status: {percentage > 0 ? "Upward" : "Downward"}
      </p>
    </div>
  );
};

export default StatsCard;
