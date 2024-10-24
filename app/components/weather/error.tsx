"use client";

export default function WeatherError(props: ErrorProps): JSX.Element {
    return (
        <section className="content error">
            <span className="flag">app/components/weather/error(.tsx)</span>
            <h2>Something went wrong!</h2>
            <blockquote>{props.error?.toString()}</blockquote>
            <button onClick={() => props.reset()}>Try again (re-render)</button>
        </section>
    );
}

interface ErrorProps {
    error: Error;
    reset: () => void;
}

