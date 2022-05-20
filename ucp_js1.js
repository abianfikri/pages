// Function nama
const nama = document.querySelector('#nama');

function updateName(){
    const name = prompt('Masukkan nama: ');
    nama.textContent = name;
}

nama.addEventListener('click', updateName);


// Function Date
const date = document.querySelector('#hari');

function hari(){
    const day = prompt('Masukkan hari: ');
    date.textContent =day;
}

date.addEventListener('click',hari);

// Function Kuliah 1
const kuliah1 = document.querySelector('#kuliah1');

function matkul1(){
    const subject1 = prompt('Masukkan Kuliah 1: ');
    kuliah1.textContent = subject1;
}

kuliah1.addEventListener('click',matkul1);

// Function Kuliah 2
const kuliah2 = document.querySelector('#kuliah2');

function matkul2(){
    const subject2 = prompt('Masukkan Kuliah 2: ');
    kuliah2.textContent = subject2;
}

kuliah2.addEventListener('click',matkul2);

// Function Kuliah 3
const kuliah3 = document.querySelector('#kuliah3');

function matkul3(){
    const subject3 = prompt('Masukkan Kuliah 3: ');
    kuliah3.textContent = subject3;
}

kuliah3.addEventListener('click',matkul3);