import Layout from "@/components/Layout";
import Link from "next/link";

const NotFound = () => {
    return (
        <Layout title={"Not Found"}>
            <div className="flex flex-col items-center justify-center dark:bg-primary dark:text-gray-300 h-96">
                <h1 className="text-5xl">404</h1>
                <p>Sorry.There is nothing here.</p>
                <Link href="/">
                    <a className="text-blue-600">Go Back to Home</a>
                </Link>
            </div>
        </Layout>
    );
}

export default NotFound;    