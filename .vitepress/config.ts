import { defineConfig } from "vitepress"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "ChatKit Docs",
  description: "Documentation for ChatKit",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "ChatKit", link: "https://chatkit.app" },
    ],

    sidebar: [
      {
        text: "Guide",
        items: [
          {
            text: "Chat over External Documents",
            link: "/chat-external-documents",
          },
          {
            text: "Prompt Templates",
            link: "/prompt-templates",
          },
          {
            text: "Shortcuts",
            link: "/shortcuts",
          },
        ],
      },
      {
        text: "Tips",
        items: [
          {
            text: "OpenAI Proxy",
            link: "/openai-proxy",
          },
        ],
      },
      {
        text: "Tools",
        items: [
          {
            text: "Google Search",
            link: "/tools/google-search",
          },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/egoist/chatkit-docs" },
    ],

    editLink: {
      pattern: "https://github.com/egoist/chatkit-docs/blob/main/:path",
    },
  },
})
