import React, { useState } from "react";

import { OrderItem } from '../../types/OrderItem';
import { getMaxId } from '../../services/order';
import { OrderItemList } from '../OrderItemList';
// #endregion

type Props = {
  name: string
}

export class ShoppingCart2 extends React.Component<Props> {
  state = {
    code: '',
    quantity: 0,
    orderItems: [],
  };

  handleCodeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ code: event.target.value })
  };

  handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ quantity: +event.target.value });
  };

  handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    this.setState(currentState => {
      const { quantity, code, orderItems} = this.state;

      if (quantity <= 0 || !code) {
        return null;
      }

      const id = 1 + getMaxId(orderItems);
      const newItem = { id, code, quantity };
  
      return {
        orderItems: [...orderItems, newItem],
        code: '',
        quantity: 0,
      };

    })
  };

  render(): React.ReactNode {
    const { code, quantity, orderItems } = this.state;
    const { name } = this.props;

    const filteredItems = orderItems.filter(() => true);

    return (
      <div className="box">
        <h2 className="title is-5 mb-2">{name}</h2>

        <form onSubmit={this.handleSubmit} noValidate className="mb-4">
          <input
            type="text"
            placeholder="Enter code"
            value={code}
            onChange={this.handleCodeChange}
          />

          <input
            type="number"
            min="1"
            max="9"
            value={quantity}
            onChange={this.handleQuantityChange}
          />

          <button type="submit">Add</button>
        </form>

        <OrderItemList items={filteredItems} />
      </div>
    );
  }
}