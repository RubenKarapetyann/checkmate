from .base import FigureBase

class FigureWithMovesCount(FigureBase):
    def __init__(self, row, column, matrix, color):
        super().__init__(row, column, matrix, color)
        self.moves_count = 0
        
    def get_db_dict(self):
        dict = super().get_db_dict()
        dict["moves_count"] = self.moves_count
        return dict

    def move(self, to_row, to_column):
        self.moves_count += 1
        return super().move(to_row, to_column)
        