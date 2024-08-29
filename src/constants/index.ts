import { ReactComponent as RepairIcon } from "../assets/icon/repair-icon.svg"
import { ReactComponent as CashIcon } from "../assets/icon/cash-icon.svg"
import { ReactComponent as SettingsIcon } from "../assets/icon/settings-icon.svg"
import WorkItem from "../assets/img/work-item-1.svg"
import WorkItem2 from "../assets/img/work-item-2.svg"
import WorkItem3 from "../assets/img/work-item-3.svg"
import WorkItem4 from "../assets/img/work-item-4.svg"
import CatalogItem from "../assets/img/catalog-item.png"
import ReviewItemIcon from "../assets/icon/slider-icon.svg"

export const headerMenuItem = [
	{ id: 1, title: "Наши услуги" },
	{ id: 2, title: "Бренды" },
	{ id: 3, title: "Отзывы " },
]
export const smallBannerItems = [
	{
		id: 1,
		title: "Ремонт и консультация на месте",
		icon: RepairIcon,
	},
	{
		id: 2,
		title: "Нет скрытых платежей и переплат",
		icon: CashIcon,
	},
	{
		id: 3,
		title: "Собственный склад запчастей",
		icon: SettingsIcon,
	},
]

export const workItems = [
	{ id: 1, title: "Уточняем проблему и проводим диагностику", img: WorkItem },
	{ id: 2, title: "Согласовываем цену и сроки ремонта", img: WorkItem2 },
	{ id: 3, title: "Осуществляем ремонт", img: WorkItem3 },
	{ id: 4, title: "Отдаем устройство с новыми деталями", img: WorkItem4 },
]

export const catalogItems = [
	{ id: 1, title: "20 Pro 8/256Gb Phantom Blue", img: CatalogItem },
	{ id: 2, title: "20 Pro 8/256Gb Phantom Blue", img: CatalogItem },
	{ id: 3, title: "20 Pro 8/256Gb Phantom Blue", img: CatalogItem },
	{ id: 4, title: "20 Pro 8/256Gb Phantom Blue", img: CatalogItem },
	{ id: 5, title: "20 Pro 8/256Gb Phantom Blue", img: CatalogItem },
	{ id: 6, title: "20 Pro 8/256Gb Phantom Blue", img: CatalogItem },
	{ id: 7, title: "20 Pro 8/256Gb Phantom Blue", img: CatalogItem },
	{ id: 8, title: "20 Pro 8/256Gb Phantom Blue", img: CatalogItem },
]

export const servicesItems = [
	{
		id: 1,
		title: "Замена light сенсора на телефоне",
		price: "1 000 - 3 000 ₽",
		waitingTime: "1-3 дня",
	},
	{
		id: 2,
		title: "Замена light сенсора на телефоне",
		price: "1 000 - 3 000 ₽",
		waitingTime: "1-3 дня",
	},
	{
		id: 3,
		title: "Замена light сенсора на телефоне",
		price: "1 000 - 3 000 ₽",
		waitingTime: "1-3 дня",
	},
	{
		id: 4,
		title: "Замена light сенсора на телефоне",
		price: "1 000 - 3 000 ₽",
		waitingTime: "1-3 дня",
	},
	{
		id: 5,
		title: "Замена дисплея на телефоне",
		price: "1 000 - 3 000 ₽",
		waitingTime: "1-3 дня",
	},
	{
		id: 6,
		title: "Замена дисплея на телефоне",
		price: "1 000 - 3 000 ₽",
		waitingTime: "1-3 дня",
	},
	{
		id: 7,
		title: "Замена дисплея на телефоне",
		price: "1 000 - 3 000 ₽",
		waitingTime: "1-3 дня",
	},
	{
		id: 8,
		title: "Замена дисплея на телефоне",
		price: "1 000 - 3 000 ₽",
		waitingTime: "1-3 дня",
	},
	{
		id: 9,
		title: "Замена батареи на телефоне",
		price: "1 000 - 3 000 ₽",
		waitingTime: "1-3 дня",
	},
	{
		id: 10,
		title: "Замена батареи на телефоне",
		price: "1 000 - 3 000 ₽",
		waitingTime: "1-3 дня",
	},
]

export const reviewItems = [
	{
		id: 1,
		name: "Владимир",
		description:
			"Чинят не только мобильную технику, что очень порадовало! Перепаяли порт на midi-контроллере, все качественно и быстро! Очень выручили :)",
		icon: ReviewItemIcon,
	},
	{
		id: 2,
		name: "Владимир",
		description:
			"Чинят не только мобильную технику, что очень порадовало! Перепаяли порт на midi-контроллере, все качественно и быстро! Очень выручили :)",
		icon: ReviewItemIcon,
	},
	{
		id: 3,
		name: "Владимир",
		description:
			"Чинят не только мобильную технику, что очень порадовало! Перепаяли порт на midi-контроллере, все качественно и быстро! Очень выручили :)",
		icon: ReviewItemIcon,
	},
	{
		id: 4,
		name: "Владимир",
		description:
			"Чинят не только мобильную технику, что очень порадовало! Перепаяли порт на midi-контроллере, все качественно и быстро! Очень выручили :)",
		icon: ReviewItemIcon,
	},
]

export const selectItemModel = [
	{
		value: "iphone",
		label: "Iphone",
	},
	{
		value: "honor",
		label: "Honor",
	},
	{
		value: "asus",
		label: "Asus",
	},
]
export const selectItemBrand = [
	{
		value: "apple",
		label: "Apple",
	},
	{
		value: "samsung",
		label: "Samsung",
	},
	{
		value: "xiomy",
		label: "Xiomy",
	},
]
export const selectItemTechnic = [
	{
		value: "smartfon",
		label: "Смартфон",
	},
	{
		value: "tv",
		label: "Телевизор",
	},
	{
		value: "laptop",
		label: "Ноутбук",
	},
]

export const searchItems = [
	{ value: "iphone", label: "Iphone" },
	{ value: "honor", label: "Honor" },
	{ value: "asus", label: "Asus" },
	{ value: "apple", label: "Apple" },
	{ value: "samsung", label: "Samsung" },
	{ value: "xiomy", label: "Xiomy" },
	{ value: "smartfon", label: "Смартфон" },
	{ value: "tv", label: "Телевизор" },
	{ value: "laptop", label: "Ноутбук" },
]
