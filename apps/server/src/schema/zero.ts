import type {
	InsertValue,
	UpdateValue,
	UpsertValue,
	Row,
} from '@rocicorp/zero'
import type { schema } from './zero-schema.gen'

export type InsertTableOne = InsertValue<typeof schema.tables.tableOne>
export type UpdateTableOne = UpdateValue<typeof schema.tables.tableOne>
export type UpsertTableOne = UpsertValue<typeof schema.tables.tableOne>
export type RowTableOne = Row<typeof schema.tables.tableOne>



