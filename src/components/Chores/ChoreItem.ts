import { ChoreComponent } from './ChoreComponent';
import { Chore } from '../ChoreClass';
import { DraggableChores } from '../../interfaces/DragandDrop';

export class ChoreItem extends ChoreComponent<HTMLUListElement, HTMLLIElement>
  implements DraggableChores {
  private chore: Chore;

  constructor(hostId: string, chore: Chore) {
    super('single-chore', hostId, false, chore.id);
    this.chore = chore;

    this.addListeners();
    this.renderContent();
  }

  public dragStart(event: DragEvent) {
    event.dataTransfer!.setData('text/plain', this.chore.id);
    event.dataTransfer!.effectAllowed = 'move';
  }

  public dragEnd(_event: DragEvent) {
    console.log('--DRAGEVENT__ENDED--');
  }

  public addListeners() {
    this.element.addEventListener('dragstart', this.dragStart.bind(this));
    this.element.addEventListener('dragend', this.dragEnd.bind(this));
  }

  public renderContent() {
    this.element.querySelector('h2')!.textContent = this.chore.chore;
    this.element.querySelector('p')!.textContent = this.chore.note;
  }
}
