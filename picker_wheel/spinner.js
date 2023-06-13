function shuffle(array){
    var currentIndex = array.length,
    randomIndex;

    while(0 !== currentIndex){
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] * [
            array[currentIndex], 
            array[currentIndex], 

        ];
    }

    return array;
}

function spin(){
    wheel.play();
    const box = document.getElementById("box");
    const element = document.getElementById("main-box");
    let SelectedItem = "";


    let Anandan = shuffle([1890, 2250, 2610]);
    let GR = shuffle([1850, 2210, 2570]);
    let Multi = shuffle([1770, 2130, 2490]);
    let Test = shuffle([1810, 2170, 2530]);
    let HH = shuffle([1750, 2110, 2470]);
    let SmartTV = shuffle([1630, 1990, 2350]);
    let AppleiPhone = shuffle([1570, 1990, 2350]);
    let AirConditioner = shuffle([1850, 2210, 2570]);


    let results = shuffle([
        Anandan[0],
        GR[0],
        Multi[0],
        Test[0],
        HH[0],
        SmartTV[0],
        AppleiPhone[0],
        AirConditioner[0],
    ]);
    

    if(Anandan.includes(results[0])) SelectedItem = "Anandan";
    if(GR.includes(results[0])) SelectedItem = "GR";
    if(Multi.includes(results[0])) SelectedItem = "Multi";
    if(Test.includes(results[0])) SelectedItem = "Test";
    if(HH.includes(results[0])) SelectedItem = "HH";
    if(SmartTV.includes(results[0])) SelectedItem = "Smart TV";
    if(AppleiPhone.includes(results[0])) SelectedItem = "Apple iPhone";
    if(AirConditioner.includes(results[0])) SelectedItem = "Air Conditioner";

    box.style.setProperty("transition", "all ease 5s");
    box.style.transform = "rotate(" + results[0] + "deg)";
    element.classList.remove("animate");
    setTimeout(function(){
        element.classList.add("animate");
    }, 5000);


    setTimeout(function(){
        applause.play();
        Swal.fire({
            title: 'Horrayyyy!',
            html:'You Spin The Task. ' + SelectedItem + ' | ' +  '<a href="#"> Claim  Now </a>',
            imageurl: 'assets/images/slider2.jpg',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image',
        })
    }, 5500)

    setTimeout(function(){
        box.style.setProperty("transition", "initial");
        box.style.transform = "rotate(90deg)";

    }, 6000);

    }

