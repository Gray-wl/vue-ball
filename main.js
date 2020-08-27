import { createApp } from "./src/runtime-canvas";
import App from './src/app';
import game from "./src/game";

document.body.append(game.view);
createApp(App).mount(game.stage);