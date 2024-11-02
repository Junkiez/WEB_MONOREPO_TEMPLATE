import {ICounter} from "~~/packages/models";

export default eventHandler(async (event) => {
    const body = await readBody(event);
    await useStorage().setItem('api:counter', body || {counterOne: 0, counterTwo: 0})
    return ""
});
