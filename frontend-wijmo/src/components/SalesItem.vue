<template>

    <div>
        <div class="detail-title">
        SalesItem
        </div>
            <v-col>
                <div class="label-title">ProductId</div>
                <String label="입력하세요." v-model="value.productId" :editMode="editMode"/>
                <Number offline label="Quantity" v-model="value.quantity" :editMode="editMode" @change="change"/>
                <Number offline label="Price" v-model="value.price" :editMode="editMode" @change="change"/>
            </v-col>

        <v-card-actions v-if="inList">
            <slot name="actions"></slot>
        </v-card-actions>
    </div>
</template>

<script>
import BaseEntity from './base-ui/BaseEntity'



export default {
    name: 'SalesItem',
    mixins:[BaseEntity],
    components:{
    },
    
    data: () => ({
        path: "salesOrders/salesItems",
        itemToEdit: {
            productId: null,
            quantity: null,
            price: null
        },
    }),
    created(){
    },
    computed:{
    },
    methods: {
    },
}
</script>


