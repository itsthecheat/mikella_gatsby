import "bootstrap/dist/css/bootstrap.min.css";
import "./src/styles/global.css"
import { registerLinkResolver } from 'gatsby-source-prismic-graphql'
import { linkResolver } from './src/utils/linkResolver'

registerLinkResolver(linkResolver)
