// using a template cuts down on parse time (only parsed once)
// https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_templates_and_slots
// https://developers.google.com/web/fundamentals/web-components/customelements#shadowdom
// https://developers.google.com/web/fundamentals/web-components/customelements#fromtemplate
const template = document.createElement('template')
template.innerHTML = `
<style>
:host {
    color: green;
}
</style>
<input id="in">
<p><span id="log"></span>, World</p>
<input id="btn" type="button" value="Clear">
`
export default template;