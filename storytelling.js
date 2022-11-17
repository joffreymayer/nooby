const storytellingFolien = document.querySelectorAll(".story-telling-target");
const parallaxFolien = document.querySelectorAll(".main-parallax-wrapper");
const firstFolie = document.querySelector(".parallax-a");
const secondFolie = document.querySelector(".parallax-b");
const thirdFolie = document.querySelector(".parallax-c");
console.log(firstFolie)

function backwardsTrigger(){
    var previousSection = entry.target.parentElement.parentElement.parentElement.parentElement.previousElementSibling
}

function triggerVisibility(entries) {
    entries.forEach((entry) => {
        if (entry.isIntersecting){
            console.log("The entry is intersecting 🌟")
        }
        // console.log('These are the elements (= Folien) detected for a cool Storytelling! ✨')
        if (!entry.isIntersecting){
            console.log("Text is not intersecting with Viewport anymore! 🤷🏻")
            var nextSection = entry.target.parentElement.parentElement.parentElement.parentElement.nextElementSibling
            var previousSection = entry.target.parentElement.parentElement.parentElement.parentElement.previousElementSibling
            var currentSection = entry.target.parentElement.parentElement.parentElement.parentElement
            console.log(nextSection)
            console.log(previousSection)
            console.log(currentSection)
            // Für Vorwärtsbewegung
            currentSection.classList.add("invisible-parallax");
            currentSection.classList.remove("triggered-visible");
            nextSection.classList.add("triggered-visible");
            // previousSection.classList.add("invisible-parallax");
            // previousSection.classList.remove("triggered-visible");
        };
        // const { target } = entry;
        // const stopValue = target.innerText;
        // const startValue = 0;
        // if (!entry.isIntersecting) return;
        // counter(target, startValue, stopValue);
        folienObserver.unobserve(target);
    });
};

const folienObserver = new IntersectionObserver(triggerVisibility, { rootMargin: '0px'});
storytellingFolien.forEach((storytellingFolie) => folienObserver.observe(storytellingFolie));