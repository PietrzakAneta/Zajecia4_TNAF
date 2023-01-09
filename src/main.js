let cookiesPerSecondTotal = 0;
let cookiesPerClick = 1;
let cookiesTotal = 1;

let cookiesPerSecond_Lvl1 = 0;
let cookiesPerSecond_Lvl2 = 0;
let cookiesPerSecond_Lvl3 = 0;
let cookiesPerSecond_Lvl4 = 0;
let cookiesPerSecond_Lvl5 = 0;

let poziom_Lvl1 = 0;
let poziom_Lvl2 = 0;
let poziom_Lvl3 = 0;
let poziom_Lvl4 = 0;
let poziom_Lvl5 = 0;

let upgradeCost_Lvl1 = 10;
let upgradeCost_Lvl2 = 100;
let upgradeCost_Lvl3 = 1000;
let upgradeCost_Lvl4 = 5000;
let upgradeCost_Lvl5 = 100000;



const CookieButton = document.querySelector("#ciasteczko");

const upgradeButton_Lvl1 = document.querySelector(".ulepszenie_1_button");
const upgradeButton_Lvl2 = document.querySelector(".ulepszenie_2_button");
const upgradeButton_Lvl3 = document.querySelector(".ulepszenie_3_button");
const upgradeButton_Lvl4 = document.querySelector(".ulepszenie_4_button");
const upgradeButton_Lvl5 = document.querySelector(".ulepszenie_5_button");




CookieButton.addEventListener('click', function (){
    cookiesTotal += cookiesPerClick;
    UpdateDisplay();
})



function UpdateCookies() {
    cookiesTotal += cookiesPerSecondTotal;
    cookiesPerClick = 1 + (poziom_Lvl1 + 0.1 * cookiesPerSecondTotal);
}


function UpdateDisplay(){

    document.querySelector("#licznik_klik").innerHTML = Math.floor(cookiesPerClick);
    document.querySelector("#licznik_czas").innerHTML = Math.floor(cookiesPerSecondTotal);
    document.querySelector("#razem_ciastek").innerHTML = Math.floor(cookiesTotal);

    document.querySelector("#ciastka_na_sekunde_ulep1").innerHTML = Math.floor(cookiesPerSecond_Lvl1);
    document.querySelector("#ciastka_na_sekunde_ulep2").innerHTML = Math.floor(cookiesPerSecond_Lvl2);
    document.querySelector("#ciastka_na_sekunde_ulep3").innerHTML = Math.floor(cookiesPerSecond_Lvl3);
    document.querySelector("#ciastka_na_sekunde_ulep4").innerHTML = Math.floor(cookiesPerSecond_Lvl4);
    document.querySelector("#ciastka_na_sekunde_ulep5").innerHTML = Math.floor(cookiesPerSecond_Lvl5);

    document.querySelector(".ulepszenie1").innerHTML = poziom_Lvl1;
    document.querySelector(".ulepszenie2").innerHTML = poziom_Lvl2;
    document.querySelector(".ulepszenie3").innerHTML = poziom_Lvl3;
    document.querySelector(".ulepszenie4").innerHTML = poziom_Lvl4;
    document.querySelector(".ulepszenie5").innerHTML = poziom_Lvl5;

    document.querySelector("#koszt_ulepszenia_1").innerHTML = Math.ceil(upgradeCost_Lvl1);
    document.querySelector("#koszt_ulepszenia_2").innerHTML = Math.ceil(upgradeCost_Lvl2);
    document.querySelector("#koszt_ulepszenia_3").innerHTML = Math.ceil(upgradeCost_Lvl3);
    document.querySelector("#koszt_ulepszenia_4").innerHTML = Math.ceil(upgradeCost_Lvl4);
    document.querySelector("#koszt_ulepszenia_5").innerHTML = Math.ceil(upgradeCost_Lvl5);
}


function ColorUpgradeButton(){

    if (cookiesTotal >= upgradeCost_Lvl1) 
        upgradeButton_Lvl1.style.background = "#39e477";
    else upgradeButton_Lvl1.style.background = "#fedcba";

    if (cookiesTotal >= upgradeCost_Lvl2)
        upgradeButton_Lvl2.style.background = "#39e477";
    else upgradeButton_Lvl2.style.background = "#fedcba";

    if (cookiesTotal >= upgradeCost_Lvl3)
        upgradeButton_Lvl3.style.background = "#39e477";
    else upgradeButton_Lvl3.style.background = "#fedcba";

    if (cookiesTotal >= upgradeCost_Lvl4)
        upgradeButton_Lvl4.style.background = "#39e477";
    else upgradeButton_Lvl4.style.background = "#fedcba";

    if (cookiesTotal >= upgradeCost_Lvl5)
        upgradeButton_Lvl5.style.background = "#39e477";
    else upgradeButton_Lvl5.style.background = "#fedcba";  

}


upgradeButton_Lvl1.addEventListener('click', function (){
    if(cookiesTotal < upgradeCost_Lvl1 ) {
        return;
    }
        cookiesTotal -= upgradeCost_Lvl1;
        upgradeCost_Lvl1 = upgradeCost_Lvl1 * 1.3;

        cookiesPerSecondTotal += 0.1;
        cookiesPerSecond_Lvl1 += 0.1;
        poziom_Lvl1++;
})

upgradeButton_Lvl2.addEventListener('click', function (){
    if(cookiesTotal < upgradeCost_Lvl2){
        return;
    }
        cookiesTotal -= upgradeCost_Lvl2;
        upgradeCost_Lvl2 = upgradeCost_Lvl2 * 1.3;

        cookiesPerSecondTotal += 1;
        cookiesPerSecond_Lvl2 += 1;
        poziom_Lvl2++;
})

upgradeButton_Lvl3.addEventListener('click', function (){
    if(cookiesTotal < upgradeCost_Lvl3){
        return;
    }
        cookiesTotal -= upgradeCost_Lvl3;
        upgradeCost_Lvl3 = upgradeCost_Lvl3 * 1.3;

        cookiesPerSecondTotal += 5;
        cookiesPerSecond_Lvl3 += 5;
        poziom_Lvl3++;
})

upgradeButton_Lvl4.addEventListener('click', function (){
    if(cookiesTotal < upgradeCost_Lvl4){
        return;
    }
        cookiesTotal -= upgradeCost_Lvl4;
        upgradeCost_Lvl4 = upgradeCost_Lvl4 * 1.3;

        cookiesPerSecondTotal += 10;
        cookiesPerSecond_Lvl4 += 10;
        poziom_Lvl4++;
})

upgradeButton_Lvl5.addEventListener('click', function (){
    if(cookiesTotal < upgradeCost_Lvl5){
        return;
    }
        cookiesTotal -= upgradeCost_Lvl5;
        upgradeCost_Lvl5 = upgradeCost_Lvl5 * 1.3;

        cookiesPerSecondTotal += 100;
        cookiesPerSecond_Lvl5 += 100;
        poziom_Lvl5++;
})


setInterval(() => {
    UpdateCookies();
    UpdateDisplay();
    ColorUpgradeButton();
}, 1000);






