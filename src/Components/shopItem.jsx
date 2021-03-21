import React, { Component } from 'react';

class ShopItem extends Component {
    state = {
        value: this.props.value
    };

    render() {
        return (
            <div>
                <span className={this.spanStyle()}>{this.count()}</span>
                <button className = "btn btn-secondary m-2" onClick={this.addShoppingItem}> + </button>
                <button className = "btn btn-secondary m-2" onClick={this.deleteShoppingItem}> - </button>
                <button 
                    className="btn btn-outline-danger" 
                    onClick={() => this.props.onDelete(this.props.id)}>
                Delete the ShoppingItem</button>
            </div>

        );
    }

    addShoppingItem = () => {
        this.setState({ value : this.state.value+1 })
    }

    deleteShoppingItem = () => {
        if (this.state.value > 0) {
            this.setState({ value: this.state.value-1 })
        }
    }

    spanStyle() {
        let classes = "badge m-2 badge-";
        classes += (this.state.value === 0) ? 'warning': "primary";
        return classes
    }

    count() {
        return (this.state.value === 0) ? 'zero' : this.state.value;
    }
}

export default ShopItem;