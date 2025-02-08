import React from 'react'
import HeroFrame from '../Components/HeroFrame'
import VideoGallery from '../Components/VideoCard'

const ProjectsVideo = () => {
  return (
    <>
        <HeroFrame heading={"Project Videos"} secondHeading={"Home / Project Videos"} fromStatus={false}/>

        <section className="h-fit w-full bg-[#0841bd24]">
        <div className="container lg:p-8 p-2 h-full w-full flex justify-center flex-col m-auto">
          <div className="showcase m-auto flex justify-center">
            <div className="allCards ">
              <VideoGallery />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ProjectsVideo