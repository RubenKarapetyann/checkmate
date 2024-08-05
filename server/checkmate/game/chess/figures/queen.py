from .base import FigureBase

class Queen(FigureBase):
    number = 6
    name = "queen"
    
    def __init__(self, row, column, matrix, color):
        super().__init__(row, column, matrix, color)
        self.number = Queen.number
        self.name = Queen.name
        self.image = f"{FigureBase.figures_img_path}/{color}/{self.name}.png"
        self.icon = ""
        self.moves = self.get_moves()
        
        
    def get_moves(self):
        return self.get_horizontal_moves() + self.get_vertical_moves() + self.get_diagonal_moves()
        