<script lang="ts" setup>
import { onMounted } from 'vue'

onMounted(() => {
    console.log('Hello from BroadcastEvents', window.echo)
    
    var i = 0;
    window.echo.channel('user-channel')
        .on('.UserEvent', (data) => {
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