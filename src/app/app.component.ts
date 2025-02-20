import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavBarComponent} from './components/nav-bar/nav-bar.component';
import {LinkTreeComponent} from './components/link-tree/link-tree.component';
import {MenuLeftComponent} from './components/menu-left/menu-left.component';
import {Menu4x3Component} from './components/menu4x3/menu4x3.component';
import {ProductCardComponent} from './components/product-card/product-card.component';
import {PaginationComponent} from './components/pagination/pagination.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent, LinkTreeComponent, MenuLeftComponent, Menu4x3Component, ProductCardComponent, PaginationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
    list_name = [
      {
        name: "STORE",
        child: false,
      },
      {
        name: "COMMISSION",
        child: false,
      },
      {
        name: "CATALOGUE",
        child: false,
      },
      {
        name: "ABOUT US",
        child: false,
      },
      {
        name: "SUPPORT",
        child: true,
      },
      {
        name: "AUTHENTICITY",
        child: false,
      },
    ]
  link_trees =[
    {
      page_name: "Home",
      page_link: "#",
    },
  ]

  left_menu = [
    {
      item_name: 'Artisan Keycap',
      child: true
    },
    {
      item_name: 'Keyboard',
      child: false
    },
    {
      item_name: 'Art Toy',
      child: false
    },
    {
      item_name: 'Accessories',
      child: true
    },
  ]
  color_menu = [
    {
      color: 'Red',
      color_code: '#FF2621'
    },
    {
      color: 'Blue',
      color_code: '#0C60DD'
    },
    {
      color: 'Yellow',
      color_code: '#FFBD31'
    },
        {
      color: 'Lime',
      color_code: '#FFBD31'
    },

    {
      color: 'Grey',
      color_code: '#808080'
    },
     {
      color: 'Orange',
      color_code: '#FF7426'
    },
     {
      color: 'Pink',
      color_code: '#FF6C8E'
    },
     {
      color: 'Purple',
      color_code: '#FF6C8E'
    },
     {
      color: 'Black',
      color_code: '#000000'
    },
     {
      color: 'White',
      color_code: '#ffffff'
    },
     {
      color: 'Brown',
      color_code: '#815D43'
    },
     {
      color: 'Green',
      color_code: '#127042'
    },
  ]

  list_product = [
    {
      img: 'https://resources.artkeyuniverse.com/upload/thumb/product/m5lG2vvLeKmOieCQrFKdD8mN2JrhX8p9fbBA8KX3.jpeg',
      title: 'AK75 Assemble',
      comment:"Sirius",
      price: 180,
      status: 'raffle ended'
    },
    {
      img: 'https://resources.artkeyuniverse.com/upload/thumb/product/45HfGU5R3Rk3biGpktQt3J6PpbagP5G6R490SHro.jpeg',
      title: 'Keebstation Deskpad',
      comment:"Deskpad",
      price: 26,
      status:   'in stock'
    },
    {
      img: 'https://resources.artkeyuniverse.com/upload/thumb/product/dUnJ0nOFTbsvNXqxehtmMtagRYtWutKViprd1L2v.jpeg',
      title: 'T-shirt',
      comment:"T-shirt",
      price: 27,
      status: 'in stock'
    },
  {
      img: 'https://resources.artkeyuniverse.com/upload/thumb/product/y3M408I4ED98nV5qdbT1Fb6xqpeWwok7yKvOTvT9.jpeg',
      title: 'Sirius Keychain',
      comment:"Leather Keychain2",
      price: 25,
      status: 'in stock'
    },
  {
      img: 'https://resources.artkeyuniverse.com/upload/thumb/product/zkzF4fgt2OnsvwQtYpZim6wocszRZ256MSFSio1x.jpeg',
      title: 'Sirius & Goodoo Deskpad',
      comment:"Deskpad",
      price: 30,
      status: 'in stock'
    },
    {
      img: 'https://resources.artkeyuniverse.com/upload/thumb/product/vTuKK0fgGi8fL0wBsseFfhibpvQBxcgc3DjQodQ5.jpeg',
      title: 'Bull v2 Keychain',
      comment:"Leather Keychain",
      price: 25,
      status: 'in stock'
    },
  {
      img: 'https://resources.artkeyuniverse.com/upload/thumb/product/yhgAL0YEIHEMJUggH4Gqh0riZEMPMLdFHGhRskUy.jpeg',
      title: 'Psychedelic Rainbow',
      comment:"AK75 Weight & Badge",
      price: 299,
      status: 'raffle ended'
    },
  {
      img: 'https://resources.artkeyuniverse.com/upload/thumb/product/Syo2Dh42nRWBBxgSk37EjIaKljStLnztWI5oZtoY.jpeg',
      title: 'Wild Horizon',
      comment:"Sirius | Porcus v1.5 | Exoboy",
      price: 180,
      status: 'raffle ended'
    },
  {
      img: 'https://resources.artkeyuniverse.com/upload/thumb/product/t9Dk4KGchQk0B9KwAxkX38UcAv4Pewq7fv91tYJ8.jpeg',
      title: 'Fastball Fury',
      comment:"Sirius | Porcus v1.5 | Exoboy",
      price: 150,
      status: 'raffle ended'
    },
  {
      img: 'https://resources.artkeyuniverse.com/upload/thumb/product/PPzrapKURXKSbDYOHvFnqtnUCRZ33JntNrmrD4US.jpeg',
      title: 'Guardian Spirit (Nghê)  ',
      comment:"Sirius | Porcus v1.5 | Exoboy",
      price: 180,
      status: 'raffle ended'
    },
  {
      img: 'https://resources.artkeyuniverse.com/upload/thumb/product/qGr1f9xESGLPXWvSMm1IqIazf6lj909n6mYFPUfe.jpeg',
      title: 'Frankendolls',
      comment:"Sirius | Porcus v1.5 | Exoboy",
      price: 180,
      status: 'raffle ended'
    },
  {
      img: 'https://resources.artkeyuniverse.com/upload/thumb/product/l22tFu23GlPkF5nubR78P3ihocPlW2FdgUn53MqA.jpeg',
      title: 'Kitsune Samurai',
      comment:"Sirius",
      price: 200,
      status: 'raffle ended'
    },

  ]

}













