import Image from "next/image";
import Link from "next/link";
import { NEXT_PUBLIC_API_URL } from "../config";
const ProductItem = ({ product }) => {
    return (
        <div className="flex flex-col items-center justify-center mt-8 dark:bg-primary dark:text-gray-300">
            <div className="flex flex-col shadow-md cursor-pointer hover:-translate-y-1 duration-300 dark:bg-secondary">
                <div className="inline group">
                    <Image className="rounded-t" alt={product.title}
                        src={product.featured_image[0].path}
                        width={500} height={300} objectFit="cover"
                    />
                </div>

                <div className="flex flex-col bg-white rounded-lg p-4 space-y-4 dark:bg-secondary dark:text-gray-300">
                    <div className="text-xl font-semibold tracking-wide font-title">
                        {product.title}
                    </div>
                    <div className="text-sm tracking-wider leading-loose line-clamp-3"
                        dangerouslySetInnerHTML={{ __html: product.description }} />

                    <div className="text-sm font-bold">
                        {product.price} Kyats
                    </div>

                    <div className="flex flex-row justify-end">
                        <Link href={`products/${product._id}`}>
                            <a className="flex text-xs px-3 my-auto py-2 rounded-xss border border-light-primary hover:text-gray-300 dark:bg-primary
                        hover:bg-light-primary dark:hover:bg-color-secondary dark:hover:text-gray-900">
                                Details
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default ProductItem;
