function toggleCard(card) {
    const innerCard = card.querySelector('.card-inner');
    innerCard.style.transform = innerCard.style.transform === 'rotateY(180deg)' ? '' : 'rotateY(180deg)';
}
