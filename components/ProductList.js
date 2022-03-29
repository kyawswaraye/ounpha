import ProductItem from "./ProductItem";

const ProductList = ({ products }) => {
    return (
        <div className="px-16 pb-8 dark:bg-primary dark:text-gray-300">
            <h1 className="text-3xl pt-8 text-center font-title">Our Products</h1>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {products && products.map((product) => (
                    <ProductItem key={product._id} product={product} />
                ))}
            </div>
        </div>
    );
}

export default ProductList;
