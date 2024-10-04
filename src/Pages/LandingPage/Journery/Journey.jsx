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
 
 
  return (
    <>
        <section className="hero-sectionj">
          
          <div className="">
            <img src="/journey.avif" alt="" />
          </div>
          <div className="hero-section-textj">
            <Typography
              sx={{ color: "#0c111e", fontSize: "4rem", fontWeight: "600", lineHeight: "1.1" }}
            >
            Take Full Control of Your Guest Journey
            </Typography>

            <Typography sx={{ color: "#0c111e", fontSize: "1.2rem" }}>
            With our guest experience software, you can digitize and automate all guest interactions beyond the booking. The app becomes your guests’ go-to-guide and their digital concierge that supports them during their stay.
            </Typography>
            <br />
            <Box sx={{ width:'50%'}}>
            <Button
            sx={{
              color: "white",
              border:'1px solid #0c111e',
              backgroundColor:'#0c111e',
              textTransform: "none",
              fontSize: "0.9rem",
              borderRadius:'50px',
              padding:'0.5rem 1rem',
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
              fontSize: "0.9rem",
              borderRadius:'50px',
              padding:'0.5rem 1rem',
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
