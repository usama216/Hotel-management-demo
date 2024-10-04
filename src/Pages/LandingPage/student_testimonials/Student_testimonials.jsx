import React, { Component, useEffect, useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./Student_testimonials.css";
import { getPublicTestimonial } from "../../../store/actions/courseActions";
import { useDispatch } from "react-redux";
import { Box, Button, Typography } from "@mui/material";

function Student_testimonials() {
  const base = "https://khatribrothersacademy.com:4545";
  const dispatch = useDispatch();
  const [publicTestimonial, setPublicTestimonial] = useState([]); // get data form api

  // set constant data
  const studentdata = [
    {
      img: "/slideimage1.avif",
      stuname: "Increase guest loyalty",
      number: "01",
      desc: "A guest app extends your digital brand experience, builds guest loyalty and increases direct bookings.",
    },
    {
      img: "/slideimage2.avif",
      stuname: "Earn additional revenue",
      number: "02",
      desc: "Promote your offerings through in-app marketing announcements and persuade your guests to spend more. ",
    },
    {
      img: "/slideimage3.avif",
      stuname: "Save time on guest management",
      number: "03",
      desc: "By digitizing common questions, guest will be able to find crucial information on their own, without any involvement from your team.",
    },
    {
      img: "/slideimage4.avif",
      stuname: "Streamline operations",
      number: "04",
      desc: "Connect to your current tech stack without a hassle. From property management systems to smart locks. ",
    },
  ];

  const settings = {
    className: "center",
    centerMode: true,
    autoplay: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 1,
    speed: 800,
    autoplaySpeed: 2000,
    dots: false,
arrows:true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
arrows:true,
          slidesToShow: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          centerPadding: "10px", // Optional: adjust padding for smaller screens
        },
      },
    ],
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await dispatch(getPublicTestimonial());
        setPublicTestimonial(res.data.data);
        console.log(" public testtimonial  data:", res.data);
      } catch (error) {
        console.error("Failed to fetch data", error);
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <>
      {studentdata.length === 0 ? (
        <></>
      ) : (
        <>
          <Box sx={{ padding: "2rem 15%",  }}>


            <Typography
              sx={{ fontSize: "3rem", width: "30%", fontWeight: 600,
                textShadow: '10px 20px 70px yellow' 
              }}
            >
              Discover the benefits
            </Typography>

            <br />
            <Box sx={{ display: "flex" }} gap={2}>
              <Button
                sx={{
                  color: "white",
                  textTransform: "none",
                  borderRadius: "35px",
                  backgroundColor: "black",
                  padding: "0.8rem 1.8rem",
                  boxShadow:'10px 10px 150px yellow'
                }}
                variant="contained"
              >
                Book a demo
              </Button>

              <Button
                sx={{
                  borderColor: "black",
                  backgroundColor:'transparent',
                  color: "black",
                  textTransform: "none",
                  borderRadius: "35px",
                  padding: "0.8rem 1.8rem",
                  boxShadow:'10px 10px 150px yellow'
                }}
                variant="outlined"
              >
                Pricing
              </Button>
            </Box>
          </Box>

          <div className="slider-container">
            <Slider {...settings}>
              {studentdata.map((row) => (
                <div key={row._id}>
                  <Box>
                    <img
                      width="30%"

                      style={{ height: "20rem" }}
                      src={row.img}
                      alt="Testimonial 1"
                    />
                  </Box>

                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Typography
                      sx={{
                        fontWeight: "600",
                        fontSize: "1.3rem",
                        marginLeft: "4rem",
                        color: "black",
                        zIndex: "9999999",
                      }}
                    >
                      {row.stuname}
                    </Typography>

                    <Typography
                      sx={{
                        marginLeft: "4rem",
                        color: "grey",
                        fontSize: "1.3rem",
                        zIndex: "9999999",
                      }}
                    >
                      {row.number}
                    </Typography>
                  </Box>

                  <Typography
                    sx={{
                      marginLeft: "4rem",
                      color: "black",
                      zIndex: "9999999",
                    }}
                  >
                    {row.desc}
                  </Typography>
                </div>
              ))}
            </Slider>
          </div>
        </>
      )}
    </>
  );
}

export default Student_testimonials;
