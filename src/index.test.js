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

describe('setBaseDir', () => {
  afterEach(() => {
    app.setBaseDir()
  })

  it('should change where files are looked up from', () => {
    const dir = path.resolve(fixtures, 'setBaseDir')
    app.setBaseDir(dir)
    app.read('a.txt')
    expect(app.read('a.txt')).toBe(
      getFixture('setBaseDir/a.txt')
    )
  })
})
