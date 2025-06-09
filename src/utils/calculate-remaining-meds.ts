import { IMedication } from "@meds-tracker/types/medication";
import { totalMedsPerDay } from "@meds-tracker/utils/total-meds-per-day";

interface ICalulcatedMeds {
    totalMedsAtLastUpdate: number;
    calculatedRemaining: {
        openPack: number;
        remainingPacks: number;
        runsOut: number;
    };
}

export function calculateRemainingMeds(
    medication: IMedication
): ICalulcatedMeds | undefined {
    if (!medication.lastUpdateState) return;

    const weeksPassed = Math.floor(
        (Date.now() - medication.lastUpdateState.timestamp) / 604800000
    );
    const usePerDay = totalMedsPerDay(medication.usage);
    const usePerWeek = 7 * usePerDay;

    const totalMedsAtLastUpdate =
        (medication.lastUpdateState.packsRemaining - 1) * medication.packSize +
        medication.lastUpdateState.currentPack;
    const calculatedRemainingTotalMeds =
        totalMedsAtLastUpdate - weeksPassed * usePerWeek;

    return {
        totalMedsAtLastUpdate,
        calculatedRemaining: {
            openPack: calculatedRemainingTotalMeds % medication.packSize,
            remainingPacks: Math.ceil(
                calculatedRemainingTotalMeds / medication.packSize
            ),
            runsOut:
                medication.lastUpdateState.timestamp +
                calculatedRemainingTotalMeds * usePerDay * 24 * 60 * 60 * 1000,
        },
    };
}
