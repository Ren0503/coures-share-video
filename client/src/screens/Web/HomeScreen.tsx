import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import * as videoService from '../../services/videoServices'
import VideoItem from '../../components/video/VideoItem'
import { Video } from '../../@types/Video'

import Lottie from 'lottie-react-web'
import notFound from '../../assets/animated/404.json'

const HomeScreen = () => {
    const [loading, setLoading] = useState(true)
    const [videos, setVideos] = useState<Video[]>([])
    const [limit, setLimit] = useState(6)

    const showMoreDocuments = () => {
        setLimit(limit + 3)
    }

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
            There are no courses yet
            <Lottie options={{ animationData: notFound }} />
        </div>

    return (
        <main>
            <div className="row">
                <div className="col-12">
                    <h2 className="tm-page-title mb-4">All Courses Catalog</h2>
                    <div className="tm-categories-container mb-5">
                        <h3 className="tm-text-primary tm-categories-text">Categories:</h3>
                        <ul className="nav tm-category-list">
                            <li className="nav-item tm-category-item">
                                <Link to="/" className="nav-link tm-category-link">All</Link>
                            </li>
                            <li className="nav-item tm-category-item">
                                <Link to="/category/frontend" className="nav-link tm-category-link">Frontend</Link>
                            </li>
                            <li className="nav-item tm-category-item">
                                <Link to="/category/backend" className="nav-link tm-category-link">Backend</Link>
                            </li>
                            <li className="nav-item tm-category-item">
                                <Link to="/category/mobile" className="nav-link tm-category-link">Mobile</Link>
                            </li>
                            <li className="nav-item tm-category-item">
                                <Link to="/category/devops" className="nav-link tm-category-link">DevOps</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="row tm-catalog-item-list">
                {videos.slice(0, limit).map((video) => (
                    <VideoItem video={video} key={video._id} loadVideos={loadVideos} />
                ))}
            </div>
            <button
                type="button"
                className="btn btn-info my-auto"
                onClick={showMoreDocuments}
            >
                show more
            </button>
        </main>
    )
}

export default HomeScreen