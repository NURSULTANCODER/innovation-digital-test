import { writable } from "svelte/store";

export const globalMessage = writable("");

export const showAlert = writable(false);

export const alertType = writable('info')
