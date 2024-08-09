from .base import FigureBase
from ..constants import BLACK, WHITE

class Pawn(FigureBase):
    number = 1
    name = "pawn"
    
    def __init__(self, row, column, matrix, color):
        super().__init__(row, column, matrix, color)
        self.number = Pawn.number
        self.name = Pawn.name
        self.image = f"{FigureBase.figures_img_path}/{color}/{self.name}.png"
        self.icon = ""
        
        
        
    def get_moves(self):
        row = self.operation(self.row, 1)
        moves = [[ row, self.column ]]
        
        if self.column + 1 < self.m_columns and self.matrix[row][self.column + 1] != 0:
            moves.append([ row, self.column + 1 ])
            
        if self.column - 1 >= 0 and self.matrix[row][self.column - 1] != 0:
            moves.append([ row, self.column - 1 ])
            
        if (self.color == BLACK and self.row == 6) or (self.color == WHITE and self.row == 1):
            moves.append([ self.operation(self.row, 2), self.column ])
            
        return moves
        
    def operation(self, a, b):
        if self.color == BLACK:
            return a - b
        return a + b
    
                
    def get_verified_moves(self):
        self.moves = self.get_moves()
        self.moves = self.confirm_moves()
        