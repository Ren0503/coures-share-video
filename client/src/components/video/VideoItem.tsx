import React from 'react'
import ReactPlayer from 'react-player'
import { Link, useHistory } from 'react-router-dom'

import * as videoService from '../../services/videoServices'
import { Video } from '../../@types/Video'

interface Props {
    video: Video
    loadVideos: () => void
}

const VideoItem = (props: Props) => {
    const { video, loadVideos } = props
    const history = useHistory()

    const handleDelete = async (id: string) => {
        await videoService.deleteVideoById(id)
        loadVideos()
    }

    return (
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
    )
}

export default VideoItem
