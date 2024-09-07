import { CardFull } from './cards/CardFull';
import { Category } from './Category';

export function Catalog() {
	return (
		<div className='flex flex-col px-4 bg-neutral-400'>
			<Category />
			<CardFull />
		</div>
	);
}
