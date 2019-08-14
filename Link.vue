<template>
    <span @mouseover="$emit('mouseover');" @click.prevent="$emit('click', $event)">
        <a :href="traw" :style="{'background-color': rwshana ? '#ccc': '' }" >{{mtn}}</a>
        <slot></slot>
    </span>
</template>
<script>
export default {
    props: ['mtn', 'traw', 'rwshana'],
}
</script>
