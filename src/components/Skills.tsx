import React from 'react'

const skills = () => {
  return (
    <div id="skills"className='container pt-32'>
        <div className='grid md:grid-cols-2 gap-20 items-center'>
            <div>
              
                <h2 className='text-4xl md:text-5xl data-aos="zoom-in-up'>Technology I work with</h2>
                <p className='text-gray-500 pt-2'>
                    I have a solid foundation in web development, specailizing in html, css and typescript. my exprience extends to using frame works like React and nesxt.js to create dynamic and user-frendly
                    
                </p>
            </div>
            <div>
              <div className='grid grid-cols-2 text-accent text-3xl sm:text-4xl'>
                <div className='space-y-2'>
                  <h2 data-aos="zoom-in-up">Typescript</h2>
                  <h2 data-aos="zoom-in-up">React</h2>
                  <h2 data-aos="zoom=in-up">Next.js</h2>
                  <div className='space-y-2'></div>
                  <h2 data-aos="zoom-in-up">Tailwind</h2>
                  <h2 data-aos="zoom-in-up">Css</h2>
                  <h2 data-aos="zoom-in-up">Html</h2>

                </div>

              </div>
            </div>
        </div>
      
    </div>
  )
}

export default skills
