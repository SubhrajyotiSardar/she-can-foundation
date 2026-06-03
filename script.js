AOS.init({
duration:1000,
once:true
});

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

const update = () => {

const target = +counter.getAttribute("data-target");
const count = +counter.innerText;

const increment = target / 100;

if(count < target){
counter.innerText = Math.ceil(count + increment);
setTimeout(update,20);
}
else{
counter.innerText = target + "+";
}

};

update();

});
document.querySelector("form")?.addEventListener("submit", function(e){
    const inputs = this.querySelectorAll("input, select, textarea");

    for(let input of inputs){
        if(!input.value){
            alert("Please fill all fields");
            e.preventDefault();
            return;
        }
    }
});