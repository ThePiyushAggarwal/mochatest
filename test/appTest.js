const assert = require('chai').assert
const app = require('../app')

describe('App', () => {
  describe('result', () => {
    it('app should return hello', () => {
      assert.equal(app(), 'hello')
    })
    it('app should be a string', () => {
      assert.typeOf(app(), 'string')
    })
  })
})
