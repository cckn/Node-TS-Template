import YAML from 'yaml'
import fs from 'fs'

export const make2DArray = (n: number, m: number): any[][] | false => {
  if (n === 0 || m === 0) {
    return false
  }
  return new Array(n).fill(new Array(m))
}

export const getConfig = () =>
  YAML.parse(fs.readFileSync('./src/config.yml', 'utf8'))
