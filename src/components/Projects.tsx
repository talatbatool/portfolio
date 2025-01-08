import React from 'react'
import heading from './heading'
import Card from './Card'

const Projects = () => {
    const data = [
        {
            id:0,
            title: "Resume builder",
            desc: "first hackathon project",
            img: "/image234.png",
            tags:["html,css"]

        },
        {
            id:1,
            title:"governor website",
            desc: "A next.js and typescript powered website",
            img:"/image345.png",
            tags:["next.js ,telwind css,typescript"]
        }
    ]
  return (
    <div id='Projects' className="container pt-32 font-bold text-center justify-center text-5xl">
        <h1 className='te'>my projects</h1>
        
        <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
            {data.map((el)=> (<Card
            key={el.id}
            title={el.title}
            desc={el.desc}
            img={el.img}
            tags={el.tags}
              
            
            />))}
        </div>
      
    </div>
  )
}

export default Projects
