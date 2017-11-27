import { IRssArticle } from './irssarticle'
import { IFeed, IRssEnvelope, FeedItem } from './irssenvelope'

export class RssSearch extends FeedItem<IRssArticle> {
  readonly feedUrl = 'mobapp/search.xml'

  openEnvelope(envelopedData: any): IRssArticle {
    return envelopedData ? envelopedData.article : null
  }
}
