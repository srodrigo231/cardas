let cards = [
    {
        id : 1,

        headerText: 'Trail of Giants',
        footerText: 'You\'re only 20 feet away from the next giant history. Keep going!',
        image: '',

        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries."
    },
    // [
    //     {
    //         id : 2,
    //         title: 'Trail of Giants',
    //         image: '',
    //         description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries."
    
    //     },
    // ],
    {
        id : 3,
        image: '',
        headerText: 'Trail of Giants',
        footerText: 'You\'re only 20 feet away from the next giant history. Keep going!',

        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries."
    }
]


export function getCards(){
    return cards;
}

export function getCard(number){
    return cards.find((card) => card.id === number);
}