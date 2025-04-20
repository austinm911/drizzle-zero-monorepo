import * as p from 'drizzle-orm/pg-core'
import type { OptionsThree } from './types'

// Define type in line
export const tableSix = p.pgTable('table_six', {
	id: p.varchar('id').primaryKey(),
    options: p.json('options').$type<OptionsThree>(),
})
