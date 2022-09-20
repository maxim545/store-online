class CreateElement {

    create(elementName: string, elementInner: string, className: string, insertTag: HTMLElement | null, dataAtrName = '', dataAtrType = ''): HTMLElement {
        const element = document.createElement(elementName);
        element.innerHTML = elementInner;
        element.className = className;
        if (insertTag) { insertTag.append(element); }
        if (dataAtrName) { element.dataset.name = dataAtrName; }
        if (dataAtrType) { element.dataset.type = dataAtrType; }
        return element;
    }
    
}
export default CreateElement;