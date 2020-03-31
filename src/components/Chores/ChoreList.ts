import { ChoreComponent } from './ChoreComponent';
import { ChoreItem } from '../Chores/ChoreItem';
import { choreState } from '../../State/ChoreState';
import { DropChores } from '../../interfaces/DragandDrop';
import { Chore } from '../ChoreClass';

export class ChoreList extends ChoreComponent<HTMLDivElement, HTMLElement>
  implements DropChores {
  assignedChores: Chore[];

  constructor(private type: 'Wesleigh' | 'Alexis' | 'Tommy' | 'Finished') {
    super('chore-list', 'app', false, `${type}-Chores`);
    this.assignedChores = [];

    this.addListeners();
    this.renderContent();
  }

  public dragOver(event: DragEvent) {
    if (event.dataTransfer && event.dataTransfer.types[0] === 'text/plain') {
      event.preventDefault();
      const listElement = this.element.querySelector('ul')!;
      listElement.classList.add('droppable');
    }
  }

  public dropChore(event: DragEvent) {
    const choreId = event.dataTransfer!.getData('text/plain');
    choreState.moveChore(choreId, 'Finished');
  }

  public dragLeave(_event: DragEvent) {
    const listElement = this.element.querySelector('ul')!;
    listElement.classList.remove('droppable');
  }

  public addListeners() {
    this.element.addEventListener('dragover', this.dragOver.bind(this));
    this.element.addEventListener('dragleave', this.dragLeave.bind(this));
    this.element.addEventListener('drop', this.dropChore.bind(this));

    choreState.addListener((chores: Chore[]) => {
      const appliedChores = chores.filter((chore) => {
        if (this.type === 'Alexis') {
          return chore.whichBox === this.type;
        }
        if (this.type === 'Wesleigh') {
          return chore.whichBox === this.type;
        }
        if (this.type === 'Tommy') {
          return chore.whichBox === this.type;
        }
        if (this.type === 'Finished') {
          return chore.whichBox === this.type;
        }
        return;
      });
      this.assignedChores = appliedChores;
      this.renderChores();
    });
  }

  public renderContent() {
    const listId = `${this.type}-chores-list`;
    this.element.querySelector('ul')!.id = listId;
    this.element.querySelector('h2')!.textContent =
      this.type.toUpperCase() + "'S" + ' CHORES';
    if (this.type === 'Finished') {
      this.element.querySelector('h2')!.textContent =
        this.type.toUpperCase() + ' CHORES';
    }
  }

  private renderChores() {
    const listElement = document.getElementById(
      `${this.type}-chores-list`
    )! as HTMLUListElement;
    listElement.innerHTML = '';
    for (const choreItem of this.assignedChores) {
      new ChoreItem(this.element.querySelector('ul')!.id, choreItem);
    }
  }
}
