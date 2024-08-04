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
    
    def get_horizontal_moves(self):
        return (
            [ [self.row, self.column + i] for i in range(1, self.m_columns - self.column) ]
            +
            [ [self.row, self.column - i] for i in range(1, self.column + 1) ]
        )

    def get_vertical_moves(self):
        return (
            [ [self.row + i, self.column] for i in range(1, self.m_rows - self.row) ]
            +
            [ [self.row - i, self.column] for i in range(1, self.row + 1) ]
        )

    def get_diagonal_moves(self): 
        return (
            [ [ self.row + i, self.column + i ] for i in range(1, min(self.m_rows - self.row, self.m_columns - self.column)) ]
            +
            [ [ self.row - i, self.column + i ] for i in range(1, min(self.row + 1, self.m_columns - self.column)) ]
            +
            [ [ self.row - i, self.column - i ] for i in range(1, min(self.row, self.column) + 1) ]
            +
            [ [ self.row + i, self.column - i ] for i in range(1, min(self.m_rows - self.row, self.column + 1)) ]
        )