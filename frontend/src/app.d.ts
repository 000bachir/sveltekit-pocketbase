// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
import PocketBase from "pocketbase"
import { RecordModel } from "pocketbase"
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			user : RecordModel | null
			session : any
			pocketbase : PocketBase
		}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
