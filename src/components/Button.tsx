import { Link } from "react-router-dom";

export const Button = ({
  title,
  path,
  type,
}: {
  title: string;
  path: string;
  type: "primary" | "secondary";
}) => {
  return (
    <Link to={path}>
      <div
        className={`p-20 cursor-pointer hover:scale-[.9] transition-all ${
          type === "primary" && "bg-black text-white"
        } ${
          type === "secondary" && "border-[2px] border-black text-black"
        }  text-3xl font-medium rounded-lg`}
      >
        {title}
      </div>
    </Link>
  );
};
