import {sql} from 'sqlx-ts'
import {QueryTypes, Sequelize} from 'sequelize'
import {
    ISomeQueryResult,
    TestInsertParams,
    TestUpdateParams,
 } from "./index.queries";


const sequelize = new Sequelize('postgres://postgres:postgres@127.0.0.1:54321', {
    dialect: 'postgres'
})

async function demo() {
    const someQuery = await sequelize.query<ISomeQueryResult>(sql`
        SELECT * FROM items;
    `, {
        type: QueryTypes.SELECT,
        replacements: [],
    })

    for (const row of someQuery) {
        const { id, food_type, points } = row
        console.log(id, food_type, points)
    }

    await sequelize.query(sql`
        -- @name: testInsert
        INSERT INTO items (food_type, points, time_takes_to_cook, table_id) VALUES ($1, $2, 1, 1);
    `, {
        type: QueryTypes.INSERT,
        // Unfortunately sequelize query does not allow you to type binding params for INSERT
        bind: ['testFood', 1] as TestInsertParams,
    })

    await sequelize.query(sql`
        -- @name: testUpdate
        UPDATE items SET food_type = $1 WHERE id = (SELECT id FROM items WHERE food_type = 'testFood' LIMIT 1);
    `, {
        type: QueryTypes.UPDATE,
        // Unfortunately sequelize query does not allow you to type binding params for UPDATE
        bind: ['testFood2'] as TestUpdateParams,
    })
    
}

(async () => {
    await demo()
    await sequelize.close()
})();
