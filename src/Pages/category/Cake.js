import React from "react";
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material"; 
import { Link } from 'react-router-dom';
export default function Cake() {
  return (
<Grid container spacing={0.3} sx={{
  padding:'20px',
  backgroundColor:'lightgreen'
}}>
<Grid item xs={4}>
    <Card sx={{ maxWidth: 400 }}>
      <CardMedia
        sx={{ height: 400 }}
        image="https://www.cakehut.in/image/cache/catalog/2021%20cake%20photos/Double%20Chocolatee-1701x1423.jpg.webp"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Chocolate Cake
        </Typography>
        <Typography variant="body2" color="text.secondary">
          1000
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
        image="https://floralmall.in/wp-content/uploads/2023/02/strawberry-cake.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            Strawberry Cake
        </Typography>
        <Typography variant="body2" color="text.secondary">
          1200
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
        image="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2017/6/10/0/FNM070117_Strawberries-and-Cream-Ice-Cream-Cake_s4x3.jpg.rend.hgtvcom.616.462.suffix/1497141536834.jpeg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Icecream Cake
        </Typography>
        <Typography variant="body2" color="text.secondary">
         580
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
        image="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2015/7/21/3/FNM_090115-Strawberry-Crunch-Ice-Cream-Cake-Recipe_s4x3.jpg.rend.hgtvcom.616.462.suffix/1438023249236.jpeg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Strawberry Crunch Icecreame Cake
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
        image="https://www.modernhoney.com/wp-content/uploads/2017/02/DSC_0429-copy2.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
           cheese ball Cake
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
        image="https://cakelinks.in/cdn/shop/products/ChocolateVanillaIceCreamCake_x700.jpg?v=1598036827"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            BlackForest Cake
        </Typography>
        <Typography variant="body2" color="text.secondary">
            750
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