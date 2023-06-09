import { defineConfig } from "vitepress"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "ChatKit Docs",
  description: "Documentation for ChatKit",
  lastUpdated: true,
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
            text: "Text to Speech",
            link: "/text-to-speech",
          },
          {
            text: "Prompt Templates",
            link: "/prompt-templates",
          },
          {
            text: "Shortcuts",
            link: "/shortcuts",
          },
          {
            text: "Credits",
            link: "/credits",
          },
        ],
      },
      {
        text: "Plugins",
        items: [
          {
            text: "Overview",
            link: `/plugins/overview`,
          },
          {
            text: "Calculator",
            link: `/plugins/calculator`,
          },
          {
            text: "Google Search",
            link: "/plugins/google-search",
          },
          {
            text: "Request",
            link: "/plugins/request",
          },
        ],
      },
      {
        text: "Company",
        items: [
          {
            text: "Privacy policy",
            link: "/privacy-policy",
          },
          {
            text: "Refund policy",
            link: "/refund-policy",
          },
          {
            text: "Terms and Conditions",
            link: "/terms",
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
