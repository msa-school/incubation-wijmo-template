<template>
    <div>
        <div>
            <v-row cols="12">
                <v-col cols="6">
                    <div style="display:flex;">
                        <div class="label-title">Name</div>
                        <String label="입력하세요." v-model="value.name" :editMode="editMode"/>
                    </div>
                </v-col>
                <v-col cols="6">
                    <div style="display:flex;">
                        <div class="label-title">Industry</div>
                        <String label="입력하세요." v-model="value.industry" :editMode="editMode"/>
                    </div>
                </v-col>
                <v-col cols="6">
                    <div style="display:flex;">
                        <div class="label-title">FoundedDate</div>
                        <Date label="입력하세요." v-model="value.foundedDate" :editMode="editMode"/>
                    </div>
                </v-col>
            </v-row>
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


import BaseEntityUI from './BaseEntityUI'



export default {
    name: 'Company',
    mixins:[BaseEntityUI],
    components:{
    },
    props: {
       
    },
    data: () => ({
        path: "companies"
    }),
    created(){
    },
    computed:{
    },
    methods: {

        async updateCompany(params) {
            try {
                if(!this.offline) {
                    var temp = await this.repository.invokeHateoasLink('/company/{companyId}', params)
                    for(var k in temp.data) {
                        this.value[k]=temp.data[k];
                    }
                }
                this.editMode = false;
                this.closeUpdateCompany();
            } catch(e) {
                this.snackbar.status = true
                if(e.response && e.response.data.message) {
                    this.snackbar.text = e.response.data.message
                } else {
                    this.snackbar.text = e
                }
            }
        },
        openUpdateCompany() {
            this.updateCompanyDiagram = true;
        },
        closeUpdateCompany() {
            this.updateCompanyDiagram = false;
        },
    },
}
</script>

