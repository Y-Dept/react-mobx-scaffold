import zhCN from 'antd/lib/locale-provider/zh_CN'
import enUS from 'antd/lib/locale-provider/en_US'
import appZhCN from 'locale/zh_CN'
import appEnUS from 'locale/en_US'
import storeProp from 'src/storeProp'

Object.assign(zhCN, appZhCN)
Object.assign(enUS, appEnUS)

@storeProp({
  setter: [
    {
      name: 'lang',
      default: zhCN,
      shallow: true,
    },
  ],
})
class Locale {
  langs = {
    zhCN,
    enUS,
  }
}

const store = new Locale()

export default store
