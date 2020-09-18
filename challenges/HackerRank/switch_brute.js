let getLetter = (str) => {
    
    let letter = str.charAt(0).toLowerCase();
    // console.log(letter) 
    switch (letter) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
        return 'A';
        break;
    case 'b':
    case 'c':
    case 'd':
    case 'f':
    case 'g':
        return 'B';
        break;
    case 'h':
    case 'j':
    case 'k':
    case 'l':
    case 'm':
        return 'C';
        break;
    default:
        return 'D';
    }
    
}

getLetter('Cthuhlu')

// getLetter('At the Gates')
