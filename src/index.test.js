import * as app from './'
import fs from 'fs'
import path from 'path'

const fixtures = path.resolve(__dirname, '../fixtures')

const getFixture = (filePath) => {
  return fs.readFileSync(
    path.resolve(fixtures, filePath),
    'utf8'
  )
}

describe('read', () => {
  it('should read the contents', () => {
    expect(app.read('fixtures/read/a.txt')).toBe(
      getFixture('read/a.txt')
    )
  })
})
