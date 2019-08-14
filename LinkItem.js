
export default {
    props: ['text', 'link', 'highlighted'],
    template: `
    <span @mouseover="$emit('mouseover');" @click.prevent="$emit('click', $event)">
        <a :href="link" :style="{'background-color': highlighted ? '#ccc': '' }" >{{text}}</a>
        <slot></slot>
    </span>
    `
}
