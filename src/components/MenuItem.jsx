export default function MenuItem({ name, icon }){
    return (
      <div className="menu-item">
        <div className="img">
          <img src={icon} alt={name + " icon"} />
        </div>
        <span style={{ margin: "10px" }}>{name}</span>
        <span className="dico"></span>
      </div>
    );
  };
  