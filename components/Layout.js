import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./Navbar";
const Layout = ({ children, title, keywords, description }) => {
    return (
        <div>
            <Head>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <title>{title}</title>
            </Head>
            <Navbar />
            <div>
                {children}
            </div>
            <Footer />
        </div>
    );
}

Layout.defaultProps = {
    title: "Ounpha | Sausage",
    description: "The best sausage in myanmar",
    keywords: "sausage, kayah-sausage, taunggyi, myanmar, ဝက်အူချောင်း, ကယားဝက်အူချောင်း, တောင်ကြီး, မြန်မာ"
}

export default Layout;