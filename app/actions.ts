'use server';

import { X2jOptions, XMLParser } from "fast-xml-parser";

import { Episode } from "./types/episode";

export async function getEpisodes(page: number = 0, pageSize: number = 10): Promise<Episode[]> {
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

    const items = parsed.rss.channel.item.slice(
        0, 
        pageSize - 1
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
    }));

    return mapped;
}