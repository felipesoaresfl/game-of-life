import time
import pygame
import numpy

COLOR_BACKGROUND = (0, 0, 0)
COLOR_GRID = (110, 110, 110)
COLOR_DYING = (174, 97, 250)
COLOR_ALIVE = (72, 61, 139)


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
