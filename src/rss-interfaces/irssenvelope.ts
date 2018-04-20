export interface IFeedUrl {
  feedUrl: string
}

export interface IFeed<TSource> extends IFeedUrl {
  feedUrl: string
  mapData: IMapFunction<TSource>
}

type IMapFunction<T> = (data: IRssEnvelope) => T[]

export interface IRssEnvelope {
  rss: {
    channel: {
      title
      link
      description
      language
      copyright
      lastBuildDate
      item: any | any[]
    }
  }
}

export abstract class FeedItem<TItem> implements IFeed<TItem> {
  abstract readonly feedUrl: string

  abstract openEnvelope(envelopedData: any): TItem | null

  mapData(data: IRssEnvelope): TItem[] {
    const items = Array.isArray(data.rss.channel.item)
      ? data.rss.channel.item
      : [data.rss.channel.item]

    const unwrapped = items.map(i => this.openEnvelope(i) as TItem)

    return unwrapped.filter(i => i)
  }
}
