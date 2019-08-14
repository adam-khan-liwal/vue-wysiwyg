export default {
    props: ['text', 'highlighted'],
    template: `
    <span @mouseover="$emit('mouseover');" @click="$emit('click', $event)" :style="{'background-color': highlighted ? '#ccc': '' }"  @mouseleave="$emit('mouseleave');">{{text}}<slot></slot></span>
    `
}
