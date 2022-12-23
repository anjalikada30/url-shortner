import React from 'react'
import { Button } from '../button'
import { ActualUrl, OuterContainer, CopyButton, ShortUrl, UrlContainer } from './ShortenedUrlElements'

function ShortenedUrl({ actualUrl, shortUrl, copyUrlToClipboard, copyButtonText }) {
  return (
    <OuterContainer>
      <UrlContainer>
        <ActualUrl>
          {actualUrl}
        </ActualUrl>
        <ShortUrl>
          <a href={shortUrl} target="_">{shortUrl}</a>
        </ShortUrl>
        <Button
          ShortlyButton={CopyButton}
          name={copyButtonText}
          type='submit'
          onClick={copyUrlToClipboard}
        />
      </UrlContainer>
    </OuterContainer>
  )
}

export default ShortenedUrl
