import React from 'react';
import Cart from './Cart';
import '../StyleSheet/mystyle.css';

export  default class OnlineShopping extends React.Component
{
    render() {
        const CartInfo = [{ itemname: "Laptop", price: 80000 },
        { itemname: "TV", price: 120000 },
        { itemname: "Washing Machine", price: 50000 },
        { itemname: "Mobile", price: 30000 },
        { itemname: "Fridge", price: 70000 }];

        return (
            <>

                < div className="mydiv">
                    <table className="table table-bordered" >
                    <h1 className="item">Items Ordered:</h1>
                       <Cart item={CartInfo} />
                    </table>
            </div>
            </>
            );
    }
}