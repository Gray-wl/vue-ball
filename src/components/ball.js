import { defineComponent, h, reactive, onMounted, onBeforeUnmount } from '@vue/runtime-core';
import game from '../game';

export default defineComponent({
    setup() {
        const postion = reactive({x: 80, y: 100});
        const changeX = Math.abs(Math.sin(Math.random() * Math.PI * 2 + 4) * (2 + Math.random() * 2)),
            changeY = Math.abs(Math.cos(Math.random() * Math.PI * 2 + 4) * (2 + Math.random() * 2))
        let xType = 'add', yType = 'add';
        const changePosition = () => {
            if(postion.x - changeX <= 50) {
                postion.x += changeX;
                xType = 'add';
            } else if(postion.x + changeX >= game.screen.width - 50) {
                postion.x -= changeX;
                xType = 'less';
            } else {
                if(xType === 'add') {
                    postion.x += changeX;
                } else {
                    postion.x -= changeX;
                }
            }
            if(postion.y - changeY <= 50) {
                postion.y += changeY;
                yType = 'add';
            } else if(postion.y + changeY >= game.screen.height - 50) {
                postion.y -= changeY;
                yType = 'less';
            } else {
                if(yType === 'add') {
                    postion.y += changeY;
                } else {
                    postion.y -= changeY;
                }
            }
        }
        onMounted(() => {
            game.ticker.add(changePosition);
        });
        onBeforeUnmount(() => {
            game.ticker.remove(changePosition);
        });
        return {
            postion
        }
    },
    render(ctx) {
        return h('ball', {...ctx.postion});
    }
});
