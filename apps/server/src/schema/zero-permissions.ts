import {
	ANYONE_CAN_DO_ANYTHING,
	definePermissions,
	type PermissionsConfig,
} from '@rocicorp/zero'
import { type Schema, schema } from './zero-schema.gen'

type AuthData = {
	sub: string
}

// Export schema for zero-cache
export { schema, type Schema }

export const permissions = definePermissions<AuthData, Schema>(schema, () => {
	return {
		tableOne: ANYONE_CAN_DO_ANYTHING,
		tableTwo: ANYONE_CAN_DO_ANYTHING,
		tableThree: ANYONE_CAN_DO_ANYTHING,
		tableFour: ANYONE_CAN_DO_ANYTHING,
	} satisfies PermissionsConfig<AuthData, Schema>
})
