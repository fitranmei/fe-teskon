import PageHead from "@/components/commons/PageHead";
import { ReactNode } from "react";

interface propTypes {
    title?: string;
    children: ReactNode;
}

const AuthLayout = (props: propTypes) => {
    const { title, children } = props;
    return (
        <>
            <PageHead title={title} />
            <section className="max-w-screen-4xl 3xl:container p-6">
                {children}
            </section>
        </>
    )
}

export default AuthLayout;