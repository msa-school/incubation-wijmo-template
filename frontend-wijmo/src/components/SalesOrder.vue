<template>
    <div>
        <div>
            <v-row cols="12">
                <v-col cols="6">
                    <div style="display:flex;">
                        <div class="label-title">SalesPerson</div>
                        <String label="입력하세요." v-model="value.salesPerson" :editMode="editMode"/>
                    </div>
                </v-col>
            </v-row>
        </div>

        <div>
            <v-row cols="12">
                <v-col cols="6" class="picker">
                    <SalesType offline label="SalesType" v-model="value.salesType" :editMode="editMode" @change="change"/>
                </v-col>
                <v-col cols="6" class="picker">
                    <CompanyId offline label="CompanyId" v-model="value.companyId" :editMode="editMode" @change="change"/>
                </v-col>
            </v-row>
        </div>

        <div>
            <SalesItemManager offline label="SalesItem" v-model="value.salesItem" :editMode="editMode" @change="change"/>
        </div>

        <v-divider class="border-opacity-100 my-divider"></v-divider>
        <v-layout row justify-end>
            <v-btn
                width="64px"
                color="primary"
                @click="save"
            >
                저장
            </v-btn>
        </v-layout>

        <v-snackbar
            v-model="snackbar.status"
            :top="true"
            :timeout="snackbar.timeout"
            color="error"
        >
            {{ snackbar.text }}
            <v-btn dark text @click="snackbar.status = false">
                Close
            </v-btn>
        </v-snackbar>
    </div>
</template>

<script>

import BaseEntity from './base-ui/BaseEntity'


export default {
    name: 'SalesOrder',
    mixins:[BaseEntity],
    components:{
    },
    data: () => ({
        path: "salesOrders"
    }),
    created(){


    },
    computed:{
    },
    methods: {

    },
}
</script>

