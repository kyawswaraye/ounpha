const fetchSingleProduct = async (id) => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/collections/entries/products?filter[_id]=${id}`);
        const { entries } = await response.json();
        return entries.length > 0 ? entries[0] : [];
    } catch (error) {
        console.log(error)
    }
}
export default fetchSingleProduct;
