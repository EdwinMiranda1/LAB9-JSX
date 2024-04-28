import React, { useEffect, useState } from "react";
import './Card.css'

export const Card = () => {
    const [product, setProduct] = useState({});
    const [randomId, setRandomId] = useState(); 

    useEffect(() => {
        const newRandomId = Math.floor(Math.random() * 100) + 1;
        setRandomId(newRandomId);
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://dummyjson.com/products/${randomId}`);
            if (!response.ok) {
                console.error('Error al obtener los datos del producto');
                return;
            }
            const data = await response.json();
            setProduct(data);
        };
        fetchData();
    }, [randomId]);

    return (
        <div className="card-container">
            <h2 className="card-title">Producto Aleatorio</h2>
            <p className="card-id">ID: {randomId}</p>
                <div className="card-producto">
                <p className="title-product">Producto</p>
                <p className="card-product"> {product.title}</p>
                </div>
            <div className="descripcion">
                <p className="title-descrption">Descripcion</p>
                <p className="card-descrip"> {product.description}</p>
            </div>
            <p className="card-price">USD$: {product.price}</p>
        </div>
    );
    
};

