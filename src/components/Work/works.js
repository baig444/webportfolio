import React from 'react'
import './works.css'
import portfolio1 from '../../Assets/portfolio-1.png'
import portfolio2 from '../../Assets/portfolio-2.png'
import portfolio3 from '../../Assets/portfolio-3.png'
import portfolio4 from '../../Assets/portfolio-4.png'
import portfolio5 from '../../Assets/portfolio-5.png'
import portfolio6 from '../../Assets/portfolio-6.png'

const Works = () => {
  return (
   <section id="works">
    <h2 className='works-title'>My Portfolio</h2>
    <span className='worksDesc'>A web developer is a professional responsible for designing, creating, and maintaining websites or web applications. They use a combination of programming languages, frameworks, and tools to bring web-based projects to life</span>
    <div className='work-img'>
        
        <img src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*tiIKyAd8XGHkvqCNn3xIXA.png" alt='' className='worksImg'  />
        <img src="https://i.pinimg.com/564x/e6/44/0c/e6440c2b931b7688c05d7245289be8a3.jpg" alt='' className='worksImg'  />
        <img src="https://cdn.dribbble.com/users/78806/screenshots/14629438/media/3ca47e5a108bdf22650f6d5b5f1a9f60.png?resize=1600x1200&vertical=center" alt='' className='worksImg'  />
        <img src="https://i.pinimg.com/564x/29/95/00/2995008486e78b6ff55f9789cb9adb5a.jpg" alt='' className='worksImg'  />
        <img src="https://i.pinimg.com/564x/11/84/11/118411bd58023138292de65cd69a9cff.jpg" alt='' className='worksImg'  />
        <img src="https://travelbank.com/wp-content/uploads/2019/12/Cars_Desktop-1200x763.png" alt='' className='worksImg'  />
    </div>
    <button className='worksBtn'>See More</button>
   </section>
  )
}

export default Works
