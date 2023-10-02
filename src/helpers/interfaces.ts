/**
 * Setup interfaces
 */

export interface IChannel {
	id?: string;
	type: string;
	name?: string;
	owner?: string;
	members?: string[];
	email?: string;
}
