import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const carousalImageList = [
	{ imageUrl: '/assets/images/carousel/1.jpg', title: 'Legend' },
	{ imageUrl: '/assets/images/carousel/2.jpg', title: 'Legend' },
	{ imageUrl: '/assets/images/carousel/3.jpg', title: 'Legend' },
	{ imageUrl: '/assets/images/carousel/4.jpg', title: 'Legend' },
	{ imageUrl: '/assets/images/carousel/5.jpg', title: 'Legend' },
	{ imageUrl: '/assets/images/carousel/6.jpg', title: 'Legend' },
]

const MainCarousel = () => {
	return (
		<div>
			<div className='container'>
				<Carousel>
					{carousalImageList.map((carousalItem, index) => (
						<div>
							<img src={carousalItem.imageUrl} alt='carousal' />
							{/* <p className='legend'>{carousalItem.title}</p> */}
						</div>
					))}
				</Carousel>
			</div>
		</div>
	)
}

export default MainCarousel
