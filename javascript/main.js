// scroll smooth
const scrollLinks = document.querySelectorAll('.scrollLinks');
{
    for (const scrollLink of scrollLinks){
	    scrollLink.addEventListener('click', function(event){
		    event.preventDefault(); // убирает резкое перемещение в чачало по нажатию
		    const id = scrollLink.getAttribute('href');// получаем занчение в атрибуте href, а именно #head
		    document.querySelector(id).scrollIntoView({
			    behavior: 'smooth',
			    block: 'start',
		    });
	    });
    };
}


const infa = document.querySelector('#hidden-content');// окно где инфа про меня
const removeWindow = document.querySelector('#forRemove');// ссылка, при нажатитию на которую происходить скрол
removeWindow.addEventListener('click', function (ev){
    infa.remove('.hidden'); // удоление инфы про меня при скроле
})

const skills = document.querySelector('.skills');
function scrollTo(element){
	window.scroll({
		left: 0,
		top: element.offsetTop,
		behavior: 'smooth',
	});
};

const pointStop = document.querySelector('.third_page')
skills.addEventListener('click', function(){
	scrollTo(pointStop);
});

const portfolioButton = document.querySelector('.portfolio');
const portfolioPage = document.querySelector('.fourth_page');

portfolioButton.addEventListener('click', () => {
	scrollTo(portfolioPage);
});