import Sortable, { GroupOptions } from 'sortablejs'
import dayjs, { Dayjs } from 'dayjs'
import 'dayjs/locale/ja'
import isBetween from 'dayjs/plugin/isBetween'
import isToday from 'dayjs/plugin/isToday'
import isTomorrow from 'dayjs/plugin/isTomorrow'
import isYesterday from 'dayjs/plugin/isYesterday'
import _ from 'lodash'

dayjs.locale('ja')
dayjs.extend(isBetween)
dayjs.extend(isToday)
dayjs.extend(isTomorrow)
dayjs.extend(isYesterday)

const makeErrorMessage = (err: any) => {
  if (!err || !err.response) return '送信時にエラーが発生しました'
  if (_.get(err, 'response.data.detail')) {
    return _.get(err, 'response.data.detail')
  }
  if (err.status >= 500 && err.status < 600) {
    return 'サーバーに問題が発生しています。お手数ですが復旧をお待ちください'
  }
  return '入力に間違いがないか確認してください'
}

const makeDateText = (date: Dayjs) => {
  if (!date.isValid()) return ''
  if (date.isToday()) return date.format('今日 HH:mm')
  if (date.isTomorrow()) return date.format('明日 HH:mm')
  if (date.isYesterday()) return date.format('昨日 HH:mm')
  return date.format('YYYY/MM/DD HH:mm')
}

const startAdjustOnResize = () => {
  window.addEventListener('resize', () => {
    const vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)
  })
}

export default {
  makeErrorMessage,
  makeDateText,
  startAdjustOnResize,
  dayjs,
}
