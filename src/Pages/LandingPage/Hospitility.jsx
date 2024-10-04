import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import React from "react";

const Hospitility = () => {
  return (
    <>
      <Box sx={{ backgroundColor: "#0c111e", padding: "5rem 15%" }}>
        <Box sx={{ width: "50%" }}>
          <Typography
            sx={{ fontSize: "2.5rem", color: "white", fontWeight: 600 }}
          >
            Why Hospitality Professionals Choose HolidayHero?
          </Typography>

          <br />

          <Button
            sx={{
              color: "black",
              borderRadius: "35px",
              backgroundColor: "#e2fe05",
              padding: "1rem 2rem",
              textTransform: "none",
              fontSize: "1rem",
            }}
            variant="contained"
          >
            Book a demo
          </Button>
        </Box>

        <br />
        <br />
        <br />
        <Grid container spacing={3}>
          <Grid item lg={3} md={3}>
            <Divider sx={{ backgroundColor: "white" }} />
            <br />
            <Typography
              sx={{ color: "white", fontWeight: 600, fontSize: "1.8rem" }}
            >
              Best in class app design
            </Typography>

            <br />
            <Typography sx={{ color: "white" }}>
              Experience our app's seamless and visually stunning design. Our
              user-friendly interface ensures that once set up, it reduces guest
              inquiries by over 70%, as proven by extensive research conducted
              with our users.
            </Typography>
          </Grid>





          <Grid item lg={3} md={3}>
            <Divider sx={{ backgroundColor: "white" }} />
            <br />
            <Typography
              sx={{ color: "white", fontWeight: 600, fontSize: "1.8rem" }}
            >
              Create your app in minutes
            </Typography>

            <br />
            <Typography sx={{ color: "white" }}>
            We understand that time is of the essence when running a business. We have meticulously crafted our guest experience platform to streamline the installation process. Necessary information is automatically populated upon connecting our app, saving you valuable time and effort.
            </Typography>
          </Grid>






          <Grid item lg={3} md={3}>
            <Divider sx={{ backgroundColor: "white" }} />
            <br />
            <Typography
              sx={{ color: "white", fontWeight: 600, fontSize: "1.8rem" }}
            >
              Unlimited possibilities
            </Typography>

            <br />
            <Typography sx={{ color: "white" }}>
            Personalize the experience of your listings by offering enticing upgrades such as late checkout, convenient airport transfers, or even indulgent "wine-tasting packages" with a fully stocked fridge. With our app, you can tailor each guest's experience to perfection.
            </Typography>
          </Grid>





          <Grid item lg={3} md={3}>
            <Divider sx={{ backgroundColor: "white" }} />
            <br />
            <Typography
              sx={{ color: "white", fontWeight: 600, fontSize: "1.8rem" }}
            >
              Seamless integrations
            </Typography>

            <br />
            <Typography sx={{ color: "white" }}>
            HolidayHero offers seamless integration with any PMS or IoT system of your choice. Our open API allows us to integrate with any software system, providing integration flexibility. Rest assured that your existing system will work seamlessly with our platform.
            </Typography>
          </Grid>



        </Grid>
      </Box>
    </>
  );
};

export default Hospitility;
