export class Employee {
    constructor(
        public id: number,
        public position_type_id: number,
        public first_name: string,
        public last_name: string,
        public nickname: string,
        public phone: string
    ){}
}