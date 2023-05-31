export type InitialState = {
	token: string;
	user: User;
	loading: boolean;
	error: string | undefined;
};

export type User = {
	name?: string;
	created_at?: string;
	email?: string;
	email_verified_at?: boolean | null;
	id?: number;
	updated_at?: string;
};

export type AuthThunkReturn = {
	token: string;
	name: string;
};
