export class Tag{
    static readonly ANGULAR = new Tag('Angular' , 'red');
    static readonly TYPESCRIPT = new Tag('TypeScript' , 'darkred');
    static readonly COREJAVA = new Tag('core java' , 'orange');
    static readonly HTML = new Tag('HTML' , '#e91e63');
    static readonly CSS = new Tag('CSS' , 'green');
    static readonly JAVASCRIPT = new Tag('JavaScript' , 'brown');
    static readonly REACTJS = new Tag('ReactJs' , 'purple');
    
private constructor(private readonly key : string, public readonly color: string){

}
toString(){
    return this.key;
}
   }