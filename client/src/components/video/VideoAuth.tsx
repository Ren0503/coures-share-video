import React from 'react'
import { Link, useHistory } from 'react-router-dom'

import * as videoService from '../../services/videoServices'
import { Video } from '../../@types/Video'

interface Props {
    video: Video
    loadVideos: () => void
    index: number
}

const VideoAuth = (props: Props) => {
    const { video, loadVideos, index } = props
    const history = useHistory()

    const handleDelete = async (id: string) => {
        await videoService.deleteVideoById(id)
        loadVideos()
    }

    return (
        <tr>
            <td>{index+1}</td>
            <td>{video.title}</td>
            <td>{video.url}</td>
            <td>{video.views}</td>
            <td>
                <Link to={`/auth/update/${video._id}`}>
                    <button className="btn btn-warning btn-sm" type="button">
                        <i className='fas fa-edit'></i>
                    </button>
                </Link>
                <button
                    type="button"
                    className="btn btn-danger btn-sm"
                    onClick={() => video._id && handleDelete(video._id)}
                >
                    <i className='fas fa-trash'></i>
                </button>
            </td>
        </tr>
    )
}

export default VideoAuth
