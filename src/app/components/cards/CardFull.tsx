import { Button } from '../Button';

export function CardFull() {
	return (
		<div className='flex flex-col rounded-lg overflow-hidden'>
			<div className='pb-[100%] bg-neutral-300'></div>
			<div className='flex flex-col bg-neutral-500 p-4'>
				<div className='text-xs uppercase'>{'сорт'}</div>
				<h1 className='text-xl font-semibold'>{'Прайм арк фридом'}</h1>
				<div className='mt-4'>
					{
						'Прайм Арк Фридом — американская ежевика, которая два раза за сезон дает урожай: на побегах сначала первого, затем второго года. До него в промышленных масштабах бесшипных ремонтантных сортов не выращивали. Адаптирован к теплому климату. Рекомендован к разведению для личного потребления или маленькими фермами для ближайшего рынка. ...Читать полностью'
					}
				</div>
				<div className='text-xs uppercase mt-4'>{'наличие:'}</div>
				<div className='text-lg uppercase'>{'В наличии'}</div>
				<div className='text-xs uppercase mt-4'>{'цена BYN:'}</div>
				<div className='text-2xl font-semibold'>{'99,99'}</div>
				<Button name='Done' />
			</div>
		</div>
	);
}
