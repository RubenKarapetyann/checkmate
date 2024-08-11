from .base import FigureBase

class Bishop(FigureBase):
    number = 3
    name = "bishop"
    
    def __init__(self, row, column, matrix, color):
        super().__init__(row, column, matrix, color)
        self.number = Bishop.number
        self.name = Bishop.name
        self.image = f"{FigureBase.figures_img_path}/{color}/{self.name}.png"
        self.icon = ""
        
    def get_verified_moves(self):
        self.moves = self.get_diagonal_moves()
        