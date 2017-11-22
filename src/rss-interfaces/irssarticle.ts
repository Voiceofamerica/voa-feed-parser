import { IFeed, IRssEnvolope, IFeedUrl } from './irssenvolope'

export class RssArticle implements IFeed<IRssArticle> {
  readonly feedUrl = 'mobapp/articles.xml'

  mapData(data: IRssEnvolope): IRssArticle[] {
    if (Array.isArray(data.rss.channel.item)) {
      return data.rss.channel.item.map(i => i.article)
    }
    return [data.rss.channel.item.article]
  }
}

export interface IRssArticleEnvelope {
  article: IRssArticle
}

export interface IRssArticle {
  id: string
  site: string
  zone: string
  /** a-article, v-video or p-photogallery */
  type: string
  pubDate: string
  lastUpdated: string
  url: string
  /** Short alternative of the article url.
   * Can be used for Twitter like web site on so on. */
  twitter: string
  title: string
  introduction: string
  content: string
  /** author array */
  authors: {
    name: {
      first: string
      middle: string
      last: string
    }
    email: string
    description: string
    id: string
  }[]
  image: {
    imageTitle: string
    id: string
    type: string
    url: string
  }
  audio: {
    audioTitle: string
    audioDescription: string
    id: string
    /** seconds */
    duration: string
    /** audio/mp3 */
    mime: string
    url: string
    date: string
  }
  video: {
    videoDescription: string
    guid: string
    /** Defines relation between article and video
     * 0=SameItem, 1=MainImage,2=EmbededInContent */
    relType: string
    id: string
    width: string
    height: string
    /** seconds */
    duration: string
    url: string
    thumbnail: string
  }
  /** story array */
  relatedStories: {
    storyTitle: string
    id: string
    pubDate: string
    /** a-article, v-video or p-photogallery */
    type: string
    url: string
    /** Short alternative of the article url.
     * Can be used for Twitter like web site on so on. */
    twitter: string
    thumbnailUrl: string
  }[]
}
