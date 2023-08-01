<template>
   <div></div>
</template>

<script>
    import BaseGrid from '../base-ui/BaseGrid';

    export default {
        name: 'BaseDetailGrid',
        mixins:[BaseGrid],
        
        async created() {
            if (!this.value) {
                this.value = [];
            }
        },
        methods: {
        }
    };
    
</script>

