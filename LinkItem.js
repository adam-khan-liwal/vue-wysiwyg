
export default {
    props: ['text', 'link', 'rwshana'],
    template: `
    <span @mouseover="$emit('mouseover');" @click.prevent="$emit('click', $event)">
        <a :href="link" :style="{'background-color': rwshana ? '#ccc': '' }" >{{text}}</a>
        <slot></slot>
    </span>
    `
}
