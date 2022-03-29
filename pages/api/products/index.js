import { NEXT_PUBLIC_API_URL } from "../../../config/index";

const handler = async (req, res) => {
    try {
        const response = await fetch(`${NEXT_PUBLIC_API_URL}/api/collections/entries/products?d=true`);
        const products = await response.json();
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json(error)
    }
}
export default handler;
