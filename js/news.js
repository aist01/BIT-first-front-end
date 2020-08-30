"use strict";

import data from './data.js';

class News {
    constructor(target) {
        this.target = target;

        this.render()
    }

    render () {
        const DOM = document.querySelector(this.target);
        if(!DOM){
            throw 'ERROR: OMG... go fix News!!!';
        }


        let HTML = '';

        for(let i=0; i<data.length; i++){
            const fashion = data[i];

            HTML +=`
                <div class="fashion">
                    <img class="image" src="img/${fashion.image}" alt="fashion">
                    <div class="date">${fashion.date}</div>
                    <p class="record">${fashion.record}</p>
                </div>
                `;

                DOM.innerHTML = HTML;
        }
    }   
}

export default News;
