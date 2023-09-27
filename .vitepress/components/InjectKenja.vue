<script setup>
import { onMounted } from "vue"

onMounted(() => {
  const script = document.createElement("script")
  script.innerHTML = `
    window.kenja_chat_config = {
      botId: "bfc33380-00fa-43b8-a7a6-6673b140d13a"
    }
    `

  const script2 = document.createElement("script")
  script2.src = "https://embed.kenja.app/chat.js"
  script.async = true
  script.defer = true

  document.body.append(script, script2)
})
</script>

<template></template>
