export const ZhUrl: string = process.env.ZH_URL || ''
if (!ZhUrl) {
  throw new Error('zh feed url not configured')
}

export const FaUrl: string = process.env.FA_URL || ''
if (!FaUrl) {
  throw new Error('fa feed url not configured')
}

export const EnUrl: string = process.env.EN_URL || ''
if (!EnUrl) {
  throw new Error('en feed url not configured')
}

export const EnUsUrl: string = process.env.EN_US_URL || ''
if (!EnUsUrl) {
  throw new Error('en-us feed url not configured')
}
