let getLetter = (str) => {
    
    let letter = str.charAt(0).toLowerCase();
    console.log(letter)
    
    switch (true) {
    //case 'aeiou':
    case letter.includes('a', 'e', 'i', 'o', 'u'):
        return 'A';
        break;
    //case 'bcdfg':
    case letter.includes('b', 'c', 'd', 'f', 'g'):
            
        return 'B';
        break;
    //case 'hjklm':
    case letter.includes('h', 'j', 'k', 'l', 'm'):
        
        return 'C';
        break;
    default:
        return 'D';
    }
    
}
//getLetter('At the Gates')
//getLetter(Cthuhlu')
getLetter('Horses')
//getLetter('Taxi driver')
