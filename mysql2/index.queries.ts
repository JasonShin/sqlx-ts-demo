

export type GetItems2Params = [];


export interface IGetItems2Result {
    food_type: string;
	id: number;
	points: number;
	table_id: number;
	time_takes_to_cook: number;
};


export interface IGetItems2Query {
    params: GetItems2Params;
    result: IGetItems2Result;
};




export type TestInsertParams = [[string, number]];


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

