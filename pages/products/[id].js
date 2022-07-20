import Layout from "@/components/Layout";
import Image from "next/image";
import fetchSingleProduct from "pages/api/products/single";
import { NEXT_PUBLIC_API_URL } from "../../config"
const Product = ({ product }) => {
    return (
        <Layout>
            <div className="dark:bg-primary p-8">
                <div className="p-8 shadow-md dark:bg-secondary dark:text-gray-300 rounded-lg">
                    <h1 className="text-3xl mb-6 text-light-primary dark:text-color-300">{product.title}</h1>
                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                        <div>
                            <Image alt={product.title}
                                src={NEXT_PUBLIC_API_URL + product.featured_image[0].path}
                                width={1200} height={768} objectFit="cover"
                            />
                        </div>
                        <div className="space-y-4">
                            <div className="tracking-wide" dangerouslySetInnerHTML={{ __html: product.description }} />
                            <p className="text-light-primary dark:text-color-secondary">$ {product.price}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Product;

export const getServerSideProps = async ({ params }) => {
    const product = await fetchSingleProduct(params.id);
    console.log(product)
    return {
        props: { product }
    }
}