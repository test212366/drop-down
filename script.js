const section = function createSection(data) {
	const sectionWrap = document.createElement('div')
	sectionWrap.classList.add('section')
	sectionWrap.insertAdjacentHTML('afterbegin', `
		<div class="sectionN">${data.title}
			
		</div>
		<div class="drop__menu">
				<ul>
					<li>${data.node}</li>
					<li>${data.react}</li>
					<li>${data.vue}</li>
				</ul>
			</div>
	`
	)
	document.body.appendChild(sectionWrap)
	return sectionWrap
}
section({
	title: 'select element',
	node: 'node.js',
	react: 'react.js',
	vue: 'vue.js'
})
const buttonActive = document.querySelector('.section')
const sec = document.querySelector('.section')
sec.addEventListener('click', activeSection)



function activeSection() {
	sec.classList.toggle('active')
}

