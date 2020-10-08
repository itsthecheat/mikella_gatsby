import 'bootstrap/dist/css/bootstrap.min.css'
import './src/styles/global.css'
import { registerLinkResolver } from 'gatsby-source-prismic-graphql'
import { linkResolver } from './src/utils/linkResolver'
import 'typeface-dm-serif-display'
import 'typeface-raleway'
import 'typeface-assistant'
import 'typeface-fira-sans'

registerLinkResolver(linkResolver)
