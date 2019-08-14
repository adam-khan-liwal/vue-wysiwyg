<template>
    <div v-bind:style="style" @mouseover=" $emit('mouseover');"  @mouseleave="$emit('mouseleave');" @click="$emit('click', $event)">
        <img :src="pta"  v-bind:style="{width: '100%'}"/>
        <div>{{mtn}}</div>
        <slot></slot>
    </div>
</template>
<script>
export default {
    props: ['kchh', 'pta', 'arkh', 'mtn', 'rwshana'],
    template: `
    <div v-bind:style="style" @mouseover=" $emit('mouseover');"  @mouseleave="$emit('mouseleave');" @click="$emit('click', $event)">
            <img :src="pta"  v-bind:style="{width: '100%'}"/>
            <div>{{mtn}}</div>
            <slot></slot>
    </div>
    `,
    computed: {
        style: function () {
            var style = {};
            style.display = 'block';
            if(this.arkh == 'gs') {
                style.display = 'inline-block';
                style.float = 'left'
            }
            if(this.arkh == 'shy') {
                style.display = 'inline-block';
                style.float = 'right'
            }

            style.width = this.kchh +'px';
            style.max_width = '100%';
            style['background-color'] = this.rwshana ? '#ccc' : '';
            return style;
        }
    }
}
</script>
