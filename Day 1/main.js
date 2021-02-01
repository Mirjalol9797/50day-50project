// const panels = document.querySelectorAll('.panel');

// panels.forEach(function(panel) {
// 	panel.addEventListener('click', function(){
// 		removeActiveClasses()
// 		panel.classList.add('active')
// 	})
// })

// function removeActiveClasses() {
// 	panels.forEach(function(panel){
// 		panel.classList.remove('active')
// 	})
// }


// // for(let i=0; i<panels.length; i++) {
// // 	panels[i].addEventListener('click', function() {
// // 		console.log('iii')
// // 	}) 
// // }


let panels = document.querySelectorAll('.panel');

panels.forEach(function(panel) {
	panel.onclick = function(){
		removeActiveClasses()
		panel.classList.add('active')
	}
})

function removeActiveClasses() {
	panels.forEach(function(panel){
		panel.classList.remove('active')
	})
}









































