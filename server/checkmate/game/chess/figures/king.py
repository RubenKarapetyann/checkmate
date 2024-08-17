from .parents import FigureWithMovesCount

class King(FigureWithMovesCount):
    number = 5
    name = "king"
    
    def __init__(self, row, column, matrix, color):
        super().__init__(row, column, matrix, color)
        self.number = King.number
        self.name = King.name
        self.image = f"{super().figures_img_path}/{color}/{self.name}.png"
        self.icon = ""
        
        
        
    def get_moves(self): 
        return [
            [ self.row, self.column + 1 ],
            [ self.row + 1, self.column + 1 ],
            [ self.row + 1, self.column ],
            [ self.row + 1, self.column - 1 ],
            [ self.row, self.column - 1 ],
            [ self.row - 1, self.column - 1 ],
            [ self.row - 1, self.column ],
            [ self.row - 1, self.column + 1 ],
        ]
        
    def get_verified_moves(self):
        self.moves = self.get_moves()
        attackable_cells = self.get_attackable_cells()
        self.moves = self.confirm_moves(attackable_cells)
    
    def get_cells_under_control(self):
        self.moves = self.get_moves()
        return self.confirm_moves(defending=True)
        
    def get_attackable_cells(self):
        cells = []
        
        for row in self.matrix:
            for cell in row:
                if cell == 0 or cell.color == self.color:
                    continue
                
                cell.matrix = self.matrix
                cells += cell.get_cells_under_control()
                
                
        return cells
    
    def get_check_cells(self, *args):
        return []