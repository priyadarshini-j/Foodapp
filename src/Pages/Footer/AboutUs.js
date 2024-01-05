import {Link} from 'react-router-dom';
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import YardIcon from '@mui/icons-material/Yard';

const bull = (

  <Box 
      component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
              >
                  
  </Box>
   );

         export default function BasicCard() {
         return (
                          
       <Box
       sx={{
                                
        backgroundColor:'lightgreen',
        backgroundSize: 'cover',
        minHeight: '100vh', 
        display: 'flex',
       alignItems: 'center',
        justifyContent: 'center',
        }}
                                                                                                     >
        <Card sx={{ minWidth: 700 ,minHeight:500,margin:5}}>
        <CardContent>
        <Typography
        sx={{
        fontSize: 28,
        color: 'text.primary',
        textAlign: 'center', // Center the text horizontally
        marginBottom: 2, // Add margin for spacing
        }}
        gutterBottom
         >
        ABOUT US
        </Typography>
        <Typography
        variant="h5"
        component="div"
        sx={{
        textAlign: 'center', // Center the text horizontally
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
         }}
        >
        <YardIcon/> FOODIE
        </Typography><br></br>
        <Typography sx={{ mb: 5.5 }} color="text.primary" textAlign='center' margin='10px' fontFamily='cursive'>
        Welcome to our food app! We are dedicated to bringing you the best culinary
        experience.<br></br> Our team of chefs carefully selects the finest ingredients to
        create mouthwatering dishes for you to enjoy.<br></br>Whether you're a food enthusiast or just looking for a quick and delicious
        meal, our app has something for everyone.<br></br> Explore our menu, place your order,
        and embark on a delightful gastronomic journey with us!
    
        </Typography>
        <Typography variant="body2">
                                                                                                                                                                                                                                                                                                                                                                                                   
        <br />
      </Typography>
        </CardContent>
        <CardActions>
        <Button variant="outlined"><Link style={{textDecoration:'none',color:'black'}} to="/">BACK</Link></Button>
        </CardActions>
                                                                                                                                                                                                                                                                                                                                                                                                                                                           
       </Card>
    </Box>
  );
}