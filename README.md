# Battleship

A Battleship game for the Odin Project.

![Main page of the game](./src/images/page-preview.png?raw=true)

With a very simple drag and drop implementation to place your ships in a 10x10 gameboard.

![Place your ships screen](./src/images/page-preview-place-ships.png?raw=true)

The game is played with 5 ships for each player: 

- One Carrier ship, size: 5 blocks.
- One Battleship, size: 4 blocks.
- One Cruiser ship, size: 3 blocks.
- One Submarine, size: 3 blocks.
- One Destroyer, size: 2 blocks.

Once you place all your ships and click the "Start the battle" button, the game will start.

![Game screen](./src/images/page-preview-game-screen.png?raw=true)

Click on the computer's gameboard to attack, the computer will attack you immediately after you attack it.

> [!Note]
> - A red gameboard cell indicates a missed attack.
> - A green gameboard cell indicates the attack landed on a ship.
> - A white gameboard cell indicates a ship placed in your gameboard.
> - A transparent gameboard cell indicates that hasn't been attacked yet.

The game will finish once you sunk all the computer's ships or once the computer sunk all of your ships.

![Winner screen](./src/images/page-preview-winner-screen.png?raw=true)

