export enum LOCATION {
    EUA = 'EUA',
    BRAZIL = 'BRASIL',
};

export enum NACIONALITY {
    BRAZILIAN = 'BRAZILIAN',
    AMERICAN = 'AMERICAN',
};

export interface User {
    name: string;
    age: number;
    nacionality: NACIONALITY;
}

export interface Casino {
    name: string;
    location: LOCATION;
}
export interface IResultItemDTO {
    allowed: string[];
    unallowed: string[];
}

export interface IResultDTO {
    brazilians: IResultItemDTO;
    americans: IResultItemDTO
}