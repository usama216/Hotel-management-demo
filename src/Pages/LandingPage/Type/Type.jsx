import { Box, Grid, IconButton, Typography } from '@mui/material'
import React from 'react'
import { HiArrowLongRight } from "react-icons/hi2";


const Type = () => {
 
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
        <Box>
        <Typography
              sx={{ color: "#0c111e", fontSize: "3rem", fontWeight: "600", lineHeight: "1.1", width: "50%", mb:'2rem' }}
            >
            For All Types of Hospitality Businesses
            </Typography>

            <Typography sx={{ color: "7d92a5", fontSize: "1.2rem" }}>
            Explore the benefits for your type of business
            </Typography>
        </Box>

        <Grid container marginTop={'2rem'} spacing={2}>
            {cardlist.map((val, index)=>(
                <Grid key={index} item lg={4}>
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