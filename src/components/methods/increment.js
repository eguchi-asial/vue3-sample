import { ref, isRef } from 'vue'

export function increment(count) {
  return ++count
}

export function incrementRef(countRef) {
  const afterCount = isRef(countRef) ? countRef.value + 1 : ref(0).value + 1
  return afterCount
}
