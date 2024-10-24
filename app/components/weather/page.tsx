import WeatherComponent from "./component";

export const metadata = {
    title: "Appendix C - The Weather Component (Weather & Count)",
    description: "The Example Code For The Weather Component (Weather & Count)",
};

export default async function WeatherPage() {
    return (
        <section className="content">
            <span className="flag">app/components/weather/page(.tsx)</span>
            <WeatherComponent weather="sunny" />
        </section>
    );
}