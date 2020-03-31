export class Chore {
  constructor(
    public id: string,
    public chore: string,
    public note: string,
    public whichBox: 'Wesleigh' | 'Alexis' | 'Tommy' | 'Finished'
  ) {}
}
