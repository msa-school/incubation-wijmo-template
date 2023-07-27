<template>
    <div>
        <BasePicker v-model="value" idField="code" nameField="name" path="companies" @selected="pick" :editMode="editMode" />
    </div>

</template>

<script>
    export default {
        name: 'CompanyId',
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
        watch: {
            value(val) {
                this.$emit('input', val);
            }
        },

        methods: {
            async pick(val){
                this.newValue = val;
            },
        }
    }
</script>

