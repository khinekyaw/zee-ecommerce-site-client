import React, { useContext, useState, useEffect } from "react"

import ProductsSectionBar from "../../components/Product/ProductsSectionBar/ProductsSectionBar"
// import ListView from "../../components/UI/ListView/ListView"
// import ProductItem from "../../components/Product/ProductItem/ProductItem"
import ProductItem from "../../components/Product/ProductItem/ProductItem"

import getProducts from "../../api/getProducts"
import LanguageContext from "../../context/language-context"
import GridView from "../../components/UI/GridView/GridView"
import classes from "./SectionMore2Love.module.css"

const SectionMore2Love = () => {
  const { languageDict: texts } = useContext(LanguageContext)
  const [activePage, setActivePage] = useState(1)
  const [data, setData] = useState()

  const loadMoreHandler = props => {
    setActivePage(prev => prev + 1)
  }

  useEffect(() => {
    setData(getProducts().result)
  }, [])

  return (
    <>
      <ProductsSectionBar
        className={classes.margin}
        type='mid'
        title={texts.home["section-title-3"]}
      />
      <GridView data={data} renderItem={ProductItem} />
      <div className={classes["btn-container"]}>
        <Button>Load More</Button>
      </div>
    </>
  )
}

export default SectionMore2Love
