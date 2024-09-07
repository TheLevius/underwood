'use client';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { Card } from './cards/Card';
import Image from 'next/image';
import {
	Disclosure,
	DisclosureButton,
	DisclosurePanel,
} from '@headlessui/react';

const images = [
	'/images/content/jpg/IMG_3809.jpg',
	'/images/content/jpg/IMG_3811.jpg',
	'/images/content/jpg/IMG_3982.jpg',
];

const items = [
	{ name: 'Прайм арк фридом', availability: 'В наличии', price: '99,99' },
	{ name: 'Натчез', availability: 'В наличии', price: '99,99' },
	{ name: 'Карака блэк', availability: 'В наличии', price: '99,99' },
];

export function Category({ name = 'Голубика' }: { name?: string }) {
	const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);
	return (
		<Disclosure>
			<DisclosureButton>
				<h2 className='text-2xl text-left font-normal uppercase my-4'>
					{name}
				</h2>
			</DisclosureButton>
			<DisclosurePanel>
				<div
					className='embla overflow-hidden rounded-lg mt-4 mb-8'
					ref={emblaRef}
				>
					<div className='embla__container flex'>
						{images.map((img, i) => (
							<Image
								key={i}
								className='embla__slide shrink-0 grow-0 basis-full'
								width='1080'
								height='1440'
								alt='something'
								src={img}
							/>
						))}
					</div>
				</div>
				{items.map(({ name, availability, price }, el) => (
					<Card
						name={name}
						availability={availability}
						price={price}
						key={el}
					/>
				))}
			</DisclosurePanel>
		</Disclosure>
	);
}
