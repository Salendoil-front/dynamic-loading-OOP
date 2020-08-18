export default class GlobalScroll{

	ready(renderCallBack){
		function onLoad(callBack){
			let maxHeight = document.documentElement.getBoundingClientRect().bottom
			let clientHeight = document.documentElement.clientHeight + 100
			if(maxHeight < clientHeight){
				console.log("lel")
				callBack()
			}
		}
		window.addEventListener('scroll', function(){
			onLoad(renderCallBack)
		})
	}
}