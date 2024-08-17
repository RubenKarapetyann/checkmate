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
    
    def get_line_moves(self, diapason: int, define_cell, defending: bool, check_only: bool, caller):
        moves = []
        king_in_line = False
        first_figure_before_king = False
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
                if check_only and self.matrix[row][column].number == 5:
                    king_in_line = True
                    moves.append([cell.row, cell.column])
                    break
                elif check_only and caller.row == cell.row and caller.column == cell.column:
                    first_figure_before_king = True
                    moves.append([cell.row, cell.column])
                    continue
                    
                moves.append([cell.row, cell.column])
                if defending and self.matrix[row][column].number == 5:
                    continue
                else:
                    break

        
        if check_only and first_figure_before_king and king_in_line:
            return moves
        
        if check_only and not king_in_line:
            return []
        
        return moves

    
             
    def get_horizontal_moves(self, defending, check_only, caller):    
        return (
            self.get_line_moves(self.m_columns - self.column, lambda row, column, i: [row, column + i], defending, check_only, caller)
            +
            self.get_line_moves(self.column + 1, lambda row, column, i: [row, column - i], defending, check_only, caller)
        )

    def get_vertical_moves(self, defending, check_only, caller):
        return (
            self.get_line_moves(self.m_rows - self.row, lambda row, column, i: [row + i, column], defending, check_only, caller)
            +
            self.get_line_moves(self.row + 1, lambda row, column, i: [row - i, column], defending, check_only, caller)
        )

    def get_diagonal_moves(self, defending, check_only, caller): 
        return (
            self.get_line_moves(min(self.m_rows - self.row, self.m_columns - self.column), lambda row, column, i: [row + i, column + i], defending, check_only, caller)
            +
            self.get_line_moves(min(self.row + 1, self.m_columns - self.column), lambda row, column, i: [row - i, column + i], defending, check_only, caller)
            +
            self.get_line_moves(min(self.row, self.column) + 1, lambda row, column, i: [row - i, column - i], defending, check_only, caller)
            +
            self.get_line_moves(min(self.m_rows - self.row, self.column + 1), lambda row, column, i: [row + i, column - i], defending, check_only, caller)
        )
        
    def confirm_moves(self, attackable_cells=[], defending=False, allowed_cells=[]):
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
            
            if len(allowed_cells) > 0:
                if not (len([cell for cell in allowed_cells if cell[0] == move[0] and cell[1] == move[1]]) > 0):
                    continue
                                
            
            verified_moves.append(move)
            
        return verified_moves
    

    def get_allowed_cells(self):
        cells = []
        
        for row in self.matrix:
            for cell in row:
                if cell == 0 or cell.color == self.color:
                    continue
                
                cell.matrix = self.matrix
                cells += cell.get_check_cells(self)
                
        return cells
    
            
        
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