import React, { useEffect, useState, useContext } from "react"

import ProductsSectionBar from "../../components/Product/ProductsSectionBar/ProductsSectionBar"
import StoreProfileItem from "../../components/Stores/StoreProfileItem/StoreProfileItem"
import getStores from "../../api/getStores"
import LanguageContext from "../../context/language-context"
import GridView from "../../components/UI/GridView/GridView"

const SectionMore2Love = () => {
  const { languageDict: texts } = useContext(LanguageContext)
  const [data, setData] = useState()

  useEffect(() => {
    setData(getStores().slice(0, 4))
  }, [])

  return (
    <>
      <ProductsSectionBar
        title={texts.home["section-title-2"]}
        subTitle={texts.actions["view-more"]}
      />
      <GridView data={data} renderItem={StoreProfileItem} />
    </>
  )
}

export default SectionMore2Love
