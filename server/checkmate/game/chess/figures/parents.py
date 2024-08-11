from .base import FigureBase

class FigureWithMovesCount(FigureBase):
    def __init__(self, row, column, matrix, color):
        super().__init__(row, column, matrix, color)
        self.moves_count = 0
        
    def get_db_dict(self):
        dict = super().get_db_dict()
        dict["moves_count"] = self.moves_count
        return dict
