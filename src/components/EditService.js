import React, { usestate } from "react";

const EditService = () => {
  const [show, setShow] = usestate("false");

  const showModal = () => {
    setShow("true");
  };

  const hideModal = () => {
    setShow("false");
  };

  return (
    <div className="ui modal display-block">
      <i className="close icon"></i>
      <div className="header">Modal Title</div>
      <div className="image content">
        <div className="image">An image can appear on left or an icon</div>
        <div className="description">A description can appear on the right</div>
      </div>
      <div className="actions">
        <div className="ui button">Cancel</div>
        <div className="ui button">OK</div>
      </div>
    </div>
  );
};

export default EditService;
