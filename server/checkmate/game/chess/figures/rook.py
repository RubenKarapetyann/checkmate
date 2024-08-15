from .parents import FigureWithMovesCount

class Rook(FigureWithMovesCount):
    number = 4
    name = "rook"
    
    def __init__(self, row, column, matrix, color):
        super().__init__(row, column, matrix, color)
        self.number = Rook.number
        self.name = Rook.name
        self.image = f"{super().figures_img_path}/{color}/{self.name}.png"
        self.icon = ""
        
        
    def get_moves(self, defending=False):
        return self.get_horizontal_moves(defending) + self.get_vertical_moves(defending)
        
    def get_verified_moves(self):
        self.moves = self.get_moves()
        
    def get_cells_under_control(self):
        return self.get_moves(defending=True)