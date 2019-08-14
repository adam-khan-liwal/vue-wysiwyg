<template>
<div>
    <button @click="getHtml()">get html</button>
    <div class="editor">
        <div class="rendered" ref="html_content">
            <component :is="twky.type" :rwshana="twky.nwy_achwl_wshyh" @click="smwn_twky = twky; smwn_index = i" @twry_lekl="twry_lekl" v-for="(twky, i) in twki"  @mouseover="smbal_nwy_achwl_twky(twky)" v-bind="twky.malwmat" @nwy_text="nwy_text(i, $event)">
            </component>
        </div>
        <div class="settings">
            <!-- <div v-for="(twky, i) in twki" @mouseover="twky.nwy_achwl_wshyh = true" @mouseleave="twky.nwy_achwl_wshyh = false"> -->
            <div v-if="smwn_twky">
                <button @click="rng(smwn_twky)">x</button>
                <div v-if="smwn_twky.type == 'text'">
                    <textarea dir="auto" v-model="smwn_twky.malwmat.text"></textarea>
                </div>
                <div v-if="smwn_twky.type == 'link'">
                    <textarea dir="auto" v-model="smwn_twky.malwmat.text" placeholder="<?= LBL_text ?>"></textarea>
                    <textarea dir="ltr" v-model="smwn_twky.malwmat.link" placeholder="<?= LBL_link ?>"></textarea>
                </div>
                <div v-if="smwn_twky.type == 'image'">
                    <textarea v-model="smwn_twky.malwmat.text"></textarea>
                    <br>
                    gs<input type="radio" v-model="smwn_twky.malwmat.arkh" value="gs"> 
                    pwrh<input type="radio" v-model="smwn_twky.malwmat.arkh" value="pwrh"> 
                    shy<input type="radio" v-model="smwn_twky.malwmat.arkh" value="shy"> 
                    <br>
                    <textarea v-model="smwn_twky.malwmat.pta"></textarea>
                    <br>
                    <input type="text" v-model="smwn_twky.malwmat.kchh">
                </div>
                
                <!-- <div v-if="twky.nwy_achwl_wshyh || i == 0">
                    <button @click="twki.splice(i+1, 0,{type: 'link', malwmat: {text: '', link: ''},nwy_achwl_wshyh: false, rwshana: false})">Insert Link</button>
                    <button @click="twki.splice(i+1, 0,{type: 'text', malwmat: {text: ''},nwy_achwl_wshyh: false, rwshana: false})">Insert Text</button>
                    <button @click="twki.splice(i+1, 0,{type: 'image', malwmat: {text: '', link: '', arkh: '', pta: '', kchh: 200},nwy_achwl_wshyh: false, rwshana: false})">Insert Image</button>
                </div> -->
                <hr>

            </div>
            <span>
                <button @click="nwy(smwn_index, 'link')">Insert Link</button>
                <button @click="nwy(smwn_index, 'text')">Insert Text</button>
                <button @click="nwy(smwn_index, 'image')">Insert Image</button>
            </span>
            
        </div>
    </div>
</div>
</template>
<script>

import Text from 'Text.vue'
import Link from 'Image.vue'
import Image from 'Image.vue'

export default {
    props: ['json'],
        methods: {
            nwy: function (i, type) {
                var nwy;

                if(type == 'link')
                nwy = {type: 'Link', malwmat: {text: 'insert link', link: ''},nwy_achwl_wshyh: false, rwshana: false}
                
                if(type == 'text')
                nwy = {type: 'Text', malwmat: {text: 'insert text'},nwy_achwl_wshyh: false, rwshana: false}
                
                if(type == 'image')
                nwy = {type: 'Image', malwmat: {text: 'insert image', link: '', arkh: '', pta: '', kchh: 200},nwy_achwl_wshyh: false, rwshana: false}
                
                this.twki.splice(i+1, 0,nwy)
                this.smwn_twky = nwy
                this.smwn_index = i
            
            },

            getHtml: function() {
                console.log(this)
                console.log(this.$refs.html_content.innerHTML)
            },
            rng: function (twky) {
                this.twki.splice(this.twki.indexOf(twky), 1)
            },
            smbal_nwy_achwl_twky: function (twky) {
                if(this.rwshana_twky) {
                    this.rwshana_twky.nwy_achwl_wshyh = false
                }
                twky.nwy_achwl_wshyh = true
                this.rwshana_twky = twky
            },
        },
        data: function() {
            return {
                smwn_index: 0,
                smwn_twky: null,
                rwshana_twky: null,
                twki:  this.json
            }
        },
        components: {
            Text,
            Link,
            Image
        }
}
</script>
<style>
.editor {
    display: grid;
    grid-template-columns: 2fr 1fr;
}

.editor .rendered {
    white-space: pre-wrap;
}
</style>