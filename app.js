/*Counter on 2nd wrapper*/
const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
	// start with 0 by default
	counter.innerText = '0';
	
	const updateCounter = () => {
		const target = +counter.getAttribute('data-target');
		const x = +counter.innerText;
		
		// speed
		const increment = target / 300;
		
		if(x < target) {
			counter.innerText = `${Math.ceil(x + increment)}`;
			setTimeout(updateCounter, 1)
		} else {
			counter.innerText = target;
		}
	};
	
	updateCounter();
});

/*Testimonials */

let value=1;

const reviewPlus = () => {
	value += 1;
	if(value <= 3){
		reviewCheck()
	} else {
		value = 3;
	}
}

const reviewMinus = () => {
	value -= 1;
	if(value >= 1){
		reviewCheck()
	} else {
		value = 1;
	}
}

function reviewCheck(){
	const arrow1 = document.querySelector('.a1');
	const arrow2 = document.querySelector('.a2');
	const reviewBox = document.querySelector('.reviewContent');

	if(value === 1){
		arrow1.style.opacity="0";
		arrow1.style.cursor="auto";
		document.querySelector('.dot1').classList.add('active');
		document.querySelector('.dot2').classList.remove('active');
		reviewBox.classList.remove('reviewPos2');
		reviewBox.classList.add('reviewPos1');
	} else if(value === 2){
		arrow1.style.opacity="1";
		arrow2.style.opacity="1";
		arrow1.style.cursor="pointer";
		arrow2.style.cursor="pointer";
		document.querySelector('.dot1').classList.remove('active');
		document.querySelector('.dot2').classList.add('active');
		document.querySelector('.dot3').classList.remove('active');
		reviewBox.classList.remove('reviewPos1');
		reviewBox.classList.remove('reviewPos3');
		reviewBox.classList.add('reviewPos2');
	} else if(value === 3){
		arrow2.style.opacity="0";
		arrow2.style.cursor="auto";
		document.querySelector('.dot1').classList.remove('active');
		document.querySelector('.dot2').classList.remove('active');
		document.querySelector('.dot3').classList.add('active');
		reviewBox.classList.remove('reviewPos2');
		reviewBox.classList.add('reviewPos3');
	}
}


const gallery = document.getElementById('gallery');
const popup = document.getElementById('popup');
const selectedImage = document.getElementById('selectedImage');
const imageIndexes = [1,2,3,4,5,6,7,8,9];
const selectedIndex = null;

imageIndexes.forEach(i => {
	const image = document.createElement('img');
	image.src = `./assets/image${i}.jpg`;
	image.alt = 'lol';
	image.classList.add('galleryImg');

	image.addEventListener('click', () => {
		popup.style.transform = `translateY(0)`;
		selectedImage.src = `./assets/image${i}.jpg`;
	});

	gallery.appendChild(image);
});

popup.addEventListener('click', () => {
	popup.style.transform = `translateY(-100%)`;
	popup.src = '';
	popup.alt = '';
});