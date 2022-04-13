import React from 'react';
import { useNavigate } from 'react-router-dom';
import useCart from '../../Hooks/useCart';
import useProducts from '../../Hooks/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css'

const Orders = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);

    const handleRemove = product => {
        const item = cart.filter(pd => pd.id !== product.id);
        setCart(item);
        removeFromDb(product.id);
    }

    const navigate = useNavigate();

    return (
        <div className="shop">
            <div className="order-products">
                {
                    cart.map(product => <ReviewItem
                        key={product.id}
                        product={product}
                        handleRemove={handleRemove}
                    ></ReviewItem>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <button style={{ padding: '10px', backgroundColor: '#1C2B35', border: 'none', color: 'white', fontWeight: 'bold' }} onClick={() => navigate('/shipping')}>Shipping</button>
                </Cart>
            </div>
        </div >
    );
};

export default Orders;