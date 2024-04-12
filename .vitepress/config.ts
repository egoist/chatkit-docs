import { defineConfig } from "vitepress"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "ChatKit Docs",
  description: "Documentation for ChatKit",
  lastUpdated: true,
  themeConfig: {
    search: {
      provider: "local",
    },
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
            text: "Getting Started",
            link: "/getting-started",
          },
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
          { text: "Launcher", link: "/launcher" },
          {
            text: "Shortcuts",
            link: "/shortcuts",
          },
          {
            text: "Credits",
            link: "/credits",
          },
          {
            text: "Log In",
            link: "/log-in",
          },
          {
            text: "Cloud Sync",
            link: "/cloud-sync",
          },
          { text: "Web Access", link: "/web-access" },
          {
            text: "Azure OpenAI",
            link: "/azure-openai",
          },
          {
            text: "Google Gemini",
            link: "/gemini",
          },
          {
            text: "Perplexity Models",
            link: "/pplx",
          },
          {
            text: "OpenRouter Models",
            link: "/openrouter",
          },
          {
            text: "Ollama Models",
            link: "/ollama",
          },
          {
            text: "Custom Model",
            link: "/custom-model",
          },
          {
            text: "Math Formula",
            link: "/math-formula",
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
