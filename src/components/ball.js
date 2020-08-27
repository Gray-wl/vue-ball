import { defineComponent, h, ref, onMounted } from '@vue/runtime-core';
import game from '../game';

export default defineComponent({
    setup() {
        const x = ref(80), y = ref(100);
        onMounted(() => {
            const changeX = Math.abs(Math.sin(Math.random() * Math.PI * 2 + 4) * (2 + Math.random() * 2)),
                changeY = Math.abs(Math.cos(Math.random() * Math.PI * 2 + 4) * (2 + Math.random() * 2))
            let xType = 'add', yType = 'add';
            game.ticker.add(() => {
                if(x.value - changeX <= 50) {
                    x.value += changeX;
                    xType = 'add';
                } else if(x.value + changeX >= game.screen.width - 50) {
                    x.value -= changeX;
                    xType = 'less';
                } else {
                    if(xType === 'add') {
                        x.value += changeX;
                    } else {
                        x.value -= changeX;
                    }
                }
                if(y.value - changeY <= 50) {
                    y.value += changeY;
                    yType = 'add';
                } else if(y.value + changeY >= game.screen.height - 50) {
                    y.value -= changeY;
                    yType = 'less';
                } else {
                    if(yType === 'add') {
                        y.value += changeX;
                    } else {
                        y.value -= changeX;
                    }
                }
            });
        });
        return {
            x,
            y
        }
    },
    render(ctx) {
        return h('ball', {x: ctx.x, y: ctx.y});
    }
});