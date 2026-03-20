//Objects

//Destructure
const course = {
    coursename: "math",
    price: 999,
    teacher: "tannu"
}

const {teacher} = course //extracts the value and it is easier to access multiple times instead of dot notation
const {coursename: name} = course //we can give alias
console.log(teacher);
console.log(name);

const navbar = ({company}) =>{ //destructure used in react

}
navbar(company = "google")

/*JSON
{
    "name": "Sam",
    "coursename": "Hindi",
    "price": 0
}*/
