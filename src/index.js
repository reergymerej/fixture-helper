import fs from 'fs'
import path from 'path'

let baseDir = process.cwd()

export const read = (filePath) => {
  return fs.readFileSync(
    path.resolve(baseDir, filePath),
    'utf8'
  )
}
