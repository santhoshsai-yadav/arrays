let array = [];
// function push() {
//     let inputValue = document.getElementById("array-meth").value;
//     let resultField = document.getElementById("results");
//     array.push(inputValue);
//     resultField.value = `${array}`
// }

function clearContent() {
    document.getElementById("array-meth").value = "";
    document.getElementById("results").value = "";
}

// function pop() {
//     let inputValue = document.getElementById("array-meth").value;
//     let resultField = document.getElementById("results");
//     array.pop();
//     resultField.value = `${array}`
// }
// function shift() {
//     let inputValue = document.getElementById("array-meth").value;
//     let resultField = document.getElementById("results");
//     array.shift();
//     resultField.value = `${array}`
// }
// function unshift() {
//     let inputValue = document.getElementById("array-meth").value;
//     let resultField = document.getElementById("results");
//     array.unshift(inputValue);
//     resultField.value = `${array}`;
// }

// function reverse() {
//     let inputValue = document.getElementById("array-meth").value;
//     let resultField = document.getElementById("results");
//     array.reverse(inputValue);
//     resultField.value = `${array}`;
// }
function tostring() {
    let inputValue = document.getElementById("array-meth").value;
    let resultField = document.getElementById("results");
   let arrayString=array.toString();
   resultField.value = `${typeof(arrayString)}`;
}
// function delet(){
//     let inputValue = document.getElementById("array-meth").value;
//     let resultField = document.getElementById("results");
//     delete array[0]
//     resultField.value = `${array}`;
// }
// function slice(){
//     let inputValue = document.getElementById("array-meth").value;
//     let resultField = document.getElementById("results");
//     array.slice(inputValue)
//     resultField.value= `${array}`;
// }

    function push() {
        const value = document.getElementById("array-meth").value;
        array.push(value);
        updateResult();
    }

    function pop() {
        array.pop();
        updateResult();
    }

    function tostring() {
        document.getElementById("results").value = array.toString();
        
    }

    function shift() {
        array.shift();
        updateResult();
    }

    function unshift() {
        const value = document.getElementById("array-meth").value;
        array.unshift(value);
        updateResult();
    }

    function delet() {
        const value = document.getElementById("array-meth").value;
        const index = array.indexOf(value);
        if (index > -1) {
            array.splice(index, 1);
        }
        updateResult();
    }

    function concat() {
        const value = document.getElementById("array-meth").value;
        const newArray = array.concat(value);
        updateResult(newArray);
    }

    function slice() {
        const start = parseInt(prompt("Enter the start index:"));
        const end = parseInt(prompt("Enter the end index:"));
        const slicedArray = array.slice(start, end);
        updateResult(slicedArray);
    }

    function find() {
        const value = document.getElementById("array-meth").value;
        const found = array.find(item => item === value);
        updateResult(found);
    }

    function filter() {
        const value = document.getElementById("array-meth").value;
        const filteredArray = array.filter(item => item === value);
        updateResult(filteredArray);
    }

    function sort() {
        array.sort();
        updateResult();
    }

    function reverse() {
        array.reverse();
        updateResult();
    }

    function updateResult(resultArray) {
        const resultField = document.getElementById("results");
        if (resultArray) {
            resultField.value = resultArray.toString();
        } else {
            resultField.value = array.toString();
        }
    }