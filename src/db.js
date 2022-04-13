class DB {
    constructor(data) {
        this.id = 1
        this.data = []
        if (data) {
            data.map(item => this.create(() => { }, item))
        }
    }

    findAll() {
        return this.data
    }

    findOne(id) {
        return this.data.find(item => item.id === id)
    }

    create(set, newItem) {
        newItem.id = this.id
        this.id++
        this.data = [...this.data, newItem]
        set(this.data)
    }

    update(set, newItem) {
        this.data = this.data.map(item => item.id === newItem.id ? newItem : item)
        set(this.data)
    }

    remove(set, id) {
        this.data = this.data.filter(item => item.id !== id)
        set(this.data)
    }
}

class Products extends DB {

    // constructor(data){
    //     super(data)
    // }

    findByName(name) {
        return this.data.filter(item => item.name.toLowerCase().includes(name.toLowerCase()))
    }

}

class Pets extends DB {

    // constructor(data){
    //     super(data)
    // }

    findByPersonID(personId) {
        return this.data.filter(item => item.personId === personId)
    }

    findByType(type) {
        return this.data.filter(item => item.type.toLowerCase().includes(type.toLowerCase()))
    }

    findDistinctType() {
        return [...new Set(this.data.map(item => item.type))]
    }

}

const db = {
    Products: new Products([
        { id: 1, name: "MS Office 2019", title: "MS Word, MS Excel, MS PowerPoint, MS Access, MS Outlook, MS Visio, MS Publisher (Foundation, Intermediate & Advanced Level)", type: "IT",  duration:60},
        { id: 1, name: "MS Office 2019", title: "MS Word, MS Excel, MS PowerPoint, MS Access, MS Outlook, MS Visio, MS Publisher (Foundation, Intermediate & Advanced Level)", type: "IT",  duration:60},
        { id: 1, name: "MS Office 2019", title: "MS Word, MS Excel, MS PowerPoint, MS Access, MS Outlook, MS Visio, MS Publisher (Foundation, Intermediate & Advanced Level)", type: "IT",  duration:60}
    ]),
    Pets: new Pets([
        { id: 1, name: "Alba", type: "Dog", age: 10, picture: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*", personId: 1 },
        { id: 2, name: "Pique", type: "Dog", age: 10, picture: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*", personId: 2 },
        { id: 3, name: "Lenglet", type: "Fish", age: 10, picture: "https://thumbs-prod.si-cdn.com/7UodV-s6j5aEVfrYwg5KQ26oBLY=/fit-in/1600x0/https://public-media.si-cdn.com/filer/d6/93/d6939718-4e41-44a8-a8f3-d13648d2bcd0/c3npbx.jpg", personId: 1 }
    ])
}
export default db