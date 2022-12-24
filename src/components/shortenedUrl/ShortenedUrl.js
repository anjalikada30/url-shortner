import React, { useState } from 'react'
import { Button } from '../button'
import { ActualUrl, OuterContainer, CopyButton, ShortUrl, UrlContainer } from './ShortenedUrlElements'

function ShortenedUrl({ url }) {
  const [copyButtonText, setCopyButtonText] = useState("Copy");
  const { actualUrl, shortUrl } = url;
  console.log('rendering ShortenedUrl component-', url.actualUrl)
  const copyUrlToClipboard = () => {
    setCopyButtonText("Copied!")
    navigator.clipboard.writeText(shortUrl)
    setTimeout(() => {
      setCopyButtonText("Copy")
    }, 3000)
  }
  return (
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
  )
}
// function areEqual(prevProps, nextProps){
//   console.log(prevProps, nextProps)
//   return prevProps?.url?.id !== nextProps?.url?.id;
// }
export default React.memo(ShortenedUrl);
