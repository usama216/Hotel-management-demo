import React, { useEffect, useState } from "react";
import "./Journey.css";
import {
  Button,
  Box,
  Typography,
  CircularProgress,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Select,
  MenuItem,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { useSnackbar } from "notistack";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";


function Journey() {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));
 
  return (
    <>
        <section className="hero-sectionj" style={{display:'flex', flexDirection:isMedium && 'column-reverse'}}>
          
          <div className="" style={{display:'flex', justifyContent:'center'}}>
            <img src="/journey.avif" alt="" width={isMedium ? '80%':'100%'}/>
          </div>
          <div className="hero-section-textj">
            <Typography
              sx={{ color: "#0c111e", fontSize:isSmall ? '1.7rem': isMedium ? '2.5rem': "3.5rem", fontWeight: "600", lineHeight: "1.1" , width:'100%' }}
            >
            Take Full Control of Your Guest Journey
            </Typography>

            <Typography sx={{ color: "#0c111e", fontSize:isSmall ? '1rem': isMedium ? '1.1rem': "1.2rem", width:'100%' }}>
            With our guest experience software, you can digitize and automate all guest interactions beyond the booking. The app becomes your guests’ go-to-guide and their digital concierge that supports them during their stay.
            </Typography>
            <br />
            <Box sx={{display: 'flex', width:'100%'}}>
            <Button
            sx={{
              color: "white",
              border:'1px solid #0c111e',
              backgroundColor:'#0c111e',
              textTransform: "none",
              fontSize: "1rem",
              borderRadius:'50px',
              padding:'0.8rem 1.5rem',
              mr:'2rem',
              '&:hover':{
                color: "#0c111e",
                border:'1px solid #0c111e',
                backgroundColor:'transparent',
              }
            }}
          >
            start for free
          </Button>
          <Button
            sx={{
              color: "#0c111e",
              border:'1px solid #0c111e',
              backgroundColor:'transparent',
              textTransform: "none",
              fontSize: "1rem",
              borderRadius:'50px',
              padding:'0.8rem 1.5rem',
              '&:hover':{
                color: "#0c111e",
                border:'1px solid #0c111e',
                backgroundColor:'#0c111e',
              }
            }}
          >
            watch a demo
          </Button>
            </Box>

          </div>
        </section>

    </>
  );
}

export default Journey;
