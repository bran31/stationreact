import React from 'react'
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';

export default function Twitter() {
    return (
        <>
            <TwitterTimelineEmbed
                sourceType="profile"
                screenName="NYCEMSwatch"
                options={{height: 800}}
            />
        </>
    )
}

