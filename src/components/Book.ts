

export default class Book {
    constructor(
        private title: string,
        private pageCount: number,
        private pageCurrent: number,
    ) { }

    progress(): string {
        return ` The Read Progress is ${this.pageCount / this.pageCurrent * 100}`
    }
    toString(): string {
        return `Book Title : ${this.title} ,Book pageCount : ${this.pageCount},Book pageCurrent : ${this.pageCurrent}`
    }

}




