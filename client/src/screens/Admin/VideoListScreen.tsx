import React, { useEffect, useState } from 'react'

import * as videoService from '../../services/videoServices'
import VideoAuth from '../../components/video/VideoAuth'
import { Video } from '../../@types/Video'

const VideoListScreen = () => {
    const [loading, setLoading] = useState(true)
    const [videos, setVideos] = useState<Video[]>([])

    const loadVideos = async () => {
        const res = await videoService.getVideos()

        const formatVideos = res.data.map((video) => {
            return {
                ...video,
                createdAt: video.createdAt ? new Date(video.createdAt) : new Date(),
                updatedAt: video.updatedAt ? new Date(video.updatedAt) : new Date(),
            }
        }).sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())

        setVideos(formatVideos)
        setLoading(false)
    }

    useEffect(() => {
        loadVideos()
    }, [])

    if (loading)
        return (
            <div className="row">
                <div className="col-md-12 my-auto">
                    <div className="spinner-grow text-primary" role="status">
                        <span className="sr-only">Loading ...</span>
                    </div>
                </div>
            </div>
        )

    if (videos.length === 0)
        return <div>There are no videos yet</div>

    return (
        <div className="row">
            {videos.map((video) => (
                <VideoAuth video={video} key={video._id} loadVideos={loadVideos} />
            ))}
        </div>
    )
}

export default VideoListScreen