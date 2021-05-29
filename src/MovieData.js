import {v4 as uuidv4} from 'uuid';
const movies=[
    {
      id: uuidv4(),
      title: 'Bad Boys for Life',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BMWU0MGYwZWQtMzcwYS00NWVhLTlkZTAtYWVjOTYwZTBhZTBiXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg',
      description: 'Miami detectives Mike Lowrey and Marcus Burnett must face off against a mother-and-son pair of drug lords who wreak vengeful havoc on their city.',
      rate: 3.6,
    },
    {
        id: uuidv4(),
        title: 'The Call of the Wild',
        posterURL: 'https://m.media-amazon.com/images/M/MV5BZDA1ZmQ2OGMtZDhkMC00ZjRkLWE3ZTMtMzA5ZTk0YjM1OGRmXkEyXkFqcGdeQXVyNzI1NzMxNzM@._V1_UX182_CR0,0,182,268_AL_.jpg',
        description: 'A sled dog struggles for survival in the wilds of the Yukon.',
        rate: 3,
    },
    {
        id: uuidv4(),
        title: 'Dachra',
        posterURL: 'https://www.regarder-films.net/wp-content/uploads/2019/10/dachra-768x1024.jpg',
        description: 'An investigation into witchcraft leads a trio of journalism students to a mysterious town marked by sinister rituals. Inspired by true events.',
        rate: 3.4,
    },
    {
        id: uuidv4(),
        title: 'The Twilight Saga: Breaking Dawn',
        posterURL: 'https://m.media-amazon.com/images/M/MV5BMTcyMzUyMzY1OF5BMl5BanBnXkFtZTcwNDQ4ODk1OA@@._V1_UX182_CR0,0,182,268_AL_.jpg',
        description: 'After the birth of Renesmee/Nessie, the Cullens gather other vampire clans in order to protect the child from a false allegation that puts the family in front of the Volturi',
        rate: 3,
    },
    {
        id: uuidv4(),
        title: 'Lost Girls and Love Hotels',
        posterURL: 'https://m.media-amazon.com/images/M/MV5BYjQ5NmI3NjctZjA1Mi00N2NhLWEwOTctYTkxZjY0YmQ4ZDEzXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_UY268_CR0,0,182,268_AL_.jpg',
        description: 'Haunted by her past, an English teacher explores love and dust with a dashing yakuza gangster in Tokyo.',
        rate: 2.3,
    },
    {
        id: uuidv4(),
        title: 'Now You See Me',
        posterURL: 'https://m.media-amazon.com/images/M/MV5BMTY0NDY3MDMxN15BMl5BanBnXkFtZTcwOTM5NzMzOQ@@._V1_UX182_CR0,0,182,268_AL_.jpg',
        description: 'An F.B.I. Agent and an Interpol Detective track a team of illusionists who pull off bank heists during their performances, and reward their audiences with the money.',
        rate: 4.2,
    },
    {
        id: uuidv4(),
        title: 'The Circle',
        posterURL: 'https://m.media-amazon.com/images/M/MV5BMjY2OTM2Njc3Ml5BMl5BanBnXkFtZTgwNDgzODU3MTI@._V1_UX182_CR0,0,182,268_AL_.jpg',
        description: 'A woman lands a dream job at a powerful tech company called the Circle, only to uncover an agenda that will affect the lives of all of humanity.',
        rate: 4,
    },
    {
        id: uuidv4(),
        title: 'Shutter Island',
        posterURL: 'https://m.media-amazon.com/images/M/MV5BYzhiNDkyNzktNTZmYS00ZTBkLTk2MDAtM2U0YjU1MzgxZjgzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg',
        description: 'In 1954, a U.S. Marshal investigates the disappearance of a murderer who escaped from a hospital for the criminally insane.',
        rate: 5,
    },
    {
        id: uuidv4(),
        title: 'The Hustle',
        posterURL: 'https://m.media-amazon.com/images/M/MV5BMTc3MDcyNzE5N15BMl5BanBnXkFtZTgwNzE2MDE0NzM@._V1_UY268_CR0,0,182,268_AL_.jpg',
        description: 'Two con women - one low rent and the other high class - team up to take down the men who have wronged them.',
        rate: 2,
    },
    {
        id: uuidv4(),
        title: 'Life in a Year',
        posterURL: 'https://m.media-amazon.com/images/M/MV5BYTNiY2Y4MjMtM2MyMi00ODYxLTk4N2MtNjhkYjVkODFjNmRjXkEyXkFqcGdeQXVyNDg0MDgxNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg',
        description: 'The movie follows 17-year-old Daryn who finds out that his girlfriend is dying. He sets out to give her an entire life in the last year she has left.',
        rate: 3,
    },
    {
        id: uuidv4(),
        title: 'Ralph Breaks the Internet',
        posterURL: 'https://m.media-amazon.com/images/M/MV5BMTYyNzEyNDAzOV5BMl5BanBnXkFtZTgwNTk3NDczNjM@._V1_UX182_CR0,0,182,268_AL_.jpg',
        description: 'Six years after the events of "Wreck-It Ralph," Ralph and Vanellope, now friends, discover a wi-fi router in their arcade, leading them into a new adventure.',
        rate: 5,
    },
    {
        id: uuidv4(),
        title: 'The Secret Life of Pets 2',
        posterURL: 'https://m.media-amazon.com/images/M/MV5BMzdlMWQzZmItMDA5Ny00MGFjLTk0MDAtYjgzMmMyNTEwMzdhXkEyXkFqcGdeQXVyODQzNTE3ODc@._V1_UX182_CR0,0,182,268_AL_.jpg',
        description: 'Continuing the story of Max and his pet friends, following their secret lives after their owners leave them for work or school each day.',
        rate: 4,
    }
]
export default movies;