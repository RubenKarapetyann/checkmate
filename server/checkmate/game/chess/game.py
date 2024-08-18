from .figures.base import FigureBase
from .constants import CHECK, CHECKMATE, STALEMATE, REGULAR

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
        game_state = self.get_game_state(figure)
        
        return [new_matrix, game_state]
    
    def get_game_state(self, figure: FigureBase):
        figure.moves = figure.get_moves()
        figure.moves = figure.confirm_moves()
        
        checked = figure.has_checked()
        available_to_move = False
        
        for row in self.matrix:
            for cell in row:
                if cell == 0 or cell.color == figure.color:
                    continue
                
                moves, number, id = self.get_moves(cell.row, cell.column)
                
                if len(moves) > 0:
                    available_to_move = True
                    break
                
        if checked and available_to_move:
            return CHECK
        elif checked and not available_to_move:
            return CHECKMATE
        elif not checked and not available_to_move:
            return STALEMATE
        else:
            return REGULAR
                