import { IRssArticle } from './irssarticle'
import { IFeed, IRssEnvelope, FeedItem } from './irssenvelope'
import { IRssProgram } from './irssprogram'

export class RssBreakingNews extends FeedItem<IRssArticle> {
  readonly feedUrl = 'mobapp/breakingnews.xml'

  openEnvelope(envelopedData: any): IRssArticle {
    return envelopedData ? envelopedData.article : null
  }
}

export class RssTopStories extends FeedItem<IRssArticle> {
  readonly feedUrl = 'mobapp/topstories.xml'

  openEnvelope(envelopedData: any): IRssArticle {
    return envelopedData ? envelopedData.article : null
  }
}

export class RssAudioClips extends FeedItem<IRssArticle> {
  readonly feedUrl = 'mobapp/audioclips.xml'

  openEnvelope(envelopedData: any): IRssArticle | null {
    const unwrappedData = envelopedData ? envelopedData.program : null
    return unwrappedData ? this.transformData(unwrappedData) : null
  }

  transformData(program: IRssProgram): IRssArticle | null {
    if (!program) {
      return null
    }

    const toReturn: Partial<IRssArticle> = {
      id: program.id,
      pubDate: program.date,
      lastUpdated: program.date,
      title: program.programTitle,
      type: 'c',
      introduction: program.programDescription,
      audio: {
        id: program.id,
        audioTitle: program.programTitle,
        audioDescription: program.programDescription,
        /** seconds */
        duration: program.duration,
        /** audio/mp3 */
        mime: 'audio/mp3',
        url: program.url,
        date: program.date,
      },
    }

    if (program.image) {
      toReturn.image = {
        id: program.image.id,
        type: program.image.type,
        url: program.image.url,
      }
    }
    return toReturn as IRssArticle
  }
}
