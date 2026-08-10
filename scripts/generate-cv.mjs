import { mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import puppeteer from 'puppeteer'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')
const templatePath = path.join(__dirname, 'cv-template.html')
const outputPath = path.join(root, 'public', 'cv', 'Mohamed_Abdelhamed.pdf')

const html = await readFile(templatePath, 'utf8')

const browser = await puppeteer.launch({ headless: true })
const page = await browser.newPage()
await page.setContent(html, { waitUntil: 'networkidle0' })
await mkdir(path.dirname(outputPath), { recursive: true })

const pdf = await page.pdf({
  path: outputPath,
  format: 'A4',
  printBackground: true,
  margin: { top: '0', right: '0', bottom: '0', left: '0' },
})

await browser.close()

console.log(`CV generated: ${outputPath} (${pdf.length} bytes)`)
