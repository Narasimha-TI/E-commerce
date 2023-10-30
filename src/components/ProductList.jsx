import React from "react";
import ProductItem from "./ProductItem";

const productData = [
  {
    id: 1,
    name: "BLUE MARTIN",
    price: 310,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9flkJBVkL99-Yl-7IbJulnPAkOQt-cbr3oJYAGBnzmnkFAIvkG1kX0Jxc7vn4BkKQVe0&usqp=CAU",
  },
  {
    id: 2,
    name: "VeBNoR",
    price: 212,
    image:
      "https://www.beyoung.in/api/cache/catalog/products/printed_t_shirts_combo_update_images_16_5_2022/pack_of_3_inspiring_printed_combo_t-shirts_base_700x933.jpg",
  },
  {
    id: 3,
    name: "Smartees",
    price: 210,
    image:
      "https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/b/a/r/s-all-rbc-white-one-nb-nicky-boy-original-imagpycnuxmrupp5.jpeg?q=70",
  },
  {
    id: 5,
    name: "AUSK ",
    price: 163,
    image:
      "https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/q/6/c/xl-com-rbc-one-nb-nicky-boy-original-imagrdkm7jz2zbrr.jpeg?q=70",
  },
  {
    id: 6,
    name: "Fashion Flair.",
    price: 120,
    image:
      "https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/q/m/x/m-com-tri-rb-nb-nicky-boy-original-imagn35mk6sz4ped.jpeg?q=70",
  },
  {
    id: 7,
    name: "Closet Luxe",
    price: 510,
    image:
      "https://rukminim2.flixcart.com/image/832/832/l44hyfk0/shirt/d/k/w/xl-classic-shirt-tradehub-original-imagf3afemuffwf5.jpeg?q=70",
  },
  {
    id: 8,
    name: "Haute & Chic Boutique",
    price: 210,
    image:
      "https://images.unsplash.com/photo-1603252109360-909baaf261c7?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D",
  },
  {
    id: 9,
    name: "Tickles & Giggles Co.",
    price: 120,
    image:
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNoaXJ0fGVufDB8fDB8fHww",
  },
  {
    id: 10,
    name: "Sunny Smiles Clothing",
    price: 265,
    image:
      "https://rukminim2.flixcart.com/image/832/832/kzn17680/shirt/m/u/o/l-logo-shirt-infinity-choice-original-imagbhwg2c5gggbc.jpeg?q=70",
  },
  {
    id: 11,
    name: "Playful Pals Fashions",
    price: 165,
    image:
      "https://rukminim2.flixcart.com/image/832/832/xif0q/kids-t-shirt/7/a/d/1-2-years-bogrblbz61-bl1-0bz55-ylblrnfulboy-1-0bz53-blive-original-imagnupbzy92rvda.jpeg?q=70",
  },
  {
    id: 12,
    name: "BrightKids Apparel",
    price: 150,
    image:
      "https://rukminim2.flixcart.com/image/832/832/l0e6kcw0/t-shirt/h/g/d/m-half-triangel-black-one-nb-nicky-boy-original-imagc747apzffz5q.jpeg?q=70",
  },
  {
    id: 13,
    name: " Kids Kapers Clothing Co.",
    price: 16,
    image:
      "https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/c/u/p/xl-half-triangel-black-one-nb-nicky-boy-original-imagn5gc6aky6ntv.jpeg?q=70",
  },
  {
    id: 14,
    name: "Joyful Jumpsuit",
    price: 10,
    image:
      "https://images.unsplash.com/photo-1602810319250-a663f0af2f75?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8",
  },
  {
    id: 15,
    name: "Ralph Lauren",
    price: "2000",
    image:
      "https://time.com/shopping/static/c7fcc77da46b225e02b9cec473aac3b4/5d183/j.webp",
  },
  {
    id: 16,
    name: "Puma",
    price: "2000",
    image:
      "https://time.com/shopping/static/338d27f635a4c1ccb1cc521a2a9c175d/66cc2/loro-piana.webp",
  },
  {
    id: 17,
    name: "Champion",
    price: "2000",
    image:
      "https://cdn.shopify.com/s/files/1/0752/6435/files/IMG_0711_86c1a28d-a814-4cc6-969b-1ce4a97adfaa_800x.jpg?v=1683545654",
  },
  {
    id: 18,
    name: "Hugo",
    price: "2000",
    image:
      "https://cdn.shopify.com/s/files/1/0752/6435/files/IMG_0098_58549826-3199-47c0-8254-940f4ffbb0ba_800x.jpg?v=1690628107",
  },
  {
    id: 19,
    name: "J.Crew",
    price: "2000",
    image:
      "https://cdn.shopify.com/s/files/1/0752/6435/files/LEONS-SS-GREEN5796_800x.jpg?v=1696001107",
  },
  {
    id: 20,
    name: "Tommy Hilfiger",
    price: "2000",
    image:
      "https://cdn.shopify.com/s/files/1/0752/6435/products/HERO_8bcf9be4-3284-4218-9de5-e1df3ccf9624_800x.jpg?v=1678608180",
  },
  {
    id: 21,
    name: "sickles & Giggles Co",
    price: "2000",
    image:
      "https://cdn.shopify.com/s/files/1/0752/6435/products/IMG_0045_800x.jpg?v=1671020090",
  },
  {
    id: 22,
    name: "Sunny Smiles Clothing",
    price: "2000",
    image:
      "https://cdn.shopify.com/s/files/1/0752/6435/files/MAXIM-BEIGE4139_800x.jpg?v=1690611175",
  },
  {
    id: 23,
    name: "jokey",
    price: "2000",
    image:
      "https://cdn.shopify.com/s/files/1/0752/6435/files/ARTEN-BLUE4883_800x.jpg?v=1697274801",
  },
];

function ProudctList({productCart,handleCartCountChange}) {
  return (
    <div className="Product-list">
      {productData.map((product) => (
        <ProductItem handleCartCountChange={handleCartCountChange} key={product.id} product={product} onClick={productCart}/>
      ))}
    </div>
  );
}

export default ProudctList;
