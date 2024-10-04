import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

const Customer = () => {
  return (
   <>
   <Box sx={{backgroundColor:'#0c111e'}}>
    <Box>
        <Grid conatiner>
            <Grid item lg={6}>
            <Typography
              sx={{ color: "white", fontSize: "4rem", fontWeight: "600", lineHeight: "1.1" }}
            >
            Our Customers’ Numbers
            </Typography>
            </Grid>
            <Grid item lg={6}>
                <Box>
                    <img src="/customer.webp" alt="" />
                </Box>
            </Grid>
        </Grid>
    </Box>
   </Box>
   </>
  )
}

export default Customer