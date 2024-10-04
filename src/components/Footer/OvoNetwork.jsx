import React from "react";
import FlexBox from "../FlexBox/FlexBox";
import { Box, Grid, Typography } from "@mui/material";
import Image from "../Image/Image";

const OvoNetwork = () => {
  return (
    <>
      <Box sx={{ color: "white", padding: "3rem 15%" }}>
        <Box
          sx={{
            backgroundColor: "#0c111e",
            borderRadius: "30px",
            width: "100%",
            padding: "2rem 2rem",
          }}
        >
          <Grid container spacing={3}>
            <Grid item lg={6} md={6}>
              <Typography sx={{ fontSize: "1.5rem", fontWeight: 600 }}>
                OVO Network about HolidayHero
              </Typography>
              <br />
              <Typography>
                ''Integrating a guest experience app into our service offering
                is not just an enhancement; it's a necessity in today's digital
                age. Guests no longer just expect great service in their
                accommodations but also throughout the entire guest journey,
                from booking to stay to post-departure. This approach sets us
                apart while also deepening our relationship with our guests,
                creating memorable experiences that encourage return visits and
                positive word-of-mouth. With HolidayHero, we're hoping to set
                new standards in guest satisfaction and loyalty.''
              </Typography>
              <br />
              <Typography>Louis Andrew, Director</Typography>
            </Grid>

            <Grid item lg={6} md={6}>
              <Box>
                <Image src="network.avif" />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default OvoNetwork;
