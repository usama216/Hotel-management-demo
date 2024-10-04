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
      <Page title="Khatri Brothers Academy">
        <Hero/>
        <Journey/>
        <Type/>
        <Customer/>
        {/* <Student_testimonials/> */}
        {/* <Category/> */}
        {/* <ProductCard/> */}
        {/* <ValidationForm/> */}
      </Page>
    </>
  );
};

export default Landing;
