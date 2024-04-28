# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Install & Run
- yarn 
- yarn dev

### typescrit & fetch
Si estuviéramos trabajando con archivos tsx en lugar de jsx, tendríamos la capacidad de aprovechar las ventajas del tipado estático ofrecido por TypeScript. Aquí hay algunos cambios que podríamos hacer en el archivo Card.tsx para incluir el tipado y cómo se vería el tipado para el estado product:

- Cambios en la Extensión del Archivo:
    Cambiaríamos la extensión del archivo de .jsx a .tsx para indicar que el archivo contiene código TypeScript con soporte para JSX.
- Tipado del Estado product:
    Podemos definir una interfaz que represente la estructura de datos del producto. Esto nos permitirá especificar los tipos de cada propiedad del producto.

el codigo seria asi 
import React, { useEffect, useState } from "react";

interface Product {
    title: string;
    description: string;
    price: number;
}

export const Card = () => {
    const [product, setProduct] = useState<Product>({}); // Especificamos el tipo de product como Product
    const [randomId, setRandomId] = useState<number>(1); // Especificamos el tipo de randomId como number

    useEffect(() => {
        const newRandomId: number = Math.floor(Math.random() * 100) + 1;
        setRandomId(newRandomId);
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://dummyjson.com/products/${randomId}`);
            const data: Product = await response.json(); // Especificamos el tipo de data como Product
            setProduct(data);
        };
        fetchData();
      
    }, [randomId]);

    return (
        <div>
            <h2>Producto Aleatorio</h2>
            <p>ID: {randomId}</p>
            <p>Título: {product.title}</p>
            <p>Descripción: {product.description}</p>
            <p>USD$: {product.price}</p>
        </div>
    );
};

- En esta versión:

   - Hemos definido una interfaz Product que describe la estructura de un producto, con propiedades title, description y price.
   - Hemos especificado los tipos de product y randomId utilizando TypeScript.
   - En el segundo efecto, hemos especificado que el tipo de data es Product al utilizar la interfaz Product.

Con estos cambios, nuestro código está más robustamente tipado, lo que ayuda a prevenir errores y proporciona una mejor documentación sobre la forma de los datos que se están utilizando en nuestro componente.