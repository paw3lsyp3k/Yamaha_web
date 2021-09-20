

/* animations */
var tl1= new TimelineMax({onUpdate:updatePercentage});
var tl2= new TimelineMax({onUpdate:updatePercentage});
const controller = new ScrollMagic.Controller();

tl1.from('.counterBox', .1, { y: 400, opacity: 0});
tl2.from('.goUp', .1, { x: 400, opacity: 0});

const scene1 = new ScrollMagic.Scene({
	triggerElement: '#trigger1',
	triggerHook: "onEnter",
	duration: "100%"
})

.setTween(tl1)
.addTo(controller);

const scene2 = new ScrollMagic.Scene({
	triggerElement: '#trigger1',
	triggerHook: "onLeave",
	duration: "50%"
})

.setTween(tl2)
.addTo(controller);

function updatePercentage() {
	tl1.progress();
	if(tl1.progress() === 1){
	}
};


/* counter */
const counters = document.querySelectorAll('.counter');
		counters.forEach(counter => {
		// start with 0 by default
			counter.innerText = '0';
			const updateCounter = () => {
			const target = +counter.getAttribute('data-target');
			const x = +counter.innerText;
			// speed
			const increment = target / 100;
		
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
};

const reviewMinus = () => {
	value -= 1;
	if(value >= 1){
		reviewCheck()
	} else {
		value = 1;
	}
};

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
};

/* Gallery script*/
