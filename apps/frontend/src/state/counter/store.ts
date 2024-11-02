import { Store } from "@tanstack/store";
import {ICounter} from "models";

export const store = new Store<ICounter>({
    counterOne: 0,
    counterTwo: 0,
});

export const URL = "/api/counter"
