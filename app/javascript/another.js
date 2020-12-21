function sayHello() {
    let header = document.querySelector('#greeting');
    let hello = ('<img src="https://media1.tenor.com/images/dc5d5ac0578cdef5ce3988a3011016e1/tenor.gif?itemid=5488802"> ')
    header.innerHTML = hello;
}

module.exports = sayHello();