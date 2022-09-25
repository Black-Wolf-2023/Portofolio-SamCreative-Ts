"use strict";
class Observe {
    ele;
    start;
    end;
    className;
    constructor(ele, start, end, className) {
        this.ele = ele;
        this.start = start;
        this.end = end;
        this.className = className;
    }
    MakeObserve() {
        let observe = new IntersectionObserver((entries) => {
            entries.forEach(ele => {
                ele.target.classList.toggle(`${this.className}-animate`, ele.isIntersecting);
            });
        }, {
            threshold: [this.start, this.end],
        });
        observe.observe(this.ele);
        console.log(this.ele);
    }
}
let offer = document.querySelector('.offer');
let observe_1 = new Observe(offer, .75, 1, 'offer');
observe_1.MakeObserve();
let details = document.querySelector('.details');
let observe_2 = new Observe(details, .25, 1, 'details');
observe_2.MakeObserve();
let projects = document.querySelector('.projects');
let observe_3 = new Observe(projects, .25, 1, 'projects');
observe_3.MakeObserve();
let icons_details = document.querySelector('.icons-details');
let observe_4 = new Observe(icons_details, .25, 1, 'icons-details');
observe_4.MakeObserve();
let tools = document.querySelector('.tools');
let observe_5 = new Observe(tools, .25, 1, 'tools');
observe_5.MakeObserve();
let footer = document.querySelector('footer');
let observe_6 = new Observe(footer, .25, 1, 'footer');
observe_6.MakeObserve();
