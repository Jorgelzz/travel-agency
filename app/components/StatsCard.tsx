import { calculateTrendPercentage, cn } from "lib/utils";

declare interface StatsCardProps {
  headerTitle: string;
  value: number;
  currentMonth: number;
}

const StatsCard = ({ headerTitle, value, currentMonth }: StatsCardProps) => {
  const { trend, percentage } = calculateTrendPercentage(value, currentMonth);
  const isDecrement = trend === "decrement";
  return (
    <article className="stats-card">
      <h3 className="text-base font-medium">{headerTitle}</h3>
      <div className="content">
        <div className="flex flex-col gap-1">
          <h2 className="text-4xl font-semibold">{value}</h2>
          <div className="flex items-center gap-3">
            <figure className="flex items-center gap-1">
              <img
                src={`/assets/icons/${isDecrement ? "arrow-down-red" : "arrow-up-green"}.svg`}
                className="size-5"
              />
              <figcaption
                className={cn("text-sm font-medium", {
                  "text-red-500": isDecrement,
                  "text-green-500": !isDecrement,
                })}
              >
                {Math.round(percentage)}%
              </figcaption>
            </figure>
            <p className="text-sm font-medium text-gray-100 truncate">
              vs last month
            </p>
          </div>
        </div>
        <img
          src={`/assets/icons/${isDecrement ? "decrement" : "increment"}.svg`}
          alt=""
          className="size-20 object-contain"
        />
      </div>
    </article>
  );
};

export default StatsCard;
