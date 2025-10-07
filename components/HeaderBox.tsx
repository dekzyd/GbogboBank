const HeaderBox = ({
  title,
  type = "title",
  subtext,
  user,
}: HeaderBoxProps) => {
  return (
    <div className="header-box">
      <h1 className="header-box-title">
        Welcome &nbsp;
        {type === "greeting" && (
          <span className="text-bankGradient">{user}</span>
        )}
      </h1>
      <p className="header-box-subtext">{subtext}</p>
    </div>
  );
};

export default HeaderBox;
