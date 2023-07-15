

export type SomeQueryParams = [];


export interface ISomeQueryResult {
    food_type: string;
	id: number;
	points: number;
	table_id: number;
	time_takes_to_cook: number;
};


export interface ISomeQueryQuery {
    params: SomeQueryParams;
    result: ISomeQueryResult;
};

