import {
  Box,
  Button,
  Divider,
  Grid,
  styled,
  TextField,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import FlexBox from "../../components/FlexBox/FlexBox";
import Image from "../../components/Image/Image";
import CustomButton from "../Btn/CustomButton";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { IoMdRadioButtonOn } from "react-icons/io";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { MdEmail } from "react-icons/md";
import { FaMapLocationDot } from "react-icons/fa6";

import { AiFillLinkedin } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";



const StyledFooter = styled(Box)(({ theme }) => ({
  background: "#0c111e",
  color: "white",
  padding: "2rem 15%",
  position:'relative',
  overflow:'hidden'
}));

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.down("lg"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const currentPath = location.pathname;

  const isHidden =
    currentPath === "/order-confirm" ||
    currentPath === "/login" ||
    currentPath === "/sign-up" ||
    currentPath === "/email-confirmation-otp";

  if (isHidden) {
    return null;
  }

  const textFieldStyle = {
    "& .MuiInputBase-root": {
      border: "none",
      "&:hover": {
        borderColor: "white",
      },
      "&.Mui-focused": {
        boxShadow: "none",
      },
    },
    "& .MuiOutlinedInput-notchedOutline": {
      display: "none",
    },

    borderRadius: "45px",
    backgroundColor: "white",
  };

  const pages = [
    { label: "Vacation Rentals", route: "/" },
    { label: "Property Manager", route: "/find-products" },
    { label: "Hotels", route: "/find-products" },
    { label: "Boutique Hotels", route: "/find-products" },
    { label: "Chalets", route: "/find-products" },
    { label: "Bed & Breakfast", route: "/find-products" },
    { label: "Glaming", route: "/find-products" },
    { label: "Ski resort", route: "/find-products" },


  ];


  const services = [
    { label: "Guest App", route: "/" },
    { label: "Upsells", route: "/find-products" },
    { label: "Guidebooks", route: "/find-products" },
    { label: "Hotel Branding", route: "/find-products" },
    { label: "Virtual concierge", route: "/find-products" },
    { label: "Guest Management", route: "/find-products" },
    { label: "Guest communication", route: "/find-products" },
    { label: "Headless Guest Experience", route: "/find-products" },


  ];

  const company = [
    { label: "pricing", route: "/find-products" },
    { label: "About us", route: "/find-products" },
    { label: "careers", route: "/find-products" },
    { label: "Contact us", route: "/find-products" },






  ];

  const footerBottomtext =[
    {title: "FDA Disclaimer",
      mb:'0rem',
      des1:'',
      des2:'The statements made regarding these products have not been evaluated by the Food and Drug Administration. The efficacy of these products has not been confirmed by FDA-approved research. These products are not intended to diagnose, treat, cure or prevent any disease. All information presented here is not meant as a substitute for or alternative to information from health care practitioners. Please consult your health care professional about potential interactions or other possible complications before using any product. The Federal Food, Drug, and Cosmetic Act require this notice.'
    },
    {title: "THCA Disclaimer",
      mb:'1rem',
      des1:'We do not ship THCa products to the states where THCa is restricted or illegal.',
      des2:'We CAN ship THCa products to the following states: Alabama, Arizona, Arkansas, D.C., Florida, Georgia, Illinois, Kentucky, Louisiana, Maine, Missouri, Nebraska, Nevada, New York, North Carolina, Ohio, Pennsylvania, South Carolina, Tennessee, Texas, West Virginia.'
    },
    {title: "Delta-8 Disclaimer",
      mb:'0rem',
      des1:'',
      des2:'We do not ship Delta 8 products to the following states: Alaska, Colorado, Delaware, Hawaii, Idaho, Massachusetts, Mississippi, Montana, Nevada, New York, North Dakota, Oregon, Rhode Island, Utah, Vermont, Virginia, Washington, and West Virginia.'
    }

  ]

  return (
    <StyledFooter>


<Grid container spacing={2} sx={{margin:'5rem 0rem 5rem 0rem'}}>
<Grid item lg={6} md={6} sm={12} sx={{marginTop:'3rem'}}>

<Typography sx={{fontSize:'3rem', fontWeight:700}}>
Try Out the Guest App Demo
</Typography>
<Typography sx={{fontSize:'1rem'}}>
Scan the QR code with your smartphone, or click the below link to test the HolidayHero web app demo.
</Typography>

<Box sx={{display:'flex', marginTop:'2rem', alignItems:'end' }} gap={2} >
  <Button sx={{color:'black', borderRadius:'35px', backgroundColor:'#e2fe05', padding:'1rem 2rem'}} variant="contained">
    Try it out
  </Button>
<Typography sx={{fontSize:'1.1rem', fontWeight:600}}>
  Learn More
</Typography>
</Box>

</Grid>

<Grid item lg={6} md={6} sm={12}>
<Image src='/guest.avif'/>

</Grid>


</Grid>










      <Grid container spacing={5} sx={{paddingTop:isSmallScreen ?  "1rem": '3rem'}}>
        <Grid item lg={3} sm={6} xs={12}>
          <FlexBox sx={{ gap: "1rem" }}>
            {/* <Image src="/footerlogo.svg" width={isSmallScreen ? "40%": '50%'} /> */}
            <Typography sx={{color:'white', fontSize:'2rem', fontWeight:600}}>Holiday Hero</Typography>
          </FlexBox>
          <Typography sx={{ fontSize: "1rem", mt: 3 }}>
            {/* Lorem ipsum dolor sit amet consectetur */}
          </Typography>
        </Grid>

        <Grid item lg={3} sm={6} xs={12}>
          <Typography sx={{ fontSize: isSmallScreen ? "1.2rem": "1.4rem",
             fontWeight: 700 }}>
          Solutions
          </Typography>

          {pages.map((page, idx) => (
           <Box sx={{display:'flex', alignItems:'center', mt: idx === 0 ? 3 : 2, }}>
             <Typography
              key={idx}
              sx={{
                // mt: idx === 0 ? 3 : 2,
                cursor: "pointer",
                fontSize: isSmallScreen ? "0.9rem": "1.1rem",
              }}
              onClick={() => navigate(page.route)}
            >
              {page.label}
            </Typography>
             </Box>
          ))}
        </Grid>

        <Grid item lg={3} sm={6} xs={12}>
          <Typography sx={{ fontSize: isSmallScreen ? "1.2rem": "1.4rem",
             fontWeight: 700 }}>
            Features
          </Typography>
          {services.map((service, idx) => (
           <Box sx={{display:'flex', alignItems:'center', mt: idx === 0 ? 3 : 2, }}>
             <Typography
              key={idx}
              sx={{
                cursor: "pointer",
                fontSize: isSmallScreen ? "0.9rem": "1.1rem",
              }}
              onClick={() => navigate(service.route)}
            >
              {service.label}
            </Typography>
           </Box>
          ))}
        </Grid>

        <Grid item lg={3} sm={6} xs={12}>
          <Typography sx={{ fontSize: isSmallScreen ? "1.2rem": "1.4rem",
             fontWeight: 700 }}>
            Company
          </Typography>

          {company.map((page, idx) => (
           <Box sx={{display:'flex', alignItems:'center', mt: idx === 0 ? 3 : 2, }}>
             <Typography
              key={idx}
              sx={{
                // mt: idx === 0 ? 3 : 2,
                cursor: "pointer",
                fontSize: isSmallScreen ? "0.9rem": "1.1rem",
              }}
              onClick={() => navigate(page.route)}
            >
              {page.label}
            </Typography>
             </Box>
          ))}

<br/>

<Box>
  <Typography sx={{fontWeight:600, fontSize:'1.1rem'}}>
    Follow us
  </Typography>
<br/>
  <Box sx={{display:'flex'}} gap={2}>
<AiFillLinkedin style={{fontSize:'1.5rem'}}/>
<FaInstagram style={{fontSize:'1.5rem'}}/>
  </Box>
</Box>

        </Grid>
      </Grid>



      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mt:15
        }}
      >
        <Typography sx={{ fontSize: "0.9rem", color: "white" }}>
          Copyright © 2024 Holiday hero. All Rights Reserved.
        </Typography>

        <Box
          sx={{ dispaly: "flex", alignItems: "center", justifyContent: "end" }}
        >
         <Box sx={{display:'flex'}} gap={5}>
         <Typography>
          Terms & conditions
         </Typography>
         <Typography>
          Privacy policy
         </Typography>         <Typography>
          Cookies settings
         </Typography>
         </Box>
        </Box>
      </Box>
    </StyledFooter>
  );
};

export default Footer;
