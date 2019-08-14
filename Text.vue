<template>
    <span @mouseover="$emit('mouseover');" @click="$emit('click', $event)" :style="{'background-color': rwshana ? '#ccc': '' }"  @mouseleave="$emit('mouseleave');">{{mtn}}<slot></slot></span>
</template>
<script>
export default {
    props: ['mtn', 'rwshana'],
}
</script>