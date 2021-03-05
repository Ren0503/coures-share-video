import React, { useEffect, useState } from 'react'

import * as videoService from '../../services/videoServices'
import VideoItem from '../../components/video/VideoItem'
import { Video } from '../../@types/Video'

const HomeScreen = () => {
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
        <main>
            <div className="row">
                <div className="col-12">
                    <h2 className="tm-page-title mb-4">Our Video Catalog</h2>
                    <div className="tm-categories-container mb-5">
                        <h3 className="tm-text-primary tm-categories-text">Categories:</h3>
                        <ul className="nav tm-category-list">
                            <li className="nav-item tm-category-item"><a href="#" className="nav-link tm-category-link active">All</a></li>
                            <li className="nav-item tm-category-item"><a href="#" className="nav-link tm-category-link">Drone Shots</a></li>
                            <li className="nav-item tm-category-item"><a href="#" className="nav-link tm-category-link">Nature</a></li>
                            <li className="nav-item tm-category-item"><a href="#" className="nav-link tm-category-link">Actions</a></li>
                            <li className="nav-item tm-category-item"><a href="#" className="nav-link tm-category-link">Featured</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="row tm-catalog-item-list">
                {videos.map((video) => (
                    <VideoItem video={video} key={video._id} loadVideos={loadVideos} />
                ))}
            </div>
        </main>
    )
}

export default HomeScreen