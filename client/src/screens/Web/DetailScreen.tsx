import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import ReactPlayer from 'react-player'

import * as videoService from '../../services/videoServices'
import { Video } from '../../@types/Video'

type InputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

interface Params {
    id?: string
}

const DetailScreen = () => {
    const initialState = {
        title: "",
        category: "",
        image: "",
        description: "",
        url: "",
    }

    const [video, setVideo] = useState<Video>(initialState)

    const history = useHistory()
    const params = useParams<Params>()

    const getVideo = async (id: string) => {
        const res = await videoService.getVideoById(id)
        const { title, category, image, description, url, views } = res.data
        setVideo({ title, category, image, description, url, views })
    }

    useEffect(() => {
        if (params.id) getVideo(params.id)
    }, [params.id])

    const handleInputChange = (e: InputChange) =>
        setVideo({ ...video, [e.target.name]: e.target.value })

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!params.id) {
            await videoService.createNewVideo(video)
            setVideo(initialState)
            toast.success("New Video Added")
        } else {
            await videoService.updateVideo(params.id, video)
        }
        history.push("/videos")
    }

    return (
        <>
        <div className="row mb-5 pb-4">
            <div className="col-12">
            <div className="embed-responsive embed-responsive-16by9">
                    <ReactPlayer url={video.url} controls={true} width="1442" height="800" />
                </div>
            </div>
        </div>
        <div className="row mb-5 pb-5">
            <div className="col-xl-8 col-lg-7">
                {/* Video description */}
                <div className="tm-video-description-box">
                    <h2 className="mb-5 tm-video-title">{video.title}</h2>
                    <p className="mb-4">{video.description}</p>
                </div>
            </div>
            <div className="col-xl-4 col-lg-5">
                {/* Share box */}
                <div className="tm-bg-gray tm-share-box">
                    <h6 className="tm-share-box-title mb-4">Share this video</h6>
                    <div className="mb-5 d-flex">
                        <a href="#" className="tm-bg-white tm-share-button"><i className="fab fa-facebook" /></a>
                        <a href="#" className="tm-bg-white tm-share-button"><i className="fab fa-twitter" /></a>
                        <a href="#" className="tm-bg-white tm-share-button"><i className="fab fa-pinterest" /></a>
                        <a href="#" className="tm-bg-white tm-share-button"><i className="far fa-envelope" /></a>
                    </div>
                    <p className="mb-4">Category: </p>
                    <a href="#" className="tm-bg-white px-5 mb-4 d-inline-block tm-text-primary tm-likes-box tm-liked">
                        <i className="fas fa-heart mr-3 tm-liked-icon" />
                        <i className="far fa-heart mr-3 tm-not-liked-icon" />
                        <span id="tm-likes-count">{video.views} views</span>
                    </a>
                    <div>
                        <button className="btn btn-primary p-0 tm-btn-animate tm-btn-download tm-icon-download"><span>Download Video</span></button>
                    </div>
                </div>
            </div>
        </div>

        </>
    )
}

export default DetailScreen
