import { Link, useLocation } from "react-router";
import {
  ChipDirective,
  ChipListComponent,
  ChipsDirective,
} from "@syncfusion/ej2-react-buttons";
import { cn, getFirstWord } from "lib/utils";

const TripCard = ({
  id,
  name,
  location,
  imageUrl,
  price,
  tags,
}: TripCardProps) => {
  const path = useLocation().pathname;
  return (
    <Link to={path == '/' ? `/trips/${id}` : path.startsWith('/travel/') ? `/travel/${id}` : `/trips/${id}`} className="trip-card">
      <img src={imageUrl} alt={name} />
      <article>
        <h2>{name}</h2>
        <figure>
          <img
            src="/assets/icons/location-mark.svg"
            className="size-4"
            alt="red location marker icon indicating the trip destination"
          />
        </figure>
      </article>
        <div className="mt-5 pl-[18px] pr-3.5 pb-5">
          <ChipListComponent id="travel-chip">
            <ChipsDirective>
              {tags.map((tag, index) => (
                <ChipDirective
                  key={index}
                  text={getFirstWord(tag)}
                  cssClass={cn(index === 1 ? "!bg-pink-100 !text-pink-600" : "!bg-success-50 !text-success-700")}
                />
              ))}
            </ChipsDirective>
          </ChipListComponent>
          
        </div>

      <article className="tripCard-pill">
        <h3 className="text-lg font-semibold">{price}</h3>
      </article>
    </Link>
  );
};

export default TripCard;
