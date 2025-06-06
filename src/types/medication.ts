export interface IMedication {
    id: string;
    name: string;
    packSize: number;
    type: "Medication" | "Supplement";
    usage: {
        morning?: number;
        lunch?: number;
        evening?: number;
    };
    lastUpdateState?: {
        currentPack: number;
        packsRemaining: number;
        timestamp: number;
    };
}

export interface IPerson {
    id: string;
    personName: string;
    items: IMedication[];
}
