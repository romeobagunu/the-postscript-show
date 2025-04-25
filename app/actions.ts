'use server';

import { X2jOptions, XMLParser } from "fast-xml-parser";

interface RSSFeedItem {
    title: string;
    description: string;
    date: Date;
    image: string;
    episode: number;
}

export async function getEpisodes(): Promise<RSSFeedItem[]> {
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

    const mapped = parsed.rss.channel.item.map((i: any) => ({
        title: i.title,
        description: i.description,
        date: i.pubDate,
        image: i.itunes_image.href,
        episode: i.itunes_episode,
    }));

    return mapped;
}