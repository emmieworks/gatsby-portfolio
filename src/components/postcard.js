import React from "react"
import { Link} from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const PostCard = ({ node }) => {
  return (
    <Link to={`/gallery/${node.frontmatter.slug}`}>
      <GatsbyImage
          image={node.frontmatter.featured.childImageSharp.gatsbyImageData}
          alt={node.frontmatter.title} />
    </Link>
  );
}
export default PostCard
