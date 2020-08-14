/**
 * @jest-environment node
 */

const vuepressThemeBlog = require('../')

jest.mock('path', () => {
  return {
    resolve: (_, p) => p,
  }
})

test('should be a function', () => {
  expect(typeof vuepressThemeBlog).toBe('function')
})

test('should match snapshot without any configuration', () => {
  const themeConfig = {}
  const config = vuepressThemeBlog(themeConfig)
  expect(themeConfig).toMatchSnapshot()
  expect(config).toMatchSnapshot()
})
