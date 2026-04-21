import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "The Ecclesia",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "null",
    },
    locale: "en-US",
    baseUrl: "ecclesia.lumensyntax.com",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "EB Garamond",
        body: "EB Garamond",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#f5f1ea",
          lightgray: "#e5dfd4",
          gray: "#a89f91",
          darkgray: "#4a4540",
          dark: "#1f1b17",
          secondary: "#1e3a5f",
          tertiary: "#8b1a1a",
          highlight: "rgba(30, 58, 95, 0.08)",
          textHighlight: "rgba(139, 26, 26, 0.18)",
        },
        darkMode: {
          light: "#17141a",
          lightgray: "#2d2a31",
          gray: "#5a5560",
          darkgray: "#c4beb4",
          dark: "#e8e2d5",
          secondary: "#8ba8c4",
          tertiary: "#c08585",
          highlight: "rgba(139, 168, 196, 0.10)",
          textHighlight: "rgba(192, 133, 133, 0.22)",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
