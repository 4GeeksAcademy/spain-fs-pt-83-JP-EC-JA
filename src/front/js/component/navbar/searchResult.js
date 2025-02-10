import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { AllCards } from "../allcards";

export const SearchResults = () => {
    const location = useLocation();
    const query = new URLSearchParams(location.search).get("query"); // Obtener el parámetro "query"
    const [results, setResults] = useState([]);

    useEffect(() => {
        const fetchResults = async () => {
            try {
                const res = await fetch("https://fakestoreapi.com/products");
                if (!res.ok) throw new Error("Error al obtener productos");

                const products = await res.json();

                // Filtrar productos que coincidan con la búsqueda
                const filteredProducts = products.filter(product =>
                    product.title.toLowerCase().includes(query.toLowerCase())
                );

                setResults(filteredProducts);
            } catch (error) {
                console.error("Error en la búsqueda:", error);
            }
        };

        if (query) {
            fetchResults();
        }
    }, [query]);

    return (
        <div className="container-fluid pt-5 mt-5">
            <h2>Resultados de búsqueda para: "{query}"</h2>
            {results.length === 0 ? (
                <p>No se encontraron productos</p>
            ) : (
                <div className="card-container">
                    {results.map(product => (
                        <AllCards image={product.image} title={product.title} category={product.category} price={product.price} rate={product.rating.rate} id={product.id} />
                    ))}
                </div>
            )}
        </div>
    );
};
