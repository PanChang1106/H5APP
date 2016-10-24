// JavaScript Document

function view() {
    return {
        w: document.documentElement.clientWidth,
        h: document.documentElement.clientHeight
    };
}
//焦点图
	var bannerPaly = document.getElementsByClassName('banner-paly')[0];
	var bannerLeft = bannerPaly.offsetLeft;
	var n = 0;
	setInterval(function(){
		bannerPaly.style.left = n*100+'%';
		n--;
		if(n == -3){
			n = 0;
		}
	},2000);
	
	//书城书架切换
	var bookCity = document.getElementById('bookcity');
	var bookShelf = document.getElementById('bookshelf');
	var wrapBookCity = document.getElementById('wrapBookCity');
	var wrapBookShelf = document.getElementById('wrapBookShelf');
	
	bookShelf.onclick = function(){
		wrapBookCity.style.display = 'none';
		wrapBookShelf.style.display = 'block';
		bookCity.className = '';
		bookShelf.className = 'active';
	}
	
	bookCity.onclick = function(){
		wrapBookShelf.style.display = 'none';
		wrapBookCity.style.display = 'block';
		bookShelf.className = '';
		bookCity.className = 'active';
	}
	
	//书架列表形式切换
	var oSubmit = document.getElementById('submit');
	var shelfShow = document.getElementById('shelfshow');
	var shelfList = document.getElementById('shelflist');
	var onOff = true;
	oSubmit.onclick = function(){
		if(onOff){
			oSubmit.style.backgroundImage = "url(img/icon3.png)";
			shelfShow.style.display = 'none';
			shelfList.style.display = 'block';
		}else{
			oSubmit.style.backgroundImage = "url(img/icon1.png)";
			shelfList.style.display = 'none';
			shelfShow.style.display = 'block';
		}
		onOff = !onOff;
	}
