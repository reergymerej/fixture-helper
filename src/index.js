import fs from 'fs'
import path from 'path'

let baseDir

export const read = (filePath) => {
  return fs.readFileSync(
    path.resolve(baseDir || process.cwd(), filePath),
    'utf8'
  )
}

export const setBaseDir = (dirPath) => {
  baseDir = dirPath
}
