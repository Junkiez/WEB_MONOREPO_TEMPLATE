import {ICounter} from "~~/packages/models";

export default eventHandler(async (event) => {
    return (await useStorage().getItem<ICounter>('api:counter') || {
        counterOne: 0,
        counterTwo: 0,
    });
});
