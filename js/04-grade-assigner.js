let grade = parseInt(prompt('Enter your grade'))

if (grade > 0) {
    if (grade <60) {
        console.log('You received an F')
    } else if (grade <=69) {
        console.log('You received a D')
    }  else if (grade <=79) {
        console.log('You received a C')
    }  else if (grade <=89) {
        console.log('You received a B')
    }  else if (grade <=100) {
        console.log('You received a A')
    } else {
        console.log('Only numbers between 1 and 100 are accepted')
    }    

} else {
    console.log('Only numbers between 1 and 100 are accepted')
}

