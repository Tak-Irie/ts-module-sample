import * as Model from "../model";

export function createUser(props: Model.User): Model.User {
	return {
		name: props.name,
		age: props.age,
		gender: props.gender,
	};
}
