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
        self.m_rows = 8 #len(self.matrix)
        self.m_columns = 8 #len(self.matrix[0])
        self.id = f"{uuid.uuid4()}"
        self.moves = []
        
    def move(self, to_row, to_column):
        # you may check if that move exists
        self.matrix[self.row][self.column] = 0
        
        self.row = to_row
        self.column = to_column
        self.matrix[to_row][to_column] = self
        
        return self.matrix
    
    
    def has_checked(self):
        self.get_verified_moves()
        
        for move in self.moves:
            cell = self.matrix[move[0]][move[1]]
            if cell and cell.number == 5 and cell.color != self.color: # King.number
                return True
            
        return False
        
    
    def get_verified_moves(self):
        pass
    
    def eat(self):
        pass
    
    def get_moves(self):
        pass
    
    def get_line_moves(self, diapason: int, define_cell, defending: bool):
        moves = []
        for i in range(1, diapason):
            row, column = define_cell(self.row, self.column, i)
            cell = self.matrix[row][column]
            if(cell == 0):
                moves.append([row, column])
                continue
            elif(cell.color == self.color):
                if defending:
                    moves.append([ row, column ])
                break
            else:
                moves.append([cell.row, cell.column])
                break
        
        return moves
            
    def get_horizontal_moves(self, defending):    
        return (
            self.get_line_moves(self.m_columns - self.column, lambda row, column, i: [row, column + i], defending)
            +
            self.get_line_moves(self.column + 1, lambda row, column, i: [row, column - i], defending)
        )

    def get_vertical_moves(self, defending):
        return (
            self.get_line_moves(self.m_rows - self.row, lambda row, column, i: [row + i, column], defending)
            +
            self.get_line_moves(self.row + 1, lambda row, column, i: [row - i, column], defending)
        )

    def get_diagonal_moves(self, defending): 
        return (
            self.get_line_moves(min(self.m_rows - self.row, self.m_columns - self.column), lambda row, column, i: [row + i, column + i], defending)
            +
            self.get_line_moves(min(self.row + 1, self.m_columns - self.column), lambda row, column, i: [row - i, column + i], defending)
            +
            self.get_line_moves(min(self.row, self.column) + 1, lambda row, column, i: [row - i, column - i], defending)
            +
            self.get_line_moves(min(self.m_rows - self.row, self.column + 1), lambda row, column, i: [row + i, column - i], defending)
        )
        
    def confirm_moves(self, attackable_cells=[], defending=False):
        moves = self.moves
        matrix = self.matrix
        matrix_len = len(self.matrix) - 1
        verified_moves = []
        
        for move in moves:
            if move[0] < 0 or move[0] > matrix_len or move[1] < 0 or move[1] > matrix_len:
                continue
            
            cell = matrix[move[0]][move[1]]
            if not defending and cell != 0 and cell.color == self.color:
                continue
            
            # not the best solution
            if len([cell for cell in attackable_cells if cell[0] == move[0] and cell[1] == move[1]]) > 0:
                continue
            
            verified_moves.append(move)
            
        return verified_moves
        
    def __str__(self):
        return f"{self.color} {self.name}"
    
    __repr__ = __str__
    
    
    def get_db_dict(self):
        return {
            "id" : self.id,
            "color" : self.color,
            "number" : self.number,
            "row" : self.row,
            "column" : self.column
        }
        
        
    def get_client_dict(self):
        return {
            "image" : self.image,
            "id" : self.id,
            "color" : self.color,
            "number" : self.number
        }