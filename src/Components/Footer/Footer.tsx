import "./Footer.css";

const Footer: React.FC = () => {
  const footerLabels = [
    ["About", "News", "Hosting", "Privacy"],
    ["Showcase", "Themes", "Plugins", "Patterns"],
    ["Learn", "Documentation", "Developers", "Wordpress.tv"],
    ["Get Involved", "Events", "Donate", "Swag Store"],
    ["Wordpress.com", "Matt", "bbpress", "BuddyPress"],
  ];
  return (
    <>
      <div className="footerContainer">
        {footerLabels.map((f) => {
          return (
            <div className="footerContainer1">
              {f.map((ft, index) => {
                return <div key={index}>{ft}</div>;
              })}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Footer;
