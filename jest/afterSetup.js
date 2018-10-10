import 'jest-enzyme'
import noop from 'lodash/noop'
import fetchMock from 'fetch-mock'
import searchForm from '../src/store/searchForm'
import router from '../src/store/router'

afterEach(() => {
  fetchMock.restore()
  router.push('/')
  searchForm.query = {}
})

// 抑制validator报错
beforeEach(() => {
  jest.spyOn(console, 'warn').mockImplementation(noop)
})
