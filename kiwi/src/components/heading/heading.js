import './heading.scss';

class Heading {
    headlineCssClass = 'headline-text'
    render(pageName) {
        const h1 = document.createElement('h1');
        h1.innerHTML = 'Headline is here. This is "'+pageName+'" Page';
        h1.classList.add(this.headlineCssClass);
        const body = document.querySelector('body');
        body.appendChild(h1);
    }
}

export default Heading;