import React from 'react'
import './Home.css';
import Product from './Product'

export default function Home() {
  return (
    <div>
        <div className='home'>
            <div className='home-container'>
                <img src="https://t4.ftcdn.net/jpg/07/64/55/75/360_F_764557526_HlwV6rYpIxrfhrmlpTzl74INFoMmJs9Z.jpg" alt="" className='home-image'/>
                <div className='home-row'>
                    <Product
                    id="123"
                    title="Explorer’s Delight Waterproof School Bag Combo - Backpack, Lunch Bag & Pencil Case"
                    price={2131.99}
                    rating={3}
                    image="https://staranddaisy.in/wp-content/uploads/2024/02/Spacious-kids-school-bags-Unicorn_Love_Navy_blue_1.jpg"
                    />
                    <Product
                    id="134"
                    title="Flower Vase"
                    price={800}
                    rating={5}
                    image="https://media.istockphoto.com/id/1339314411/photo/bright-autumn-bouquet-of-dahlias-and-asters-on-the-table.jpg?s=612x612&w=0&k=20&c=cLLdPTBEqWeI5Pp6xLU3D1nwfL0xgeSekXRqUDHkbKk="
                    />
                </div>
                <div className='home-row'>
                <Product
                id="32"
                title="LG 32 L Convection Microwave Oven (MC3286BRM, Black)"
                price={17590}
                rating={4}
                image="https://www.lg.com/content/dam/channel/wcms/in/images/microwave-ovens/mc3286brum_dbkqiln_eail_in_c/gallery/MC3286BRUM-microwave-ovens-Front-view-D-01.jpg"
                />
                <Product
                id="322"
                title="iPhone"
                price={70900}
                rating={4}
                image="https://itechstore.co.in/uploads/products/16-plus.webp"
                />
                <Product
                id="323"
                title="Clothes"
                price={5000}
                rating={4}
                image="https://mywaste.ie/wp-content/uploads/2024/05/00156431-800.jpg"
                />
                </div>
                <div className='home-row'>
                <Product
                id="312"
                title="World Wear Footwear Latest Exclusive Affordable Collection of Trendy & Stylish White Casual Shoes"
                price={1999}
                rating={3}
                image="https://rukminim2.flixcart.com/image/850/1250/xif0q/shoe/t/6/w/9-vs-9500-9-world-wear-footwear-white-original-imagn6a5fqbncryj.jpeg?q=90&crop=false"
                />
                </div>
            </div>
        </div>
    </div>
  )
}
