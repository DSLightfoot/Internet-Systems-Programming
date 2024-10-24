import Link from "next/link";

export default function ComponentsLayout(props: LayoutProps): JSX.Element {
    return (
        <section>
            <span className="flag">app/components/layout(.tsx)</span>
            <nav>
                <Link href="/components/server-component">
                    User API <br />
                    (Server Component)
                </Link>{" "}
                |
                <Link href="/components/weather">
                    Weather Component <br />
                    (Client Component)
                </Link>
            </nav>
            <main>{props.children}</main>
        </section>
    );
}