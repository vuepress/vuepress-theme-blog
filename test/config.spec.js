/**
 * @jest-environment node
 */

const vuepressThemeBlog = require('../')

test('should be a function', () => {
  expect(typeof vuepressThemeBlog).toBe('function')
})

test('should match snapshot without any configuration', () => {
  const themeConfig = {}
  const config = vuepressThemeBlog(themeConfig)
  expect(themeConfig).toMatchSnapshot()
  expect(config).toMatchSnapshot()
})
