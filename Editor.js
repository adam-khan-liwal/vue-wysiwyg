
import TextItem from './TextItem.js'
import LinkItem from './LinkItem.js'
import ImageItem from './ImageItem.js'

export default {
    props: ['json'],
        methods: {
            nwy: function (i, type) {
                var nwy;

                if(type == 'LinkItem')
                nwy = {type: 'LinkItem', malwmat: {text: 'insert LinkItem', LinkItem: ''},nwy_achwl_wshyh: false, rwshana: false}
                
                if(type == 'TextItem')
                nwy = {type: 'TextItem', malwmat: {text: 'insert TextItem'}, nwy_achwl_wshyh: false, rwshana: false}
                
                if(type == 'ImageItem')
                nwy = {type: 'ImageItem', malwmat: {text: 'insert ImageItem', LinkItem: '', arkh: '', pta: '', kchh: 200},nwy_achwl_wshyh: false, rwshana: false}
                
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
            TextItem,
            LinkItem,
            ImageItem
        },
        template: `
            <div>
    <button @click="getHtml()">get html</button>
    <div class="editor">
        <div class="rendered" ref="html_content">
            <component :is="twky.type" :rwshana="twky.nwy_achwl_wshyh" @click="smwn_twky = twky; smwn_index = i" v-for="(twky, i) in twki"  @mouseover="smbal_nwy_achwl_twky(twky)" v-bind="twky.malwmat" @nwy_TextItem="nwy_TextItem(i, $event)">
            </component>
        </div>
        <div class="settings">
            <!-- <div v-for="(twky, i) in twki" @mouseover="twky.nwy_achwl_wshyh = true" @mouseleave="twky.nwy_achwl_wshyh = false"> -->
            <div v-if="smwn_twky">
                <button @click="rng(smwn_twky)">x</button>
                <div v-if="smwn_twky.type == 'TextItem'">
                    <textarea dir="auto" v-model="smwn_twky.malwmat.text"></textarea>
                </div>
                <div v-if="smwn_twky.type == 'LinkItem'">
                    <textarea dir="auto" v-model="smwn_twky.malwmat.text" placeholder="Text"></textarea>
                    <textarea dir="ltr" v-model="smwn_twky.malwmat.link" placeholder="Link"></textarea>
                </div>
                <div v-if="smwn_twky.type == 'ImageItem'">
                    <textarea v-model="smwn_twky.malwmat.text"></textarea>
                    <br>
                    gs<input type="radio" v-model="smwn_twky.malwmat.arkh" value="gs"> 
                    pwrh<input type="radio" v-model="smwn_twky.malwmat.arkh" value="pwrh"> 
                    shy<input type="radio" v-model="smwn_twky.malwmat.arkh" value="shy"> 
                    <br>
                    <textarea v-model="smwn_twky.malwmat.pta"></textarea>
                    <br>
                    <input type="TextItem" v-model="smwn_twky.malwmat.kchh">
                </div>
                
                <!-- <div v-if="twky.nwy_achwl_wshyh || i == 0">
                    <button @click="twki.splice(i+1, 0,{type: 'LinkItem', malwmat: {TextItem: '', LinkItem: ''},nwy_achwl_wshyh: false, rwshana: false})">Insert LinkItem</button>
                    <button @click="twki.splice(i+1, 0,{type: 'TextItem', malwmat: {TextItem: ''},nwy_achwl_wshyh: false, rwshana: false})">Insert TextItem</button>
                    <button @click="twki.splice(i+1, 0,{type: 'ImageItem', malwmat: {TextItem: '', LinkItem: '', arkh: '', pta: '', kchh: 200},nwy_achwl_wshyh: false, rwshana: false})">Insert ImageItem</button>
                </div> -->
                <hr>

            </div>
            <span>
                <button @click="nwy(smwn_index, 'LinkItem')">Insert LinkItem</button>
                <button @click="nwy(smwn_index, 'TextItem')">Insert TextItem</button>
                <button @click="nwy(smwn_index, 'ImageItem')">Insert ImageItem</button>
            </span>
            
        </div>
    </div>
</div>
        `
}