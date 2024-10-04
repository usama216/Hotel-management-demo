import {
  useTheme,
  CircularProgress,
  Box,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Page from "../../components/page";
import { getAllCourse } from "../../store/actions/courseActions";
import Hero from "./hero/Hero";
import Hero_card from "./hero-card/Hero_card";
import Student_testimonials from "./student_testimonials/Student_testimonials";
import Category from "./TextCard/Category";
import ProductCard from "./TextCard/ProductCard";
import ValidationForm from "./ValidationForm/ValidationForm";
import Journey from "./Journery/Journey";
import Type from "./Type/Type";
import Customer from "./Customer/Customer";
import OvoNetwork from "../../components/Footer/OvoNetwork";
import Hospitility from "./Hospitility";

const Landing = () => {
  const theme = useTheme();
  const dispatch = useDispatch();


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    dispatch(getAllCourse())
  }, [dispatch]);

  return (
    <>
      <Page title="Demo for Holiday Hotel">
        <Hero/>
        <Journey/>
        <Type/>
        <Customer/>


        <Student_testimonials/>


        <Hospitility/>
        {/* <ValidationForm/> */}
        <OvoNetwork/>
      </Page>
    </>
  );
};

export default Landing;
