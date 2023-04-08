import { atom } from "recoil";

export const slideContent = atom({
  key: "slideContent",
  default: ["A", "B", "C"],
});
