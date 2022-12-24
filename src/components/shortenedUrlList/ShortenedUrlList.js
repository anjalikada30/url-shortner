import React from 'react';
import { ShortenedUrl } from '../shortenedUrl';
import './styles.css';

function ShortenedUrlList({ shortenedUrls }) {
    return (
        <>
            {
                shortenedUrls.length ?
                    <div className='urls_container'>
                        {
                            shortenedUrls?.map(url => (
                                <React.Fragment key={url.id}>
                                    <ShortenedUrl url={url} />
                                </React.Fragment>
                            ))
                        }
                    </div>
                    : null
            }
        </>
    )
}

export default ShortenedUrlList
