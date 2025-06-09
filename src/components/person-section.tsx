import MedsTable from "@meds-tracker/components/person-section/meds-table";
import { IPerson } from "@meds-tracker/types/medication";

export default function PersonSection({ person }: { person: IPerson }) {
    return (
        <>
            <h2 className="mt-5 text-3xl font-bold bg-linear-to-b from-fuchsia-700 to-pink-500 bg-clip-text text-transparent">
                {person.name} Supplement
            </h2>
            <section>
                <div className="flex flex-col">
                    <div className="m-1.5 overflow-x-auto">
                        <div className="p-1.5 min-w-full inline-block align-middle">
                            <div className="overflow-hidden">
                                <MedsTable person={person} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
