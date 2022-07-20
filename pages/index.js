import Slider from "@/components/Slider";
import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import ProductList from "@/components/ProductList"

const Home = () => {
  const [data, setdata] = useState();
  useEffect(() => {
    (async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/collections/entries/products?d=true`);
      const products = await res.json();
      setdata(products.entries)
    })()
  }, [])
  return (
    <Layout>
      <Slider />
      <ProductList products={data} />
    </Layout>
  )
}
export default Home
