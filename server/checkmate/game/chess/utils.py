from .constants import DEFAULT_MATRIX, WHITE, BLACK, FIGURES_LINE
from .figures.pawn import Pawn
from .figures.layout import figures

def get_initial_matrix():
    matrix = DEFAULT_MATRIX.copy()

    white_pawns = [Pawn(1, column, [[]], WHITE) for column in range(0, 8)]
    black_pawns = [Pawn(6, column, [[]], BLACK) for column in range(0, 8)]
    
    white_figures = [figures[number - 1](0, index, [[]], WHITE) for index, number in enumerate(FIGURES_LINE)]
    black_figures = [figures[number - 1](0, index, [[]], BLACK) for index, number in enumerate(FIGURES_LINE)]
    
    matrix[0] = white_figures
    matrix[1] = white_pawns
    
    matrix[6] = black_pawns
    matrix[7] = black_figures
    
    return matrix
