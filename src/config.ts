export const EnUrl: string = process.env.EN_URL || ''
if (!EnUrl) {
  throw new Error('en (european english) feed url not configured')
}

export const EnUsUrl: string = process.env.EN_US_URL || ''
if (!EnUsUrl) {
  throw new Error('en-us (american english) feed url not configured')
}

export const FaUrl: string = process.env.FA_URL || ''
if (!FaUrl) {
  throw new Error('fa (farsi) feed url not configured')
}

export const KoUrl: string = process.env.KO_URL || ''
if (!KoUrl) {
  throw new Error('ko (korean) feed url not configured')
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
