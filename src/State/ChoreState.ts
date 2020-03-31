import { Chore } from '../components/ChoreClass';

type ListenerFunction<T> = (items: T[]) => void;

class State<T> {
  protected listeners: ListenerFunction<T>[] = [];

  public addListener(listenerFn: ListenerFunction<T>) {
    this.listeners.push(listenerFn);
  }
}

class ChoreState extends State<Chore> {
  private chores: Chore[] = [];
  private static instance: ChoreState;

  private constructor() {
    super();
  }

  static getInstance() {
    if (this.instance) {
      return this.instance;
    }
    this.instance = new ChoreState();
    return this.instance;
  }

  public addChore(child: any, chore: string, note: string) {
    const newChore = new Chore(Math.random().toString(), chore, note, child);

    this.chores.push(newChore);
    this.updateListeners();
  }

  public moveChore(
    choreId: string,
    newBox: 'Wesleigh' | 'Alexis' | 'Tommy' | 'Finished'
  ) {
    const chore = this.chores.find((chore) => chore.id === choreId);
    if (chore && chore.whichBox !== newBox) {
      chore.whichBox = newBox;
      this.updateListeners();
    }
  }

  private updateListeners() {
    for (const listenerFn of this.listeners) {
      listenerFn(this.chores.slice());
    }
  }
}

export const choreState = ChoreState.getInstance();
