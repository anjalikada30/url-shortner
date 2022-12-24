import React, { useState } from 'react'
import { ApiError, InputField, Loader, ShortenedUrlList, ShortlyDescription } from '../../components'
import { ERROR_RESPONSE, SUCCESS_RESPONSE } from '../../constants/Constants';
import { shortenUrl } from '../../service/shortnerService'
import { HomeContainer } from './HomeElements'

function Home() {
  const [urlStatus, setUrlStatus] = useState("");
  const [apiError, setApiError] = useState();
  const [loading, setLoading] = useState(false);
  const [shortenedUrls, setShortenedUrls] = useState([])

  const onUrlSubmit = async (url) => {
    const nonUnique = !shortenedUrls.find(shortenedUrl => shortenedUrl.actualUrl === url);
    if (nonUnique) {
      setLoading(true);
      const response = await shortenUrl(url);
      setLoading(false)
      if (response?.status === SUCCESS_RESPONSE) {
        const temp = {
          id: Math.floor(Math.random() * 1000),
          actualUrl: url
        }
        setUrlStatus(SUCCESS_RESPONSE)
        if (response?.response?.result) {
          temp.shortUrl = response?.response?.result?.full_short_link;
        }
        setShortenedUrls([temp, ...shortenedUrls]);
      } else if (response?.status === ERROR_RESPONSE) {
        setUrlStatus(ERROR_RESPONSE)
        setApiError(response?.error)
      }
    }
    else setUrlStatus(SUCCESS_RESPONSE);
  }
  return (
    <HomeContainer>
      <ShortlyDescription />
      <InputField onSubmit={onUrlSubmit} />
      {
        urlStatus === ERROR_RESPONSE
          ? <ApiError error={apiError} />
          : null
      }
      <ShortenedUrlList shortenedUrls={shortenedUrls} />
      {
        loading ?
          <Loader />
          : null
      }
    </HomeContainer>
  )
}

export default Home
