export default function fakename() {
    const first = ['Ana', 'Bia', 'João', 'Júlio']
    const last = ['Alface', 'Melão', 'Goiaba', 'Cenoura']
    let firstName = first[parseInt(Math.random()*4)]
    let lastName = last[parseInt(Math.random()*4)]
    return firstName+" " + lastName
}