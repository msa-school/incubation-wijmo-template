<template>
    <div>
        <v-select
            :items="list"
            item-text="name"
            item-value="name"
            :label="Company"
            return-object
            v-model="selected"
            @change="select"
            solo
        ></v-select>
    </div>
</template>

<script>
    import BasePicker from '../base-ui/BasePicker'

    export default {
        name: 'CompanyPicker',
        mixins: [BasePicker],
        data: () => ({
            path: 'companies'
        }),
        methods: {
        },
    };
</script>
