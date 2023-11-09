'use server'
import { promises as fs } from 'fs'

export default async function getEquivalents () {
  const file = await fs.readFile(process.cwd() + '/src/resources/setEquivalents.json', 'utf8')
  const data = JSON.parse(file)
  return data
}
