<template>
  <div id="app">
    <div class="game">
      <img
        v-for="(candy, i) in randomColorArrangement"
        :key="i"
        :style="`background-color:${candy}`"
        @click="update"
        draggable
      />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const width = 8;
    const candyColors = ["blue", "green", "orange", "yellow", "purple", "red"];

    const randomColorArrangement = ref([]);

    const createBoard = () => {
      for (let i = 0; i < width * width; i++) {
        const randomColor =
          candyColors[Math.floor(candyColors.length * Math.random())];
        randomColorArrangement.value.push(randomColor);
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
            (square) => (randomColorArrangement.value[square] = "")
          );
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
            (square) => (randomColorArrangement.value[square] = "")
          );
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
            (square) => (randomColorArrangement.value[square] = "")
          );
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
            (square) => (randomColorArrangement.value[square] = "")
          );
        }
      }
    };

    const moveIntoSquareBelow = () => {
      for (let i = 0; i < width * width - width; i++) {
        const firstRow = [0, 1, 2, 3, 4, 5, 6, 7];
        const isFirstRow = firstRow.includes(i);

        if (isFirstRow && randomColorArrangement.value[i] === "") {
          const randomColor =
            candyColors[Math.floor(candyColors.length * Math.random())];
          randomColorArrangement.value[i] = randomColor;
        }

        if (randomColorArrangement.value[i + width] === "") {
          randomColorArrangement.value[i + width] =
            randomColorArrangement.value[i];
          randomColorArrangement.value[i] = "";
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

    return { randomColorArrangement, update };
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
