let cards = [
    {
        id : 1,
        title: 'Card 1',
        image: '',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries."
    },
    {
        id : 2,
        title: 'Card 2',
        image: '',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries."

    },
    {
        id : 3,
        title: 'Card 3',
        image: '',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries."
    }
]


export function getCards(){
    return cards;
}

export function getCard(number){
    return cards.find((card) => card.id === number);
}