import { Link } from "react-router";
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
  return (
    <Link to={`/trips/${id}`} className="trip-card">
      <img
        src={imageUrl}
        alt={name}
        className="w-full h-32 object-cover rounded-md"
      />
      <div className="trip-info">
        <h3 className="trip-name">{name}</h3>
        <figure>
          <img
            src="/assets/icons/location-mark.svg"
            alt="Location Icon"
            className="size-6 inline-block"
          />{" "}
          {location}
        </figure>

        <div className="mt-5 pl-[18px] pr-3.5 pb-5">
          <ChipListComponent id="travel-chip">
            <ChipsDirective>
              {tags.map((tag, index) => (
                <ChipDirective
                  key={index}
                  text={getFirstWord(tag)}
                  cssClass={cn(
                    index == 1
                      ? "!bg-pink-100 !text-red-600"
                      : "!bg-blue-100 !text-blue-800"
                  )}
                />
              ))}
            </ChipsDirective>
          </ChipListComponent>
        </div>
        <p className="price-pill">{price}</p>
        <div className="">
          {tags.map((tag, index) => (
            <span key={index} className="trip-tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default TripCard;
