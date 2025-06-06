import { IPerson } from "@meds-tracker/types/medication";

export const MEDICATION_DATA: IPerson[] = [
    {
        id: "001",
        personName: "ihellmasker",
        items: [
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
                    timestamp: 1749078505135,
                },
            },
        ],
    },
    {
        id: "002",
        personName: "ihellma5k3r",
        items: [
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
