<template>

    <div>
        <div class="detail-title">
        SalesItem
        </div>

        <v-row style="padding-right:15px;">
            <v-col cols="6">
                <div style="display:flex;">
                    <div class="label-title">ProductId</div>
                    <String label="입력하세요." v-model="value.productId" :editMode="editMode"/>
                </div>
            </v-col>
            <v-col class="detail-picker" cols="6">
                <int offline label="Quantity" v-model="value.quantity" :editMode="editMode" @change="change"/>
            </v-col>
            <v-col class="detail-picker" cols="6">
                <double offline label="Price" v-model="value.price" :editMode="editMode" @change="change"/>
            </v-col>
        </v-row>

        <v-card-actions v-if="inList">
            <slot name="actions"></slot>
        </v-card-actions>
    </div>
</template>

<script>
    export default {
        name: 'SalesItem',
        components:{},
        props: {
            value: [Object, String, Number, Boolean, Array],
            editMode: Boolean,
            isNew: Boolean,
            offline: Boolean,
            inList: Boolean,
            label: String,
        },
        data: () => ({
        }),
        async created() {
            if(!Object.values(this.value)[0]) {
                this.$emit('input', {});
                this.newValue = {
                    'productId': '',
                    'quantity': '',
                    'price': '',
                }
            }
            if(typeof this.value === 'object') {
                if(!('productId' in this.value)) {
                    this.value.productId = '';
                }
            }
        },
        watch: {
            value(val) {
                this.$emit('input', val);
            },
            newValue(val) {
                this.$emit('input', val);
            },
        },

        methods: {
            edit() {
                this.editMode = true;
            },
            async add() {
                this.editMode = false;
                this.$emit('input', this.value);

                if(this.isNew){
                    this.$emit('add', this.value);
                } else {
                    this.$emit('edit', this.value);
                }
            },
            async remove(){
                this.editMode = false;
                this.isDeleted = true;

                this.$emit('input', this.value);
                this.$emit('delete', this.value);
            },
            change(){
                this.$emit('change', this.value);
            },
        }
    }
</script>

