type CardProps = {
	name?: string;
	price?: string;
	availability?: string;
};
export function Card({
	name = 'Прайм арк фридом',
	price = '00,00',
	availability = 'in stock',
}: CardProps) {
	return (
		<div className='grid grid-cols-12 gap-x-4 bg-neutral-500 rounded-lg mb-2 overflow-hidden'>
			<div className='col-span-4 row-span-1 bg-neutral-600 '></div>
			<div className='col-span-8 row-span-1 flex flex-col gap-2 py-4'>
				<div className='text-lg font-semibold text-nowrap'>{name}</div>
				<div className='item-values flex gap-x-3'>
					{/* <div className='flex flex-col'>
						<div className='text-[10px] uppercase'>{'цена'}</div>
						<div className='text-base tracking-wide font-normal uppercase'>
							{price}
						</div>
					</div>
					<div className='flex flex-col'>
						<div className='text-[10px] uppercase'>{'наличие'}</div>
						<div className='text-xs font-semibold uppercase'>
							{availability}
						</div>
					</div> */}
					<div className='grid grid-cols-8 grid-rows-2 gap-x-4'>
						<div className='col-span-2 row-span-1 row-start-1'>{'цена'}</div>
						<div className='col-span-4 row-span-1'>{'наличие'}</div>
						<div className='col-span-2 row-span-1 row-start-2 self-center'>
							{price}
						</div>
						<div className='col-span-4 row-span-1 self-center'>
							{availability}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
