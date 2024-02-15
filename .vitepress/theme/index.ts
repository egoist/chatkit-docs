// https://vitepress.dev/guide/custom-theme
import { defineComponent, h, nextTick, onMounted, watch } from "vue"
import { useRoute } from "vitepress"
import Theme from "vitepress/theme"
import mediumZoom from "medium-zoom"

import VideoPlayer from "../components/VideoPlayer.vue"
import "./tailwind.css"
import "./style.css"

const initZoom = () => {
  mediumZoom(".content img")
}

export default {
  ...Theme,

  Layout: defineComponent({
    setup() {
      const route = useRoute()
      onMounted(() => {
        initZoom()
      })

      watch(
        () => route.path,
        () => {
          nextTick(() => initZoom())
        }
      )

      return () =>
        h(Theme.Layout, null, {
          // https://vitepress.dev/guide/extending-default-theme#layout-slots
        })
    },
  }),
  enhanceApp({ app, router, siteData }) {
    app.component("VideoPlayer", VideoPlayer)
  },
}
