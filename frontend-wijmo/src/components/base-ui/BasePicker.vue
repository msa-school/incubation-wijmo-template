<template>
    <div>
        <v-select
            :items="list"
            :item-text="nameField"
            :item-value="idField"
            :label="label"
            return-object
            v-model="selected"
            @change="select"
            solo
        ></v-select>
    </div>
</template>

<script>
import BaseRepository from '../../repository/BaseRepository';
    const axios = require('axios').default;

    export default {
        name: 'BasePicker',
        props: {
            value: [String, Object, Array, Number, Boolean],
            editMode: Boolean,
            label: String,
            path: String,
            nameField: String,
            idField: String
        },
        data: () => ({
            list: [],
            selected: null,
            referenceValue: null,
            repository: null
        }),
        async created() {
            var me = this;
            this.repository = new BaseRepository(axios, this.path)

            var temp = await this.repository.find()
            me.list = temp

            if(me.value && typeof me.value == "object" && Object.values(me.value)[0]) {
                
                var id = me.value[me.idField];
                var tmpValue = await this.repository.findById(id)
                if(tmpValue.data) {
                    var val = tmpValue.data
                    
                    me.referenceValue = val
                }
            }
        },
        methods: {
            select(val) {
                this.referenceValue = val;
                if (val) {
                    var uriParts = val._links.self.href.split('/');
                    var obj = uriParts.pop();
                    
                    
                    this.$emit('input', obj);
                } else {
                    this.$emit('input', null);
                }
            },
        },
    };
</script>
