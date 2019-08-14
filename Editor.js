
import TextItem from './TextItem.js'
import LinkItem from './LinkItem.js'
import ImageItem from './ImageItem.js'

export default {
    props: ['json'],
        methods: {
            nwy: function (i, type) {
                var nwy;

                if(type == 'LinkItem')
                nwy = {type: 'LinkItem', settings: {text: 'insert LinkItem', link: ''}, highlighted: false}
                
                if(type == 'TextItem')
                nwy = {type: 'TextItem', settings: {text: 'insert TextItem'}, highlighted: false}
                
                if(type == 'ImageItem')
                nwy = {type: 'ImageItem', settings: {text: 'insert ImageItem', link: '', arkh: '', pta: '', kchh: 200}, highlighted: false}
                
                this.twki.splice(i+1, 0,nwy)
                this.smwn_twky = nwy
                this.smwn_index = i + 1
            
            },

            getHtml: function() {
                console.log(this)
                console.log(this.$refs.html_content.innerHTML)
            },
            getJSON: function () {
                
                for(var a in this.twki) {
                    delete this.twki[a].highlighted
                }
                console.log(JSON.stringify(this.twki))
            },
            rng: function (twky) {
                this.twki.splice(this.twki.indexOf(twky), 1)
            },
        },
        data: function() {
            return {
                smwn_index: 0,
                smwn_twky: null,
                highlighted_twky: null,
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
    
    <div class="editor">
        <div class="rendered" ref="html_content">
            <component  v-for="(twky, i) in twki" :is="twky.type" :highlighted="smwn_twky == twky || highlighted_twky == twky" @click="smwn_twky = twky; smwn_index = i" @mouseleave="highlighted_twky = null"  @mouseover="highlighted_twky = twky" v-bind="twky.settings">
            </component>
        </div>
        <div class="settings">
        <button @click="getJSON()">get json</button>
        <button @click="getHtml()">get html</button>
        <hr>
            <div v-if="smwn_twky">
                <button @click="rng(smwn_twky)">x</button>
                <div v-if="smwn_twky.type == 'TextItem'">
                    <textarea dir="auto" v-model="smwn_twky.settings.text"></textarea>
                </div>
                <div v-if="smwn_twky.type == 'LinkItem'">
                    <textarea dir="auto" v-model="smwn_twky.settings.text" placeholder="Text"></textarea>
                    <textarea dir="ltr" v-model="smwn_twky.settings.link" placeholder="Link"></textarea>
                </div>
                <div v-if="smwn_twky.type == 'ImageItem'">
                    <textarea v-model="smwn_twky.settings.text"></textarea>
                    <br>
                    Left<input type="radio" v-model="smwn_twky.settings.arkh" value="gs"> 
                    Full<input type="radio" v-model="smwn_twky.settings.arkh" value="pwrh"> 
                    Right<input type="radio" v-model="smwn_twky.settings.arkh" value="shy"> 
                    <br>
                    <textarea v-model="smwn_twky.settings.pta"></textarea>
                    <br>
                    <input type="TextItem" v-model="smwn_twky.settings.kchh">
                </div>
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