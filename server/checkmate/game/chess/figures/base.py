class FigureBase:
    def __init__(self, row, column, matrix):
        self.row = row
        self.column = column
        self.matrix = matrix
        self.moves = []
        self.number = 0
        self.image = ""
        self.color = None
        self.icon = ""
        self.name = None
        self.m_rows = len(self.matrix)
        self.m_columns = len(self.matrix[0])
        
    def move(self):
        pass
    
    def eat(self):
        pass
