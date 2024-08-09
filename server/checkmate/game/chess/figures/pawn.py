from .base import FigureBase
from ..constants import BLACK

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
        return [
            [ self.operation(self.row, 1), self.column + 1 ],
            [ self.operation(self.row, 1), self.column ],
            [ self.operation(self.row, 2), self.column ],
            [ self.operation(self.row, 1), self.column - 1 ],
        ]
        
    def operation(self, a, b):
        if self.color == BLACK:
            return a - b
        return a + b
    
                
    def get_verified_moves(self):
        self.moves = self.get_moves()
        self.moves = self.confirm_moves()
        