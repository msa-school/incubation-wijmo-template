<template>
    <div></div>
</template>

<script>
    const axios = require('axios').default;

    const BaseRepository = require('../domain/BaseRepository')

    export default{
        name: 'base-entity-ui',
        props: {
            offline: Boolean
        },
        computed: {},
        data: () => ({
            values: [],
            newValue: {},
            isUpdating: false,
            path: '/path',
            repository: null
        }),
        created(){

            this.repository = new BaseRepository(axios, this.path)
        },
        methods:{
            closeDialog(){
                this.openDialog = false
                location.reload()
            },
            append(value){
                this.tick = false
                this.newValue = {}
                this.values.push(value)
                this.$emit('input', this.values);
                this.$nextTick(function(){
                    this.tick=true
                })
            },
            remove(value){
                var where = -1;
                for(var i=0; i<this.values.length; i++){
                    if(this.values[i]._links.self.href == value._links.self.href){
                        where = i;
                        break;
                    }
                }
                if(where > -1){
                    this.values.splice(i, 1);
                    this.$emit('input', this.values);
                }
            },
            async getRealEntity(id){
               try{
                    let result = await this.repository.findById(id)
                    result.data.id = id;
                    return result.data;
                }catch(e){
                    return null;
                }
            },

            async search(query) {
                var me = this;
                if(me.offline){
                    if(!me.values) me.values = [];
                    return;
                } 

                temp = await this.repository.find(query)
                me.values = temp.data;
            },

            
        },

    }

</script>
