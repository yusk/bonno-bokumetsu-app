
import _ from 'lodash'

const kleshasData = [
  {id: 0, name: '食欲', motto: 'ダイエットが成功する'},
  {id: 1, name: '承認欲', motto: '思わぬツイートがバズる'},
  {id: 2, name: '物欲', motto: '整理整頓がはかどる'},
  {id: 3, name: '金欲', motto: '貯金がうまくいく'},
]

const startAdjustOnResize = () => {
  window.addEventListener('resize', () => {
    const vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)
  })
}

export default {
  kleshasData,
  startAdjustOnResize,
}
