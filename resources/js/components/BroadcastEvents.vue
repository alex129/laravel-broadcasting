<script lang="ts" setup>
import { onMounted } from 'vue'

onMounted(() => {
    console.log('Hello from BroadcastEvents', window.Echo)
    
    var i = 0;
    window.Echo.channel('public-message-channel')
        .listen('MessageEvent', (data) => {
        i++;
        console.log('hello', data.title)
    });
})

</script>
<template>
    <div>
        Hello
    </div>
</template>