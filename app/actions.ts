'use server';

import { X2jOptions, XMLParser } from "fast-xml-parser";

import { Episode } from "./types/episode";
import { Category } from "./types/category";

export async function getEpisodes(page: number = 0, pageSize: number = 10, category: Category | null = null): Promise<Episode[]> {

    const res = await fetch("https://feeds.transistor.fm/the-postscript-show");
    const xml = await res.text();

    const options: X2jOptions = {
        transformTagName(tagName) {
            return tagName.replace(':','_')
        },
        ignoreAttributes: false,
        attributeNamePrefix: "",
        attributesGroupName: "",
    }
    const parser = new XMLParser(options);
    const parsed = parser.parse(xml);

    const filtered = parsed.rss.channel.item.filter((rssItem: any) => {
        switch (category) {
            case Category.Postscript:
                return rssItem.title.startsWith("Episode")
            case Category.Shorts:
                return rssItem.title.startsWith("Short")
            case Category.PsPlus:
                return !rssItem.title.startsWith("Episode") && !rssItem.title.startsWith("Short")
            default:
                return true;
        }
    })

    const items = filtered.slice(
        0, 
        pageSize
    );

    const mapped = items.map((i: any) => ({
        title: i.title,
        description: i.description,
        date: i.pubDate,
        image: i.itunes_image.href,
        episode: i.itunes_episode,
        pubDate: new Date(i.pubDate),
        length: i.itunes_duration,
        mp3: i.enclosure.url,
        link: i.link,
        category: determineCategory(i)
    }));

    return mapped;
}

function determineCategory(rssItem: any): Category {
    if (rssItem.title.startsWith("Episode")) return Category.Postscript;
    if (rssItem.title.startsWith("Short")) return Category.Shorts;
    return Category.PsPlus;
}