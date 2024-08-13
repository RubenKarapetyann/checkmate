from .figures.base import FigureBase

class Chess:
    def __init__(self, moves_count, mode, matrix, white_id, black_id):
        self.moves_count = moves_count
        self.mode = mode
        self.matrix = matrix
        self.white_id = white_id
        self.black_id = black_id
    
    def get_moves(self, row, column):
        figure: FigureBase = self.matrix[row][column]
        figure.matrix = self.matrix
        figure.get_verified_moves()
        
        return [figure.moves, figure.number, figure.id]
    
    
    def move(self, row, column, to_row, to_column):
        figure: FigureBase = self.matrix[row][column]
                            
        figure.matrix = self.matrix
        new_matrix = figure.move(to_row, to_column)
        
        return new_matrix