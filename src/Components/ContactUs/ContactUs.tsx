import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

import "./ContactUs.css";
import DetailsDialog from "./DetailsDialog";
interface ContactUsProps {
  initialValues: any;
  validationSchema: any;
  handleSubmit: any;
  data: any;
  profileImageUrl: string | null;
  setProfileImageUrl: any;
  bannerImageUrl: string | null;
  setBannerImageUrl: any;
  showPopUp: boolean;
  handleCloseDiaog: Function;
  theme: any;
}
const ContactUs: React.FC<ContactUsProps> = ({
  theme,
  initialValues,
  validationSchema,
  handleSubmit,
  data,
  profileImageUrl,
  setProfileImageUrl,
  bannerImageUrl,
  showPopUp,
  setBannerImageUrl,
  handleCloseDiaog,
}) => {
  return (
    <div className="container">
      <h1>Contact Us</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue }) => (
          <Form>
            <div className="alignDiv">
              <div className="alignDivWidth">
                <label style={theme === "light" ? {} : { color: "#fff" }}>
                  Name
                </label>
                <Field name="name" type="text" />
                <ErrorMessage name="name" component="div" className="error" />
              </div>
              <div className="alignDivWidth">
                 <label style={theme === "light" ? {} : { color: "#fff" }}>Email</label>
                <Field name="email" type="email" />
                <ErrorMessage name="email" component="div" className="error" />
              </div>
            </div>
            <div>
               <label style={theme === "light" ? {} : { color: "#fff" }}>Address</label>
              <Field name="address" type="text" />
              <ErrorMessage name="address" component="div" className="error" />
            </div>
            <div>
               <label style={theme === "light" ? {} : { color: "#fff" }}>Date of Birth</label>
              <Field name="dateOfBirth" type="date" />
              <ErrorMessage
                name="dateOfBirth"
                component="div"
                className="error"
              />
            </div>
            <div>
               <label style={theme === "light" ? {} : { color: "#fff" }}>Bio</label>
              <Field name="bio" as="textarea" />
              <ErrorMessage name="bio" component="div" className="error" />
            </div>

            <div className="alignDiv">
              <div className="alignDivWidth">
                 <label style={theme === "light" ? {} : { color: "#fff" }}>Profile Image</label>
                <input
                  style={{ marginLeft: "16px" }}
                  name="profileImage"
                  type="file"
                  onChange={(event) => {
                    if (event.currentTarget.files) {
                      const file = event.currentTarget.files[0];
                      setFieldValue("profileImage", file);
                      setProfileImageUrl(URL.createObjectURL(file));
                    }
                  }}
                />
                <ErrorMessage
                  name="profileImage"
                  component="div"
                  className="error"
                />
              </div>
              <div className="alignDivWidth">
                 <label style={theme === "light" ? {} : { color: "#fff" }}>Banner Image</label>
                <input
                  style={{ marginLeft: "16px" }}
                  name="bannerImage"
                  type="file"
                  onChange={(event) => {
                    if (event.currentTarget.files) {
                      const file = event.currentTarget.files[0];
                      setFieldValue("bannerImage", file);
                      setBannerImageUrl(URL.createObjectURL(file));
                    }
                  }}
                />
                <ErrorMessage
                  name="bannerImage"
                  component="div"
                  className="error"
                />
              </div>
            </div>

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>

      {showPopUp && (
        <DetailsDialog
          data={data}
          profileImageUrl={profileImageUrl}
          bannerImageUrl={bannerImageUrl}
          onClose={() => handleCloseDiaog()}
        />
      )}
    </div>
  );
};

export default ContactUs;
