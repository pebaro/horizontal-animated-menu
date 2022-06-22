const list_1 = document.querySelectorAll('.nav--1 .list')
const list_2 = document.querySelectorAll('.nav--2 .list')
const list_3 = document.querySelectorAll('.nav--3 .list')

function activeLinkList1 () {
	list_1.forEach(
		item => item.classList.remove('active')
	)
	this.classList.add('active')
}

list_1.forEach(
	item => item.addEventListener('click', activeLinkList1)
)


function activeLinkList2 () {
	list_2.forEach(
		item => item.classList.remove('active')
	)
	this.classList.add('active')
}

list_2.forEach(
	item => item.addEventListener('click', activeLinkList2)
)


function activeLinkList3 () {
	list_3.forEach(
		item => item.classList.remove('active')
	)
	this.classList.add('active')
}

list_3.forEach(
	item => item.addEventListener('click', activeLinkList3)
)
