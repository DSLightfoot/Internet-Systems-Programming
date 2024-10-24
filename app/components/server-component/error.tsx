"use client"; // Error components must be Client components

export default function ServerComponentError(props: ErrorProps): JSX.Element {
    return (
        <section className="content">
            <span className="flag">app/components/server-component/error(.tsx)</span>
            <h2>Something went wrong!</h2>
            <code>{props.error?.toString()}</code>
            <button onClick={() => props.reset()}>Try again (re-render)</button>
        </section>
    );
}