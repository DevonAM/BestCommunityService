import React from "react";

const ServiceCard = ({ name, description }) => {
  return (
    <div className="card">
      <div className="image">
        <img src="https://www.delfield.com/getattachment/5ab7c000-f6bc-4602-a805-b48a78924ecd/image.jpg.aspx?sitename=Delfield" />
      </div>
      <div className="content">
        <div className="header">{name}</div>
        <div className="description">{description}</div>
      </div>
    </div>
  );
};

export default ServiceCard;
