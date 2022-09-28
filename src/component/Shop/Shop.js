import React, { useEffect, useState } from 'react';
import { addToDb, getStoreCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        console.log('product added');
        fetch('products.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                // console.log('product already load');
            })
    }, []);

    // for load data in ui that not change
    // useEffect(() => {
    //     console.log('product loaded in localstorage')
    //     const storeCart = getStoreCart();
    //     const saveCart = [];
    //     for (const id in storeCart) {
    //         // console.log(id);
    //         const addedProduct = products.find(product => product.id === id);
    //         if (addedProduct) {
    //             const quantity = storeCart[id];
    //             addedProduct.quantity = quantity;
    //             saveCart.push(addedProduct);
    //             console.log(addedProduct);
    //         }
    //         setCart(saveCart);

    //     }
    // }, [products]);
    useEffect(() => {
        const storeCart = getStoreCart();
        const saveCart = [];
        for (const id in storeCart) {
            const addedProduct = products.find(product => product.id === id);
            if (addedProduct) {
                const quantity = storeCart[id];
                addedProduct.quantity = quantity;
                saveCart.push(addedProduct);
            }
            setCart(saveCart);
        }
    }, [products])

    const handleAddToCart = (selectedProduct) => {
        // console.log(product);
        let newCart = []
        const exists = cart.find(product => product.id === selectedProduct.id)
        if (!exists) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct]
        }
        else {
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }
        // const newCart = [...cart, selectedProduct];

        console.log(cart);
        setCart(newCart);
        addToDb(selectedProduct.id);

    }
    return (
        <div className='shop-container'>
            <div className='products-container'>


                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className='card-container'>
                <Cart
                    cart={cart}
                ></Cart>
                {/* <h2>this is for cards</h2>
                <p>Selectem item:{cart.length}</p> */}
            </div>
        </div>
    );
};

export default Shop;