import MedsTableHead from "@meds-tracker/components/person-section/meds-table-head";
import MedsTableRow from "@meds-tracker/components/person-section/meds-table-row";
import { IPerson } from "@meds-tracker/types/medication";

export default function MedsTable({ person }: { person: IPerson }) {
    return (
        <table className="min-w-full divide-y divide-fuchsia-400">
            <MedsTableHead />
            <tbody>
                {person.medications.map((item, i) => (
                    <MedsTableRow key={i} medication={item} />
                ))}
            </tbody>
        </table>
    );
}
