import time
import pygame
import numpy

COLOR_BACKGROUND = (0, 0, 0)
COLOR_GRID = (110, 110, 110)
COLOR_DYING = (127, 255, 0)
COLOR_ALIVE = (50, 205, 50)

pygame.display.set_caption("PyGame of Life - Felipe Soares")


def update(screen, cells, size, progress=False):
    update_cells = numpy.zeros((cells.shape[0], cells.shape[1]))

    for row, col in numpy.ndindex(cells.shape):
        alive = numpy.sum(cells[row-1:row+2, col-1:col+2]) - cells[row, col]
        color = COLOR_BACKGROUND if cells[row, col] == 0 else COLOR_ALIVE

        if cells[row, col] == 1:
            if alive < 2 or alive > 3:
                if progress:
                    color = COLOR_DYING
            elif 2 <= alive <= 3:
                update_cells[row, col] = 1
                if progress:
                    color = COLOR_ALIVE
        else:
            if alive == 3:
                update_cells[row, col] = 1
                if progress:
                    color = COLOR_ALIVE

        pygame.draw.rect(screen, color, (col * size, row * size, size - 1, size - 1))

    return update_cells


def main():
    pygame.init()
    screen = pygame.display.set_mode((800, 600))

    cells = numpy.zeros((100, 120))
    screen.fill(COLOR_GRID)
    update(screen, cells, 20)

    pygame.display.flip()
    pygame.display.update()

    running = False

    while True:
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                pygame.quit()
                return
            elif event.type == pygame.KEYDOWN:
                if event.key == pygame.K_SPACE:
                    running = not running
                    update(screen, cells, 20)
                    pygame.display.update()
            if pygame.mouse.get_pressed()[0]:
                pos = pygame.mouse.get_pos()
                cells[pos[1] // 20, pos[0] // 20] = 1
                update(screen, cells, 20)
                pygame.display.update()

        screen.fill(COLOR_GRID)

        if running:
            cells = update(screen, cells, 20, progress=True)
            pygame.display.update()

        time.sleep(0.05)


if __name__ == '__main__':
    main()
