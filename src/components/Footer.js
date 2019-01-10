import React from 'react'

import { rhythm } from '../utils/typography'

class Footer extends React.Component {
  render() {
    return (
      <footer
        style={{
          marginTop: rhythm(2.5),
          paddingTop: rhythm(1),
        }}
      >
        <div style={{ float: 'right' }}>
          <a
            href="/rss.xml"
            target="_blank"
            rel="noopener noreferrer"
          >rss</a>
        </div>
        <a
          href="https://mobile.twitter.com/abchanda"
          target="_blank"
          rel="noopener noreferrer"
        >
          twitter
        </a> &bull;{' '}
        <a
          href="https://github.com/unowiz"
          target="_blank"
          rel="noopener noreferrer"
        >
          github
        </a> &bull;{' '}
        <a
          href="https://stackoverflow.com/users/289943/abhijit"
          target="_blank"
          rel="noopener noreferrer">
          stack overflow
        </a> &bull;{' '}
        <a
          href="https://www.linkedin.com/in/abhijitchanda/"
          target="_blank"
          rel="noopener noreferrer">
          LinkedIn
        </a>
      </footer>
    )
  }
}

export default Footer
