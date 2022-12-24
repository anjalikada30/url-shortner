import React, { useRef, useState } from 'react'
import { ApiError, InputField, Loader, ShortenedUrlList, ShortlyDescription } from '../../components'
import { ERROR_RESPONSE, SUCCESS_RESPONSE } from '../../constants/Constants';
import { shortenUrl } from '../../service/shortnerService'
import { HomeContainer } from './HomeElements'

function Home() {
  const [urlStatus, setUrlStatus] = useState("");
  const [apiError, setApiError] = useState();
  const [loading, setLoading] = useState(false);
  const [shortenedUrls, setShortenedUrls] = useState([])

  const onSubmitFailure = (response) => {
    setUrlStatus(ERROR_RESPONSE)
    setApiError(response?.error)
    setTimeout(() => {
      setUrlStatus('');
      setApiError('');
    }, 4000)
  }

  const onSUbmitSuccess = (response, url) => {
    const temp = {
      id: Math.floor(Math.random() * 1000),
      actualUrl: url
    }
    setUrlStatus(SUCCESS_RESPONSE)
    if (response?.response?.result) {
      temp.shortUrl = response?.response?.result?.full_short_link;
    }
    setShortenedUrls([temp, ...shortenedUrls]);
  }

  const onUrlSubmit = async (url) => {
    //no need to shorten url again if it is already shortened
    const nonUnique = shortenedUrls.filter(shortenedUrl => shortenedUrl.actualUrl === url);
    if (!nonUnique.length) {
      setLoading(true);
      const response = await shortenUrl(url);
      setLoading(false)
      if (response?.status === SUCCESS_RESPONSE) {
        onSUbmitSuccess(response, url);
      } else if (response?.status === ERROR_RESPONSE) {
        onSubmitFailure(response)
      }
    }
    else {
      //if url is already shortened, place it at beginning of list
      const urls = shortenedUrls.filter(shortenedUrl => shortenedUrl.actualUrl !== url);
      setShortenedUrls([nonUnique[0], ...urls])
      setUrlStatus(SUCCESS_RESPONSE);
    }
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
      {
        shortenedUrls?.length
          ? <ShortenedUrlList shortenedUrls={shortenedUrls} />
          : null
      }
      {
        loading ?
          <Loader />
          : null
      }
    </HomeContainer>
  )
}

export default Home
