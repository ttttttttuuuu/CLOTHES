import { proxy } from "valtio";

const state = proxy({
  intro: true,
  color: "#1c1c1c",
  isLogoTextured: true,
  isFullTexture: false,
  logoDecal: "./logo.png",
  fullDecal: "./logo.png",
});

export default state;
