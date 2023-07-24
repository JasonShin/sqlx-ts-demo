import { sql } from 'sqlx-ts'
import * as mysql from 'mysql2/promise'
import { IGetItems2Result, TestInsertParams, TestUpdateParams, TestDeleteParams } from './index.queries'

type Rows<T> = Array<T & mysql.RowDataPacket>

(async () => {

    const connection = await mysql.createConnection({
        host: '127.0.0.1',
        user: 'root',
        port: 33306,
        database: 'sqlx-ts',
    });

    const [rows] = await connection.execute<Rows<IGetItems2Result>>(sql`
    -- @name: getItems2
    SELECT * FROM items
    `)
    
    for (const row of rows) {
        const { id, food_type, points } = row
        console.log(id, food_type, points)
    }

    await connection.execute(sql`
    -- @name: testInsert
    -- @db: db_mysql
    INSERT INTO items (food_type, points, time_takes_to_cook, table_id) VALUES (?, ?, 1, 1);
    `, ['test', 1] as TestInsertParams[0])

    const newFoodType = 'testFood2'

    await connection.query(sql`
        -- @name: testUpdate
        -- @db: db_mysql
        UPDATE items SET food_type = ? WHERE id = 1;
    `, [newFoodType] as TestUpdateParams)

    await connection.query(sql`
        -- @name: testDelete
        -- @db: db_mysql
        DELETE FROM items WHERE food_type = ?;
    `, [newFoodType] as TestDeleteParams)

    connection.destroy()
})()
