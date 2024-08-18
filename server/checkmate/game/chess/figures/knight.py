from .base import FigureBase

class Knight(FigureBase):
    number = 2
    name = "knight"
    
    def __init__(self, row, column, matrix, color):
        super().__init__(row, column, matrix, color)
        self.number = Knight.number
        self.name = Knight.name
        self.image = f"{FigureBase.figures_img_path}/{color}/{self.name}.png"
        self.icon = ""
        
        
        
    def get_moves(self):
        return [
            [ self.row - 1, self.column - 2 ],
            [ self.row - 2, self.column - 1 ],
            [ self.row - 2, self.column + 1 ],
            [ self.row - 1, self.column + 2 ],
            [ self.row + 1, self.column + 2 ],
            [ self.row + 2, self.column + 1 ],
            [ self.row + 2, self.column - 1 ],
            [ self.row + 1, self.column - 2 ],
        ]
        
            
    def get_verified_moves(self):
        self.moves = self.get_moves()
        allowed_cells = self.get_allowed_cells()
        self.moves = self.confirm_moves(allowed_cells=allowed_cells)
        
    def get_cells_under_control(self):
        self.moves = self.get_moves()
        return self.confirm_moves(defending=True)
    
    def get_check_cells(self, *args):
        self.moves = self.get_moves()
        self.moves = self.confirm_moves()
        
        if self.has_checked():
            return [[self.row, self.column]]
        else:
            return []
        