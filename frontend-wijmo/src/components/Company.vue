<template>
    <div>
        <div>
            <div class="label-title">Code</div>
            <String label="입력하세요." v-model="value.code" :editMode="editMode"/>
            <div class="label-title">Name</div>
            <String label="입력하세요." v-model="value.name" :editMode="editMode"/>
            <div class="label-title">Industry</div>
            <String label="입력하세요." v-model="value.industry" :editMode="editMode"/>
            <div class="label-title">FoundedDate</div>
            <Date label="입력하세요." v-model="value.foundedDate" :editMode="editMode"/>
        </div>

        <div>
            <v-row cols="12">
            </v-row>
        </div>

        <div>
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
    name: 'Company',
    mixins:[BaseEntity],
    components:{
    },
    
    data: () => ({
        path: "companies"
    }),
    created(){
    },
    computed:{
    },
    methods: {
    },
}
</script>

