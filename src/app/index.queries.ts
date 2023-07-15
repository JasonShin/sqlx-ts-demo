

export type ResultParams = [];


export interface IResultResult {
    food_type: string;
	id: number;
	points: number;
	table_id: number;
	time_takes_to_cook: number;
};


export interface IResultQuery {
    params: ResultParams;
    result: IResultResult;
};

