export interface ISmallBannerItem {
	id: number
	title: string
	icon: React.FC<React.SVGProps<SVGSVGElement>>
}
export interface IWorkItem {
	id: number
	title: string
	img: string
}
export interface ICatalogItem extends IWorkItem {}
export interface IServiceItem {
	id: number
	title: string
	price: string
	waitingTime: string
}

export interface IReviewItem {
	id: number
	icon: string
	name: string
	description: string
}

export interface Option {
	value: string
	label: string
}
