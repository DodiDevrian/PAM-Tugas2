function halo(nama) {
    alert('halo,${name}');
}

function outputpesan(callback){
    const name = prompt ('Nama anda adalah : ');
    callback(name);
}
outputpesan(halo);

function outputpesan(callback){
    const name = prompt ('Namamu adalah : ' );
    callback(name);
}
outputpesan(nama => alert('halo,${name}'))