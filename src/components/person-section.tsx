import { IData } from "@meds-tracker/app/page";
import MedsTable from "@meds-tracker/components/person-section/meds-table";

export default function PersonSection({ data }: { data: IData }) {
    return (
        <>
            <h2 className="mt-5 text-3xl font-bold bg-linear-to-b from-fuchsia-700 to-pink-500 bg-clip-text text-transparent">
                {data.personName} Supplement
            </h2>
            <section>
                <div className="flex flex-col">
                    <div className="m-1.5 overflow-x-auto">
                        <div className="p-1.5 min-w-full inline-block align-middle">
                            <div className="overflow-hidden">
                                <MedsTable data={data} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
