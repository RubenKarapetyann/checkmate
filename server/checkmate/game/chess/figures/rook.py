from .base import FigureBase

class Rook(FigureBase):
    number = 4
    name = "rook"
    
    def __init__(self, row, column, matrix, color):
        super().__init__(row, column, matrix, color)
        self.number = Rook.number
        self.name = Rook.name
        self.image = f"{FigureBase.figures_img_path}/{color}/{self.name}.png"
        self.icon = ""
        
        
    def get_moves(self):
        return self.get_horizontal_moves() + self.get_vertical_moves()
        
    def get_verified_moves(self):
        self.moves = self.get_moves()