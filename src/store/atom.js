import { atom } from "recoil";

export const sidebarState = atom({
  key: "sidebarState",
  default: true,
});

export const user = atom({
  key: "user",
  default: false,
});
