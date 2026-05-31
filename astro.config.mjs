// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";
// https://astro.build/config
export default defineConfig({
    site: 'https://rahulkmohan.in',
    markdown: {
        smartypants: false,
    },
    integrations: [tailwind(), mdx(), sitemap(), partytown({
        config : {
            forward : ["dataLayer.push"]
        }
    })]
});