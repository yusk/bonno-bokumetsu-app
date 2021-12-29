import _ from 'lodash'

const kleshasData = [
  { id: 0, name: '食欲', motto: 'ダイエットが成功する' },
  { id: 1, name: '承認欲', motto: '思わぬツイートがバズる' },
  { id: 2, name: '物欲', motto: '整理整頓がはかどる' },
  { id: 3, name: '名誉欲', motto: '謙虚な姿勢が評価される' },
  { id: 4, name: '色欲', motto: '理想の相手が見つかる' },
  { id: 5, name: '我欲', motto: 'チームワークを発揮する' },
  { id: 6, name: '獣欲', motto: '理性的に行動する' },
  { id: 7, name: '声欲', motto: '新しい音楽にハマる' },
  { id: 8, name: '利欲', motto: 'ボランティアをすると良い' },
  { id: 9, name: '睡眠欲', motto: '早寝早起きができる' },
  { id: 10, name: '出世欲', motto: '頑張りが評価される' },
  { id: 11, name: '支配欲', motto: 'リーダーシップを発揮する' },
  { id: 12, name: '証明欲', motto: '人への教育が上手くいく' },
  { id: 13, name: '拒否欲', motto: 'あの人と仲直りできる' },
  { id: 14, name: '依存欲', motto: '自立した生活ができる' },
  { id: 15, name: '顕示欲', motto: 'がんばりが評価される' },
  { id: 16, name: '多欲', motto: '一つのことに集中できる' },
  { id: 17, name: '嗜欲', motto: '好きな事に時間を使える' },
  { id: 18, name: '金欲', motto: '貯金がうまくいく' },
]

const allKleshasCount = kleshasData.length

const startAdjustOnResize = () => {
  window.addEventListener('resize', () => {
    const vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)
  })
}

const makeEradicatedKleshasRanking = (kleshasLogs: number[]) => {
  return _.map(_.countBy(kleshasLogs), (kleshasCount, kleshasId) => ({ id: kleshasId, count: kleshasCount })).sort((a, b) => b.count - a.count)
}

export default {
  kleshasData,
  startAdjustOnResize,
  allKleshasCount,
  makeEradicatedKleshasRanking,
}
