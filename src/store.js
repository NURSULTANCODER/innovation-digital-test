import { writable } from "svelte/store";

export const globalMessage = writable("Привет, мир!");

export const showAlert = writable(true);

export const alertType = writable('info')
