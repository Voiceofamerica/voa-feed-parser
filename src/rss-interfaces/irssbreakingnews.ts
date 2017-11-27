import { IRssArticle } from './irssarticle'
import { IFeed, IRssEnvelope, FeedItem } from './irssenvelope'

export class RssBreakingNews extends FeedItem<IRssArticle> {
  readonly feedUrl = 'mobapp/breakingnews.xml'

  openEnvelope(envelopedData: any): IRssArticle {
    return envelopedData ? envelopedData.article : null
  }
}
