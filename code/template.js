// using a template cuts down on parse time (only parsed once)
// https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_templates_and_slots
// https://developers.google.com/web/fundamentals/web-components/customelements#shadowdom
// https://developers.google.com/web/fundamentals/web-components/customelements#fromtemplate
// https://developer.mozilla.org/en-US/docs/Web/API/Node/cloneNode

const template = document.createElement('template')
template.innerHTML = `
<!-- <link href='styles.css' rel='stylesheet'> -->
<style>
:host {
    all: initial;
    color: green;
}
p {
    background: var(--my-element-bg, #9E9E9E);
}
</style>
<input id="in">
<slot></slot>
<p><span id="log"></span>, World</p>
<input id="btn" type="button" value="Clear">
<slot name="after"></slot>
`
export default template;