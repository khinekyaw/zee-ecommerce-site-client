import React, { useReducer } from "react"
import CartContext from "./cart-context"

const ADD = "ADD"
const REMOVE = "REMOVE"
const SELECT = "SELECT"
const SELECT_ALL = "SELECT_ALL"
const DELETE = "DELETE"
const defaultCartState = {
  items: [],
  selectAll: false,
  totalAmount: 0
}

const getTotalPrice = arr => {
  return arr.reduce(
    (obj, item) => obj + item.checked * item.price * item.amount,
    0
  )
}

const cartReducer = (state, action) => {
  // ADD
  if (action.type === ADD) {
    const itemId = state.items.findIndex(i => i.id === action.item.id)
    const existingCartItem = state.items[itemId]

    if (existingCartItem) {
      const items = state.items.map(item => {
        if (item.id === action.item.id)
          return { ...item, amount: item.amount + 1 }
        return item
      })
      return {
        ...state,
        totalAmount: getTotalPrice(items),
        items
      }
    }

    return {
      ...state,
      items: [...state.items, { ...action.item, amount: 1, checked: false }]
    }
  }
  // Remove
  if (action.type === REMOVE) {
    const items = state.items.map(item => {
      if (item.id === action.id) {
        return { ...item, amount: item.amount > 1 ? item.amount - 1 : 1 }
      }
      return item
    })

    return { ...state, totalAmount: getTotalPrice(items), items }
  }

  // Delete
  if (action.type === DELETE) {
    const items = state.items.filter(item => item.id !== action.id)
    return { ...state, totalAmount: getTotalPrice(items), items }
  }

  // Select
  if (action.type === SELECT) {
    const items = state.items.map(item => ({
      ...item,
      checked: item.id === action.id ? !item.checked : item.checked
    }))
    return { ...state, totalAmount: getTotalPrice(items), items }
  }

  // Select all
  if (action.type === SELECT_ALL) {
    const selectAll = !state.selectAll
    const items = state.items.map(item => ({
      ...item,
      checked: selectAll
    }))
    return {
      ...state,
      selectAll,
      totalAmount: getTotalPrice(items),
      items
    }
  }

  return defaultCartState
}

const CartProvider = props => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  )

  const addItemToCartHandler = item => {
    dispatchCartAction({ type: ADD, item })
  }

  const removeItemFromCartHandler = id => {
    dispatchCartAction({ type: REMOVE, id })
  }

  const deleteItemFromCartHandler = id => {
    dispatchCartAction({ type: DELETE, id })
  }

  const selectItemFromCartHandler = id => {
    dispatchCartAction({ type: SELECT, id })
  }

  const selectAllItemFromCartHandler = () => {
    dispatchCartAction({ type: SELECT_ALL })
  }

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    selectAll: cartState.selectAll,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    deleteItem: deleteItemFromCartHandler,
    selectItem: selectItemFromCartHandler,
    selectAllItem: selectAllItemFromCartHandler
  }

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider
