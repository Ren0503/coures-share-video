import React from 'react'
import { ToastContainer } from 'react-toastify'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import 'bootswatch/dist/pulse/bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.css'
import 'animate.css/animate.min.css'
import './assets/styles/video.min.css'

import Header from './components/core/Header'
import Footer from './components/core/Footer'

import HomeScreen from './screens/Web/HomeScreen'
import AboutScreen from './screens/Web/AboutScreen'
import DetailScreen from './screens/Web/DetailScreen'
import ContactScreen from './screens/Web/ContactScreen'

import VideoListScreen from './screens/Admin/VideoListScreen'
import VideoEditScreen from './screens/Admin/VideoEditScreen'

function App() {
    return (
        <BrowserRouter>
            <Header />
            <div className="container-fluid">
                <div className="mx-auto tm-content-container">
                    <Switch>
                        <Route exact path={["/", "/videos"]} component={HomeScreen} />
                        <Route path="/about" component={AboutScreen} />
                        <Route path="/contact" component={ContactScreen} />
                        <Route path="/detail/:id" component={DetailScreen} />

                        <Route path="/auth/vide_list" component={VideoListScreen} />
                        <Route path="/auth/create" component={VideoEditScreen} />
                        <Route path="/auth/update/:id" component={VideoEditScreen} />
                    </Switch>
                    <ToastContainer />
                </div>
                <Footer />
            </div>
        </BrowserRouter>
    )
}

export default App;
