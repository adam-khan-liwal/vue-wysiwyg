export default {
    props: ['text', 'rwshana'],
    template: `
    <span @mouseover="$emit('mouseover');" @click="$emit('click', $event)" :style="{'background-color': rwshana ? '#ccc': '' }"  @mouseleave="$emit('mouseleave');">{{text}}<slot></slot></span>
    `
}
