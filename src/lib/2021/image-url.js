import imageUrlBuilder from '@sanity/image-url'
import sclient from './sclient'

const builder = imageUrlBuilder(sclient)

export function urlFor(source) {
  return builder.image(source)
}
