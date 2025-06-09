import Pill from "@meds-tracker/components/page-layout/pill";
import { IMedication } from "@meds-tracker/types/medication";
import { calculateRemainingMeds } from "@meds-tracker/utils/calculate-remaining-meds";
import { totalMedsPerDay } from "@meds-tracker/utils/total-meds-per-day";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

export default function MedsTableRow({
    medication,
}: {
    medication: IMedication;
}) {
    const calculatedMeds = calculateRemainingMeds(medication);

    return (
        <tr className="odd:bg-gray-700 even:bg-gray-600 hover:bg-fuchsia-950 text-gray-100 text-md font-medium">
            <td className="px-6 py-4 whitespace-nowrap">
                <div>{medication.name}</div>
                <div>
                    <Pill>{`Pack of ${medication.packSize}`}</Pill>
                    <Pill className="ml-4">{medication.type}</Pill>
                </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex flex-row gap-3">
                    <div className="flex flex-col">
                        {medication.usage.morning && (
                            <Pill>{`${medication.usage.morning} Morning`}</Pill>
                        )}
                        {medication.usage.lunch && (
                            <Pill>{`${medication.usage.lunch} Lunch`}</Pill>
                        )}
                        {medication.usage.evening && (
                            <Pill>{`${medication.usage.evening} Morning`}</Pill>
                        )}
                    </div>
                    <div className="flex flex-col justify-center">
                        <Pill>
                            {`${totalMedsPerDay(medication.usage)} Total`}
                        </Pill>
                    </div>
                </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                {medication.lastUpdateState ? (
                    <>
                        <div className="flex flex-row gap-3">
                            <div className="flex flex-row items-baseline">
                                <div className="text-lg font-bold bg-linear-to-b from-fuchsia-700 to-pink-500 bg-clip-text text-transparent">
                                    {medication.lastUpdateState.currentPack}
                                </div>
                                <div className="ml-2">{`in current pack`}</div>
                            </div>
                            <div className="flex flex-row items-baseline">
                                <div className="text-lg font-bold bg-linear-to-b from-fuchsia-700 to-pink-500 bg-clip-text text-transparent">
                                    {medication.lastUpdateState.packsRemaining}
                                </div>
                                <div className="ml-2">{`packs remaining`}</div>
                            </div>
                        </div>
                        <div className="text-sm opacity-80 flex flex-row gap-3">
                            <div className="flex flex-row items-baseline">
                                {calculatedMeds?.totalMedsAtLastUpdate &&
                                    `${calculatedMeds?.totalMedsAtLastUpdate} total`}
                            </div>
                            <div className="flex flex-row items-baseline">
                                {`Updated on ${dayjs(
                                    medication.lastUpdateState.timestamp
                                ).format("DD MMMM YY")}`}
                            </div>
                        </div>
                    </>
                ) : (
                    <></>
                )}
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                {calculatedMeds ? (
                    <>
                        <div className="flex flex-row gap-3">
                            <div className="flex flex-row items-baseline">
                                <div className="text-lg font-bold bg-linear-to-b from-fuchsia-700 to-pink-500 bg-clip-text text-transparent">
                                    {
                                        calculatedMeds.calculatedRemaining
                                            .openPack
                                    }
                                </div>
                                <div className="ml-2">in current pack</div>
                            </div>
                            <div className="flex flex-row items-baseline">
                                <div className="text-lg font-bold bg-linear-to-b from-fuchsia-700 to-pink-500 bg-clip-text text-transparent">
                                    {
                                        calculatedMeds.calculatedRemaining
                                            .remainingPacks
                                    }
                                </div>
                                <div className="ml-2">packs remaining</div>
                            </div>
                        </div>
                    </>
                ) : (
                    <></>
                )}
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                {calculatedMeds && (
                    <div>
                        <div>
                            {dayjs().to(
                                calculatedMeds.calculatedRemaining.runsOut
                            )}
                        </div>
                        <div className="text-sm opacity-80">
                            {dayjs(
                                calculatedMeds.calculatedRemaining.runsOut
                            ).format("DD MMMM YY")}
                        </div>
                    </div>
                )}
            </td>
        </tr>
    );
}
