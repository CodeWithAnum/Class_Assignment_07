"use client"
import { useEffect, useState } from "react";
import Image from "next/image";
import { IoStar } from "react-icons/io5";
import NavBar from "../components/Navbar/page";
import Footer from "../components/Footer/page";

interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number,
        count: number,
    }
}

export default function ClientSide () {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {

        fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data: Product[]) => setProducts(data));
    }, []);
     
    return (
        <div>
            <NavBar/>
        <div className="py-[50px] px-[22px]">
            <h1 className="text-center mb-[40px] text-blue-600 font-semibold text-3xl md:text-4xl lg:text-5xl">Client Side Data Rendering</h1>

        <div className="grid gap-[28px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
                <div key={product.id} className="bg-gradient-to-r from-blue-100 via-pink-100 to-yellow-100 text-center p-[24px] rounded-lg shadow-lg hover:shadow-xl hover:scale-[1.05] transition">
                    <div className="h-[180px]">
                    <Image src={product.image} alt={product.title} width={100} height={100} className="size-[180px] mx-auto"/>
                    </div>
                    <p className="mt-[50px] mb-[8px] text-[24px] text-[blue] capitalize font-bold">{product.category}</p>
                    <p className="font-bold text-[20px] mb-[8px]">{product.title}</p>
                    <p className="line-clamp-3 mb-[8px]">{product.description}</p>
                    <p className="mb-[8px] text-[24px] font-semibold">${product.price}</p>
                    <p className="flex gap-2 text-[orange] text-[20px] mb-[8px]"><IoStar /><span>{product.rating.rate}</span>({product.rating.count} reviews)</p>
                    <div>
                        <button className="py-[8px] px-[28px] text-white bg-gradient-to-r from-blue-500 via-teal-400 to-blue-600 font-semibold rounded-[30px] hover:from-purple-500 hover:via-pink-400 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-300 hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out text-xl">Buy Now</button>
                   </div>
                </div>
            ))}
        </div>
        </div>
        <Footer/>
        </div>
    )
}

