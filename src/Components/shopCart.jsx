import React, { Component } from 'react';
import ShopItem from './shopItem'

class ShopCart extends Component {
    state = {
        Items : [
            {id: 1, value: 0},
            {id: 2, value: 0},
            {id: 3, value: 0},
            {id: 4, value: 0},
        ],
        initialItems : [
            {id: 1, value: 0},
            {id: 2, value: 0},
            {id: 3, value: 0},
            {id: 4, value: 0},
        ]
    }

    handleDelete = (ShoppingItemID) => {
        const Items = this.state.Items.filter((ShoppingItem) => ShoppingItem.id !== ShoppingItemID); // lambda函数右边不加{}，左边可以有(), 也可以没有()
        this.setState({ Items });
    }

    resetShoppingItem = () => {
        this.setState({
            Items: this.state.initialItems
        })
    }

    render() { 
        return (
            <div>
                <button className="btn btn-primary l-2" onClick={this.resetShoppingItems}>Reset</button>
                {this.state.Items.map(ShoppingItem => <ShopItem
                    key = {ShoppingItem.id}
                    id = {ShoppingItem.id}
                    value = {ShoppingItem.value}
                    onDelete = {this.handleDelete}
                />)}
            </div>
        );
    }
}
 
export default ShopCart;