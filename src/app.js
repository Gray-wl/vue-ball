import { defineComponent, h } from '@vue/runtime-core';
import Ball from './components/ball';

export default defineComponent({
    render() {
        return h('ballBox', [h(Ball)]);
    }
});