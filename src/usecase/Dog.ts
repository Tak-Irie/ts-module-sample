import * as Model from "../model";

export function createDog(props: Model.Dog): Model.Dog {
	return {
		name: props.name,
		age: props.age,
		breed: props.breed,
	};
}
