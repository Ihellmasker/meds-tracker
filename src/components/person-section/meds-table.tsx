import { IData } from "@meds-tracker/app/page";
import MedsTableHead from "@meds-tracker/components/person-section/meds-table-head";
import MedsTableRow from "@meds-tracker/components/person-section/meds-table-row";

export default function MedsTable({ data }: { data: IData }) {
    return (
        <table className="min-w-full divide-y divide-fuchsia-400">
            <MedsTableHead />
            <tbody>
                {data.items.map((item, i) => (
                    <MedsTableRow key={i} item={item} />
                ))}
            </tbody>
        </table>
    );
}
