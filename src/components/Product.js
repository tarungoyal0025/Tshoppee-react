import React from 'react'
import ProductItems from "./ProductItems"

export default function Product() {
    const article = [
        {
    
            "title": " Silver Mini Dress",
            "description": " A corset dress made as a combination of two silhouettes : Sequins and Fur. The perfect outfit for that glam night party, your own birthday ,prom night & basically every event!",
            "urlToImage": "1.jpg",
            "price":"₹1999"
        },
        {
            
            "title": "Swim Wear",
            "description": "A Swim Wear typically refers to a type of exercise or workout routine that focuses on running or jogging for a specific duration or distance, usually less than a full running session. It is often used as a warm-up or recovery exercise before or after a more intense running workout.",
            "urlToImage": "2.jpg",
            "price":"₹2299"
        },
        {
           
            "title": "Formal Men Lowers",
            "description": "Formal Men Lowers, also known as formal pants or trousers, are a type of bottom-wear typically worn by men in formal or professional settings. They are designed to provide a polished and sophisticated look while adhering to a specific dress code or professional standards.",
            "urlToImage": "3.jpg",
            "price":"₹1899"
        },
        {
            "title": "Half Running Suit",
            "description": "A half running suit, also known as a tracksuit or athletic suit, is a two-piece outfit typically worn by athletes and fitness enthusiasts during training or casual activities. It consists of a matching jacket or sweatshirt and a pair of matching pants or shorts. The term half running suit refers to the fact that the suit covers only the upper or lower half of the body, depending on the style and preferences of the wearer.",
            "urlToImage": "4.jpg",
            "price":"₹1599"
        },
        {
           
            "title": "Half Fancy Lady Dress",
            "description":"The Half Fancy Lady Dress is an elegant and stylish outfit designed for women who want to make a fashionable statement at special occasions and events. This dress combines sophistication with a touch of glamour, making it perfect for formal gatherings, cocktail parties, weddings, and other upscale events.",
            "urlToImage": "5.jpg",
            "price":"₹1999"
        },
        {
           
            "title": "Flix Flox Jeans",
            "description": "Flix Flox Jeans are a trendy and stylish choice for individuals who want to embrace a fashionable and comfortable denim look. These jeans are designed with a focus on versatility, allowing you to effortlessly dress them up or down for various occasions.",
            "urlToImage": "6.jpg",
            "price":"₹2599"
        },
        {
           
            "title": "Fancy Salwar Suits",
            "description": "Fancy Salwar Suits are elegant and sophisticated traditional outfits that exude grace and charm. These suits are popular among women for their intricate designs, rich embellishments, and vibrant colors, making them a perfect choice for special occasions and festive celebrations.",
            "urlToImage": "7.jpg",
            "price":"₹1499"
        },
        {
           
            "title": "Printed Straight Kurta",
            "description": "Printed Straight Kurtas are stylish and versatile ethnic garments for women that offer a perfect blend of comfort and fashion. These kurtas are known for their straight silhouette, clean lines, and printed designs, making them a popular choice for casual and semi-formal occasions",
            "urlToImage": "8.jpg",
            "price":"₹2999"
        }
    ]
  return (
    <div>
      <div className='container my-4'>
        <div className='row'>
          {article.map((element) => (
            <div className='col-md-3'>
              <ProductItems
                title={element.title.slice(0, 45)}
                description={element.description.slice(0, 88)}
                imageUrl={element.urlToImage}
                price ={element.price}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}




  

