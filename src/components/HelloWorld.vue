<template>
  <div class="counter">
    <p>count: {{ count }}</p>
    <p>reactive sample: {{ helloCount }}</p>
    <p>NewVal (count x 2): {{ countDouble }}</p>
    <button @click="inc">Increment</button>
    <button @click="dec">Decrement</button>
  </div>
</template>
<script>
import { ref, computed, watch, reactive } from 'vue'
import { incrementRef } from './methods/increment'

export default {
  name: 'HelloWorld',
  setup() {
/* ---------------------------------------------------- */
    const count = ref(0)
    const sampleObject = reactive({
      message: 'HelloReactive'
    })
    const countDouble = computed(() => count.value * 2)
    const helloCount = computed(() => sampleObject.message = `HelloReactive: ${count.value}`)
    watch(count, newVal => {
      console.log('count changed', newVal)
    })
    const inc = () => {
      // count.value = increment(count.value)
      count.value = incrementRef(count)
    }
    const dec = () => {
      if (count.value !== 0) {
        count.value--
      }
    }
    return {
      count,
      sampleObject,
      inc,
      dec,
      countDouble,
      helloCount
    }
  }
}
</script>
