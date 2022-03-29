import { NEXT_PUBLIC_API_URL } from "../../../config/index";

const handler = async (req, res) => {
    const { id } = req.query;
    try {
        const response = await fetch(`${NEXT_PUBLIC_API_URL}/api/collections/entries/products/${id}`);
        const products = await response.json();
        const data = products.entries;
        const product = data.filter((e) => e._id.toString() === id);
        if (!product) {
            return res.status(400).json("Product not found.");
        } else {
            res.status(200).json(product)
        }
    } catch (error) {
        res.status(500).json(error)
    }
}
export default handler;
