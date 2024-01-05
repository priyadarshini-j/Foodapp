import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';


export default function TitlebarBelowImageList() {
  return (
    <ImageList sx={{ width: 1500, height: 400 }}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=248&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={<span>Rate: {item.rate}</span>}
            position="below"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://www.cookwithkushi.com/wp-content/uploads/2018/08/indian_desserts_sweets_recipes.jpg',
    title: 'Deserts and Sweets',
    rate: '100',
  },
  {
    img: 'https://static.toiimg.com/photo/80888817.cms',
    title: 'BreakFast',
    rate: '50',
  },
  {
    img: 'https://www.lacademie.com/wp-content/uploads/2022/03/indian-lunch-recipes.jpg',
    title: 'Lunch',
    rate: '200'
  },
  {
    img: 'https://imagevars.gulfnews.com/2022/03/11/Guntur-Gongura-Biryani-_17f793bfa09_large.jpg',
    title: 'Briyani',
    rate: '250',
  },
  {
    img: 'https://assets.gqindia.com/photos/5cdc5d9b306c1cfb006e7301/16:9/w_2560%2Cc_limit/top-image-pizza.jpg',
    title: 'Pizza',
    rate: '150',
  },
  {
    img: 'https://cdn.pixabay.com/photo/2022/08/29/17/45/burger-7419428_640.jpg',
    title: 'Bargar',
    rate: '130',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSviSXezA4wyRbN9PAvJ4tSlFzQtIOAjD8tYA&usqp=CAU',
    title: 'Sea Food',
    rate: '500',
  },
  {
    img: 'https://t3.ftcdn.net/jpg/03/09/23/80/360_F_309238018_2FRleW7ntjOr2dLMeoLuIr57HwlPS1gK.jpg',
    title: 'Juice',
    rate: '70',
  },
  {
    img: 'https://legateaucakes.com/cdn/shop/files/1kg-fruit-of-forest-egg-anniversary-cake-41175065198871.jpg?v=1688110238&width=1946',
    title: 'Cake',
    rate: '1000',
  },
  {
    img: 'https://videokosh.com/wp-content/uploads/2020/10/MAGGIE-.png',
    title: 'Maggi',
    rate: '250',
  },
  {
    img: 'https://static.toiimg.com/photo/101136807.cms',
    title: 'Ice creame',
    rate: '250',
  },
  {
    img: 'https://static.toiimg.com/thumb/msid-80752819,imgsize-1332633,width-400,resizemode-4/80752819.jpg',
    title: 'Chocolate',
    rate: '150',
  },
];