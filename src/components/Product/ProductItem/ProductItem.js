import React from "react"

import classes from "./ProductItem.module.css"
import Card from "../../UI/Card/Card"
import Button from "../../UI/Button/Button"

const ProductItem = props => {
  const { product } = props
  // console.log(props.parentWidth)

  return (
    <Card
      className={classes.card}
      style={{
        marginRight: props.margin
      }}>
      <div className={classes.item}>
        <div className={classes.imageContainer}>
          <img src={product.imageUrl} alt={product.title + "image"}></img>
        </div>
        <div className={classes.itemInfo}>
          <p>{product.title}</p>
          <p>Ks {product.price}</p>
          <Button type='outline'>ADD TO CART</Button>
        </div>
      </div>
    </Card>
  )
}

export default ProductItem
