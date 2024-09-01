import DefaultPage from "../layout/DefaultPage";
import Logo from "@components/Logo";


const Support = () => {
    return (
        <DefaultPage label="Support" bg>
            <Logo primary />
            <h1 className="text-2xl font-bold mb-4">Support</h1>
            <p className="mb-4">
                If you need assistance with the Employee Leave Management
                application, please refer to the following resources:
            </p>
            <ul className="list-disc list-inside">
                <li>
                    <strong>Documentation:</strong> Detailed user guides and
                    FAQs are available in our documentation section.
                </li>
                <li>
                    <strong>Contact Support:</strong> You can reach out to our
                    support team via email at{" "}
                    <a
                        href="mailto:support@email.com"
                        className="text-blue-500"
                    >
                        support@email.com
                    </a>
                    .
                </li>
                <li>
                    <strong>Community Forum:</strong> Join our community forum
                    to ask questions and share your experiences with other
                    users.
                </li>
            </ul>
        </DefaultPage>
    );
};

export default Support;
