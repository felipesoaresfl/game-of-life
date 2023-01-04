<template>
  <div>
    <h1>Vue Life</h1>
    <table>
      <tr v-for="line in grid" :key="line">
        <td v-for="cell in line" :key="cell" :class="{alive: cell==1}"></td>
      </tr>
    </table>
    <h3>Conway's Game of Life - Versão 1.0</h3>
  </div>
</template>

<script>
export default {
  data() {
    return {
      grid: [
        [0,0,0,0,1,0,0,0,0,0,1,0,0,0,0],
        [0,0,0,0,1,0,0,0,0,0,1,0,0,0,0],
        [0,0,0,0,1,0,0,0,0,0,1,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [1,1,1,0,0,0,1,1,1,0,0,0,1,1,1],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,1,0,0,0,0,0,0,0,0,1,0],
        [0,0,0,0,1,0,1,0,0,0,0,1,0,1,0],
        [0,0,0,0,1,1,0,0,0,0,0,0,1,1,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0],
        [0,0,0,0,0,0,1,1,1,0,0,0,0,0,0],
        [1,1,1,0,0,0,0,0,0,0,0,0,1,1,1],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      ]
    }
  },
  methods: {
    turnAlive() {
      this.grid = this.nextState(this.grid)
    },

    countNeighboorsAlive(i, j, grid) {
      const [M, N] = [grid.length, grid[0].length]
      const delta_coord = [
        [-1, -1], [-1, 0], [-1, 1],
        [0, -1], [0, 1],
        [1, -1], [1, 0], [1, 1],
      ]
      let coord_neighboors = []
      for (let k = 0; k < delta_coord.length; k++) {
        coord_neighboors.push([i + delta_coord[k][0], j + delta_coord[k][1]])
      }
      let coord_neighboors_alive = coord_neighboors.filter((e) => e[0] >= 0 && e[0] < M && e[1] >= 0 && e[1] < N && grid[e[0]][e[1]] == 1)
      return coord_neighboors_alive.length
    },
    
    nextState(grid) {
      const [M, N] = [grid.length, grid[0].length]
      let newGrid = JSON.parse(JSON.stringify(this.grid))
      for (let i = 0; i < M; i++) {
        for (let j = 0; j < N; j++) {
          let neighboorsAlive = this.countNeighboorsAlive(i, j, grid)
          if (grid[i][j] == 1) {
            if (neighboorsAlive == 2 || neighboorsAlive == 3) {
              newGrid[i][j] = 1
            } else {
              newGrid[i][j] = 0
            }
          } else {
            if (neighboorsAlive == 3) {
              newGrid[i][j] = 1
            } else {
              newGrid[i][j] = 0
            }
          }
        }
      }
    return newGrid
    },
  },
  mounted() {
    setInterval(() => {
        this.turnAlive()
    }, 1000)
  },
}

</script>

<style>
  table {
    margin-right: auto;
    margin-left: auto;
  }
  td {
    border: 1px solid #000;
    width: 28px;
    height: 28px;
  }
  .alive {
    background-color: #7d5bed;
  }
  p {
    padding-top: 20px;
  }
  a {
    color: #7d5bed;
    text-decoration: none;
  }
  a:hover {
    padding: 6px;
    border-radius: 5px;
    background-color: #7d5bed;
    color: #ffffff;
  }
  i {
  width: 50px;
  height: 50px;
  }
</style>