import React from "react";

interface Props {
  data: any;
  onClose: () => void;
  bannerImageUrl: string | null;
  profileImageUrl: string | null;
}

const DetailsDialog: React.FC<Props> = ({
  data,
  onClose,
  profileImageUrl,
  bannerImageUrl,
}) => {
  return (
    <div className="dialog-overlay">
      <h1>Contact Us Details</h1>

      <button
        onClick={() => onClose()}
        style={{ position: "absolute", right: "10px", top: "10px" }}
      >
        Close
      </button>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ width: "49%" }}>
          <label>Name</label>
          <div className="inputs">{data.name}</div>
        </div>
        <div style={{ width: "49%" }}>
          <label>Email</label>
          <div className="inputs">{data.email}</div>
        </div>
      </div>
      <div>
        <label>Address</label>
        <div className="inputs">{data.address}</div>
      </div>
      <div>
        <label>Date of Birth</label>
        <div className="inputs">{data.dateOfBirth}</div>
      </div>
      <div>
        <label>Bio</label>
        <div className="inputs">{data.bio}</div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div
          style={{
            width: "49%",
            display: "flex",
            flexDirection: "column",
            gap: "4px",
          }}
        >
          <label>Profile Image</label>
          {profileImageUrl && (
            <img
              src={profileImageUrl}
              alt="Profile"
              style={{ width: "100px" }}
            />
          )}
        </div>
        <div
          style={{
            width: "49%",
            display: "flex",
            flexDirection: "column",
            gap: "4px",
          }}
        >
          <label>Banner Image</label>
          {bannerImageUrl && (
            <img src={bannerImageUrl} alt="Banner" style={{ width: "100px" }} />
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailsDialog;
