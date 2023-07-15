import {sql} from 'sqlx-ts'
import {QueryTypes, Sequelize} from 'sequelize'
import {  } from "./index.queries";


const sequelize = new Sequelize('postgres://127.0.0.1')

async function x () {
    // const vv = sql``
    const result = await sequelize.query(sql`
        SELECT * FROM items;
    `!, {
        type: QueryTypes.SELECT,
        replacements: [],
    })

}
