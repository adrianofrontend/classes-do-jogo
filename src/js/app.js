class Hero {
    constructor(name, age, type) {
        this.name = name;
        this.age = age;
        this.type = type;
    }

    attack() {
        let attack;

        switch (this.type) {
            case 'mago':
                attack = 'magia';
                break;
            case 'guerreiro':
                attack = 'espada';
                break;
            case 'monge':
                attack = 'artes marciais';
                break;
            case 'ninja':
                attack = 'shuriken';
                break;
            default:
                attack = 'um ataque';
        }

        console.log(`o ${this.type} atacou usando ${attack}`);
    }
}

// Exemplo de uso
const mage = new Hero('Gandalf', 1000, 'mago');
const warrior = new Hero('Aragorn', 35, 'guerreiro');

mage.attack(); // Saída: "o mago atacou usando usou magia"
warrior.attack(); // Saída: "o guerreiro atacou usando usou espada"
console.log(mage)