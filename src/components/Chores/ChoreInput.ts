import { ChoreComponent } from './ChoreComponent';
import { choreState } from '../../State/ChoreState';
import validateInputs from '../../validation/validation';
import { ValidationLogic } from '../../validation/validation';

export class ChoreInput extends ChoreComponent<
  HTMLDivElement,
  HTMLFormElement
> {
  childInputElement: HTMLInputElement;
  choreInputElement: HTMLInputElement;
  notesInputElement: HTMLInputElement;
  constructor() {
    super('chore-input', 'app', true, 'user-input');

    this.childInputElement = this.element.querySelector(
      '#children'
    ) as HTMLInputElement;
    this.choreInputElement = this.element.querySelector(
      '#chore'
    ) as HTMLInputElement;
    this.notesInputElement = this.element.querySelector(
      '#notes'
    ) as HTMLInputElement;

    this.addListeners();
  }

  public addListeners() {
    this.element.addEventListener('submit', this.submitHandler.bind(this));
  }

  private userInputs(): [string, string, string] | void {
    const enteredChild = this.childInputElement.value;
    const enteredChore = this.choreInputElement.value;
    const enteredNote = this.notesInputElement.value;

    const childValidation: ValidationLogic = {
      value: enteredChild,
      required: true
    };
    const choreValidation: ValidationLogic = {
      value: enteredChore,
      required: true,
      minLength: 5,
      maxLength: 50
    };
    const noteValidation: ValidationLogic = {
      value: enteredNote,
      required: true,
      minLength: 5,
      maxLength: 50
    };

    if (
      !validateInputs(childValidation) ||
      !validateInputs(choreValidation) ||
      !validateInputs(noteValidation)
    ) {
      alert('INVALID INPUTS(min. 5 Characters, max. 50 Characters....)');
      return;
    } else {
      return [enteredChild, enteredChore, enteredNote];
    }
  }

  public renderContent() {}

  private clearFields() {
    this.childInputElement.value = '';
    this.choreInputElement.value = '';
    this.notesInputElement.value = '';
  }

  private submitHandler(event: Event) {
    event.preventDefault();
    const userInput = this.userInputs();
    if (Array.isArray(userInput)) {
      const [child, chore, note] = userInput;
      choreState.addChore(child, chore, note);
      this.clearFields();
    }
  }
}
