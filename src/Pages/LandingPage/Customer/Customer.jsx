import { Box, Grid, Typography, useTheme , useMediaQuery } from '@mui/material'
import React from 'react'

const Customer = () => {

    const counterlist= [
        {title :'3000+' , subtitle:'Listings'},
        {title :'23' , subtitle:'countries'},
        {title :'60%' , subtitle:"Of guests' book additional services"},
        {title :'87%' , subtitle:'App installation rate'},
    ]

    const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));
  return (
   <>
   <Box sx={{backgroundColor:'#0a111e', pl:'15%'}}>
    <Box>
        <Grid container>
            <Grid item lg={6} sx={{py:'3rem'}}>
            <Box sx={{height:'100%'}}>
            <Typography
              sx={{ color: "white", fontSize:isSmall ? '1.7rem': isMedium ? '2.4rem': "3rem", fontWeight: "600", lineHeight: "1.1", mb:'15rem' }}
            >
            Our Customers’ Numbers
            </Typography>

            <Box>
                <img src="/counter.webp" alt="" />
            </Box>
            {/* <Box >
                <Grid container spacing={4}>
                    {counterlist.map((val, index)=>(
                        <Grid key={index} item lg={6}>
                        <Box  >
                <Typography
                  sx={{ color: "white", fontSize: "3rem", fontWeight: "600", lineHeight: "1.1" }}
                >
                {val.title}
                </Typography>
                <Typography
                  sx={{ color: "white", fontSize: "1rem", fontWeight: "600", lineHeight: "1.1" }}
                >
                {val.subtitle}
                </Typography>
                </Box>
                        </Grid>
                    ))}
                    
                </Grid>
            </Box> */}
            </Box>
            </Grid>
            <Grid item lg={6}>
                <Box>
                    <img src="/customer.webp" alt="" width={isMedium ?'100%' : '100%'}/>
                </Box>
            </Grid>
        </Grid>
    </Box>
   </Box>
   </>
  )
}

export default Customer