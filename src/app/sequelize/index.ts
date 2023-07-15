import {sql} from 'sqlx-ts'
import {QueryTypes, Sequelize} from 'sequelize'
import { ISomeQueryQuery, ISomeQueryResult } from "./index.queries";


const sequelize = new Sequelize('postgres://127.0.0.1')

async function demo() {
    const someQuery = await sequelize.query<ISomeQueryResult>(sql`
        SELECT * FROM items;
    `!, {
        type: QueryTypes.SELECT,
        replacements: [],
    })

    for (const row of someQuery) {
        const { id, food_type, points } = row
        console.log(id, food_type, points)
    }
    
}

(async () => {
    await demo()
})();
