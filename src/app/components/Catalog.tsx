import { Card } from './cards/Card';
import { CardFull } from './cards/CardFull';

const items = [
	{ name: 'Прайм арк фридом', availability: 'В наличии', price: '99,99' },
	{ name: 'Натчез', availability: 'В наличии', price: '99,99' },
	{ name: 'Карака блэк', availability: 'В наличии', price: '99,99' },
];
export function Catalog() {
	return (
		<div className='flex flex-col mx-4'>
			{items.map(({ name, availability, price }, el) => (
				<Card name={name} availability={availability} price={price} key={el} />
			))}
			<CardFull />
		</div>
	);
}
