// Ferhatlar Anaokulu JavaScript
const counters = document.querySelectorAll(".counter");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const counter = entry.target;
        const target = Number(counter.dataset.target);

        let current = 0;

        const step = Math.ceil(target / 80);

        const timer = setInterval(() => {

            current += step;

            if(current >= target){

                current = target;

                clearInterval(timer);

            }

            counter.textContent = current;

        },20);

        observer.unobserve(counter);

    });

});

counters.forEach(counter=>observer.observe(counter));
