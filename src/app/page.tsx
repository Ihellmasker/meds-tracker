import PersonSection from "@meds-tracker/components/person-section";
import { MEDICATION_DATA } from "@meds-tracker/data/medication-data";

export default function Home() {
    return (
        <div className="">
            <main className="mt-6 mx-4">
                <h1 className="text-5xl font-extrabold bg-linear-to-b from-fuchsia-700 to-pink-500 bg-clip-text text-transparent">
                    Meds & Supplements Tracker
                </h1>
                {MEDICATION_DATA.map((personData, i) => (
                    <PersonSection key={i} data={personData} />
                ))}
            </main>
        </div>
    );
}
