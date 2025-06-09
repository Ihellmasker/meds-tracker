export interface IUsage {
    morning?: number;
    lunch?: number;
    evening?: number;
}

export interface IMedication {
    id: string;
    name: string;
    packSize: number;
    type: "Medication" | "Supplement";
    usage: IUsage;
    lastUpdateState?: {
        currentPack: number;
        packsRemaining: number;
        timestamp: number;
    };
}

export interface IPerson {
    id: string;
    name: string;
    medications: IMedication[];
}
