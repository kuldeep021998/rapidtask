import * as Yup from "yup";
import React, { useState } from "react";
import ContactUs from "../../Components/ContactUs/ContactUs";
import { useSelector } from "react-redux";
import { RootState } from "../../Store/Store";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

interface InitialValues {
  name: string;
  email: string;
  address: string;
  dateOfBirth: string;
  bio: string;
  profileImage: File | null;
  bannerImage: File | null;
}

const ContactUsContainer: React.FC = () => {
  const initialValues: InitialValues = {
    name: "",
    email: "",
    address: "",
    dateOfBirth: "",
    bio: "",
    profileImage: null,
    bannerImage: null,
  };
  const theme = useSelector((state: RootState) => state.theme.theme);
  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid Email Id").required("Required"),
    address: Yup.string().required("Required"),
    dateOfBirth: Yup.date().required("Required"),
    bio: Yup.string().required("Required"),
    profileImage: Yup.mixed().required("A file is required"),
    bannerImage: Yup.mixed().required("A file is required"),
  });

  const [data, setData] = useState<any>({});
  const [profileImageUrl, setProfileImageUrl] = useState<string | null>(null);
  const [bannerImageUrl, setBannerImageUrl] = useState<string | null>(null);
  const [showPopUp, setShowPopUp] = useState<boolean>(false);

  const handleSubmit = (
    values: InitialValues,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    setData(values);
    setSubmitting(false);
    setShowPopUp(true);
  };

  const handleCloseDiaog = () => {
    setShowPopUp(false);
    window.location.reload();
  };
  return (
    <>
      <Header />
      <ContactUs
        initialValues={initialValues}
        validationSchema={validationSchema}
        handleSubmit={handleSubmit}
        data={data}
        profileImageUrl={profileImageUrl}
        setProfileImageUrl={setProfileImageUrl}
        bannerImageUrl={bannerImageUrl}
        setBannerImageUrl={setBannerImageUrl}
        showPopUp={showPopUp}
        handleCloseDiaog={handleCloseDiaog}
        theme={theme}
      />
      <Footer />
    </>
  );
};

export default ContactUsContainer;
