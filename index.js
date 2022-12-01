function wrapping(gifts) {
  let new_gifts = gifts.map( gift => {
    let giftLenght = gift.length;
    let chars = "**";
    for ( let i = 0; i <giftLenght; i++ ) {
      chars += "*";
    }

    return chars + "\n*" + gift + "*\n" + chars;
  })
  return new_gifts;
}
