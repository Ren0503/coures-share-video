import React, { useEffect, useState } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'

import * as videoService from '../../services/videoServices'
import { Video } from '../../@types/Video'

import Lottie from 'lottie-react-web'
import notFound from '../../assets/animated/404.json'

interface Params {
    keyword?: string
}

const CategoryScreen = () => {
    const [loading, setLoading] = useState(true)
    const [videos, setVideos] = useState<Video[]>([])
    const [limit, setLimit] = useState(6)

    const showMoreDocuments = () => {
        setLimit(limit + 3)
    }
    const params = useParams<Params>()

    const loadVideos = async (keyword: string) => {
        const res = await videoService.getVideosCategory(keyword)

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
        if (params.keyword)
            loadVideos(params.keyword)
    }, [params.keyword])

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
            <Lottie options={{ animationData: notFound}} />
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
                    <div className="col-lg-4 col-md-6 col-sm-12 tm-catalog-item">
                        <div className="position-relative tm-thumbnail-container">
                            <img src={video.image} alt="Image" className="img-fluid tm-catalog-item-img" />
                            <Link to={`/detail/${video._id}`} className="position-absolute tm-img-overlay">
                                <i className="fas fa-play tm-overlay-icon" />
                            </Link>
                        </div>
                        <div className="p-4 tm-bg-gray tm-catalog-item-description">
                            <h3 className="tm-text-primary mb-3 tm-catalog-item-title">{video.title}</h3>
                        </div>
                    </div>
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

export default CategoryScreen