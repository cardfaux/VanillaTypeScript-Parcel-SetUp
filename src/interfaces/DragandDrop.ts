export interface DraggableChores {
  dragStart(event: DragEvent): void;
  dragEnd(event: DragEvent): void;
}

export interface DropChores {
  dragOver(event: DragEvent): void;
  dropChore(event: DragEvent): void;
  dragLeave(event: DragEvent): void;
}
