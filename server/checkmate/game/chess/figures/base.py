class FigureBase:
    def __init__(self, row, column, matrix, color):
        self.row = row
        self.column = column
        self.matrix = matrix
        self.number = 0
        self.image = ""
        self.color = color
        self.icon = ""
        self.name = None
        self.m_rows = len(self.matrix)
        self.m_columns = len(self.matrix[0])
        
    def move(self):
        pass
    
    def eat(self):
        pass
    
    def get_moves(self):
        pass