import { cn } from "lib/utils";
import { useLocation } from "react-router";

interface HeaderProps {
  title: string;
  description?: string;
}

const Header = ({ title, description }: HeaderProps) => {
  const location = useLocation();
  return (
    <header>
      <article className="mb-8">
        <h1
          className={cn(
            "text-3xl font-bold",
            location.pathname === "/" && "text-blue-500 font-bold text-4xl"
          )}
        >
          {title}
        </h1>
        <p
          className={cn(
            "text-2xl text-gray-500 mt-2",
            location.pathname === "/" && "text-blue-500 text-4xl"
          )}
        >
          {description}
        </p>
      </article>
    </header>
  );
};

export default Header;
