import brackers from "../assets/svg/Brackets";
const TagLine = ({ className, children }) => {
  return (
    <div className={`tagline flex items-center ${className || ""}`}>
      {brackers("left")}
      <div className="mx-3 text-n-3">{children}</div>
      {brackers("right")}
    </div>
  );
};

export default TagLine;
