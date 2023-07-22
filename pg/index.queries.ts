

export type ExampleQueryParams = [];


export interface IExampleQueryResult {
    food_type: string;
	id: number;
	points: number;
	table_id: number;
	time_takes_to_cook: number;
};


export interface IExampleQueryQuery {
    params: ExampleQueryParams;
    result: IExampleQueryResult;
};




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




export type TestInsertParams = [string, number];


export interface ITestInsertResult {
    
};


export interface ITestInsertQuery {
    params: TestInsertParams;
    result: ITestInsertResult;
};




export type TestUpdateParams = [string];


export interface ITestUpdateResult {
    
};


export interface ITestUpdateQuery {
    params: TestUpdateParams;
    result: ITestUpdateResult;
};




export type TestDeleteParams = [string];


export interface ITestDeleteResult {
    
};


export interface ITestDeleteQuery {
    params: TestDeleteParams;
    result: ITestDeleteResult;
};




export type GetItemsParams = [];


export interface IGetItemsResult {
    tableId: number;
};


export interface IGetItemsQuery {
    params: GetItemsParams;
    result: IGetItemsResult;
};

