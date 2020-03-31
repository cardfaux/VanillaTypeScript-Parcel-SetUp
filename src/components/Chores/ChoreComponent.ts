// ------- COMPONENT BASECLASS START --------------
export abstract class ChoreComponent<
  T extends HTMLElement,
  U extends HTMLElement
> {
  templateElement: HTMLTemplateElement;
  renderElement: T;
  element: U;

  constructor(
    templateId: string,
    renderElementId: string,
    insertAtStart: boolean,
    newElementId?: string
  ) {
    this.templateElement = document.getElementById(
      templateId
    )! as HTMLTemplateElement;
    this.renderElement = document.getElementById(renderElementId)! as T;

    const importedNode = document.importNode(
      this.templateElement.content,
      true
    );
    this.element = importedNode.firstElementChild as U;
    if (newElementId) {
      this.element.id = newElementId;
    }

    this.insert(insertAtStart);
  }

  private insert(insertAtBegin: boolean) {
    this.renderElement.insertAdjacentElement(
      insertAtBegin ? 'afterbegin' : 'beforeend',
      this.element
    );
  }

  abstract addListeners(): void;
  abstract renderContent(): void;
}

// ------- COMPONENT BASECLASS END --------------
