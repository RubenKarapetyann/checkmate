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
        self.moves = self.confirm_moves()