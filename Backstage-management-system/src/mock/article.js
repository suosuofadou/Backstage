import Mock from 'mockjs'
import { param2Obj } from '@/utils'

const List = []
const count = 100

for (let i = 0; i < count; i++) {
  List.push(Mock.mock({
    id: '@increment(100)',
    author: '@csentence(2, 4)',
    reviewer: '@csentence(2, 4)',
    name: '@csentence(5, 10)',
    category: '@csentence(5, 8)',
    desc: '@csentence(8, 12)',
    address: '上海市普陀区真北路',
    shop: '@csentence(5, 8)',
    shopId: '@increment(10)'
  }))
}

export default {
  getList: config => {
    const { importance, type, title, page = 1, limit = 20, sort } = param2Obj(config.url)

    let mockList = List.filter(item => {
      if (importance && item.importance !== +importance) return false
      if (type && item.type !== type) return false
      if (title && item.title.indexOf(title) < 0) return false
      return true
    })

    if (sort === '-id') {
      mockList = mockList.reverse()
    }

    const pageList = mockList.filter((item, index) => index < limit * page && index >= limit * (page - 1))

    return {
      total: mockList.length,
      items: pageList
    }
  },
  getPv: () => ({
    pvData: [{ key: 'PC', pv: 1024 }, { key: 'mobile', pv: 1024 }, { key: 'ios', pv: 1024 }, { key: 'android', pv: 1024 }]
  }),
  getArticle: () => ({
    name: '张三小店',
    region: 'shanghai',
    date1: '2018-05-07',
    date2: '15:37:36 ',
    delivery: false,
    type: ['1', '2'],
    resource: '1',
    desc: '历离拉组收太准领区。'
  }),
  createArticle: () => ({
    data: 'success'
  }),
  updateArticle: () => ({
    data: 'success'
  })
}
