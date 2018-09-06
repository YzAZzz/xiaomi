window.onload=function () {
    let imgs = document.querySelectorAll(".imgs img");
    let dots = document.querySelectorAll(".second .left .dot a");
    let banner = document.querySelector(".second .container");
    let leftBtn = document.querySelector(".btn .left");
    let rightBtn = document.querySelector(".btn .right");
    let widths = parseInt(getComputedStyle(imgs[0], null).width);
    // console.log(imgs,dots,banner,leftBtn,rightBtn,widths);
    imgs[0].style.left = "0";
    dots[0].classList.add("active");
    let now = 0;
    let next = 0;
    let flag = true;
    let t = setInterval(move, 2000);

    function move() {
        next++;
        if (next == imgs.length) {
            next = 0;
        }
        imgs[next].style.left = widths + "px";
        animate(imgs[now], {left: -widths});
        animate(imgs[next], {left: 0}, function () {
            flag = true;
        });
        dots[now].classList.remove("active");
        dots[next].classList.add("active");
        now = next;
    }

    function moveL() {
        next--;
        if (next < 0) {
            next = imgs.length - 1;
        }
        imgs[next].style.left = -widths + "px";
        animate(imgs[now], {left: widths});
        animate(imgs[next], {left: 0}, function () {
            flag = true;
        });
        dots[now].classList.remove("active");
        dots[next].classList.add("active");
        now = next;
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].onmouseover = function () {
            if (flag) {
                for (let j = 0; j < dots.length; j++) {
                    dots[j].classList.remove("active");
                    imgs[j].style.left = widths + "px";
                }
                dots[i].classList.add("active");
                imgs[i].style.left = "0";
                now = i;
                next = i;
            }
        }
    }
    leftBtn.onclick = function () {
        if (!flag) {
            return;
        }
        flag = false;
        moveL();
    }
    rightBtn.onclick = function () {
        if (!flag) {
            return;
        }
        flag = false;
        move();
    }
    banner.onmouseenter = function () {
        clearInterval(t);
    }
    banner.onmouseleave = function () {
        t = setInterval(move, 2000);
    }


    //小1
    let xiaolunbo=function (oneimgs,onedots,oneleftbtn,onerightbtn,onewidths,num) {
        let onenow = 0;
        let onenext = 0;
        let oneflag = true;
        for (let i = 0; i < onedots.length; i++) {
            onedots[i].onclick = function () {
                for (let j = 0; j < onedots.length; j++) {
                    onedots[j].classList.remove("active");
                    oneimgs[j].style.left = onewidths + "px";
                }
                onedots[i].classList.add("active");
                oneimgs[i].style.left = "0";
                onenow = onenext;
            }
        }
        oneimgs[0].style.left = "0";
        onedots[0].classList.add("active");

        function onemove() {
            onenext++;
            if (onenext == num) {
                return;
            }
            oneimgs[onenext].style.left = onewidths + "px";
            animate(oneimgs[onenow], {left: -onewidths});
            animate(oneimgs[onenext], {left: 0}, function () {
                oneflag = true;
            });
            onedots[onenow].classList.remove("active");
            onedots[onenext].classList.add(("active"));
            onenow = onenext;
        }

        onerightbtn.onclick = function () {
            if (!oneflag) {
                return;
            }
            oneflag = false;
            onemove();
        }

        function onemoveL() {
            onenext--;
            if (onenext < 0) {
                return;
            }
            oneimgs[onenext].style.left = -onewidths + "px";
            animate(oneimgs[onenow], {left: onewidths});
            animate(oneimgs[onenext], {left: 0}, function () {
                oneflag = true;
            });
            onedots[onenow].classList.remove("active");
            onedots[onenext].classList.add(("active"));
            onenow = onenext;
        }

        oneleftbtn.onclick = function () {
            if (!oneflag) {
                return;
            }
            oneflag = false;
            onemoveL();
        };
    }
    let oneimgs = document.querySelectorAll(".recommendation .one .num_1 .banner .master");
    let onedots = document.querySelectorAll(".recommendation .one .num_1 .dot li");
    let oneleftbtn = document.querySelectorAll(".recommendation .one .num_1 .one")[0];
    let onerightbtn = document.querySelectorAll(".recommendation .one .num_1 .one_1")[0];
    let onewidths = parseInt(getComputedStyle(oneimgs[0], null).width);
    xiaolunbo(oneimgs,onedots,oneleftbtn,onerightbtn,onewidths,3);

    //2
    let twoimgs = document.querySelectorAll(".recommendation .two .num_1 .banner .master");
    let twodots = document.querySelectorAll(".recommendation .two .num_1 .dot li");
    let twoleftbtn = document.querySelectorAll(".recommendation .two .num_1 .two")[0];
    let tworightbtn = document.querySelectorAll(".recommendation .two .num_1 .two_2")[0];
    let twowidths = parseInt(getComputedStyle(twoimgs[0], null).width);
    xiaolunbo(twoimgs,twodots,twoleftbtn,tworightbtn,twowidths,3);

    //3
    let threeimgs = document.querySelectorAll(".recommendation .three .num_1 .banner .master");
    let threedots = document.querySelectorAll(".recommendation .three .num_1 .dot li");
    let threeleftbtn = document.querySelectorAll(".recommendation .three .num_1 .three")[0];
    let threerightbtn = document.querySelectorAll(".recommendation .three .num_1 .three_3")[0];
    let threewidths = parseInt(getComputedStyle(threeimgs[0], null).width);
    xiaolunbo(threeimgs,threedots,threeleftbtn,threerightbtn,threewidths,3);

    //4
    let fourimgs = document.querySelectorAll(".recommendation .four .num_1 .banner .master");
    let fourdots = document.querySelectorAll(".recommendation .four .num_1 .dot li");
    let fourleftbtn = document.querySelectorAll(".recommendation .four .num_1 .four")[0];
    let fourrightbtn = document.querySelectorAll(".recommendation .four .num_1 .four_4")[0];
    let fourwidths = parseInt(getComputedStyle(fourimgs[0], null).width);
    xiaolunbo(fourimgs,fourdots,fourleftbtn,fourrightbtn,fourwidths,3);


    //为你推荐
    let rightList = document.querySelector(".longer");
    let leftBtn_one = document.querySelector(".oBtn_left");
    let rightBtn_one = document.querySelector(".oBtn_right");
    // console.log(rightList);
    let w = parseInt(getComputedStyle(rightList, null).width) / 4;
    // console.log(w);
    let times = 0;
    rightBtn_one.onclick = function () {
        times++;
        if (times >= 4) {
            times = 3;
        }
        rightList.style.transform = `translate(${-w * times}px)`;
    }
    leftBtn_one.onclick = function () {
        times--;
        if (times < 0) {
            times = 0;
        }
        rightList.style.transform = `translate(${-w * times}px)`;
    }


    //小米闪购
    let rightList_o = document.querySelector(".quite .phone1");
    let leftBtn_two = document.querySelector(".quite .tBtn_left");
    let rightBtn_two = document.querySelector(".quite .tBtn_right");
    // console.log(rightList);
    let ow = parseInt(getComputedStyle(rightList_o, null).width) / 2;
    // console.log(ow);
    let times_o = 0;
    rightBtn_two.onclick = function () {
        times_o++;
        if (times_o >= 2) {
            times_o = 1;
        }
        rightList_o.style.transform = `translate(${-ow * times_o}px)`;
    }
    leftBtn_two.onclick = function () {
        times_o--;
        if (times_o < 0) {
            times_o = 0;
        }
        rightList_o.style.transform = `translate(${-ow * times_o}px)`;
    }


    //选项卡
    let lists=document.querySelectorAll(".second .left .item");
    let sons=document.querySelectorAll(".second .left ul li .son");
    // console.log(lists,sons);
    for (let i=0;i<lists.length;i++){
        lists[i].onmouseover=function(){
            for (let j=0;j<sons.length;j++){
                sons[j].style.display="none";
            }
            sons[i].style.display="inline";
        }
        lists[i].onmouseout=function(){
            sons[i].style.display="none";
        }
    }


    //back
    let backs=document.querySelectorAll(".ding li")[3];
    console.log(backs);
    backs.onclick=function () {
        animate(document.body,{scrollTop:0},0);
        animate(document.documentElement,{scrollTop:0},0);
    }

//加点
    let bot = document.querySelectorAll("main .home .top a");
    let ols = document.querySelectorAll("main .container .home .bottom ol");
    console.log(bot,ols);
    bot[0].classList.add("a1");
    ols[0].style.display = "flex";
    for (let i = 0; i < bot.length; i++) {
        bot[i].onmouseover = function () {
            for (let j = 0; j < bot.length; j++) {
                bot[j].classList.remove("a1");
                ols[j].style.display = "none";
            }
            bot[i].classList.add("a1");
            ols[i].style.display = "flex";
        }
    }

};
//back
window.onscroll=function () {
    let dongs=document.body.scrollTop||document.documentElement.scrollTop;
    let backss=document.querySelectorAll(".ding li")[3];
    if (dongs>1200){
        backss.style.display="block";
    }else {
        backss.style.display="none";

    }
};





