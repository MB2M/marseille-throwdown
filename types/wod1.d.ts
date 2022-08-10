type Tournament = {
    name: string;
    id: string;
    rounds: { [k: string]: Round };
};

type Round = {
    name: string;
    finished: boolean;
    directQualifier: number;
    draftQualified: number;
    ranking: {
        start: number;
        end: number;
    };
    heats: { [k: string]: Heat };
};

type Heat = {
    name: string;
    results: { [k: string]: Result };
};

type Result = {
    points?: number;
    participant: string;
    result: string;
    state: "Q" | "D" | "DQ" | "W" | "E" | "R";
};
