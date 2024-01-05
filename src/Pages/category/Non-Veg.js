import React from "react";
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material"; 
import { Link } from 'react-router-dom';
export default function NonVeg() {
  return (
<Grid container spacing={0.3} sx={{
  padding:'20px',
  backgroundColor:'lightgreen'
}}>
<Grid item xs={4}>
    <Card sx={{ maxWidth: 400 }}>
      <CardMedia
        sx={{ height: 400 }}
        image="https://vismaifood.com/storage/app/uploads/public/914/f47/fa9/thumb__700_0_0_0_auto.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Chicken Briyani
        </Typography>
        <Typography variant="body2" color="text.secondary">
          200
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
        image="https://www.yummytummyaarthi.com/wp-content/uploads/2016/07/1-56.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            Fish Varuval
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
        image="https://www.cookwithnabeela.com/wp-content/uploads/2023/03/MuttonBiryani.webp"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Mutton Briyani
        </Typography>
        <Typography variant="body2" color="text.secondary">
         250
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
        image="https://www.indianhealthyrecipes.com/wp-content/uploads/2018/07/chilli-chicken-recipe-500x500.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Chilli Checken
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
        image="https://www.whiskaffair.com/wp-content/uploads/2018/11/Mutton-Korma-2-3.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
           Chicken Kuruma
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
        image="https://www.cubesnjuliennes.com/wp-content/uploads/2020/12/Prawn-Biryani-Recipe.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Prawn Briyani
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
    </Grid>
  );
}