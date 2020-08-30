<template>
  <div class="counter">
    <p>count: {{ count }}</p>
    <p>NewVal (count x 2): {{ countDouble }}</p>
    <button @click="inc">Increment</button>
    <button @click="dec">Decrement</button>
    <p> Message: {{ msg }} </p>
    <button @click="changeMessage()">Change Message</button>
  </div>
</template>
<script>
import { ref, computed, watch } from 'vue'
export default {
  name: 'HelloWorld',
  setup() {
/* ---------------------------------------------------- */
    const count = ref(0)
    const countDouble = computed(() => count.value * 2)
    watch(count, newVal => {
      console.log('count changed', newVal)
    })
    const inc = () => {
      count.value++
    }
    const dec = () => {
      if (count.value !== 0) {
        count.value--
      }
    }
/* ---------------------------------------------------- */
    const msg= ref('some text')
    watch(msg, newVal => {
      console.log('msg changed', newVal)
    })
    const changeMessage = () => {
      msg.value = "new Message"
    }
/* ---------------------------------------------------- */
    return {
      count,
      inc,
      dec,
      countDouble,
      msg,
      changeMessage
    }
  }
}
</script>