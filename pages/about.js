import Layout from "@/components/Layout"

const About = () => {
    return (
        <Layout title="about ounpha sausage" keywords={"about ounpha sausage"}>
            <div className="grid grid-cols-1 md:grid-cols-2 dark:bg-primary dark:text-gray-300">
                <div className="p-8 dark:bg-primary rounded-lg">
                    <div className="w-100 h-100">
                        <iframe className="w-full h-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10401.526326163555!2d97.04149315437168!3d20.751392183680917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb87747503fdd228!2sOunpha%20Shabu%20Shabu!5e0!3m2!1sen!2ssg!4v1647917832290!5m2!1sen!2ssg"
                            style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
                    </div>
                </div>
                <div className="p-8 dark:bg-primary">
                    <div className="p-8 space-y-4 dark:bg-secondary rounded-lg">
                        <h1 className="text-3xl text-light-primary dark:text-color-secondary">About Our Factory</h1>
                        <p>Our factory, based in Taunggyi, Myanmar, has been producing high-quality sausages since 2018. We take pride in our ability to craft authentic and delicious sausages that are true to their traditional roots.

                            Our Kayah sausages are made with pork meat mixed with traditional herbs and spices such as sichuan pepper, ginger, garlic and chili. We use only the best cuts of pork to ensure the sausages are juicy and flavorful.

                            Our Kayah chicken sausages are made with chicken meat, which is carefully selected and mixed with a blend of herbs and spices to give them a unique and delicious flavor.

                            Our Yunnan sausages are made with premium cuts of pork meat and infused with a traditional blend of spices that are specific to Yunnan province, China. These sausages are characterized by their bold and savory flavor, and are a perfect addition to any meal.

                            Our Taunggyi sausages are made with pork meat and have a BBQ flavor, which is achieved by carefully selecting the right blend of spices and herbs to give them a perfect balance of smokiness and sweetness.

                            We are committed to providing our customers with the best possible experience, from the time they place their order to the moment they take their first bite. Order now and taste the difference that quality and authenticity make!</p>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default About