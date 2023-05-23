import React, { useEffect } from "react";
import { Link, Route, Routes } from "react-router-dom";
import CityInfo from "./CityInfo";
import CityLandmarks from "./CityLandmarks";
import CityTheMostFamousLandmark from "./CityTheMostFamousLandmark";
import CityPhotos from "./CityPhotos";
import UploadPhotoForm from "./UploadPhotoForm";
import { useDispatch, useSelector } from "react-redux";
import { getCityData } from "../../redux-toolkit/slices/citySlice";

function City() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCityData());
  }, [dispatch]);
  return (
    <>
      <Link to="/about">
        <button>About</button>
      </Link>
      <Link to="/landmarks">
        <button>Landmarks</button>
      </Link>
      <Link to="/the-most-famous-monument">
        <button>The most famous landmark</button>
      </Link>
      <Link to="/photos">
        <button>Photos</button>
      </Link>
      <Link to="/upload-photo">
        <button>Upload Photo</button>
      </Link>
      <Routes>
        <Route path="/about" Component={CityInfo}></Route>
        <Route path="/landmarks" Component={CityLandmarks}></Route>
        <Route
          path="/the-most-famous-monument"
          Component={CityTheMostFamousLandmark}
        ></Route>
        <Route path="/photos" Component={CityPhotos}></Route>
        <Route path="/upload-photo" Component={UploadPhotoForm}></Route>
      </Routes>
    </>
  );
}

export default City;
