import React from "react";
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { Link } from 'react-router-dom';
export default function Veg() {
  return (

<Grid container spacing={0.3} sx={{
  padding:'20px',
  backgroundColor:'lightgreen'
}}>
<Grid item xs={4}>
    <Card sx={{ maxWidth: 400 }}>
      <CardMedia
        sx={{ height: 400 }}
        image="https://www.jeyashriskitchen.com/wp-content/uploads/2010/03/IMG_9056.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Veg Curuma
        </Typography>
        <Typography variant="body2" color="text.secondary">
          150
        </Typography>
        <Link to="/buynow">
        <Button sx={{
        backgroundColor:'#E1306C',
        color:'lightgreen',
        }}>Buy Now</Button>
        </Link>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </Grid>
<Grid item xs={4}>
    <Card sx={{ maxWidth: 400 }}>
      <CardMedia
        sx={{ height: 400 }}
        image="https://vegecravings.com/wp-content/uploads/2016/07/veg-pulao-recipe-step-by-step-instructions.jpg.webp"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Veg Rice
        </Typography>
        <Typography variant="body2" color="text.secondary">
          100
        </Typography>
        <Link to="/buynow"> 
        <Button sx={{
        backgroundColor:'#E1306C',
        color:'lightgreen',
        }}>Buy Now</Button>
        </Link>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </Grid>
<Grid item xs={4}>
    <Card sx={{ maxWidth: 400 }}>
      <CardMedia
        sx={{ height: 400 }}
        image="https://www.shutterstock.com/image-photo/vegetable-veg-biryani-mixed-veggies-260nw-1733835488.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Veg Briyani
        </Typography>
        <Typography variant="body2" color="text.secondary">
         120
        </Typography>
        <Link to="/buynow"> 
        <Button sx={{
        backgroundColor:'#E1306C',
        color:'lightgreen',
        }}>Buy Now</Button>
        </Link>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </Grid>
<Grid item xs={4}>
    <Card sx={{ maxWidth: 400 }}>
      <CardMedia
        sx={{ height: 400 }}
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHS29LtAACdx-mvSxvLCpVMn1l2f5QjmZks4H6Pl1nvA&s"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Parotta
        </Typography>
        <Typography variant="body2" color="text.secondary">
              50
        </Typography>
        <Link to="/buynow"> 
        <Button sx={{
        backgroundColor:'#E1306C',
        color:'lightgreen',
        }}>Buy Now</Button>
        </Link>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </Grid>
<Grid item xs={4}>
    <Card sx={{ maxWidth: 400 }}>
      <CardMedia
        sx={{ height: 400 }}
        image="https://shwetainthekitchen.com/wp-content/uploads/2023/03/vegetable-noodles.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Veg Noodles
        </Typography>
        <Typography variant="body2" color="text.secondary">
              80
        </Typography>
        <Link to="/buynow"> 
        <Button sx={{
        backgroundColor:'#E1306C',
        color:'lightgreen',
        }}>Buy Now</Button>
        </Link>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </Grid>
<Grid item xs={4}>
    <Card sx={{ maxWidth: 400 }}>
      <CardMedia
        sx={{ height: 400 }}
        image="https://t4.ftcdn.net/jpg/01/01/71/05/360_F_101710585_mjWXkNav1nX4Ph33MqYd79FdVUWBbKyD.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          chapathi
        </Typography>
        <Typography variant="body2" color="text.secondary">
            50
        </Typography>
        <Link to="/buynow"> 
        <Button sx={{
        backgroundColor:'#E1306C',
        color:'lightgreen',
        }}>Buy Now</Button>
        </Link>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </Grid>
    </Grid>
    
    
  );
}