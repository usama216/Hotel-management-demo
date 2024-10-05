import { Box, Grid, IconButton, Typography, useTheme, useMediaQuery } from '@mui/material'
import React from 'react'
import { HiArrowLongRight } from "react-icons/hi2";


const Type = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));
 
const  cardlist = [
    {title:'vaction rentals' , color:'#e3fe05'},
    {title:'Hotels' , color:'#99aea7'},
    {title:'Property managers' , color:'#adc9df'},
    {title:'Chalets' , color:'#adc9df'},
    {title:'Boutique Hotel' , color:'#e6eef6'},
    {title:'Bed & breakfast' , color:'#e3fe05'},
]

  return (
    <>
    <Box sx={{p:'4% 15%'}}>
        <Box sx={{ml:'2rem'}}>
        <Typography
              sx={{ color: "#0c111e", fontSize:isSmall ? '1.7rem': isMedium ? '2.4rem': "3rem", fontWeight: "600", lineHeight: "1.1", width: "50%", mb:'2rem' }}
            >
            For All Types of Hospitality Businesses
            </Typography>

            <Typography sx={{ color: "7d92a5",fontSize:isSmall ? '1rem': isMedium ? '1.1rem': "1.2rem" }}>
            Explore the benefits for your type of business
            </Typography>
        </Box>

        <Grid container marginTop={'2rem'} spacing={2}>
            {cardlist.map((val, index)=>(
                <Grid key={index} item lg={4} md={6} sm={6} xs={12}>
                <Box sx={{backgroundColor:val.color, p:'1rem', borderRadius:'10px',
                     display:'flex', justifyContent:'space-between', }}>
                <Typography
              sx={{ color: "#0c111e", fontSize: "1.5rem", fontWeight: "600", lineHeight: "1.1", mb:'3rem' }}
            >
            {val.title}
            </Typography>

            <Box sx={{ alignSelf:'end'}}>
            <IconButton sx={{backgroundColor:'white'}}>
                <HiArrowLongRight/>
            </IconButton>
            </Box>
                </Box>
            </Grid>
            ))}
            
        </Grid>

    </Box>
    </>
  )
}

export default Type;