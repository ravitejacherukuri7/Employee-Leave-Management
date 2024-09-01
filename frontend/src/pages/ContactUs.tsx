import DefaultPage from "../layout/DefaultPage";
import Logo from "@components/Logo";


const ContactUs = () => {
    return (
        <DefaultPage label="Contact Us" bg>
            <Logo primary />
            <p className="mb-4">
                We'd love to hear from you! If you have any questions, feedback,
                or concerns, please feel free to reach out to us.
            </p>
            <h2 className="text-xl font-semibold mb-2">Contact Information</h2>
            <ul className="list-disc list-inside">
                <li>
                    <strong>Email:</strong>{" "}
                    <a
                        href="user@email.com"
                        className="text-blue-500"
                    >
                        user@email.com
                    </a>
                </li>
                <li>
                    <strong>Phone:</strong> +91 77777777777
                </li>
                <li>
                    <strong>Address:</strong> Hyderabad, Telangana,
                    India
                </li>
            </ul>
        </DefaultPage>
    );
};

export default ContactUs;
