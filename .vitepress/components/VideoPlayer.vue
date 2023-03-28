<script setup lang="ts">
import { ref } from "vue"

const videoRef = ref<HTMLVideoElement>()
const status = ref<"idle" | "paused" | "playing">("idle")
const remaingTime = ref(0)
const canPlay = ref(false)

defineProps({
  src: {
    type: String,
    required: true,
  },
})

const togglePlay = () => {
  if (!videoRef.value || !canPlay.value) return

  if (status.value === "playing") {
    videoRef.value.pause()
  } else {
    videoRef.value.play()
  }
}

const onPlay = () => {
  status.value = "playing"
}

const onEnded = () => {
  status.value = "idle"
}

const onPause = () => {
  status.value = "paused"
}

const onTimeUpdate = () => {
  if (!videoRef.value) return
  remaingTime.value = videoRef.value.duration - videoRef.value.currentTime
}
</script>

<template>
  <div
    class="relative group rounded-xl overflow-hidden aspect-auto"
    :class="{
      'bg-zinc-200 animate-pulse duration-100 min-h-[200px]': !canPlay,
      'cursor-pointer': canPlay,
    }"
    @click="togglePlay"
  >
    <video
      :src="src"
      preload="auto"
      ref="videoRef"
      @timeupdate="onTimeUpdate"
      @play="onPlay"
      @ended="onEnded"
      @pause="onPause"
      @loadedmetadata="
        () => {
          canPlay = true
        }
      "
    />
    <span
      v-if="status === 'playing' || status === 'paused'"
      class="absolute bottom-5 left-5 rounded-lg bg-black/50 text-white px-2 text-sm h-8 inline-flex items-center"
      >{{ Math.floor(remaingTime) }}s</span
    >
    <button
      type="button"
      class="absolute text-2xl left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:inline-flex bg-indigo-700/50 w-10 h-10 rounded-lg text-white items-center justify-center"
      :class="{
        hidden: status === 'playing',
        'inline-flex': status !== 'playing',
      }"
    >
      <span
        v-if="canPlay"
        :class="status === 'playing' ? 'i-tabler-pause' : 'i-tabler-play'"
      ></span>
      <span v-else class="i-tabler-loader-2 animate-spin"></span>
    </button>
  </div>
</template>
