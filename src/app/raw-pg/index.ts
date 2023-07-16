import { sql } from 'sqlx-ts'
import { Client } from 'pg'
import {
    ISomeQueryResult,
    TestInsertParams, ITestInsertResult,
    TestUpdateParams, ITestUpdateResult, 
    TestDeleteParams, ITestDeleteResult,
 } from './index.queries'


const client = new Client({
    host: 'localhost',
    port: 54321,
    database: 'postgres',
    user: 'postgres',
    password: 'postgres',
});

(async () => {
    await sql`
        -- @name: testAwaitQuery
        SELECT * FROM items
    `
    const someQuery = await client.query<ISomeQueryResult>(sql`
        SELECT * FROM items;
    `)

    for (const row of someQuery.rows) {
        const { id, food_type, points } = row
        console.log(id, food_type, points)
    }

    await client.query<ITestInsertResult, TestInsertParams>(sql`
        -- @name: testInsert
        INSERT INTO items (food_type, points, time_takes_to_cook, table_id) VALUES ($1, $2, 1, 1);
    `, ['test', 1])

    const newFoodType = 'testFood2'

    await client.query<ITestUpdateResult, TestUpdateParams>(sql`
        -- @name: testUpdate
        UPDATE items SET food_type = $1 WHERE id = (SELECT id FROM items WHERE food_type = 'testFood' LIMIT 1);
    `, [newFoodType])

    await client.query<ITestDeleteResult, TestDeleteParams>(sql`
        -- @name: testDelete
        DELETE FROM items WHERE food_type = $1;
    `, [newFoodType])

    await client.end()
})();
