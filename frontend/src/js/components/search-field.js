class SearchField extends HTMLElement {
  constructor() {
    super();

    let container = document.querySelector("search-field");
    let newInput = document.createElement("input");
    newInput.type = "text";
    newInput.placeholder = "Search...";
    newInput.className = "search-input";
    container.appendChild(newInput);
  }
}

customElements.define("search-field", SearchField);
