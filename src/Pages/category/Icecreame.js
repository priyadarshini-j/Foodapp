import React from "react";
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material"; 
import { Link } from 'react-router-dom';
export default function Icecreame() {
  return (
<Grid container spacing={0.3} sx={{
  padding:'20px',
  backgroundColor:'lightgreen'
}}>
<Grid item xs={4}>
    <Card sx={{ maxWidth: 400 }}>
      <CardMedia
        sx={{ height: 400 }}
        image="https://www.yummyfoodrecipes.in/resources/picture/org/Tasty-Chocolate-Ice-Cream.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Chocolate Icecreame
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
        image="https://www.theendlessmeal.com/wp-content/uploads/2016/07/strawberry-ice-cream-2.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            Strawberry Icecreame
        </Typography>
        <Typography variant="body2" color="text.secondary">
          60
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
        image="https://3.bp.blogspot.com/-bBC9QfYUdOw/W2g01DxaemI/AAAAAAAAfJU/XWoLs9qBROc28NLfbKF5H853Ws6_SsVGACKgBGAs/s1600/IMG_20180413_193435.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Vanilla Icecream
        </Typography>
        <Typography variant="body2" color="text.secondary">
         75
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
        image="https://img.freepik.com/premium-photo/set-vanilla-ice-cream-stick-bar-covered-with-chocolate-crunchy-almonds-isolated-white-background-3d-render-illustration_125583-66.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Set of Venilla Icreame stick
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
        image="https://mediavine-res.cloudinary.com/image/upload/s--nQdGKSLE--/c_limit,f_auto,fl_lossy,h_1080,q_auto,w_1920/v1661296625/xiye4ych6jrn0jkwi7f6.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
           Falooda Icecreame
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
        image="https://www.sharmispassions.com/wp-content/uploads/2018/05/OreoIcecream5-475x500.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            Oreo Icecreame
        </Typography>
        <Typography variant="body2" color="text.secondary">
            90
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