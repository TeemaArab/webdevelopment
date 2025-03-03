Math.max(1, 3, 2,6,8,0,12,56,78,90); 
Math.min(1, 3, 2,6,8,0,12,56,78,90);

const num =[1, 3, 2,6,8,0,12,56,78,90];
Math.max(...num);

const firstName = ['Tina', 'John', 'Doe', 'Jane'];
const lastName = ['Doe', 'Smith', 'Prout', 'Cloney'];
const fullName = [...firstName, ...lastName];
console.log(fullName);