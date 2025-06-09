import { IPerson } from "@meds-tracker/types/medication";

export const MEDICATION_DATA: IPerson[] = [
    {
        id: "001",
        name: "ihellmasker",
        medications: [
            {
                id: "001",
                name: "Item 1",
                packSize: 60,
                type: "Supplement",
                usage: {
                    morning: 1,
                    evening: 1,
                },
                lastUpdateState: {
                    currentPack: 40,
                    packsRemaining: 3,
                    timestamp: 1747576382124,
                },
            },
            {
                id: "003",
                name: "Item 3",
                packSize: 60,
                type: "Medication",
                usage: {
                    morning: 1,
                },
                lastUpdateState: {
                    currentPack: 28,
                    packsRemaining: 1,
                    timestamp: 1749219777071,
                },
            },
        ],
    },
    {
        id: "002",
        name: "ihellma5k3r",
        medications: [
            {
                id: "002",
                name: "Item 1",
                packSize: 60,
                type: "Supplement",
                usage: {
                    morning: 1,
                    evening: 1,
                },
                lastUpdateState: {
                    currentPack: 40,
                    packsRemaining: 3,
                    timestamp: 1749078505135,
                },
            },
        ],
    },
];
