import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import * as videoService from '../../services/videoServices'
import VideoAuth from '../../components/video/VideoAuth'
import { Video } from '../../@types/Video'

import Lottie from 'lottie-react-web'
import notFound from '../../assets/animated/404.json'

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
        return <div>
            <Link to="/auth/create" className="btn btn-primary btn-lg active" role="button" aria-pressed="true">Create Courses</Link>
            There are no videos yet
            <Lottie options={{ animationData: notFound }} />
        </div>

    return (
        <div className="container">
            <div className="row align-items-center">
                <Link to="/auth/create" className="btn btn-primary btn-lg active" role="button" aria-pressed="true">Create Courses</Link>
                <table className="table">
                    <caption>List of courses</caption>
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Title</th>
                            <th scope="col">Url</th>
                            <th scope="col">Views</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {videos.map((video, index) => (
                            <VideoAuth index={index} video={video} key={video._id} loadVideos={loadVideos} />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default VideoListScreen