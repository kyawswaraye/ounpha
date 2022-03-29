import Layout from "@/components/Layout"

const About = () => {
    return (
        <Layout title="about ounpha sausage" keywords={"about ounpha sausage"}>
            <div className="grid grid-cols-1 md:grid-cols-2 dark:bg-primary dark:text-gray-300">
                <div className="p-8 dark:bg-primary rounded-lg">
                    <div className="w-100 h-100">
                        <iframe className="w-full h-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10401.526326163555!2d97.04149315437168!3d20.751392183680917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb87747503fdd228!2sOunpha%20Shabu%20Shabu!5e0!3m2!1sen!2ssg!4v1647917832290!5m2!1sen!2ssg"
                            style={{ border: 0 }} allowfullscreen="" loading="lazy"></iframe>
                    </div>
                </div>
                <div className="p-8 dark:bg-primary">
                    <div className="p-8 space-y-4 dark:bg-secondary rounded-lg">
                        <h1 className="text-3xl text-light-primary dark:text-color-secondary">About Our Factory</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum impedit accusantium soluta, nemo laboriosam optio molestiae corporis atque magnam inventore.</p>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default About