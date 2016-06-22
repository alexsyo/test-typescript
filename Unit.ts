class Unit
{
    private name : string;
    private life : number;
    private attack : number;
    
    constructor(name : string, life : number, attack : number)
    {
        this.name = name;
        this.life = life;
        this.attack = attack;
    }
    
    print()
    {
        return `${this.name} has ${this.life} life and ${this.attack} attack`;
    }
}

export { Unit };