export const AmUrl: string = process.env.AM_URL || ''
if (!AmUrl) {
  throw new Error('am (amharic) feed url not configured')
}

export const BoUrl: string = process.env.BO_URL || ''
if (!BoUrl) {
  throw new Error('bo (tibetan) feed url not configured')
}

export const EnUrl: string = process.env.EN_URL || ''
if (!EnUrl) {
  throw new Error('en (european english) feed url not configured')
}

export const EnUsUrl: string = process.env.EN_US_URL || ''
if (!EnUsUrl) {
  throw new Error('en-us (american english) feed url not configured')
}

export const EsUrl: string = process.env.ES_URL || ''
if (!EsUrl) {
  throw new Error('es (spanish) feed url not configured')
}

export const FaUrl: string = process.env.FA_URL || ''
if (!FaUrl) {
  throw new Error('fa (farsi) feed url not configured')
}

export const KoUrl: string = process.env.KO_URL || ''
if (!KoUrl) {
  throw new Error('ko (korean) feed url not configured')
}

export const OmUrl: string = process.env.OM_URL || ''
if (!OmUrl) {
  throw new Error('om (afaan oromoo) feed url not configured')
}

export const PrsUrl: string = process.env.PRS_URL || ''
if (!PrsUrl) {
  throw new Error('prs (dari) feed url not configured')
}

export const PusUrl: string = process.env.PUS_URL || ''
if (!PusUrl) {
  throw new Error('pus (pashto) feed url not configured')
}

export const RuUrl: string = process.env.RU_URL || ''
if (!RuUrl) {
  throw new Error('ru (russian) feed url not configured')
}

export const TgUrl: string = process.env.TG_URL || ''
if (!TgUrl) {
  throw new Error('tg (tigrigna) feed url not configured')
}

export const UrUrl: string = process.env.UR_URL || ''
if (!UrUrl) {
  throw new Error('ur (urdu) feed url not configured')
}

export const ViUrl: string = process.env.VI_URL || ''
if (!ViUrl) {
  throw new Error('vi (vietnamese) feed url not configured')
}

export const ZhUrl: string = process.env.ZH_URL || ''
if (!ZhUrl) {
  throw new Error('zh (mandarin) feed url not configured')
}
