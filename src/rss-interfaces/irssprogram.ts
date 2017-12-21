import { IFeed, IRssEnvelope, FeedItem } from './irssenvelope'

export interface IRssProgram {
  id: string
  duration: string
  /** Type of audio (c-clip, f-feature, b-broadcastProgram or v-video) */
  type: string
  url: string
  date: string
  zone: string
  programTitle: string
  programDescription: string
  image: {
    id: string
    type: string
    url: string
  }
}

export class RssScheduler extends FeedItem<IRssProgram> {
  readonly feedUrl = 'mobapp/scheduler.xml'

  openEnvelope(envelopedData: any): IRssProgram {
    return envelopedData ? envelopedData.program : null
  }
}

export class RssVideoScheduler extends FeedItem<IRssProgram> {
  readonly feedUrl = 'mobapp/videoscheduler.xml'

  openEnvelope(envelopedData: any): IRssProgram {
    return envelopedData ? envelopedData.program : null
  }
}

export class RssLiveVideo extends FeedItem<IRssProgram> {
  readonly feedUrl = 'mobapp/liveaudio.xml'

  openEnvelope(envelopedData: any): IRssProgram {
    return envelopedData ? envelopedData.program : null
  }
}

export class RssLiveAudio extends FeedItem<IRssProgram> {
  readonly feedUrl = 'mobapp/livevideo.xml'

  openEnvelope(envelopedData: any): IRssProgram {
    return envelopedData ? envelopedData.program : null
  }
}
