from .parents import FigureWithMovesCount
from ..constants import BLACK, WHITE

class Pawn(FigureWithMovesCount):
    number = 1
    name = "pawn"
    
    def __init__(self, row, column, matrix, color):
        super().__init__(row, column, matrix, color)
        self.number = Pawn.number
        self.name = Pawn.name
        self.image = f"{super().figures_img_path}/{color}/{self.name}.png"
        self.icon = ""
        
        
        
    def get_moves(self):
        row = self.operation(self.row, 1)
        moves = []
        
        if self.column + 1 < self.m_columns and self.matrix[row][self.column + 1] != 0 and self.matrix[row][self.column + 1].color != self.color:
            moves.append([ row, self.column + 1 ])
            
        if self.column - 1 >= 0 and self.matrix[row][self.column - 1] != 0 and self.matrix[row][self.column - 1].color != self.color:
            moves.append([ row, self.column - 1 ])
            
        if ((self.color == BLACK and self.row == 6) or (self.color == WHITE and self.row == 1)) and self.matrix[row][self.column] == 0 and self.matrix[self.operation(self.row, 2)][self.column] == 0:
            moves.append([ self.operation(self.row, 2), self.column ])
            
        if(self.matrix[row][self.column] == 0):
            moves.append([ row, self.column ])
        
        
        return moves
    
    def get_attacking_moves(self):
        row = self.operation(self.row, 1)
        moves = []
        
        if self.column + 1 < self.m_columns:
            moves.append([ row, self.column + 1 ])
            
        if self.column - 1 >= 0:
            moves.append([ row, self.column - 1 ])
            
        return moves
        
        
    def operation(self, a, b):
        if self.color == BLACK:
            return a - b
        return a + b
    
                
    def get_verified_moves(self):
        self.moves = self.get_moves()
    
    def get_cells_under_control(self):
        return self.get_attacking_moves()
        