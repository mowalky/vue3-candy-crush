<template>
  <div id="app">
    <div class="game">
      <img
        v-for="(candy, i) in randomColorArrangement"
        :key="i"
        :data-id="i"
        @dragstart="dragStart({ index: i, candy: candy })"
        @drop="dragDrop({ index: i, candy: candy })"
        @dragover="(e) => e.preventDefault()"
        @dragenter="(e) => e.preventDefault()"
        @dragleave="(e) => e.preventDefault()"
        @dragend="dragEnd"
        draggable
        :src="require(`@/assets/${candy}.png`)"
      />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const width = 8;
    const candyColors = [
      "blue-candy",
      "blue-special",
      "green-candy",
      "green-special",
      // "orange-candy",
      // "orange-special",
      // "yellow-candy",
      // "purple-candy",
      // "purple-special",
      // "red-candy",
      // "red-special",
      // "color-bomb",
    ];
    const squareBeingDragged = ref({});
    const squareBeingReplaced = ref({});
    let randomColorArrangement = ref([]);

    const createBoard = () => {
      for (let i = 0; i < width * width; i++) {
        const randomColor =
          candyColors[Math.floor(candyColors.length * Math.random())];
        randomColorArrangement.value.push(randomColor);
      }
    };

    const dragStart = ({ index, candy }) => {
      console.log(`drag ${candy} start ${index}`);
      squareBeingDragged.value = { index, candy };
    };

    const dragDrop = ({ index, candy }) => {
      console.log(`drag ${candy} dropped on ${index}`);
      squareBeingReplaced.value = { index, candy };
    };

    const dragEnd = () => {
      console.log(`drag end`);
      const squareBeingReplacedId = parseInt(squareBeingReplaced.value.index);
      const squareBeingDraggedId = parseInt(squareBeingDragged.value.index);

      randomColorArrangement.value[squareBeingReplacedId] =
        squareBeingDragged.value.candy;

      randomColorArrangement.value[squareBeingDraggedId] =
        squareBeingReplaced.value.candy;

      console.log(`squareBeingReplacedId ${squareBeingReplacedId}`);
      console.log(`squareBeingDraggedId ${squareBeingDraggedId}`);

      const validMoves = [
        squareBeingDraggedId - 1,
        squareBeingDraggedId - width,
        squareBeingDraggedId + 1,
        squareBeingDraggedId + width,
      ];

      const validMove = validMoves.includes(squareBeingReplacedId);

      const isAColumnOfThree = checkForColumnOfThree();
      const isARowOfThree = checkForRowOfThree();
      const isAColumnOfFour = checkForColumnOfFour();
      const isARowOfFour = checkForRowOfFour();

      if (
        squareBeingReplacedId &&
        validMove &&
        (isAColumnOfThree || isARowOfThree || isAColumnOfFour || isARowOfFour)
      ) {
        squareBeingDragged.value = {};
        squareBeingReplaced.value = {};
      } else {
        randomColorArrangement.value[squareBeingReplacedId] =
          squareBeingReplaced.value.candy;
        randomColorArrangement.value[squareBeingDraggedId] =
          squareBeingDragged.value.candy;
      }
    };

    const checkForColumnOfThree = () => {
      for (let i = 0; i < 47; i++) {
        const columnOfThree = [i, i + width, i + width * 2];
        const decidedColor = randomColorArrangement.value[i];
        if (
          columnOfThree.every(
            (square) => randomColorArrangement.value[square] === decidedColor
          )
        ) {
          columnOfThree.forEach(
            (square) => (randomColorArrangement.value[square] = "blank")
          );
          return true;
        }
      }
    };

    const checkForRowOfThree = () => {
      for (let i = 0; i < width * width; i++) {
        const rowOfThree = [i, i + 1, i + 2];
        const decidedColor = randomColorArrangement.value[i];
        const noValid = [
          6, 7, 14, 15, 22, 23, 30, 31, 38, 39, 46, 54, 55, 63, 64,
        ];
        if (noValid.includes(i)) continue;
        if (
          rowOfThree.every(
            (square) => randomColorArrangement.value[square] === decidedColor
          )
        ) {
          rowOfThree.forEach(
            (square) => (randomColorArrangement.value[square] = "blank")
          );
          return true;
        }
      }
    };

    const checkForColumnOfFour = () => {
      for (let i = 0; i < 47; i++) {
        const columnOfFour = [i, i + width, i + width * 2];
        const decidedColor = randomColorArrangement.value[i];
        if (
          columnOfFour.every(
            (square) => randomColorArrangement.value[square] === decidedColor
          )
        ) {
          columnOfFour.forEach(
            (square) => (randomColorArrangement.value[square] = "blank")
          );
          return true;
        }
      }
    };
    const checkForRowOfFour = () => {
      for (let i = 0; i < width * width; i++) {
        const rowOfFour = [i, i + 1, i + 2, i + 3];
        const decidedColor = randomColorArrangement.value[i];
        const noValid = [
          5, 6, 7, 13, 14, 15, 21, 22, 23, 29, 30, 31, 37, 38, 39, 45, 46, 47,
          53, 54, 55, 63, 64,
        ];
        if (noValid.includes(i)) continue;
        if (
          rowOfFour.every(
            (square) => randomColorArrangement.value[square] === decidedColor
          )
        ) {
          rowOfFour.forEach(
            (square) => (randomColorArrangement.value[square] = "blank")
          );
          return true;
        }
      }
    };

    const moveIntoSquareBelow = () => {
      for (let i = 0; i < width * width - width; i++) {
        const firstRow = [0, 1, 2, 3, 4, 5, 6, 7];
        const isFirstRow = firstRow.includes(i);

        if (isFirstRow && randomColorArrangement.value[i] === "blank") {
          const randomColor =
            candyColors[Math.floor(candyColors.length * Math.random())];
          randomColorArrangement.value[i] = randomColor;
        }

        if (randomColorArrangement.value[i + width] === "blank") {
          randomColorArrangement.value[i + width] =
            randomColorArrangement.value[i];
          randomColorArrangement.value[i] = "blank";
        }
      }
    };

    // create game board
    createBoard();

    // run checking / matching
    setInterval(() => {
      checkForColumnOfThree();
      checkForRowOfThree();
      checkForColumnOfFour();
      checkForRowOfFour();
      moveIntoSquareBelow();
    }, 100);

    const update = () => {
      randomColorArrangement.value[
        Math.floor(randomColorArrangement.value.length * Math.random())
      ] = "";
    };

    return {
      randomColorArrangement,
      update,
      dragStart,
      dragEnd,
      dragDrop,
    };
  },
};
</script>

<style>
#app {
  display: flex;
  padding: 30px;
}
.game {
  width: 560px;
  height: 560px;
  display: flex;
  flex-wrap: wrap;
}
.game img {
  width: 70px;
  height: 70px;
}
</style>
