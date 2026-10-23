/**
 * Inline the mascot WebP images into the Client bundle so the page needs no
 * extra HTTP route (the desktop shell loads the app from its own origin).
 */
import { readFileSync, writeFileSync } from 'node:fs'

const here = new URL('.', import.meta.url)
const asset = (name) =>
  'data:image/webp;base64,' + readFileSync(new URL(`../assets/${name}`, here)).toString('base64')

const images = {
  __AVATAR_DATA__: 'avatar.webp',
  __HERO_DATA__: 'hero.webp',
  __BANNER_DATA__: 'banner.webp',
  __CORNER_ORIGINAL__: 'corner-original.webp',
  __CORNER_BOWL__: 'corner-bowl.webp',
  __CORNER_CIALLO__: 'corner-ciallo.webp',
  __CORNER_MOYU__: 'corner-moyu.webp',
  __CORNER_CRY__: 'corner-cry.webp',
}

let output = readFileSync(new URL('../src/client.js', here), 'utf8')
for (const [placeholder, file] of Object.entries(images)) {
  if (!output.includes(placeholder)) throw new Error(`missing placeholder ${placeholder}`)
  output = output.split(placeholder).join(asset(file))
}

writeFileSync(new URL('../client.js', here), output)
console.log(`client.js written (${output.length} bytes)`)
