import { Response, RequestHandler } from 'express'
import Video from '../models/video.model'

export const getVideos: RequestHandler = async (req, res) => {
    try {
        const keyword = req.query.keyword
            ? {
                category: {
                    $regex: req.query.keyword,
                    $options: 'i',
                },
            }
            : {}
        const videos = await Video.find({ ...keyword })

        return res.json(videos)
    } catch (error) {
        res.json(error)
    }
}

export const getVideo: RequestHandler = async (req, res) => {
    const videoFound = await Video.findById(req.params.id)

    if (!videoFound)
        return res.status(204).json()

    return res.json(videoFound)
}


export const createVideo: RequestHandler = async (req, res) => {
    const videoFound = await Video.findOne({ url: req.body.url })
    if (videoFound)
        return res.status(303).json({ message: "The url is already exist! " })

    const newVideo = new Video(req.body)
    const savedVideo = await newVideo.save()
    res.json(savedVideo)
}

export const updateVideo: RequestHandler = async (
    req,
    res
): Promise<Response> => {
    const videoUpdate = await Video.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })

    if (!videoUpdate)
        return res.status(204).json()
    return res.json(videoUpdate)
}

export const deleteVideo: RequestHandler = async (req, res) => {
    const videoFound = await Video.findByIdAndDelete(req.params.id)

    if (!videoFound)
        return res.status(204).json()

    return res.status(204).json()
}

export const incrementViews: RequestHandler = async (
    req, 
    res
): Promise<Response> => {
    const videoUpdate = await Video.findByIdAndUpdate(req.params.id, 
        { $inc: {"views": 1} }, 
        { new: true })

    if (!videoUpdate)
        return res.status(204).json()
    return res.json(videoUpdate)
}