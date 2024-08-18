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
        
        
    def get_moves(self, defending=False, check_only=False, caller=None):
        return self.get_horizontal_moves(defending, check_only, caller) + self.get_vertical_moves(defending, check_only, caller) + self.get_diagonal_moves(defending, check_only, caller)
    
    def get_verified_moves(self):
        self.moves = self.get_moves()
        allowed_cells = self.get_allowed_cells()
        self.moves = self.confirm_moves(allowed_cells=allowed_cells)
        
    def get_cells_under_control(self):
        return self.get_moves(defending=True)
        
    def get_check_cells(self, caller):        
        cells = self.get_moves(check_only=True, caller=caller)
        if len(cells) > 0:
            cells += [[self.row, self.column]]
            
        return cells