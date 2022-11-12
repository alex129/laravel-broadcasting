<script lang="ts" setup>
import { onMounted } from 'vue'

onMounted(() => {
    console.log('Hello from BroadcastEvents')
    
    // var i = 0;
    // window.Echo.channel('public-message-channel')
    //     .listen('MessageEvent', (data) => {
    //     i++;
    //     console.log('hello', data)
    // });
})

</script>
<template>
    <div>
        Hello
    </div>
</template>