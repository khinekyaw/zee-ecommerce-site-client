import React from "react"

import classes from "./Recommendations.module.css"
import ProductItem from "../ProductItem/ProductItem"
import getProducts from "../../../api/getProducts"
import Carousel from "../../UI/Carousel/Carousel"

const Recommendations = () => {
  const renderItem = ({ item }) => {
    return <ProductItem item={item} className={classes.item} />
  }

  return (
    <>
      <h4 className={classes.title}>Seller Recommendations</h4>
      <Carousel data={getProducts()} renderItem={renderItem} />
    </>
  )
}

export default Recommendations
