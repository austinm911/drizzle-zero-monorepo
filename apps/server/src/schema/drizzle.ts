import * as p from 'drizzle-orm/pg-core'
import type { OptionsFive } from 'shared'
import type { OptionsThree } from './types'
import type { OptionsFour } from '../../../../types'

export * from './other-schema'

// Define type in line
export const tableOne = p.pgTable('table_one', {
	id: p.varchar('id').primaryKey(),
    options: p.json('options').$type<{
        name: string
    }>(),
})

// Define interface, pass to options
// Generation breaks with interface but not type
interface OptionsTwo {
    name: string
}

// Define type in line
export const tableTwo = p.pgTable('table_two', {
    id: p.varchar('id').primaryKey(),
    // This breaks the schema generation
    options: p.json('options').$type<OptionsTwo>(),
})

// Pass in types from same workspace 
export const tableThree = p.pgTable('table_three', {
    id: p.varchar('id').primaryKey(),
    options: p.json('options').$type<OptionsThree>(),
})

// Pass in types from different workspace in monorepo
export const tableFour = p.pgTable('table_four', {
    id: p.varchar('id').primaryKey(),
    options: p.json('options').$type<OptionsFour>(),
})
// Pass in types from root monorepo
export const tableFive = p.pgTable('table_five', {
    id: p.varchar('id').primaryKey(),
    options: p.json('options').$type<OptionsFive>(),
})