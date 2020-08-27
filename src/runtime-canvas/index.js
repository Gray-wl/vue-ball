import { createRenderer } from '@vue/runtime-core';
import { Graphics } from 'pixi.js';
import game from "../game";

const renderer = createRenderer({
    createElement(type) {
        let element;
        switch (type) {
            case 'ballBox':
                element = new Graphics();
                element.beginFill(0xff0000);
                element.drawRect(0, 0, game.screen.width, game.screen.height);
                element.endFill();
                break;
            case 'ball':
                element = new Graphics();
                element.beginFill(0xffff00);
                element.drawCircle(0, 0, 50);
                element.endFill();
        }
        return element;
    },
    patchProp(el, key, preValue, nextValue) {
        if(key === 'x') {
            el.x = nextValue;
        } else if(key === 'y') {
            el.y = nextValue;
        }
    },
    parentNode() {

    },
    nextSibling() {

    },
    insert(el, parent) {
        parent.addChild(el);
    }
});

export function createApp(rootComponent) {
    return renderer.createApp(rootComponent);
}