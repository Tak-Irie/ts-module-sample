import * as Usecase from "./usecase";

const user = Usecase.User.createUser({
	name: "alice",
	age: 20,
	gender: "Woman",
});

console.log(user);
