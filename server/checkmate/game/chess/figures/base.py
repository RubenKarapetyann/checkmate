import uuid

class FigureBase:
    figures_img_path = "images/game/figures/classic"
    
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
        self.id = f"{uuid.uuid4()}"
        self.moves = []
        
    def move(self):
        pass
    
    def get_verified_moves(self):
        pass
    
    def eat(self):
        pass
    
    def get_moves(self):
        pass
    
    def get_line_moves(self, diapason: int, define_cell):
        moves = []
        for i in range(1, diapason):
            cell = define_cell(self.row, self.column, i, self.matrix)
            if(cell == 0):
                moves.append([cell.row, cell.column])
                continue
            elif(cell.color == self.color):
                break
            else:
                moves.append([cell.row, cell.column])
                break
        
        return moves
            
    def get_horizontal_moves(self):    
        return (
            self.get_line_moves(self.m_columns - self.column, lambda row, column, i, matrix: matrix[row][column + i])
            +
            self.get_line_moves(self.column + 1, lambda row, column, i, matrix: matrix[row][column - i])
        )

    def get_vertical_moves(self):
        return (
            self.get_line_moves(self.m_rows - self.row, lambda row, column, i, matrix: matrix[row + i][column])
            +
            self.get_line_moves(self.row + 1, lambda row, column, i, matrix: matrix[row - i][column])
        )

    def get_diagonal_moves(self): 
        return (
            self.get_line_moves(min(self.m_rows - self.row, self.m_columns - self.column), lambda row, column, i, matrix: matrix[row + i][column + i])
            +
            self.get_line_moves(min(self.row + 1, self.m_columns - self.column), lambda row, column, i, matrix: matrix[row - i][column + i])
            +
            self.get_line_moves(min(self.row, self.column) + 1, lambda row, column, i, matrix: matrix[row - i][column - i])
            +
            self.get_line_moves(min(self.m_rows - self.row, self.column + 1), lambda row, column, i, matrix: matrix[row + i][column - i])
        )
        
    def confirm_moves(self):
        moves = self.moves
        matrix = self.matrix
        matrix_len = len(self.matrix) - 1
        verified_moves = []
        
        for move in moves:
            if move[0] < 0 or move[0] > matrix_len or move[1] < 0 or move[1] > matrix_len:
                continue
            
            cell = matrix[move[0]][move[1]]
            if cell != 0 and cell.color == self.color:
                continue
            
            verified_moves.append(move)
            
        return verified_moves
        