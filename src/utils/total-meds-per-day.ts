import { IUsage } from "@meds-tracker/types/medication";

export function totalMedsPerDay(usage: IUsage) {
    return (usage.morning ?? 0) + (usage.lunch ?? 0) + (usage.evening ?? 0);
}
