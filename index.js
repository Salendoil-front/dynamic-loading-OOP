import GlobalScroll from './lazyLoadOOP.js'

const words = [
	'lol',
	'Hello',
	'World',
	'Price',
	'Kirrill',
	'Job',
	'Work',
	'lol',
	'Hello',
	'World',
	'Price',
	'Kirrill',
	'Job',
	'Work',
	'lol',
	'Hello',
	'World',
	'Price',
	'Kirrill',
	'Job',
	'Work',
	'lol',
	'Hello',
	'World',
	'Price',
	'Kirrill',
	'Job',
	'Work',
]

const words2 = [
	'Robot',
	'mama',
	'papa',
	'sister',
	'bto',
	'lol',
]

const imagesRender = (word) => {
	return (
		`
		<span>AHahahhahahahahha ${word} </span>
		`
	)
}

const render = (arr) => {
	arr.forEach(item => {
		document.getElementById('root').innerHTML += imagesRender(item)
	})
}
render(words)



const funcForScroll = new GlobalScroll().ready(() => {
	render(words2)
})


