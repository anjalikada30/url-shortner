import React, { useState } from 'react'
import { ApiError, InputField, ShortenedUrl, ShortlyDescription } from '../../components'
import { ERROR_RESPONSE, SUCCESS_RESPONSE } from '../../constants/Constants';
import { shortenUrl } from '../../service/shortnerService'
import { HomeContainer } from './HomeElements'

function Home() {
  const [actualUrl, setActualUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [urlStatus, setUrlStatus] = useState("");
  const [apiError, setApiError] = useState();
  const [copyButtonText, setCopyButtonText] = useState("Copy")

  const onUrlSubmit = async (url) => {
    const response = await shortenUrl(url);
    if (response?.status === SUCCESS_RESPONSE) {
      setActualUrl(url);
      setUrlStatus(SUCCESS_RESPONSE)
      if (response?.response?.result)
        setShortUrl(response?.response?.result?.full_short_link)
    } else if (response?.status === ERROR_RESPONSE) {
      setUrlStatus(ERROR_RESPONSE)
      setApiError(response?.error)
    }
  }
  const copyUrlToClipboard = () => {
    setCopyButtonText("Copied!")
    navigator.clipboard.writeText(shortUrl)
    setTimeout(()=>{
      setCopyButtonText("Copy")
    }, 3000)
  }
  return (
    <HomeContainer>
      <ShortlyDescription />
      <InputField onSubmit={onUrlSubmit} />
      {
        urlStatus === SUCCESS_RESPONSE
          ? <ShortenedUrl
            actualUrl={actualUrl}
            shortUrl={shortUrl}
            copyUrlToClipboard={copyUrlToClipboard}
            copyButtonText={copyButtonText} />
          : null
      }
      {
        urlStatus === ERROR_RESPONSE
          ? <ApiError error={apiError} />
          : null
      }
    </HomeContainer>
  )
}

export default Home
