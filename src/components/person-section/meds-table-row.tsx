import { IDataItem } from "@meds-tracker/components/person-section";
import { ReactNode } from "react";

export default function MedsTableRow({ item }: { item: IDataItem }) {
    const PerDayHTML: (count: number, entry: string) => ReactNode = (
        count,
        entry
    ) => {
        return (
            <div className="px-2 py-1 text-xs border-pink-300 border-1 rounded-lg">
                {count}{" "}
                {String(entry).charAt(0).toUpperCase() + String(entry).slice(1)}
            </div>
        );
    };

    const totalPerDay =
        (item.usage.morning ?? 0) +
        (item.usage.lunch ?? 0) +
        (item.usage.evening ?? 0);

    return (
        <tr className="odd:bg-gray-700 even:bg-gray-600 hover:bg-fuchsia-950 text-gray-100 text-md font-medium">
            <td className="px-6 py-4 whitespace-nowrap">
                <div>{item.name}</div>
                <div>
                    <span className="px-2 py-1 text-xs border-pink-300 border-1 rounded-lg">
                        {`Pack of ${item.packSize}`}
                    </span>
                    <span className="ml-4 px-2 py-1 text-xs border-pink-300 border-1 rounded-lg">
                        {item.type}
                    </span>
                </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex flex-row gap-3">
                    <div className="flex flex-col">
                        {item.usage.morning &&
                            PerDayHTML(item.usage.morning, "Morning")}
                        {item.usage.lunch &&
                            PerDayHTML(item.usage.lunch, "Lunch")}
                        {item.usage.evening &&
                            PerDayHTML(item.usage.evening, "Evening")}
                    </div>
                    <div className="flex flex-col justify-center">
                        <div className="px-2 py-1 border-pink-300 border-1 rounded-lg">
                            {`${totalPerDay} Total`}
                        </div>
                    </div>
                </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                {item.lastUpdateState ? (
                    <>
                        <div className="flex flex-row gap-3">
                            <div className="flex flex-row items-baseline">
                                <div className="text-lg font-bold bg-linear-to-b from-fuchsia-700 to-pink-500 bg-clip-text text-transparent">
                                    {item.lastUpdateState.currentPack}
                                </div>
                                <div className="ml-2">{`in current pack`}</div>
                            </div>
                            <div className="flex flex-row items-baseline">
                                <div className="text-lg font-bold bg-linear-to-b from-fuchsia-700 to-pink-500 bg-clip-text text-transparent">
                                    {item.lastUpdateState.packsRemaining}
                                </div>
                                <div className="ml-2">{`packs remaining`}</div>
                            </div>
                        </div>
                        <div className="text-sm opacity-80">
                            {`Updated on ${new Date(
                                item.lastUpdateState.timestamp
                            ).toLocaleDateString("en-GB")}`}
                        </div>
                    </>
                ) : (
                    <></>
                )}
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                {" "}
                <div className="flex flex-row gap-3">
                    <div className="flex flex-row items-baseline">
                        <div className="text-lg font-bold bg-linear-to-b from-fuchsia-700 to-pink-500 bg-clip-text text-transparent">
                            42
                        </div>
                        <div className="ml-2">in current pack</div>
                    </div>
                    <div className="flex flex-row items-baseline">
                        <div className="text-lg font-bold bg-linear-to-b from-fuchsia-700 to-pink-500 bg-clip-text text-transparent">
                            3
                        </div>
                        <div className="ml-2">packs remaining</div>
                    </div>
                </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                Monday 16th June 2025 (in 5 days)
            </td>
        </tr>
    );
}
