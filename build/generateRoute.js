const fs = require('fs')
const lowerFirst = require('lodash/lowerFirst')

const routeTemplate = fs
  .readFileSync('./src/route.template.js')
  .toString('utf8')
const routes = fs
  .readdirSync('./src/page')
  .filter(file => {
    // Home在模板中已经定义为主路由
    if (file === 'Home') {
      return false
    }
    return true
  })
  .map(
    route => `{
    key: '${route}',
    component: Loadable({
      loader: () => import('./page/${route}'),
      loading,
    }),
    path: '/${lowerFirst(route)}'
  }`,
  )
const templatePlaceholder = routeTemplate.replace(
  '/* template-placeholder */',
  `${routes.join(',\n  ')},\n
  /* 本路由文件由src/route.template.js文件生成，不要手动更改 */`,
)
fs.writeFileSync('./src/route.js', templatePlaceholder)
